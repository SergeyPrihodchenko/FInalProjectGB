import React from "react";
//import PropTypes from 'prop-types'
import s from "./ProfilePage.module.css";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import MainLayout from "@/5Layouts/MainLayout/MainLayout";

// import { BtnDelete } from '@/Shared/ProfileButton/BtnDeleteProfilePage';
import AppText from "@/8Shared/ui/AppText/AppText";
import { AuthContext } from "@/8Shared/store/AuthContext";
import { usePage } from "@inertiajs/react";
import DeleteProfileForm from "./Forms/DeleteProfileForm";
import { ProfilePageNav } from "@/8Shared/ProfilePageNav/ProfilePageNav";
import ProfilePageTabs from "./ProfilePageTabs/ProfilePageTabs";


function ProfilePage({ auth }) {
     const user = usePage().props.auth.user;
    
     return (
        <AuthContext.Provider value={{ user }}>
            <MainLayout className={"app_light_theme"}>
                <ProfilePageNav/>
                <AppPage>
                    <container className={s.profilePage}>
                        <main className={s.mainProfilePage}>
                         
                            <AppText title={"Настройки"} size={"l"} />

                            <ProfilePageTabs/>

                            <DeleteProfileForm />
                        {/* <div className={s.btnProfilePage}>
                        <button className={s.btnDeleteProfile} type="submit">Удаление аккаунта</button>
                        </div> */}
                        </main>
                    </container>
                </AppPage>
            </MainLayout>
        </AuthContext.Provider>
    );
}

//ProfilePage.propTypes = {}

export default ProfilePage;
