import s from './AppCard.module.css';
import { Typography } from '../Typography/Typography';

import cn from 'classnames';


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
    return <div className={cn(s.card)} style={styles}>
        <Typography variant={'h4'}>{card.title}</Typography>
        <span>{card.salary}</span>
    </div>
}

