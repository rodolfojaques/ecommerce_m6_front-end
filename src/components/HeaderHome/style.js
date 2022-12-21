import styled from "styled-components";


const StyleHeaderHome = styled.div`
    width: 100vw;
    min-height: 425px;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-brand-2);
    gap: 1rem;

    h1{
        max-width: 90vw;
        text-align: center;
        color: var(--color-whiteFixed);
        font-size: 32px;
        font-weight: 700;
    }
    p{
        max-width: 90vw;
        text-align: center;
        color: var(--color-whiteFixed);
        font-size: 16px;
        font-weight: 400;
    }

    div{
        height: 3rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 90vw;
    }
    button{
        width: 90vw;
        &:hover{
            width: 90vw;
        }
    }

    @media (min-width: 800px) {
    
        p{
            max-width: 50vw;
            font-size: 16px;
            font-weight: 400;
        }
        h1{
            max-width: 50vw;
            font-size: 32px;
        }

        div{
            flex-direction: row;
        }
        button{
            width: 146px;
            
            &:hover{
                width: 119px;
            }
        }
        
    }

    
`

export { StyleHeaderHome };
