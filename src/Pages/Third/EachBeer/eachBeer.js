import React, {useEffect, useState} from 'react';
import classes from "./Beer.module.css";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {actions} from "../../Redux/Reducers/beerReducer";







export const EachBeer= (props) => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [descriptionCut, setDescriptionCut] = useState('')

    useEffect(() => {
        changeText(props.description);
    }, [props.description])



    let changeText = (text) => {
        let maxlength = 140 ; //количество символов, которое должно отображаться
        let strNum = text.length; //количество блоков с классом text
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
    return <div className={classes.eachBeer} >
          <div>
              <img alt={'sorry image not found'} src={props.posterImage} className={classes.png} onClick={() => redir(props.id)}/>
          </div>
       <div className={classes.descr}>
           <h2 > <span className={classes.name}> {props.name === undefined? "can't find name" : props.name} </span> </h2>
           <h3> {descriptionCut}</h3>
       </div>
    </div>

}

