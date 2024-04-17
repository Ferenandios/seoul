import { FC } from "react";
import Title from "./components/Title/Title";
import Box from "./components/Box/Box";
import styles from "./App.module.css";
import Manage from "./components/Manage/Manage";

const App: FC = (): JSX.Element => {
  return (
    <>
      <main className={styles.ansoc}>
        <div className={styles.inner}>
          <Title />
          <Box />
          <Manage />
        </div>
      </main>
    </>
  );
};

export default App;
