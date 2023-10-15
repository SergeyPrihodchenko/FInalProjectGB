import React from "react";
import { useForm, usePage } from "@inertiajs/react";

import { AppPage } from "@/5Layouts/AppPage/AppPage";
import { AuthContext } from "@/8Shared/store/AuthContext";
import AppLink from "@/8Shared/ui/AppLink/AppLink";
import AppText from "@/8Shared/ui/AppText/AppText";
import s from "./CandidatePage.module.css";
import AppButton from "@/8Shared/ui/AppButton/AppButton";

function UserResumeListPage({ resumes }) {
    const user = usePage().props.auth.user;

    console.log(resumes);

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
                                                title={resume.profession}
                                                variant={"accent"}
                                                bold
                                                size="xs"
                                            />

                                            <AppText
                                                title={resume.salary.concat(" " , "₽")}
                                                size="s"
                                                bold
                                                className={s.salaryResume}
                                            />
                                            <AppText
                                                text={Yers}
                                                size="xs"
                                            />

                                            <AppText
                                                text={"Регион: ".concat(resume.region)}
                                                size="xs"
                                            />
                                                                                           
                                            <AppText
                                                text={"Опыт работы: ".concat(resume.experience)}
                                                size="xs"
                                            />
                                            
                                            <AppText
                                                text={"Образование: ".concat(resume.education)}
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
                                            type="button"
                                            sizeText="s"
                                            height={"60px"}
                                            className={s.linkResumeList}
                                        >
                                            Просмотреть резюме
                                        </AppButton>

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

export default UserResumeListPage;
