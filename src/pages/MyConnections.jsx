import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import AuthContex from '../Contex/AuthContex';

const MyConnections = () => {
    const {user}=useContext(AuthContex)
    const [requstUser,setRequstUser]=useState([])

    
    console.log(requstUser?._id)
    useEffect(()=>{
           axios(`http://localhost:9000/myConnection?email=${user?.email}`).then(res=>{
            console.log(res.data)
            setRequstUser(res.data)
        
           }).catch(error=>{
             console.log(error)
           })
    },[user])
    console.log(requstUser)

    const handleDelete=(id)=>{
        axios.delete(`http://localhost:9000/myConnection/${id}`)
        .then(res=>{console.log(res.data)
        setRequstUser(prev=>prev.filter(user=> user._id!==id))

        }).catch(error=>{
            console.log(error)
            
        })
    }
    return (
        <div className='px-20'>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>profile picture</th>
        <th>Partner Name</th>
        <th>Subject</th>
        <th>Study Mode</th>
        <th>Delete</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
      {
         requstUser.map(data=><tr key={data?._id}>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={data?.profileimage}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          {data?.name}
          
        </td>
        <td>{data.subject}</td>
        <td>{data?.studyMode}</td>
        <th>
          <button onClick={()=>handleDelete(data._id)} className="btn">Delete</button>
        </th>
        <th><button className='btn'>Update</button></th>
      </tr>
         )
      }
     
    
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
  </table>
</div>
        </div>
    );
};

export default MyConnections;