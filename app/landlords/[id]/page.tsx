import Image from 'next/image'
import React from 'react'

const LandlordDetailPage = () => {
    return (
        <main className='max-w-[1500px] mx-auto px-6 pb-6'>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <aside className="col-span-1 mb-4">
                    <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">
                        <Image
                            src={"/landlord-profile.jpg"}
                            alt='profile image'
                            width={200}
                            height={200}
                            className='rounded-full'
                        />

                        <h1 className="mt-6 text-xl">
                            Landlord name
                        </h1>
                    </div>
                </aside>

                <div className="col-span-3 pl-0 md:pl-6">
                    properties
                </div>
            </div>
        </main>
    )
}

export default LandlordDetailPage