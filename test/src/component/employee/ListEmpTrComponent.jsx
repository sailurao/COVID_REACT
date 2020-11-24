import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListEmpTrComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            emptrs: [],
            message: null
        }
        this.deleteEmpTr = this.deleteEmpTr.bind(this);
        this.editEmpTr = this.editEmpTr.bind(this);
        this.addEmpTr = this.addEmpTr.bind(this);
        this.reloadEmpTrList = this.reloadEmpTrList.bind(this);
    }

    componentDidMount() {
        this.reloadEmpTrList();
    }

    reloadEmpTrList() {
        ApiService.fetchEmployeeTrs()
            .then((res) => {
                this.setState({emptrs: res.data.result})
            });
    }

    deleteEmpTr(empId) {
        ApiService.deleteEmployeeTr(empId)
           .then(res => {
               this.setState({message : 'Employee deleted successfully.'});
               this.setState({emptrs: this.state.emptrs.filter(emp => emp.emp_id !== empId)});
           })
		   window.location.reload();

    }

    editEmpTr(id) {
/*        window.localStorage.setItem("userId", id);
        this.props.history.push('/edit-employee');*/
    }

    addEmpTr() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-employee-tr');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employee Transaction Details</h2>
                <button className="btn btn-danger" style={{width:'200px'}} onClick={() => this.addEmpTr()}> Add Transaction</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>EmployeeId</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Temp(&#8457;)</th>
                            <th>Q1</th>
                            <th>Q2</th>
                            <th>Q3</th>
                            <th>Q4</th>
                            <th>Q5</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.emptrs.map(
                        emp =>
                                    <tr key={emp.id}>
                                        <td>{emp.empid}</td>
                                        <td>{emp.date}</td>
                                        <td>{emp.time}</td>
                                        <td>{emp.temp}</td>
                                        <td>{emp.q1}</td>
                                        <td>{emp.q2}</td>
                                        <td>{emp.q3}</td>
                                        <td>{emp.q4}</td>
                                        <td>{emp.q5}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteEmpTr(emp.id)}> Delete</button>
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

export default ListEmpTrComponent;