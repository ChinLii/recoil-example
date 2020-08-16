import React, { useState } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { v4 as uuid4 } from 'uuid';
import { todoListState } from '../store'

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState)
  const list = useRecoilValue(todoListState)

  const addItem = () => {
    console.log(list)
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: uuid4(),
        text: inputValue,
        isComplete: false,
      },
    ])
    console.log('after add', list)
    setInputValue('');
  }
  const onChange = ({target: {value}}) => {
    setInputValue(value)
  }

  return (
    <div>
      <input type='text' value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  )
}

export default TodoItemCreator