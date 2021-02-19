import React, {Fragment} from 'react'

import Navbar from './Navbar'

function Layaut(props) {
    return (
        <Fragment>
            <Navbar/>
            {props.children} 
        </Fragment>
    )
}


export default Layaut

