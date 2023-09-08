import styles from './AppList.module.css';
import { Card } from "../Card/Card"


export const AppList = ({ list, typeList }) => {
    return <ul className={styles.cardList}>
        {list.map(item => <Card minHeight={`100px`} borderRight={item.borderRight} key={item.id} card={item} />)}
    </ul>
}