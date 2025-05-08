import { css } from '@emotion/react';

const headerStyle = css`
    position: sticky;
    top: 0;
    width: 100%;
    height: 70px;
    padding: 9px 200px;
    background: white;
    border-bottom: 1px solid #DFDFDF;

`

const headerInner = css`
    display: flex;
    justify-content: space-between;
    margin: 0 auto ;
    align-items: center;
    width: 100%;
`

const LoginProfileStyle = css`
    width: 40px;
    height: 40px;
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