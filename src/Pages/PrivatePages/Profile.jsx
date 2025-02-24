import React, { useContext } from 'react'
import { authContext } from '../../Authentication/AuthProvider'
import Container from '../../Components/Common/Container'


const Profile = () => {

  const { userData } = useContext(authContext)


  return (
    <Container>
        <div>Profile</div>
        {
          userData && 
          <div>
            <img src={userData.photoURL} alt="" />
            <h3>Name: {userData.displayName}</h3>
          </div>
        }

    </Container>
  )
}

export default Profile