import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import s from "./AppButton.module.css";
import { Link } from "@inertiajs/react";
function AppButton(props) {
    const {
        href,
        param,
        path,
        children,
        onClick,
        className,
        variant = "filled",
        sizeText = "m",
        width,
        height,
        bold,
        disabled,
        colorType,
        rounded,
        ...otherProps
    } = props;

    return (
        <>
            {href || (path && param) ? (
                <Link
                    {...props}
                    href={href ? href : route(path, param)}
                    style={{ width: width, height: height }}
                    className={cn(
                        s.appButton,
                        s.appButtonLink,
                        s[variant],
                        s[colorType],
                        s[sizeText],
                        className,
                        {
                            [s.rounded]: rounded,
                            [s.bold]: bold,
                            [s.disabled]: disabled,
                        }
                    )}
                    {...otherProps}
                    onClick={onClick}
                >
                    {children}
                </Link>
            ) : (
                <button
                    style={{ width: width, height: height }}
                    className={cn(
                        s.appButton,
                        className,
                        s[variant],
                        s[colorType],
                        s[sizeText],
                        {
                            [s.rounded]: rounded,
                            [s.bold]: bold,
                            [s.disabled]: disabled,
                        }
                    )}
                    {...otherProps}
                    onClick={onClick}
                >
                    {children}
                </button>
            )}
        </>
    );
}

AppButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    width: PropTypes.string,
    height: PropTypes.string,
    children: PropTypes.any,
    variant: PropTypes.oneOf(["filled", "outline", "clear"]),
    colorType: PropTypes.oneOf([
        "normal",
        "succes",
        "hint",
        "cancel",
        "accent",
        "notAccent",
    ]),
    sizeText: PropTypes.oneOf(["xs", "s", "m", "l", "xl"]),
};
export default AppButton;
