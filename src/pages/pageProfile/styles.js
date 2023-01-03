import styled from "styled-components";

export const PageProfileStyle = styled.main`

display: flex;
flex-direction: column;
gap: 1.5rem;

  .sec_head{
    position: relative;
    height: 500px;
    width: 100%;

    .backcolor{
      height: 250px;
      width: 100%;
    }

    .backcolor_a{
        background-color: var(--color-brand-1);
      }

    .card_user{

      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      gap: 1.2rem;
      margin-left: auto;
      margin-right: auto;
      
      width: 90%;
      max-width: 800px;
      height: 400px;

      padding: 1rem;

      background-color: #FFFFFF;

      position: absolute;
      top: 50px;
      left: 5%;
      right: 5%;
    }

    .description_p{
      color: var(--color-grey-2);
      font-size: 13px;
      font-weight: 400;
      line-height: 20px;
    }
  }

  .user_name_p{
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-items: flex-start;

    .img_profile_card_p{
      background-color: var(--color-brand-2);
      padding: 5px;
      border-radius: 150px;
      width: 84px;
      height: 84px;
      
      display: flex;
      justify-content: center;
      align-items: center;

      .initials_card_p{
          color: #ffffff;
          font-weight: 600;
          font-size: 32px;
      }
    }

    .name_p{

      color: var(--color-grey-1);
      font-size: 18px;
      font-weight: 600;

      span{
        font-size: 10px;
        font-weight: 600;
        padding: 5px;

        border-radius: 4px;

        background-color: var(--color-brand-4);
        color: var(--color-brand-1);
      }
    }
  }
`;