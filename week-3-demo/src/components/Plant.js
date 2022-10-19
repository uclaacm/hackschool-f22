

function Plant({ name, age, species, image }) {
    return (
        <div>
            <h2>{name}</h2>
            <img src={image} className="img" width={200} height={300} />
            <h3>{age} year(s) old {species}</h3>
        </div>
    )
}

export default Plant;