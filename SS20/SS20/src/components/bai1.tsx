import React, { useState } from 'react'

export default function Ex1() {
    const [inputValue,setInputValue] = useState('');
    
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setInputValue(e.target.value);
    }
    const isLengthValid = inputValue.length <= 5;
  return (
    <div>
        <h2>Kiểm tra độ dài chuỗi nhập vào</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Nhập vào đây"
      />
      {inputValue && (
        <p style={{ color: isLengthValid ? 'black' : 'red' }}>
          {isLengthValid ? '' : 'Chuỗi nhập vào dài hơn 5 ký tự!'}
        </p>
      )}
    </div>
  )
}