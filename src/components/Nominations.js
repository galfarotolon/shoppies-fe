import React from 'react'

const Nominations = ({ removeFromSavedList, savedFromStorage }) => {



    savedFromStorage === null ? savedFromStorage = [] : savedFromStorage = JSON.parse(localStorage.getItem('saved'))

    return (


        <div className='nominations-container'>

            {savedFromStorage.length > 0 ? <h3>Nominations: </h3> : ''}

            {savedFromStorage.map((savedTitle) =>


                <div className='nomination-title'>
                    <h3>{savedTitle}</h3>
                    <button className='nomination-btn' onClick={() => removeFromSavedList(savedTitle)}><i className="far fa-times-circle fa-lg"></i></button>
                </div>
            )
            }

            {
                savedFromStorage.length >= 5 ? <h4 className='nomination-limit'>You Have Reached the Nomination Limit of 5 Movies</h4> : ''
            }
        </div>


    )
}

export default Nominations
