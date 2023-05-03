import { useState } from "preact/hooks";

export default function Joke() {
  const [joke, setJoke] = useState('');

  const getJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      }
    })
    const { joke } = await response.json();

    return joke
  }

  if (joke === '') getJoke().then(setJoke);


  return (
    <>
      <div className="h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 w-10 mx-auto mt-12 rounded-lg"></div>
      <p class="text-center mt-2 text-sm">{joke}</p>
    </>
  );
}
