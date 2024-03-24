import productsData from '../data/products_mock.json';
import Product from './Product';

const Catalogo = ({onAddToCart}) => {

  return (
    <div>
        <h1>Catálogo de Produtos</h1>
        <div className='catalogo-line'></div>
        <div className='product-container'>
            {productsData.map((product) => (
                <Product key={product.id} product={product} onAddToCart={onAddToCart}/>
            ))}

        </div>
    </div>
  )
}

export default Catalogo