import { 
    constainer,
    header,
    title,
    itemGrid,
    pagenation
} from "./AllitemsStyle";
import ItemList from "./ItemList";

/** @jsxImportSource @emotion/react */

const AllItems = ({ items, onChangeOrder }) => {
    return(
        <div>
            <div css={constainer}>
                <div css={header}>
                    <h2 css={title}>전체 상품</h2>
                    <input placeholder="🔎 검색할 상품을 입력해주세요"></input>
                    <button>상품 등록하기</button>
                    <select onChange={(e)=> onChangeOrder(e.target.value)}>
                        <option value={"recent"}>최신순</option>
                        <option value={"favorite"}>좋아요순</option>
                    </select>
                </div>
            
                <div css={itemGrid} >
                    {items.map((item) => {
                        return(
                            <ItemList key={item.id} item={item} />
                        )
                    })}
                </div>
                <div css={pagenation} >
                    페이지네이션 버튼
                </div>
            </div>
        </div>
    )
}

export default AllItems;