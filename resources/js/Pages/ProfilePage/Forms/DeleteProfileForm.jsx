import React, { useRef, useState } from 'react';
import s from '../ProfilePage.module.css';
import { useForm } from '@inertiajs/react';
import { BtnDelete } from '@/Shared/ProfileButton/BtnDeleteProfilePage';
import Modal from '@/Components/Modal';

function DeleteProfileForm(){

    const passwordInput = useRef();

    const {data, setData, delete: destroy} = useForm({
        password: ''
    });

    const destroyProfile = (e) => {
        e.preventDefault()

        destroy(route('profile.destroy'))
    }

    return(
        <>
            <p className={s.textTitle}>Удалить аккаунт</p>

            <form onSubmit={destroyProfile} className={s.formProfile}>
                    <lable for="name" className={s.textForm}>Пароль:</lable>
                    <input
                        id="password"
                        ref={passwordInput}
                        value={data.password}
                        className={s.inputFormProfile} 
                        type="password" 
                        placeholder='Пароль'
                        onChange={(e) => setData('password', e.target.value)} 
                    />
                    <BtnDelete type='submit' />
            </form>
        </>
    )
}

export default DeleteProfileForm