import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
	function handleCLick() {
		localStorage.setItem("isLoggedIn", "false")

	}
	return (
		<div style={{ display: "flex", justifyContent: "space-between " }}>

			<NavLink
				to={"/"}>
				<h2>Tracom Academy</h2>
			</NavLink>
			<div style={{ display: "flex", gap: "2em" }}>
				<NavLink
					to={"/"}>

					<h3>Home</h3>

				</NavLink>

				<NavLink
					data-testid="contact"
					to={"/contact"}>

					<h3>Contact</h3>
				</NavLink>
				<NavLink
					to={"/users"}>

					<h3>Users</h3>
				</NavLink>
				<NavLink
					to={"/login"}
					onClick={() => handleCLick()}
				>
					<h3>LogOut</h3>
				</NavLink>




			</div>

		</div>
	)
}

export default Navbar