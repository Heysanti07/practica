import Offer from "@/Components/Offer";

export default function Index({ offers }) {
    return (
        <>
            {offers?.map((offer) => (
                <Offer
                    key={offer.id}
                    name={offer.name}
                    genre={offer.genre}
                    price={offer.price}
                />
            ))}

            <div>
                Hay {Object.keys(offers).length} juegos en la base de datos{" "}
            </div>
        </>
    );
}
