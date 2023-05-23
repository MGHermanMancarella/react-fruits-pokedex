const BASE_IMG_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`

/**Pokecard
 * Shows a single Pokemon, with their name, image, and type.
 * takes following props from Pokedex.js
 * props: { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 }
 * */

function Pokecard ({ pokemon }) {
  const imgURL = BASE_IMG_URL + `${pokemon.id}.png`

  const myStyles = {
    border: '1px solid black',
    borderRadius: '15px',
    backgroundColor: 'grey',
    width: '24%'
  }
  return (
    <div style={myStyles}>
      <h4> {pokemon.name}</h4>
      <img src={imgURL} alt='Pocket Monster' />
      <div>Type: {pokemon.type}</div>
      <div>EXP: {pokemon.base_experience}</div>
    </div>
  )
}

export default Pokecard
