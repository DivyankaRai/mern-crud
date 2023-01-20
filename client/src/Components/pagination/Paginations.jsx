import React from 'react'
import Pagination from 'react-bootstrap/Pagination';

const Paginations = ({handleprev,handlenext,page,setpage,pagecount}) => {
  return (
    <>
      {
        pagecount > 0 ?  <div className="pagination d-flex justify-content-end mx-5">
          <Pagination>
            <Pagination.Prev onClick={handleprev} />
            {
              Array(pagecount).fill(null).map((e,i)=>{
                return(
                  <>
                    <Pagination.Item active={page === i+1 ? true:false} onClick={()=> setpage(i+1)}>{i+1}</Pagination.Item>
                  </>
                )
              })
            }
            <Pagination.Next onClick={handlenext} />
          </Pagination>
        </div> : ""
      }
    </>
  )
}

export default Paginations
