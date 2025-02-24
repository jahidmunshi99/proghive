import React, { useContext } from 'react'
import Container from '../Components/Common/Container'
import { authContext } from '../Authentication/AuthProvider'


const Blog = () => {
  const { userData } = useContext(authContext)
  console.log(userData);
  
  return (
    <Container>
        <div>Blog</div>
        {
          userData && 
          <div>
            <h3>Name: {userData.displayName}</h3>
          </div>
        }

    </Container>
  )
}

export default Blog