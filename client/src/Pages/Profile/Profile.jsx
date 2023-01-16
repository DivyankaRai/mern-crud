import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Card from "react-bootstrap/Card";
import "./profile.css"

const Profile = () => {
  return (
    <>
      <div className="container">
        <Card className='card-profile shadow col-lg-6 mx-auto mt-5'>
          <Card.Body>
            <Row>
              <div className='col'>
                <div className='card-profile-stats d-flex justify-content-center'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSTblEVkkdJh15jlAbC3FpvuzCKb1o-pQQA&usqp=CAU" alt=""/>
                </div>
              </div>
            </Row>
            <div className='text-center'>
                <h3>Divyanka</h3>
                <h4><i class="fa-solid fa-envelope" style={{color:"blue"}}></i>&nbsp;:- <span>divii@gmail.com</span></h4>
                <h5><i class="fa-solid fa-mobile" style={{color:"blue"}}></i>&nbsp;:- <span>1234567890</span></h5>
                <h4><i class="fa-solid fa-person" style={{color:"blue"}}></i>&nbsp;:- <span>male</span></h4>
                <h5><i class="fa-solid fa-location-pin" style={{color:"blue"}}></i>&nbsp;:- <span>location</span></h5>
                <h5><i class="fa-solid fa-circle-dot" style={{color:"blue"}}></i>&nbsp;:- <span>active</span></h5>
                <h5><i class="fa-solid fa-calendar-days" style={{color:"blue"}}></i>&nbsp;Date Created &nbsp;:- <span>12/09/19</span></h5>
                <h5><i class="fa-solid fa-calendar-days" style={{color:"blue"}}></i>&nbsp;Date Updated &nbsp;:- <span>21/09/23</span></h5>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Profile
