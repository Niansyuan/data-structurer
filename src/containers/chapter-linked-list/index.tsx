import { useState } from "react";
import styles from "./styles.module.scss"; // SCSS 模組樣式

class Node {
    value: string;
    next: Node | null;

    constructor(value: string) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head: Node | null;
    size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value: string) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    delete(value: string) {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
            this.size--;
        }
    }

    search(value: string): number {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.value === value) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }

    // 用來將鏈結清單轉換為陣列，方便在 React 中渲染
    toArray(): string[] {
        const nodes = [];
        let current = this.head;
        while (current) {
            nodes.push(current.value);
            current = current.next;
        }
        return nodes;
    }
}

const ContainerLinkedList = () => {
    // 初始化鏈結清單和狀態
    const [linkedList] = useState<LinkedList>(new LinkedList());
    const [inputValue, setInputValue] = useState("");
    const [searchResult, setSearchResult] = useState("");
    const [list, setList] = useState<Array<string>>([]);

    // 更新鏈結清單並將其轉換為陣列後重新渲染
    const updateList = () => {
        setList(linkedList.toArray());
    };

    // 處理新增節點
    const addNode = () => {
        if (inputValue) {
            linkedList.append(inputValue);
            updateList();
            setInputValue(""); // 清空輸入框
        }
    };

    // 處理刪除節點
    const deleteNode = () => {
        if (inputValue) {
            const index = linkedList.search(inputValue);
            if (index !== -1) {
                linkedList.delete(inputValue);
                updateList();
            } else {
                setSearchResult(`Delete value "${inputValue}" not found.`);
            }

            setInputValue("");
        }
    };

    // 處理搜尋節點
    const searchNode = () => {
        if (inputValue) {
            const index = linkedList.search(inputValue);
            if (index !== -1) {
                setSearchResult(
                    `Node with value "${inputValue}" found at position: ${index}`
                );
            } else {
                setSearchResult(`Node with value "${inputValue}" not found.`);
            }
            setInputValue("");
        }
    };

    return (
        <div className={styles["wrapper"]}>
            <h1>Chapter Linked List</h1>

            <div className={styles["controls"]}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => {
                        return setInputValue(e.target.value);
                    }}
                    placeholder="Enter node value"
                />
                <button onClick={addNode}>Add Node</button>
                <button onClick={deleteNode}>Delete Node</button>
                <button onClick={searchNode}>Search Node</button>
            </div>
            <div className={styles["result"]}>{searchResult}</div>
            <div className={styles["list"]}>
                {list.map((value, index) => {
                    return (
                        <div className={styles["node"]}>
                            <div key={index} className={styles["node-wrapper"]}>
                                <div className={styles["node-data"]}>
                                    {value}
                                </div>
                                <div className={styles["node-next"]}></div>
                            </div>
                            {index < list.length - 1 && (
                                <div className={styles["arrow"]}>→</div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ContainerLinkedList;
