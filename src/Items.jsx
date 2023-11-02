import React from 'react';
import Item from './Item';

const Items = ({ items, setItems }) => {
  return (
    <ul style={{ listStyleType: 'none' }}>
      {items.map((item, index) => {
        const { name, key } = item;
        return <Item key={key} name={name} index={key} setItems={setItems} />;
      })}
    </ul>
  );
};

export default Items;
