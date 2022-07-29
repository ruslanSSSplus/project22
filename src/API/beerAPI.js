import axios from "axios";


export const beerAPI = {
    getBeers(pageNumber, searchField) {
        return axios.get(searchField==="" ? `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=9` :
            `https://api.punkapi.com/v2/beers?beer_name=${searchField}&page=${pageNumber}&per_page=9`).then(res=>res.data)
    },

}

