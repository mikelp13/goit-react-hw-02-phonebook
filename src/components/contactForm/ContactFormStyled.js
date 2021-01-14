import styled from "styled-components";

export const Form = styled.form`
  margin: 30px 0;
  padding: 20px;
  border: 1px solid #555555;
  border-radius: 3px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

`;

export const Input = styled.input`
  padding: 5px 10px;
  margin: 5px 0 20px 0;
  width: 100%;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  outline-color: #555555;

  &::placeholder {
    font-size: 14px;
    color: #d8d8d8;
  }
`;

export const Button = styled.button`
  color: black;
  border: 1px solid #555555;
  border-radius: 5px;
  padding: 5px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  background-color: #d3d3d3;

    &:hover {
    background-color: #555555;
    color: white;
  }
`;
