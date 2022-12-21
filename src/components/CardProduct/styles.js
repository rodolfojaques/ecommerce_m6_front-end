import styled from "styled-components";

export const CardProdStyle = styled.li`

width: 250px;
height: 380px;

text-align: start;

display: flex;
flex-direction: column;
justify-content: space-between;

.container_img{
    background-color: var(--color-grey-7);
    
    width: 100%;
    height: 150px;

    display: flex;
    justify-content: center;
    align-items: center;
}

img{
    width: 100%;
}

h3{
    margin-left: .1rem;
    color: var("--color-grey-1");

    font-weight: 600;
    font-size: 14px;
}

.description{
    margin-left: .1rem;
    color: var("--color-grey-2");

    font-size: 12px;
    font-weight: 400;
}

.user_name{
    margin-left: .1rem;
    display: flex;
    gap: .3rem;
    align-items: center;

    .img_profile_card{
        background-color: var(--color-brand-2);
        padding: 5px;
        border-radius: 150px;
        width: 32px;
        height: 32px;
        
        display: flex;
        justify-content: center;
        align-items: center;

        .initials_card{
            color: #ffffff;
            font-weight: 500;
            font-size: 14px;
        }
    }

    .name{

        color: var(--color-grey-2);
        font-size: 16px;
        font-weight: 600;
    }
}

.foot_card{
    margin-left: .1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .container_infos{
        display: flex;
        gap: .6rem;
    }

    .infos{
        background-color: var(--color-brand-4);
        color: var(--color-brand-1);

        font-size: 14px;
        font-weight: 500;
        border-radius: 4px;

        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
    }

    .price{
        color: var(--color-grey-1);

        font-size: 16px;
        font-weight: 500;
    }
}

.buttons{
    display: flex;
    gap: .5rem;
}
`;