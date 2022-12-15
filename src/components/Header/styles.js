import styled from "styled-components";



const HeaderStl = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
gap: 1rem;

padding: 0 1.5rem 0 1.5rem;
height: 80px;

background-color: var(--color-grey-6);
border: solid greenyellow;

.logo{
  display: flex;
  justify-content: center;
}

.nav_container{
  border: solid pink;

  cursor: pointer;
}

@media (min-width: 800px) {
  .nav_container{
    border: solid pink;

    display: flex;
    gap: .5rem;

    .options_full{
      display: flex;
      gap: .5rem;

      cursor: pointer;

      .nav_btn{

        color: var(--color-grey-2);
        font-size: 16px;
        font-weight: 600;

        &:hover{
          opacity: .6;
        }        
      }


    }

    .user_options{
      display: flex;
      gap: .5rem;

      cursor: pointer;

      .nav_btn{

        color: var(--color-grey-2);
        font-size: 16px;
        font-weight: 600;

        &:hover{
          opacity: .6;
        }        
      }
    }
  }
}
`


export default HeaderStl