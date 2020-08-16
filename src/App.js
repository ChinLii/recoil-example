import React from 'react'
import { useRecoilValue } from 'recoil';
import './App.css';
import TodoItemCreator from './components/TodoItemCreator'
import TodoItem from './components/TodoItem'
import TodoListFilters from './components/TodoListFilter'
import TodoListStats from './components/TodoListStats'
import { filteredTodoListState } from './store'

function App() {
  const todoList = useRecoilValue(filteredTodoListState)
  return (
    <div className="App">
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      <div>
        {
          todoList.map((item) => 
            <TodoItem key={item.key} item={item} />
          )
        }
      </div>
    </div>
  );
}

export default App;
