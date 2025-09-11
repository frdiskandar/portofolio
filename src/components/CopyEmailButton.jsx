import React, { useState } from 'react'
import { motion as M } from 'motion/react'
const CopyEmailButton = () => {
    const [copied, setCopied] = useState(false)
    const email = 'fariditb159@gmail.com'

    const copyToClipBoard = () => {
        navigator.clipboard.writeText(email)
        setCopied(true)

        setTimeout(() => {
            setCopied(false)
        }, 3000)
    }

    return (
        <M.button
        whileHover={{y: -5}}
        whileTap={{scale:1.05}}
        onClick={copyToClipBoard} className='relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden'>
            {copied ? (<M.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1.0, ease: "easeInOut" }}
                className="flex items-center justify-center gap-2">
                <img src="assets/copy-done.svg" alt="copy" className='w-5' />
                Copied
            </M.p>) : (<M.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1.0, ease: "easeInOut" }}
                className="flex items-center justify-center gap-2">
                <img src="assets/copy.svg" alt="copy" className='w-5' />
                Copy Email Address
            </M.p>)}
        </M.button>
    )
}

export default CopyEmailButton