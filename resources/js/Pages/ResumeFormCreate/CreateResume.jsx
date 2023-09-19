import { useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import { AuthContext } from "@/8Shared/store/AuthContext";
import s from "./BasiceDataResumePage/BasiceDataResumePage.module.css";
import AppText from "@/8Shared/ui/AppText/AppText";
import BasiceDataResumePage from "./BasiceDataResumePage/BasiceDataResumePage";

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
        skills: [],
        experience: ''
    })

    const [skill, setSkill] = useState('');

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
                        <BasiceDataResumePage/>
{/*                         
                        <div className={s.basiceData}>
                            <div>
                                <AppText
                                    title={"Профессия"}
                                    bold
                                    size={"s"}
                                    className={s.textTitle}
                                />
                                <input 
                                    value={data.profession} 
                                    onChange={e => setData('profession', e.target.value)} 
                                    type="text" 
                                    placeholder="Дизайнер"
                                    className={s.inputBasiceData}
                                />
                                <div style={{color: "red"}}>{errors.profession}</div>
                            </div>
              
                            <div>
                                <AppText
                                    title={"Фамилия"}
                                    bold
                                    size={"s"}
                                    className={s.textTitle}
                                />
                                <input 
                                    value={data.last_name} 
                                    onChange={e => setData('last_name', e.target.value)} 
                                    type="text" 
                                    placeholder="Фамилия"
                                    className={s.inputBasiceData}
                                />
                                <div style={{color: "red"}}>{errors.last_name}</div>
                            </div>

                            <div>
                                <AppText
                                    title={"Имя"}
                                    bold
                                    size={"s"}
                                    className={s.textTitle}
                                />
                                <input 
                                    value={data.first_name} 
                                    onChange={e => setData('first_name', e.target.value)} 
                                    type="text" 
                                    placeholder="Имя"
                                    className={s.inputBasiceData}
                                />
                                <div style={{color: "red"}}>{errors.first_name}</div>
                            </div>

                            <div>
                                <AppText
                                    title={"Пол"}
                                    bold
                                    size={"s"}
                                    className={s.textTitle}
                                />

                                <div className={s.inputRadioBasiceData}>
                                    <input
                                        onChange={e => setData('gender', e.target.value)}
                                        value="Мужской"
                                        type="radio"
                                        //value="man"
                                        //checked
                                        name="gender"
                                        id="genderMen"
                                        className={s.genderBasiceData}
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
                                        //value="woman"
                                        name="gender"
                                        id="genderWoman"
                                        className={s.genderBasiceData}

                                    />
                                    <label htmlFor="genderWoman">
                                        <AppText
                                            text={"Женский"}
                                            size={"m"}
                                            className={s.textInputRadio}
                                        />
                                    </label> 
                                    <div style={{color: "red"}}>{errors.gender}</div>   
                                </div>
                            </div>
                            {/* <select name="gender" id="gender"
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
                            <AppText
                                title={"Город или регион проживания"}
                                bold
                                size={"s"}
                                className={s.textTitle}
                            />
                            <input 
                                value={data.region} 
                                onChange={e => setData('region', e.target.value)} 
                                type="text"
                                placeholder="Москва"
                                className={s.inputBasiceData} 
                            />
                            <div style={{color: "red"}}>{errors.region}</div>
                        </div> */} 

                        <div>
                            <AppText
                                title={"Дата рождения"}
                                bold
                                size={"s"}
                                className={s.textTitle}
                            />
                            <input 
                                value={data.date_of_birth} 
                                onChange={e => setData('date_of_birth', e.target.value)} 
                                type="date" 
                                className={s.inputDataBasiceData}
                            />
                            <div style={{color: "red"}}>{errors.date_of_birth}</div>
                        </div>

                        <div>
                            <AppText
                                title={"Номер телефона"}
                                bold
                                size={"s"}
                                className={s.textTitle}
                            />
                            <input 
                                value={data.phone} 
                                onChange={e => setData('phone', e.target.value)} 
                                type="text"
                                placeholder="+7 (999) 999-99-99"
                                className={s.inputBasiceData} 
                            />
                            <div style={{color: "red"}}>{errors.phone}</div>
                        </div>

                        <div>
                            <AppText
                                title={"Гражданство"}
                                bold
                                size={"s"}
                                className={s.textTitle}
                            />
                            <input 
                                value={data.citizenship} 
                                onChange={e => setData('citizenship', e.target.value)} 
                                type="text"
                                placeholder="Россия"
                                className={s.inputBasiceData} 
                            />
                            <div style={{color: "red"}}>{errors.citizenship}</div>
                        </div>

                        <div>
                        <AppText
                            title={"Разрешение на работу"}
                            bold
                            size={"s"}
                            className={s.textTitle}
                />
                            <input 
                                value={data.work_permit} 
                                onChange={e => setData('work_permit', e.target.value)} 
                                type="text"
                                placeholder="Россия"
                                className={s.inputBasiceData} 
                            />
                            <div style={{color: "red"}}>{errors.work_permit}</div>
                        </div>

                        <div>
                            <label>Образование</label>
                            <select name="education" id="education"
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
                        </div>

                        <div>
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
                        </div>

                        <div>
                            <label>Опыт работы</label>
                            <select name="experience" id="experience"
                                onChange={e => setData('experience', e.target.value)}
                                value={data.experience}
                            >
                                <option value="Не выбрано">Не выбрано</option>
                                <option value="менее года">менее года</option>
                                <option value="от года до трех">от года до трех</option>
                                <option value="от трех и выше">от трех и выше</option>
                            </select>
                            <div style={{color: "red"}}>{errors.experience}</div>
                        </div>

                        <button
                            type="submit"
                            className="px-4 py-2 text-black bg-gray-300 rounded"
                        >
                            Сохранить
                        </button>
             
                    </form>
                </AppPage>
            </MainLayout>
        </AuthContext.Provider>
    )
}

export default CreateResume;