import { useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";

import { AppPage } from "@/5Layouts/AppPage/AppPage";
import { AuthContext } from "@/8Shared/store/AuthContext";
import s from "./CreateResume.module.css";
import AppText from "@/8Shared/ui/AppText/AppText";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import AppInput from "@/8Shared/ui/AppInput/AppInput";

// import { useDispatch, useSelector } from "react-redux";
// import { setUserId, addSkills, setSkills, removeSkills } from "./model/slice/resumePageSlice";
// import { useEffect } from "react";

// const arrayEducation = [
//     "Среднее",
//     "Среднее специальное",
//     "Неоконченное высшее",
//     "Высшее образование",
//     "Бакалавр",
//     "Магистр",
//     "Кандидат наук",
//     // "Доктор наук",
// ];

// const arrayExperience = [
//     // "без опыта",
//     "менее года",
//     "от года до трех",
//     "от трех и выше",
// ];

function CreateResume() {
    // const dispatch = useDispatch();

    const user = usePage().props.auth.user;
    
    
    // useEffect(() => {
    //     if (user.id) {
    //         dispatch(
    //         setUserId(user.id));
    //     }
    // }, [user.id]);

    // const {skill, skills} = useSelector(state => state.resumePageCreate);
    // console.log(skills);

    const { data, setData, post, errors } = useForm({
        user_id: user.id,
        profession: "",
        first_name: "",
        last_name: "",
        gender: "",
        region: "",
        date_of_birth: "",
        phone: "",
        citizenship: "",
        work_permit: "",
        education: "",
        educational_institute: [],
        companies: [],
        skills: [],
        experience: "",
        salary: "",
        employment_type: "",
        schedule_type: "",
        relocation: "",
        buisness_travel: "",
        about_me: "",
    });

   const [skill, setSkill] = useState("");

    // educational institute array
    const [institute, setInstitute] = useState({});

    const [title, setTitle] = useState("");

    const [faculty, setFaculty] = useState("");

    const [specialization, setSpecialization] = useState("");

    const [start_year, setStart_year] = useState("");

    const [graduation_year, setGraduation_year] = useState("");

    // add and remove institute object to array educational_insitute
    const addInstitute = () => {
        (institute.title = title),
            (institute.faculty = faculty),
            (institute.specialization = specialization),
            (institute.start_year = start_year),
            (institute.graduation_year = graduation_year),
            setData("educational_institute", [
                ...data.educational_institute,
                institute,
            ]);

        setInstitute({});

        setTitle("");
        setFaculty("");
        setSpecialization("");
        setStart_year("");
        setGraduation_year("");
    };

    //  console.log(data.educational_institute);

    // company array
    const [company, setCompany] = useState({});

    const [name, setName] = useState("");

    const [position, setPosition] = useState("");

    const [achievements, setAchievements] = useState("");

    const [start_date, setStart_date] = useState("");

    const [end_date, setEnd_date] = useState("");

    const removeInstitute = (index) => {
        data.educational_institute.splice(index, 1);

        setData("educational_institute", [...data.educational_institute]);
    };

    // add and remove company object to array company
    const addCompany = () => {
        (company.name = name),
            (company.position = position),
            (company.achievements = achievements),
            (company.start_date = start_date),
            (company.end_date = checkbox ? null : end_date);

        setData("companies", [...data.companies, company]);

        setCompany({});

        setName("");
        setPosition("");
        setAchievements("");
        setStart_date("");
        setEnd_date("");
    };

    const removeCompany = (index) => {
        data.companies.splice(index, 1);

        setData("companies", [...data.companies]);
    };

    const [checkbox, setCheckbox] = useState(false);
    const saveResume = (e) => {
        e.preventDefault();

        post(route("resume.store"));
    };

    const addSkill = () => {
        setData("skills", [...data.skills, skill]);
        setSkill("");
    };

    //dispatch(removeSkills(index))
    const removeSkill = (index) => {
        data.skills.splice(index, 1);

        setData("skills", [...data.skills]);
    };

    return (
        <AuthContext.Provider value={{ user }}>
            <>
                <AppPage>
                    <form onSubmit={saveResume}>
                        <div className={s.basiceData}>
                            <AppInput
                                onChange={(e) =>
                                    setData("profession", e.target.value)
                                }
                                value={data.profession}
                                label="Профессия"
                                type="text"
                                placeholder="Дизайнер"
                                className={s.indentDownBasiceData}
                                errorMessage={errors.profession}
                            />

                            <AppInput
                                onChange={(e) =>
                                    setData("last_name", e.target.value)
                                }
                                value={data.last_name}
                                label="Фамилия"
                                type="text"
                                placeholder="Фамилия"
                                className={s.indentDownBasiceData}
                                errorMessage={errors.last_name}
                            />

                            <AppInput
                                onChange={(e) =>
                                    setData("first_name", e.target.value)
                                }
                                value={data.first_name}
                                label="Имя"
                                type="text"
                                placeholder="Имя"
                                className={s.indentDownBasiceData}
                                errorMessage={errors.first_name}
                            />

                            <AppText
                                title={"Пол"}
                                bold
                                size={"xs"}
                                className={s.textTitle}
                            />

                            <div className={s.inputRadioBasiceData}>
                                <select
                                    name="gender"
                                    id="gender"
                                    onChange={(e) =>
                                        setData("gender", e.target.value)
                                    }
                                    value={data.gender}
                                    className={s.inputResumeDataBasice}
                                >
                                    <option value="">Не выбран</option>
                                    <option value="Мужской">Мужской</option>
                                    <option value="Женский">Женский</option>
                                </select>
                                <div style={{ color: "red" }}>
                                    {errors.gender}
                                </div>
                            </div>

                            {/* <div className={s.inputRadioBasiceData}>
                                <input
                                    onChange={(e) =>
                                        setData("gender", e.target.value)
                                    }
                                    value="Мужской"
                                    type="radio"
                                    name="gender"
                                    id="genderMen"
                                    className={s.inputRadioCreateResume}
                                    errorMessage={errors.gender}
                                />
                                <label htmlFor="genderMen">
                                    <AppText
                                        text={"Мужской"}
                                        size={"s"}
                                        className={s.textInputRadio}
                                    />
                                </label>

                                <input
                                    onChange={(e) =>
                                        setData("gender", e.target.value)
                                    }
                                    value="Женский"
                                    type="radio"
                                    name="gender"
                                    id="genderWoman"
                                    className={s.inputRadioCreateResume}
                                    errorMessage={errors.gender}
                                />
                                <label htmlFor="genderWoman">
                                    <AppText
                                        text={"Женский"}
                                        size={"s"}
                                        className={s.textInputRadio}
                                    />
                                </label>
                            </div> */}
                            <AppInput
                                onChange={(e) =>
                                    setData("region", e.target.value)
                                }
                                value={data.region}
                                label="Город или регион проживания"
                                type="text"
                                placeholder="Москва"
                                className={s.indentDownBasiceData}
                                errorMessage={errors.region}
                            />

                            <AppInput
                                onChange={(e) =>
                                    setData("date_of_birth", e.target.value)
                                }
                                value={data.date_of_birth}
                                label="Дата рождения"
                                type="date"
                                width="140px"
                                className={s.indentDownBasiceData}
                                errorMessage={errors.date_of_birth}
                            />

                            <AppInput
                                onChange={(e) =>
                                    setData("phone", e.target.value)
                                }
                                value={data.phone}
                                label="Номер телефона"
                                type="text"
                                placeholder="+7 (999) 999-99-99"
                                className={s.indentDownBasiceData}
                                errorMessage={errors.phone}
                            />

                            <AppInput
                                onChange={(e) =>
                                    setData("citizenship", e.target.value)
                                }
                                value={data.citizenship}
                                label="Гражданство"
                                type="text"
                                placeholder="Россия"
                                className={s.indentDownBasiceData}
                                errorMessage={errors.citizenship}
                            />

                            <AppInput
                                onChange={(e) =>
                                    setData("work_permit", e.target.value)
                                }
                                value={data.work_permit}
                                label="Разрешение на работу"
                                type="text"
                                placeholder="Россия"
                                className={s.indentDownBasiceData}
                                errorMessage={errors.work_permit}
                            />
                        </div>

                        <div className={s.educationResumePage}>
                            <div className={s.levelOfEucation}>
                                <AppText
                                    title="Уровень образования"
                                    bold
                                    size={"xs"}
                                    className={s.textTitle}
                                />
                                <div className={s.education}>
                                    <select
                                        name="education"
                                        id="education"
                                        onChange={(e) =>
                                            setData("education", e.target.value)
                                        }
                                        value={data.education}
                                        className={s.inputResumeDataBasice}
                                    >
                                        <option value="Не выбрано">
                                            Не выбрано
                                        </option>
                                        <option value="Среднее">Среднее</option>
                                        <option value="Среднее специальное">
                                            Среднее специальное
                                        </option>
                                        <option value="Неоконченное высшее">
                                            Неоконченное высшее
                                        </option>
                                        <option value="Высшее образование">
                                            Высшее образование
                                        </option>
                                        <option value="Бакалавр">
                                            Бакалавр
                                        </option>
                                        <option value="Магистр">Магистр</option>
                                        <option value="Кандидат наук">
                                            Кандидат наук
                                        </option>
                                    </select>
                                    <div style={{ color: "red" }}>
                                        {errors.education}
                                    </div>
                                </div>
                                {/* <div className={s.education}>
                                    {arrayEducation.map((el) => {
                                        // console.log(el);
                                        return (
                                            <div
                                                className={
                                                    s.inputRadioBasiceData
                                                }
                                            >
                                                <input
                                                    onChange={(e) =>
                                                        setData(
                                                            "education",
                                                            e.target.value
                                                        )
                                                    }
                                                    value={el}
                                                    name="education"
                                                    id={el}
                                                    type="radio"
                                                    className={
                                                        s.inputRadioCreateResume
                                                    }
                                                />
                                                <label for={el}>
                                                    <AppText
                                                        text={el}
                                                        size={"s"}
                                                        className={
                                                            s.textInputRadio
                                                        }
                                                    />
                                                </label>
                                                <div style={{ color: "red" }}>
                                                    {errors.education}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div> */}
                            </div>
                            {data.educational_institute.map((el, index) => {
                                return (
                                    <div className={s.education}>
                                        <AppInput
                                            label="Название учебного заведения"
                                            type="text"
                                            placeholder="Название"
                                            className={s.indentDownBasiceData}
                                            value={el.title}
                                            readOnly
                                        />

                                        <AppInput
                                            label="Факультет"
                                            type="text"
                                            placeholder="Факультет"
                                            className={s.indentDownBasiceData}
                                            value={el.faculty}
                                            readOnly
                                        />

                                        <AppInput
                                            label={"Специализация"}
                                            type="text"
                                            placeholder="Специализация"
                                            className={s.indentDownBasiceData}
                                            value={el.specialization}
                                            readOnly
                                        />
                                        <div className={s.educationUser}>
                                            <AppInput
                                                label="Дата начала"
                                                type="date"
                                                width="140px"
                                                className={
                                                    s.indentDownBasiceData
                                                }
                                                value={el.start_year}
                                                readOnly
                                            />

                                            <AppInput
                                                label={"Дата окончания"}
                                                type="date"
                                                width="140px"
                                                className={
                                                    s.indentDownBasiceData
                                                }
                                                value={el.graduation_year}
                                                readOnly
                                            />

                                            <AppButton
                                                onClick={() =>
                                                    removeInstitute(index)
                                                }
                                                variant="clear"
                                                type="button"
                                                sizeText="s"
                                                bold
                                                className={
                                                    s.buttonYearsEducation
                                                }
                                            >
                                                Удалить учебное заведение
                                            </AppButton>
                                        </div>
                                    </div>
                                );
                            })}

                            <div className={s.education}>
                                <AppInput
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                    label={"Название учебного заведения"}
                                    type="text"
                                    placeholder="Название"
                                    className={s.indentDownBasiceData}
                                />

                                <AppInput
                                    onChange={(e) => setFaculty(e.target.value)}
                                    value={faculty}
                                    label={"Факультет"}
                                    type="text"
                                    placeholder="Факультет"
                                    className={s.indentDownBasiceData}
                                />

                                <AppInput
                                    onChange={(e) =>
                                        setSpecialization(e.target.value)
                                    }
                                    value={specialization}
                                    label={"Специализация"}
                                    type="text"
                                    placeholder="Специализация"
                                    className={s.indentDownBasiceData}
                                />
                                <div className={s.educationUser}>
                                    <AppInput
                                        label="Дата начала"
                                        type="date"
                                        width="140px"
                                        className={s.indentDownBasiceData}
                                        value={start_year}
                                        onChange={(e) => {
                                            setStart_year(e.target.value);
                                        }}
                                    />

                                    <AppInput
                                        onChange={(e) =>
                                            setGraduation_year(e.target.value)
                                        }
                                        value={graduation_year}
                                        label="Дата окончания"
                                        type="date"
                                        width="140px"
                                        className={s.indentDownBasiceData}
                                    />

                                    <AppButton
                                        onClick={addInstitute}
                                        variant="clear"
                                        sizeText="s"
                                        type="button"
                                        bold
                                        className={s.buttonYearsEducation}
                                    >
                                        Добавить учебное заведение
                                    </AppButton>
                                </div>
                            </div>
                        </div>

                        <div className={s.experience}>
                            {data.companies.map((el, index) => {
                                return (
                                    <>
                                        <AppInput
                                            label="В какой компании вы работали?"
                                            type="text"
                                            value={el.name}
                                            readOnly
                                            placeholder="Название компании"
                                            className={s.indentDownBasiceData}
                                        />

                                        <AppInput
                                            label="На какой должности?"
                                            type="text"
                                            value={el.position}
                                            readOnly
                                            className={s.indentDownBasiceData}
                                        />

                                        <AppText
                                            title={
                                                "Расскажите о ваших обязанностях и достижениях"
                                            }
                                            bold
                                            size="xs"
                                            className={s.textTitle}
                                        />
                                        <textarea
                                            className={s.textareaBasiceData}
                                            value={el.achievements}
                                            readOnly
                                            placeholder="Например, изучали и анализировали информацию, технические данные, показатели и результаты работы, обобщали и систематизировали их"
                                        />

                                        <div className={s.experienceWork}>
                                            <AppInput
                                                label="Начало работы"
                                                type="date"
                                                width="140px"
                                                className={
                                                    s.indentDownBasiceData
                                                }
                                                readOnly
                                                value={el.start_date}
                                            />

                                            {el.end_date ? (
                                                <AppInput
                                                    label="Окончание работы"
                                                    type="date"
                                                    width="140px"
                                                    className={
                                                        s.indentDownBasiceData
                                                    }
                                                    readOnly
                                                    value={el.end_date}
                                                />
                                            ) : (
                                                <div
                                                    className={
                                                        s.experienceEndingWork
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            s.inputEndingWork
                                                        }
                                                    >
                                                        <label for="checkboxEndingWork">
                                                            <AppText
                                                                title="По настоящее время"
                                                                size="xs"
                                                                className={
                                                                    s.textTitleEnding
                                                                }
                                                            />
                                                        </label>
                                                    </div>
                                                </div>
                                            )}

                                            <AppButton
                                                onClick={(e) =>
                                                    removeCompany(index)
                                                }
                                                variant="clear"
                                                sizeText="s"
                                                type="button"
                                                bold
                                                className={
                                                    s.buttonYearsExperience
                                                }
                                            >
                                                Удалить компанию
                                            </AppButton>
                                        </div>
                                    </>
                                );
                            })}

                            <AppInput
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                label={"В какой компании вы работали?"}
                                type="text"
                                placeholder="Название компании"
                                className={s.indentDownBasiceData}
                            />

                            <AppInput
                                onChange={(e) => setPosition(e.target.value)}
                                value={position}
                                label={"На какой должности?"}
                                type="text"
                                className={s.indentDownBasiceData}
                            />

                            <AppText
                                title={
                                    "Расскажите о ваших обязанностях и достижениях"
                                }
                                bold
                                size={"xs"}
                                className={s.textTitle}
                            />
                            <textarea
                                onChange={(e) =>
                                    setAchievements(e.target.value)
                                }
                                value={achievements}
                                className={s.textareaBasiceData}
                                placeholder="Например, изучали и анализировали информацию, технические данные, показатели и результаты работы, обобщали и систематизировали их"
                            />

                            <div className={s.experienceWork}>
                                <AppInput
                                    onChange={(e) =>
                                        setStart_date(e.target.value)
                                    }
                                    value={start_date}
                                    label={"Начало работы"}
                                    type="date"
                                    width="140px"
                                    className={s.indentDownBasiceData}
                                />

                                {!checkbox ? (
                                    <AppInput
                                        onChange={(e) =>
                                            setEnd_date(e.target.value)
                                        }
                                        value={end_date}
                                        label="Окончание работы"
                                        type="date"
                                        width="140px"
                                        className={s.indentDownBasiceData}
                                    />
                                ) : null}

                                <div className={s.experienceEndingWork}>
                                    {/* <AppText
                                        title={"Окончание"}
                                        bold
                                        size={"xs"}
                                        className={s.textTitle}
                                    /> */}
                                    <div className={s.inputEndingWork}>
                                        <input
                                            id="checkboxEndingWork"
                                            type="checkbox"
                                            value={checkbox}
                                            // onClick={() => setCheckbox(!checkbox)}
                                            className={s.checkboxEndingWork}
                                        />
                                        <label for="checkboxEndingWork">
                                            <AppText
                                                title={"По настоящее время"}
                                                size={"xs"}
                                                className={s.textTitleEnding}
                                            />
                                        </label>
                                    </div>
                                </div>

                                <AppButton
                                    onClick={addCompany}
                                    variant="outline"
                                    sizeText="s"
                                    bold
                                    type="button"
                                    className={s.buttonYearsExperience}
                                >
                                    {" "}
                                    Добавить еще опыт работы
                                </AppButton>
                            </div>
                        </div>

                        <div className={s.skills}>
                            <AppText
                                title={"Ключевые навыки"}
                                bold
                                size={"xs"}
                                className={s.textTitle}
                            />
                            {data.skills.map((skill, index) => {
                                return (
                                    <div
                                        className={s.keySkillsTextAll}
                                        key={index}
                                    >
                                        <AppText
                                            title={skill}
                                            size={"xs"}
                                            className={s.textSkills}
                                        />

                                        <AppButton
                                            onClick={
                                                (index) => {
                                                //   dispatch(removeSkills(index));
                                                   removeSkill(index)
                                                }

                                            }
                                            variant="outline"
                                            sizeText="999xs"
                                            bold
                                            type="button"
                                            className={s.buttonSkillDelete}
                                        >
                                            Удалить
                                        </AppButton>
                                    </div>
                                );
                            })}
                            <input
                                onChange={(e) => {
                                    // dispatch(setSkills(e.target.value));
                                    setSkill(e.target.value)}
                                }
                                value={skill}
                                type="text"
                                className={s.textSkill}
                            />

                            <AppButton
                                onClick={() => {
                                    // dispatch(addSkills())
                                    addSkill()
                                    // dispatch(setSkills(''))
                                }
                                }
                                variant="outline"
                                sizeText="s"
                                bold
                                type="button"
                                className={s.buttonSkillAdd}
                            >
                                Добавить
                            </AppButton>
                            <div style={{ color: "red" }}>{errors.skills}</div>
                        </div>

                        <div className={s.vacancyWishes}>
                            <AppText
                                title={"Пожелания к вакансии"}
                                bold
                                size={"xs"}
                                className={s.textTitle}
                            />
                            <AppInput
                                onChange={(e) =>
                                    setData("salary", e.target.value)
                                }
                                value={data.salary}
                                label={"Уровень дохода"}
                                type="text"
                                placeholder="Сумма на руки"
                                width={"220px"}
                                className={s.incomeLevel}
                            />

                            <div className={s.education}>
                                <AppText
                                    title={"Опыт работы"}
                                    bold
                                    size={"xs"}
                                    className={s.textTitle}
                                />
                                <select
                                    name="experience"
                                    id="experience"
                                    onChange={(e) =>
                                        setData("experience", e.target.value)
                                    }
                                    value={data.experience}
                                    className={s.inputResumeDataBasice}
                                >
                                    <option value="не выбрано">
                                        не выбрано
                                    </option>
                                    <option value="нет опыта">нет опыта</option>
                                    <option value="от 1 до 3 лет">
                                        от 1 до 3 лет
                                    </option>
                                    <option value="От 3 до 6 лет">
                                        от 3 и 6 лет
                                    </option>
                                    <option value="более 6 лет">
                                        более 6 лет
                                    </option>
                                </select>
                                <div style={{ color: "red" }}>
                                    {errors.experience}
                                </div>
                                {/* {arrayExperience.map((el) => {
                                    // console.log(el);
                                    return (
                                        <div className={s.inputRadioBasiceData}>
                                            <input
                                                onChange={(e) =>
                                                    setData(
                                                        "experience",
                                                        e.target.value
                                                    )
                                                }
                                                value={el}
                                                name="experience"
                                                id={el}
                                                type="radio"
                                                className={
                                                    s.inputRadioCreateResume
                                                }
                                            />
                                            <label for={el}>
                                                <AppText
                                                    text={el}
                                                    size={"s"}
                                                    className={s.textInputRadio}
                                                />
                                            </label>
                                            <div style={{ color: "red" }}>
                                                {errors.experience}
                                            </div>
                                        </div>
                                    );
                                })} */}
                            </div>
                            <div className={s.education}>
                                <AppText
                                    title={"Тип занятости"}
                                    bold
                                    size={"xs"}
                                    className={s.textTitle}
                                />
                                <select
                                    name="employment_type"
                                    id="employment_type"
                                    value={data.employment_type}
                                    onChange={(e) =>
                                        setData(
                                            "employment_type",
                                            e.target.value
                                        )
                                    }
                                    className={s.inputResumeDataBasice}
                                >
                                    <option value="Не выбрано">
                                        Не выбрано
                                    </option>
                                    {/* <option value="Любой">
                                        Любой
                                    </option> */}
                                    <option value="Полный день">
                                        Полный день
                                    </option>
                                    <option value="Сменный график">
                                        Сменный график
                                    </option>
                                    <option value="Гибкий график">
                                        Гибкий график
                                    </option>
                                    <option value="Удаленая работа">
                                        Удаленая работа
                                    </option>
                                    <option value="Вахтовый метод">
                                        Вахтовый метод
                                    </option>
                                </select>
                                <div style={{ color: "red" }}>
                                    {errors.employment_type}
                                </div>
                            </div>
                            <div className={s.education}>
                                <AppText
                                    title={"График работы"}
                                    bold
                                    size={"xs"}
                                    className={s.textTitle}
                                />
                                <select
                                    name="schedule_type"
                                    id="schedule_type"
                                    value={data.schedule_type}
                                    onChange={(e) =>
                                        setData("schedule_type", e.target.value)
                                    }
                                    className={s.inputResumeDataBasice}
                                >
                                    <option value="Не выбрано">
                                        Не выбрано
                                    </option>
                                    {/* <option value="Любой">
                                        Любой
                                    </option> */}
                                    <option value="Полная занятость">
                                        Полная занятость
                                    </option>
                                    <option value="Частичная занятость">
                                        Частичная занятость
                                    </option>
                                    <option value="Стажировка">
                                        Стажировка
                                    </option>
                                    <option value="Проектная работа">
                                        Проектная работа
                                    </option>
                                    <option value="Волонтерство">
                                        Волонтерство
                                    </option>
                                </select>
                                <div style={{ color: "red" }}>
                                    {errors.schedule_type}
                                </div>
                            </div>
                            <div className={s.education}>
                                <AppText
                                    title={"Готовность к переездам"}
                                    bold
                                    size={"xs"}
                                    className={s.textTitle}
                                />
                                <select
                                    name="relocation"
                                    id="relocation"
                                    value={data.relocation}
                                    onChange={(e) =>
                                        setData("relocation", e.target.value)
                                    }
                                    className={s.inputResumeDataBasice}
                                >
                                    <option value="Не выбрано">
                                        Не выбрано
                                    </option>
                                    <option value="Невозможно">
                                        Невозможно
                                    </option>
                                    <option value="Возможено">Возможено</option>
                                    <option value="Желательно">
                                        Желательно
                                    </option>
                                </select>
                                <div style={{ color: "red" }}>
                                    {errors.relocation}
                                </div>
                            </div>
                            <div className={s.education}>
                                <AppText
                                    title={"Готовность к командировкам"}
                                    bold
                                    size={"xs"}
                                    className={s.textTitle}
                                />
                                <select
                                    name="buisness_travel"
                                    id="buisness_travel"
                                    value={data.buisness_travel}
                                    onChange={(e) =>
                                        setData(
                                            "buisness_travel",
                                            e.target.value
                                        )
                                    }
                                    className={s.inputResumeDataBasice}
                                >
                                    <option value="Не выбрано">
                                        Не выбрано
                                    </option>
                                    <option value="Никогда">Никогда</option>
                                    <option value="Готов">Готов</option>
                                    <option value="Иногда">Иногда</option>
                                </select>
                                <div style={{ color: "red" }}>
                                    {errors.experience}
                                </div>
                            </div>
                        </div>

                        <div className={s.aboutUser}>
                            <AppText
                                title={"Дополнительная информация"}
                                bold
                                size={"xs"}
                                className={s.textTitle}
                            />
                            <AppText
                                title={"Расскажите о себе"}
                                bold
                                size={"xs"}
                                className={s.textTitle}
                            />
                            <textarea
                                onChange={(e) =>
                                    setData("about_me", e.target.value)
                                }
                                value={data.about_me}
                                className={s.textareaBasiceData}
                                placeholder="Например, усидчивость, внимательность, целеустремленность, легко ли вливаетесь в коллектив. Ваша профессия. Ищите работу для получения опыта и получения более обширных знаний в этой сфере или готовы делиться своим опытом. Готовы к любой работе или есть конкретные пожелания к графику или уровню дохода"
                            />

                            <div style={{ color: "red" }}>
                                {errors.about_me}
                            </div>
                        </div>

                        <AppButton
                            type="submit"
                            bold
                            sizeText="s"
                            className={s.buttonSave}
                        >
                            Сохранить
                        </AppButton>
                    </form>
                </AppPage>
            </>
        </AuthContext.Provider>
    );
}

export default CreateResume;
