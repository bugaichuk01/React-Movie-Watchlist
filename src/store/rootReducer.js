import {
    ADD_TO_WATCHED,
    ADD_TO_WATCHLIST,
    MOVE_TO_WATCHLIST,
    REMOVE_FROM_WATCHED,
    REMOVE_FROM_WATCHLIST
} from "./constants";

const initialState = {
    watchlist: localStorage.getItem('store.watchlist')
        ? JSON.parse(localStorage.getItem('store.watchlist'))
        : [],
    watched: localStorage.getItem('store.watched')
        ? JSON.parse(localStorage.getItem('store.watched'))
        : [],
};


export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_WATCHLIST:
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist]
            }
        case REMOVE_FROM_WATCHLIST:
            return {
                ...state,
                watchlist: state.watchlist.filter(movie => movie.id !== action.payload)
            }
        case ADD_TO_WATCHED:
            return {
                ...state,
                watchlist: state.watchlist.filter(
                    movie => movie.id !== action.payload.id
                ),
                watched: [action.payload, ...state.watched]
            }
        case REMOVE_FROM_WATCHED:
            return {
                ...state,
                watched: state.watched.filter(movie => movie.id !== action.payload)
            }
        case MOVE_TO_WATCHLIST:
            return {
                ...state,
                watched: state.watched.filter(movie => movie.id !== action.payload.id),
                watchlist: [action.payload, ...state.watchlist]
            }
        default:
            return state;
    }
}