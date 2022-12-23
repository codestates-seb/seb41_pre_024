import { useState } from 'react';

const useInput = () => {
  const [inputValue, setInputValue] = useState('');

  const bind = {
    value: inputValue,
    onChange: (e) => setInputValue(e.target.value),
  };

  return [inputValue, bind];
};

export default useInput;
