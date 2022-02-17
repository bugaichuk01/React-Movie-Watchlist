import './lib/font-awesome/css/all.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import WatchedFilms from "./components/WatchedFilms";
import WatchList from "./components/WatchList";
import AddFilm from "./components/AddFilm";
import {useEffect} from "react";
import {useSelector} from "react-redux";

function App() {
    const store = useSelector(state => state)

    useEffect(() => {
        localStorage.setItem('store.watchlist', JSON.stringify(store.watchlist));
        localStorage.setItem('store.watched', JSON.stringify(store.watched));
    }, [store])

    return (
        <Router>
            <Header/>
            <Routes>
                <Route exact path='/' element={<WatchList/>}/>
                <Route path='/watched' element={<WatchedFilms/>}/>
                <Route path='/add' element={<AddFilm/>}/>
            </Routes>
        </Router>
    );
}

export default App;
