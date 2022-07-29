import React from 'react';
import classes from "./BeerPage.module.css";
import {useSelector} from "react-redux";
import sveti from "../../../Assets/svetlay.png";
import { Navigate } from "react-router-dom";





export const BeerPage= () => {

    const {beers, idExactBeer} = useSelector((state) => state.beer)

    let exactBeer = beers.find(beer => beer.id === idExactBeer)


    return (idExactBeer === 0 ? <Navigate to="/Beer" replace={true} /> :
        <div className={window.innerWidth > 800 ? classes.exactBeer : classes.exactBeerMobile} >

        <img src={exactBeer.image_url} alt={'img'} className={window.innerWidth > 800 ?
            classes.imgBeer :  classes.imgBeerMobile}/>
        <div  className={classes.name}> {exactBeer.name}</div>
        <div className={classes.info}>
            <span className={classes.txt}> Описание </span>
            <div  className={classes.description}> {exactBeer.description} </div>

            <span className={classes.txt}> Лучше употреблять с </span>
            <div  className={classes.food_pairing}> {exactBeer.food_pairing} </div>

            <span className={classes.txt}> Наш слоган </span>
            <div  className={classes.tagline}> {exactBeer.tagline}</div>

            <span className={classes.txt}> Содержание алкоголя в % </span>
            <div  className={classes.abv}> {exactBeer.abv}</div>
        </div>


    <img src={sveti} className={classes.png} alt={'png'}/>

    </div>)

}

