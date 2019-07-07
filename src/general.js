import styled from "styled-components";

export const WrapperStyled = styled.div`
  padding: 20px 40px;
  background: white;
  padding-bottom: 100px;
  margin: 30px auto;
  border: 5px solid #e9e9e9;
  border-radius: 10px;
  text-align: left;
  width: 40vw;
  input {
    margin-right: 20px;
    border: 2px solid #cacaca;
    border-radius: 4px;
    padding: 8px 12px;
  }
  .row {
    margin-top: 40px;
    :first-of-type {
      margin-bottom: 0;
    }
  }
  .flex {
    display: flex;
    flex-direction: row;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 20px;
  }

  button {
    background-color: #42b549;
    border-color: #42b549;
    border-width: 0;
    color: #fff;
    padding: 8px 30px;
    border-radius: 4px;
    cursor: pointer;

    :hover {
      opacity: 0.8;
    }
  }
  input {
    padding: 8px 12px;
  }
`;
