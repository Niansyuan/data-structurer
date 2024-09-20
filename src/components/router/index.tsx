import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import ComponentArray from "../array-structure";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path:"/array",
        element: <ComponentArray />
    }
]);