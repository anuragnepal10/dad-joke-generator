const btn = document.querySelector(".card button");

async function generateJoke() {

    const config = {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    };
    const response = await fetch("https://icanhazdadjoke.com", config);
    const data = await response.json();
    const joke = document.querySelector(".card p");
    joke.innerHTML = data.joke;
}

generateJoke();

btn.addEventListener("click", () => {
    generateJoke();
})
