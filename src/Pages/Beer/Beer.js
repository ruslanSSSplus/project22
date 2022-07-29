import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {actions, getBeersThunkCreater} from "../../Redux/Reducers/beerReducer";
import {Paginator} from "../../Components/Paginator/Paginator";
import {Search} from '../../Components/Seacrh/Search'
import {EachBeer} from "./EachBeer/eachBeer";
import classes from './Beer.module.css'
import sveti from '../../Assets/svetlay.png'


export const Beer = () => {


    const dispatch = useDispatch()
    const {beers, searchField, currentPage} = useSelector((state) => state.beer)

    useEffect(() =>{
        dispatch(getBeersThunkCreater(1, ''))
    }, [])

    console.log(searchField)
    const onPageChanged = (pageNumber) => {
        dispatch(getBeersThunkCreater(pageNumber, searchField ))
    }

    let beerElements = beers.map((el) => <EachBeer posterImage={el.image_url} name={el.name}
                                                   description={el.description} id={el.id}
                                                   key={el.id}
    />)

        const searchBeer = async (e) => {
        e.preventDefault()
        dispatch(getBeersThunkCreater(1, searchField))
    }
        const handleSearch = (e) => {
        dispatch(actions.handleSearchAC(e.target.value))
    }

        return (<div className={classes.all}>
        <div className={classes.paginator}>
        <Paginator currentPage={currentPage}
        totalItemsCount={325}
        pageSize={9}
        onPageChanged={onPageChanged}
        portionSize={10}/>
        </div>
        <Search searchBeer={searchBeer} handleSearch={handleSearch}/>

        <div className={classes.el} >
    {beerElements}
        </div>
            <img src={sveti} className={classes.png1} alt={'beer'}/>
        </div>);

    }


