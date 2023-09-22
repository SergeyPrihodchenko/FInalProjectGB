import React from 'react';
//import PropTypes from 'prop-types'
import s from '../ProfilePageForm/ProfilePageForm.module.css';
import { usePage, useForm } from '@inertiajs/react';
import UpdatePasswordForm from "../Forms/UpdatePasswordForm";
import AppButton from '@/8Shared/ui/AppButton/AppButton';

function ProfilePageForm({ auth }) {
  const user = usePage().props.auth.user;

      const { data, setData, post, processing, errors } = useForm({
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: user.address,
          social_media: user.social_media,
      });

  const arrayForm = [{
    lable: 'Имя',
    placeholder: data.name,
    type: 'text',
    set: 'name',
  },
  {
    lable: 'Email',
    placeholder: data.email,
    type: 'email',
    set: 'email',
  },
  {
    lable: 'Мобильный телефон',
    placeholder: data.phone,
    type: 'tel',
    set: 'phone',
  },
  {
    lable: 'Район поиска работы',
    placeholder: data.address,
    type: 'address',
    set: 'address',
  },
  {
    lable: 'Соц сети',
    placeholder: data.social_media,
    type: 'text',
    set: 'social_media',
  },
  ];

  const submit = (e) => {
    e.preventDefault();
    post(route("profile.update"));
  };

  return (
    <div>
    {arrayForm.map((el)=> {
     // console.log(el);
      return ( 
        <form onSubmit={submit} className={s.formProfilePage}>
          
              <div className={s.formProfile}>
                <lable className={s.textForm}>{el.lable}</lable>
                <input 
                  className={s.inputFormProfile} 
                  type="text"
                  value={el.placeholder} 
                  placeholder={el.placeholder} 
                  onChange={(e) =>
                   setData(el.set, e.target.value)
                 }/>
                
                <AppButton
                  id = {el.set}
                  type="submit"
                  variant="clear"
                >Изменить</AppButton>
              </div>
        
       
        </form> 
      )
    }) 
   }
    
  <UpdatePasswordForm/>
   </div>
//  ProfilePage.propTypes = {}
)}
export default ProfilePageForm