import { 
    constainer,
    title,
    itemGrid,
} from "./BestItemStyle";
import ItemList from "./ItemList";

/** @jsxImportSource @emotion/react */

const BestItem = () => {
    return(
        <div css={constainer}>
            <h2 css={title}>
                베스트 상품
            </h2>
            <div css={itemGrid}>
                <ItemList />
                <ItemList />
                <ItemList />
                <ItemList />
            </div>
        </div>
    )
}

export default BestItem;