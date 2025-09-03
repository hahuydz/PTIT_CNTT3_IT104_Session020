import React, { useState, useEffect, useRef } from 'react';


export default function Ex6() {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div>
      <h2>ứng dụng React với Modal và Focus Input</h2>
      <button onClick={openModal}>mở Modal</button>

      {isOpen && (
        <div style={{background: 'white', padding: '20px', border: '2px solid #000' }}>
          <h3>đăng nhập</h3>
          <input
            ref={inputRef}
            type="text"
            placeholder="nhập thông tin đăng nhập"
          />
          <button onClick={closeModal} style={{ backgroundColor: 'red', color: 'white', }}>đóng</button>
        </div>
      )}
    </div>
  );
}