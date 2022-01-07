import React, { useState } from 'react';

const FileTreeStateContext = React.createContext({
  hiddenItems: [],
  toggleHiddenItems: () => {}
});

export const FileTreeStateContextProvider = (props) => {
  const [hiddenItems, setHiddenItems] = useState([]);

  const toggleHiddenItems = (level, i) => {
    const elem = `level-${level}-${i}`;
    if (hiddenItems.includes(elem)) {
      const index = hiddenItems.indexOf(elem);
      setHiddenItems(() => hiddenItems.splice(index, 1));
    } else {
      setHiddenItems((prev) => [...prev, elem]);
    }
  };

  return (
    <FileTreeStateContext.Provider
      value={{
        hiddenItems: hiddenItems,
        toggleHiddenItems: toggleHiddenItems
      }}
    >
      {props.children}
    </FileTreeStateContext.Provider>
  );
};

export default FileTreeStateContext;
