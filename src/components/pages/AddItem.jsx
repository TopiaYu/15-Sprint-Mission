import { css } from '@emotion/react';
import plusIcon from '../../assets/plusIcon.png'
import deleteIcon from '../../assets/deleteIcon.png'
import { useRef, useState } from 'react';

/** @jsxImportSource @emotion/react */

const itemWrapper = css`
    
    color: var(--gray-800);
    font-weight: 700;

    > div {
        margin-top: 32px;
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
        background: var(--gray-400);
        color: white;
    }
`

const headerButton = css`
    cursor: pointer;

    &:not(:disabled) {
        background: var(--blue);
    }
    
    &:disabled {
    cursor: not-allowed;
    }
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
    position: relative;
    margin-top: 16px;    
    display: flex;
    width: 282px;
    aspect-ratio: 1/1;

    > button {
        position: absolute;
        background: transparent;
        border: none;
        cursor: pointer;
        top: 8px;
        right: 8px;
        transition: all 0.2s ease;

        &:hover {
            transform: scale(1.1);
        }
    }
`

const previewImg = css`
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 12px;
`

const deleteImage = css`
    width: 22px;
    height: 24px;
`

const alertMessage = css`
    color: rgba(247, 71, 71, 1);
    font-weight: 400;
    font-size: 16px;
`

const itemHashTagWrapper = css`
    background: var(--gray-100);
    border-radius: 26px;
    display: inline-flex;
    padding: 5px 12px 5px 16px;; 

    > span {
        color: var(--gray-800);
        display: flex;
        align-items: center;
    }

    > button {
        background: transparent;
        border: none;
        cursor: pointer;
        padding-top: 2px;
    }
`

const ItemTag = css`
    color: var(--gray-800);
`

const hashTagContainer = css`
  margin-top: 14px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`


const AddItem = () => {

    const [imgPreviewUrl, setImgPreviewUrl] = useState(null); // 추가했을때 이미지프리뷰
    const [showWarning, setShowWarning] = useState(false);
    const [itemName, setItemName] = useState("");
    const [itemDescription, setItemDiscription] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [itemTag, setItemTag] = useState("");
    const [itemHashTag, setItemHashTag] = useState([]);

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];

        if (imgPreviewUrl !== null) {
            setShowWarning(true)
            return
        }
        
        if (file) {
            const preview = URL.createObjectURL(file);
            setImgPreviewUrl(preview) 
        }
    }

    const handleFileDelete = () => {
        setImgPreviewUrl(null);
        setShowWarning(false);
    }

    const handleSubmitButton = () => {

    }

    const handleDeleteTag = (tagToDelete) => {
        setItemHashTag(itemHashTag.filter(tag => tag !==tagToDelete));
    }

    const tagEndRef = useRef(null); // 태그 생성시 스크롤 이동을 위함

    return (
        <>
            <form css={addItem}>
                <div css={contentHeader}>
                    <h3>상품 등록하기</h3>
                    <button 
                        type="submit" 
                        css={headerButton} 
                        onClick={handleSubmitButton}
                        disabled={
                                itemName.trim() === "" || 
                                itemDescription.trim() === "" ||
                                itemPrice.trim() === "" ||
                                itemHashTag.length === 0  ||
                                !imgPreviewUrl
                        }
                    >
                            등록
                        </button>
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
                                <button onClick={handleFileDelete}>
                                    <img src={deleteIcon} alt='삭제버튼' css={deleteImage} />
                                </button>
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

                    {showWarning && (
                        <p css={alertMessage}>이미지는 한 장만 선택할 수 있습니다.</p>
                    )}

                    <div>
                        <label htmlFor='name'>상품명</label>
                        <input id="name" placeholder="상품명을 입력해주세요" value={itemName} onChange={(e)=> setItemName(e.target.value)}></input>
                    </div>
                    
                    <div>
                        <label>상품 소개</label>
                        <textarea id="description" placeholder="상품 소개를 입력해주세요" value={itemDescription} onChange={(e) => setItemDiscription(e.target.value)}></textarea>
                    </div>

                    <div>
                        <label>판매가격</label>
                        <input id="price" placeholder="판매가격을 입력해주세요" type='number' value={itemPrice} onChange={(e) => setItemPrice(e.target.value)}></input>
                    </div>

                    <div>
                        <label>태그</label>
                        <input 
                            id="tag" 
                            placeholder="태그를 입력해주세요" 
                            value={itemTag} onChange={(e) => setItemTag(e.target.value)}
                            onKeyDown={(e) =>  {
                                if (e.key === "Enter"&& itemTag.trim() !== "") {
                                    e.preventDefault();

                                    const newTag = itemTag.trim();
                                    if (!itemHashTag.includes(newTag)) {
                                        setItemHashTag((prev) => [...prev, newTag])
                                    }
                                    setItemTag("")
                                    //태그 생성시 스크롤 이동
                                    setTimeout(() => {
                                        tagEndRef.current?.scrollIntoView({behavior: "smooth"})
                                    },0)
                                }
                            }}
                        ></input>
                    </div>

                    {itemHashTag.length > 0 && (
                        <div css={hashTagContainer}>
                            {itemHashTag.map((tag) => (
                                <div key={tag} css={itemHashTagWrapper}>
                                    <span css={ItemTag}>
                                        #{tag}
                                    </span>
                                    <button type='button' onClick={() => handleDeleteTag(tag)}>
                                        <img src={deleteIcon} alt='삭제버튼' css={deleteImage} />
                                    </button>
                                </div>
                            ))}
                            <div ref={tagEndRef} />
                        </div>
                    )}
                </div>
            </form>
        </>
    );
};

export default AddItem;