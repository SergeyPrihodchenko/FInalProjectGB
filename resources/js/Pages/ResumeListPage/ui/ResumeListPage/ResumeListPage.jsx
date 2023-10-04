import React from "react";
import { AuthContext } from "@/8Shared/store/AuthContext";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import { useForm, usePage } from "@inertiajs/react";
import AppText from "@/8Shared/ui/AppText/AppText";
import s from "./ResumeListPage.module.css"
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import AppInput from "@/8Shared/ui/AppInput/AppInput";


function ResumeListAll({resumes}){

    const user = usePage().props.auth.user;

    console.log(resumes);

    return(
        <AuthContext.Provider value={{ user }}>
            <AppPage>
                <AppText
                    title={"Все резюме"}
                    size="s"
                    bold
                    className={s.titleResumeList}
                />
                <AppInput
                    type="text"
                    placeholder="Поиск резюме"
                />
                
                <div className={s.buttonTitleResume}>
                    <div>
                        Фильтры
                    </div>
                    <div>
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
                                            <div className={s.buttonTitleResume}>   
                                                <AppButton
                                                    path={"resume.show"}
                                                    param={resume.id}
                                                    key={resume.id}
                                                    sizeText="s"
                                                    bold
                                                    variant="clear"
                                                >
                                                    <span className={s.titleResume}>
                                                        {resume.profession}
                                                    </span>
                                                </AppButton>
                                            </div> 
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
                                </div>
                            );
                        })
                    }
                    </div>
                </div>

                
            </AppPage>
        </AuthContext.Provider>
    )
}

export default ResumeListAll;