import CardPokemonHome from "./components/CardPokemonHome";

export default async function Home() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1010&offset=0");
  const data = await response.json();

  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center mb-4">Todos os Pokemon</h1>
      <div className="row">
        {data.results.map((pokemon, index) => (
          <div className="col-lg-3 col-md-6 col-12 mb-3 d-flex justify-content-center">
            <CardPokemonHome pokemon={pokemon} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}