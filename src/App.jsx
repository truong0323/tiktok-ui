import { useState } from 'react'

import './App.css'
import Content from './Content'

function App() {
  const [isOpenContent, SetOpenContent] = useState(false)
  return (
    <>
      <button onClick={() => SetOpenContent(!isOpenContent)}>
        Click vào đây
      </button>
        {isOpenContent && <Content /> }

    </>
  )
}

export default App
