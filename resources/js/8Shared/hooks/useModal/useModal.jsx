
import PropTypes from "prop-types";
import { useEffect, useCallback, useState, useRef } from "react";

export const useModal = ({ animationDelay, onClose, isOpen }) => {
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef();
    const handleClose = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay)
        }
    }, [onClose, animationDelay]);
    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    }, [handleClose]);


    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown)
        }
        return () => {
            clearTimeout(timerRef);
            window.removeEventListener('keydown', handleKeyDown)

        }
    }, [isOpen, handleKeyDown]);

    return {
        isClosing,
        handleClose
    }
}

useModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    animationDelay: PropTypes.number
}