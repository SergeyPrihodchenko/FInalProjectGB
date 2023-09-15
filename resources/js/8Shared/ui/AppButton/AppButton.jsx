import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import s from "./AppButton.module.css";
function AppButton(props) {
    const {
        children,
        onClick,
        className,
        variant = "filled",
        sizeText = "m",
        width = "240px",
        height = "40px",
        bold,
        disabled,
        colorType,
        rounded,
        ...otherProps
    } = props;
    return (
        <button
            style={{ width: width, height: height }}
            className={cn(
                s.appButton,
                className,
                s[variant],
                s[colorType],
                s[sizeText],
                {
                    [s.rounded]: rounded,
                    [s.bold]: bold,
                    [s.disabled]: disabled,
                }
            )}
            {...otherProps}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

AppButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    width: PropTypes.string,
    height: PropTypes.string,
    children: PropTypes.any,
    variant: PropTypes.oneOf(["filled", "outline", "clear"]),
    colorType: PropTypes.oneOf(["normal", "succes", "cancel", "accent"]),
    sizeText: PropTypes.oneOf(["xs", "s", "m", "l", "xl"]),
};
export default AppButton;
