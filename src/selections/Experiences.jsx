import React from 'react'
import { Timeline } from '../components/Timeline'
import { experiences } from '../constants/data'

const Experiences = () => {
    return (
        <section className='w-full'>
            <Timeline data={experiences} />
        </section>
    )
}

export default Experiences