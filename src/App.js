import "./styles.css";
import {
  getPokemonList,
  getPokemonDescription,
  getPokemonSpirteUrl,
  getPokemonNames
} from "./api/utils";
import { useState, useEffect } from "react";
import Select from "./components/select";

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonNames, setPokemonNames] = useState("");
  const [pokemonIndex, setPokemonIndex] = useState();
  const [pokeDescription, setPokeDescription] = useState("");
  // console.log({ pokeDescription });
  useEffect(() => {
    async function getData() {
      const pokedata = await getPokemonList();
      setPokemonList(pokedata);
    }

    getData();
  }, []);

  useEffect(() => {
    async function getDesc() {
      const pokeDesc = await getPokemonDescription(pokemonIndex);
      console.log(pokeDesc);
      setPokeDescription(pokeDesc);
    }
    getDesc();
  }, [pokemonIndex]);

  useEffect(() => {
    async function getname() {
      const pokeName = await getPokemonNames(pokemonIndex);
      console.log(pokemonNames);
      setPokemonNames(pokeName);
    }
    getname();
  }, [pokemonIndex]);
  return (
    <div className="App">
      <h1>Pokemon App</h1>
      <Select onChange={(e) => setPokemonIndex(e.target.value)}>
        <option>select a pokemon</option>
        {pokemonList.map((poke, ind) => {
          return (
            <option key={ind} value={ind + 1}>
              {poke.name}
            </option>
          );
        })}
      </Select>

      <div className="card">
        <img src={getPokemonSpirteUrl(pokemonIndex)} alt="pokemon" />
        <div className="description">
          <h1> {pokemonNames} </h1>
          <p>{pokeDescription.flavor_text}</p>
        </div>
      </div>
    </div>
  );
}
