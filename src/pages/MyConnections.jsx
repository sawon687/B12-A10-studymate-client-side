import axios from 'axios';
import  { useContext, useEffect, useRef, useState } from 'react';
import AuthContex from '../Contex/AuthContex';
import Loading from './Loading';

const MyConnections = () => {
    const {user, loading}=useContext(AuthContex)
    const [requstUser, setRequstUser] = useState([]);
    const [dataupdate, setDataUpdate] = useState({});
    const updateRef = useRef();
    const [refresh, setRefresh] = useState(false)
  


   useEffect(()=>{
    axios(`http://localhost:9000/myConnection?email=${user?.email}`)
            .then(res => setRequstUser(res.data))
            .catch(error => console.log(error));
   },[user,refresh])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:9000/myConnection/${id}`)
            .then(res => {
                setRefresh(!refresh)
                console.log(res.data)
            })
            .catch(error => console.log(error));
    };

    const handleupdatebtn = (data) => {
        console.log(data._id)
        setDataUpdate(data);        // ✅ store selected row data
        updateRef.current.showModal();

    }




    const handleUpdate = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const profileimage = e.target.profileImge.value;
        const subject = e.target.subject.value;

        const updateInfo = {
            name,
            profileimage,
            subject,
            studyMode: dataupdate?.studyMode,
            availabilityTime: dataupdate?.availabilityTime,
            location: dataupdate.location,
            experienceLevel: dataupdate.experienceLevel,
            rating: dataupdate.rating,
            patnerCount: dataupdate.patnerCount,
            email: dataupdate.email,
            request_Email: dataupdate.request_Email,
            partnerId: dataupdate.partnerId,
        }
        console.log('sawon', updateInfo)
        axios.patch(`http://localhost:9000/myConnection/${dataupdate._id}`, updateInfo)
            .then(res => {
                console.log(res.data)

                setRefresh(!refresh)
                if (res.data.modifiedCount > 0) {

                    updateRef.current.close()
                    e.target.reset()
                }
            })
    }

    const subjectHandle = (e) => {

        setDataUpdate({ ...dataupdate, subject: e.target.value });
    }

      
    if(!loading)
    {
        return <Loading></Loading>
    }

    return (
        <div className='px-20'>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Profile Picture</th>
                            <th>Partner Name</th>
                            <th>Subject</th>
                            <th>Study Mode</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>

                    <tbody>
                        {requstUser.map(data => (
                            <tr key={data?._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img src={data?.profileimage} />
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td>{data?.name}</td>
                                <td>{data?.subject}</td>
                                <td>{data?.studyMode}</td>

                                <td>
                                    <button onClick={() => handleDelete(data._id)} className="btn">Delete</button>
                                </td>

                                <td>
                                    <button onClick={() => handleupdatebtn(data)} className="btn">Update</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            {/* ✅ ONE MODAL OUTSIDE MAP */}
            <dialog ref={updateRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleUpdate} className='space-y-3'>

                        <label className="label">Name</label>
                        <input
                            type="text"
                            className="input w-full"
                            name='name'
                            defaultValue={dataupdate?.name}
                        />

                        <label className="label">Photo URL</label>
                        <input
                            type="text"
                            className="input w-full"
                            name='profileImge'
                            defaultValue={dataupdate?.profileimage}
                        />
                        {/* study mode */}
                        <label className="label">StudyMode</label>
                        <div className='flex gap-5'>
                            {["Online", "Offline"].map(mode => (
                                <button
                                    key={mode}
                                    type="button"
                                    name='studymode'

                                    onClick={() => setDataUpdate({ ...dataupdate, studyMode: mode })}
                                    className={`btn flex-2 ${dataupdate.studyMode === mode ? "btn-primary" : "btn-outline"}`}
                                >
                                    {mode}
                                </button>
                            ))}
                        </div>
                        <label className='label'>Subject</label>
                        <select
                            name='subject'
                            value={dataupdate.subject}             // controlled value
                            onChange={(e) => subjectHandle(e)} // update state
                            className="input w-full"
                        >
                            <option value='Bangla'>Bangle</option>
                            <option value='Math'>Math</option>
                            <option value='Programming'>Programming</option>
                            <option value='History'>History</option>
                            <option value='Accounting'>Accounting</option>
                            <option value='Chemistry'>Chemistry</option>
                            <option value='English'>English</option>
                            <option value='ICT'> ICT</option>
                        </select>


                        <div className='flex justify-end gap-4 mt-4'>
                            <button onClick={() => updateRef.current.close()} className="btn">Close</button>
                            <button type='submit' className="btn btn-primary">Update</button>
                        </div>

                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default MyConnections;
