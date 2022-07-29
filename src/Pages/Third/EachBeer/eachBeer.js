import React, {useEffect, useState} from 'react';
import classes from "./EachBeer.module.css";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {actions} from "../../../Redux/Reducers/beerReducer";
import AOS from 'aos'
import 'aos/dist/aos.css';
import baltika from '../../../Assets/baltika.png'





export const EachBeer= (props) => {
    AOS.init();


    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [descriptionCut, setDescriptionCut] = useState('')

    useEffect(() => {
        changeText(props.description);
    }, [props.description])



    let changeText = (text) => {
        let maxlength = 140 ;
        let strNum = text.length;
        if(strNum > maxlength){
            for (let i = 0; i < strNum; i++) {
                text = text.slice(0, maxlength) + '...';
            }
        }
        setDescriptionCut(text)
    }

    const redir = (id) =>{
        dispatch(actions.putId(id))
        navigate(`/exactBeer`);
    }

    return <div className={window.innerWidth > 800 ? classes.eachBeer : classes.eachBeerMobile} onClick={() => redir(props.id)} data-aos="fade-right">
          <div>
              <img alt={'sorry image not found'} src={props.posterImage === null ? baltika : props.posterImage} className={classes.png} />
          </div>
       <div className={classes.descr}>
           <h2 > <span className={classes.name}> {props.name === undefined? "can't find name" : props.name} </span> </h2>
           <h3> {descriptionCut}</h3>
       </div>
    </div>

}

