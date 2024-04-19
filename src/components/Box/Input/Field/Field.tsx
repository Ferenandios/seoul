import { FC } from "react";
import { addItem, setValue } from "../../../../features/main.slice";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import styles from "./Field.module.css";

const Field: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state);
  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    if (event.currentTarget.value.trim() === "") return;
    dispatch(addItem(value));
    dispatch(setValue(""));
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setValue(event.currentTarget.value));
  };
  return (
    <>
      <input
        onKeyUp={(event) => handleKeyUp(event)}
        onChange={(event) => handleChange(event)}
        value={value}
        autoFocus
        id="field"
        className={styles.input}
        placeholder="What needs to be done?"
        type="text"
      />
    </>
  );
};

export default Field;
