import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const EmployeeHomePage = () => {
	const [ employees, setEmployees ] = useState([])
	useEffect(() => {
		const getFromApi = async () => {
			const response = await axios.get(
				`https://sdg-staff-directory-app.herokuapp.com/api/Dunedin%20Golf%20Carts/Employees`
			)
			setEmployees(response.data)
		}
		getFromApi()
	}, [])

	return (
		<section className="employeesHomePage">
			{employees.map((employee, index) => {
				return (
					<section key={employee.id} className="employeeHome">
						<section className="employeeHomePicSection">
							<ul>
								<li>
									<Link to={`/${employee.id}`}>Employee ID: {employee.id}</Link>
								</li>
								<li>
									<img id="homePic" src={employee.profileImage} alt={employee.profileImage} />
								</li>
							</ul>
						</section>
						<section className="employeeHomeText">
							<ul>
								<li>First Name: {employee.firstName}</li>
								<li>Last Name: {employee.lastName}</li>
								<li>Full Time: {employee.isFullTime.toString()}</li>
								<li>Job Title: {employee.jobTitle}</li>
							</ul>
						</section>
					</section>
				)
			})}
		</section>
	)
}

export default EmployeeHomePage
