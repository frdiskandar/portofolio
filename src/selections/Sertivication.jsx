import React from 'react'
import { Loader } from '@react-three/drei'
import { Suspense } from 'react'

const SertivicateComponent = React.lazy(() => import('../components/marque'))

const Sertivication = () => {
    return (
        <section className='my-20'>
            <Suspense fallback={<Loader />}>
                <SertivicateComponent />
            </Suspense>
        </section>

    )
}

export default Sertivication