import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import s from "./AppSelect.module.css";
import AppText from "../AppText/AppText";
function AppSelect(props) {
    const {
        label,
        name,
        id,
        onChange,
        value,
        className,
        options,
        error,
        ...otherProps
    } = props;
    return (
        <div className={cn(s.selectWrapper, className)}>
            {label && (
                <AppText title={label} bold size={"xs"} className={s.label} />
            )}
            <select
                {...otherProps}
                className={cn(s.select)}
                name={name}
                id={id}
                onChange={onChange}
                value={value}
            >
                <option value="">Не выбран</option>
                {options &&
                    options.map((optionItem) => {
                        return (
                            <option key={optionItem} value={optionItem}>
                                {optionItem}
                            </option>
                        );
                    })}
            </select>
            {error && (
                <AppText
                    size={"s"}
                    className={s.error}
                    text={error}
                    variant={"cancel"}
                />
            )}
        </div>
    );
}

AppSelect.propTypes = {};

export default AppSelect;
