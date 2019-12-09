import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const AddEmployeePage = () => {
	const [ toHome, setToHome ] = useState(false)
	const [ firstName, setFirstName ] = useState('')
	const [ lastName, setLastName ] = useState('')
	const [ birthday, setBirthday ] = useState('')
	const [ hireDate, setHireDate ] = useState('')
	const [ isFullTime, setIsFullTime ] = useState('True')
	const [ profileImage, setProfileImage ] = useState('')
	const [ jobTitle, setJobTitle ] = useState('')
	const [ jobDescription, setJobDescription ] = useState('')
	const [ phoneNumber, setPhoneNumber ] = useState('')
	const [ interestingFact, setInterestingFact ] = useState('')
	const [ address, setAddress ] = useState('')
	const [ city, setCity ] = useState('')
	const [ zip, setZip ] = useState('')
	const [ state, setState ] = useState('')
	const [ salary, setSalary ] = useState('')
	const [ gender, setGender ] = useState('')
	const [ email, setEmail ] = useState('')
	const [ emergencyContactPerson, setEmergencyContactPerson ] = useState('')
	const [ emergencyContactPhone, setEmergencyContactPhone ] = useState('')
	const [ emergencyContactAddress, setEmergencyContactAddress ] = useState('')
	const [ ptoHours, setPtoHours ] = useState('')
	const [ companyKey ] = useState('Dunedin Golf Carts')

	const postToApi = async () => {
		let person = {
			id: 0,
			firstName: firstName,
			lastName: lastName,
			birthday: birthday,
			hireDate: hireDate,
			isFullTime: isFullTime,
			profileImage: profileImage,
			jobTitle: jobTitle,
			jobDescription: jobDescription,
			phoneNumber: phoneNumber,
			interestingFact: interestingFact,
			address: address,
			city: city,
			zip: zip,
			state: state,
			salary: salary,
			gender: gender,
			email: email,
			emergencyContactPerson: emergencyContactPerson,
			emergencyContactPhone: emergencyContactPhone,
			emergencyContactAddress: emergencyContactAddress,
			ptoHours: ptoHours,
			companyKey: companyKey
		}
		const resp = await axios.post(
			`https://sdg-staff-directory-app.herokuapp.com/api/Dunedin%20Golf%20Carts/Employees`,
			person
		)
		if (resp.statusText === 'OK') {
			window.alert('Employee Added')
			setToHome(true)
		} else {
			window.alert('Error, Employee has not been added.')
		}
	}

	return (
		<section>
			{toHome ? <Redirect to="/" /> : null}
			<section className="inputBars">
				<input
					className="inputBar"
					type="text"
					value={firstName}
					placeholder="First Name"
					onChange={(eventData) => setFirstName(eventData.target.value)}
				/>
				<input
					className="inputBar"
					type="text"
					value={lastName}
					placeholder="Last Name"
					onChange={(eventData) => setLastName(eventData.target.value)}
				/>
				<section id="birthday">
					<label>Birthday:</label>
					<input
						className="inputBar"
						type="date"
						value={birthday}
						onChange={(eventData) => setBirthday(eventData.target.value)}
					/>
				</section>
				<section id="hireDate">
					<label>Hire Date:</label>
					<input
						className="inputBar"
						type="date"
						value={hireDate}
						placeholder="Hire Date 2019-12-04T19:48:39.493z"
						onChange={(eventData) => setHireDate(eventData.target.value)}
					/>
				</section>
				<section id="trueFalse">
					<section id="fullTimeSelection">
						<label>Full Time</label>
						<input
							id="fullTime"
							className="inputBar"
							type="radio"
							name="isFullTime"
							value="true"
							onChange={(eventData) => setIsFullTime(eventData.target.value)}
						/>
					</section>
					<section id="partTimeSelection">
						<label>Part Time</label>
						<input
							id="partTime"
							className="inputBar"
							type="radio"
							name="isPartTime"
							value="false"
							onChange={(eventData) => setIsFullTime(eventData.target.value)}
						/>
					</section>
				</section>
				<input
					className="inputBar"
					type="text"
					value={profileImage}
					placeholder="profileImage string"
					onChange={(eventData) => setProfileImage(eventData.target.value)}
				/>
				<input
					className="inputBar"
					type="text"
					value={jobTitle}
					placeholder="Job Title"
					onChange={(eventData) => setJobTitle(eventData.target.value)}
				/>
				<input
					className="inputBar"
					type="text"
					value={jobDescription}
					placeholder="Job Description"
					onChange={(eventData) => setJobDescription(eventData.target.value)}
				/>
				<input
					className="inputBar"
					type="text"
					value={phoneNumber}
					placeholder="Phone Number"
					onChange={(eventData) => setPhoneNumber(eventData.target.value)}
				/>
				<input
					className="inputBar"
					type="text"
					value={interestingFact}
					placeholder="Interesting Fact"
					onChange={(eventData) => setInterestingFact(eventData.target.value)}
				/>
				<input
					className="inputBar"
					type="text"
					value={address}
					placeholder="Address"
					onChange={(eventData) => setAddress(eventData.target.value)}
				/>
				<input
					className="inputBar"
					type="text"
					value={city}
					placeholder="City"
					onChange={(eventData) => setCity(eventData.target.value)}
				/>
				<input
					className="inputBar"
					type="text"
					value={zip}
					placeholder="Zip"
					onChange={(eventData) => setZip(eventData.target.value)}
				/>
				<input
					className="inputBar"
					type="text"
					value={state}
					placeholder="State"
					onChange={(eventData) => setState(eventData.target.value)}
				/>
				<input
					className="inputBar"
					type="number"
					value={salary}
					placeholder="Salary number"
					onChange={(eventData) => setSalary(eventData.target.value)}
				/>
				<input
					className="inputBar"
					type="text"
					value={gender}
					placeholder="Gender"
					onChange={(eventData) => setGender(eventData.target.value)}
				/>
				<input
					className="inputBar"
					type="text"
					value={email}
					placeholder="Email"
					onChange={(eventData) => setEmail(eventData.target.value)}
				/>
				<input
					className="inputBar"
					type="text"
					value={emergencyContactPerson}
					placeholder="Emergency Contact Person"
					onChange={(eventData) => setEmergencyContactPerson(eventData.target.value)}
				/>
				<input
					className="inputBar"
					type="text"
					value={emergencyContactPhone}
					placeholder="Emergency Contact Phone"
					onChange={(eventData) => setEmergencyContactPhone(eventData.target.value)}
				/>
				<input
					className="inputBar"
					type="text"
					value={emergencyContactAddress}
					placeholder="Emergency Contact Address"
					onChange={(eventData) => setEmergencyContactAddress(eventData.target.value)}
				/>
				<input
					className="inputBar"
					type="number"
					value={ptoHours}
					placeholder="PTO Hours number"
					onChange={(eventData) => setPtoHours(eventData.target.value)}
				/>
			</section>

			<section className="storeB">
				<button id="storeButton" onClick={postToApi}>
					Post Data
				</button>
			</section>
		</section>
	)
}
export default AddEmployeePage
