import { FC } from "react";
import Icon from "./Icon/Icon";
import Field from "./Field/Field";

const Input: FC = (): JSX.Element => {
  return (
    <>
      <div className="flex gap-[16px] w-full h-[50px] px-[8px]">
        <Icon />
        <Field />
      </div>
    </>
  );
};

export default Input;
