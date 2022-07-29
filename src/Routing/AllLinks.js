import React from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import classes from "../App.module.css";


import {useDispatch} from "react-redux";

export const AllLinks = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()


    return (<div className={classes.menu}>
        <span className={classes.elem1} >
        <Link to="/Main">Yes/No</Link>
        </span>
        <span className={classes.elem2} >
            <Link to='/Second'>Dogs</Link>
        </span>
        <span className={classes.elem3} >
            <Link to='/Beer'>Beer</Link>
        </span>








    </div>);
}
