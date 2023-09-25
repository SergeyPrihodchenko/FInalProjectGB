import React from "react";
import { Head } from "@inertiajs/react";
import { CompanyPageMockData } from "./CompanyPageMockData";
import CompanyPageBody from "./CompanyPageBody";

function CompanyPage({ auth }) {
    const user = auth?.user;
    const data = CompanyPageMockData();

    return (
        <>
            <Head>
                <title>Компания</title>
            </Head>
            <CompanyPageBody {...data} />
        </>
    );
}

export default CompanyPage;
