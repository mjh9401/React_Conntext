import React from 'react'

/**
 * 제품목록 컴포넌트
 * @param name : 이미지 이름
 * @param imagePath : 이미지 경로
 * @returns 
 */
const Products = ({name,imagePath,updateItemCount}) => {
  const handleChange = (event) =>{
    const currentValue = event.target.value;
    updateItemCount(name,currentValue);
  }

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
          onChange={handleChange}
        />
      </form>
    </div>
  )
}

export default Products