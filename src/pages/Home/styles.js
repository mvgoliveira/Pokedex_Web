import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  
  padding-top: 80px;
  margin-bottom: 50px;

  h1 {
    font-size: 2rem;
    color: #000;
    font-weight: 700;
  }

  > p {
    font-size: 1rem;
    color: #555;

    margin-top: 20px;
  }

  .inputContainer {
    display: flex;
    margin: 20px 0;
    padding: 18px;
    font-size: 1rem;
    background: #eaeaea;
    border-radius: 5px;
    cursor: text;
    
    input {
      font-size: 0.9rem;
      border: none;
      background: #eaeaea;
      outline: 0;
      width: 100%;
      margin-left: 10px;
    }
  }
`