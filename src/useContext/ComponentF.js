import React from 'react'
import {UserContext,ChannelContext} from '../App'
export default function ComponentF() {
  return (
    <div>
      <UserContext>
        {user=>{
            return (
              <ChannelContext.Consumer>
                {channel=>{
                  return <h1>Component F: User: {user}, Channel: {channel}</h1>
                }}
              </ChannelContext.Consumer>
            )
  
        }}
      </UserContext>
    </div>
  )
}
