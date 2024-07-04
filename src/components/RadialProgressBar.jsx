import React from 'react'

export default function RadialProgressBar({progress}) {
  return (
    <svg class="w-[90px] h-[90px]" viewBox="0 0 100 100">
    <circle
      className="text-gray-200 stroke-current"
      stroke-width="10"
      cx="50"
      cy="50"
      r="40"
      fill="transparent"
    ></circle>
    <circle
      className="text-indigo-500  progress-ring__circle stroke-current"
      stroke-width="10"
      stroke-linecap="round"
      cx="50"
      cy="50"
      r="40"
      fill="transparent"
      stroke-dasharray="251.2" 
      stroke-dashoffset={`calc(251.2px - (251.2px * ${progress}) / 100)`}
    ></circle>
    
    <text x="50" y="50" font-size="24" text-anchor="middle" alignment-baseline="middle">{progress}%</text>

  </svg>
  )
}
