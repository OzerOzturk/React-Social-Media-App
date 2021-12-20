import React from 'react'
import "./profile.css"
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import {useEffect, useState} from "react";
import axios from 'axios'

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user,setUser] = useState({});

    useEffect(()=> {
        const fetchUser = async() => {
            const res = await axios.get(`/users?username=john`);
            setUser(res.data);
        };
        fetchUser();
    },[])

    return (
        <>
            <Topbar/>
            <div className="profile">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className='profileCoverImg' src={user.coverPicture || PF+"person/noCover.png"} alt="" />
                            <img className='profileUserImg' src={user.profilePicture || PF+"person/noAvatar.png"} alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName' >{user.username}</h4>
                            <span className='profileInfoDesc' >{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username="john" />
                        <Rightbar user={user}/>
                    </div>
                </div>
            </div>
            
        </>
    )
}
