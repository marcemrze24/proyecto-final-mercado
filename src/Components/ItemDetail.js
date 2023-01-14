const ItemDetail = ({
    id,
    name,
    description,
    image,
    price,
    stock,
    category,
}) => {
    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p>{description}</p>
            <p>{price}</p>
        </div>
    );
};

export default ItemDetail;
