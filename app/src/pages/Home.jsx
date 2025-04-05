import "./Home.css";

function Home() {
    return (
        <div className="home">
            <header className="hero">
                <h1>Welcome to Our Grocery Store</h1>
                <p>Fresh produce, quality meats, and everyday essentials delivered to your door.</p>
            </header>
            <section className="categories">
                <div className="category">
                    <div className="image-container">
                        <img src="/images/fruits.jpg" alt="Fresh Fruits" className="full-width-image" />
                        <div className="overlay">Fresh Fruits</div>
                    </div>
                </div>
                <div className="category">
                    <div className="image-container">
                        <img src="/images/vegetables.jpg" alt="Vegetables" className="full-width-image" />
                        <div className="overlay">Vegetables</div>
                    </div>
                </div>
                <div className="category">
                    <div className="image-container">
                        <img src="/images/meat.jpg" alt="Quality Meats" className="full-width-image" />
                        <div className="overlay">Quality Meats</div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
