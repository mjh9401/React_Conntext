import React from 'react'

/**
 * 옵션 종류 컴포넌트
 * @param {name} param0 
 * @returns 
 */
const Options = ({name,updateItemCount}) => {
  
  return (
    <form>
      <input 
        type='checkbox' 
        id={`${name} option`}
        onChange={(e)=>updateItemCount(name, e.target.checked ? 1: 0)}
      />{" "}
      <label htmlFor={`${name} option`}>{name}</label>
    </form>
  )
}

export default Options