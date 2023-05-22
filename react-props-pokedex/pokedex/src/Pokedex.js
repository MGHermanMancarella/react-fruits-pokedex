/** Pokedex
Is provided, via props, an array of objects describing different pokemon,
and renders a sequence of Pokecard components.*/

// pokecard >>> div charmancder img<> type: exp /div
// pokedex >>>
// pokestats.map((p => id: name: ect))
// app builds the page
import pokemons from "./pokemonStats.js";
import Pokecard from "./Pokecard.js";

/**renders Pokecard components, passing each component a single pokemon object from
 * the pokemons array
 *
 * pokemon object : {id, name, image, type, base_experience}
 */
function Pokedex() {
  const myStyles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  };

  return (
    <div style={myStyles}>
      {pokemons.map((pokemon) => (
        //TODO: ASK WHAT is best practice when passing whole objects as props??
        <Pokecard {...pokemon} />
      ))}
    </div>
  );
}

export default Pokedex;
