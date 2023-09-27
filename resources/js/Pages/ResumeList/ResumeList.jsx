import React from "react";
import { useForm, usePage } from "@inertiajs/react";

import { AppPage } from "@/5Layouts/AppPage/AppPage";
import { AuthContext } from "@/8Shared/store/AuthContext";
import AppLink from "@/8Shared/ui/AppLink/AppLink";
import AppText from "@/8Shared/ui/AppText/AppText";
import s from "./ResumeList.module.css";
import AppButton from "@/8Shared/ui/AppButton/AppButton";

function ResumePage({ resumes }) {
    const user = usePage().props.auth.user;

    return (
        <AuthContext.Provider value={{ user }}>
            <>
                <AppPage>
                    <main className={s.mainResumeList}>
                        <AppText
                            title={"Мои резюме"}
                            size="m"
                            bold
                            className={s.titleResumeList}
                        />

                        {
                            resumes.map((resume) => {
                                const { data } = useForm({
                                    // user_id: user.id,
                                    profession: resume.profession,
                                    // first_name: resume.first_name,
                                    // last_name: resume.last_name,
                                    // gender: resume.gender,
                                    // region: resume.region,
                                    date_of_birth: resume.date_of_birth,
                                    // phone: resume.phone,
                                    // citizenship: resume.citizenship,
                                    // work_permit: resume.work_permit,
                                    // education: resume.education,
                                    // educational_institute: resume.educational_institute,
                                    companies: resume.companies,
                                    // skills: resume.skills,
                                    // experience: resume.experience,
                                });
                            
                                //высчитываем из даты рождения сколько полных лет
                                const dateOfBirth = data.date_of_birth;
                                function declOfNum(number, titles) {
                                   let cases = [2, 0, 1, 1, 1, 2];
                                    return number + " " + titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
                                  }
                                  
                                  function birthDateToAge(b) {
                                    var n = new Date(),
                                        b = new Date(b),
                                        age = n.getFullYear() - b.getFullYear();
                                    return n.setFullYear(1970) < b.setFullYear(1970) ? age - 1 : age;
                                  }
                                  const Yers = (declOfNum(birthDateToAge(dateOfBirth), ['год', 'года', 'лет']));
                                //  console.log(Yers);

                            return (
                                <div class={s.resumeList}>
                                    
                                    <div class={s.userResume}>
                                        <div className={s.userData}>
                                            <AppText
                                                title={
                                                    <span
                                                        className={
                                                            s.titleResume
                                                        }
                                                    >
                                                        {resume.profession}
                                                    </span>
                                                }
                                                bold
                                                size="xs"
                                            />

                                            <AppText
                                                title={"90 000 ₽"}
                                                size="s"
                                                bold
                                                className={s.salaryResume}
                                            />
                                            <AppText
                                                text={Yers}
                                                size="xs"
                                            />
                                            
                                            <AppText
                                                text={
                                                    <span
                                                        className={s.skillUser}
                                                    >
                                                        Последнее место работы
                                                    </span>
                                                }
                                                size="xs"
                                            />
{/* не могу прокинуть данные по компании вообще и по последней в частности: название, стаж работы */}
                                {/* {
                                    data.companies.map((el) => {
                                        return (
                                            console.log(el.name)
                                        )
                                    })
                                } */}
                                            
                                            <div className={s.lastSkill}>
                                                <AppText
                                                    text={"ИП Глизин"}
                                                    size="xs"
                                                />
                                                <AppText
                                                    text={", январь 2021"}
                                                    size="xs"
                                                />
                                                <AppText
                                                    text={
                                                        "- по настоящее время"
                                                    }
                                                    size="xs"
                                                />
                                            </div>

                                                    

                                            <AppText
                                                text={"11 лет 6 месяцев"}
                                                size="xs"
                                            />
                                        </div>
                                        <div class={s.userPhoto}>
                                            НЕТ ФОТО
                                            {/* <img src="#" className={s.imgUserPhoto}/> */}
                                        </div>
                                    </div>
                                    <div className={s.linkViewResume}>
                                        <AppButton
                                            path={"resume.show"}
                                            param={resume.id}
                                            key={resume.id}
                                            sizeText="s"
                                            height="60px"
                                            className={s.linkResumeList}
                                        >
                                            Просмотреть резюме
                                        </AppButton>

                                        <AppButton
                                            path={"resume.edit"}
                                            param={resume.id}
                                            key={resume.id}
                                            sizeText="s"
                                            className={s.linkResumeList}
                                        >
                                            Редактировать резюме
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

export default ResumePage;
