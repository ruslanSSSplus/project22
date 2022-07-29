

const IS_LOADING = 'MEMBERS/IS_LOADING';

let initialState = {
    members: [], isLoading: true
}


const yesNoReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export const getMembersThunkCreater = () => {
    return async (dispatch) => {


    }
}



export const actions = {
    isLoadingDone: (data) => ({
        type: IS_LOADING, data
    })
}


export default yesNoReducer;