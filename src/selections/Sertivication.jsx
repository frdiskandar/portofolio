import React from 'react'
import { Loader } from '@react-three/drei'
import { Suspense } from 'react'

const SertivicateComponent = React.lazy(() => import('../components/marque'))

const Sertivication = () => {
    return (
        <Suspense fallback={<Loader/>}>
            <SertivicateComponent />
        </Suspense>

    )
}

export default Sertivication