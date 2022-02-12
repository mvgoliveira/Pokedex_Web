import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  
  margin-top: 80px;


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
    margin-top: 20px;
    padding: 15px;
    font-size: 1rem;
    background: #eee;
    cursor: text;
    
    input {
      border: none;
      background: #eee;
      outline: 0;
      width: 100%;
      margin-left: 10px;
    }
  }
`