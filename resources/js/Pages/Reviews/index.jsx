import { AppPage } from "@/5Layouts/AppPage/AppPage";
import React, { useCallback, useEffect, useRef, useState } from "react";
import AppText from "@/8Shared/ui/AppText/AppText";
import AppLink from "@/8Shared/ui/AppLink/AppLink";
import AppCard from "@/8Shared/ui/AppCard/AppCard";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import axios from "axios";
import Checkbox from "@/8Shared/Checkbox/Checkbox";
import Loader from "@/8Shared/Loader/Loader";
import { Typography } from "@/8Shared/Typography/Typography.jsx";

const Company = ({ reviews, name, auth }) => {
    console.log("reviews", reviews);
    const user = auth?.user;
    return (
        <>
            <AppPage>
                {reviews
                    ? reviews.map((reviewsItem, index) => {
                        return (
                            <div>
                                <AppLink
                                    path={"reviews.show"}
                                    param={reviewsItem.id}
                                    key={reviewsItem.id}
                                >
                                    {reviewsItem.content}
                                </AppLink>
                            </div>
                        );
                    })
                    : null}
            </AppPage>
        </>
    );
};

export default Company;
