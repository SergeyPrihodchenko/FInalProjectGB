import React, { useState } from "react";
import { router, useForm, usePage } from "@inertiajs/react";
import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import { AuthContext } from "@/8Shared/store/AuthContext";

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
        skills: resume.skills,
        experience: resume.experience
    })

    const [skill, setSkill] = useState('');

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

        console.log(resume.id);

        put(route('resume.update', resume.id))
    }



    return(
        <AuthContext.Provider value={{user}}>
        <MainLayout className={"app_light_theme"}>
            <AppPage>
                <h2>{resume.profession}</h2>

                <form onSubmit={saveResume}>
                    <div>
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
                        Изменить
                    </button>

                    <button
                    onClick={destroy}
                    id={resume.id}
                    type="button"
                    className="px-4 py-2 text-white bg-red-400 rounded"
                    >
                        Удалить
                    </button>

                </form>
            </AppPage>
        </MainLayout>
        </AuthContext.Provider>
    )
}

export default Resume