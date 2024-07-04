import React from 'react'

const Tokenomics = () => {
  return (
    <div className="container">
    <div className='tokenomics'>
        <h2>Tokenomics</h2>
        <div className="tokenomicsItems">
            <div className="tokenomicsItem">
            <img src="/images/ugliDog.png" className="tokenomicsImg"  /> 
            <div className="tokenomicsInfo">
                <h3>Total Supply</h3>
                <h3>1 000 000 000</h3>
            </div>
            </div>
            <div className="tokenomicsItem">
            <img src="/images/ugliDog.png" className="tokenomicsImg"  /> 
            <div className="tokenomicsInfo">
                <h3>LP Burned</h3>
                <h3>100%</h3>
            </div>
            </div>
            <div className="tokenomicsItem">
            <img src="/images/ugliDog.png" className="tokenomicsImg"  /> 
            <div className="tokenomicsInfo">
                <h3>Tax</h3>
                <h3>0%</h3>
            </div>
            </div>
        </div>
        </div>
        </div>
  )
}

export default Tokenomics