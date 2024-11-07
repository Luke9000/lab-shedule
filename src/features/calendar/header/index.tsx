import React from 'react';

const Header: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });

  return (
    <div>
      <h2>{currentDate}</h2>
    </div>
  );
};

export default Header;
