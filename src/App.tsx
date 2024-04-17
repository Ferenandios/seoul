import { FC } from "react";
import Title from "./components/Title/Title";
import Box from "./components/Box/Box";
import styles from "./App.module.css";

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
