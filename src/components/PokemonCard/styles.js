import styled from "styled-components";
import pokeball from "../../public/svg/pokeball.svg";
import dots from "../../public/svg/dots.svg";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 150px;

  justify-content: space-between;
  align-items: center;

  margin-top: 25px;
  border-radius: 20px;

  box-shadow:
    7px 10px 25px -17px rgba(0, 0, 0, 0.2);
  ;


  background-color: ${props => `${props.color}`}; 
  background-image: url(${pokeball}), url(${dots});
  background-repeat: no-repeat;
  background-position-x: 108%, 18%;
  background-position-y: 50%, 10%;
  background-size: 180px, 80px;


  > img {
    position: relative;
    top: -20px;
    right: 10px;
    height: 100%;
  }

  .containerLeft {
    display: flex;
    flex-direction: column;
    margin-left: 25px;
    
    p {
      color: #3e4042;
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
  display: flex;
  align-items: center;
  padding: 3px 7px;
  background: ${props => `${props.color}`};
  border-radius: 8px;
  color: #fff;

  img {
    height: 25px;
    margin-right: 2px;
  }
`