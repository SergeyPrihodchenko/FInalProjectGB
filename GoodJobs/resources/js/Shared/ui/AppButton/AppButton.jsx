import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import s from "./AppButton.module.css";
export function AppButton(props) {
    const { className, children, variant } = props;
    return (
        <button className={cn(s.appButton, className, s[variant])}>
            {children}
        </button>
    );
}

AppButton.propTypes = {
    className: PropTypes.string,
    
    children: PropTypes.string,
    variant: PropTypes.oneOf(["filled ", "outline", "clear"]),
};
AppButton.defaultProps = {
    variant: "filled",
};
