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

        axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${title}&type=movie&plot=full&r=json`)


            .then(res => {
                console.log(res.data.Search);
                setMovies(res.data.Search)
            })

            .catch(err => {
                console.log(err);
            })

    }, [title])



    const search = (e) => {
        setTitle(e.target.value)
    }



    const savedFromStorage = JSON.parse(localStorage.getItem('savedList'))


    const addToSavedList = (movieTitle) => {
        setSavedList([...savedList, movieTitle]);

        localStorage.setItem('savedList', JSON.stringify([...savedList, movieTitle]))
    };

    const removeFromSavedList = (title) => {
        setSavedList(savedList.filter(movie => movie !== title))

        localStorage.setItem('savedList', JSON.stringify(savedFromStorage.filter(movie => movie !== title)))

    }





    // if (!movies) {
    //     return <div>Loading movie information...</div>;
    // }

    return (
        <div>
            <input type='text' value={title} onChange={search} placeholder='search for movie title'></input>

            <Nominations savedList={savedList} removeFromSavedList={removeFromSavedList} savedFromStorage={savedFromStorage} />

            <div className='movie-container'>
                {title && movies &&
                    movies.map((movie, idx) =>

                        <MovieCard movie={movie}
                            addToSavedList={addToSavedList} savedList={savedList} savedFromStorage={savedFromStorage} key={idx} />

                    )}
            </div>



        </div>

    )
}

export default HomeScreen
