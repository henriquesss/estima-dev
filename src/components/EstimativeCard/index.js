import React from 'react';

function EstimativeCard() {
  return (
    <div className='border-2 p-4 rounded w-[400px] m-2'>
        <h1 className='font-semibold'>Gráfico de foguete estilo crash game da Blaze</h1>
        <br/>
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis sunt debitis reprehenderit sequi quis quo blanditiis sed consequatur, incidunt doloribus...</h1>
        <br/>
        <h1><span className='font-semibold'>Estimativa:</span> 1 ano</h1>
        <h1><span className='font-semibold'>Tecnologias:</span> HTML Canvas, Vue, Nuxt</h1>
        <br />
        <button className='text-[#0070f3] underline'>Veja mais </button>
    </div>
  );
}

export default EstimativeCard;