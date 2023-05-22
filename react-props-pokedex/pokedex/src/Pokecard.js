/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-unused-vars */

/**Pokecard
 * Shows a single Pokemon, with their name, image, and type. */

//{ id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },

const BASE_URL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png.'

function Pokecard (props) {
  const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`

  return (
    <div>
      <h4 clasName='color=blue'> {props.name}</h4>
      <img src={imgURL} alt='Pocket Monster' />
      <div>Type: {props.type}</div>
      <div>EXP: {props.base_experience}</div>
    </div>
  )
}

export default Pokecard
