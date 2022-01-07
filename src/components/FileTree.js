import React, { Fragment, useContext } from 'react';
import FileTreeStateContext from '../file-tree-state';
import './FileTree.css';

const FileTree = (props) => {
  const level = props.level || 0;
  const fileTreeCtx = useContext(FileTreeStateContext);

  const clickHandler = (level, i) => {
    fileTreeCtx.toggleHiddenItems(level, i);
  };

  return (
    <ul level={level} className={props.className}>
      {props.files.map((file, i) => {
        return (
          <Fragment key={`level-${level}-${i}`}>
            <li onClick={() => clickHandler(level, i)}>{file.name}</li>
            {file.children &&
              !fileTreeCtx.hiddenItems.includes(`level-${level}-${i}`) && (
                <FileTree files={file.children} level={level + 1}></FileTree>
              )}
          </Fragment>
        );
      })}
    </ul>
  );
};

export default FileTree;
