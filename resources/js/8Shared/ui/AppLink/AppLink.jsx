import React from "react";
import s from "./AppLink.module.css";
import cn from "classnames";
import PropTypes from "prop-types";
import { Link } from "@inertiajs/react";

function AppLink(props) {
    const {
        path = "main",
        param,
        className,
        children,
        sizeText = "s",
        bold,
        colorType = "primary",
    } = props;
    return (
        <Link
            {...props}
            href={route(path, param)}
            className={cn(
                s.appLink,
                s[sizeText],
                s[colorType],
                { [s.bold]: bold },
                className
            )}
        >
            {children}
        </Link>
    );
}

AppLink.propTypes = {
    sizeText: PropTypes.oneOf(["xs", "s", "m", "l", "xl"]),
    colorType: PropTypes.oneOf(["accent", "primary", "secondary"]),
};

export default AppLink;
