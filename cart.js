document.addEventListener("DOMContentLoaded", function () {
    var cartItemsDiv = document.getElementById("cartItems");
    let clearbtnEl = document.getElementById("clear-btn");

    // Delay the execution of the fetchCartItems() function by 1 second
    setTimeout(function () {
        // Check if the cartItemsDiv element is present
        if (cartItemsDiv) {
            // Fetch cart items from the backend
            fetchCartItems()
                .then(function (cartItems) {
                    if (cartItems.length === 0) {
                        cartItemsDiv.textContent = "Your cart is empty.";
                        cartItemsDiv.style.fontSize = "50px"
                        cartItemsDiv.style.backgroundColor = "rgba(255, 255, 255, .3)"
                        clearbtnEl.style.display = "none"
                    } else {
                        cartItems.forEach(function (book) {
                            // Display the book details in the cartItemsDiv
                            cartItemsDiv.innerHTML += `
                                <div class="books">
                                    <p>Book Name: ${book.name}</p>
                                    <p>Author: ${book.author}</p>
                                    <p>Price: ${book.price}</p>
                                </div>
                            `;
                        });
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    cartItemsDiv.textContent = "Failed to fetch cart items.";
                });
        }


        clearbtnEl.addEventListener("click", () => {
            localStorage.removeItem("cartItems");
            location.reload();
        })


    }, 1000); // 1000 milliseconds = 1 second
});

async function fetchCartItems() {

    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Remove duplicates from the cartItems array
    var uniqueCartItems = [...new Set(cartItems)];

    if (uniqueCartItems.length === 0) {
        return []; // No need to make a request if the cart is empty
    }

    try {
        // Create the bookIds parameter for the URL
        const bookIds = uniqueCartItems.join(",");

        const response = await axios.get("http://localhost:8081/getCartItems", {
            params: { bookIds }, // Use bookIds in the params object
        });

        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch cart items.");
    }
}
