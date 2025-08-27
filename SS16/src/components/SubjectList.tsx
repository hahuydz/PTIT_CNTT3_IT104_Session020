import React, { Component } from 'react';

interface SubjectListState {
  subjects: string[];
}

class SubjectList extends Component<{}, SubjectListState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      subjects: ['Toán', 'Văn', 'Anh', 'Hóa', 'Sinh'],
    };
  }

  render() {
    return (
      <div>
        <h2>Danh sách môn học</h2>
        {this.state.subjects.map((subject, index) => (
          <button key={index}>{subject}</button>
        ))}
      </div>
    );
  }
}

export default SubjectList;