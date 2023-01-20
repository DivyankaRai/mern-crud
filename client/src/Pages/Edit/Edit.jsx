import React, { useState, useEffect, useContext } from "react";
import Select from "react-select";
import "./edit.css"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import {ToastContainer,toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Spiner from "../../Components/Spinner/Spiner";
import { useNavigate, useParams } from "react-router-dom";
import { edituser, singleUserGetFunc } from "../../Services/Api";
import { BASE_URL } from "../../Services/helper";
import { editdata } from "../../Components/context/ContextProvider";


const Edit = () => {

  const nav = useNavigate()
  const [spin, setspin] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setspin(false)
    }, 1200);
  }, [])

  const [inputData, setinputData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    location: "",
  });

  const options = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];

  const [status, setstatus] = useState("Active");
  const [simg, setsimg] = useState("")
  const [image, setimage] = useState("");
  const [previewImg, setpreviewImg] = useState("");
  const {useredit, setuseredit} = useContext(editdata)
  const {id} = useParams()
  console.log(id);

  // set inputData values
  const setInputValues = (e) => {
    const { name, value } = e.target;
    setinputData({ ...inputData, [name]: value });
  };

  //  set status value
  const setStatusValues = (e) => {
    setstatus(e.value);
  };

  // profile image set
  const setProfile = (e) => {
    setimage(e.target.files[0])
  };
  // console.log(image);

  const singleUserEdit = async() =>{
    const res = await singleUserGetFunc(id)
    if(res.status == 200){
      setinputData(res.data)
      setstatus(res.data.status)
      setsimg(res.data.profile)
    }
  }

  console.log(inputData.gender);
  useEffect(() => {
    if (image) {
      setsimg("")
      setpreviewImg(URL.createObjectURL(image));
    }
    singleUserEdit(id)
  }, [image]);

  const submitUserData = async(e) => {
    e.preventDefault()
    const { fname, lname, email, mobile, gender, location } = inputData;
    if(fname === ""){
      toast.error("First Name is required")
    }else if(lname === ""){
      toast.error("Last Name is required")
    }else if(email === ""){
      toast.error("Email is required")
    }else if(!email.includes("@")){
      toast.error("Enter valid email")
    }else if(mobile === ""){
      toast.error("Mobile number is required")
    }else if(mobile.length>10 || mobile.length<10){
      toast.error("Enter valid Mobile number")
    }else if(location === ""){
      toast.error("location is required")
    }
    else{
      toast.success("Updated successfully")
      const data = new FormData();
      data.append("fname", fname);
      data.append("lname", lname);
      data.append("email", email);
      data.append("mobile", mobile);
      data.append("gender", gender);
      data.append("status", status);
      data.append("user_profile", image || simg);
      data.append("location", location);

      const config = {
        "Content-Type": "multipart/form-data",
      };

      const res = await edituser(id, data, config);
      // console.log(res.data);
      if(res.status == 200){
        setuseredit(res.data)
        nav("/")
      }

    }
  };

  return (
    <>
    {
      spin? <Spiner/>: <div className="container">
      <h2 className="text-center mt-1">Update your details</h2>
      <Card className="shadow mt-3 p-3">
        <div className="profile_div text-center">
          <img
            src={
              image
                ? previewImg
                : `${BASE_URL}/uploads/${simg}`
            }
            alt="img"
            width={"50"}
            height={"50"}
          />
        </div>
        <Form>
          <Row>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="fname"
                value={inputData.fname}
                onChange={setInputValues}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lname"
                value={inputData.lname}
                onChange={setInputValues}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={inputData.email}
                onChange={setInputValues}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
              <Form.Label>Mobile No.</Form.Label>
              <Form.Control
                type="mobile"
                name="mobile"
                value={inputData.mobile}
                onChange={setInputValues}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
              <Form.Label>Select your gender</Form.Label>
              <Form.Check
                type={"radio"}
                label={`Male`}
                name={"gender"}
                value={"Male"}
                checked={inputData.gender == "Male"? true:false}
                onChange={setInputValues}
              />
              <Form.Check
                type={"radio"}
                label={`Female`}
                name={"gender"}
                value={"Female"}
                checked={inputData.gender == "Female"? true:false}
                onChange={setInputValues}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
              <Form.Label>Select your Status</Form.Label>
              <Select options={options} defaultValue={status} onChange={setStatusValues} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
              <Form.Label>Select your profile</Form.Label>
              <Form.Control
                type="file"
                name="user_profile"
                onChange={setProfile}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
              <Form.Label>Enter your location</Form.Label>
              <Form.Control
                type="text"
                onChange={setInputValues}
                name="location"
                value={inputData.location}
              />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit" onClick={submitUserData}>
            Submit
          </Button>
        </Form>
      </Card>
      <ToastContainer
        position="top-center"
      />
    </div>
    }
      
    </>
  )
}

export default Edit
