/**Pokecard
 * Shows a single Pokemon, with their name, image, and type.
 * takes following props from Pokedex.js
 * props: { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 }
 * */

function Pokecard(props) {
  const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;

  return (
    <div>
      <h4 clasName="color=blue"> {props.name}</h4>
      <img src={imgURL} alt="Pocket Monster" />
      <div>Type: {props.type}</div>
      <div>EXP: {props.base_experience}</div>
    </div>
  );
}

export default Pokecard;
