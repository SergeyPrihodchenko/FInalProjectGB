import styles from './AppCard.module.css';
export const AppCard = ({ card }) => {
    return <div className={styles.card}>
        <p>{card.title}</p>
        <span>{card.salary}</span>
    </div>
}