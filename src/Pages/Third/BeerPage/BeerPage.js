import React, {useEffect, useState} from 'react';
import classes from "./Beer.module.css";
import {useSelector} from "react-redux";







export const BeerPage= () => {

    const {beers, idExactBeer} = useSelector((state) => state.beer)

    let exactBeer = beers.find(beer => beer.id === idExactBeer)

    return <div className={classes.exactBeer} >
          <img src={exactBeer.image_url}/>
        <h1> {exactBeer.name}</h1>
        <h2> {exactBeer.description} </h2>
        <h2> {exactBeer.food_pairing} </h2>
        <h2> {exactBeer.tagline}</h2>
        <h2> {exactBeer.abv}</h2>

    </div>

}

