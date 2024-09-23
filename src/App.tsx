import { Outlet } from "react-router-dom";
import Layout from "./containers/layout";

const App = () => {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
};

export default App;
