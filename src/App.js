import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';

class App extends Component {
  render() {
    return (
      <div>
        <TodoListTemplate form={<div>이 안에 폼 타입이 들어올 예정.</div>}>
          <div>템플릿 완성</div>
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;
