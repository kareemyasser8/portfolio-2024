import React, { MutableRefObject } from 'react'
import './preLoader.css';
import { KYLogo } from '../svgs';

interface Props{
    ref: MutableRefObject<null>
}

const PreLoader = ({ref}: Props) => {
  return (
    <div className="loader-container" ref={ref}>
        <div className="loaderr">
            <KYLogo/>
        </div>
    </div>
  )
}

export default PreLoader