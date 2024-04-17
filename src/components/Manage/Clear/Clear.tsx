import { FC } from "react";

const Clear: FC = (): JSX.Element => {
  const handleClick = () => {};
  return (
    <>
      <div className="flex items-center h-full">
        <button onClick={handleClick} className="text-black text-opacity-40">
          Clear completed
        </button>
      </div>
    </>
  );
};

export default Clear;
