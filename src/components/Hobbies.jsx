import React from 'react'

export default function Hobbies() {
    const loisirs = ["Sport","Musique","Voyages","Informatique"]
  return (
    <div>
      <div className="h-full w-4/5 m-6 mt-0">
        <h2 className="font-bold text-3xl mb-5 border-2 border-black rounded-3xl text-center">
          Loisirs
        </h2>
        <ul className="">
          {loisirs.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </div>
  )
}
