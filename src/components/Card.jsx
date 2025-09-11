import React from 'react'
import { motion as M } from 'motion/react'

const Card = ({ text, style, image, containerRef }) => {

    return image && !text ? (
        <M.img 
        className='absolute w-15 cursor-grab'
        src={image}
        style={style}
        whileHover={{scale:1.05}}
        drag
        dragConstraints={containerRef}
        >
        </M.img>) : (
        <M.div
            whileHover={{scale:1.05}}
            drag
            dragConstraints={containerRef}
            style={style}
            className='absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab'>
            {text}
        </M.div>
    )
}

export default Card