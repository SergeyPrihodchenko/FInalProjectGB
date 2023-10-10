import s from "./Modal.module.css";
import cn from "classnames";
import PropTypes from "prop-types";
import { Portal } from "../Portal/Portal";
import { useModal } from "@/8Shared/hooks/useModal/useModal";
// import { useTheme } from "@/app/providers/ThemeProvider";

// import { Overlay } from "../../redesigned/Overlay/Overlay";

const ANIMATION_DELAY = 300;

export const Modal = (props) => {
    const {
        className,
        children,
        isOpen,
        onClose = true,
        closeIcon,
        lazy,
    } = props;

    const { handleClose, isClosing } = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });

    // const { close, isClosing, isMounted } = useModal({
    //     animationDelay: ANIMATION_DELAY,
    //     onClose,
    //     isOpen,
    // });

    // const { theme } = useTheme();

    // const mods: Mods = {
    //     [s.opened]: isOpen,
    //     [s.isClosing]: isClosing,
    // };

    //   className={classNames(s.modal, mods, [
    //     className,
    //     theme,
    //     "app_modal",
    //     toggleFeatures({
    //         name: "isAppRedesigned",
    //         on: () => s.modalNew,
    //         off: () => s.modalOld,
    //     }),
    // ])}

    // if (lazy && !isMounted) {
    //     return null;
    // }

    const handleContent = (e) => {
        e.stopPropagation();
    };

    return (
        <Portal elem={document.getElementById("themeBlock") ?? document.body}>
            <div
                className={cn(s.modal, className, {
                    [s.opened]: isOpen,
                    [s.isClosing]: isClosing,
                })}
            >
                <div className={s.overlay} onClick={handleClose}>
                    <div className={s.content} onClick={handleContent}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
Modal.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
};
