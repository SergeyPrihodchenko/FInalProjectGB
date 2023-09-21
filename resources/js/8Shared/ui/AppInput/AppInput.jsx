import React, { forwardRef, useEffect, useRef } from "react";
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
        isFocused = false,
        errorMessage,
        onChange,
        ref,
        className,
    } = props;
    const input = ref ? ref : useRef();
    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className={cn(className, s.appInput)}>
            {label && <p className={cn({ [s.textBold]: textBold })}>{label}</p>}
            <input
                onChange={onChange}
                type={type}
                placeholder={placeholder}
                className={cn(s.input, s[borderRadius], {
                    [s.fullWidth]: fullWidth,
                })}
                style={{ width: width }}
                ref={input}
            />
            {errorMessage && <p className={s.error}>{errorMessage}</p>}
        </div>
    );
}

AppInput.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    errorMessage: PropTypes.string,
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
    isFocused: PropTypes.bool,
    onChange: PropTypes.func,
};

export default AppInput;
