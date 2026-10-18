import { useState } from 'react'
import ProductList from './component/ProductList'

function App() {
  const [showProducts, setShowProducts] = useState(true)
  const [name, setName] = useState('')

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleToggle = () => {
    setShowProducts(!showProducts)
  }
  return (
    <>
      <h1>React Product Dashboard</h1>

      <button onClick={handleToggle}>
        {showProducts ? 'Hide Products' : 'Show Products'}
      </button>

      <br />
      <br />

      <label htmlFor="name">Your name: </label>

      <input
        id="name"
        type="text"
        value={name}
        onChange={handleChange}
      />

      <p>Hello, {name}</p>

      {showProducts && <ProductList />}
    </>
  )
} 

export default App