import * as React from 'react'

export const PlaygroundLayout: React.FunctionComponent = ({ children }) => (
    <div className="flex items-center h-screen bg-gray-200">
        <div className="flex items-center max-w-md p-8 mx-auto bg-white shadow-xl">{children}</div>
    </div>
)
