import React,{useState,useEffect} from "react";
import "./home.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import {useNavigate} from "react-router-dom"
import Tables from "../../Components/Table/Table";
import Spiner from "../../Components/Spinner/Spiner";

const Home = () => {

  const [spin, setspin] = useState(true)
  const navigate = useNavigate()

  const adduser = () =>{
    navigate("/register")
  }

  useEffect(() => {
    setTimeout(() => {
      setspin(false)
    }, 1200);
  }, [])
  return (
    <>
      <div className="container">
        <div className="main_div">
          {/* search */}
          <div className="search_add mt-4 d-flex justify-content-between">
            <div className="search col-lg-4">
              <Form className="d-flex">
                <Form.Control
                  type="email"
                  placeholder="search"
                  className={"me-2"}
                />
                <Button variant="dark" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
            <div>
              <Button variant="dark" type="submit" onClick={adduser}>
                <i class="fa-solid fa-plus"></i>&nbsp; Add User
              </Button>
            </div>
          </div>
          {/* export, gender,status,filter */}
          <div className="filter_div mt-5 d-flex justify-content-between flex-wrap">
            <div className="export_csv">
              <Button variant="primary" type="submit" className="mt-3">
                Export To Csv
              </Button>
            </div>
            <div className="filter_gender">
              <div className="filter">
                <h4>Filter by gender</h4>
                <div className="gender d-flex justify-content-around">
                  <Form.Check
                    type={"radio"}
                    label={`All`}
                    name={"gender"}
                    value={"All"}
                    defaultChecked
                  />&nbsp;
                  <Form.Check
                    type={"radio"}
                    label={`Male`}
                    name={"gender"}
                    value={"Male"}
                  />&nbsp;
                  <Form.Check
                    type={"radio"}
                    label={`Female`}
                    name={"gender"}
                    value={"Female"}
                  />
                </div>
              </div>
            </div>
            {/* sort by values */}
            <div className="filter_newOld">
              <h4>Sort by values</h4>
              <Dropdown className="text-center">
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Sort
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    New
                  </Dropdown.Item>
                  <Dropdown.Item>
                    Old
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* filter by status */}
            <div className="filter_status">
              <div className="filter">
                <h3>Filter by Status</h3>
                <div className="status d-flex justify-content-around">
                  <Form.Check
                    type={"radio"}
                    label={`All`}
                    name={"status"}
                    value={"All"}
                    defaultChecked
                  />&nbsp;
                  <Form.Check
                    type={"radio"}
                    label={`Active`}
                    name={"status"}
                    value={"Active"}
                  />&nbsp;
                  <Form.Check
                    type={"radio"}
                    label={`Inactive`}
                    name={"status"}
                    value={"Inactive"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          spin ? <Spiner/>:<Tables/>
        }
      </div>
    </>
  );
};

export default Home;
