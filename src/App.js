import Books from "./pages/Books.jsx";
import { books } from "./data.js";
import Home from "./pages/Home.jsx";
import Nav from "./components/nav.jsx";
import Footer from "./components/Footer.jsx";
import BookInfo from "./pages/BookInfo.jsx";
import Cart from "./pages/Cart.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
	const [cart, setCart] = useState([]);

	function addToCart(book) {
		setCart([...cart, { ...book, quantity: 1 }]);
	}

	function removeFromCart(item) {
		setCart(cart.filter((book) => book.id !== item.id));
	}

	function changeQuantity(book, quantity) {
		setCart(
			cart.map((item) =>
				item.id === book.id
					? {
							...item,
							quantity: +quantity,
						}
					: item,
			),
		);
	}

	function numberOfItems() {
		let counter = 0;
		for (const item of cart) {
			counter += item.quantity;
		}
		return counter;
	}

	return (
		<Router>
			<div className="App">
				<Nav numberOfItems={numberOfItems()} />
				<Route path="/" exact component={Home} />
				<Route path="/books" exact render={() => <Books books={books} />} />
				<Route
					path="/books/:id"
					render={() => (
						<BookInfo books={books} addToCart={addToCart} cart={cart} />
					)}
				/>
				<Route
					path="/cart"
					render={() => (
						<Cart
							cart={cart}
							changeQuantity={changeQuantity}
							removeFromCart={removeFromCart}
						/>
					)}
				/>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
