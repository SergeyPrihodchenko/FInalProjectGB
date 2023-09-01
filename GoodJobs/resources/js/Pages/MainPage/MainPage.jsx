import styles from './MainPage.module.css';
import { fakerRU as faker } from '@faker-js/faker';
import { AppList } from '@/Shared/AppList/AppList';
import PropTypes from 'prop-types';

const cardsInfo = [...Array(12)].map(() => {
    return {
        id: faker.string.nanoid(10),
        title: faker.person.jobType(),
        salary: `от ${faker.finance.amount({ min: 30000, max: 100000, dec: 0 })}`,
    }
});

export const MainPage = () => {
    console.log(cardsInfo);
    return <div className={styles.container}>
        <AppList list={cardsInfo} />

    </div>
}

MainPage.PropTypes = {}