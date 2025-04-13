
import { 
    headerStyle,
    headerInner,
    headerLeft,
    NavlinkStyle,
    aTag,
    LoginProfileStyle,

 } from './HeaderStyle';

import LoginProfile from '../assets/LoginProfile.png';
import logo1x from '../assets/logo1x.png';

/** @jsxImportSource @emotion/react */

const Header = () => {
    return(
        <div css={headerStyle}>
            <div css={headerInner}>
                <div css={headerLeft}>    
                    <img src={logo1x} alt='로고'></img>           
                    <div css={NavlinkStyle}>
                        <a href="" css={aTag}>자유게시판</a>
                        <a href="" css={aTag}>중고마켓</a>
                    </div>
                </div>    
                <img src={LoginProfile} alt='로그인프로필' css={LoginProfileStyle}></img>
            </div>
        </div>
    )
}

export default Header;