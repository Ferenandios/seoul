import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { setItems } from "../../../../features/main.slice";

const Clear: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state);
  const handleClick = () => {
    dispatch(setItems(items.filter((item) => !item.completed)));
  };
  return (
    <>
      <div className="flex items-center h-full">
        <button
          onClick={handleClick}
          className="text-black text-opacity-40 max-w-[150px] whitespace-nowrap overflow-hidden overflow-ellipsis"
        >
          Clear completed
        </button>
      </div>
    </>
  );
};

export default Clear;
