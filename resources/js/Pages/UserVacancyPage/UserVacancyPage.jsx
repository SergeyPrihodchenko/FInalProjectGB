import { AppPage } from "@/5Layouts/AppPage/AppPage";
import React from "react";
import AppText from "@/8Shared/ui/AppText/AppText";
import AppCard from "@/8Shared/ui/AppCard/AppCard";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import s from "./UserVacancyPage.module.css";
import cn from "classnames";
import { usePage } from "@inertiajs/react";
import { AuthContext } from "@/8Shared/store/AuthContext";

const UserVacancyPage = ({ vacancies, company }) => {
    console.log("UserVacancyPage company: ", company);

    const user = usePage().props.auth.user;
    console.log("UserVacancyPage user: ", user);

    return (
        <AuthContext.Provider value={{ user }}>
            <>
                <AppPage>
                    <AppText
                        title={"Мои вакансии"}
                        size="m"
                        bold
                        className={s.titleVacancyList}
                    />
                    <div className={s.vacancyList}>
                        {vacancies.map((vac) => (
                            <div className={s.vacancyListCardWrapper}>
                                <AppCard
                                    key={vac.id}
                                    variant="primary"
                                    width={"auto"}
                                    shadow
                                    className={s.vacancyListCard}
                                >
                                    <AppText
                                        className={s.vacancyListCardTitle}
                                        title={vac.title}
                                        variant={"accent"}
                                        bold
                                        size="xs"
                                    />

                                    <AppText
                                        text={`от ${vac.payment} руб.`}
                                        size="s"
                                        bold
                                    />
                                    <AppText
                                        text={`Компания ${vac.name}.`}
                                        size="s"
                                        bold
                                    />
                                    <AppText
                                        size="xs"
                                        variant="notaccented"
                                        text={`Город: ${vac.city}`}
                                    />
                                    <AppText
                                        size="xs"
                                        variant="notaccented"
                                        text={`Опыт работы: ${vac.experience}`}
                                        className={s.vacancyListCardExp}
                                    />
                                    <div className={s.vacancyListCardParam}>
                                        <AppText
                                            size={"xs"}
                                            variant={"secondary"}
                                            text={vac.employment}
                                            className={
                                                s.vacancyListCardEmployment
                                            }
                                        />
                                        <AppText
                                            size={"xs"}
                                            variant={"secondary"}
                                            text={vac.schedule}
                                            className={
                                                s.vacancyListCardSchedule
                                            }
                                        />
                                    </div>

                                    <div
                                        className={s.vacancyListCardBtnWrapper}
                                    >
                                        <AppButton
                                            path={"vacancy.show"}
                                            param={vac.id}
                                            type="button"
                                            sizeText="s"
                                            width={"120px"}
                                            className={s.linkResumeList}
                                        >
                                            Просмотреть
                                        </AppButton>
                                        {/* 
                                        <AppButton
                                            path={""}
                                            param={""}
                                            key={""}
                                            type="button"
                                            width={"150px"}
                                            height={"40px"}
                                            sizeText="s"
                                            className={s.linkResumeList}
                                        >
                                            Редактировать
                                        </AppButton> */}
                                    </div>
                                </AppCard>
                            </div>
                        ))}
                    </div>
                </AppPage>
            </>
        </AuthContext.Provider>
    );
};
export default UserVacancyPage;
