import React, {useState} from "react";
import {SpaceXLaunches} from "./SpaceXLaunches";

const App = () => {
    const [sortArg, setSortArg] = useState("desc");
    return (
        <div className="App">
            <select
                onChange={(change) => setSortArg(change.target.value)}
            >
                <option value={"desc"}>Сначала последние</option>
                <option value={"asc"}>Сначала первые</option>
            </select>
            <div>
                <SpaceXLaunches sortArg={sortArg}/>
            </div>
        </div>
    )
};

export default App;