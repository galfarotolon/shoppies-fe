import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'
import Nominations from './Nominations'


const HomeScreen = () => {

    const [movies, setMovies] = useState([])
    const [title, setTitle] = useState('')
    const [savedList, setSavedList] = useState([]);


    useEffect(() => {
        // axios.get(`http://www.omdbapi.com/?t=${title}&apikey=${process.env.REACT_APP_API_KEY}&`)

        axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${title || savedSearch}&type=movie&plot=full&r=json`)


            .then(res => {
                setMovies(res.data.Search)
            })

            .catch(err => {
                console.log(err);
            })

    }, [title])

    console.log(movies);


    const search = (e) => {

        setTitle(e.target.value)
        localStorage.setItem('search', JSON.stringify(e.target.value))
    }

    const savedSearch = JSON.parse(localStorage.getItem('search'))



    let savedFromStorage = []

    savedFromStorage = JSON.parse(localStorage.getItem('saved'))

    const addToSavedList = (movieTitle) => {
        setSavedList([...savedList, movieTitle]);


        localStorage.setItem('saved', JSON.stringify([...savedList, movieTitle]))
    };

    const removeFromSavedList = (title) => {
        setSavedList(savedList.filter(movie => movie !== title))

        localStorage.setItem('saved', JSON.stringify(savedFromStorage.filter(movie => movie !== title)))

    }


    return (

        <>
            <input className='search-bar' type='text' value={title || savedSearch} onChange={search} placeholder='search for movie title...' />
            <Nominations savedList={savedList} removeFromSavedList={removeFromSavedList} savedFromStorage={savedFromStorage} />

            {(!movies) && (title) ? <h3 className='searching'>Searching...</h3> : (<div>
                <div className='movie-container'>
                    {title && movies &&
                        movies.map((movie, idx) =>

                            <MovieCard movie={movie} addToSavedList={addToSavedList} savedList={savedList}
                                savedFromStorage={savedFromStorage} key={idx} />
                        )}
                </div>
            </div>)}

        </>

    )
}

export default HomeScreen
