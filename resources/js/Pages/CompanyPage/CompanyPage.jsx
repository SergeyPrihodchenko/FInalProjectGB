import React from "react";
import { Head } from "@inertiajs/react";
import { CompanyPageMockData } from "./CompanyPageMockData";
import CompanyPageBody from "./CompanyPageBody";

function CompanyPage({ auth, company, isSubscribed, companyImageURL,reviewsOfCompanies, rating, content, reviews, grade }) {
    const user = auth?.user;
    const data = CompanyPageMockData();
    console.log(data);
    //console.log(isSubscribed);
    //console.log('companyImageURL',companyImageURL);
    data.company = (company);
    data.isSubscribed = (isSubscribed);
    data.user = (user);
    data.companyImageURL = (companyImageURL);
    data.reviewsOfCompanies = (reviewsOfCompanies);
    data.rating = (rating);
    data.content = (content);
    data.reviews  = (reviews );
    data.grade = (grade);

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
