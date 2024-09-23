import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import ContainerArray from "../chapter-array";
import ContainerLinkedList from "../chapter-linked-list";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                path: "/array",
                element: <ContainerArray />
            },
            {
                path:"/linked-list",
                element: <ContainerLinkedList />
            }
        ]
    }
]);