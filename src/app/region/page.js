import CardPokemonDetails from "../components/CardPokemonDetails";

export default async function Region() {
    const response = await fetch(`https://pokeapi.co/api/v2/region`);
    const pokemon = await response.json();
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="text-center mb-4"><h1>Regiões</h1>
                    <div className="row">
                        {pokemon.results.map((region, index) => (
                            <div className="col-lg-3 col-md-6 col-12 mb-3 d-flex justify-content-center">
                                {region.name}
                            </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}