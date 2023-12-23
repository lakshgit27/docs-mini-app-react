import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"

const Card = ({data}) => {
  return (
    <motion.div drag  className='w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white py-10 px-8 relative overflow-hidden'>
        <FaFileAlt />
        <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
        <div className='footer w-full   bottom-0 left-0 absolute'>
            <div className='flex items-center px-8 py-3 justify-between mb-5' >
                 <h5>{data.filesize}</h5>
                 <span className='w-5 h-5 bg-sky-200 rounded-full flex items-center justify-center'>
                    {data.close ? <IoIosCloseCircle />: <MdFileDownload size="0.8em" color='#000' />}
                 

                 </span>
                
            </div>
            {
                data.tag.isOpen ? (
                    <div className={`tag w-full py-4  ${data.tag.tagColor==="blue" ? "bg-blue-600":"bg-green-600"} 0 flex items-center justify-center`}>
                    <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>
                ): null
            }
           

        </div>
       
        



    </motion.div>
  )
}

export default Card