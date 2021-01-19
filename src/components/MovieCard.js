import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import placeholder from '../images/placeholder.png'


const MovieCard = ({ movie, addToSavedList, savedFromStorage }) => {



    savedFromStorage === null ? savedFromStorage = [] : savedFromStorage = JSON.parse(localStorage.getItem('saved'))


    console.log(movie);

    return (<>


        <div className='movie-card' key={movie.imdbID}>
            <h4>{movie.Title}</h4>

            <div className='movie-img'>
                <Link to={`/movies/${movie.imdbID}`}>
                    <img src={movie.Poster === "N/A" ? placeholder : movie.Poster} />
                    <div className='img-hover'>
                        <p>More Info</p>
                    </div>
                </Link>
            </div>
            <h5>{movie.Year}</h5>

            <div className='btn-container'>
                <button className='save-btn' onClick={() => addToSavedList(movie.Title)}
                    disabled={savedFromStorage.includes(movie.Title) || savedFromStorage.length >= 5}>
                    Nominate</button>
            </div>
        </div>

    </>

    )
}

export default MovieCard
