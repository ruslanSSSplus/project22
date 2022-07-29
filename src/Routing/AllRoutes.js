import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {Main} from "../Pages/Main/Main";
import {Beer} from "../Pages/Third/Beer";
import {Second} from "../Pages/Second/Second";
import {BeerPage} from "../Pages/Third/BeerPage/BeerPage";


export const AllRoutes = ({theme}) => {

    return (<Routes>
        <Route path="/" element={<Navigate replace to="/Main"/>}/>
        <Route path='/Main' element={<Main />}> </Route>
        <Route path='/Second' element={<Second />}> </Route>
        <Route path='/Beer' element={<Beer />}> </Route>
        <Route path='/exactBeer' element={<BeerPage />}> </Route>
    </Routes>);
}
