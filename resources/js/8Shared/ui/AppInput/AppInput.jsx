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
        readOnly,
        value,
    } = props;
    const input = ref ? ref : useRef();
    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className={cn(className, s.appInput)}>
            {label && (
                <p className={cn(s.label, { [s.textBold]: textBold })}>
                    {label}
                </p>
            )}
            <input
                value={value}
                {...props}
                readOnly={readOnly}
                onChange={onChange}
                type={type}
                placeholder={placeholder}
                className={cn(s.input, s[borderRadius], {
                    [s.fullWidth]: fullWidth,
                    [s.readOnly]: readOnly,
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
