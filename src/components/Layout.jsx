import { Suspense } from "react";
import { Navigation } from "../components/Navigation/Navigation";
import { Outlet } from "react-router-dom";


export const Layout = () => {
    return (
        <>
        <Navigation/>
        <Suspense fallback = {null}>
            <Outlet/>
        </Suspense>
        </>
    )
};
