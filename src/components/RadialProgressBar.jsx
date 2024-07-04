import React from 'react'

export default function RadialProgressBar({progress}) {
  return (
    <svg className="w-[80px] h-[80px]" viewBox="0 0 100 100">
    <circle
      className="text-gray-200 stroke-current"
      strokeWidth="10"
      cx="50"
      cy="50"
      r="40"
      fill="transparent"
    ></circle>
    <circle
      className="text-indigo-500  progress-ring__circle stroke-current"
      strokeWidth="10"
      strokeLinecap="round"
      cx="50"
      cy="50"
      r="40"
      fill="transparent"
      strokeDasharray="251.2" 
      strokeDashoffset={`calc(251.2px - (251.2px * ${progress}) / 100)`}
    ></circle>
    
    <text x="50" y="52" fill="currentColor" fontSize="24" textAnchor="middle" alignmentBaseline="middle">{progress}%</text>

  </svg>
  )
}
