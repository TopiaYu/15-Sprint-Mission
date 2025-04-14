import { 
    constainer,
    header,
    title,
    itemGrid,
} from "./AllitemsStyle";
import ItemList from "./ItemList";

/** @jsxImportSource @emotion/react */

const AllItems = ({ items }) => {
    return(
        <div>
            <div css={constainer}>
                <div css={header}>
                    <h2 css={title}>전체 상품</h2>
                    <input placeholder="🔎 검색할 상품을 입력해주세요"></input>
                    <button>상품 추가하기</button>
                    <button>정렬하기</button>
                </div>
            
                <div css={itemGrid} >
                    {items.map((item) => {
                        return(
                            <ItemList key={item.id} item={item} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default AllItems;