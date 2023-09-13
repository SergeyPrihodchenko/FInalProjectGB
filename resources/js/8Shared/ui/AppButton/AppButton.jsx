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
        rounded,
        ...otherProps
    } = props;
    return (
        <button
            style={{ width: width, height: height }}
            className={cn(s.appButton, className, s[variant], s[sizeText], {
                [s.rounded]: rounded,
                [s.bold]: bold,
            })}
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
    width: PropTypes.string,
    height: PropTypes.string,
    children: PropTypes.any,
    variant: PropTypes.oneOf(["filled", "outline","accentOutline", "clear"]),
    sizeText: PropTypes.oneOf(["xs", "s", "m", "l", "xl"]),
};
export default AppButton;
