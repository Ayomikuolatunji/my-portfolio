import moment from 'moment'
import Link from 'next/link'
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
  description:string
  svn_url:string
  language:string
  updated_at:string
  visibility:string
}


const Github = () => {
  const [step,setStep]=useState([])
  const [profileData,setProfileData]=useState<profileDatas>()
  const [repos,setRepos]=useState([])

  useEffect(()=>{
       const fetchProfile=async()=>{
        const res=await fetch('https://api.github.com/users/Ayomikuolatunji')
        const data=await res.json()
        setProfileData(data)
       }
       fetchProfile()
 },[])

 useEffect(()=>{
  const fetchRepos=async()=>{
    const res=await fetch('https://api.github.com/users/Ayomikuolatunji/repos?sort="updated_at"&created&direction=desc')
    const data=await res.json()
    console.log(data);
     setRepos(data)
   }
   fetchRepos()
 },[])
   
  
  return (
    <div className='sm:w-[70%] w-[95%] mx-auto flex justify-between flex-wrap'>
          <div className="profile sm:w-[40%] p-4">
              <div className="profile-image">
                 <img src={profileData?.avatar_url} alt="img" className='rounded-full w-[250px]'/>
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
          <div className="intro flex justify-center items-center">
             <h1 className='text-green-500 text-4xl font-extrabold 
                  opacity-[1]'>Repositories</h1>
                  <span className='bg-green-500 h-[5px] w-[57px] block ml-3'></span>
              </div>
               {
                 repos.map((repo:repo,index)=>{
                   return (
                     <div key={index} className="border-b-2 py-4 border-gray">
                        <div className="repo-box">
                            <h1 className="text-white font-extrabold text-3xl flex items-center"> 
                              <a href={repo.svn_url} target="_blank">
                                    {repo.name}
                              </a>
                              <span className='text-sm ml-3 border-2 border-gray-200 py-1 px-2 rounded-3xl'>
                                {repo.visibility}
                              </span>
                            </h1>
                        </div>
                        <div className="desc">
                            <p>{repo.description}</p>
                        </div>
                        <div className="language my-3">
                            <span className='py-1 px-4 text-yellow-400 border-2 rounded-3xl border-white'>{repo.language}
                            </span>
                        </div>
                        {repo?.updated_at && (
                        <span className="font-bold">
                          Updated {moment(repo?.updated_at).fromNow() ?? ''}
                        </span>
                      )}
                     </div>
                   )
                 })
               }
          </div>
    </div>
  )
}

export default Github