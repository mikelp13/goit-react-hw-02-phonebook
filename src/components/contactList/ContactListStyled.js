import styled from "styled-components";
import {Button} from "../contactForm/ContactFormStyled"

export const List = styled.ul`
  li {
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    background-color: white;
    border: 1px solid #555555;
    border-radius: 3px;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

export const DelButton = styled(Button)`
  padding: 3px 10px;
`;
