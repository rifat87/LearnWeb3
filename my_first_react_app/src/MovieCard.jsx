import React from 'react';


//  Now we are going to  use props for  multiple use,  but  we can't  use props here, otherwise we have to add props to everywhere. Thats why we will use destructuring
const MovieCard = ({ movie1 }) => {
    return(
        <div className="movie">
            <div>
                <p>{movie1.Year}</p>
            </div>
            <div>
                <img src={movie1.Poster !== 'N/A'?movie1.Poster: 'https://via.placeholder.com/400'} alt={movie1.Title} />
            </div>
            <div>
                <span>{movie1.Type}</span>
                <h3>{movie1.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;