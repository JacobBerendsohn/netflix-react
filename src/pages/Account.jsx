import React from 'react'

const Account = () => {
    return (
        <>
            <div className='w-full text-white'>
                <img className='absolute w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/2265eafd-f6db-443e-8fcd-70a0bf78c406/US-en-20220822-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="/" />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
                <div className='absolute top-[20%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
                </div>
            </div>
        </>
    )
}

export default Account