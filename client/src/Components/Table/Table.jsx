import React from 'react'
import Row from 'react-bootstrap/Row'
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import "./table.css"
import { BASE_URL } from '../../Services/helper';
import { NavLink } from 'react-router-dom';
import { statusupdate } from '../../Services/Api';
import Paginations from '../pagination/Paginations';


const Tables = ({userdata, deleteUser,handleprev,handlenext,page,setpage,pagecount}) => {

  // const handlechange = async(id,status)=>{
  //   console.log(id,status);
  //   const res = await statusupdate(id,status)
  //   console.log(res);
  // }
  console.log(userdata);

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
                  {
                    userdata.length > 0 ? userdata.map((e,i)=>{
                      return(
                        <>
                          <tr>
                            <td>{i+1+ (page-1)*4}</td>
                            <td>{e.fname}</td>
                            <td>{e.email}</td>
                            <td>{e.gender}</td>
                            <td>
                            <Dropdown>
                              <Dropdown.Toggle variant={e.status=="active" ? "primary":"danger"} id="dropdown-basic">
                                {e.status}
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
                              <img src={`${BASE_URL}/uploads/${e.profile}`} />
                            </td>
                            <td>
                            <Dropdown>
                              <Dropdown.Toggle className='action' id="dropdown-basic">
                                Action
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>
                                  <NavLink to={`/profile/${e._id}`} className="text-decoration-none">
                                  <i class="fa-solid fa-eye" style={{color:'blue'}}></i>&nbsp;View
                                  </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                <NavLink to={`/edit/${e._id}`} className="text-decoration-none">
                                  <i class="fa-solid fa-pen-to-square" style={{color:'green'}}></i>&nbsp;Edit
                                </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                  <div onClick={()=>deleteUser(e._id)}>
                                  <i class="fa-solid fa-trash" style={{color:'red'}}></i>&nbsp;Delete
                                  </div>
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                            </td>
                          </tr>
                        </>
                      )
                    }) : "No data found"
                  }
                </tbody>
              </Table>
              <Paginations 
              handleprev={handleprev}
              handlenext={handlenext}
              page={page}
              pagecount={pagecount}
              setpage={setpage}
              />
            </Card>
          </div>
        </Row>
      </div>
    </>
  )
}

export default Tables
