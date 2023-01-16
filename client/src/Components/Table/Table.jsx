import React from 'react'
import Row from 'react-bootstrap/Row'
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import "./table.css"

const Tables = () => {
  return (
    <>
      <div className="container mt-4">
        <Row>
          <div className="col mt-0">
            <Card className='shadow'>
              <Table className='align-align-item-center'>
                <thead className='thead-dark'>
                  <tr className='table-dark'>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Status</th>
                    <th>Profile</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Divii</td>
                    <td>Email</td>
                    <td>Female</td>
                    <td>
                    <Dropdown>
                      <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Active
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>
                          Active
                        </Dropdown.Item>
                        <Dropdown.Item>
                          Inactive
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    </td>
                    <td className='profile_div'>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSTblEVkkdJh15jlAbC3FpvuzCKb1o-pQQA&usqp=CAU" />
                    </td>
                    <td>
                    <Dropdown>
                      <Dropdown.Toggle className='action' id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>
                        <i class="fa-solid fa-pen-to-square"></i>&nbsp;Edit
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <i class="fa-solid fa-eye"></i>&nbsp;View
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <i class="fa-solid fa-trash"></i>&nbsp;Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Divii</td>
                    <td>Email</td>
                    <td>Female</td>
                    <td>
                    <Dropdown>
                      <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Active
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>
                          Active
                        </Dropdown.Item>
                        <Dropdown.Item>
                          Inactive
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    </td>
                    <td className='profile_div'>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSTblEVkkdJh15jlAbC3FpvuzCKb1o-pQQA&usqp=CAU" />
                    </td>
                    <td>
                    <Dropdown>
                      <Dropdown.Toggle className='action' id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>
                        <i class="fa-solid fa-pen-to-square"></i>&nbsp;Edit
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <i class="fa-solid fa-eye"></i>&nbsp;View
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <i class="fa-solid fa-trash"></i>&nbsp;Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </div>
    </>
  )
}

export default Tables
