import { FC } from "react";
import { IItem } from "../../../../../types/types";
import styles from "./Title.module.css";

const Title: FC<{ item: IItem }> = ({ item }): JSX.Element => {
  return (
    <>
      <div className={styles.ansoc}>
        <h1
          style={{
            color: item.completed ? "#EDEDED" : "",
            textDecorationLine  : item.completed ? "line-through" : "",
            textDecorationColor: "#EDEDED",
          }}
          className={styles.title}
        >
          {item.title}
        </h1>
      </div>
    </>
  );
};

export default Title;
