// Código em inglês
import { useState } from "react"

interface Product {
  title: string;
  price: string;
}

const productList = [
  {
    title: 'Macarrão',
    price: 'R$ 25,00'
  },
  {
    title: 'Hamburger',
    price: 'R$ 30,00'
  }
]

export function ListProduct() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  function searchProduct(search: string) {
    const filteredProductByTitle = productList.filter(product => product.title.includes(search))

    setFilteredProducts(filteredProductByTitle)
  }

  return (
    <div>
      <input type="text" onChange={(e) => searchProduct(e.target.value)} />

      {filteredProducts.map(produto => (
        <div>
          <p>{produto.title}</p>
          <p>{produto.price}</p>
        </div>
      ))}
    </div>
  )
}


