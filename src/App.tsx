import { FC } from "react";
import Title from "./components/Title/Title";
import Box from "./components/Box/Box";

const App: FC = (): JSX.Element => {
  return (
    <>
      <main className="flex justify-center items-center w-screen min-h-screen bg-[#F5F5F5]">
        <div className="flex flex-col w-[600px] min-h-[600px] px-[16px] pb-[8px]">
          <Title />
          <Box />
        </div>
      </main>
    </>
  );
};

export default App;
