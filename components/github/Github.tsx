import React, { useEffect, useState } from 'react'
import { MdSupervisorAccount } from 'react-icons/md'

interface profileDatas{
  avatar_url:string
  name:string
  bio:string
  following:string
  followers:string
}

interface repo{
  name:string
}

interface profileRepos{
    repos?:[repo]
}

const Github = () => {
  const [profileData,setProfileData]=useState<profileDatas>()
  const [repos,setRepos]=useState([])

  useEffect(()=>{
       const fetchProfile=async()=>{
        const res=await fetch('https://api.github.com/users/Ayomikuolatunji')
        const data=await res.json()
        console.log(data);
        setProfileData(data)
       }
       fetchProfile()
 },[])

 useEffect(()=>{
  const fetchRepos=async()=>{
    const res=await fetch('https://api.github.com/users/Ayomikuolatunji/repos?created="sort=created&direction=asc')
    const data=await res.json()
    console.log(data);
     setRepos(data)
   }
   fetchRepos()
 },[])
   
  
  return (
    <div className='sm:w-[70%] w-[95%] mx-auto flex justify-between flex-wrap'>
          <div className="profile sm:w-[40%]">
              <div className="profile-image">
                 <img src={profileData?.avatar_url} alt="img" className='rounded-full w-[300px]'/>
              </div>
              <div className="profile-info">
                  <h1 className='text-white text-5xl'>{profileData?.name}</h1>
              </div>
              <div className="bio">
                  <p>{profileData?.bio}</p>
              </div>
              <div className="followers flex flex-row w-full items-center">
                 <p className='flex items-center mr-4'> <MdSupervisorAccount/> {profileData?.followers} followers</p>
                 <p className='space-x-3'>{profileData?.following} following</p>
              </div>
          </div>
          <div className="repos sm:w-[60%] w-full mt-10">
               {
                 repos.map((repo:repo,index)=>{
                   return (
                     <div key={index} className="border-b-3">
                        <div className="repo-box">
                            <h1>{repo.name}</h1>
                        </div>
                     </div>
                   )
                 })
               }
          </div>
    </div>
  )
}

export default Github