import React, { FC, ChangeEvent } from "react";

interface ConverterProps {
  val: string;
  handleVal: (event: ChangeEvent<HTMLInputElement>) => void;
  bg: string;
  error: boolean;
}

const Converter: FC<ConverterProps> = ({ val, handleVal, bg, error }) => {
  return (
    <div
      style={{ backgroundColor: error ? "tomato" : bg }}
      className="container"
    >
      <form>
        <input
          maxLength={7}
          value={val}
          onChange={handleVal}
          className="color-input"
          type="text"
        />
        <div className="converted-value">{error ? "ОШИБКА" : bg}</div>
      </form>
    </div>
  );
};

export { Converter };
