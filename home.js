const form = document.querySelector("#search-form")
const input = document.querySelector("#search-input")
form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const searchTerm = input.value;
    const res = await axios.get(`http://localhost:8081/searchBook?bookName=${searchTerm}`);
    displayBooks(res.data);
});

const displayBooks = (books) => {
    let bookContainer = document.querySelector("#bookContainer");
    bookContainer.innerHTML = " "; // Clear previous results

    for (let book of books) {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");

        const titleElement = document.createElement("h2");
        titleElement.textContent = book.name;
        bookElement.appendChild(titleElement);

        const authorElement = document.createElement("p");
        authorElement.textContent = `Author: ${book.author}`;
        bookElement.appendChild(authorElement);

        const genreElement = document.createElement("p");
        genreElement.textContent = `Price: ${book.price}`;
        bookElement.appendChild(genreElement);

        bookContainer.appendChild(bookElement);
    }
}

