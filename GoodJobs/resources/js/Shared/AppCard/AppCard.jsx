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
        <Typography variant={'h4'}>{card.title}</Typography>
        {card.description && <p>{card.description}</p>}
        {card.payment && <p>от {card.payment} руб.</p>}
        {card.payment && <p>Опыт работы: от {card.experience} {+card.experience === 1 ? 'года' : 'лет'}</p>}
    </Link>
}

