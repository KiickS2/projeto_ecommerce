import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Catalogo from './components/Catalogo'
import Cart from './components/Cart'
import ThankYouPage from './components/ThankYouPage'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const handleAddCart = (product, quantity) => {
    setCartItems((prevItems) => {

      const itemExists = prevItems.find((item) => item.id === product.id);

      if (itemExists) {
        toast.info(`Quantidade do item ${product.name} atualizada.`)
        return prevItems.map((item) => item.id === product.id ?
          { ...item, quantity: item.quantity + quantity } : item)
      } else {
        toast.success(`${product.name} Adicionado com sucesso!`)
        return [...prevItems, { ...product, quantity }];
      }
    })
  }

  const handleUpdateCart = (product, quantity) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => item.id === product.id ? { ...item, quantity: +quantity } : item)
    })
  }

  const handleRemoveFromCart = (product) => {
    toast.error(`${product.name} foi removido com sucesso!`)
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== product.id))
  }

  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Catálogo</Link>
        <Link to='/cart'>Carrinho</Link>
      </nav>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Catalogo onAddToCart={handleAddCart} />} />
          <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems} onUpdateCart={handleUpdateCart} onRemoveFromCart={handleRemoveFromCart} />} />
          <Route path='/thank-you' element={<ThankYouPage />} />
        </Routes>
      </div>
      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />

    </BrowserRouter>
  )
}

export default App;