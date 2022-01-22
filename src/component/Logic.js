import React from 'react';


function Logic() {
    const [count, setCount]= React.useState(0)
  return (
      <div className='row my-5'>
          <div className='col-md-6 mx-auto text-center'>
            <h1 className=''>Logic</h1>
            <p className='my-3'>You clicked me {count}</p>
            <button className='btn btn-primary' onClick={()=> setCount(count+1)}>
            click here
            </button>
          </div>
      </div>
  )
}

export default Logic;