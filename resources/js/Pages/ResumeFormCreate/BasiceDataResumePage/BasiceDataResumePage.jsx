import { useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";
//import PropTypes from 'prop-types'
import s from "./BasiceDataResumePage.module.css";
import AppText from "@/8Shared/ui/AppText/AppText";


function BasiceDataResumePage() {

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
    return (
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
            </div>
        </div>
    );
}

//BasiceDataResumePage.propTypes = {}

export default BasiceDataResumePage;
