import styled from "styled-components";
import pokeball from "../../public/svg/pokeball.svg"

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 150px;

  justify-content: space-between;
  align-items: center;

  margin-top: 80px;
  border-radius: 20px;

  background: ${props => `#${props.color}`} url(${pokeball}) 108% no-repeat;
  background-size: 180px;


  img {
    position: relative;
    top: -20px;
    height: 100%;
  }

  .containerLeft {
    display: flex;
    flex-direction: column;
    margin-left: 25px;
    
    p {
      color: #333;
      font-weight: 700;
      font-size: 0.9rem;
    }

    strong {
      color: #fff;
      font-size: 2rem;
      font-weight: 700;
      margin-top: 5px;
    }

    section {
      display: flex;
      margin-top: 10px;
      gap: 10px;
    }
  }

`

export const TypeTag = styled.span`
  padding: 10px 15px;
  background: ${props => `#${props.color}`};
  border-radius: 8px;
  color: #fff;
`