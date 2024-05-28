import React, { useState } from 'react';
import QuestionCard from './QuestionCard';

function Main({content, fu}) {
    const {id, title, links} = content
    console.log(content)
    const [selected, setSelected] = useState(0);



    const handleClick = (id) => {
        setSelected(id);
    };



    return (
        <div className='max-w-[800px] mx-auto py-8'>
            <div className='flex gap-3 items-center'>
                <div className='text-white font-extrabold px-5 py-2.5 text-lg bg-blue-600 rounded-lg'>{id}</div>
                <p className='text-xl'>{title}</p>
            </div>
            <div className='ml-14 pt-6 flex flex-col gap-2'>
                {links.map(link => (
                    <QuestionCard
                        key={link.id}
                        title={link.title}
                        onClick={() => handleClick(link.id)}
                        sel={selected === link.id ? 1 : 0}
                    />
                ))}
            </div>
            <div className='flex justify-end py-4'>
                <button onClick={() => fu(id)} disabled={selected === 0} className='bg-blue-600 text-white px-5 py-2 rounded-lg'>Submit</button>
            </div>
        </div>
    );
}

export default Main;
 