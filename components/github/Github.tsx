import React, { useEffect, useState } from 'react'

interface profileDatas{
  avatar_url:string
  name:string
}



const Github = () => {
  const [profileData,setProfileData]=useState()

  useEffect(()=>{
     try {
      const fetchProfile=async()=>{
        const res=await axios('https://api.github.com/users/Ayomikuolatunji')
        const data=await res.json()
        setProfileData(data)
       }
     } catch (error) {
         console.log(error)
     }
 },[])

  
  return (
    <div className='w-[70%] mx-auto'>
          <div className="profile">
              <div className="profile-image">
                 <h1>{profileData.name}</h1>
              </div>
          </div>
          <div className="repos">

          </div>
    </div>
  )
}

export default Github