import styles from './AppList.module.css';
import { AppCard } from "../AppCard/AppCard"

export const AppList = ({ list }) => {
    return <ul className={styles.cardList}>
        {list.map(card => <AppCard key={card.id} card={card} />)}
    </ul>
}