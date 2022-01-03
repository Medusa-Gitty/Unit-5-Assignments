import styled from "styled-components";

export const Button = styled.button`
  border: 1px solid pink;
  width: 150px;
  height: 50px;
  font-size: 16px;
`;

export const DivMain = styled.div`
  border: 5px solid gray;
  margin: auto;
  display: flex;
  gap: 20px;
`;

export const DivAddRecipe = styled.div`
  border-right: 1px solid gray;
  width: 50%;
  margin: 20px;
`;

export const DivAllRecipe = styled.div`
  border: 1px solid pink;
  width: 50%;
  margin: 20px;
  cursor: pointer;
`;

export const Form = styled.form`
  border: 1px solid gray;
  & > div {
    display: flex;
    justify-content: space-between;
  }
`;
