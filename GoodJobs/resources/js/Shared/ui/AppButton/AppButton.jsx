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
        width = "240px",
        height = "40px",
        ...otherProps
    } = props;
    return (
        <button
            style={{ width: width, height: height }}
            className={cn(s.appButton, className, s[variant])}
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
    variant: PropTypes.oneOf(["filled", "outline", "clear"]),
    size: PropTypes.oneOf(["s", "m", "l"]),
};
export default AppButton;
