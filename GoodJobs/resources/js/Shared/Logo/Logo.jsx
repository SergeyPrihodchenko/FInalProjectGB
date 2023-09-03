import { Link } from '@inertiajs/react';
import s from './Logo.module.css';


export const Logo = ({ src, alt, href }) => {
    return (
        <Link href={href}>
            <img src={src} alt={alt} />
        </Link>
    )
}