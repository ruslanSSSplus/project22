import React, {useEffect} from 'react';
import {yesNoAPI} from "../../API/yesNoAPI";
import {useDispatch, useSelector} from "react-redux";
import {getYesNoThunkCreater} from "../../Redux/Reducers/yesNoReducer";
import classes from './Main.module.css'
import {Field, Form, Formik} from "formik";






export const Main = (props) => {

    const dispatch = useDispatch()


    const {answerImage} = useSelector((state) => state.yesNo)

    const initialValues = {
        question: ''
    }
    const onSubmit = (values, {resetForm}) => {
        if(values.question !== ''){
            dispatch(getYesNoThunkCreater())
            resetForm({question: ''})
        }

    }

    return (<div>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form >

                <div className={classes.all}>
                   <h1> Спрашивай меня </h1>
                    <Field  placeholder={'Вопрос'} type='text' name='question'
                            component='input' className={classes.inp}/>

                    <button type="submit" > спросить</button>

                </div>

            </Form>
        </Formik>
            <div className={classes.blockImg}>
                <img src={answerImage} alt={'answer'} className={classes.img}/>
            </div>

    </div>



    );
}

