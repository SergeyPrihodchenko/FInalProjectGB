import styles from './AppList.module.css';
import { AppCard } from "../AppCard/AppCard"


export const AppList = ({ list, typeList }) => {
    return <ul className={styles.cardList}>
        {list.map(item => <AppCard minHeight={`100px`} borderRight={item.borderRight} key={item.id} card={item} />)}
    </ul>
}