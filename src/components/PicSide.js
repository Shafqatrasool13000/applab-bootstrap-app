import React from 'react'

const PicSide = (props) => {
    return (<img src={props.img} className={`img-fluid ${props.class}`} alt="features" width={props.width} />
    )
}
export default PicSide