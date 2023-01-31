import React,{useState,useEffect, useContext} from "react";
import "./home.css";
import Alert from 'react-bootstrap/Alert';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import {useNavigate} from "react-router-dom"
import Tables from "../../Components/Table/Table";
import Spiner from "../../Components/Spinner/Spiner";
import { addData, deletedata, editdata } from "../../Components/context/ContextProvider";
import { deleteFunc, usergetfunc } from "../../Services/Api";

const Home = () => {

  const [userdata, setuserdata] = useState([])
  const [search, setsearch] = useState("")
  const [gender, setgender] = useState("all")
  const [status, setstatus] = useState("all")
  const [sort, setsort] = useState("new")
  const [page, setpage] = useState(1)
  const [pagecount, setpageCount] = useState(4)


  const [spin, setspin] = useState(true)
  const navigate = useNavigate()
  const {useradd, setuseradd} = useContext(addData)
  const {useredit, setuseredit} = useContext(editdata)
  const {userdelete, setuserdelete} = useContext(deletedata)

  const adduser = () =>{
    navigate("/register")
  }

  // get user

  const fetchuser = async()=>{
    const res = await usergetfunc(search,gender,status,sort,page)
    setuserdata(res.data.usersdata)
    setpageCount(res.data.Pagination.pagecount)
    // console.log("page",);
  }

  console.log(userdata.usersdata,"qwertyui");
  //  delete user 

  const deleteUser = async(id) =>{
    const res = await deleteFunc(id)
    if(res.status == 200){
      setuserdelete(true)
      fetchuser()
    }
    else{
      alert("error")
    }
  }

  //  pagination 
  const handleprev = () => {
    setpage(()=>{
      if(page == 1){
        return page
      }
      else return page - 1
    })
  } 

  const handlenext = () => {
    setpage(()=>{
      if(page == pagecount){
        return page
      }
      else return page + 1
    })
  } 

  useEffect(() => {
    fetchuser()
    setTimeout(() => {
      setspin(false)
    }, 1200);
  }, [search,gender,status,sort,page])

  // console.log(sort);
  // console.log("search",search);
  
  return (
    <>
      {
        useradd ? <Alert variant="success" onClose={() => setuseradd("")} dismissible>
          &nbsp;{useradd.fname.toUpperCase()}&nbsp;Successfully added
        </Alert>:""
      }
      {
        useredit ? <Alert variant="primary" onClose={() => setuseredit("")} dismissible>
          &nbsp;{useredit.fname.toUpperCase()}&nbsp;Successfully updated
        </Alert>:""
      }
      {
        userdelete ? <Alert variant="primary" onClose={() => setuserdelete("")} dismissible>
          &nbsp;User Successfully Deleted
        </Alert>:""
      }
      <div className="container">
        <div className="main_div">
          {/* search */}
          <div className="search_add mt-4 d-flex justify-content-between">
            <div className="search col-lg-4">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="search"
                  onChange={(e)=>setsearch(e.target.value)}
                  className={"me-2"}
                />
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
            <div className="filter_gender">
              <div className="filter">
                <h4>Filter by gender</h4>
                <div className="gender d-flex justify-content-around">
                  <Form.Check
                    type={"radio"}
                    label={`All`}
                    name={"gender"}
                    value={"all"}
                    onChange={(e)=>setgender(e.target.value)}
                    defaultChecked
                  />&nbsp;
                  <Form.Check
                    type={"radio"}
                    label={`Male`}
                    name={"gender"}
                    value={"Male"}
                    onChange={(e)=>setgender(e.target.value)}
                  />&nbsp;
                  <Form.Check
                    type={"radio"}
                    label={`Female`}
                    name={"gender"}
                    value={"Female"}
                    onChange={(e)=>setgender(e.target.value)}
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
                  <Dropdown.Item onClick={()=>setsort("new")}>
                    New
                  </Dropdown.Item>
                  <Dropdown.Item  onClick={()=>setsort("old")}>
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
                    value={"all"}
                    onChange={(e)=>setstatus(e.target.value)}
                    defaultChecked
                  />&nbsp;
                  <Form.Check
                    type={"radio"}
                    label={`Active`}
                    name={"status"}
                    onChange={(e)=>setstatus(e.target.value)}
                    value={"active"}
                  />&nbsp;
                  <Form.Check
                    type={"radio"}
                    label={`Inactive`}
                    name={"status"}
                    value={"inactive"}
                    onChange={(e)=>setstatus(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          spin ? <Spiner/>:<Tables
                  userdata={userdata}
                  deleteUser={deleteUser}
                  handleprev={handleprev}
                  handlenext={handlenext}
                  page={page}
                  pagecount={pagecount}
                  setpage={setpage}
                    />
        }
      </div>
    </>
  );
};

export default Home;
