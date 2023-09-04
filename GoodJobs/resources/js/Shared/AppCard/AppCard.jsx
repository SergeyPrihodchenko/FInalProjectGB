import s from './AppCard.module.css';
import { Typography } from '../Typography/Typography';

import cn from 'classnames';
import { Link } from '@inertiajs/react';
import Vacancy from '@/Pages/Vacancy/Index';

const type = {
    category: "category",
    vacancy: "vacancy"
}

export const AppCard = ({
    card,
    type,
    width,
    minHeight,
    borderRight
}) => {
    const styles = {
        width: `${width}`,
        minHeight: `${minHeight}`,
        borderRight: `${borderRight}`,
    };
    return <Link href={(route('category.show', card))} className={cn(s.card)} style={styles}>
        <Typography variant={'h4'}>{card.title}</Typography>
        {card.description && <p>{card.description}qqq</p>}
        {card.payment && <p>от {card.payment} руб.</p>}
        {card.experience && <p>Опыт работы: от {card.experience} {+card.experience === 1 ? 'года' : 'лет'}</p>}
    </Link>
}

