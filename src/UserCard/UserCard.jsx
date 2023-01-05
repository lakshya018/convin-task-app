import React, { useEffect } from 'react'
import {useSelector, useDispatch } from 'react-redux';
import Loader from '../Loader/Loader';
import { removeSelectedUser, selectedUser } from '../redux/actions';
import "./userCard.css";

const UserCard = ({id}) => {

  const user = useSelector((state) => state.selectedUserReducer);
  const dispatch = useDispatch();

  const fetchUser = async () =>{
    const res = await fetch(`https://reqres.in/api/users/${id}`);
    const data = await res.json();

    dispatch(selectedUser(data.data));
  }

  useEffect(()=>{
    if(id && id!=="") fetchUser();
    return () => {
      dispatch(removeSelectedUser());
    }
    // eslint-disable-next-line
  },[id]);

  return (
    <div className='userCard'>
        {
           Object.keys(user).length === 0 ? (
            <div className='nothing'>
              <Loader/>
            </div>
          )
            :
            <div>
              <h1 className='nameHeading'>{user.first_name} {user.last_name}</h1>
              <div className='card'>
              <img src={user.avatar} alt="" />
              <div className="details">
                <p><b>Id:</b> {user.id}</p>
                <p><b>Full Name:</b> {user.first_name} {user.last_name}</p>
                <p><b>Email:</b> {user.email}</p>
              </div>
            </div>
            </div>
            
        }
    </div>
  )
}

export default UserCard