import React from "react";
import { usePage } from "@inertiajs/react";
//import PropTypes from 'prop-types'
import s from "./ResumePage.module.css";

import { AppPage } from "@/5Layouts/AppPage/AppPage";
import AppText from "@/8Shared/ui/AppText/AppText";
import AppButton from "@/8Shared/ui/AppButton/AppButton";

function ResumePage({ resume, author }) {

    console.log(author.email);

    return (
        <>
            <AppPage>
                <container className={s.containerResumePage}>
                    <main className={s.mainResumePage}>
                        <form method="LINK" action={route("resume.index")}>
                            <AppButton
                                variant="clear"
                                className={s.linkResumePage}
                            >
                                К списку моих резюме
                            </AppButton>
                        </form>

                        <div class={s.baceData}>
                            <div class={s.userBaceData}>
                                <AppText text={"Сейчас на сайте"} size="s" />

                                <div className={s.userData}>
                                    <AppText
                                        title={"Иванов Иван Иванович"}
                                        size="s"
                                        bold
                                    />
                                    <div className={s.userDataForm}>
                                        <AppText text={" Мужчина "} size="s" />
                                        <AppText text={", 33 года "} size="s" />
                                        <AppText
                                            text={
                                                ", родился 31 февраля 1990 года "
                                            }
                                            size="s"
                                        />
                                    </div>
                                </div>

                                <div className={s.userContacts}>
                                    <AppText title={"Контакты"} size="s" />
                                    <AppText
                                        text={"+7 (999) 999-99-99"}
                                        size="s"
                                        className={s.userContactsPhone}
                                    />
                                    <div className={s.userEmail}>
                                        <AppText
                                            text={
                                                <span
                                                    className={s.userEmailText}
                                                >
                                                    IvanovIvan@mail.ru
                                                </span>
                                            }
                                            size="s"
                                        />
                                        <AppText
                                            text={
                                                " — предпочитаемый способ связи"
                                            }
                                            size="s"
                                        />
                                    </div>
                                </div>

                                <div className={s.userBaceAddress}>
                                    <div className={s.userAddress}>
                                        <AppText text={"Адлер"} size="s" />
                                        <AppText
                                            text={", не готов к переезду"}
                                            size="s"
                                        />
                                        <AppText
                                            text={", не готов к командировкам"}
                                            size="s"
                                        />
                                    </div>
                                </div>

                                <div className={s.userSearchArea}>
                                    <AppText
                                        text={
                                            "Указан примерный район поиска работы"
                                        }
                                        size="s"
                                    />
                                    <a href="#" className={s.linkResumePage}>
                                        Показать карту
                                    </a>
                                </div>
                            </div>
                            <div class={s.userPhoto}>
                                <img src="#" className={s.imgUserPhoto} />
                                {/* <a href="#" className={s.linkResumePage}>Изменить фото</a> */}
                            </div>
                        </div>

                        <div className={s.userSpeciality}>
                            <AppText title={"Инженер"} size="s" bold />

                            <div className={s.specialization}>
                                <AppText text={"Специализации:"} size="s" />
                                <AppText
                                    text={"Инженерная"}
                                    size="s"
                                    className={s.specializationText}
                                />
                            </div>

                            <div className={s.employment}>
                                <AppText text={"Занятость"} size="s" />
                                <AppText text={": полная занятость"} size="s" />
                                <AppText text={", стажировка"} size="s" />
                            </div>

                            <div className={s.schedule}>
                                <AppText text={"График работы"} size="s" />
                                <AppText text={": полный день"} size="s" />
                                <AppText text={", сменный график"} size="s" />
                                <AppText text={", гибкий график"} size="s" />
                                <AppText text={", удаленная работа"} size="s" />
                            </div>
                        </div>
                        <div className={s.workExperience}>
                            <AppText
                                title={"Опыт работы 4 года 9 месяцев"}
                                size="s"
                                bold
                            />

                            <div className={s.workPeriods}>
                                <div className={s.userWorkPeriod}>
                                    <AppText
                                        text={
                                            "Январь 2019 — по настоящее время"
                                        }
                                        size="s"
                                    />
                                    <AppText
                                        text={"4 года 9 месяцев"}
                                        size="s"
                                    />
                                </div>

                                <div className={s.descriptionExperience}>
                                    <div className={s.company}>
                                        <form method="LINK">
                                            <AppButton
                                                variant="clear"
                                                sizeText="s"
                                                className={s.userEmailText}
                                            >
                                                Мосводосток, ГУП
                                            </AppButton>
                                        </form>

                                        <AppText text={"Москва"} size="s" />
                                        <AppText text={"ЖКХ"} size="s" />
                                    </div>
                                    <div className={s.responsibilities}>
                                        <AppText
                                            bold
                                            title={"Инженер 1 категории"}
                                            size="s"
                                        />
                                        <AppText
                                            size="s"
                                            text={
                                                "1. Контроль за выполнением строительно-монтажных работ."
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={s.keySkills}>
                                <div className={s.keySkillsTitle}>
                                    <AppText
                                        title={"Ключевые навыки"}
                                        size="s"
                                        bold
                                    />
                                </div>
                                <div className={s.keySkillsTextAll}>
                                    <AppText
                                        text={"Исполнительность"}
                                        size="s"
                                        className={s.keySkillsText}
                                    />
                                    <AppText
                                        text={"Доброжелательность"}
                                        size="s"
                                        className={s.keySkillsText}
                                    />
                                    <AppText
                                        text={"Коммуникабельность"}
                                        size="s"
                                        className={s.keySkillsText}
                                    />
                                    <AppText
                                        text={"Внимательность"}
                                        size="s"
                                        className={s.keySkillsText}
                                    />
                                </div>
                            </div>

                            <div className={s.aboutUser}>
                                <div className={s.aboutUserTitle}>
                                    <AppText bold title={"Обо мне"} size="s" />
                                </div>

                                <div className={s.aboutUserTextAll}>
                                    <AppText
                                        text={
                                            "Усидчивый, внимательный, целеустремленный, легко вливаюсь в коллектив. Инженер систем водоснабжения и водоотведения. Ищу работу для получения опыта и получение более обширных знаний в этой сфере. Готов к любой работе"
                                        }
                                        size="s"
                                        className={s.aboutUserText}
                                    />
                                </div>
                            </div>

                            <div className={s.education}>
                                <AppText
                                    bold
                                    title={"Высшее образование (Бакалавр)"}
                                    size="s"
                                />

                                <div className={s.educationPeriods}>
                                    <div className={s.userEducationPeriod}>
                                        <AppText
                                            text={"2013-2017 года"}
                                            size="s"
                                        />
                                    </div>

                                    <div className={s.descriptionEducation}>
                                        <AppText
                                            size="s"
                                            text={
                                                "Российский государственный инженерный университет инженеров"
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={s.workConditions}>
                                <AppText
                                    title={"Гражданство, время пути до работы"}
                                    size="s"
                                    bold
                                />

                                <div className={s.employment}>
                                    <AppText text={"Гражданство"} size="s" />
                                    <AppText text={": Россия"} size="s" />
                                </div>
                                <div className={s.employment}>
                                    <AppText
                                        text={"Разрешение на работу"}
                                        size="s"
                                    />
                                    <AppText text={": Россия"} size="s" />
                                </div>
                                <div className={s.employment}>
                                    <AppText
                                        text={
                                            "Желательное время в пути до работы"
                                        }
                                        size="s"
                                    />
                                    <AppText
                                        text={": не имеет значения"}
                                        size="s"
                                    />
                                </div>
                            </div>
                        </div>

                        <AppButton
                            type="submit"
                            bold
                            sizeText="s"
                            className={s.buttonSave}
                        >
                            <span>Редактировать</span>
                        </AppButton>

                        {/* <AppLink
                            path={'resume.show'}
                            param={resume.id}
                            key={resume.id}
                            sizeText = "s"
                            className={s.linkResumeList}
                        >Редактировать резюме</AppLink> */}
                    </main>
                </container>
            </AppPage>
        </>
    );
}

//ResumePage.propTypes = {}

export default ResumePage;
