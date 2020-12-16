import axios from 'axios';

//const COVID_CONTROLLER_IP = 'http://192.168.0.200' //http://localhost';
//const COVID_CONTROLLER_IP = 'http://35.222.246.251'; //192.168.0.200';
const COVID_CONTROLLER_IP = 'https://35.239.124.98'; //192.168.0.200';

const USER_API_BASE_URL = COVID_CONTROLLER_IP +':8080/users';
const EMPLOYEE_API_BASE_URL = COVID_CONTROLLER_IP +':8080/employees';
const EMPLOYEETR_API_BASE_URL = COVID_CONTROLLER_IP +':8080/employee-trs';
const EMPLOYEE1_API_BASE_URL = COVID_CONTROLLER_IP +':8080/245678342/ighklsd'; //used to fetch single employee record by user id

const VISITOR_API_BASE_URL = COVID_CONTROLLER_IP +':8080/visitors';
const VISITORTR_API_BASE_URL = COVID_CONTROLLER_IP +':8080/visitor-trs';
const VISITOR1_API_BASE_URL = COVID_CONTROLLER_IP +':8080/245678342/ighklsd1'; //used to fetch single visitor record by user id

const AUTH_API_BASE_URL = COVID_CONTROLLER_IP +':8080/auth';




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
		
		getEmpQrCodeUrl(id){
			 return COVID_CONTROLLER_IP+":3000/new-tr/"+id;
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
		
//******************** vistors table *****************
    fetchVisitors() {
        return axios.get(VISITOR_API_BASE_URL);
    }

    fetchVisitor(empId) {
        return axios.get(VISITOR1_API_BASE_URL + '/' + empId);
    }

    fetchVisitorById(empId) {
        return axios.get(VISITOR_API_BASE_URL + '/' + empId);
    }

    deleteVisitor(empId) {
        return axios.delete(VISITOR_API_BASE_URL + '/' + empId);
    }

    addVisitor(emp) {
        return axios.post(""+VISITOR_API_BASE_URL, emp);
    }

    editVisitor(emp) {
        return axios.put(VISITOR_API_BASE_URL + '/' + emp.emp_id, emp);
    }
		
	  getVstrQrCodeUrl(id){
			 return COVID_CONTROLLER_IP+":3000/new-vst-tr/"+id;
		}
				
//******************************************************

//******************** employee Email Service *****************
    emailVisitor(empId) {
        return axios.get(VISITOR_API_BASE_URL + '/email/' + empId);
    }

//******************************************************
		
//******************** Visitorss Transaction table *****************
    fetchVisitorTrs() {
        return axios.get(VISITORTR_API_BASE_URL);
    }

    fetchVisitorTrById(empId) {
        return axios.get(VISITORTR_API_BASE_URL + '/' + empId);
    }

    deleteVisitorTr(empId) {
        return axios.delete(VISITORTR_API_BASE_URL + '/' + empId);
    }

    addVisitorTr(emp) {
        return axios.post(""+VISITORTR_API_BASE_URL, emp);
    }

    editVisitorTr(emp) {
        return axios.put(VISITORTR_API_BASE_URL + '/' + emp.emp_id, emp);
    }
//******************************************************
		
/************ Authentication services ****************/
    getAuthenticated(auth){
        return axios.post(""+AUTH_API_BASE_URL, auth);
    }			
		
    ChkMyToken(token){
			  if(token ==""){
					token="hello";
				}
        return axios.get(""+AUTH_API_BASE_URL+'/' + token);
    }			
		
		
}

export default new ApiService();