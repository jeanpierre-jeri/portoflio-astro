import { useState } from "preact/hooks";
import { getJoke } from "../services/joke";

export default function Joke() {
  const [joke, setJoke] = useState('');

  if (joke === '') getJoke().then(setJoke);


  return (
    <>
      <div className="h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 w-10 mx-auto mt-12 rounded-lg"></div>
      <p className="text-center mt-2 text-sm">{joke}</p>
    </>
  );
}
