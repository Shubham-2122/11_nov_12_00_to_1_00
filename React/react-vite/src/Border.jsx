import React from 'react'

function Border() {
    return (
        <div>
            <h1 className='p-4 border-8 border-red-400 rounded-3xl'>hello border</h1>
            <h1 className=' border-dashed p-2 m-2 border-8 border-red-400 rounded-3xl'>hello border</h1>
            <h1 className=' border-dotted p-2 m-2 border-8 border-red-400 rounded-3xl'>hello border</h1>
            <h1 className=' border-double p-2 m-2 border-8 border-red-400 rounded-3xl'>hello border</h1>
            <h1 className=' border-dashed p-2 m-2 border-8 border-red-400 rounded-3xl'>hello border</h1>

            <div className='size-52 border mx-auto hover:bg-blue-700  shadow-2xl shadow-blue-500/50'>

            </div>

            <div className='w-[130px] h-16 bg-amber-300 mx-auto hover:bg-amber-700 hover:text-white'>
                add data
                <h1 >hello</h1>
            </div>

            <div className='selection:bg-amber-300 selection:text-white'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque magnam amet quam accusamus aliquid corrupti, doloribus expedita delectus iusto maxime autem a rerum animi quasi earum voluptatum! Beatae, excepturi non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, numquam accusantium? Saepe, veniam officia. Doloribus nihil ut error voluptates amet voluptatibus tenetur aliquid modi, molestiae perferendis saepe animi voluptatum minus?
            </div>

        </div>
    )
}

export default Border
