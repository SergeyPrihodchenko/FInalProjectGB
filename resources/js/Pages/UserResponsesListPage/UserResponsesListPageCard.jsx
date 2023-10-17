import React from 'react';
import AppCard from "@/8Shared/ui/AppCard/AppCard.jsx";
import cn from "classnames";
import s from "@/Pages/UserResponsesListPage/UserResponsesListPage.module.css";
import AppText from "@/8Shared/ui/AppText/AppText.jsx";
import AppButton from "@/8Shared/ui/AppButton/AppButton.jsx";
import AppLink from "@/8Shared/ui/AppLink/AppLink.jsx";
import PropTypes from "prop-types";
import { Tooltip } from "@mui/material";
import CheckCircleOutlineSharpIcon from "@mui/icons-material/CheckCircleOutlineSharp.js";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const UserResponsesListPageCard = ({
    id,
    title,
    payment,
    conditions,
    employment,
    schedule,
    experience,
    status,
    logo }) => {

    return (
        <AppCard
            width={'auto'}
            height={'260px'}
            shadow
            className={cn(s.userResponsesPageCard,)}
        >

            <div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <AppLink
                        path={'vacancy.show'}
                        param={id}
                        key={id}
                    >
                        <AppText
                            variant="accent"
                            title={title}
                        />
                    </AppLink>
                    <AppText
                        text={`${status}`}
                        variant={"secondary"}
                        bold
                        size="s"
                        className={cn(s.statusBadge, {
                            [s.statusBadgeNotViewd]: status === 'Не просмотренно',
                            [s.statusBadgeViewd]: status === 'Просмотренно',
                            [s.statusBadgeRefuse]: status === 'Отказ',
                            [s.statusBadgeInvite]: status === 'Приглашение',
                        })}
                    />

                </div>
                <AppText
                    size="l"
                    className={s.userResponsesPageCardMarginText}
                    text={`от ${payment} руб.`}
                />
                <div className={s.userResponsesPageCardIconBlock}>
                    <AppText
                        size="s"
                        text={`Компания ${conditions}.`}
                    />
                    <Tooltip
                        title="Компания прошла проверку на сайте"
                        placement="top"
                        arrow
                    >
                        <CheckCircleOutlineSharpIcon fontSize="20" className={cn(s.userResponsesPageCardIconBlockIcon, s.userResponsesPageCardIconBlockIconML)} />
                    </Tooltip>
                </div>
                <AppText
                    size="s"
                    className={s.userResponsesPageCardMarginText}
                    text={employment}
                />
                <AppText
                    size="s"
                    className={s.userResponsesPageCardMarginText}
                    text={schedule}
                />
                <div className={cn(s.userResponsesPageCardIconBlock, s.userResponsesPageCardMarginText)}>
                    <WorkOutlineIcon fontSize="20" className={cn(s.userResponsesPageCardIconBlockIcon, s.userResponsesPageCardIconBlockIconMR)} />
                    <AppText
                        size="s"
                        variant="notaccented"
                        text={`Опыт работы: ${experience}`}
                    />
                </div>

                <AppButton
                    path={'vacancy.show'}
                    param={id}
                    key={id}
                    className={s.userResponsesPageCardBtn}
                    width="auto"
                >
                    Подробнее
                </AppButton>
            </div>
            {logo && (
                <div className={s.userResponsesPageCardLogo}>
                    <img className={s.userResponsesPageCardLogoImg} alt="Лого" src={logo} />
                </div>
            )}
        </AppCard>

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
