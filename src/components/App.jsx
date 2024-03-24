import React from "react";
import {Route, Routes} from "react-router-dom";
import { lazy } from "react";
import { Layout } from "../components/Layout";
import { Features } from "../components/Features/Features";
import {Reviews} from "../components/Reviews/Reviews";
// import { Outlet } from "react-router-dom";

const HomePage = lazy(() => import('../pages/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage'))


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<HomePage/>}/>
      <Route path="/catalog" element={<CatalogPage/>}>
        <Route path = "features" element = {<Features/>}/>
        <Route path = "reviews" element = {<Reviews/>}/>
      </Route>
      <Route path="/favorites" element={<FavoritesPage/>}>
      <Route path = "features" element = {<Features/>}/>
        <Route path = "reviews" element = {<Reviews/>}/>
      </Route>
      <Route path="*" element={<HomePage/>} />
      </Route>
    </Routes>
  );
};
