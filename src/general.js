import styled from "styled-components";

export const Row = styled.div`
  margin-bottom: 30px;
`

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: -20px;
  >div{
    margin-top: 20px;
  }
`

export const Form = styled.form`
  .label {
    margin-bottom: 10px;
  }
  input {
    margin-right: 20px;
    border: 2px solid #cacaca;
    border-radius: 4px;
    padding: 8px 12px;
  }
`
export const BorderBox = styled.div`
  padding: 20px 40px;
  background: white;
  margin: 30px auto;
  border: 4px solid #e9e9e9;
  border-radius: 10px;
  text-align: left;
  width: 45%;
  .title{
    margin-bottom: 40px;
  }
  button {
    background-color: #42b549;
    border-color: #42b549;
    color: #fff;
    padding: 8px 30px;
    border-radius: 4px;
    cursor: pointer;

    :hover {
      opacity: 0.8;
    }
  }
  @media (max-width: 975px) {
    width: 70%;
  } 
`;
