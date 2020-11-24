import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListEmpComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            employees: [],
            message: null
        }
        this.deleteEmp = this.deleteEmp.bind(this);
        this.editEmp = this.editEmp.bind(this);
        this.addEmp = this.addEmp.bind(this);
        this.emailEmp = this.emailEmp.bind(this);
        this.reloadEmpList = this.reloadEmpList.bind(this);
    }

    componentDidMount() {
        this.reloadEmpList();
    }

    reloadEmpList() {
        ApiService.fetchEmployees()
            .then((res) => {
                this.setState({employees: res.data.result})
            });
    }

    deleteEmp(empId) {
        ApiService.deleteEmployee(empId)
           .then(res => {
               this.setState({message : 'Employee deleted successfully.'});
               this.setState({employees: this.state.employees.filter(emp => emp.emp_id !== empId)});
           })
		   window.location.reload();

    }

    editEmp(id) {
        window.localStorage.setItem("userId", id);
        this.props.history.push('/edit-employee');
    }

    emailEmp(id) {
	   ApiService.emailEmployee(id);
	   alert("Invitation Email Sent Succesfully!");
    }

    addEmp() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-employee');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employee Details</h2>
                <button className="btn btn-danger" style={{width:'200px'}} onClick={() => this.addEmp()}> Add Employee</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>UserId</th>
                            <th>Email</th>
                            <th>MobileNumber</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(
                        emp =>
                                    <tr key={emp.id}>
                                        <td>{emp.firstName}</td>
                                        <td>{emp.lastName}</td>
                                        <td>{emp.userid}</td>
                                        <td>{emp.email}</td>
                                        <td>{emp.cell}</td>
                                        <td>{emp.address}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteEmp(emp.id)}> Delete</button>
                                            <button className="btn btn-success" onClick={() => this.editEmp(emp.id)} style={{marginLeft: '20px'}}> Edit</button>
                                            <button className="btn btn-success" onClick={() => this.emailEmp(emp.id)} style={{marginLeft: '20px'}}> Send Email</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default ListEmpComponent;