import React, { useEffect, useState } from 'react'

export default function Ex4() {
     const [title, setTitle] = useState('');

     useEffect(() => {
     document.title = `${title}`;
  }, [title]);
  
  return (
    <div>
      <h2>chào mừng bạn đến với trang của chúng tôi</h2>
      <input 
        type="text" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='nhập tiêu đề trang'
      />
    </div>
  )
}