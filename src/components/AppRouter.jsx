import React, {useContext} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes, routes} from "../router/indexx";
import {AuthContext} from "../context/contextIndex";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map((route, index) => {
                    return (
                        <Route
                            key = {route.path}
                            path={route.path}
                            element={<route.element/>}
                        />
                    )}
                )}
                <Route path="/*" element = {<Navigate replace to="/posts"/>} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map((route, index) => {
                    return (
                        <Route
                            key = {route.path}
                            path={route.path}
                            element={<route.element/>}
                        />
                    )}
                )}
                <Route path="/*" element = {<Navigate replace to="/login"/>} />
            </Routes>
    );
};

export default AppRouter;