export const getJoke = async () => {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      }
    })
    const { joke } = await response.json();

    return joke
  } catch (error) {
    return 'Circles are pointless.'
  }
}