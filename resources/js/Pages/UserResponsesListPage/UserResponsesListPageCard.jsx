import React from 'react';
import AppCard from "@/8Shared/ui/AppCard/AppCard.jsx";
import cn from "classnames";
import s from "@/Pages/UserResponsesListPage/UserResponsesListPage.module.css";
import AppText from "@/8Shared/ui/AppText/AppText.jsx";
import AppButton from "@/8Shared/ui/AppButton/AppButton.jsx";
import AppLink from "@/8Shared/ui/AppLink/AppLink.jsx";
import PropTypes from "prop-types";

const UserResponsesListPageCard = ({id, title, payment, conditions, employment, schedule, experience, logo}) => {
    return (
        <AppLink
            path={'vacancy.show'}
            param={id}
            key={id}
        >
            <AppCard
                width={'auto'}
                height={'260px'}
                shadow
                className={cn(s.userResponsesPageCard,)}
            >
                <div>
                    <AppText
                        title={title}
                    />
                    <AppText
                        text={`от ${payment} руб.`}
                    />
                    <AppText
                        text={`Компания ${conditions}.`}
                    />
                    <AppText
                        text={employment}
                    />
                    <AppText
                        text={schedule}
                    />
                    <AppText
                        size="s"
                        variant="notaccented"
                        text={`Опыт работы: ${experience}`}
                    />
                    <AppButton
                        className={s.userResponsesPageCardBtn}
                        width="auto"
                    >
                        Подробнее
                    </AppButton>
                </div>
                <div className={s.userResponsesPageCardLogo}>
                    <img alt="Лого" src={logo}/>
                </div>
            </AppCard>
        </AppLink>
    );
};

export default UserResponsesListPageCard;
UserResponsesListPageCard.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    payment: PropTypes.string,
    conditions: PropTypes.string,
    employment: PropTypes.string,
    schedule: PropTypes.string,
    experience: PropTypes.string,
    logo: PropTypes.string,
};
