import React, { useEffect, useState } from 'react'
import axiso from 'axios'
import Products from './Products'
import Options from './Options'

/**
 * 주문 종류
 * @param {*} param0 
 * @returns 
 */
const Type = ({orderType}) => {
    const [Items, setItems] = useState([]);

    useEffect(() => {
        loadItems(orderType);
    }, [orderType])

    const loadItems = async(orderType) =>{
        try {
            const repsone = await axiso.get(`http://localhost:4000/${orderType}`);
            setItems(repsone.data);
        } catch (error) {
           console.error(error);
        }
    }

    const ItemComponent = orderType === "products" ? Products : Options; 
    const optionsItems = Items.map(item => (
        <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
        />
    ))


    return (
        <div>
            <h2>주문 종류</h2>
            <p>하나의 가격</p>
            <p>총 가격:</p>
            <div
                style={{display:'flex',
                    flexDirection : orderType === "options" ? "column" : "row"
                }}
            >
                {optionsItems}
            </div>
        </div>
    )
}

export default Type