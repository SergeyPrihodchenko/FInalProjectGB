import React from "react";
import { useForm, usePage } from "@inertiajs/react";

import { AppPage } from "@/5Layouts/AppPage/AppPage";
import { AuthContext } from "@/8Shared/store/AuthContext";
import AppText from "@/8Shared/ui/AppText/AppText";
import s from "./ResumeList.module.css";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import RadioButton from "@/8Shared/RadioButton/RadioButton";
import Checkbox from "@/8Shared/Checkbox/Checkbox";
import AppInput from "@/8Shared/ui/AppInput/AppInput";
import List from "@/8Shared/List/List";

function ResumeList({ resumes }) {
    const user = usePage().props.auth.user;

//    console.log(resumes);
// const arrayEducation = [
//     "Среднее",
//     "Среднее специальное",
//     "Неоконченное высшее",
//     "Высшее образование",
//     "Бакалавр",
//     "Магистр",
//     "Кандидат наук",
// ];

const arrayExperience = [
    "Не имеет значения",
    "нет опыта",
    "от 1 до 3 лет",
    "от 3 до 6 лет",
    "более 6 лет",
];

const arrayEmployment = [
    "Полный день",
    "Сменный график",
    "Гибкий график",
    "Удаленная работа",
    "Вахтовый метод"
];

const arraySchedule = [
    "Полная занятость",
    "Частичная занятость",
    "Стажировка",
    "Проектная работа",
    "Волонтерство"
];

const arrayRelocation = [
    "Невозможно",
    "Возможно",
    "Желательно",
];

const arrayBuisnessTravel = [
    "Никогда",
    "Готов",
    "Иногда",
];
    return (
        <AuthContext.Provider value={{ user }}>
            <>
                <AppPage>
                    <main className={s.mainResumeList}>
                        <AppText
                            title={"Все резюме"}
                            size="m"
                            bold
                            className={s.titleResumeList}
                        />
                        <AppInput 
                            type="text"
                            placeholder="Поиск резюме"   
                        />
                        <div className={s.resumeListPage}>
                            <div className={s.vacancyWishes}>
                                <AppText
                                    title={"Тип занятости"}
                                     bold
                                    size={"s"}
                                    className={s.textTitle}
                                />
                                <List
                                    list={arrayEmployment}
                                    renderItem={(el) =>
                                        <li key={el}>
                                            <Checkbox
                                                label={el}
                                                name={'employment_type'}
                                                //checkHandler={}
                                                value={el}
                                            />
                                        </li>
                                    }
                                />    
                                        
                                <AppText
                                    title={"Опыт работы"}
                                    bold
                                    size={"s"}
                                    className={s.textTitle}
                                />
                                <List
                                    list={arrayExperience}
                                    renderItem={(el) =>
                                        <li key={el}>
                                            <RadioButton
                                                name="experience"
                                                label={el}
                                                value={el}
                                                className={s.inputResume}
                                        />
                                    </li>
                                    }
                                />    
                                            
                                <AppText
                                    title={"Уровень дохода"}
                                    bold
                                    size={"s"}
                                    className={s.textTitle}
                                />

                                    <AppInput    
                                    type="text"
                                    placeholder="от 100000"
                                    width={"220px"}    
                                />

                                <AppText
                                    title={"График работы"}
                                    bold
                                    size={"s"}
                                    className={s.textTitle}
                                />
                                        
                                <List
                                     list={arraySchedule}
                                    renderItem={(el) =>
                                        <li key={el}>
                                            <Checkbox
                                                label={el}
                                                name="schedule_type"
                                                id={el}
                                                value={el}
                                                className={s.checkboxResumeEl}
                                            />
                                        </li>
                                    }
                                />      
                                        
                                <AppText
                                    title={"Готовность к переездам"}
                                    bold
                                    size={"s"}
                                    className={s.textTitle}
                                />

                                <List
                                    list={arrayRelocation}
                                    renderItem={(el) =>
                                        <li key={el}>
                                            <RadioButton
                                                name="relocation"
                                                label={el}
                                                value={el} 
                                                className={s.inputResume}
                                            />
                                        </li>
                                    }
                                />
                                        
                                <AppText
                                    title={"Готовность к командировкам"}
                                     bold
                                    size={"s"}
                                    className={s.textTitle}
                                />

                                <List
                                    list={arrayBuisnessTravel}
                                    renderItem={(el) =>
                                        <li key={el}>
                                            <RadioButton
                                                name="buisness_travel"
                                                label={el}
                                                value={el} 
                                                className={s.inputResume}
                                            />
                                        </li>
                                    }
                                />     
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
                                                    <div className={s.buttonResumeProfession}>
                                                        <AppButton
                                                            path={"resume.show"}
                                                            param={resume.id}
                                                            key={resume.id}
                                                            sizeText="s"
                                                            bold
                                                            variant="clear"
                                                            colorType="accent"
                                                        >{resume.profession}
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
                                }
                            )}
                            </div>
                        </div>   
                    </main>
                </AppPage>
            </>
        </AuthContext.Provider>
    );
}

export default ResumeList;