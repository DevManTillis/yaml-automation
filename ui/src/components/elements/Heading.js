import React from 'react'

const Heading = ({ label, right }) => {
    return (
        <div className="flex px-4 py-2 m-2">
            <h1 className="font-semibold text-2xl">{label}</h1>
            <div className="flex-grow text-right">
              {right}
            </div>
        </div>
    )
}

export default Heading
