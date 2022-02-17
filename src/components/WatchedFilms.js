import React from 'react';
import MovieCard from "./MovieCard";
import {useSelector} from "react-redux";

function WatchedFilms() {
    const {watched} = useSelector(state => state);

    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">My watched movies</h1>
                    <span className='count-pill'>{watched.length} {watched.length === 1 ? 'Movie' : 'Movies'}</span>
                </div>
                <div className="movie-grid">
                    {watched && (
                            watched.map((movie) => (
                                <MovieCard movie={movie} type='watched'/>
                            )))}
                </div>
            </div>
        </div>
    );
}

export default WatchedFilms;