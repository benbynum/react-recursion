import { useState } from 'react';

import './App.css';
import files from './docs';
import FileTree from './components/FileTree';
import { FileTreeStateContextProvider } from './file-tree-state';

function App() {
  return (
    <FileTreeStateContextProvider>
      <FileTree files={files}></FileTree>
    </FileTreeStateContextProvider>
  );
}

export default App;
