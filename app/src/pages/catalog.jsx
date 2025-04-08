import { useEffect, useState } from "react";
import "./Catalog.css";
import Product from "./product";
import DataService from "../services/DataService";

const mockData = [
    {
        "title": "Banana",
        "price": 4.99,
        "category": "Fruit",
        "image": "/images/Banana.jpg",
        "_id": "1234332"
    },
    {
        "title": "Strawberry",
        "price": 6.99,
        "category": "Fruit",
        "image": "/images/Strawberry.jpg",
        "_id": "1234332"
    },
    {
        "title": "Ribs",
        "price": 10.99,
        "category": "Meat",
        "image": "/images/Ribs.jpg",
        "_id": "1234332"
    },
    {
        "title": "Chicken",
        "price": 8.99,
        "category": "Meat",
        "image": "/images/Chicken.jpg",
        "_id": "1234332"
    },
    {
        "title": "Potatoe",
        "price": 1.99,
        "category": "Starch",
        "image": "/images/Potatoe.jpg",
        "_id": "1234332"
    },
    {
        "title": "Rice",
        "price": 2.99,
        "category": "Starch",
        "image": "/images/Rice.jpg",
        "_id": "1234332"
    },
    {
        "title": "Cereal",
        "price": 4.99,
        "category": "Pantry",
        "image": "/images/Cereal.jpg",
        "_id": "1234332"
    },
    {
        "title": "Beans",
        "price": 3.59,
        "category": "Pantry",
        "image": "/images/Beans.jpg",
        "_id": "1234332"
    },
    {
        "title": "Milk",
        "price": 3.29,
        "category": "Dairy",
        "image": "/images/Milk.jpg",
        "_id": "1234332"
    },
    {
        "title": "Eggs",
        "price": 50.99,
        "category": "Dairy",
        "image": "/images/Eggs.jpg",
        "_id": "1234332"
    }
]

const mockCategories = ["Fruit", "Meat", "Starch", "Dairy", "Pantry"]

function Catalog(){
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    async function loadProducts(){
        let prods = await DataService.getProducts();
        setProducts(prods);
    }

    async function loadCategories(){
        let cats = await DataService.getCategories();
        setCategories(cats);
    }

    useEffect(function() {
        // this will be called when the page loads
        loadProducts();
        loadCategories();
    }, []);

    return (
        <div className="catalog page">
            <h1>Check Out our catalog</h1>

            <div className="filters">

                {categories.map( cat => <button className= 'btn  btn-outline-info'>{cat}</button>)}

            </div>

            <div className="list">

                {products.map( prod => <Product key={prod._id} data={prod}></Product>)}

            </div>
        </div>
    )
}

export default Catalog;