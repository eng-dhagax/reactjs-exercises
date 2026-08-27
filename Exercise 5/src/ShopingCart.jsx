import { useState } from "react";
const ShopingCart = () => {

    // Products
    const [products, setProducts] = useState([])

    // Product Name
    const [productName, setProductName] = useState("")
    // Product Price
    const [productPrice, setProductPrice] = useState("")

    const handleAddProduct = () => {
        if (productName.trim() !== "" && productPrice.trim() !== "") {
            const newProduct = {
                id: Date.now(),
                name: productName,
                price: parseFloat (productPrice),
                quantity: 1
            }
            setProducts([...products, newProduct])
            setProductName("")
            setProductPrice("")
        }
    }

    const removeProduct = (id) => {
        console.log(products)
        console.log("Id", id)
        const updateProduct = products.filter(product => product.id !== id)
        setProducts(updateProduct)
    }

    const increaseQuantity = (id) => {
        const updatedProducts = products.map(product => (
            product.id === id ? {...product, quantity : product.quantity + 1} : product
        ))

        setProducts(updatedProducts)
    }

    const decreaseQuantity = (id) => {
        const updatedProducts = products.map(product => (
            product.id === id && product.quantity > 1 ? {...product, quantity: product.quantity -1} : product
        ))

        setProducts(updatedProducts)
    }

    const totalPrice = products.reduce((total, product) => total + product.price * product.quantity,0)
    return (
        <div>
            <h2>Simple Shoping Cart</h2>
            <div>
                <h3>Add a product</h3>
                <input 
                       type="text" 
                       placeholder="Product Name"
                       onChange={(e) => setProductName(e.target.value)}
                       value={productName}
                       />

                <input  
                       type="number" 
                       min={0}
                    //    max={5}
                       step={2}
                       placeholder="Price"
                       onChange={(e) => setProductPrice(e.target.value)}
                       value={productPrice}
                       />
                <button onClick={handleAddProduct}>Add To Cart</button>
            </div>

            {
                products.length > 0 ? (
                    <div>
                    <h3>Products In Cart</h3>
                    <ul>
                        {
                            products.map(product => (
                                <li key={product.id}>
                                <strong>{product.name}</strong> <strong>- ${product.price.toFixed(2)}</strong>
                                <div>
                                    Quantity:
                                    <button onClick={()=> increaseQuantity(product.id)}>+</button>
                                    {product.quantity}
                                    <button onClick={() => decreaseQuantity(product.id)}>-</button>
                                </div>
                                <button onClick={()=> removeProduct(product.id)}>Remove</button>
                                </li>
                            ))
                        }
                    </ul>
                    <h4>Total Price: ${totalPrice}</h4>
                    </div>
                ) : <p>This cart is empty</p>
            }
        </div>
    )
}

export default ShopingCart; 