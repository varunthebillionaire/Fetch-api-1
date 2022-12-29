const cat_btn = document.getElementById("cat_btn");
const cat_result = document.getElementById("cat_result");

const dog_btn = document.getElementById("dog_btn");
const dog_result = document.getElementById("dog_results");

cat_btn.addEventListener("click",getRandomcat);
dog_btn.addEventListener("click",getRandomdog);


async function getRandomcat() {
    await fetch("https://aws.random.cat/meow")
    .then((response) => response.json())
    .then((data) => {
        console.log(data.file);
        cat_result.innerHTML = `<img src="${data.file}" width="300px height="350px"
        <p>url: ${data.file}</p>
        `;
    });
}


async function getRandomdog() {
    await fetch("https://random.dog/woof.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        dog_result.innerHTML = `<img src="${data.url}" width="300px" height="400px"
        <p>url: ${data.url}</p>
        `;
    });
}