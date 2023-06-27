import React from 'react'
import PriceCard from '../pricing/PriceCard'
import Title from '../common/title/Title'

const HPrice = () => {
  return (
    <>
        <section className="hprice padding">
            <Title subtitle='our pricing' title='pricing & packages'/>
            <div className="container price grid">
                <PriceCard/>
            </div>
        </section>
    </>
  )
}

export default HPrice