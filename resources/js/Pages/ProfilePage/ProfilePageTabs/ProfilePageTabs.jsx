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
import { BootstrapIcon } from '@/8Shared/Icon/BootstrapIcon';

function ProfilePageTabs(props) {
    const {
        favourite_vacancies
    } = props;
    const ProfilePageFormAll = <ProfilePageForm />;

    const favList = <List
        list={favourite_vacancies}
        renderItem={(vac) =>
            <div className={s.vacancyListCardWrapper}>
                <AppLink

                    path={'vacancy.show'}
                    param={vac.id}
                    key={vac.id}
                >
                    <AppCard
                        width={'auto'}
                        height={`260px`}
                        shadow
                        className={cn(s.vacancyListCard)}
                    >
                        <AppText
                            title={vac.title}
                        />
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

                    </AppCard>
                </AppLink>
                {/* <AppButton
                    variant={'clear'}
                    className={cn(s.addToFavouriteBtn)}
                    onClick={() => toggleFavourites(vac.id)}
                >
                    {isInFavourite(vac.id, favourites) ?
                        <BootstrapIcon name={'BsHeartFill'} size={28} />
                        :
                        <BootstrapIcon name={'BsHeart'} size={28} />

                    }
                </AppButton> */}
            </div>
        }
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
                desc: favList,
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