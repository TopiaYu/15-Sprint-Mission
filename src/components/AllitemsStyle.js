
import { css } from "@emotion/react"

const constainer = css`
    width: 100%;
    height: 426px;
    margin-bottom: 40px;
`

const title = css`
    font-size: 20px;
    font-weight: 700;
    color: var(--gray-900);
`

const header = css`
    display: flex;
    align-items: center;
    gap: 22px;
    margin: 24px auto;
    
    > input {
        flex: 1;
        border-radius: 12px;
        border: 0px;
        height: 42px; 
        background: var(--gray-100);
        padding: 20px;
    }
    
    > button, select {
        width: 130px;
        height: 42px;
        border: 0px;
        border-radius: 12px;
        cursor: pointer;   
        color: var(--gray-800) 
    }

    > button {
        background: var(--blue);
        color: white;
    }
    
    > select {
        border: 1px solid var(--gray-200);
        padding: 12px 20px;
    }

    }
`

const itemGrid = css`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 24px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
    }

    @media (max-width: 425px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;    
    }

`
const pagenation = css`
    display: flex;
    justify-content: center;
    padding: 43px;
    
`

export {
    constainer,
    header,
    title,
    itemGrid,
    pagenation,
}
