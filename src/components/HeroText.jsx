import React from 'react'
import { FlipWords } from './FlipWords'
import { motion as M } from 'motion/react'


const HeroText = () => {
    const words = ["Secure", "Modern", "Scalable"]
    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    }
    return (
        <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'>
            {/* desktop view */}
            <div className="flex-col hidden md:flex c-space">
                <M.h1 className='text-4xl font-medium'
                    variants={variants}
                    initial='hidden'
                    animate='visible'
                    transition={{ delay: 1 }}
                >Hi I'm Faried Iskandar</M.h1>
                <M.div className="flex flex-col items-start"
                    variants={variants}
                    initial='hidden'
                    animate='visible'
                    transition={{ delay: 1.2 }}>
                    <M.p className='text-5xl font-medium text-neutral-300'
                        variants={variants}
                        initial='hidden'
                        animate='visible'
                        transition={{ delay: 1.5 }}>A Developer <br /> Dedicate to Crafting</M.p>
                    <M.div
                        variants={variants}
                        initial='hidden'
                        animate='visible'
                        transition={{ delay: 1.5 }}
                    ><FlipWords words={words} className={"font-black text-white text-8xl"} /></M.div>
                    <M.p className='text-6xl font-medium text-neutral-300'
                        variants={variants}
                        initial='hidden'
                        animate='visible'
                        transition={{ delay: 1.8 }}>Web Solution</M.p>
                </M.div>
            </div  >
            {/* mobile view */}
            <div className="flex-col flex space-y-6 md:hidden">
                <M.p className="text-4xl font-medium"
                    variants={variants}
                    initial='hidden'
                    animate='visible'
                    transition={{ delay: 1 }}>Hi, I'm Faried</M.p>
                <div > 
                    <M.p className='text-5xl font-black text-neutral-300'
                        variants={variants}
                        initial='hidden'
                        animate='visible'
                        transition={{ delay: 1.2 }}>Building</M.p>
                    <M.div
                        variants={variants}
                        initial='hidden'
                        animate='visible'
                        transition={{ delay: 1.5 }}><FlipWords words={words} className={'font-bold text-white text-7xl'} /></M.div>
                    <M.p className='text-4xl font-black text-neutral-300'
                        variants={variants}
                        initial='hidden'
                        animate='visible'
                        transition={{ delay: 1.8}}>Webaplication</M.p>
                </div>
            </div>
        </div>
    )
}

export default HeroText