import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import React, { useCallback, useEffect, useRef, useState } from "react";
import AppText from "@/8Shared/ui/AppText/AppText";
import AppLink from "@/8Shared/ui/AppLink/AppLink";
import AppCard from "@/8Shared/ui/AppCard/AppCard";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import axios from "axios";
import Checkbox from "@/8Shared/Checkbox/Checkbox";
import Loader from "@/8Shared/Loader/Loader";
import {Typography} from "@/8Shared/Typography/Typography.jsx";


const Company = ({ companies, name, auth }) => {
    console.log('companies', companies);



        return (
            <MainLayout>
                <AppPage>
                    <Typography variant={"h2"}>Здесь должен отобразится список всех компаний</Typography>
                </AppPage>
            </MainLayout>
        );
    };







export default Company;
