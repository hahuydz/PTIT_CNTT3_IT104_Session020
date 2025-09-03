import React, { useState,useEffect } from 'react'

export default function Ex5() {
    const [count,setCount] = useState(0);

    useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <h2>bộ đếm {count}</h2>
    </div>
  )
}