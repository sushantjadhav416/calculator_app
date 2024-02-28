import React from 'react'

const Logo = () => {
  return (
    <div className="logo_section">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="logo"><a ><img src={require('../IMAGES/logo.png')}/></a></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Logo
