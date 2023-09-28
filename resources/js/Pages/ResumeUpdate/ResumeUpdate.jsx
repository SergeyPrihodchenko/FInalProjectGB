import React, { useState } from "react";
import { router, useForm, usePage } from "@inertiajs/react";

import { AppPage } from "@/5Layouts/AppPage/AppPage";
import { AuthContext } from "@/8Shared/store/AuthContext";
import s from "./ResumeUpdate.module.css";
import AppText from "@/8Shared/ui/AppText/AppText";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import AppInput from "@/8Shared/ui/AppInput/AppInput";

function Resume({ resume }) {
    const user = usePage().props.auth.user;

    const { data, setData, put, errors } = useForm({
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
    });

    const [skill, setSkill] = useState("");

    // educational institute array
    const [institute, setInstitute] = useState({});

    const [title, setTitle] = useState("");

    const [faculty, setFaculty] = useState("");

    const [specialization, setSpecialization] = useState("");

    const [graduation_year, setGraduation_year] = useState("");

    // add and remove institute object to array educational_insitute
    const addInstitute = () => {
        (institute.title = title),
            (institute.faculty = faculty),
            (institute.specialization = specialization),
            (institute.graduation_year = graduation_year),
            setData("educational_institute", [
                ...data.educational_institute,
                institute,
            ]);

        setInstitute({});

        setTitle("");
        setFaculty("");
        setSpecialization("");
        setGraduation_year("");
    };

    const removeInstitute = (index) => {
        data.educational_institute.splice(index, 1);

        setData("educational_institute", [...data.educational_institute]);
    };

    // company array
    const [company, setCompany] = useState({});

    const [name, setName] = useState("");

    const [position, setPosition] = useState("");

    const [achievements, setAchievements] = useState("");

    const [start_date, setStart_date] = useState("");

    const [end_date, setEnd_date] = useState("");

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

    const destroy = () => {
        router.delete(route("resume.destroy", resume.id));
    };

    const addSkill = () => {
        setData("skills", [...data.skills, skill]);
        setSkill("");
    };

    const removeSkill = (index) => {
        data.skills.splice(index, 1);

        setData("skills", [...data.skills]);
    };

    const saveResume = (e) => {
        e.preventDefault();

        put(route("resume.update", resume.id));
    };

    console.log(errors);

    return (
        <AuthContext.Provider value={{ user }}>
            <>
                <AppPage>
                    <AppText
                        title={resume.profession}
                        size="s"
                        bold
                        className={s.titleResume}
                    />

                    <form onSubmit={saveResume}>
                        <div className={s.basiceData}>
                            <AppInput
                                label={"Профессия"}
                                value={data.profession}
                                onChange={(e) =>
                                    setData("profession", e.target.value)
                                }
                                type="text"
                                className={s.indentDownBasiceData}
                                errorMessage={errors.profession}
                            />

                            <AppInput
                                label={"Фамилия"}
                                value={data.last_name}
                                onChange={(e) =>
                                    setData("last_name", e.target.value)
                                }
                                type="text"
                                className={s.indentDownBasiceData}
                                errorMessage={errors.last_name}
                            />

                            <AppInput
                                label={"Имя"}
                                value={data.first_name}
                                onChange={(e) =>
                                    setData("first_name", e.target.value)
                                }
                                type="text"
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

                            <AppInput
                                label={"Город или регион проживания"}
                                value={data.region}
                                onChange={(e) =>
                                    setData("region", e.target.value)
                                }
                                type="text"
                                className={s.indentDownBasiceData}
                                errorMessage={errors.region}
                            />

                            <AppInput
                                label={"Дата рождения"}
                                value={data.date_of_birth}
                                onChange={(e) =>
                                    setData("date_of_birth", e.target.value)
                                }
                                type="date"
                                width="200px"
                                className={s.indentDownBasiceData}
                                errorMessage={errors.date_of_birth}
                            />

                            <AppInput
                                label={"Номер телефона"}
                                value={data.phone}
                                onChange={(e) =>
                                    setData("phone", e.target.value)
                                }
                                type="text"
                                className={s.indentDownBasiceData}
                                errorMessage={errors.phone}
                            />

                            <AppInput
                                label={"Гражданство"}
                                value={data.citizenship}
                                onChange={(e) =>
                                    setData("citizenship", e.target.value)
                                }
                                type="text"
                                className={s.indentDownBasiceData}
                                errorMessage={errors.citizenship}
                            />

                            <AppInput
                                label={"Разрешение на работу"}
                                value={data.work_permit}
                                onChange={(e) =>
                                    setData("work_permit", e.target.value)
                                }
                                type="text"
                                className={s.indentDownBasiceData}
                                errorMessage={errors.work_permit}
                            />
                        </div>
                        <div className={s.educationResumePage}>
                            <div className={s.levelOfEucation}>
                                <AppText
                                    title={"Уровень образования"}
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
                            </div>

                            {data.educational_institute.map((el, index) => {
                                return (
                                    <div className={s.education}>
                                        <AppInput
                                            value={el.title}
                                            readOnly
                                            label="Название учебного заведения"
                                            type="text"
                                            placeholder="Название"
                                            className={s.indentDownBasiceData}
                                        />

                                        <AppInput
                                            value={el.faculty}
                                            readOnly
                                            label="Факультет"
                                            type="text"
                                            className={s.indentDownBasiceData}
                                        />

                                        <AppInput
                                            value={el.specialization}
                                            readOnly
                                            label="Специализация"
                                            type="text"
                                            className={s.indentDownBasiceData}
                                        />
                                        <div className={s.educationUser}>
                                            <AppInput
                                                value={el.graduation_year}
                                                readOnly
                                                label="Дата окончания"
                                                type="date"
                                                width="140px"
                                                className={
                                                    s.inputYearsEducation
                                                }
                                            />

                                            <AppButton
                                                onClick={() =>
                                                    removeInstitute(index)
                                                }
                                                variant="clear"
                                                sizeText="s"
                                                type="button"
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
                                    label="Название учебного заведения"
                                    type="text"
                                    className={s.indentDownBasiceData}
                                />

                                <AppInput
                                    onChange={(e) => setFaculty(e.target.value)}
                                    value={faculty}
                                    label="Факультет"
                                    type="text"
                                    className={s.indentDownBasiceData}
                                />

                                <AppInput
                                    onChange={(e) =>
                                        setSpecialization(e.target.value)
                                    }
                                    value={specialization}
                                    label="Специализация"
                                    type="text"
                                    className={s.indentDownBasiceData}
                                />
                                <div className={s.educationUser}>
                                    <AppInput
                                        onChange={(e) =>
                                            setGraduation_year(e.target.value)
                                        }
                                        value={graduation_year}
                                        label="Дата окончания"
                                        type="date"
                                        width="140px"
                                        className={s.inputYearsEducation}
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
                                    <option value="Не выбрано">
                                        Не выбрано
                                    </option>
                                    <option value="менее года">
                                        менее года
                                    </option>
                                    <option value="от года до трех">
                                        от года до трех
                                    </option>
                                    <option value="от трех и выше">
                                        от трех и выше
                                    </option>
                                </select>
                                <div style={{ color: "red" }}>
                                    {errors.experience}
                                </div>
                            </div>

                            <div className={s.education}>
                                {data.companies.map((el, index) => {
                                    return (
                                        <>
                                            <AppInput
                                                value={el.name}
                                                readOnly
                                                label="В какой компании вы работали?"
                                                type="text"
                                                className={
                                                    s.indentDownBasiceData
                                                }
                                            />

                                            <AppInput
                                                value={el.position}
                                                readOnly
                                                label="На какой должности?"
                                                type="text"
                                                className={
                                                    s.indentDownBasiceData
                                                }
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
                                                value={el.achievements}
                                                readOnly
                                                className={s.textareaBasiceData}
                                            />
                                            <div className={s.experienceWork}>
                                                <AppInput
                                                    value={el.start_date}
                                                    readOnly
                                                    type="date"
                                                    label="Начало работы"
                                                    width="140px"
                                                    className={
                                                        s.indentDownBasiceData
                                                    }
                                                />

                                                {el.end_date ? (
                                                    <AppInput
                                                        value={el.end_date}
                                                        readOnly
                                                        label="Окончание работы"
                                                        type="date"
                                                        width="140px"
                                                        className={
                                                            s.indentDownBasiceData
                                                        }
                                                    />
                                                ) : (
                                                    <div
                                                        className={
                                                            s.inputEndingWork
                                                        }
                                                    >
                                                        <label for="checkboxEndingWork">
                                                            <AppText
                                                                title={
                                                                    "По настоящее время"
                                                                }
                                                                size={"xs"}
                                                                className={
                                                                    s.textTitleEnding
                                                                }
                                                            />
                                                        </label>
                                                    </div>
                                                )}

                                                <AppButton
                                                    onClick={() =>
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
                            </div>

                            <AppInput
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                label="В какой компании вы работали?"
                                type="text"
                                className={s.indentDownBasiceData}
                            />

                            <AppInput
                                onChange={(e) => setPosition(e.target.value)}
                                value={position}
                                label="На какой должности?"
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
                                value={achievements}
                                onChange={(e) =>
                                    setAchievements(e.target.value)
                                }
                                className={s.textareaBasiceData}
                            />
                            <div className={s.experienceWork}>
                                <AppInput
                                    value={start_date}
                                    onChange={(e) =>
                                        setStart_date(e.target.value)
                                    }
                                    label="Начало работы"
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

                                <div className={s.inputEndingWork}>
                                    <input
                                        id="checkboxEndingWork"
                                        value={checkbox}
                                        onChange={() => setCheckbox(!checkbox)}
                                        type="checkbox"
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
                                <AppButton
                                    onClick={addCompany}
                                    variant="clear"
                                    sizeText="s"
                                    type="button"
                                    bold
                                    className={s.buttonYearsExperience}
                                >
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
                                            onClick={() => removeSkill(index)}
                                            variant="outline"
                                            sizeText="xs"
                                            bold
                                            type="button"
                                            className={s.buttonSkillDelete}
                                        >
                                            {" "}
                                            Удалить
                                        </AppButton>
                                    </div>
                                );
                            })}
                            <input
                                type="text"
                                onChange={(e) => setSkill(e.target.value)}
                                value={skill}
                                className={s.textSkill}
                            />

                            <AppButton
                                onClick={() => addSkill()}
                                variant="outline"
                                sizeText="s"
                                bold
                                type="button"
                                className={s.buttonSkillAdd}
                            >
                                {" "}
                                Добавить
                            </AppButton>
                            <div style={{ color: "red" }}>{errors.skills}</div>
                        </div>
                        
                        <div className={s.buttonUpdateResume}>
                            <AppButton sizeText="s" bold type="submit">
                                Изменить
                            </AppButton>

                            <AppButton
                                onClick={destroy}
                                id={resume.id}
                                type="button"
                                sizeText="s"
                                bold
                                className={s.buttonDeleteResume}
                            >
                                Удалить
                            </AppButton>
                        </div>
                    </form>
                </AppPage>
            </>
        </AuthContext.Provider>
    );
}

export default Resume;
