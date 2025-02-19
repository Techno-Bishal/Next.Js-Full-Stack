"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

function Hello() {
 const {data : session} = useSession()
 if(session){
  return (
    <>
    <Image src ={session.user?.image || "Mero profile.png"} alt= "user image" width={80} height={80}/> 
    <h1>Welcome, {session.user?.name}</h1>
    <h3>{session.user?.email}</h3>
    <button onClick={()=>signOut()}>Signout</button>
    </>
  )
 }

  return (
    <div>
      <h1>Not logged In ?</h1>
      <button onClick={()=>signIn("google")}>Sign in with Google</button>
    </div>
  );
}

export default Hello;
