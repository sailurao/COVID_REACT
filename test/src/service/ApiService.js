import axios from 'axios';

const COVID_CONTROLLER_IP = 'http://localhost';
//const COVID_CONTROLLER_IP = 'http://35.222.246.251'; //192.168.0.200';

const USER_API_BASE_URL = COVID_CONTROLLER_IP +':8080/users';
const EMPLOYEE_API_BASE_URL = COVID_CONTROLLER_IP +':8080/employees';
const EMPLOYEETR_API_BASE_URL = COVID_CONTROLLER_IP +':8080/employee-trs';

const EMPLOYEE1_API_BASE_URL = COVID_CONTROLLER_IP +':8080/245678342/ighklsd'; //used to fetch single employee record by user id


class ApiService {

	//******************** users table *****************
    fetchUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    addUser(user) {
        return axios.post(""+USER_API_BASE_URL, user);
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }
//******************************************************
		
		
//******************** employees table *****************
    fetchEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    fetchEmployee(empId) {
        return axios.get(EMPLOYEE1_API_BASE_URL + '/' + empId);
    }

    fetchEmployeeById(empId) {
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + empId);
    }

    deleteEmployee(empId) {
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + empId);
    }

    addEmployee(emp) {
        return axios.post(""+EMPLOYEE_API_BASE_URL, emp);
    }

    editEmployee(emp) {
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + emp.emp_id, emp);
    }
//******************************************************

//******************** employee Email Service *****************
    emailEmployee(empId) {
        return axios.get(EMPLOYEE_API_BASE_URL + '/email/' + empId);
    }

//******************************************************
		
		
//******************** employees Transaction table *****************
    fetchEmployeeTrs() {
        return axios.get(EMPLOYEETR_API_BASE_URL);
    }

    fetchEmployeeTrById(empId) {
        return axios.get(EMPLOYEETR_API_BASE_URL + '/' + empId);
    }

    deleteEmployeeTr(empId) {
        return axios.delete(EMPLOYEETR_API_BASE_URL + '/' + empId);
    }

    addEmployeeTr(emp) {
        return axios.post(""+EMPLOYEETR_API_BASE_URL, emp);
    }

    editEmployeeTr(emp) {
        return axios.put(EMPLOYEETR_API_BASE_URL + '/' + emp.emp_id, emp);
    }
//******************************************************
		
		
}

export default new ApiService();