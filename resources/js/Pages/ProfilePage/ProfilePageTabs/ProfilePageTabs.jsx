import React from 'react';
//import PropTypes from 'prop-types'
import cn from "classnames"
import s from '../ProfilePageTabs/ProfilePageTabs.module.css';
import AppText from '@/8Shared/ui/AppText/AppText';
import { useState } from 'react';
import { Tab } from '@headlessui/react';
import ProfilePageForm from '../ProfilePageForm/ProfilePageForm';
import List from '@/8Shared/List/List';
import AppCard from '@/8Shared/ui/AppCard/AppCard';
import AppLink from '@/8Shared/ui/AppLink/AppLink';
import AppButton from '@/8Shared/ui/AppButton/AppButton';
import FavouriteButton from '@/8Shared/ui/FavouriteButton/FavouriteButton';
import { useEffect } from 'react';



function ProfilePageTabs(props) {
    const {
        favourite_vacancies,
        likes
    } = props;
    console.log(likes);
    const ProfilePageFormAll = <ProfilePageForm />;



    const favList = <List
        className={s.favList}
        list={favourite_vacancies}
        renderItem={(vac) =>
            <>

                <AppCard
                    width={'auto'}
                    height={`260px`}
                    variant='primary'
                    shadow
                    className={cn(s.vacancyListCard)}
                >
                    <AppLink
                        path={'vacancy.show'}
                        param={vac.id}
                        key={vac.id}
                    >
                        <AppText
                            title={vac.title}
                        />

                    </AppLink>
                    <AppText
                        text={`от ${vac.payment} руб.`}
                    />
                    <AppText
                        text={`Компания ${vac.conditions}.`}
                    />
                    <AppText
                        size="s"
                        variant="notaccented"
                        text={`Город: ${vac.city}`}
                    />

                    <AppText
                        size="s"
                        variant="notaccented"
                        text={`Опыт работы: ${vac.experience}`}
                        className={s.vacancyListCardExp}
                    />
                    <div className={s.vacancyListCardParam}>
                        <AppText
                            size={'s'}
                            variant={'secondary'}
                            text={vac.employment}
                            className={s.vacancyListCardEmployment}
                        />
                        <AppText
                            size={'s'}
                            variant={'secondary'}
                            text={vac.schedule}
                            className={s.vacancyListCardSchedule}

                        />

                    </div>

                    <AppButton
                        className={s.vacancyListCardBtn}
                        width="auto"
                    >
                        Откликнуться
                    </AppButton>
                    <FavouriteButton id={vac.id} favourites={likes} />

                </AppCard>
            </>}

    />

    // console.log(ProfilePageFormAll);

    let [categories] = useState({
        'Личные данные': [
            {
                id: 1,
                desc: ProfilePageFormAll,
            },
        ],

        'Нежелательное': [
            {
                id: 1,
                desc: 'Эта страница Нежелательное. Она пуста',
            },
        ],

        'Избранное': [
            {
                id: 1,
                desc: favourite_vacancies.length ? favList : <p>
                    У вас нет избранных вакансий<br />
                    Если вам понравилась вакансия, которую вы нашли в нашем поиске, вы можете добавить её в избранное, чтобы не потерять её и вернуться к ней позже
                </p>,
            },
        ],

        'Рассылки': [
            {
                id: 1,
                desc: 'Эта страница Рассылки. Она пуста',
            },
        ],
    })
    console.log(Object.values(categories));
    console.log(favourite_vacancies);


    return (
        <nav className={s.navProfilePage}>
            <Tab.Group>
                <Tab.List>
                    <navList>
                        <div className={s.navSettings}>
                            {Object.keys(categories).map((category) => (
                                <Tab className={s.tabCategories}
                                    key={category}>
                                    <AppText size={'s'} className={s.navLink} title={category} />
                                </Tab>
                            ))}
                        </div>
                    </navList>
                </Tab.List>

                <Tab.Panels className="mt-2">
                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel
                            key={idx}>
                            <ul className={s.ulCategoties}>
                                {posts.map((post) => (
                                    <li
                                        key={post.id}>
                                        <AppText size={'s'} className={s.navLink} text={post.desc} />
                                    </li>
                                ))}
                            </ul>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </nav>
    )
}


//ProfilePage.propTypes = {}

export default ProfilePageTabs