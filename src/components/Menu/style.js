import styled from "styled-components";

export const StyledMenu = styled.section`
  background-color: var(--color-whiteFixed);
  position: absolute;
  top: 0;
  left: 0;
  margin: 60px 0;
  display: ${(props) => (props.closeMenu ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: 17px;
  font-family: "Inter";
  font-weight: 500;
  box-shadow: 0px 7px 8px 0px #00000040;
  transition: 0.3s;
  z-index: 2;
  animation: ${(props) =>
    props.showMenu ? "slide-down 0.3s" : "slide-up 0.3s"};
  @keyframes slide-down {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes slide-up {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
    }
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    #flexHome{
        align-items: flex-start;
    }
  }
  a {
    cursor: pointer;
    width: 80%;
    padding: calc(3vw) 0;
    display: flex;
    justify-content: space-between;
    p {
      width: 140px;
    }
    span {
      width: 64px;
    }
  }
  @media (min-width: 631px) {
    display: none;
  }
  button{
    margin: 0 auto;
  }
`;

export const Line = styled.div`
  border-bottom: 1px solid var(--color-grey-4);
  width: ${(props) => props.width || "100%"};
  display: flex;
`;