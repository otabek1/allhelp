import React from 'react'
import SignIn from '../components/SignIn'
import Carousel from '../components/Carousel'

function Home() {
    return (
        <div>
            <div className='grid grid-cols-2 flex bg-[url("./assets/images/allhelpBackground.png")] h-screen w-screen bg-cover bg-no-repeat'>
                <div className='pt-24 pl-20'>
                    <div className='text-8xl font-bold text-[#211C70]'>Got Hope ...</div>
                    <div className='pl-5 font-medium text-3xl text-[#6B67AA]'>is here</div>
                </div>
                <div className='flex pt-24 justify-end'>
                    <SignIn />
                </div>
            </div>
            <Carousel />
        </div>
    )
}

export default Home