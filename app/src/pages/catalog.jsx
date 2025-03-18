import "./Catalog.css";
import Product from "./product";

const mockData = [
    {
        "title": "Banana",
        "price": 123.92,
        "category": "Fruit",
        "image": "/images/Banana.jpg",
        "_id": "1234332"
    },
    {
        "title": "Strawberry",
        "price": 123.92,
        "category": "Fruit",
        "image": "/images/Strawberry.jpg",
        "_id": "1234332"
    },
    {
        "title": "Ribs",
        "price": 123.92,
        "category": "Meat",
        "image": "/images/Ribs.jpg",
        "_id": "1234332"
    },
    {
        "title": "Chicken",
        "price": 123.92,
        "category": "Meat",
        "image": "/images/Chicken.jpg",
        "_id": "1234332"
    },
    {
        "title": "Potatoe",
        "price": 123.92,
        "category": "Starch",
        "image": "/images/Potatoe.jpg",
        "_id": "1234332"
    },
    {
        "title": "Rice",
        "price": 123.92,
        "category": "Starch",
        "image": "/images/Rice.jpg",
        "_id": "1234332"
    },
    {
        "title": "Cereal",
        "price": 123.92,
        "category": "Pantry",
        "image": "/images/Cereal.jpg",
        "_id": "1234332"
    },
    {
        "title": "Beans",
        "price": 123.92,
        "category": "Pantry",
        "image": "/images/Beans.jpg",
        "_id": "1234332"
    },
    {
        "title": "Milk",
        "price": 123.92,
        "category": "Dairy",
        "image": "/images/Milk.jpg",
        "_id": "1234332"
    },
    {
        "title": "Eggs",
        "price": 123.92,
        "category": "Dairy",
        "image": "/images/Eggs.jpg",
        "_id": "1234332"
    }
]

function Catalog(){
    return (
        <div className="catalog">
            <h1>Check Out our catalog</h1>

            <div className="list">
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>
        </div>
    )
}

export default Catalog;