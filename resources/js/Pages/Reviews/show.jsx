//import { AppCard } from "@/8Shared/ui/AppCard/AppCard";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import { Typography } from "@/8Shared/Typography/Typography";
import React, { useState } from "react";

const Reviews = ({ reviews, auth }) => {
    const user = auth?.user;
    console.log("reviews", reviews);
    return (
        <>
            <AppPage>
                {reviews ? (
                    <div>
                        отзыв <div>{reviews.content}</div>
                    </div>
                ) : null}
            </AppPage>
        </>
    );
};

export default  Reviews;
