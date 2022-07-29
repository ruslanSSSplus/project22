import {beerAPI} from "../../API/beerAPI";


const PUT_BEERS = 'BEER/PUT_BEERS';
const PUT_ID = 'BEER/PUT_ID';
const SET_CURRENT_PAGE = 'BEER/SET_CURRENT_PAGE';
const NEW_SEARCH = 'BEER/NEW_SEARCH';

let initialState = {
    beers: [],
    searchField: '',
    currentPage: 1,
    idExactBeer: 0,
}


const beerReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_SEARCH:
            return {...state, searchField: action.text,}
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.p}
        }
        case PUT_BEERS:
            return {...state, beers: action.data}
        case PUT_ID:
            return {...state, idExactBeer: action.id,}
        default:
            return state;
    }
}



export const getBeersThunkCreater = (pageNumber, searchField) => {
    return async (dispatch) => {
        dispatch(actions.setCurrentPage(pageNumber))
        const response = await beerAPI.getBeers(pageNumber, searchField)
        dispatch(actions.putBeers(response))
    }
}


export const actions = {
    putBeers: (data) => ({
        type: PUT_BEERS, data
    }),
    setCurrentPage: (p) => ({
        type: SET_CURRENT_PAGE,
        p,
    }),
    putId: (id) => ({
        type: PUT_ID,
        id
    }),
    handleSearchAC: (text) => ({
        type: NEW_SEARCH,
        text
    }),
}


export default beerReducer;