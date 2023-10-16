import React from "react";
import { useForm, usePage } from "@inertiajs/react";
//import PropTypes from 'prop-types'
import s from "./ResumePage.module.css";

import { AppPage } from "@/5Layouts/AppPage/AppPage";
import AppText from "@/8Shared/ui/AppText/AppText";
import AppButton from "@/8Shared/ui/AppButton/AppButton";


function ResumePage({ resume, author }) {

    const user = usePage().props.auth.user;
    const userEmail = usePage().props.auth.user.email;

    // console.log(author.id);
    // console.log(user.isRol);
    console.log('resume', resume);

    const { data } = useForm({
        author_email: author.email,
        user_id: user.id,
        profession: resume.profession,
        first_name: resume.first_name,
        last_name: resume.last_name,
        gender: resume.gender,
        region: resume.region,
        date_of_birth: resume.date_of_birth,
        phone: resume.phone,
        citizenship: resume.citizenship,
        work_permit: resume.work_permit,
        education: resume.education,
        educational_institute: resume.educational_institute,
        companies: resume.companies,
        skills: resume.skills,
        experience: resume.experience,
        relocation: resume.relocation,
    });
    const handleRefuseResume = async (resume_id, vacancy_id) => {

    }

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
    const Years = (declOfNum(birthDateToAge(dateOfBirth), ['год', 'года', 'лет']));
    //  console.log(Years);

    //переводим из падежа в существительное gender пользователя
    const dataGender = data.gender;
    function dataGenderOfUser() {
        let gender = "";
        if (dataGender == "Мужской") {
            gender = "Мужчина";
        } else {
            gender = "Женщина";
        }
        return gender;
    }
    const genderOfUser = dataGenderOfUser(dataGender);
    //console.log(genderOfUser);

    //форматируем дату рождения
    const dayOfBirth = new Date(dateOfBirth);
    const dateSrc = dayOfBirth.toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' });
    const dateOfBirthUser = dateSrc.split(".").join(" ");

    //форматы даты и периода работы
    function dateFormatYearsMonch(date) {
        const dayFormat = new Date(date);
        const dateSrc = dayFormat.toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' });
        const dateDst = dateSrc.split(".").join(" ");
        const present = " по настоящее время";
        if (date == null) {
            return present
        } else {
            return (
                dateDst
            )
        }
    }

    //расчет стажа
    function declOfNum(number, titles) {
        let cases = [2, 0, 1, 1, 1, 2];
        return number + " " + titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }

    function worksExperience(endDate, startDate) {
        let end, start, month, age;
        start = new Date(startDate);

        if (endDate == null) {
            end = new Date();
            month = end.getMonth() - start.getMonth();
        } else {
            end = new Date(endDate);
            if (end.getMonth() > start.getMonth()) {
                month = end.getMonth() - start.getMonth();
            } else {
                month = (12 + end.getMonth()) - start.getMonth();
            }
        }

        age = end.getFullYear() - start.getFullYear();

        console.log(month);
        return (
            (declOfNum(end.setFullYear(1970) < start.setFullYear(1970) ? age - 1 : age, ['год', 'года', 'лет']))
            + " "
            +
            (declOfNum(end.setMonth() < start.setMonth() ? month - 1 : month, ['месяц', 'месяца', 'месяцев']))
        )
    }

    return (
        <>
            <AppPage>
                <container className={s.containerResumePage}>
                    <main className={s.mainResumePage}>
                        {/* <div className={s.buttonLinkResumeList}>
                            <AppButton
                                href={route("resume.myresumes")}
                                variant="clear"
                                className={s.linkResumePage}
                                sizeText = "s"
                            >
                                К списку моих резюме
                            </AppButton>
                        </div> */}
                        <div class={s.baceData}>
                            <div class={s.userBaceData}>
                                {/* <AppText 
                                    text={"Сейчас на сайте"} 
                                    size="s" 
                                /> */}
                                <AppText
                                    title={data.last_name.concat(" ", data.first_name)}
                                    size="s"
                                    bold
                                />
                                <AppText
                                    size="s"
                                    text={genderOfUser.concat(", ", Years, ", ", dateOfBirthUser, " года рождения")}
                                />
                                <div className={s.userContacts}>
                                    <AppText title={"Контакты"} size="s" />
                                    <AppText
                                        text={data.phone}
                                        size="s"
                                        className={s.userContactsPhone}
                                    />
                                    <div className={s.userEmail}>
                                        <AppText
                                            text={data.author_email}
                                            size="s"
                                            variant="accent"
                                            className={s.userEmailText}
                                        />
                                        <AppText
                                            text={
                                                " — предпочитаемый способ связи"
                                            }
                                            size="s"
                                            className={s.emailLeftText}
                                        />
                                    </div>
                                </div>

                                <AppText
                                    text={data.region}
                                    size="s"
                                />
                                <AppText
                                    text={
                                        "Готовность к переездам: ".concat(resume.relocation)
                                    }
                                    size="s"
                                />
                                <AppText
                                    text={
                                        "Готовность к командировкам: ".concat(resume.buisness_travel)
                                    }
                                    size="s"
                                />
                                {/* <div className={s.userSearchArea}>
                                    <AppText
                                        text={"Указан примерный район поиска работы"}
                                        size="s"
                                        variant={"error"}
                                    />
                                    <a href="#" className={s.linkResumePage}>
                                        Показать карту
                                    </a>
                                </div> */}
                            </div>
                            <div class={s.userPhoto}>
                                НЕТ ФОТО
                                {/* <img src="#" className={s.imgUserPhoto}/> */}
                            </div>
                        </div>

                        <div className={s.userSpeciality}>
                            <AppText title={data.profession} size="s" bold />
                            <div className={s.specialization}>
                                <AppText text={"Специализации:"} size="s" />
                                {
                                    data.educational_institute != null ? (
                                        data.educational_institute.map((el) => {
                                            return (
                                                <AppText
                                                    text={" - ".concat(el.specialization)}
                                                    size="s"
                                                    className={s.specializationText}
                                                />
                                            )
                                        })
                                    ) : null

                                }
                            </div>
                            <AppText
                                text={"Занятость: ".concat(resume.employment_type)}
                                size="s"
                            />

                            <AppText
                                text={"График работы: ".concat(resume.schedule_type)}
                                size="s"
                            />
                        </div>
                        <div className={s.workExperience}>
                            {/* <AppText
                                        title={"4 года 9 месяцев"}
                                        size="s"
                                        bold
                                        variant={"error"}
                                    /> */}
                            {
                                data.companies != null ? (
                                    data.companies.map((el) => {

                                        //дата начала и окончания работы
                                        let dataWorkBegin = el.start_date;
                                        let dataWorkEnd = el.end_date;

                                        //форматы даты и периода работы
                                        const dataWorksBegin = dateFormatYearsMonch(dataWorkBegin);
                                        const dataWorksEnd = dateFormatYearsMonch(dataWorkEnd);

                                        //расчет стажа
                                        const Years = (worksExperience(dataWorkEnd, dataWorkBegin));

                                        return (
                                            <>
                                                <div className={s.workPeriods}>
                                                    <div className={s.userWorkPeriod}>
                                                        <AppText
                                                            text={dataWorksBegin.concat(" - ", dataWorksEnd)}
                                                            size="s"
                                                        />
                                                        <AppText
                                                            text={Years}
                                                            size="s"
                                                        />
                                                    </div>

                                                    <div className={s.descriptionExperience}>
                                                        <div className={s.company}>
                                                            <AppButton
                                                                variant="clear"
                                                                sizeText="s"
                                                                className={s.userEmailText}
                                                                href="#"
                                                            >{el.name}
                                                            </AppButton>
                                                        </div>

                                                        <div className={s.responsibilities}>
                                                            <AppText
                                                                bold
                                                                title={el.position}
                                                                size="s"
                                                            />

                                                            <AppText
                                                                size="s"
                                                                text={el.achievements}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                ) : null
                            }
                        </div>

                        <div className={s.keySkills}>

                            <AppText
                                title={"Ключевые навыки"}
                                size="s"
                                bold
                            />

                            {
                                data.skills != null ? (
                                    data.skills.map((el) => {
                                        return (
                                            <div className={s.keySkillsTextAll}>
                                                <div>
                                                    <AppText
                                                        text={el}
                                                        size="s"
                                                        className={s.keySkillsText}
                                                    />
                                                </div>
                                            </div>
                                        )
                                    })
                                ) : null
                            }
                        </div>
                        <div className={s.aboutUser}>
                            <div className={s.aboutUserTitle}>
                                <AppText
                                    bold
                                    title={"Обо мне"}
                                    size="s"

                                />
                            </div>

                            <div className={s.aboutUserTextAll}>
                                <AppText
                                    text={resume.about_me}
                                    size="s"
                                    className={s.aboutUserText}
                                />
                            </div>
                        </div>

                        <div className={s.education}>
                            <AppText
                                bold
                                title={data.education}
                                size="s"
                            />

                            {
                                data.educational_institute != null ? (
                                    data.educational_institute.map((el) => {
                                        let yearsEducationEnd = new Date(el.graduation_year);
                                        let yearsEducationStart = new Date(el.start_year);

                                        let yearsEducationExit = yearsEducationEnd.getFullYear();
                                        let yearsEducationBegin = yearsEducationStart.getFullYear();
                                        return (
                                            <div className={s.educationPeriods}>
                                                <div className={s.userEducationPeriod}>
                                                    <AppText
                                                        text={yearsEducationBegin + " - " + yearsEducationExit}
                                                        size="s"
                                                    />
                                                </div>
                                                <div className={s.descriptionEducation}>
                                                    <AppText
                                                        size="s"
                                                        text={el.title}
                                                    />
                                                </div>
                                            </div>
                                        )
                                    })
                                ) : null
                            }
                        </div>

                        <div className={s.workConditions}>
                            <AppText
                                title={"Гражданство, время пути до работы"}
                                size="s"
                                bold
                            />
                            <AppText
                                text={"Гражданство: ".concat(data.citizenship)}
                                size="s"
                            />

                            <AppText
                                text={"Разрешение на работу: ".concat(data.work_permit)}
                                size="s"
                            />
                            {/* не знаю откуда тянуть эту информацию */}
                            {/* <AppText
                                text={"Желательное время в пути до работы".concat(": не имеет значения")}
                                size="s"
                                variant={"error"}
                            /> */}
                        </div>
                        {
                            author.id == user.id ? (
                                <div className={s.buttonResumePage}>
                                    <AppButton
                                        path={"resume.edit"}
                                        param={resume.id}
                                        key={resume.id}
                                        type="submit"
                                        bold
                                        sizeText="s"
                                    >
                                        <span>Редактировать</span>
                                    </AppButton>
                                </div>
                            ) : null
                        }

                        {
                            user.isRol == 1 ? (
                                <div className={s.linkViewResume}>
                                    <AppButton
                                        // onClick={invitation}
                                        id={resume.id}
                                        type="button"
                                        height={"60px"}
                                        sizeText="s"
                                    >
                                        Пригласить
                                    </AppButton>
                                    <AppButton
                                        onClick={() => handleRefuseResume()}
                                        // onClick={refusar}
                                        id={resume.id}
                                        type="button"
                                        height={"60px"}
                                        sizeText="s"
                                    >
                                        <span className={s.buttonReject}>
                                            Отклонить
                                        </span>

                                    </AppButton>
                                </div>
                            ) : null
                        }


                    </main>
                </container>
            </AppPage>
        </>
    );
}

//ResumePage.propTypes = {}

export default ResumePage;
