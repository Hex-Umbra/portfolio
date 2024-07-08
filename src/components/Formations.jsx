import React from 'react'
import InfoFormations from './InfoFormations'
import InfoExperiences from './InfoExperiences'

export default function Formations() {
  return (
    <section className="h-auto bg-[#79261d] md:my-10 shadow-2xl shadow-black md:rounded-2xl md:mx-4">
        <div className="grid md:grid-cols-2 justify-items-center h-full relative">
            <div className="w-full"><InfoFormations/></div>
            <div className="w-full"><InfoExperiences/></div>
        </div>
    </section>
  )
}
