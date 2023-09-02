import React from 'react'
//import PropTypes from 'prop-types'
import s from './ProfilePage.module.css'

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
    <div className={s.profilePage}>
      <div className={s.mainProfilePage}>

        <p className={s.textTitle}>Настройки</p>
        
        <div className={s.navProfilePage}>
          <ul className={s.nav}>
            {
            arrayNav.map((el)=> {
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
              arrayForm.map((el)=> {
                console.log(el);
                return ( 
                  <form action="#" className={s.formProfilePage}>
                    <div className={s.formProfile}>
                      <lable for="name" className={s.textForm}>{el.lable}</lable>
                        <input className={s.inputFormProfile} type="text" placeholder={el.placeholder}/>
                        <input className={s.btnFormProfile} type="submit" value="Изменить"/>
                      </div>  
                  </form>      
                )
              })
            }
      

        <div className={s.btnProfilePage}>
          <button className={s.btnDeleteProfile} type="submit">Удаление аккаунта</button>
        </div>
      </div>
    </div>
  )
{    
arrayForm.forEach((el)=> {
  console.log(el);
  return ( 
    <div className={s.profilePage}>
      <div className={s.mainProfilePage}>
        <div>    
          <form action="#" className={s.formProfilePage}>
            <div className={s.formProfile}>
              <lable for="name" className={s.textForm}>Имя</lable>
              <input className={s.inputFormProfile} type="text" placeholder={el.userName}/>
              <input className={s.btnFormProfile} type="submit" value="Изменить"/>
            </div>
            {/* <div className={s.formProfile}>
              <lable for="password" className={s.textForm}>Пароль</lable>
              <input className={s.inputFormProfile} type="password" placeholder={el.password}/>
               <input className={s.btnFormProfile} type="submit" value="Изменить"/>
            </div>
            <div className={s.formProfile}>
              <lable for="email" className={s.textForm}>Email</lable>
              <input className={s.inputFormProfile} type="email" placeholder={el.email}/>
              <input className={s.btnFormProfile} type="submit" value="Изменить"/>
            </div>
            <div className={s.formProfile}>
              <lable for="mobil" className={s.textForm}>Мобильный телефон</lable>
              <input className={s.inputFormProfile} type="tel"placeholder={el.tel}/>
              <input className={s.btnFormProfile} type="submit" value="Изменить"/>
            </div>
            <div className={s.formProfile}>
              <lable for="searchAddress" className={s.textForm}>Район поиска работы</lable>
              <input className={s.inputFormProfile} type="address"placeholder={el.searchAddress}/>
              <input className={s.btnFormProfile} type="submit" value="Изменить"/>
            </div>
            <div className={s.formProfile}>
              <lable for="social" className={s.textForm}>Соц сети</lable>
              <input className={s.inputFormProfile} type="text" placeholder={el.social}/>
              <input className={s.btnFormProfile} type="submit" value="Изменить"/>
            </div> */}
          </form>
        </div> 
      </div>
    </div>
  )
})
}
}


//ProfilePage.propTypes = {}

export default ProfilePage