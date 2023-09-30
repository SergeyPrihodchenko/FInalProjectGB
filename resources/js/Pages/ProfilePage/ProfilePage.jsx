import React from "react";
//import PropTypes from 'prop-types'
import s from "./ProfilePage.module.css";
import { AppPage } from "@/5Layouts/AppPage/AppPage";

// import { BtnDelete } from '@/Shared/ProfileButton/BtnDeleteProfilePage';
import AppText from "@/8Shared/ui/AppText/AppText";
import { AuthContext } from "@/8Shared/store/AuthContext";
import { usePage } from "@inertiajs/react";
import DeleteProfileForm from "./Forms/DeleteProfileForm";

import ProfilePageTabs from "./ProfilePageTabs/ProfilePageTabs";

function ProfilePage({ auth , favourite_vacancies}) {
    const user = usePage().props.auth.user;
    console.log(favourite_vacancies);
    return (
        <AuthContext.Provider value={{ user }}>
            <>
                <AppPage>
                    <container className={s.profilePage}>
                        <main className={s.mainProfilePage}>
                            <AppText title={"Настройки"} size={"m"} bold />

                            <ProfilePageTabs />

                            <DeleteProfileForm />
                            {/* <div className={s.btnProfilePage}>
                        <button className={s.btnDeleteProfile} type="submit">Удаление аккаунта</button>
                        </div> */}
                        </main>
                    </container>
                </AppPage>
            </>
        </AuthContext.Provider>
    );
}

//ProfilePage.propTypes = {}

export default ProfilePage;
