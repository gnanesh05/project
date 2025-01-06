import React from 'react'
import explorer from '../../constants/folderExplorer'
import Tree from './Tree'

const Folder = () => {
  return (
    <div>
        <Tree explorer={explorer}/>
    </div>
  )
}

export default Folder