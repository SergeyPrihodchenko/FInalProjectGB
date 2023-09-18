import React from "react";
import PropTypes from "prop-types";
import s from "./AppInput.module.css";
import cn from "classnames";

function AppInput(props) {
    const {
        label,
        placeholder = "",
        type = "text",
        borderRadius = "radiusS",
        fullWidth,
        width = "760px",
        textBold = true,
        className,
    } = props;
    return (
        <div className={cn(s.appInput, className)}>
            {label && <p className={cn({ [s.textBold]: textBold })}>{label}</p>}
            <input
                type={type}
                placeholder={placeholder}
                className={cn(s.input, s[borderRadius], {
                    [s.fullWidth]: fullWidth,
                })}
                style={{ width: width }}
            />
        </div>
    );
}

AppInput.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    borderRadius: PropTypes.oneOf([
        "radiusL",
        "radiusM",
        "radiusS",
        "radiusNone",
    ]),
    border: PropTypes.oneOf(["l", "m", "s", "none"]),
    fullWidth: PropTypes.bool,
    width: PropTypes.string,
    textBold: PropTypes.bool,
};

export default AppInput;
