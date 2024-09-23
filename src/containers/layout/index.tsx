import ContainerFooter from "../footer";
import ContainerLinks from "../links";
import styles from "./styles.module.scss";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles["main"]}> 
            <div className={styles["menu"]}>
                <h1>Data structure</h1>
                <ContainerLinks/>
                <ContainerFooter />
            </div>
            { children }
        </div>
    );
};

export default Layout; 