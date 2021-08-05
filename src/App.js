import './App.css';
import React, {useEffect, Fragment} from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/log/Logs";

const App = () => {
    useEffect(() => {
        // Init Materialize JS
        M.AutoInit();
    });

    return (
        <Fragment>
            <SearchBar/>
            <div className="container">
                <Logs/>
            </div>
        </Fragment>
    );
}

export default App;
