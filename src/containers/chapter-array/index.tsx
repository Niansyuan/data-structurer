import classNames from "classnames";
import { useState } from "react";
import styles from "./styles.module.scss";

const UPDATE_NUMBER = 0;
const UPDATE_INDEX = 2;

const ContainerArray = () => {
    const [accessCubeIndex, setAccessCubeIndex] = useState(-1);
    const [searchCubeIndex, setSearchCubeValue] = useState(-1);
    const staticArray = [1, 2, 3, 4, 5];
    const [array, setArray] = useState<Array<number>>(staticArray);
    const [insertArray, setInsertArray] = useState<Array<number>>([]);
    const [updatedArray, setUpdatedArray] =
        useState<Array<number>>(staticArray);

    const handleAccessInputOnChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setAccessCubeIndex(Number(e.target.value));
    };

    const handleSearchOnClick = (index: number): void => {
        setSearchCubeValue(index);
    };

    const handleClickInsert = (value: number, index: number) => {
        const poppedArray = [...array];
        poppedArray.splice(index, 1);
        setArray(poppedArray);

        const newArray = [...insertArray];
        newArray.push(value);
        setInsertArray(newArray);
    };

    const handleReload = () => {
        setArray(staticArray);
        setInsertArray([]);
    };

    const handleReloadUpdate = () => {
        setUpdatedArray(staticArray);
    };

    const handleUpdate = () => {
        const newArray = [...updatedArray];
        newArray[UPDATE_INDEX] = UPDATE_NUMBER;
        setUpdatedArray(newArray);
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
                    {staticArray.map((item, index) => {
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
                    {staticArray.map((item, index) => {
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
                <h3>Insert & Delete</h3>
                <button onClick={handleReload}>Reload</button>
                <div className={styles["wrapper-row"]}>
                    <span> array.splice()</span>
                    <div className={styles["cube-wrapper"]}>
                        {array.map((item, index) => {
                            return (
                                <div
                                    className={classNames(styles["cube"])}
                                    key={item}
                                    onClick={() => {
                                        return handleClickInsert(item, index);
                                    }}
                                >
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={styles["wrapper-row"]}>
                    <span> array.push()</span>
                    <div className={styles["cube-wrapper"]}>
                        {insertArray.map((item, index) => {
                            return (
                                <div
                                    className={classNames(
                                        styles["cube"],
                                        styles["cube-new"]
                                    )}
                                    key={`insert ${index}`}
                                >
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className={styles["section"]}>
                <h3>Update</h3>
                <div className={styles["wrapper-row"]}>
                    <button onClick={handleReloadUpdate}>Reload</button>
                    <button onClick={handleUpdate}>Update</button>
                </div>
                <div className={styles["wrapper-row"]}>
                    <span>array[{UPDATE_INDEX}]</span>
                    <span>=</span>
                    <span>{UPDATE_NUMBER}</span>
                    <div className={styles["cube-wrapper"]}>
                        {updatedArray.map((item, index) => {
                            return (
                                <div
                                    className={classNames(styles["cube"], {
                                        [styles["cube-selected"]]:
                                            index === UPDATE_INDEX
                                    })}
                                    key={item}
                                >
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContainerArray;
