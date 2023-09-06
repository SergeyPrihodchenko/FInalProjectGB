import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import s from "./AppButton.module.css";
export function AppButton(props) {
    const {
        className,
        children,
        variant = "filled",
        width = "240px",
        height = "40px",
    } = props;
    return (
        <button
            style={{ width: width, height: height }}
            className={cn(s.appButton, className, s[variant])}
        >
            {children}
        </button>
    );
}

AppButton.propTypes = {
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    children: PropTypes.any,
    variant: PropTypes.oneOf(["filled", "outline", "clear"]),
    size: PropTypes.oneOf(["s", "m", "l"]),
};
