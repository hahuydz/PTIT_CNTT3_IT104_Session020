import React, { useState } from "react";

type Todo = {
  id: number;
  name: string;
  assign: string;
  status: boolean;
  created_at: string;
};

// Hàm format thời gian
const formatDate = (date: Date): string => {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0"); // tháng bắt đầu từ 0
  const yyyy = date.getFullYear();

  const hh = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const ss = String(date.getSeconds()).padStart(2, "0");

  return `${dd}/${mm}/${yyyy} ${hh}:${min}:${ss}`;
};

function Todolist() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      name: "Học React",
      assign: "Huy",
      status: false,
      created_at: formatDate(new Date())
    },
    {
      id: 2,
      name: "Tập Gym",
      assign: "Huy",
      status: true,
      created_at: formatDate(new Date())
    }
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách công việc</h2>
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên  việc</th>
            <th>Ng được giao</th>
            <th>Trạng thái</th>
            <th>Ngày tạo</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.name}</td>
              <td>{todo.assign}</td>
              <td>
                {todo.status ? "✅ Đã hoàn thành" : "⏳ Chưa hoàn thành"}
              </td>
              <td>{todo.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Todolist;
