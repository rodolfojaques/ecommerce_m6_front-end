import styled from "styled-components";

const StyleButton = styled.button`
  border: 1px solid ${(props => props.border || "unset")};
  padding: 12px, 28px, 12px, 28px;
  background-color: ${(props) => props.background || "unset"};
  color: ${(props)=> props.color || "var(--color-whiteFixed)"};
  border-radius: 4px;
  height: 48px;
  width: 146px;
  font-size: 16px;
  font-weight: 600;
  transition: 300ms;
  :hover {
    height: 38px;
    width: 119px;
    font-size: 14px;
    padding: 12px, 20px, 12px, 20px;
  }
  :active {
    height: 48px;
    width: 146px;
    font-size: 16px;
    background-color: ${(props) =>props.background || "unset"};
  }
`

export { StyleButton }

