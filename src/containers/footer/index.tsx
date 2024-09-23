import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const ContainerFooter=()=>{
    return (
        <div className={styles["footer"]}>
            <Link to="/">Back home</Link>
        </div>

    );
};

export default ContainerFooter; 