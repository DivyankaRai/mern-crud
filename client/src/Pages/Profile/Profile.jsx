import React,{useState,useEffect} from 'react'
import Row from 'react-bootstrap/esm/Row'
import Card from "react-bootstrap/Card";
import Spiner from "../../Components/Spinner/Spiner";
import "./profile.css"
import {useParams} from "react-router-dom"
import { singleUserGetFunc } from '../../Services/Api';
import { BASE_URL } from '../../Services/helper';
import moment from "moment"

const Profile = () => {

  const [spin, setspin] = useState(true)
  const [data, setdata] = useState([])

  const {id} = useParams()
  console.log(id);

  const singleUser = async() =>{
    const res = await singleUserGetFunc(id)
    console.log(res.data);
    setdata(res.data)
  }

  useEffect(() => {
    singleUser()
    setTimeout(() => {
      setspin(false)
    }, 1200);
  }, [id])

  return (
    <>
      {
        spin ? <Spiner/>: <div className="container">
        <Card className='card-profile shadow col-lg-6 mx-auto mt-5'>
          <Card.Body>
            <Row>
              <div className='col'>
                <div className='card-profile-stats d-flex justify-content-center'>
                    <img src={`${BASE_URL}/uploads/${data.profile}`} alt=""/>
                </div>
              </div>
            </Row>
            <div className='text-center'>
                <h3>{data.fname}</h3>
                <h4><i class="fa-solid fa-envelope" style={{color:"blue"}}></i>&nbsp;:- <span>{data.email}</span></h4>
                <h5><i class="fa-solid fa-mobile" style={{color:"blue"}}></i>&nbsp;:- <span>{data.mobile}</span></h5>
                <h4><i class="fa-solid fa-person" style={{color:"blue"}}></i>&nbsp;:- <span>{data.gender}</span></h4>
                <h5><i class="fa-solid fa-location-pin" style={{color:"blue"}}></i>&nbsp;:- <span>{data.location}</span></h5>
                <h5><i class="fa-solid fa-circle-dot" style={{color:"blue"}}></i>&nbsp;:- <span>{data.status}</span></h5>
                <h5><i class="fa-solid fa-calendar-days" style={{color:"blue"}}></i>&nbsp;Date Created &nbsp;:- <span>{moment(data.datecreated).format("DD-MM-YYYY")}</span></h5>
                <h5><i class="fa-solid fa-calendar-days" style={{color:"blue"}}></i>&nbsp;Date Updated &nbsp;:- <span>21/09/23</span></h5>
            </div>
          </Card.Body>
        </Card>
      </div>
      }
    </>
  )
}

export default Profile
