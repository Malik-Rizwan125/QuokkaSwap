import React from 'react'
import BuyTokenComp from '../components/accountPageComponents/BuyTokenComp'
import LeftMenuBar from '../components/accountPageComponents/LeftMenuBar'

export default function Buy() {
  return (
    <>
    <div className="container mx-auto main_content">
        <section className="account_section py-16 min-h-screen">
<LeftMenuBar/>   
<BuyTokenComp />      
</section>
</div>
     
    </>
  )
}
