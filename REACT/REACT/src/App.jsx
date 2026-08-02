import React from 'react'
import Book from './component/Book'
import Book1 from './component/Book1'
import Book2 from './component/Book2'
const App = () => {
  return (
    <div style={{display:'flex'}}>
      <Book/>
       <Book1/>
        <Book2/>
    </div>
  )
}

export default App
