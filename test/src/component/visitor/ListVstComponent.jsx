import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListVstComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visitorss: [],
            message: null
        }
        this.deleteVst = this.deleteVst.bind(this);
        this.editVst = this.editVst.bind(this);
        this.addVst = this.addVst.bind(this);
        this.emailVst = this.emailVst.bind(this);
        this.reloadVstList = this.reloadVstList.bind(this);
    }

    componentDidMount() {
        this.reloadVstList();
    }

    reloadVstList() {
        ApiService.fetchVisitors()
            .then((res) => {
                this.setState({visitorss: res.data.result})
            });
    }

    deleteVst(empId) {
        ApiService.deleteVisitors(empId)
           .then(res => {
               this.setState({message : 'Visitors deleted successfully.'});
               this.setState({visitorss: this.state.visitorss.filter(emp => emp.emp_id !== empId)});
           })
		   window.location.reload();

    }

    editVst(id) {
        window.localStorage.setItem("userId", id);
        this.props.history.push('/edit-visitors');
    }

    emailVst(id) {
	   ApiService.emailVisitor(id);
	   alert("Invitation Email Sent Succesfully!");
    }

    addVst() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-visitors');
    }

    render() {
        return (
            <div>
                <h2 className="text-center" class="title">Visitors Details</h2>
                <button className="btn btn-danger" style={{width:'200px'}} onClick={() => this.addVst()}> Add Visitors</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Company</th>
                            <th>Email</th>
                            <th>MobileNumber</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.visitorss.map(
                        emp =>
                                    <tr key={emp.id}>
                                        <td>{emp.firstName}</td>
                                        <td>{emp.lastName}</td>
                                        <td>{emp.company}</td>
                                        <td>{emp.email}</td>
                                        <td>{emp.cell}</td>
                                        <td>{emp.address}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteVst(emp.id)}> Delete</button>
                                            <button className="btn btn-success" onClick={() => this.editVst(emp.id)} style={{marginLeft: '20px'}}> Edit</button>
                                            <button className="btn btn-success" onClick={() => this.emailVst(emp.id)} style={{marginLeft: '20px'}}> Send Email</button>
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

export default ListVstComponent;