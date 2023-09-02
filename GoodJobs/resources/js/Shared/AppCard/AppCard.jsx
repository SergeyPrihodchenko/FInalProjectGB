import s from './AppCard.module.css';
import { Typography } from '../Typography/Typography';

import cn from 'classnames';
import { Link } from '@inertiajs/react';


export const AppCard = ({
    card,
    width,
    minHeight,
    borderRight
}) => {
    const styles = {
        width: `${width}`,
        minHeight: `${minHeight}`,
        borderRight: `${borderRight}`,
    };
    return <Link className={cn(s.card)} style={styles}>
        <Typography variant={'h4'}>{card.name}</Typography>
        {card.description && <p>{card.description}</p>}
    </Link>
}

