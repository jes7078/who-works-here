import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const EmployeeDetailPage = (props) => {
	const [ employee, setEmployee ] = useState([])
	const [ toHome, setToHome ] = useState(false)

	const deleteApi = async () => {
		const resp = await axios.delete(
			`https://sdg-staff-directory-app.herokuapp.com/api/Dunedin%20Golf%20Carts/Employees/${props.match.params
				.id}`
		)
		if (resp.statusText === 'OK') {
			window.alert('Employee deleted')
			setToHome(true)
		} else {
			window.alert('Error, Employee has not been deleted.')
		}
	}

	useEffect(
		() => {
			const getEmployeeApi = async () => {
				const response = await axios.get(
					`https://sdg-staff-directory-app.herokuapp.com/api/Dunedin%20Golf%20Carts/Employees/${props.match
						.params.id}`
				)
				setEmployee(response.data)
			}
			getEmployeeApi()
		},
		[ props.match.params.id ]
	)

	return (
		<section className="employeeDetails">
			{toHome ? <Redirect to="/" /> : null}
			<section className="employeeDetailsDataSection">
				<section className="employeeDetailsPictureSection">
					<img src={employee.profileImage} alt={employee.profileImage} />
				</section>
				<section className="employeeDetailsText">
					<ul>
						<li>ID: {employee.id}</li>
						<li>First Name: {employee.firstName}</li>
						<li>Last Name: {employee.LastName}</li>
						<li>Birthday: {employee.birthday}</li>
						<li>Hired Date: {employee.hiredDate}</li>
						<li>Full Time: {employee.isFullTime}</li>
						<li>Job Title: {employee.jobTitle}</li>
						<li>Job Description: {employee.jobDescription}</li>
						<li>Phone Number: {employee.phoneNumber}</li>
						<li>Interesting Fact: {employee.interestingFact}</li>
						<li>Address: {employee.address}</li>
						<li>City: {employee.city}</li>
						<li>Zip: {employee.zip}</li>
						<li>State: {employee.state}</li>
						<li>Salary: {employee.salary}</li>
						<li>Gender: {employee.gender}</li>
						<li>Email: {employee.email}</li>
						<li>Emergency Contact Person: {employee.emergencyContactPerson}</li>
						<li>Emergency Contact Phone: {employee.emergencyContactPhone}</li>
						<li>Emergency Contact Address: {employee.emergencyContactAddress}</li>
						<li>PTO Hours: {employee.ptoHours}</li>
					</ul>
				</section>
			</section>
			<section className="deleteButtonSection">
				<button className="deleteButton" onClick={deleteApi}>
					Delete Employee
				</button>
			</section>
		</section>
	)
}

export default EmployeeDetailPage
