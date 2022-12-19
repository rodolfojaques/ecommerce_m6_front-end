import styled from "styled-components";



const HeaderStl = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
gap: 1rem;

padding: 0 1.5rem 0 1.5rem;
height: 80px;

background-color: var(--color-grey-6);

.logo{
  display: flex;
  justify-content: center;
}

.nav_container{

  cursor: pointer;
}

@media (min-width: 800px) {
  .nav_container{

    display: flex;
    align-items: center;
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

    .division{
      color: var(--color-grey-2);
    }

    .user_options{
      display: flex;
      align-items: center;
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

      .img_profile{
        background-color: var(--color-brand-2);
        padding: 5px;
        border-radius: 150px;
        width: 32px;
        height: 32px;
        
        display: flex;
        justify-content: center;
        align-items: center;

        .initials{
          color: #ffffff;
          font-weight: 700;
          font-size: 14px;
        }
      }


    }
  }
}
`


export default HeaderStl