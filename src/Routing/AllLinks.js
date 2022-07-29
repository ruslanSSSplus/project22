import React from "react";
import {Link} from "react-router-dom";
import cn from "classnames";
import {useNavigate} from "react-router-dom";
import classes from "../App.module.css";
import svetl from "../assets/Pictures/Frame.png";
import temn from "../assets/Pictures/Frame-1.png";
import VK from "../assets/Pictures/entypo-social_vk-with-circle.png";
import DM_LIGHT from "../assets/Pictures/DM_LIGHT.png";
import DM_DARK from "../assets/Pictures/DM_DARK.png";
import lohInDay from '../assets/Pictures/logInDay.png'
import lohInNight from '../assets/Pictures/logInNight.png'
import logOutDay from '../assets/Pictures/logOutLight.png'
import logOutNight from '../assets/Pictures/logOutDark.png'
import {logoutThunkCreater} from "../Redux/Reducers/authReducer";


import {useDispatch} from "react-redux";

export const AllLinks = ({theme, changeTheme, isAuth}) => {
    const navigate = useNavigate();

    const dispatch = useDispatch()


    const redir = () =>{
        navigate('/Login');
    }


    return (<div className={classes.menu}>

        <Link to="/Main" className={cn({
            [classes.dayMain]: theme === true
        }, classes.nightMain)}>
            <img alt={'logo'}
                 src={theme ? svetl : temn} className={classes.logo}
            />
        </Link>

        <Link to='/Members' className={cn({
            [classes.dayMembers]: theme === true
        }, classes.nightMembers)}>Участники</Link>

        <Link to='/Bundles' className={cn({
            [classes.dayOurHistory]: theme === true
        }, classes.nightOurHistory)}>Бандлы</Link>

        <Link to='/Regulations' className={cn({
            [classes.dayRegulations]: theme === true
        }, classes.nightRegulations)}>Правила</Link>

        <div className={classes.gena} onClick={()=> window.open("https://vk.com/clubgenafond")}>

                <img className={classes.icon}
                     alt={'icon'}
                     src={VK}/> GenaFond
        </div>
        <img src={theme ? DM_LIGHT : DM_DARK} className={classes.dayNight} onClick={() => changeTheme()}
             alt={'theme'}/>

        <div className={classes.bloctLog}>
            {!isAuth ? <img src={theme ? lohInDay : lohInNight} alt="log" onClick={ ()=> redir()} className={classes.enter}/> :
                <img src={theme ? logOutDay : logOutNight} alt="log" onClick={ () => dispatch(logoutThunkCreater())}
                     className={classes.enter}/>}
        </div>



    </div>);
}
