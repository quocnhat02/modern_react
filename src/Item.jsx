import React, { useEffect, useRef, useState } from 'react';

const Item = ({ name, index, setItems }) => {
  const [modifyOn, setModifyOn] = useState(false);
  const [text, setText] = useState(name);
  const refInput = useRef();

  useEffect(() => {
    if (refInput.current) {
      refInput.current.focus();
    }
  }, []);

  function remove() {
    setItems((items) => {
      items = items.filter((item, i) => index !== item.key);

      return [...items];
    });
  }

  function modify() {
    setModifyOn(!modifyOn);
  }

  function change(e) {
    setText(e.target.value);
  }

  function blur(e) {
    setModifyOn(false);
    setItems((items) => {
      items = items.map((item) => {
        if (index === item.key) {
          item.name = e.target.value;
        }
        return item;
      });
      return [...items];
    });
  }

  return (
    <li style={{ marginTop: '5px' }}>
      {modifyOn ? (
        <input
          type='text'
          value={text}
          onChange={change}
          onBlur={blur}
          ref={refInput}
        />
      ) : (
        <span>{name}</span>
      )}{' '}
      <button onClick={modify}>Modify</button>{' '}
      <button onClick={remove}>Remove</button>
    </li>
  );
};

export default Item;
