import React from 'react'
import Table from 'react-bootstrap/Table';

const data = [
  {
    'sprintName': 'Sprint Name 1',
    'Status': 'Done',
    'StartDate': '11/07/22',
    'EndDate': '15/07/22',
    'CompletedDate': '15/07/22'
  },
  {
    'sprintName': 'Sprint Name 2',
    'Status': 'In Progress',
    'StartDate': '17/07/22',
    'EndDate': '23/07/22',
    'CompletedDate': '23/07/22'
  },
  {
    'sprintName': 'Sprint Name 3',
    'Status': 'Done',
    'StartDate': '28/07/22',
    'EndDate': '30/08/22',
    'CompletedDate': '30/08/22'
  },
  {
    'sprintName': 'Sprint Name 4',
    'Status': 'Done',
    'StartDate': '28/08/22',
    'EndDate': '17/09/22',
    'CompletedDate': '17/09/22'
  },
  {
    'sprintName': 'Sprint Name 5',
    'Status': 'In Progress',
    'StartDate': '20/09/22',
    'EndDate': '20/10/22',
    'CompletedDate': '20/10/22'
  },
  {
    'sprintName': 'Sprint Name 6',
    'Status': 'In Progress',
    'StartDate': '25/10/22',
    'EndDate': '05/11/22',
    'CompletedDate': '05/11/22'
  },
  {
    'sprintName': 'Sprint Name 7',
    'Status': 'Done',
    'StartDate': '06/11/22',
    'EndDate': '10/11/22',
    'CompletedDate': '10/11/22'
  },
  {
    'sprintName': 'Sprint Name 8',
    'Status': 'In Progress',
    'StartDate': '15/11/22',
    'EndDate': '20/11/22',
    'CompletedDate': '20/11/22'
  },
  {
    'sprintName': 'Sprint Name 9',
    'Status': 'Done',
    'StartDate': '25/11/22',
    'EndDate': '30/11/22',
    'CompletedDate': '30/11/22'
  },
  {
    'sprintName': 'Sprint Name 10',
    'Status': 'In Progress',
    'StartDate': '01/12/22',
    'EndDate': '10/12/22',
    'CompletedDate': '10/12/22'
  },
]
const SpringTable = () => {
  return (
    <div className="table-responsive">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Sprint Name</th>
            <th>Status</th>
            <th>StartDate</th>
            <th>EndDate</th>
            <th>Completed </th>
          </tr>
        </thead>
        <tbody>
        {data.map((value, index) => (
        <tr key={index}>
              <td>{value.sprintName}</td>
              <td>{value.Status}</td>
              <td>{value.StartDate}</td>
              <td>{value.EndDate}</td>
              <td>{value.CompletedDate}</td>
            </tr>
             ))}
        </tbody>
      </Table>
    </div>
  )
}

export default SpringTable
