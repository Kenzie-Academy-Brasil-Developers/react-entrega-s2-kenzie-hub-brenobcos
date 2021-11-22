import styled from "styled-components";

// export const ContainerTec = styled.div`
//     width: 467px;
//     height: 562px;
//     border-radius: 5px;
//     background-color: var(--white-color);
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `

// export const HeadTec = styled.div` 
//     width: 380px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// `

export const ContainerCard = styled.div`
    width: 250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const DivIcon = styled.div`
    width: 77px;
    height: 77px;
    background-color: var(--green-transp);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover{
        background-color: var(--color-secondary);
    }
`

export const LevelSpan = styled.span`
    color: var(--color-secondary);
    font-weight: 500;
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--green-transp);
    border-radius: 8px;
`

export const PlusButton = styled.button`
    color: var(--white-color);
    width: 30px;
    height: 30px;
    border: 0;
    background-color: var(--color-secondary);
    cursor: pointer;
    font-size: 20px;
    border-radius: 5px;

`