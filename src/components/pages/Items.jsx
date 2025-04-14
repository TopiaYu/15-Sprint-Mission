import Header from "../Header"
import BestItem from "../BestItem"
import AllItems from "../AllItems"
import { itemsStyle } from "../ItemsStyle"

/** @jsxImportSource @emotion/react */

const Items = () => {
    return(
        <div css={itemsStyle}>
            <BestItem />
            <AllItems />
        </div>
    )
}

export default Items;