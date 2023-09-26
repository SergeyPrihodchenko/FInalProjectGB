import React from "react";
import s from "./AppLink.module.css";
import cn from "classnames";
import PropTypes from "prop-types";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { usePage } from "@inertiajs/react";

function AppLink(props) {
    const { url, component } = usePage();
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


    // !!!!!!!!!!!!!!!!!! https://inertiajs.com/links
    // const active = url === window.location.pathname ? true : false;
    // console.log("url", url);
    // console.log("href", href);
    // console.log("param", param);
    // console.log("path", path);

    return (
        <Link
            {...props}
            href={href ? href : route(path, param)}
            className={cn(
                s.appLink,
                s[sizeText],
                s[colorType],

                // { [s.bold]: bold, [s.active]: active },
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
