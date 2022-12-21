import styled from "styled-components";

const StyleListCards = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: flex-start;
  gap: 40px;
  overflow-x: scroll;

  h5{
    font-size: 24px;
    font-weight: 600;
    color: var(--color-grey-1);
  }
  ul{
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
`

export { StyleListCards }