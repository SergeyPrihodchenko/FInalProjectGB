import { useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import { AuthContext } from "@/8Shared/store/AuthContext";
import s from "./CreateResume.module.css";
import AppText from "@/8Shared/ui/AppText/AppText";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import AppInput from "@/8Shared/ui/AppInput/AppInput";

const arrayEducation = [
    "Среднее",
    "Среднее специальное",
    "Неоконченное высшее",
    "Высшее образование",
    "Бакалавр",
    "Магистр",
    "Кандидат наук",
    // "Доктор наук",
];

const arrayExperience = [
    // "без опыта",
    "менее года",
    "от года до трех",
    "от трех и выше",

]

function CreateResume(){

    const user = usePage().props.auth.user

    const {data, setData, post, errors} = useForm({
        user_id: user.id,
        profession: '',
        first_name: '',
        last_name: '', 
        gender: '',
        region: '',
        date_of_birth: '',
        phone: '',
        citizenship: '',
        work_permit: '',
        education: '',
        educational_institute: [],
        companies: [],
        skills: [],
        experience: ''
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

    console.log(data.educational_institute);

    // company array
    const [company, setCompany] = useState({});

    const [name, setName] = useState('');

    const [position, setPosition] = useState('');

    const [achievements, setAchievements] = useState('');

    const [start_date, setStart_date] = useState('');

    const [end_date, setEnd_date] = useState('');

    const removeInstitute = (index) => {

        data.educational_institute.splice(index, 1)

        setData('educational_institute', [...data.educational_institute])
    }

    // add and remove company object to array company
    const addCompany = () => {
        company.name = name,
        company.position = position,
        company.achievements = achievements,
        company.start_date = start_date,
        company.end_date = checkbox ? null : end_date

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

    const [checkbox, setCheckbox] = useState(false);

    console.log(checkbox);

    console.log(data.companies);

    const saveResume = (e) => {
        e.preventDefault();

        post(route('resume.store'))
    }

    const addSkill = () => {
        setData('skills', [...data.skills, skill])
    }

    const removeSkill = (index) => {
        data.skills.splice(index, 1)

        setData('skills', [...data.skills])
    }  

    return(
        <AuthContext.Provider value={{user}}>
            <MainLayout className={"app_light_theme"}>
                <AppPage>
                    <form onSubmit={saveResume}>
                  
                        <div className={s.basiceData}>
                            <AppInput
                                label={"Профессия"}
                                value={data.profession} 
                                onChange={e => setData('profession', e.target.value)} 
                                type="text" 
                                placeholder="Дизайнер"
                                className={s.indentDownBasiceData}
                                errorMessage={errors.profession} 
                            />
                                                       
                            <AppInput 
                                label={"Фамилия"}
                                value={data.last_name} 
                                onChange={e => setData('last_name', e.target.value)} 
                                type="text" 
                                placeholder="Фамилия"
                                className={s.indentDownBasiceData}
                                errorMessage={errors.last_name}
                            />
                            
                            <AppInput 
                                label={"Имя"}
                                value={data.first_name} 
                                onChange={e => setData('first_name', e.target.value)} 
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
                                <input
                                    onChange={e => setData('gender', e.target.value)}
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
                                    onChange={e => setData('gender', e.target.value)}
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
                            </div>
                            {/* <select name="gender" id="gender"
                                onChange={e => setData('gender', e.target.value)}
                                value={data.gender}
                            >
                                <option value="">Не выбран</option>
                                <option value="Мужской">Мужской</option>
                                <option value="Женский">Женский</option>
                            </select>
                            <div style={{color: "red"}}>{errors.gender}</div>*/} 
                                            

                            <AppInput 
                                label={"Город или регион проживания"}
                                value={data.region} 
                                onChange={e => setData('region', e.target.value)} 
                                type="text"
                                placeholder="Москва"
                                className={s.indentDownBasiceData}
                                errorMessage={errors.region}
                            />
                           
                            <AppInput
                                label={"Дата рождения"} 
                                value={data.date_of_birth} 
                                onChange={e => setData('date_of_birth', e.target.value)} 
                                type="date" 
                                width="140px"
                                className={s.indentDownBasiceData}
                                errorMessage={errors.date_of_birth}
                            />
                                                   
                            <AppInput
                                label={"Номер телефона"}
                                value={data.phone} 
                                onChange={e => setData('phone', e.target.value)} 
                                type="text"
                                placeholder="+7 (999) 999-99-99"
                                className={s.indentDownBasiceData}
                                errorMessage={errors.phone}    
                            />
                           
                            <AppInput
                                label={"Гражданство"}
                                value={data.citizenship} 
                                onChange={e => setData('citizenship', e.target.value)} 
                                type="text"
                                placeholder="Россия"
                                className={s.indentDownBasiceData}
                                errorMessage={errors.citizenship}
                            />
                           
                            <AppInput
                                label={"Разрешение на работу"} 
                                value={data.work_permit} 
                                onChange={e => setData('work_permit', e.target.value)} 
                                type="text"
                                placeholder="Россия"
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
                                    {arrayEducation.map((el) => {
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
                                                        size={"s"}
                                                        className={s.textInputRadio}
                                                    />
                                                </label>
                                                <div style={{color: "red"}}>{errors.education}</div>
                                            </div>
                                            
                                        );
                                    })}
                                </div>
                            </div>

                            {/* <select name="education" id="education"
                                onChange={e => setData('education', e.target.value)}
                                value={data.education}
                            >
                                <option value="Не выбрано">Не выбрано</option>
                                <option value="Среднее">Среднее</option>
                                <option value="Среднее специальное">Среднее специальное</option>
                                <option value="Неоконченное высшее">Неоконченное высшее</option>
                                <option value="Высшее образование">Высшее образование</option>
                                <option value="Бакалавр">Бакалавр</option>
                                <option value="Магистр">Магистр</option>
                                <option value="Кандидат наук">Кандидат наук</option>
                                <option value="Доктор наук">Доктор наук</option>
                            </select>
                            <div style={{color: "red"}}>{errors.education}</div>
                         */}

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
                                    <AppInput
                                        label={"Название учебного заведения"}
                                        type="text"
                                        placeholder="Название"
                                        value={title}
                                        onChange={e => setTitle(e.target.value)}
                                        className={s.indentDownBasiceData}
                                    />

                                    <AppInput
                                        label={"Факультет"}
                                        type="text"
                                        value={faculty}
                                        onChange={e => setFaculty(e.target.value)}
                                        className={s.indentDownBasiceData}
                                    />

                                    <AppInput
                                        label={"Специализация"}
                                        type="text"
                                        className={s.inputBasiceData}
                                        value={specialization}
                                        onChange={e => setSpecialization(e.target.value)}
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
                                        value={graduation_year}
                                        onChange={e => setGraduation_year(e.target.value)}
                                    />
                                        
                                </div>

                                <AppButton
                                    variant = "outline"
                                    sizeText = "s"
                                />
                                <AppText
                                    title={
                                        <input
                                            type="button"
                                            onClick={addInstitute}
                                            value="Добавить учебное заведение"
                                            className={s.buttonYearsEducation}
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
                                {arrayExperience.map((el) => {
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
                                                    size={"s"}
                                                    className={s.textInputRadio}
                                                />
                                            </label>
                                            <div style={{color: "red"}}>{errors.experience}</div>
                                        </div>
                                                
                                            );
                                        })}
                                    </div>
                            {/* <label>Опыт работы</label>
                            <select name="experience" id="experience"
                                onChange={e => setData('experience', e.target.value)}
                                value={data.experience}
                            >
                                <option value="Не выбрано">Не выбрано</option>
                                <option value="менее года">менее года</option>
                                <option value="от года до трех">от года до трех</option>
                                <option value="от трех и выше">от трех и выше</option>
                            </select>
                            <div style={{color: "red"}}>{errors.experience}</div> */}

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
                                                placeholder="Название компании"
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
                                                className={s.textareaBasiceData}
                                                value={el.achievements}
                                                readOnly
                                                placeholder="Например, изучали и анализировали информацию, технические данные, показатели и результаты работы, обобщали и систематизировали их"
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
                                                        readOnly
                                                        value={el.start_date}
                                                        className={s.inputResumeDataBasice}
                                                    />
                                                </div>

                                                <div className={s.experienceBeginningWork}>
                                                    <AppText
                                                        title={"Окончание работы"}
                                                        bold
                                                        size={"s"}
                                                        className={s.textTitle}
                                                    />
                                                    <input 
                                                        type="date" 
                                                        readOnly
                                                        value={el.end_date}
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
                                                            readOnly
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
                                                            onClick={e => removeCompany(index)}
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
                            
                            <AppInput
                                label={"В какой компании вы работали?"}
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Название компании"
                                className={s.indentDownBasiceData}
                            />

                            <AppInput
                                label={"На какой должности?"}
                                type="text"
                                value={position}
                                onChange={(e) => setPosition(e.target.value)}
                                className={s.indentDownBasiceData}
                            />

                            <AppText
                                title={"Расскажите о ваших обязанностях и достижениях"}
                                bold
                                size={"xs"}
                                className={s.textTitle}
                            />
                                <textarea
                                    value={achievements}
                                    onChange={(e) => setAchievements(e.target.value)}
                                    className={s.textareaBasiceData}
                                    placeholder="Например, изучали и анализировали информацию, технические данные, показатели и результаты работы, обобщали и систематизировали их"
                                />
                                
                            <div className={s.experienceWork}>
                                                
                                <div className={s.experienceBeginningWork}>         
                                    <AppInput 
                                        label={"Начало работы"}
                                        type="date" 
                                        className={s.indentDownBasiceData}
                                        value={start_date}
                                        onChange={(e) => setStart_date(e.target.value)}
                                        width="140px"
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
                                            value={checkbox}
                                            onClick={() => setCheckbox(!checkbox)}
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

                                <AppButton
                                    variant = "outline"
                                    sizeText = "s"
                                    bold
                                    type="button"
                                    className={s.buttonYearsExperience}
                                > Добавить еще опыт работы
                                </AppButton>
                                <AppText
                                    title={
                                        <input
                                            type="button"
                                            onClick={addCompany}
                                            value="Добавить опыт работы"
                                            className={s.buttonYearsExperience}
                                        />}
                                    bold
                                    size={"s"}
                                /> 
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
                                                                                                
                                                {/* <p>{skill}</p> */}
                                                {/* <button type="button" onClick={() => removeSkill(index)}>Удалить</button> */}
                                                
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
                                                > Удалить
                                                </AppButton>
                                            
                                            </div>
                                })}
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
                                > Добавить
                                </AppButton>
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

                        <AppButton 
                            type="submit"
                            bold 
                            sizeText = "s"
                            className={s.buttonSave}>
                                <span>Сохранить</span>
                            </AppButton>

                        {/* <button
                            type="submit"
                            className="px-4 py-2 text-black bg-gray-300 rounded"
                        >
                            Сохранить
                        </button> */}
             
                    </form>
                </AppPage>
            </MainLayout>
        </AuthContext.Provider>
    )
}

export default CreateResume;