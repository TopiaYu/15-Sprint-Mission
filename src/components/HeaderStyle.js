import { css } from '@emotion/react';

const headerStyle = css`
    display: flex;
    justify-content: center;
    max-width: 1120px;
    margin: 0 auto ;
    padding: 0 200px;
    positon: fixed;
`

const headerInner = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const LoginProfileStyle = css`
    width: 20px;
    height: 20px;
`

const headerLeft = css`
    display: flex;
    align-items: center;

`

const NavlinkStyle = css`
    display: flex;
    gap: 20px;
    padding-left: 32px;
`

const aTag = css`
    color: var(--gray-600);
    text-decoration : none;
`

export {
    headerStyle,
    headerInner,
    headerLeft,
    NavlinkStyle,
    aTag,
    LoginProfileStyle,

} 