import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
	return (
		<section className="header">
			<h1 id="title">Welcome to Dunedin Golf Carts</h1>
			<nav>
				<ul>
					<li>
						<Link to="/">Employee Home Page</Link>
					</li>
					<li>
						<Link to="/AddEmployeePage">Add Employee Page</Link>
					</li>
				</ul>
			</nav>
		</section>
	)
}

export default Menu
