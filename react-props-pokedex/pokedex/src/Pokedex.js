import Pokecard from './Pokecard.js'
import pokemany from './pokemonStats.js'

/**renders Pokecard components, passing each component a single pokemon object
 * from pokemonStats.js array via app.js
 *
 * pokemon object : {id, name, image, type, base_experience}
 */
function Pokedex ({ pokeData = pokemany }) {
  const myStyles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }

  return (
    <div style={myStyles}>
      {pokeData.map(pokemon => (
        <Pokecard pokemon={pokemon} />
      ))}
    </div>
  )
}

export default Pokedex
