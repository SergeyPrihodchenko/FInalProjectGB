import styles from './MainPage.module.css';
import { fakerRU as faker } from '@faker-js/faker';
import { AppList } from '@/Shared/AppList/AppList';
import propTypes from 'prop-types';
import MainLayout from '@/Layouts/MainLayout/MainLayout';
import { AppPage } from '@/Shared/AppPage/AppPage';

const cardsInfo = [...Array(12)].map(() => {
    return {
        id: faker.string.nanoid(10),
        title: faker.person.jobType(),
        salary: `${faker.finance.amount({ min: 30000, max: 100000, dec: 0 })} руб`,
        borderRight: `5px solid ${faker.color.rgb({ casing: 'lower' })}`
    }
});

export const MainPage = () => {
    console.log(cardsInfo);
    return (
        <MainLayout>
            <AppPage>
                <AppList list={cardsInfo} />
            </AppPage>
        </MainLayout>
    );

}

MainPage.propTypes = {}