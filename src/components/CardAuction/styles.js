import styled from "styled-components";

export const CardAuctionStyle = styled.li`
position: relative;

width: 250px;
height: 350px;


background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);

text-align: start;

display: flex;
flex-direction: column;
justify-content: space-between;

@media (min-width: 800px) {
    
    height: 290px;
    width: 550px;
}

.container_img_l{
    
    
    width: 100%;
    height: 380px;

    display: flex;
    justify-content: center;
    align-items: center;
}
`

export const ContainerStyle = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;

padding: .8rem;

width: 100%;

position: absolute;

top: 0;
right: 0;
left: 0;
bottom: 0;

.timeExp{
    background-color: var(--color-grey-10);
    border-radius: 32px;

    height: 30px;
    width: 123px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px 0 2px;

    .clock{
        height: 28px;
    }

    .time{
        color: var(--color-grey-1);

        font-size: 16px;
        font-weight: 500;
    }
}

.title{
    color: var(--color-grey-10);

    font-weight: 600;
    font-size: 18px;
}

.description_l{
    color: var(--color-grey-5);

    font-size: 14px;
    font-weight: 400;
}

.user_name_l{
    display: flex;
    gap: .3rem;
    align-items: center;

    .img_profile_card_l{
        background-color: var(--color-brand-2);
        padding: 5px;
        border-radius: 150px;
        width: 32px;
        height: 32px;
        
        display: flex;
        justify-content: center;
        align-items: center;

        .initials_card_l{
            color: #ffffff;
            font-weight: 500;
            font-size: 14px;
        }
    }

    .name_l{

        color: #ffffff;
        font-size: 16px;
        font-weight: 600;
    }
}

.foot_card_l{

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .5rem;

    .container_infos_l{
        display: flex;
        gap: .6rem;
    }

    .infos_l{
        background-color: var(--color-brand-4);
        color: var(--color-brand-1);

        font-size: 12px;
        font-weight: 500;
        border-radius: 4px;

        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3px;
    }

    .price_l{
        color: #ffffff;

        font-size: 16px;
        font-weight: 500;
    }

    @media (min-width: 800px) {
    
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
}
`;



export const FootButtonAdmin = styled.div`

background-color: var(--color-brand-1);

width: 250px;
height: 50px;

display: flex;
justify-content: space-between;
align-items: center;
padding: 2px 8px 2px 8px;
gap: .5rem;

.foot_txt{
    color: #ffffff;

    font-size: 14px;
    font-weight: 600;
}

.arrow{
    height: 30px;
    width: 50px;    
}

@media (min-width: 800px) {

    width: 550px;
    height: 60px;
    justify-content: flex-start;
    gap: 1rem;
}

`;




export const FootButton = styled.div`

background-color: var(--color-brand-1);

width: 250px;
height: 50px;

display: flex;
justify-content: space-between;
align-items: center;
padding: 0 8px 0 8px;

.foot_txt{
    color: #ffffff;

    font-size: 14px;
    font-weight: 600;
}

.arrow{
    height: 30px;
    width: 50px;    
}

@media (min-width: 800px) {

    width: 550px;
    height: 60px;
}

`;