import { css } from '@emotion/react';
import plusIcon from '../../assets/plusIcon.png'
import { useState } from 'react';

/** @jsxImportSource @emotion/react */

const itemWrapper = css`
    
    color: var(--gray-800);
    font-weight: 700;

    > div {
        margin: 32px 0;
    }

    > div > input, textarea {
        border-radius: 12px;
        width: 100%;
        height: 56px;
        background: var(--gray-100);
        margin-top: 16px;
        padding-left: 20px;
        border: none;
        cursor: pointer;

        > span {
        color: var(--gray-400);
        font-weight: 400;  
        }
    }

    > div > textarea {
        height: 282px;
        padding-top: 15px;
    }
    
    // wrapper에 div 안 input, textarea, span 에 적용
    > div > input::placeholder, textarea::placeholder, span {
        color: var(--gray-400);
        font-weight: 400;  
    }
`

const addItem = css`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
`
const contentHeader = css`
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
    > button {
        border-radius: 8px;
        border: none;
        width: 74px;
        height: 42px;
    }
`

const headerButton = css`
    cursor: pointer;
`

const addItemImageWrapper = css`

`

const addItemBox = css`
    margin-top: 16px;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 282px;
    aspect-ratio: 1/1;
    background: var(--gray-100);
    border-radius: 12px;
    cursor: pointer;
`

const plusIconStyle = css`
    width: 48px;
    aspect-ratio: 1/1;
`

const imgRowWrapper = css`
    display: flex;
    gap: 24px;
`

const previewBox = css`
    margin-top: 16px;    
    display: flex;
    width: 282px;
    aspect-ratio: 1/1;
    cursor: pointer;
`

const previewImg = css`
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 12px;
`

const AddItem = () => {

    const [imgPreviewUrl, setImgPreviewUrl] = useState(null)

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const preview = URL.createObjectURL(file);
            setImgPreviewUrl(preview) 
        }
    }

    return (
        <>
            <form css={addItem}>
                <div css={contentHeader}>
                    <h3>상품 등록하기</h3>
                    <button type="submit" css={headerButton}>등록</button>
                </div>
                <div css={itemWrapper}>
                    <div >
                        <p>상품 이미지</p>
                        <div css={imgRowWrapper}>
                        <label htmlFor='fileUpload' css={addItemImageWrapper}>
                            <div css={addItemBox}>
                                <img src={plusIcon} alt='추가' css={plusIconStyle} />
                                <span>이미지 등록</span>
                            </div>
                        </label>
                        {imgPreviewUrl && (
                            <div css={previewBox}>
                                <img src={imgPreviewUrl} alt='선택한 사진' css={previewImg} />
                            </div>
                        )}
                        </div>
                        <input  
                            id='fileUpload'
                            type='file'
                            accept='image/*'
                            style={{display: 'none'}}
                            onChange={handleFileChange}
                        />    
                    </div>

                    <div>
                        <label htmlFor='name'>상품명</label>
                        <input id="name" placeholder="상품명을 입력해주세요"></input>
                    </div>
                    
                    <div>
                        <label>상품 소개</label>
                        <textarea id="description" placeholder="상품 소개를 입력해주세요"></textarea>
                    </div>

                    <div>
                        <label>판매가격</label>
                        <input id="price" placeholder="판매가격을 입력해주세요"></input>
                    </div>

                    <div>
                        <label>태그</label>
                        <input id="tag" placeholder="태그를 입력해주세요"></input>
                    </div>
                </div>
            </form>
        </>
    );
};

export default AddItem;