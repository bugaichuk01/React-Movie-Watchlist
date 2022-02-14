import {useDispatch} from "react-redux";
import {addToWatched, moveToWatchlist, removeFromWatched, removeFromWatchlist} from "../store/actions";

function MovieControls({movie, type}) {
    const dispatch = useDispatch();

    const addMovie = () => {
        dispatch(addToWatched(movie))
    }

    const removeWatchlist = () => {
        dispatch(removeFromWatchlist(movie.id))
    }

    const toWatchlist = () => {
        dispatch(moveToWatchlist(movie))
    }

    const removeWatched = () => {
        dispatch(removeFromWatched(movie.id))
    }

    return (
        <div className='inner-card-controls'>
            {type === 'watchlist' && (
                <>
                    <button
                        onClick={addMovie}
                        className="ctrl-btn"
                    >
                        <i className="fa-fw far fa-eye"></i>
                    </button>

                    <button
                        onClick={removeWatchlist}
                        className="ctrl-btn"
                    >
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}

            {type === 'watched' && (
                <>
                    <button
                        onClick={toWatchlist}
                        className="ctrl-btn"
                    >
                        <i className="fa-fw far fa-eye-slash"></i>
                    </button>

                    <button
                        onClick={removeWatched}
                        className="ctrl-btn"
                    >
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )
            }
        </div>
    );
}

export default MovieControls;