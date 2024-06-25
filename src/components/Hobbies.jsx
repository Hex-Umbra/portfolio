import React from 'react'

export default function Hobbies() {
    const loisirs = ["Sport","Musique","Voyages","Informatique"]
  return (
      <div className="mx-3 my-5 border-white border-2 rounded-3xl">
        <h2 className="font-bold text-3xl mb-5 border-2 border-white rounded-3xl text-center">
          Loisirs
        </h2>
        <ul className="px-6 mb-5 flex gap-5 justify-center">
          {loisirs.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
  )
}
