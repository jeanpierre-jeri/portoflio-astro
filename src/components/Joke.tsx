import { useEffect, useState } from "preact/hooks";

export default function Joke() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const getJoke = async () => {
      const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });

      const { joke } = await response.json();

      setJoke(joke);
    };

    getJoke();
  }, []);

  return (
    <>
      <div className="h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 w-10 mx-auto mt-12 rounded-lg"></div>
      <p class="text-center mt-2 text-sm">{joke}</p>
    </>
  );
}
