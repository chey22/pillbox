import React, { } from 'react'
import { Nav } from 'react-bootstrap'

let Title = (props) => {
    return (
        <h5 className="my-auto mr-3">
            <Nav.Link href={props.content1} className="bg-dark rounded text-light my-1">
                {props.content2}
            </Nav.Link>
        </h5>
    )
}

export default Title