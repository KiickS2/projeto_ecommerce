import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ThankYouPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const items = location.state.cartItems;
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0)

  const handleBack = () => {
    navigate('/')
  }

  return (
    <div className='thank-you-page'>
      <h3>Obrigado por comprar conosco!</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name} x{item.quantity} - {item.price.toFixed(2)}</li>
        ))}
      </ul>
      <p>Total: ${totalPrice.toFixed(2)}</p>
      <button onClick={handleBack}>Voltar ao Catálogo</button>
    </div>
  )
}

export default ThankYouPage;