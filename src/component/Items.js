import React from 'react'

function Items({dates}) {
  return (
   <>
   {
    dates.map((date) => {
     const {id, name,age,image} = date;
     return (
     <article key={id} className='person'>
      <img src={image} alt={name} />
     <div>
      <h4>{name}</h4>
      <p>{age} years</p>
     </div>
    </article>
     );
    })}
   </>
  );
};

export default Items