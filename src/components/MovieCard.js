import React, { useState } from 'react'

import placeholder from '../images/placeholder.png'


const MovieCard = ({ movie, addToSavedList, savedFromStorage }) => {




    console.log(movie);

    return (<>


        <div className='movie-card' key={movie.imdbID}>
            <h4>{movie.Title}</h4>
            <img src={movie.Poster === "N/A" ? placeholder : movie.Poster} />
            <h5>{movie.Year}</h5>

            <div className='btn-container'>
                <button onClick={() => addToSavedList(movie.Title)} disabled={savedFromStorage.includes(movie.Title) || savedFromStorage.length >= 5}>Nominate</button>
            </div>
        </div>

    </>

    )
}

export default MovieCard
