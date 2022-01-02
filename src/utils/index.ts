export const parseColor = (hex: string): string => {
  const r = parseInt(hex[1] + hex[2], 16);
  const g = parseInt(hex[3] + hex[4], 16);
  const b = parseInt(hex[5] + hex[6], 16);

  return `rgb(${[r, g, b].join(",")})`;
};

export const validate = (str: string): boolean => {
  const check = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  return (
    str.length === 7 &&
    str[0] === "#" &&
    [...str.slice(1)].every((letter) => check.includes(letter))
  );
};
