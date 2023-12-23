import React from 'react'
import Card from './Card'


const Foreground = () => {
 
    // data jo ki chaiye - icon, desc,filesize, close or downloaad,  tagdetails
    const data=[
        { desc:"This is the background color of the card",
         filesize:".9mb",
         close:true,
        tag:{isOpen:true, tagTitle:"Download Now",tagColor:"green"}
    },
    { desc:"This is the background color of the card",
         filesize:".9mb",
         close:false,
        tag:{isOpen:true, tagTitle:"Download Now",tagColor:"green"}
    },
    { desc:"This is the background color of the card",
         filesize:".9mb",
         close:false,
        tag:{isOpen:true, tagTitle:"Download Now",tagColor:"blue"}
    },

    ]
  return (
    <>
    <div  className=' fixed top-0 left-0 z-[3]  w-full h-screen flex gap-10 p-5'>
        {data.map((item,index)=>(
                <Card data={item}  />
             )) }
       
    </div>
    </>
  )
}

export default Foreground