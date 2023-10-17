import React from "react";
import PropTypes from "prop-types";
import AppText from "../AppText/AppText";
import cn from "classnames";
import s from "./AppTextarea.module.css";
function AppTextarea(props) {
    const { label, onChange, value, placeholder, error } = props;
    return (
        <div className={s.appTextareaWrapper}>
            {label && (
                <AppText title={label} bold size={"xs"} className={s.label} />
            )}

            <textarea
                className={s.textarea}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
            />

            {error && (
                <AppText
                    size={"s"}
                    className={s.error}
                    text={error}
                    variant={"error"}
                />
            )}
        </div>
    );
}

AppTextarea.propTypes = {};

export default AppTextarea;
