import React, { useState } from "react";
import { router, useForm, usePage } from "@inertiajs/react";
import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import { AuthContext } from "@/8Shared/store/AuthContext";
import s from "./ResumeUpdate.module.css";
import AppText from "@/8Shared/ui/AppText/AppText";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import AppInput from "@/8Shared/ui/AppInput/AppInput";

// const arrayEducation = [
//     "Среднее",
//     "Среднее специальное",
//     "Неоконченное высшее",
//     "Высшее образование",
//     "Бакалавр",
//     "Магистр",
//     "Кандидат наук",
//    // "Доктор наук",
// ];

// const arrayExperience = [
//     // "без опыта",
//     "менее года",
//     "от года до трех",
//     "от трех и выше",

// ]

function Resume({resume}){

    const user = usePage().props.auth.user

    const {data, setData, put, errors} = useForm({
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
        experience: resume.experience
    })

    const [skill, setSkill] = useState('');

    // educational institute array
    const [institute, setInstitute] = useState({})

    const [title, setTitle] = useState('');

    const [faculty, setFaculty] = useState('');

    const [specialization, setSpecialization] = useState('');
    
    const [graduation_year, setGraduation_year] = useState('');

    // add and remove institute object to array educational_insitute
    const addInstitute = () => {
        
        institute.title = title,
        institute.faculty = faculty,
        institute.specialization = specialization,
        institute.graduation_year = graduation_year,

        setData('educational_institute', [...data.educational_institute, institute])

        setInstitute({})

        setTitle('')
        setFaculty('')
        setSpecialization('')
        setGraduation_year('')
    }

    const removeInstitute = (index) => {

        data.educational_institute.splice(index, 1)

        setData('educational_institute', [...data.educational_institute])
    }

    // company array
    const [company, setCompany] = useState({});

    const [name, setName] = useState('');

    const [position, setPosition] = useState('');

    const [achievements, setAchievements] = useState('');

    const [start_date, setStart_date] = useState('');

    const [end_date, setEnd_date] = useState('');

    // add and remove company object to array company
    const addCompany = () => {
        company.name = name,
        company.position = position,
        company.achievements = achievements,
        company.start_date = start_date,
        company.end_date = end_date

        setData('companies', [...data.companies, company])

        setCompany({})

        setName('')
        setPosition('')
        setAchievements('')
        setStart_date('')
        setEnd_date('')
    }

    const removeCompany = (index) => {
        data.companies.splice(index, 1)

        setData('companies', [...data.companies])
    }

    const destroy = () => {
        router.delete(route("resume.destroy", resume.id ));
    }

    const addSkill = () => {
        setData('skills', [...data.skills, skill])
    }

    const removeSkill = (index) => {
        data.skills.splice(index, 1)

        setData('skills', [...data.skills])
    }  

    const saveResume = (e) => {
        e.preventDefault()

        put(route('resume.update', resume.id))
    }

    console.log(errors);

    return(
        <AuthContext.Provider value={{user}}>
        <MainLayout className={"app_light_theme"}>
            <AppPage>
                <AppText 
                    title={resume.profession} 
                    size="s"
                    bold
                    className={s.titleResume}
                        />
                {/* <h2>{resume.profession}</h2> */}

                <form onSubmit={saveResume}>

                    <div className={s.basiceData}>
                        <AppInput
                            label={"Профессия"} 
                            value={data.profession} 
                            onChange={e => setData('profession', e.target.value)} 
                            type="text" 
                            className={s.indentDownBasiceData}
                            errorMessage={errors.profession} 
                        />
                            
                        <AppInput 
                            label={"Фамилия"}
                            value={data.last_name} 
                            onChange={e => setData('last_name', e.target.value)} 
                            type="text" 
                            className={s.indentDownBasiceData}
                            errorMessage={errors.last_name}
                        />
                            
                        <AppInput 
                            label={"Имя"}
                            value={data.first_name} 
                            onChange={e => setData('first_name', e.target.value)} 
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
                            <select name="gender" id="gender"
                                onChange={e => setData('gender', e.target.value)}
                                value={data.gender}
                                className={s.inputResumeDataBasice}
                            >
                                <option value="">Не выбран</option>
                                <option value="Мужской">Мужской</option>
                                <option value="Женский">Женский</option>
                            </select>
                            <div style={{color: "red"}}>{errors.gender}</div>
                            {/* <input
                                onChange={e => setData('gender', e.target.value)}
                                value="Мужской"
                                type="radio"
                                name="gender"
                                id="genderMen"
                                className={s.inputRadioCreateResume}
                            />
                            <label htmlFor="genderMen">
                                <AppText
                                    text={"Мужской"}
                                    size={"m"}
                                    className={s.textInputRadio}
                                />
                            </label>
                                                    
                            <input
                                onChange={e => setData('gender', e.target.value)}
                                value="Женский"
                                type="radio"
                                name="gender"
                                id="genderWoman"
                                className={s.inputRadioCreateResume}
                            />
                            <label htmlFor="genderWoman">
                                <AppText
                                    text={"Женский"}
                                    size={"m"}
                                    className={s.textInputRadio}
                                />
                            </label>  
                            <div style={{color: "red"}}>{errors.gender}</div>  */} 
                              
                        </div>
                    
                        <AppInput 
                            label={"Город или регион проживания"} 
                            value={data.region} 
                            onChange={e => setData('region', e.target.value)} 
                            type="text"
                            className={s.indentDownBasiceData}
                            errorMessage={errors.region}
                        />

                        <AppInput
                            label={"Дата рождения"} 
                            value={data.date_of_birth} 
                            onChange={e => setData('date_of_birth', e.target.value)} 
                            type="date" 
                            width="200px"
                            className={s.indentDownBasiceData}
                            errorMessage={errors.date_of_birth}
                        /> 
                        
                        <AppInput
                            label={"Номер телефона"}
                            value={data.phone} 
                            onChange={e => setData('phone', e.target.value)} 
                            type="text"
                            className={s.indentDownBasiceData}
                            errorMessage={errors.phone}    
                        />

                        <AppInput
                            label={"Гражданство"}
                            value={data.citizenship} 
                            onChange={e => setData('citizenship', e.target.value)} 
                            type="text"
                            className={s.indentDownBasiceData}
                            errorMessage={errors.citizenship}
                        />

                        <AppInput
                            label={"Разрешение на работу"} 
                            value={data.work_permit} 
                            onChange={e => setData('work_permit', e.target.value)} 
                            type="text"
                            className={s.indentDownBasiceData}
                            errorMessage={errors.work_permit}
                        />
                       
                    
                    {/* <div> 
                        <label>Профессия</label>
                        <input 
                            value={data.profession} 
                            onChange={e => setData('profession', e.target.value)} 
                            type="text" 
                        />
                        <div style={{color: "red"}}>{errors.profession}</div>
                    </div>

                    <div>
                        <label>Имя</label>
                        <input 
                            value={data.first_name} 
                            onChange={e => setData('first_name', e.target.value)} 
                            type="text" 
                        />
                        <div style={{color: "red"}}>{errors.first_name}</div>
                    </div>

                    <div>
                        <label>Фамилия</label>
                        <input 
                            value={data.last_name} 
                            onChange={e => setData('last_name', e.target.value)} 
                            type="text" 
                        />
                        <div style={{color: "red"}}>{errors.last_name}</div>
                    </div>

                    <div>
                        <label>Пол</label>
                        <select name="gender" id="gender"
                            onChange={e => setData('gender', e.target.value)}
                            value={data.gender}
                        >
                            <option value="">Не выбран</option>
                            <option value="Мужской">Мужской</option>
                            <option value="Женский">Женский</option>
                        </select>
                        <div style={{color: "red"}}>{errors.gender}</div>
                    </div>

                    <div>
                        <label>Регион</label>
                        <input 
                            value={data.region} 
                            onChange={e => setData('region', e.target.value)} 
                            type="text" 
                        />
                        <div style={{color: "red"}}>{errors.region}</div>
                    </div>

                    <div>
                        <label>Дата рождения</label>
                        <input 
                            value={data.date_of_birth} 
                            onChange={e => setData('date_of_birth', e.target.value)} 
                            type="date" 
                        />
                        <div style={{color: "red"}}>{errors.date_of_birth}</div>
                    </div>

                    <div>
                        <label>Телефон</label>
                        <input 
                            value={data.phone} 
                            onChange={e => setData('phone', e.target.value)} 
                            type="text" 
                        />
                        <div style={{color: "red"}}>{errors.phone}</div>
                    </div>

                    <div>
                        <label>Гражданство</label>
                        <input 
                            value={data.citizenship} 
                            onChange={e => setData('citizenship', e.target.value)} 
                            type="text" 
                        />
                        <div style={{color: "red"}}>{errors.citizenship}</div>
                    </div>

                    <div>
                        <label>Разрешение на работу</label>
                        <input 
                            value={data.work_permit} 
                            onChange={e => setData('work_permit', e.target.value)} 
                            type="text" 
                        />
                        <div style={{color: "red"}}>{errors.work_permit}</div>
                    </div> */}
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
                               <select name="education" id="education"
                                    onChange={e => setData('education', e.target.value)}
                                    value={data.education}
                                    className={s.inputResumeDataBasice}
                                >
                                    <option value="Не выбрано">Не выбрано</option>
                                    <option value="Среднее">Среднее</option>
                                    <option value="Среднее специальное">Среднее специальное</option>
                                    <option value="Неоконченное высшее">Неоконченное высшее</option>
                                    <option value="Высшее образование">Высшее образование</option>
                                    <option value="Бакалавр">Бакалавр</option>
                                    <option value="Магистр">Магистр</option>
                                    <option value="Кандидат наук">Кандидат наук</option>
                                </select>
                                <div style={{color: "red"}}>{errors.education}</div>
                   
                                {/* {arrayEducation.map((el) => {
                                    // console.log(el);
                                    return (
                                        <div className={s.inputRadioBasiceData}>
                                            <input 
                                                name="education"
                                                id={el}
                                                onChange={e => setData('education', e.target.value)}
                                                value={el}
                                                type="radio" 
                                                className={s.inputRadioCreateResume} 
                                            />
                                            <label for={el}>
                                                <AppText
                                                    text={el}
                                                    size={"m"}
                                                    className={s.textInputRadio}
                                                />
                                            </label>
                                            <div style={{color: "red"}}>{errors.education}</div>
                                        </div>
                                    );
                                })} */}
                            </div>
                        </div>

                        {
                            data.educational_institute.map((el, index) => {
                                return(
                                    <div className={s.education}>
                                    <div>
                                        <AppText
                                            title={"Название учебного заведения"}
                                            bold
                                            size={"s"}
                                            className={s.textTitle}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Название"
                                            value={el.title}
                                            readOnly
                                            className={s.inputBasiceData}
                                        />

                                        <AppText
                                            title={"Факультет"}
                                            bold
                                            size={"s"}
                                            className={s.textTitle}
                                        />
                                        <input
                                            type="text"
                                            className={s.inputBasiceData}
                                            value={el.faculty}
                                            readOnly
                                        />

                                        <AppText
                                            title={"Специализация"}
                                            bold
                                            size={"s"}
                                            className={s.textTitle}
                                        />
                                        <input
                                            type="text"
                                            className={s.inputBasiceData}
                                            value={el.specialization}
                                            readOnly
                                        />

                                        <AppText
                                            title={"Год окончания"}
                                            bold
                                            size={"s"}
                                            className={s.textTitle}
                                        />
                                        <input
                                            type="date"
                                            className={s.inputYearsEducation}
                                            value={el.graduation_year}
                                            readOnly
                                        />
                                    </div>

                                    <AppText
                                        title={
                                            <input
                                                type="button"
                                                onClick={() => removeInstitute(index)}
                                                value="Удалить"
                                                className={s.buttonYearsEducation}
                                            />}
                                        bold
                                        size={"s"}
                                    />
                                </div> 
                                )
                            })
                        }        

                        <div className={s.education}>
                            <div>
                                <AppText
                                    title={"Название учебного заведения"}
                                    bold
                                    size={"s"}
                                    className={s.textTitle}
                                />
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e)=> setTitle(e.target.value)}
                                    className={s.inputBasiceData}
                                />

                                <AppText
                                    title={"Факультет"}
                                    bold
                                    size={"s"}
                                    className={s.textTitle}
                                />
                                <input
                                    type="text"
                                    value={faculty}
                                    onChange={(e)=> setFaculty(e.target.value)}
                                    className={s.inputBasiceData}
                                />

                                <AppText
                                    title={"Специализация"}
                                    bold
                                    size={"s"}
                                    className={s.textTitle}
                                />
                                <input
                                    type="text"
                                    value={specialization}
                                    onChange={(e)=> setSpecialization(e.target.value)}
                                    className={s.inputBasiceData}
                                />

                                <AppText
                                    title={"Год окончания"}
                                    bold
                                    size={"s"}
                                    className={s.textTitle}
                                />
                                <input
                                    type="date"
                                    value={graduation_year}
                                    onChange={(e)=> setGraduation_year(e.target.value)}
                                    className={s.inputYearsEducation}
                                />
                            </div>

                            <AppText
                                title={
                                    <input
                                        type="button"
                                        value="Добавить учебное заведение"
                                        className={s.buttonYearsEducation}
                                        onClick={addInstitute}
                                    />}
                                bold
                                type="button"
                                className={s.buttonYearsEducation}
                            /> Добавить учебное заведение
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
                            <select name="experience" id="experience"
                                onChange={e => setData('experience', e.target.value)}
                                value={data.experience}
                                className={s.inputResumeDataBasice}
                            >
                                <option value="Не выбрано">Не выбрано</option>
                                <option value="менее года">менее года</option>
                                <option value="от года до трех">от года до трех</option>
                                <option value="от трех и выше">от трех и выше</option>
                            </select>
                            <div style={{color: "red"}}>{errors.experience}</div>
                            
                            {/* {arrayExperience.map((el) => {
                                // console.log(el);
                                return (
                                    <div className={s.inputRadioBasiceData}>
                                        <input 
                                            name="experience"
                                            id={el}
                                            onChange={e => setData('experience', e.target.value)}
                                            value={el}
                                            type="radio" 
                                            className={s.inputRadioCreateResume} 
                                        />
                                        <label for={el}>
                                            <AppText
                                                text={el}
                                                size={"m"}
                                                className={s.textInputRadio}
                                            />
                                        </label>
                                        <div style={{color: "red"}}>{errors.experience}</div>
                                    </div>
                                                
                                );
                            })} */}
                        </div>

                        <div className={s.education}>
                            {
                                data.companies.map((el, index) => {
                                    return(
                                        <>
                                            <AppText
                                                title={"В какой компании вы работали?"}
                                                bold
                                                size={"s"}
                                                className={s.textTitle}
                                            />
                                            <input
                                                type="text"
                                                value={el.name}
                                                readOnly
                                                className={s.inputBasiceData}
                                            />

                                            <AppText
                                                title={"На какой должности?"}
                                                bold
                                                size={"s"}
                                                className={s.textTitle}
                                            />
                                            <input
                                                type="text"
                                                value={el.position}
                                                readOnly
                                                className={s.inputBasiceData}
                                            />

                                            <AppText
                                                title={"Расскажите о ваших обязанностях и достижениях"}
                                                bold
                                                size={"s"}
                                                className={s.textTitle}
                                            />
                                            <textarea
                                                value={el.achievements}
                                                readOnly
                                                className={s.textareaBasiceData}
                                            />
                                            <div className={s.experienceWork}>
                                                <div className={s.experienceBeginningWork}>
                                                    <AppText
                                                        title={"Начало работы"}
                                                        bold
                                                        size={"s"}
                                                        className={s.textTitle}
                                                    />
                                                    <input 
                                                        type="date" 
                                                        value={el.start_date}
                                                        readOnly
                                                        className={s.inputResumeDataBasice}
                                                    />
                                                </div>

                                                <div className={s.experienceEndingWork}>
                                                    <AppText
                                                        title={"Окончание"}
                                                        bold
                                                        size={"s"}
                                                        className={s.textTitle}
                                                    />
                                                    <input 
                                                        type="date" 
                                                        value={el.end_date}
                                                        readOnly
                                                        className={s.inputResumeDataBasice}
                                                    />
                                                </div>

                                                <div className={s.experienceEndingWork}>
                                                    <AppText
                                                        title={"Окончание"}
                                                        bold
                                                        size={"s"}
                                                        className={s.textTitle}
                                                    />
                                                    <div className={s.inputEndingWork}>
                                                        <input 
                                                            type="checkbox"
                                                            className={s.checkboxEndingWork} 
                                                            id="checkboxEndingWork"
                                                        />
                                                        <label for="checkboxEndingWork">
                                                            <AppText
                                                                title={"По настоящее время"}
                                                                size={"s"}
                                                                className={s.textTitleEnding}
                                                            />
                                                        </label>
                                                    </div>
                                                </div>

                                                <AppText
                                                    title={
                                                        <input
                                                            type="button"
                                                            value="Удалить компанию"
                                                            onClick={() => removeCompany(index)}
                                                            className={s.buttonYearsExperience}
                                                        />}
                                                    bold
                                                    size={"s"}
                                                /> 
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                                        
                        <AppText
                            title={"В какой компании вы работали?"}
                            bold
                            size={"s"}
                            className={s.textTitle}
                        />
                        <input
                            type="text"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            className={s.inputBasiceData}
                        />

                        <AppText
                            title={"На какой должности?"}
                            bold
                            size={"s"}
                            className={s.textTitle}
                        />
                        <input
                            type="text"
                            value={position}
                            onChange={(e)=>setPosition(e.target.value)}
                            className={s.inputBasiceData}
                        />

                        <AppText
                            title={"Расскажите о ваших обязанностях и достижениях"}
                            bold
                            size={"s"}
                            className={s.textTitle}
                        />
                        <textarea
                            value={achievements}
                            onChange={(e)=>setAchievements(e.target.value)}
                            className={s.textareaBasiceData}
                        />
                        <div className={s.experienceWork}>
                            <div className={s.experienceBeginningWork}>
                                <AppText
                                    title={"Начало работы"}
                                    bold
                                    size={"s"}
                                    className={s.textTitle}
                                />
                                <input 
                                    type="date" 
                                    value={start_date}
                                    onChange={(e)=>setStart_date(e.target.value)}
                                    className={s.inputResumeDataBasice}
                                />
                            </div>

                            <div className={s.experienceEndingWork}>
                                <AppText
                                    title={"Окончание работы"}
                                    bold
                                    size={"s"}
                                    className={s.textTitle}
                                />
                                <input 
                                    type="date" 
                                    value={end_date}
                                    onChange={(e)=>setEnd_date(e.target.value)}
                                    className={s.inputResumeDataBasice}
                                />
                            </div>

                            <div className={s.experienceEndingWork}>
                                <AppText
                                    title={"Окончание"}
                                    bold
                                    size={"xs"}
                                    className={s.textTitle}
                                />
                                <div className={s.inputEndingWork}>
                                    <input 
                                        type="checkbox"
                                        className={s.checkboxEndingWork} 
                                        id="checkboxEndingWork"
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

                            <AppText
                                title={
                                    <input
                                        type="button"
                                        value="Добавить еще опыт работы"
                                        onClick={addCompany}
                                        className={s.buttonYearsExperience}
                                    />}
                                bold
                                type="button"
                                className={s.buttonYearsExperience}
                            /> Добавить еще опыт работы
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
                            return <div className={s.keySkillsTextAll} key={index}>
                                    <AppText
                                        title={skill}
                                        size={"xs"}
                                        className={s.textSkills}
                                    />
                                    <AppButton
                                        onClick={() => removeSkill(index)}
                                        variant = "outline"
                                        sizeText = "xs"
                                        bold
                                        type="button"
                                        className={s.buttonSkillDelete}
                                    > Удалить</AppButton>
                                </div>
                            }
                        )}
                        <input
                            type="text"
                            onChange={e => setSkill(e.target.value)}
                            value={skill}
                            className={s.textSkill} 
                        />

                        <AppButton
                            onClick={() => addSkill()}
                            variant = "outline"
                            sizeText = "s"
                            bold
                            type="button"
                            className={s.buttonSkillAdd}
                        > Добавить</AppButton>
                        <div style={{color: "red"}}>{errors.skills}</div>
                    
                    
                    {/* <div>
                        <label>Ключевые навыки</label>
                        {data.skills.map((skill, index) => {
                            return <div className="px-4 py-2 bg-gray-100 rounded" key={index}>
                                    <p>{skill}</p>
                                    <button type="button" onClick={() => removeSkill(index)}>Удалить</button>
                                </div>
                        })}
                        <input
                            type="text"
                            onChange={e => setSkill(e.target.value)}
                            value={skill} 
                        />
                        <button type="button" onClick={() => addSkill()}>Добавить</button>
                        <div style={{color: "red"}}>{errors.skills}</div>
                    </div> */}
                    </div>
                    <div className={s.buttonResume}>
                        <AppButton
                                sizeText = "s"
                                bold
                                type="submit"
                        >  Изменить</AppButton>

                        <AppButton
                            onClick={destroy}
                            id={resume.id}
                            type="button"
                            sizeText = "s"
                            bold
                            className={s.buttonDeleteResume}
                        >  Удалить</AppButton>
                        {/* <button
                            type="submit"
                            className="px-4 py-2 text-black bg-gray-300 rounded"
                        >
                            Изменить
                        </button>
                        
                        <button
                        onClick={destroy}
                        id={resume.id}
                        type="button"
                        className="px-4 py-2 text-white bg-red-400 rounded"
                        >
                            Удалить
                        </button> */}
                    </div>
                </form>
            </AppPage>
        </MainLayout>
        </AuthContext.Provider>
    )
}

export default Resume