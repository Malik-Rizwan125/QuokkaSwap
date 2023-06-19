
import React from 'react'
import WalletComponent from '../components/accountPageComponents/WalletComponent'
import LeftMenuBar from '../components/accountPageComponents/LeftMenuBar'

export default function Staking() {
  return (
    <>
   <div className="container mx-auto main_content">
        <section className="account_section py-16 min-h-screen">
<LeftMenuBar/>         
                 <WalletComponent />
</section>
</div>
    </>

  )
}
