import React, { useState } from 'react'

export default function Ex2() {
    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [displayInfo,setDisplayInfo]= useState(false);

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDisplayInfo(true);
  };
  return (
    <div>
      <h2>thông tin người dùng</h2>
      <form onSubmit={handleSubmit}>
        <input
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='nhập tên'
        />
        <br />
        <input
            type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='nhập email'
        />
        <br />
        <button type="submit">gửi</button>
      </form>
      {displayInfo && (
        <div >
          <p>Tên: {name}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  )
}