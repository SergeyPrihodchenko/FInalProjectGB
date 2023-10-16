import { AppPage } from "@/5Layouts/AppPage/AppPage";
import React from "react";
import AppText from "@/8Shared/ui/AppText/AppText";
import AppLink from "@/8Shared/ui/AppLink/AppLink";
import AppCard from "@/8Shared/ui/AppCard/AppCard";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import s from "./UserVacancyPage.module.css";
import cn from "classnames";
import { usePage } from "@inertiajs/react";
import { AuthContext } from "@/8Shared/store/AuthContext";

const UserVacancyPage = ({ vacancies  }) => {
    console.log('vacancies: ', vacancies);
    
    const user = usePage().props.auth.user;
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
                    {vacancies.map(vac =>
                        <div className={s.vacancyListCardWrapper}>
                            <AppCard
                                key={vac.id}
                                variant="primary"
                                width={'auto'}
                                shadow
                                className={cn(s.vacancyListCard)}
                            >
                                <AppText
                                    className={s.vacancyListCardTitle}
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
                                
                                <div className={s.vacancyListCardBtnWrapper}>
                                    <AppButton
                                        path={'vacancy.show'}
                                        param={vac.id}
                                        variant='outline'
                                        width="auto"
                                        colorType="normal"
                                    >
                                        Посмотреть
                                    </AppButton>
                                    <AppButton
                                    //    onClick={() => handleToggleModal(vac.id)}
                                        className={s.vacancyListCardBtn}
                                        width="auto"
                                        //   disabled={isResponsedVacancy(vac.id, responsesIdList) ? true : false}
                                    >
                                        Редактировать
                                    </AppButton>
                                </div>
                            </AppCard>
                        </div>
                    )} 
                </div>
            </AppPage>
            </>
        </AuthContext.Provider>
);
};
export default UserVacancyPage;