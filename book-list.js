document.addEventListener("DOMContentLoaded", function () {
    //localStorage.removeItem("cartItems");
    // Fetch all books and display them in the table
    axios.get("http://localhost:8081/getAllBooks")
        .then(function (response) {
            var books = response.data;
            var table = document.getElementById("bookTable");

            books.forEach(function (book) {
                var row = table.insertRow();
                row.insertCell().textContent = book.name;
                row.insertCell().textContent = book.author;
                row.insertCell().textContent = book.price;
                row.insertCell().textContent = book.publisher;
                row.insertCell().textContent = book.publication;

                // Add button to the end of the row
                var addToCartCell = row.insertCell();
                var addToCartButton = document.createElement("button");
                addToCartButton.textContent = "Add To Cart";
                addToCartButton.classList.add("add-to-cart-btn");
                addToCartButton.setAttribute("data-book-id", book.id); // Store book ID as a custom attribute
                addToCartCell.appendChild(addToCartButton);
            });

            // Add event listener to the "Add To Cart" buttons
            document.querySelectorAll(".add-to-cart-btn").forEach(function (button) {
                button.addEventListener("click", addToCart);
            });
        })
        .catch(function (error) {
            console.error(error);
        });

    // Function to handle "Add To Cart" button click
    function addToCart(event) {

        var bookId = event.target.getAttribute("data-book-id");
        var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

        // Add the book ID to the cartItems array
        cartItems.push(bookId);

        // Store the updated cartItems array in local storage
        localStorage.setItem("cartItems", JSON.stringify(cartItems));

        // alert(`book with id: ${bookId}, added to cart`);
    }
});
