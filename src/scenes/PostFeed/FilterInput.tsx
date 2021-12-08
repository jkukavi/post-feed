import { ChangeEventHandler } from "react";

interface FilterInputProps {
  propsMessage: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

const FilterInput = ({ handleChange, propsMessage }: FilterInputProps) => {
  console.log(propsMessage + "FilterInput");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem 0",
      }}
    >
      <h3 style={{ marginRight: "1rem" }}>Filter posts by user data:</h3>
      <input className="filterInput" type="text" onChange={handleChange} />
    </div>
  );
};

export default FilterInput;
