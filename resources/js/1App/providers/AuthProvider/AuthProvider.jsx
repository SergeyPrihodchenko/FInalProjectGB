import React, { useEffect, useMemo, useState } from "react";

import { AuthContext } from "@/8Shared/store/AuthContext";

export function AuthProvider(props) {
    const { childern, auth } = props;
    console.log(props);
    const [isAuth, setIsAuth] = useState(false);
    // const user = props?.initialPage?.props?.auth?.user
    //     ? props?.initialPage?.props?.auth
    //     : null;
    // console.log("AuthProvider.jsx auth", auth);
    // console.log("AuthProvider.jsx isAuth", isAuth);

    useEffect(() => {
        if (props?.initialPage?.props?.auth?.user) {
            setIsAuth(!isAuth);
        }
    }, [auth]);
    const defaultProps = useMemo(
        () => ({
            isAuth: isAuth,
            setIsAuth: setIsAuth,
        }),
        [isAuth]
    );
    return (
        <AuthContext.Provider value={defaultProps}>
            <div>{childern}</div>
        </AuthContext.Provider>
    );
}
