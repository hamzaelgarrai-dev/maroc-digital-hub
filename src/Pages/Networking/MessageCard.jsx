import React from 'react'
import { User } from "lucide-react"

function MessageCard({ name, role, message }) {
  return (
     <div className="flex items-start bg-white border border-gray-300 rounded-md shadow-sm p-4 w-[980px]">
      
      <div className="flex flex-col items-center justify-start w-[150px] border-r border-gray-200 pr-4">
        <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center mb-2">
          <User className="text-gray-600 w-5 h-5" />
        </div>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-gray-500">{role}</p>
      </div>

      
      <div className="pl-6">
        <p className="text-sm text-gray-700 leading-relaxed">
          {message}
        </p>
      </div>
    </div>
  )
}

export default MessageCard