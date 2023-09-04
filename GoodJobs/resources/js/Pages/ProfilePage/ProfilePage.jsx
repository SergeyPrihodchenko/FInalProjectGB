import React from 'react';
//import PropTypes from 'prop-types'
import s from './ProfilePage.module.css';
import { AppPage } from '@/Shared/AppPage/AppPage';
import MainLayout from "@/Layouts/MainLayout/MainLayout";
import { BtnDelete } from '@/Shared/ProfileButton/BtnDeleteProfilePage';
import AppText from '@/Shared/ui/AppText/AppText';



const arrayForm = [{
    lable: 'Имя',
    placeholder: 'Иванов Иван',
    type: 'text',
},
{
    lable: 'Пароль',
    placeholder: 'Обновлен 2 года назад',
    type: 'password',
},
{
    lable: 'Email',
    placeholder: 'IvanovIvan@pirozok.com',
    type: 'email',
},
{
    lable: 'Мобильный телефон',
    placeholder: '+7 (999) 777-88-99',
    type: 'tel',
},
{
    lable: 'Район поиска работы',
    placeholder: 'Москва',
    type: 'address',
},
{
    lable: 'Соц сети',
    placeholder: 'Не привязаны',
    type: 'image',
},
];

const arrayNav = [
    'Личные данные',
    'Нежелательное',
    'Изображения',
    'Рассылки',
];

function ProfilePage(props) {
    return (
        //<div className={s.container}>
        <MainLayout>
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
                            arrayForm.map((el) => {
                                console.log(el);
                                return (
                                    <form action="#" className={s.formProfilePage}>
                                        <div className={s.formProfile}>
                                            <lable for="name" className={s.textForm}>{el.lable}</lable>
                                            <input className={s.inputFormProfile} type="text" placeholder={el.placeholder} />
                                            <input className={s.btnFormProfile} type="submit" value="Изменить" />
                                        </div>
                                    </form>
                                )
                            })
                        }

                        <BtnDelete />
                        {/* <div className={s.btnProfilePage}>
          <button className={s.btnDeleteProfile} type="submit">Удаление аккаунта</button>
        </div> */}

                    </div>
                </div>
            </AppPage>
        </MainLayout>
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