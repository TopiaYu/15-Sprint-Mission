
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
import { Link, useLocation } from 'react-router-dom';
import { css } from '@emotion/react';

/** @jsxImportSource @emotion/react */

const Header = () => {
    const location = useLocation();

    return(
        <>
            <div css={headerStyle}>
                <div css={headerInner}>
                    <div css={headerLeft}>  
                        <Link to={"/"}>
                            <img src={logo1x} alt='로고'></img>  
                        </Link>         
                        <div css={NavlinkStyle}>
                            <Link to={"/FreeBoard"} css={aTag}>자유게시판</Link>
                            <Link to={"/Items"} 
                                css={[aTag, 
                                location.pathname ==='/Items'&& css`
                                color: var(--blue)`]}
                                >
                                중고마켓
                            </Link>
                        </div>
                    </div>    
                    <img src={LoginProfile} alt='로그인프로필' css={LoginProfileStyle}></img>
                </div>
            </div>
        </>
    )
}

export default Header;