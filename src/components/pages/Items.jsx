import BestItem from "../BestItem"
import AllItems from "../AllItems"
import { itemsStyle } from "./ItemsStyle"
import { useState, useEffect } from "react"
import { getItems } from "../../api/Api"

/** @jsxImportSource @emotion/react */

const Items = () => {
    const [allItems, setAllItems] = useState([])
    const [bestItems, setBestItems] = useState([])
    const [orderBy, setOrderBy] = useState("recent")

    const handleLoad = async (order = orderBy) => {
        const [best, all]= await Promise.all([
            getItems({page:1, pageSize:4, orderBy: "favorite"}),
            getItems({page:1, pageSize:10, orderBy: order}),
        ]);
        setBestItems(best.list);
        setAllItems(all.list);
    }

    useEffect(() => {
        handleLoad(orderBy)
    }, [orderBy])

    return(
        <div css={itemsStyle}>
            <BestItem items={bestItems} handleLoad={handleLoad}/>
            <AllItems items={allItems} onChangeOrder={(order)=> setOrderBy(order)}/>
        </div>
    )
}

export default Items;