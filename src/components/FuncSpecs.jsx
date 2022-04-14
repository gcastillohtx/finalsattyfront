import React from 'react'
import './FuncSpecs.css'

function FuncSpecs() {
  return (
    <div className='funcspecs'>
        <div className='specs-container'>
            <div className='specs-card'>
                <h2>Indoor Stage</h2>
                <span className='bar'></span>
                <h3>-Sound System-</h3>
                <p>2 QSC KW153</p>
                <p>2 EAW EP-1 Subs 1800W</p>
                <p>4 QSC KW HPR 112 Monitors</p>
                <p>1 Shure Total Mic Package</p>
                <p>12 LED Par Cans w/Truss</p>
                <p>Behringer x32</p>
                <h3>Capacity: 250</h3>
        </div>
        <div className='specs-card'>
                <h2>Outdoor Stage</h2>
                <span className='bar'></span>
                <h3>-Sound System-</h3>
                <p>4 EAW SB850</p>
                <p>8 Electro Voice XLD Line Array</p>
                <p>5 QSC KW HPR 112 Monitors</p>
                <p>1 Shure Total Mic Package</p>
                <p>12 LED Par Cans w/Truss</p>
                <p>Behringer x32</p>
                <h3> Capacity: 900</h3>
        </div>
        <div className='specs-card'>
                <h2>Food And Bev</h2>
                <span className='bar'></span>
                <h3>-Rotating Food Vendors-</h3>
                <p>Taocs Bomberos</p>
                <p>Umbrella Fellas</p>
                <p>Indoor Bar</p>
                <p>Outdoor Bar</p>
        </div>

    </div>
</div>
  )
}

export default FuncSpecs