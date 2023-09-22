import { useState } from "react";
import s from "./Checkbox.module.css";
import cn from "classnames";

const Checkbox = ({
    label,
    isChecked,
    checkHandler,
    value,
    variant,
    className,
    ...props
}) => {
    return (
        <div className={cn(s.checkboxField, className)}>
            <label className={cn(s.checkboxWrapper, s[variant])}>
                <input
                    type="checkbox"
                    name=""
                    id=""
                    value={value}
                    checked={isChecked}
                    onChange={checkHandler}
                    {...props}
                />
                <span>{label}</span>
            </label>
        </div>
    );
};

export default Checkbox;
