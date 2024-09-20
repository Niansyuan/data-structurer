import { Link } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div>
            <div>Data structure practice</div>
            <Link to={"/array"}>Array</Link>
        </div>
    );
}

export default App;
