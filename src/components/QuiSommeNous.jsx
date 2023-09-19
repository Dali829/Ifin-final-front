import React from 'react';
import Logo from '../assets/logo.png';

const QuiSommeNous = () => {   
  return (
    <div className='w-full bg-white  px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Logo} alt='/' />
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 mb-6'>Qui sommes nous ?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuiSommeNous;
