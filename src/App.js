import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Loader from './Loader/Loader';
import { setUsers } from './redux/actions';
import UserCard from './UserCard/UserCard';
function App() {

  const dispatch = useDispatch();

  //State Variables
  const [totalUsers, setTotalUsers] = useState([]);
  const [userId, setUserId] = useState();
  const [loading, setLoading] = useState(false);
  const [clicked,setClicked] = useState(false);

  //Function executed to fetch all the users 
  const fetchAllUsers = async () => {
    const res = await fetch("https://reqres.in/api/users");
    const data = await res.json();

    let allUsers = [];
    for(let i=0;i<data.total;i++){
        allUsers.push(i+1);
    }

    setTotalUsers(allUsers);
    dispatch(setUsers(data));
  }
 
  //UseEffect Hook
  useEffect(() => {
    fetchAllUsers();
    setLoading(true);
  }, [])

  //Function when a button is clicked
  const handleClick = (e) => {
    setUserId(e.target.innerText);
    setClicked(true);
  }

  return (
    <div className="App">
      {
        loading ? 
        <div>
          <h1>Users Data</h1>
          {
            clicked?
            <UserCard id={userId}/>
            :
            <div className="userCard nothing">Nothing to Show. Click on any button to show the user details</div>
          }
          {
            totalUsers.length===0?
            <Loader/>
            :
            totalUsers.map((user)=>{
              return <button className='userButton' onClick={handleClick}>{user}</button>
            })
          }
        </div>
        :
        <Loader/>
      }  
    </div>
  );
}

export default App;
