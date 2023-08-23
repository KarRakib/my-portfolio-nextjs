

import Home from '../Home/Home';
const getWhy = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/features', {
          cache: "no-store"
        });
        if (!res.ok) {
          throw new Error('Faild to  Faild')
        }
        return await res.json()
      } catch (error) {
    
      }
}

const Whyes = async () => {
    const  {features}  = await getWhy();
    console.log('feacture', features);

    return (
        <div className='py-10 md:w-[1200px] lg:w-[1600px] mx-auto mb-4 '>
            <h4 className='text-start text-white mb-2'>Features</h4>
            <h1 className='text-5xl text-white font-bold text-start '>What I Do</h1>
          <Home features={features}/>


        </div>
    );
};

export default Whyes;