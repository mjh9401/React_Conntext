import React from 'react'

/**
 * 제품목록
 * @param {*} param0 
 * @returns 
 */
const Products = ({name,imagePath}) => {
  
  return (
    <div style={{textAlign:'center'}}>
      <img
        style={{width:'75%'}}
        src={`http://localhost:4000/${imagePath}`}
        alt={`${name} product`}
      />
      <form style={{margin:'10px'}}>
        <label style={{textAlign:'right'}}>{name}</label>
        <input
          style={{marginLeft:'7px'}}
          type='number'
          name='quantity'
          min="0"
          defaultValue={0}
        />
      </form>
    </div>
  )
}

export default Products