import styles from './MainPage.module.css';
import { fakerRU as faker } from '@faker-js/faker';
import { AppList } from '@/Shared/AppList/AppList';
import propTypes from 'prop-types';
import MainLayout from '@/Layouts/MainLayout/MainLayout';
import { AppPage } from '@/Shared/AppPage/AppPage';
import { AuthContext } from '@/Shared/store/AuthContext';
import { Banner } from '@/Shared/Banner/Banner';
import { Typography } from '@/Shared/Typography/Typography';
import { Search } from '@/Shared/Search/Search';

const cardsInfo = [...Array(12)].map(() => {
    return {
        id: faker.string.nanoid(10),
        title: faker.person.jobType(),
        salary: `${faker.finance.amount({ min: 30000, max: 100000, dec: 0 })} руб`,
        borderRight: `5px solid ${faker.color.rgb({ casing: 'lower' })}`
    }
});

export const MainPage = ({ auth, categories, className }) => {
    const user = auth?.user;
    console.log(user);
    // console.log('main page: ', auth?.user);
    return (
        <AuthContext.Provider value={{ user }}>
            <MainLayout className={className}>
                <Banner imageUrl={`https://static.tildacdn.com/tild6138-6338-4363-a435-383636663665/b_591bf35ac97a1.jpg`}>
                    <AppPage>
                        <Typography variant={'h1'} color={'title'}>Работа найдется для каждого</Typography>
                        <Search placeholder={'Профессия, должность компания'} />
                    </AppPage>
                </Banner>
                <AppPage>
                    <AppList list={categories} />
                    <AppList list={categories} />
                </AppPage>
            </MainLayout>
        </AuthContext.Provider>



    );

}

MainPage.propTypes = {}