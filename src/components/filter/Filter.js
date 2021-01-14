import React from "react";
import { FilterWrapper, FilterInput} from "./FilterStyled"


const Filter = ({ value, onChangeFilter }) => {
  return (
    <FilterWrapper>
      <label>
        Find contacts by name
      <FilterInput
        type="text"
        value={value}
        onChange={onChangeFilter}
        placeholder="Search..."
      ></FilterInput>
      </label>
    </FilterWrapper>
  );
};

export default Filter;
