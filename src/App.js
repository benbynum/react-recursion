import { useState } from 'react';

import files from './data/docs';
import FileTree from './components/FileTree';
import { FileTreeStateContextProvider } from './store/file-tree-state';

function App() {
  return (
    <FileTreeStateContextProvider>
      <FileTree files={files}></FileTree>
    </FileTreeStateContextProvider>
  );
}

export default App;
