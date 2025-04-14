
import { css } from "@emotion/react"

const constainer = css`
    width: 100%;
    height: 426px;
    margin-bottom: 40px
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
    
    > button {
        width: 130px;
        height: 42px;
        border: 0px;
        border-radius: 12px;
        cursor: pointer;
    }
`

const itemGrid = css`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 24px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

`

export {
    constainer,
    header,
    title,
    itemGrid,
}