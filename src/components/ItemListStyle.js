import { css } from "@emotion/react"

const itemListStyle = css`
    width: 282px;
    height: 378px;
`

const itemImage = css`
    border-radius: 16px;
    border: 2px solid;
    width: 282px;
    height: 282px;
`

const itemTitle = css`
    font-size: 14px;
    font-weight: 500;
    color: var(--gray-800);
`

const itemPrice = css`
    font-size: 16px;
    font-weight: 700;
    color: var(--gray-800);
`

const itemLikes = css`
    font-size: 12px;
    font-weight: 500;
    color: var(--gray-600);
`

export {
    itemListStyle,
    itemTitle,
    itemPrice,
    itemLikes,
    itemImage,
}