import { FC } from "react";
import styles from "./App.module.css";
import Box from "./components/Box/Box";
import Title from "./components/Title/Title";

const App: FC = (): JSX.Element => {
  return (
    <>
      <main className={styles.ansoc}>
        <div className={styles.inner}>
          <Title />
          <Box />
        </div>
      </main>
    </>
  );
};

export default App;
