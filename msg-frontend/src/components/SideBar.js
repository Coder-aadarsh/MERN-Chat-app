import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

function SideBar() {
    const rooms = ['first room', 'second room', 'third room']
  return (
    <>
    <h2>Available Rooms</h2>
    <ListGroup>
        {rooms.map((room, idx)=>(
            <ListGroupItem key={idx}>{room}</ListGroupItem>
        ))}
    </ListGroup>
    <h2>Members</h2>
    </>
  )
}

export default SideBar