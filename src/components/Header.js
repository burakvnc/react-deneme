import React from 'react'

const Header = ({money}) => {
  return (
    <div className='header'>Harcamak için {money} TL paranız var
           <style jsx>{`
       .header{
        padding:10px;
        background:#fff;
        border:1px solid #ddd;
        width:100%;
        height:50px;
        text-align:center;
        font-size:35px;
       }
       `}</style>
       </div>
    
  )
}

export default Header