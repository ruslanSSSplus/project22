import {yesNoAPI} from "../../API/yesNoAPI";


const PUT_IMAGE = 'YESNO/PUT_IMAGE';

let initialState = {
    answerImage: 'http://ic.pics.livejournal.com/lyu_sanna/50534903/193299/193299_300.jpg',
}


const yesNoReducer = (state = initialState, action) => {
    switch (action.type) {
        case PUT_IMAGE:
            return {...state, answerImage: action.data}
        default:
            return state;
    }
}



export const getYesNoThunkCreater = () => {
    return async (dispatch) => {
        const response = await yesNoAPI.getYesNo()
        dispatch(actions.putImage(response))

    }
}



export const actions = {
    putImage: (data) => ({
        type: PUT_IMAGE, data
    })
}


export default yesNoReducer;