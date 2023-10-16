import React from "react";
import { Head, useForm, usePage } from "@inertiajs/react";

import { AppPage } from "@/5Layouts/AppPage/AppPage";
import { AuthContext } from "@/8Shared/store/AuthContext";
import AppText from "@/8Shared/ui/AppText/AppText";
import s from "./CandidatePage.module.css";
import cn from "classnames";

import AppButton from "@/8Shared/ui/AppButton/AppButton";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resumeInvite, resumeRefuse, setResumeList, setResumeStatusInvite, setResumeStatusRefuse } from "../../model/slice/candidatePageSlice";

function CandidatePage({ resumes }) {
    const user = usePage().props.auth.user;
    const dispatch = useDispatch();
    const { resumeStatusRefuse, resumeList, resumeStatusInvite } = useSelector((state) => state.candidatePage);
    const [flag, setFlag] = useState(false);
    // const [resumeList, setResumeList] = useState(resumes);

    useEffect(() => {
        dispatch(setResumeList(resumes))
        dispatch(setResumeStatusRefuse(resumes));
        dispatch(setResumeStatusInvite(resumes));
    }, []);

    console.log('redux', resumeStatusInvite);
    console.log('redux resumeList', resumeList);

    const isInStatusList = (vacancy_id, resume_id, list) => {
        return list.some(el => (el.vacancy_id === vacancy_id && el.resume_id === resume_id));
    }

    const handleView = async (resume_id, vacancy_id) => {

        const response = await axios.post('/viewed', { resume_id: resume_id, vacancy_id: vacancy_id });
        console.log(response);
    }
    // const handleRefuse = async (resume_id, vacancy_id) => {
    //     const response = await axios.post('/refusal', { resume_id: resume_id, vacancy_id: vacancy_id });
    //     console.log(response);
    // }
    const handleInvite = async (resume_id, vacancy_id) => {
        const response = await axios.post("/invitation", {
            resume_id: resume_id,
            vacancy_id: vacancy_id,
        });
        console.log(response);
    };

    return (
        <AuthContext.Provider value={{ user }}>
            <>
                <Head title="Кандидаты" />
                <AppPage>
                    <main className={s.mainResumeList}>
                        <AppText
                            title={"Кандидаты"}
                            size="m"
                            bold
                            className={s.titleResumeList}
                        />

                        {resumes.map((resume) => {
                            const { data } = useForm({
                                profession: resume.profession,
                                region: resume.region,
                                date_of_birth: resume.date_of_birth,
                                education: resume.education,
                                companies: resume.companies,
                                skills: resume.skills,
                                experience: resume.experience,
                                salary: resume.salary,
                            });

                            //высчитываем из даты рождения сколько полных лет
                            const dateOfBirth = data.date_of_birth;
                            function declOfNum(number, titles) {
                                let cases = [2, 0, 1, 1, 1, 2];
                                return (
<<<<<<< HEAD
                                    number +
                                    " " +
                                    titles[
                                        number % 100 > 4 && number % 100 < 20
                                            ? 2
                                            : cases[
                                                  number % 10 < 5
                                                      ? number % 10
                                                      : 5
                                              ]
                                    ]
                                );
                            }
=======
                                    <div class={s.resumeList}>
                                        <div class={s.userResume}>
                                            <div className={s.userData}>
                                                <div className={s.statusWithName}>
                                                    <AppText
                                                        title={resume.profession}
                                                        variant={"accent"}
                                                        bold
                                                        size="xs"
                                                    />
                                                    <AppText
                                                        text={`${resume.title}`}
                                                        variant={"secondary"}
                                                        bold
                                                        size="xs"
                                                        className={cn(s.statusBadge, {
                                                            [s.statusBadgeNotViewd]: resume.title === 'Не просмотренно',
                                                            [s.statusBadgeInvite]: isInStatusList(resume.vacancy_id, resume.resume_id, resumeStatusInvite),
                                                            [s.statusBadgeRefuse]: isInStatusList(resume.vacancy_id, resume.resume_id, resumeStatusRefuse),
                                                            // [s.statusBadgeRefuse]: resume.title === 'Отказ',
                                                            [s.statusBadgeViewd]: resume.title === 'Просмотренно',
                                                        })}
                                                    />
>>>>>>> 3406246dbfee30c39b51750e2c5d20b5b092f74c

                            function birthDateToAge(b) {
                                var n = new Date(),
                                    b = new Date(b),
                                    age = n.getFullYear() - b.getFullYear();
                                return n.setFullYear(1970) < b.setFullYear(1970)
                                    ? age - 1
                                    : age;
                            }
                            const Yers = declOfNum(
                                birthDateToAge(dateOfBirth),
                                ["год", "года", "лет"]
                            );
                            //  console.log(Yers);

                            return (
                                <div class={s.resumeList}>
                                    <div class={s.userResume}>
                                        <div className={s.userData}>
                                            <div className={s.statusWithName}>
                                                <AppText
                                                    title={resume.profession}
                                                    variant={"accent"}
                                                    bold
                                                    size="xs"
                                                />
                                                <AppText
                                                    text={`${resume.title}`}
                                                    className={cn(
                                                        s.statusBadge,
                                                        {
                                                            [s.statusBadgeNotViewd]:
                                                                resume.title ===
                                                                "Не просмотренно",
                                                            [s.statusBadgeViewd]:
                                                                resume.title ===
                                                                "Просмотренно",
                                                            [s.statusBadgeRefuse]:
                                                                resume.title ===
                                                                "Отказ",
                                                            [s.statusBadgeInvite]:
                                                                resume.title ===
                                                                "Приглашение",
                                                        }
                                                    )}
                                                    variant={"secondary"}
                                                    bold
                                                    size="xs"
                                                />
                                            </div>
                                            <AppText
                                                text={`${resume.first_name} ${resume.last_name}`}
                                                variant={"primary"}
                                                bold
                                                size="xs"
                                            />

<<<<<<< HEAD
                                            <AppText
                                                title={resume.salary.concat(
                                                    " ",
                                                    "₽"
                                                )}
                                                size="s"
                                                bold
                                                className={s.salaryResume}
                                            />
                                            <AppText text={Yers} size="xs" />

                                            <AppText
                                                text={"Регион: ".concat(
                                                    resume.region
                                                )}
                                                size="xs"
                                            />

                                            <AppText
                                                text={"Опыт работы: ".concat(
                                                    resume.experience
                                                )}
                                                size="xs"
                                            />

                                            <AppText
                                                text={"Образование: ".concat(
                                                    resume.education
                                                )}
                                                size="xs"
                                            />
                                        </div>
=======
                                            <div class={s.userPhoto}>
                                                НЕТ ФОТО
                                            </div>
                                        </div>
                                        <div className={s.manageResume}>
                                            <AppButton
                                                onClick={() => { handleView(resume.resume_id, resume.vacancy_id) }}
                                                path={"resume.show"}
                                                param={resume.resume_id}
                                                key={resume.id}
                                                type="button"
                                                sizeText="s"
                                            >
                                                Просмотреть резюме
                                            </AppButton>
                                            <AppButton
                                                onClick={() => dispatch(resumeInvite(resume))}
                                                type="button"
                                                sizeText="s"
                                                colorType={'save'}
                                            >
                                                Пригласить
                                            </AppButton>
                                            <AppButton
                                                onClick={() => dispatch(resumeRefuse(resume))}
                                                colorType={'cancel'}
                                                type="button"
                                                sizeText="s"
                                                disabled={isInStatusList(resume.vacancy_id, resume.resume_id, resumeStatusRefuse)}
                                            >
                                                <span className={s.buttonReject}>
                                                    {isInStatusList(resume.vacancy_id, resume.resume_id, resumeStatusRefuse) ? 'Отклонено' : 'Отклонить'}
                                                </span>
>>>>>>> 3406246dbfee30c39b51750e2c5d20b5b092f74c

                                        <div class={s.userPhoto}>
                                            НЕТ ФОТО
                                            {/* <img src="#" className={s.imgUserPhoto}/> */}
                                        </div>
                                    </div>
                                    <div className={s.manageResume}>
                                        <AppButton
                                            onClick={() => {
                                                handleView(
                                                    resume.resume_id,
                                                    resume.vacancy_id
                                                );
                                            }}
                                            path={"resume.show"}
                                            param={resume.resume_id}
                                            key={resume.id}
                                            type="button"
                                            sizeText="s"
                                        >
                                            Просмотреть резюме
                                        </AppButton>
                                        <AppButton
                                            onClick={() => {
                                                handleInvite(
                                                    resume.resume_id,
                                                    resume.vacancy_id
                                                );
                                            }}
                                            type="button"
                                            sizeText="s"
                                            colorType={"save"}
                                        >
                                            Пригласить
                                        </AppButton>
                                        <AppButton
                                            onClick={() =>
                                                handleRefuse(
                                                    resume.resume_id,
                                                    resume.vacancy_id
                                                )
                                            }
                                            colorType={"cancel"}
                                            type="button"
                                            sizeText="s"
                                            disabled={resume.title === "Отказ"}
                                        >
                                            <span className={s.buttonReject}>
                                                {resume.title === "Отказ"
                                                    ? "Отклонено"
                                                    : "Отклонить"}
                                            </span>
                                        </AppButton>

                                        {/* Сделать активной кнопку редаткировать только для пользователя чье резюме открыто */}
                                    </div>
                                </div>
                            );
                        })}
                    </main>
                </AppPage>
            </>
        </AuthContext.Provider>
    );
}

export default CandidatePage;
