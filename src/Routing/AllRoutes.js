import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {Main} from "../Pages/Main/Main";
import {Beer} from "../Pages/Beer/Beer";
import {MinionTranslator} from "../Pages/MinionTranslator/MinionTranslator";
import {BeerPage} from "../Pages/Beer/BeerPage/BeerPage";


export const AllRoutes = ({theme}) => {

    return (<Routes>
        <Route path="/" element={<Navigate replace to="/Main"/>}/>
        <Route path='/Main' element={<Main />}> </Route>
        <Route path='/MinionTranslator' element={<MinionTranslator />}> </Route>
        <Route path='/Beer' element={<Beer />}> </Route>
        <Route path='/exactBeer' element={<BeerPage />}> </Route>
    </Routes>);
}
