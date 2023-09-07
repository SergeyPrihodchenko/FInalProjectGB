import React from 'react';
//import PropTypes from 'prop-types'
import s from './ProfilePage.module.css';
import { AppPage } from '@/Shared/AppPage/AppPage';
import MainLayout from "@/Layouts/MainLayout/MainLayout";
//import { BtnDelete } from '@/Shared/ProfileButton/BtnDeleteProfilePage';
import AppButton from '@/Shared/ui/AppButton/AppButton';
import AppText from '@/Shared/ui/AppText/AppText';
import {ProfilePageNav} from '@/Shared/ProfilePageNav/ProfilePageNav';
import ProfilePageTabs from './ProfilePageTabs/ProfilePageTabs';

  
function ProfilePage(props) {
  return (
    // <MainLayout user={user} className={'app_light_theme'}>
    <MainLayout className={'app_light_theme'}>
      <ProfilePageNav/>
      <AppPage>
        <container>
          <div className={s.profilePage}>
            <main className={s.mainProfilePage}>

              <AppText title={'Настройки'} size={'l'}/>

              <ProfilePageTabs/>

              <AppText size={'s'} title={
                <div className={s.btnDelete}>
                  <AppButton variant='clear' size='l'>
                    <span className={s.spanBtnDelete}>Удаление аккаунта</span>
                  </AppButton>
                </div>}/>
            </main>
          </div>
        </container>
      </AppPage>
    </MainLayout>
  )
}


//ProfilePage.propTypes = {}

export default ProfilePage