import "./Home.css";
import Cards from "./Cards";
import Data from "./backend/Data";

function Home() {
    return (
        <div className="container-fluid">
            <h3 className="text-center mt-5 text-uppercase">My Shop</h3>
            <div className="container py-4">
                <div className="row">
                    {Data.products.map((item, index) => {
                        return (
                            <Cards
                                img={item.img}
                                title={item.title}
                                text={item.text}
                                item={item}
                                price={item.price}
                                key={index}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;
