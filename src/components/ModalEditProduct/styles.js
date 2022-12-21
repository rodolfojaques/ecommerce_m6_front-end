import styled from "styled-components";

export const FormEditProductStyle = styled.section`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;

background-color: rgba(0, 0, 0, 0.4);
height: max-content;


.form_cont{
    position: relative;
    top: 90px;

    margin: 0 auto 0 auto;

    background-color: #FFFFFF;
    border-radius: 4px;

    width: 266px;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.2rem;

    .title_form{
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        height: 50px;
    }

    .text_title{
        font-weight: 500;
        font-size: 16px;

        color: var(--color-grey-1);
    }

    .button_x{
        font-weight: 500;
        font-size: 16px;

        color: var(--color-grey-4);
        cursor: pointer;
    }

    .type_ann{
        display: flex;
        flex-direction: column;
        gap: 1rem;

        text-align: start;
    }

    .ttl_type{
        text-align: start;
        color: #000000;

        font-size: 14px;
        font-weight: 500;
    }

    .btn_type{
        display: flex;
        justify-content: space-between;
        gap: .5rem;
    }

    .inputs{
        text-align: start;

        display: flex;
        flex-direction: column;
        gap: .3rem;

        label{
            color: var(--color-grey-1);
            font-size: 14px;
            font-weight: 500;
        }

        input{
            border-color: var(--color-grey-3);
            border-style: solid;
            border-radius: 4px;

            height: 50px;
            padding-left: .5rem;

            &::placeholder{
                color: var(--color-grey-3);
                font-weight: 400;
                font-size: 15px;
            }
        }
    }

    .triple_container{
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
    }

    .doble_inputs{
        display: flex;
        gap: .5rem;

        input{
            width: 113px;
        }
    }

    .add_camp_img{
        width: 100%;
        height: 40px;

        background-color: var(--color-brand-4);
        color: var(--color-brand-1);
        border-radius: 4px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 10.5px;
        font-weight: 600;
    }
    
    @media (min-width: 800px) {
        width: 520px;

        button{
            width: 240px;
        }

        .triple_container{
            flex-direction: row;
            gap: .5rem;

            input{
                width: 156.5px;
            }
        }
    }
}


`;