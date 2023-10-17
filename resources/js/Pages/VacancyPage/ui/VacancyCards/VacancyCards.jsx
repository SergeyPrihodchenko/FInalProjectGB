import React from "react";
import PropTypes from "prop-types";
import s from "./VacancyCards.module.css";
import cn from "classnames";
import AppText from "@/8Shared/ui/AppText/AppText";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import AppCard from "@/8Shared/ui/AppCard/AppCard";
function VacancyCards(props) {
    const {
        children,
        className,
        vacancy,
        city,
        isResponse,
        setIsResponse,
        company,
    } = props;
    const { title, payment, experience, employment, revievs, conditions } =
        vacancy;
    // console.log("experience", experience);
    // console.log("vacancy", vacancy);

    return (
        <div className={cn(s.vacancyCards, className)}>
            <AppCard shadow className={s.mainCard} variant={"primary"}>
                <AppText title={title} bold={true} size="l" />
                <AppText
                    text={`от ${payment} р.`}
                    size="m"
                    className={s.price}
                />
                <AppText
                    size="m"
                    text={`Требуемый опыт работы: ${experience}`}
                    // text={`Требуемый опыт работы: ${experience && experience !== "0" && experience == 0
                    //         ? experience
                    //         : "Не имеет значения"
                    //     }`}
                    className={s.experience}
                />
                <AppText
                    size="m"
                    text={`Тип занаятости:
                    ${employment ? employment : "По договорённости"}`}
                />
                <div>
                    {revievs ? (
                        <>
                            <AppText
                                text="Сейчас эту вакансию смотрят"
                                className={s.view}
                            />
                            <AppText
                                text={`${revievs} человека`}
                                variant="error"
                            />
                        </>
                    ) : null}
                </div>
                {isResponse ? (
                    <>
                        <AppButton
                            onClick={() => setIsResponse(!isResponse)}
                            className={s.btn}
                            disabled={isResponse}
                        >
                            Откликнуться
                        </AppButton>
                        <AppButton
                            onClick={() => setIsResponse(!isResponse)}
                            className={cn(s.btn, s.cancelBtn)}
                        >
                            Отозвать отклик
                        </AppButton>
                        <AppText
                            className={s.responseText}
                            text={"Вы отлкинулись, ожидайте приглашения"}
                            variant={"notaccented"}
                        />
                    </>
                ) : (
                    <AppButton
                        onClick={() => setIsResponse(!isResponse)}
                        className={s.btn}
                    >
                        Откликнуться
                    </AppButton>
                )}
            </AppCard>
            <AppCard className={s.aboutCompany} variant={"primary"}>
                {conditions ? <AppText size="m" title={company?.name} /> : null}
                {city ? (
                    <AppText size="m" title={city} />
                ) : (
                    <AppText
                        size="xs"
                        title={
                            "напоминание Поле для города не существует в пропсах вакансии .Нужно добавить "
                        }
                        variant="error"
                    />
                )}
            </AppCard>
        </div>
    );
}
VacancyCards.propTypes = {};

export default VacancyCards;
