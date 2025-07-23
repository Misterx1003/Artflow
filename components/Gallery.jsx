import React from 'react';

const Gallery = ({ items }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, padding: 20 }}>
      {items.map((item, index) => (
        <div key={index}>
          <img src={item.path} alt="art" style={{ width: '100%' }} />
          <div>{item.tags.join(', ')}</div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
