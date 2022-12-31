import "./Home.css";
import Cards from "./Cards";
import Data from "./backend/Data";
import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";

function Home() {
    return (
        <div className="container">
            <NavBar />
            <ItemListContainer />
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
