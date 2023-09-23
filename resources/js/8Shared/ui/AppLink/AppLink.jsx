import React from "react";
import s from "./AppLink.module.css";
import cn from "classnames";
import PropTypes from "prop-types";
import { Link } from "@inertiajs/react";
import { useState } from "react";

function AppLink(props) {
    const {
        href,
        param,
        path,
        className,
        children,
        sizeText = "s",
        bold,
        colorType = "primary",
    } = props;

    return (
        <Link
            {...props}
            href={href ? href : route(path, param)}
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
    bold: PropTypes.bool,
};

export default AppLink;
