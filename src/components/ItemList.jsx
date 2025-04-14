import { 
    itemListStyle,
    itemImage, 
} from "./ItemListStyle";

/** @jsxImportSource @emotion/react */

const ItemList = () => {

    return(
        <>
            <div css={itemListStyle}>
                <div css={itemImage}></div>
                <p>타이틀</p>
                <p>가격</p>
                <div>💛</div>
            </div>
        </>
    )
}

export default ItemList;