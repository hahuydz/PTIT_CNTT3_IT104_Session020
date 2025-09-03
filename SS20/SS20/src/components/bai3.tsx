import { useEffect } from 'react'

export default function Ex3() {
    useEffect(() => {
    console.log('Component đã được render lần đầu');
  });
  return (
    <div>
      <h2>chào mừng bạn đến với ứng dụng của chúng tôi</h2>
    </div>
  )
}