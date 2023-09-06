import React from 'react'
import s from "./AppLink.module.css"
import cn from "classnames"
import PropTypes from 'prop-types'
import { Link } from '@inertiajs/react'

function AppLink({ path, param, className, children }) {
    return (
        <Link href={route(path, param)} className={cn(s.appLink, className)}>
            {children}
        </Link>
    )
}

AppLink.propTypes = {}

export default AppLink
