import React from 'react'
import RaferalsComponent from '../components/accountPageComponents/RaferalsComponent'
import LeftMenuBar from '../components/accountPageComponents/LeftMenuBar'

export default function Referals() {
  return (
    <>
      <div className="container mx-auto main_content">
        <section className="account_section py-16 min-h-screen">
<LeftMenuBar/>         
<RaferalsComponent />
</section>
</div>
        
    </>
  )
}
