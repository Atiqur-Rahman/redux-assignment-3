import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/products/actions';

const AddProduct = () => {
    const dispatch = useDispatch();
    const [product, setProduct] = useState({});

    const handleSetProductData = (e) => {
        const updatedProduct = {
            ...product,
        };
        updatedProduct[e.target.name] = e.target.value;
        setProduct(updatedProduct);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(product);
        if (Object.keys(product).length === 5) {
            dispatch(addProduct(product));
        } else {
            alert('Something is going wrong');
        }
    };
    return (
        <div className="formContainer">
            <h4 className="formTitle">Add New Product</h4>
            <form className="space-y-4 text-[#534F4F]" id="lws-addProductForm" onSubmit={handleSubmit}>
                {/* product name  */}
                <div className="space-y-2">
                    <label for="lws-inputName">Product Name</label>
                    <input className="addProductInput" id="lws-inputName" type="text" name="name" onChange={handleSetProductData} required />
                </div>
                {/* product category */}
                <div className="space-y-2">
                    <label for="lws-inputCategory">Category</label>
                    <input className="addProductInput" id="lws-inputCategory" type="text" name="category" onChange={handleSetProductData} required />
                </div>
                {/* product image url */}
                <div className="space-y-2">
                    <label for="lws-inputImage">Image Url</label>
                    <input className="addProductInput" id="lws-inputImage" type="text" name="imgUrl" onChange={handleSetProductData} required />
                </div>
                {/* price & quantity container */}
                <div className="grid grid-cols-2 gap-8 pb-4">
                    {/* <!-- price --> */}
                    <div className="space-y-2">
                        <label for="ws-inputPrice">Price</label>
                        <input className="addProductInput" type="number" name="price" id="lws-inputPrice" onChange={handleSetProductData} required />
                    </div>
                    {/* quantity */}
                    <div className="space-y-2">
                        <label for="lws-inputQuantity">Quantity</label>
                        <input className="addProductInput" type="number" name="quantity" id="lws-inputQuantity" onChange={handleSetProductData} required />
                    </div>
                </div>
                {/* submit button */}
                <button type="submit" id="lws-inputSubmit" className="submit">
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
