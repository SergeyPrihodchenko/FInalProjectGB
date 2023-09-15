import React from "react";
import { usePage } from "@inertiajs/react";
import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import { AuthContext } from "@/8Shared/store/AuthContext";
import AppLink from "@/8Shared/ui/AppLink/AppLink";


function ResumePage({resumes}){

    const user = usePage().props.auth.user

    return(

        <AuthContext.Provider value={{user}}>
            <MainLayout className={"app_light_theme"}>
                <AppPage>
                    <h2>Мои резюме</h2>

                    {resumes.map((resume) => {
                        return (
                            <li  className="px-4 py-2 text-black bg-gray-300 rounded">
                                <lable><b>{resume.profession}</b></lable>
                                <AppLink
                                    path={'resume.show'}
                                    param={resume.id}
                                    key={resume.id}
                                > Просмотреть резюме</AppLink>
                            </li>
                        )
                    })}

                </AppPage>
            </MainLayout>
        </AuthContext.Provider>
    )
}

export default ResumePage