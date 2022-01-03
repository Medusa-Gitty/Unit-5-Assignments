import styled from "styled-components";

export const Button = styled.button`
  border: 1px solid pink;
  width: 150px;
  height: 30px;
  font-size: 16px;
`;

export const DivMain = styled.div`
  border: 5px solid gray;
  margin: auto;
  display: flex;
  gap: 20px;
`;

export const DivAddRecipe = styled.div`
  width: 50%;
  margin: 20px;
`;

export const DivAllRecipe = styled.div`
  border: 1px solid pink;
  padding: 10px;
  width: 50%;
  margin: 20px;
  cursor: pointer;
`;

export const Form = styled.form`
  border: 1px solid gray;
  padding: 5px;
  & > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const DisplayData = styled.div`
  border-left: 5px solid gray;
  border-right: 5px solid gray;
  border-bottom: 5px solid gray;
  padding: 50px;
`;
