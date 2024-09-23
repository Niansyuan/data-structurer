import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const ContainerLinks = () => {
    // TODO: link map
    return (
        <div className={styles["links"]}>
            <Link to="/array">Array</Link>
            <Link to="/linked-list">Linked List</Link>
        </div>

    );
};

export default ContainerLinks; 