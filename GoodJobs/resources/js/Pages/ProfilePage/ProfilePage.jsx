import React from 'react';
//import PropTypes from 'prop-types'
import s from './ProfilePage.module.css';
import { AppPage } from '@/Shared/AppPage/AppPage';
import MainLayout from "@/Layouts/MainLayout/MainLayout";
import "./ProfilePage.module.css";
// import { BtnDelete } from '@/Shared/ProfileButton/BtnDeleteProfilePage';
import AppButton from '@/Shared/ui/AppButton/AppButton';
import AppText from '@/Shared/ui/AppText/AppText';
import { AuthContext } from '@/Shared/store/AuthContext';
import { usePage, useForm } from '@inertiajs/react';
import UpdatePasswordForm from './Forms/UpdatePasswordForm';
import DeleteProfileForm from './Forms/DeleteProfileForm';



// const arrayForm = [{
//     lable: 'Имя',
//     placeholder: 'Иванов Иван',
//     type: 'text',
// },
// {
//     lable: 'Пароль',
//     placeholder: 'Обновлен 2 года назад',
//     type: 'password',
// },
// {
//     lable: 'Email',
//     placeholder: 'IvanovIvan@pirozok.com',
//     type: 'email',
// },
// {
//     lable: 'Мобильный телефон',
//     placeholder: '+7 (999) 777-88-99',
//     type: 'tel',
// },
// {
//     lable: 'Район поиска работы',
//     placeholder: 'Москва',
//     type: 'address',
// },
// {
//     lable: 'Соц сети',
//     placeholder: 'Не привязаны',
//     type: 'image',
// },
// ];

const arrayNav = [
    'Личные данные',
    'Нежелательное',
    'Изображения',
    'Рассылки',
];

function ProfilePage({ auth }) {

    const user = usePage().props.auth.user;

    const { data, setData, post, processing, errors } = useForm({
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        social_media: user.social_media,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('profile.update'));
    }


    return (
        //<div className={s.container}>
        <AuthContext.Provider value={{ user }}>
            <MainLayout className={"app_light_theme"}>
                <AppPage>
                    <div className={s.profilePage}>
                        <div className={s.mainProfilePage}>

                            <AppText title={'Настройки'} size={'l'} />
                            <p className={s.textTitle}>Настройки</p>

                            <div className={s.navProfilePage}>
                                <ul className={s.nav}>
                                    {
                                        arrayNav.map((el) => {
                                            console.log(el);
                                            return (
                                                <li className={s.navSettings}>
                                                    <a href="#" className={s.navLink}>{el}</a>
                                                </li>

                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            {
                                // arrayForm.map((el) => {
                                //     console.log(el);
                                //     return (
                                //         <form action="#" className={s.formProfilePage}>
                                //             <div className={s.formProfile}>
                                //                 <lable for="name" className={s.textForm}>{el.lable}</lable>
                                //                 <input className={s.inputFormProfile} type="text" placeholder={el.placeholder} />
                                //                 <input className={s.btnFormProfile} type="submit" value="Изменить" />
                                //             </div>
                                //         </form>
                                //     )
                                // })
                            }

                            <form onSubmit={submit} className={s.formProfilePage}>
                                <div className={s.formProfile}>
                                    <lable for="name" className={s.textForm}>Имя:</lable>
                                    <input
                                        value={data.name} 
                                        className={s.inputFormProfile} 
                                        type="text" 
                                        placeholder={data.name} 
                                        onChange={(e) => setData('name', e.target.value)}
                                    />
                                    <input className={s.btnFormProfile} type="submit" value="Изменить" />
                                    <div style={{color: "red"}}>{errors.name}</div>
                                </div>
                            </form>

                            <form onSubmit={submit} className={s.formProfilePage}>
                                <div className={s.formProfile}>
                                    <lable for="email" className={s.textForm}>Email:</lable>
                                    <input
                                        value={data.email} 
                                        className={s.inputFormProfile} 
                                        type="email" 
                                        placeholder={data.email} 
                                        onChange={(e) => setData('email', e.target.value)}
                                    />
                                    <input className={s.btnFormProfile} type="submit" value="Изменить" />
                                    <div style={{color: "red"}}>{errors.email}</div>
                                </div>
                            </form>

                            <form onSubmit={submit} className={s.formProfilePage}>
                                <div className={s.formProfile}>
                                    <lable for="phone" className={s.textForm}>Телефон:</lable>
                                    <input 
                                        value={data.phone} 
                                        className={s.inputFormProfile} 
                                        type="phone" 
                                        placeholder={data.phone} 
                                        onChange={(e) => setData('phone', e.target.value)}
                                    />
                                    <input className={s.btnFormProfile} disabled={processing} type="submit" value="Изменить" />
                                    <div style={{color: "red"}}>{errors.phone}</div>
                                </div>
                            </form>

                            <form onSubmit={submit} className={s.formProfilePage}>
                                <div className={s.formProfile}>
                                    <lable for="address" className={s.textForm}>Адрес:</lable>
                                    <input 
                                        value={data.address}
                                        className={s.inputFormProfile} 
                                        type="text" 
                                        placeholder={data.address} 
                                        onChange={(e) => setData('address', e.target.value)}
                                    />
                                    <input className={s.btnFormProfile} type="submit" value="Изменить" />
                                    <div style={{color: "red"}}>{errors.address}</div>
                                </div>
                            </form>

                            <form onSubmit={submit} className={s.formProfilePage}>
                                <div className={s.formProfile}>
                                    <lable for="social_media" className={s.textForm}>Социальные сети:</lable>
                                    <input
                                        value={data.social_media} 
                                        className={s.inputFormProfile} 
                                        type="text" 
                                        placeholder={data.social_media} 
                                        onChange={(e) => setData('social_media', e.target.value)}
                                    />
                                    <input className={s.btnFormProfile} type="submit" value="Изменить" />
                                    <div style={{color: "red"}}>{errors.social_media}</div>
                                </div>
                            </form>



                            <UpdatePasswordForm />

                            <DeleteProfileForm />
                            {/* <div className={s.btnProfilePage}>
          <button className={s.btnDeleteProfile} type="submit">Удаление аккаунта</button>
        </div> */}

                        </div>
                    </div>
                </AppPage>
            </MainLayout>
        </AuthContext.Provider>
        //</div>
    )
    {
        arrayForm.forEach((el) => {
            console.log(el);
            return (
                //<div className={s.container}>
                <MainLayout>
                    <AppPage>
                        <div className={s.profilePage}>
                            <div className={s.mainProfilePage}>
                                <div>
                                    <form action="#" className={s.formProfilePage}>
                                        <div className={s.formProfile}>
                                            <lable for="name" className={s.textForm}>Имя</lable>
                                            <input className={s.inputFormProfile} type="text" placeholder={el.userName} />
                                            <input className={s.btnFormProfile} type="submit" value="Изменить" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </AppPage>
                </MainLayout>
                // </div>
            )
        })
    }
}


//ProfilePage.propTypes = {}

export default ProfilePage