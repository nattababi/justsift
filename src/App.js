import './App.css';
import UserInfo from './components/userInfo';
import EditDialog from './components/editDialog';
import { useState, useEffect } from 'react';


const url = 'https://api.justsift.com/v1/people/nbrewinpp@tychoengineering.com';
const token = '745850bf3bc84e21b96b8e7c84d77b95';
function App() {

  const [user, setUser] = useState({});

  const getUserData = async () => {

    fetch(url, {
      method: 'get',
      headers: new Headers({
        'Authorization': 'Basic ' + token,
      })
    })
      .then(resp => resp.json())
      .then(json => {
        setUser(json.data);
      }
      );
  };

  useEffect(() => {
    getUserData();
  }, []);


  return (
    <div className="">
      <div className='container'>
        <div className='div-info'>
          <UserInfo user={user}></UserInfo>
        </div>
        <div className='div-button'>
          <EditDialog defaults={user}></EditDialog>
        </div>
      </div>
    </div>
  );
}

export default App;
