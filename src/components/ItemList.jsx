import { 
    itemListStyle,
    itemImage, 
    itemTitle,
    itemPrice,
    itemLikes,
} from "./ItemListStyle";

/** @jsxImportSource @emotion/react */

const ItemList = ({ item }) => {

    return(
        <>
            <div css={itemListStyle}>
                <img css={itemImage} src={item.images} ></img>
                <p css={itemTitle}>{item.name}</p>
                <p css={itemPrice}>{`${item.price}원`}</p>
                <p css={itemLikes}>🤍 {item.favoriteCount}</p>
            </div>
        </>
    )
}

export default ItemList;