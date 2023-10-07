import CardPokemonDetails from "../components/CardPokemonDetails";

export default async function Pokemon({ params }) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`);
    const pokemon = await response.json();
    return (
        <>
            <div className="container mt-5">
                <div className="d-flex justify-content-center">
                    <CardPokemonDetails pokemon={pokemon} />
                </div>
            </div>
        </>
    )
}