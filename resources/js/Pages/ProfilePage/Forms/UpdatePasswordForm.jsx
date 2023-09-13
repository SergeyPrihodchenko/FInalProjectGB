import React, { useRef } from 'react';
import s from '../ProfilePageForm/ProfilePageForm.module.css';
import { useForm } from '@inertiajs/react';
import AppText from '@/8Shared/ui/AppText/AppText';

function UpdatePasswordForm(){

    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const { data, setData, errors, put, reset } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <div className={s.formProfilePage}>
            <form onSubmit={updatePassword} className={s.formProfile}>
                <div>
                    <AppText size='s' text={'Текущий пароль'} className={s.textForm}/>
                        {/* <lable className={s.textForm}>Текущий пароль</lable> */}
                    <input
                        id="current_password"
                        ref={currentPasswordInput}
                        value={data.current_password}
                        className={s.inputFormProfileUpdate}
                        type="password" 
                        placeholder='текущий пароль' 
                        onChange={(e) => setData('current_password', e.target.value)}
                    />
                    <div style={{color: "red"}}>{errors.current_password}</div>    
                </div>
                    
                <div className={s.divLeft}>
                    <input className={s.btnFormProfile} type="submit" value="Изменить"/>
                </div>
                <div>
                    <AppText size='s' text={'Новый пароль'} className={s.textForm}/>
                    {/* <lable className={s.textForm}>Новый пароль</lable> */}
                    <input
                        id="password"
                        ref={passwordInput}
                        value={data.password}
                        className={s.inputFormProfile} 
                        type="password" 
                        placeholder='новый пароль'
                        onChange={(e) => setData('password', e.target.value)} 
                    />
                    <div style={{color: "red"}}>{errors.password}</div>
                </div>
                <div>
                    <AppText size='s' text={'Подтвердить пароль'} className={s.textForm}/>
                    {/* <lable className={s.textForm}>Подтвердить пароль</lable> */}
                    <input
                        id="password_confirmation"
                        value={data.password_confirmation}
                        className={s.inputFormProfileUpdate} 
                        type="password" 
                        placeholder='подтверждение пароля'
                        onChange={(e) => setData('password_confirmation', e.target.value)} 
                    />
                    <div style={{color: "red"}}>{errors.password_confirmation}</div>  
                </div>    
            </form>
        </div>
    )
}

export default UpdatePasswordForm