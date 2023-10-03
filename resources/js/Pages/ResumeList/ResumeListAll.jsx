import { AppPage } from "@/5Layouts/AppPage/AppPage";
import { AuthContext } from "@/8Shared/store/AuthContext";
import { usePage } from "@inertiajs/react";
import React from "react";
import s from "./ResumeList.module.css";
import AppText from "@/8Shared/ui/AppText/AppText";

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