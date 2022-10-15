import './App.css';
import { useState, useEffect } from 'react'
import ProfileCard from './components/ProfileCard';
import profiles from './fakedata';

function App() {

const [fullname, setFullname] = useState('WAITING FOR DATA')

  const getRandomName = async ()=>{
  const response = await fetch( 'https://randomuser.me/api/');
  const data = await response.json()
  setFullname( data.results[0].name.first + ' ' + data.results[0].name.last)
  // console.log(fullName)
  return data.results[0].picture.large
}

useEffect(() =>{
  getRandomName()
},[])



  return (<>
{profiles.map(profile =>(
  <ProfileCard image={`https://robohash.org/SW${Math.random()}.png?set=set1`} title={profile.title} name={fullname} description={profile.description}/>
))}
 </>
  )
}

export default App;
