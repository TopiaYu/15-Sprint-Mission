
import { css } from '@emotion/react';
import kebabIcon from '../../../assets/kebabIcon.png'
import userImage from '../../../assets/LoginProfile.png'

/** @jsxImportSource @emotion/react */

const pageWrapper = css`
    max-width: 1200px;
    margin: 0 auto;
`

const itemDetailWrapper = css`
    margin: 16px;
    gap: 24px;
    display: flex;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--gray-200);
`
const imgSection = css`
    // width: 100%;
    
    > img {
    width: 486px;
    aspect-ratio: 1/1;
    background: pink;
    border-radius: 16px;
    }
`

const itemDetail = css`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 24px;  
    // border-bottom: 1px solid var(--gray-200);
`

const itemHeader = css`
    border-bottom: 1px solid var(--gray-200);
    padding-bottom: 16px;
`

const titleHeader = css`
    color: var(--grey-800);
    font-size: 24px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
`

const editIconStyle = css`
    width: 24px;
    height: 24px;
`

const itemDescription = css`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const itemTag = css`
    margin-bottom: 62px;

    > div {
        display: inline-flex;
        background: yellow;
        padding: 6px;
    }

    > span {
        background: pink;
        padding: 6px;
    }
`

const itemUserInfo= css`
    display: flex;
    align-items: center;
    margin-top: 24px;
`

const userImg = css`
    width: 40px;
    height: 40px;
    margin-right: 16px;

    > img {
        width: 40px;
        height: 40px;
    }
`

const userText = css`
    flex: 1;
`

const likeSection = css `
    width: 
    

    > button {

    }
`

const commentSection = css  `
    margin: 16px;

`

const makeComment = css`
    display: flex;
    flex-direction: column;

    > textarea {
    height: 104px;
    }

    > button {
        width: 74px;
        height: 42px;
        border-radius: 8px;
        border: none;
    }
`

const commentList = css`
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 24px;
`

const comment =css`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--gray-200);
`

const commentHeader = css`
    display: flex;
    justify-content: space-between;
`

const ItemDetail = () => {
    return(
        <div css={pageWrapper}>
            <div css={itemDetailWrapper}>
                <div css={imgSection}>
                    <img />
                </div>
                <div css={itemDetail}>
                    <div css={itemHeader}>
                        <div css={titleHeader}>
                            <h3>타이틀</h3>
                            <img src={kebabIcon} css={editIconStyle} />
                        </div>
                        <h2>price</h2>
                    </div>
                    <div css={itemDescription}>
                        <h3>상품 소개</h3>
                        <h4>상품 소개상품 소개상품 소개상품 소개상품 소개상품 소개</h4>
                    </div>
                    <div css={itemTag}>
                        <h3>상품 태그</h3>  
                        <div>
                            <span>#태그</span>
                        </div>
                    </div>
                    <div css={itemUserInfo}>
                        <div css={userImg}>
                            <img src={userImage} />
                        </div>
                        <div css={userText}>
                            <h4>이름</h4>
                            <p>날짜</p>
                        </div>
                        <div css={likeSection}>
                            <button></button>
                            숫자
                        </div>
                    </div>
                </div>
            
            </div>

            <div css={commentSection}>
                <div css={makeComment}>
                    <label htmlFor="makecomment">문의하기</label>
                    <textarea id="makecomment" placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다." />
                    <button type="button">등록</button>
                </div>
                <ul css={commentList}>
                    <li css={comment}>
                        <div css={commentHeader}>
                            <p>내용</p>
                            <img src={kebabIcon} css={editIconStyle} />
                        </div>
                        
                        <div css={itemUserInfo}>
                            <div css={userImg}>
                                <img src={userImage} />
                            </div>
                            <div css={userText}>
                                <h4>이름</h4>
                                <p>날짜</p>
                            </div>
                            <hr />
                        </div>
                    </li>

                    <li css={comment}>
                        <div css={commentHeader}>
                            <p>내용</p>
                            <img src={kebabIcon} css={editIconStyle} />
                        </div>
                        
                        <div css={itemUserInfo}>
                            <div css={userImg}>
                                <img src={userImage} />
                            </div>
                            <div css={userText}>
                                <h4>이름</h4>
                                <p>날짜</p>
                            </div>
                            <hr />
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default ItemDetail;