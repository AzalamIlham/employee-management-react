
import React, { useState } from 'react';

export default function Form() {
  
  const [Employees, setEmployees] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState({
    Id: "",
    First_Name: "",
    Last_Name: "",
    Email: "",
    Mobile_Phone: "",
    Job: ""
  });

  const handleChangeEmployee = (event) => {
    setCurrentEmployee({
      ...currentEmployee,
      [event.target.name]: event.target.value
    });
  };


  const handleAddEmployee = (event) => {
    event.preventDefault();
    let randomId;
    do {
      randomId = Math.floor(Math.random() * 1000000);
    } while (Employees.some(emp => emp.Id === randomId));
    const newEmployee = { ...currentEmployee, Id: randomId };
    setEmployees([...Employees, newEmployee]);
    setCurrentEmployee({
      Id: "",
      First_Name: "",
      Last_Name: "",
      Email: "",
      Mobile_Phone: "",
      Job: ""
    });
  };


  const deleteEmployee = (id) => {
    setEmployees(Employees.filter(employee => employee.Id !== id));
  };
  

  return (
    <div className="row p-3 mb-2">
     
      <div className="text-center " class="badge text-bg-primary "  >
        <h2>Add New Employee</h2>
      </div>
      <br />
      <br />
      <br/>
      <span class="border border-5"  >
      <div className="text-center"  class="p-3 mb-2 bg-secondary-subtle text-center " >

        <form onSubmit={handleAddEmployee}  >
          <label>First Name:</label>
          <br />
          <input type="text" name="First_Name" placeholder="Write....."  value={currentEmployee.First_Name} onChange={handleChangeEmployee} />
          <br />
          <br />
          <label>Last Name:</label>
          <br />
          <input type="text" name="Last_Name" placeholder="Write....." value={currentEmployee.Last_Name} onChange={handleChangeEmployee} />
          <br />
          <br />
          <label>Email:</label>
          <br />
          <input type="email" name="Email" placeholder="name@example.com" value={currentEmployee.Email} onChange={handleChangeEmployee} />
          <br />
          <br />
          <label>Mobile Phone:</label>
          <br />
          <input type="number" name="Mobile_Phone" placeholder="+212........" value={currentEmployee.Mobile_Phone} onChange={handleChangeEmployee} />
          <br />
          <br />
          <label>Job:</label>
          <br />
          <select name="Job" value={currentEmployee.Job} onChange={handleChangeEmployee}>
            <option value="">Select Job</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Doctor">Doctor</option>
            <option value="Database Administrator">Database Administrator</option>
            <option value="AI">AI</option>
          </select>
          <br />
          <br />
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          <br />
          <br />
          <button type="submit" className="btn btn-danger">Add Employee</button>
        </form>
       
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </span>
    
     <h1>__________________________________________________________________________________________________________________________________________________________________________________________________________________________</h1>
      
      <div className='p-3 mb-2 bg-primary text-white text-center'>
      <br />
      <br />
        <div className='p-3'>
          <h1>Employee List</h1>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">First_Name</th>
              <th scope="col">Last_Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Job</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            { Employees && Employees.map((item) => (
              <tr key={item.Id}>
                <th>{item.Id}</th>
                <th>{item.First_Name}</th>
                <td>{item.Last_Name}</td>
                <td>{item.Email}</td>
                <td>{item.Mobile_Phone}</td>
                <td>{item.Job}</td>
                <td>
                  <button className='btn btn-danger' onClick={() => deleteEmployee(item.Id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
