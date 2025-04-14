import Header from "../Header"
import BestItem from "../BestItem"
import AllItems from "../AllItems"
import { itemsStyle } from "../ItemsStyle"
import { useState, useEffect } from "react"
import { getItems } from "../../api/Api"

/** @jsxImportSource @emotion/react */

const Items = () => {
    const [items, setItems] = useState([])

    const handleLoad = async () => {
        const { list } = await getItems();
        setItems(list);
        console.log(list)
    }

    useEffect(() => {
        handleLoad()
    }, [])

    return(
        <div css={itemsStyle}>
            <BestItem items={items} handleLoad={handleLoad}/>
            {/* <AllItems /> */}
        </div>
    )
}

export default Items;