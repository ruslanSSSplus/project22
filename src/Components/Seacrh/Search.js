import React from "react";
import classes from './Seacrh.module.css'



export const Search = (props) => {
    return (
        <form action='' onSubmit={props.searchBeer} className={classes.form} >
        <input type='text' onChange={props.handleSearch}/>
        <button type='submit'>
            Search
        </button>
    </form>)
}
