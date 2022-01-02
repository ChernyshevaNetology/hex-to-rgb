import React, { ChangeEvent, useState, useEffect } from "react";
import { validate, parseColor } from "./utils";
import { Converter } from "components/Converter";
import "./App.css";

const App = () => {
  const [val, setVal] = useState<string>("");
  const [bg, setBg] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const validColorLen = 7;

  useEffect(() => {
    if (val.length === validColorLen) {
      if (validate(val)) {
        setError(false);
        setBg(parseColor(val));
      } else {
        setError(true);
      }
    }
  }, [val, error]);

  const handleVal = (event: ChangeEvent<HTMLInputElement>): void => {
    setVal(event.currentTarget.value);
  };

  return <Converter val={val} bg={bg} handleVal={handleVal} error={error} />;
};

export default App;
