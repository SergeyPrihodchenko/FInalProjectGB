import React from "react";
import { AuthContext } from "@/8Shared/store/AuthContext";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import { usePage } from "@inertiajs/react";
import AppText from "@/8Shared/ui/AppText/AppText";
import s from "./ResumeListPage.module.css"


function ResumeListAll({resumes}){

    const user = usePage().props.auth.user;

    console.log(resumes);

    return(
        <>
            <AuthContext.Provider value={{ user }}>
            <>
                <AppPage>
                    <main className={s.mainResumeList}>
                        <AppText
                            title={"Резюме"}
                            size="m"
                            bold
                            className={s.titleResumeList}
                        />
                    </main>
                </AppPage>
            </>
        </AuthContext.Provider>
        </>
    )
}

export default ResumeListAll;