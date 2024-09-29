import React from 'react'

function ListItems() {
    const categories = [
        "All", "Data Structure", "Apple", "Cricket", "College", "Songs", "Videos", "Learning", "Cricket", "College", "Songs", "Videos", "Learning", "Cricket", "College", "Songs", "Videos", "Learning"
    ];
    return (
        <div className='flex overflow-x-scroll hide-scroll-bar px-3 scrollbar-none'>
            <div className='flex space-x-4 flex-nowrap mb-2'>
                {categories.map((category) => {
                    return (
                        <div key={category} className='flex-none bg-gray-200 hover:bg-gray-300 duration-200 rounded-xl px-4 py-2 font-medium text-gray-700'>
                            {category}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListItems;