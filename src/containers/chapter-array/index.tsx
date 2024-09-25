import classNames from "classnames";
import { useState } from "react";
import styles from "./styles.module.scss";

const ContainerArray = () => {
    const [accessCubeIndex, setAccessCubeIndex] = useState(-1);
    const [searchCubeIndex, setSearchCubeValue] = useState(-1);
    const array = [1, 2, 3, 4, 5];

    const handleAccessInputOnChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setAccessCubeIndex(Number(e.target.value));
    };

    const handleSearchOnClick = (index: number): void => {
        setSearchCubeValue(index);
    };

    const handleInsertInputOnChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        array.push(Number(e.target.value));
    };

    return (
        <div className={styles["wrapper"]}>
            <h1>Chapter Array</h1>
            <section className={styles["section"]}>
                <h3>Access</h3>
                <div className={styles["wrapper-row"]}>
                    <span> Access array index: array [</span>
                    <input
                        type="number"
                        max={array.length - 1}
                        min={0}
                        onChange={handleAccessInputOnChange}
                    />
                    <span>]</span>
                </div>
                <div className={styles["cube-wrapper"]}>
                    {array.map((item, index) => {
                        return (
                            <div
                                className={classNames(styles["cube"], {
                                    [styles["cube-selected"]]:
                                        index === accessCubeIndex
                                })}
                                key={item}
                            >
                                {item}
                            </div>
                        );
                    })}
                </div>
            </section>
            <section className={styles["section"]}>
                <h3>Search</h3>
                <div className={styles["wrapper-col"]}>
                    <span>
                        {" "}
                        Current array index: array.indexOf(
                        {array[searchCubeIndex]})
                    </span>
                    <div> Output: {searchCubeIndex}</div>
                </div>
                <div className={styles["cube-wrapper"]}>
                    {array.map((item, index) => {
                        return (
                            <div
                                className={classNames(styles["cube"], {
                                    [styles["cube-selected"]]:
                                        index === searchCubeIndex
                                })}
                                key={item}
                                onClick={() => {
                                    handleSearchOnClick(index);
                                }}
                            >
                                {item}
                            </div>
                        );
                    })}
                </div>
            </section>
            <section className={styles["section"]}>
                <h3>Insert</h3>
                <div className={styles["wrapper-row"]}>
                    <span> array.push(</span>
                    <input type="number" onChange={handleInsertInputOnChange} />
                    <span>)</span>
                </div>
                <div className={styles["cube-wrapper"]}>
                    {array.map((item, index) => {
                        return (
                            <div
                                className={classNames(styles["cube"], {
                                    [styles["cube-selected"]]:
                                        index === searchCubeIndex
                                })}
                                key={item}
                            >
                                {item}
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default ContainerArray;
