import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import EmployeeDetailPage from './pages/EmployeeDetailPage'
import AddEmployeePage from './pages/AddEmployeePage'
import EmployeeHomePage from './pages/EmployeeHomePage'
import NotFound from './pages/NotFound'
import Menu from './components/Menu'

const App = () => {
	return (
		<Router>
			<Menu />
			<Switch>
				<Route exact path="/" component={EmployeeHomePage} />
				<Route exact path="/AddEmployeePage" component={AddEmployeePage} />
				<Route exact path="/:id" component={EmployeeDetailPage} />
				<Route path="*" component={NotFound} />
			</Switch>
		</Router>
	)
}

export default App
