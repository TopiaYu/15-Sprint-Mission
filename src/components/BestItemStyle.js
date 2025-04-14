
import { css } from "@emotion/react"

const constainer = css`
    width: 100%;
    height: 426px;
`

const title = css`
    margin: 0px 0px 16px 0px;
`

const itemGrid = css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

`


export {
    constainer,
    title,
    itemGrid,
}