import React, {useState} from 'react';
import {Field, Form, Formik} from "formik";
import classes from "./MinionTranslator.module.css";

import {minionAPI} from "../../API/minionAPI";
import {SoundOutlined} from "@ant-design/icons";
import minion from "../../Assets/pngwing.com.png";



export const MinionTranslator = (props) => {


    function speak(text) {
        if(typeof text !== "string"){
            let a = text.textToSound
            console.log(a)
            text = a
        }
        let voices = speechSynthesis.getVoices();
        let utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = voices[1];
        speechSynthesis.speak(utterance);
    }


    const [translatedText, setTranslatedText] = useState('')


    const initialValues = {
        textToTranslate: '',
        textToSound: '',
    }

    const onSubmit = (values, {resetForm}) => {
        if(values.textToTranslate !== ''){
            try{
                let a = minionAPI(values.textToTranslate)
                setTranslatedText(a.contents.translated)
            } catch (e){
                setTranslatedText('К сожалению превышен лимит, АПИ позволяет переводить всего 5 раз в сутки')
                console.log('Произошла ошибка')
            }

            resetForm({textToTranslate: ''})
        }
    }

    return (<div >
        <Formik initialValues={initialValues} onSubmit={onSubmit} >
            <Form >

                <div className={classes.all}>
                    <h1 > Переводчик с <span className={classes.ang}> Английского!!! </span> на язык миньонов </h1>
                    <Field  placeholder={'Вопрос'} type='text' name='textToTranslate'
                            component='input' className={classes.inp}/>

                    <button type="submit" > Перевод </button>
                    <div className={classes.transText}> {translatedText} </div>
                    <SoundOutlined onClick={() => speak(translatedText)} className={classes.icon}/>
                </div>
            </Form>
        </Formik>

        <Formik initialValues={initialValues} onSubmit={speak} >
            <Form >
                <div className={classes.all}>
                    <h1> Озвучка вашего текста </h1>
                    <Field  placeholder={'Текст'} type='text' name='textToSound'
                            component='input' className={classes.inp}/>
                    <button type="submit" > Озвучить</button>
                </div>
            </Form>
        </Formik>

        <img src={minion} className={classes.png1} alt={'minion'}/>

    </div>);
}

