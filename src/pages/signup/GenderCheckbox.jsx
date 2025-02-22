import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex'>
<div className='form-control'>
    <label className='cursor-pointer label gap-2'>
        <span className='label-text'>Male</span>
        <input type="checkbox" defaultChecked className="checkbox checkbox-xs" />
    </label>
</div>
<div className='form-control'>
    <label className='cursor-pointer label gap-2'>
        <span className='label-text'>Female</span>
        <input type="checkbox" className="checkbox checkbox-xs" />
    </label>

</div>
    </div>
  )
}

export default GenderCheckbox

// STARTER CODE FOR CHECKBOX
// import React from 'react'

// const GenderCheckbox = () => {
//   return (
//     <div className='flex'>
// <div className='form-control'>
//     <label className='cursor-pointer label gap-2'>
//         <span className='label-text'>Male</span>
//         <input type="checkbox" defaultChecked className="checkbox checkbox-xs" />
//     </label>
// </div>
// <div className='form-control'>
//     <label className='cursor-pointer label gap-2'>
//         <span className='label-text'>Female</span>
//         <input type="checkbox" className="checkbox checkbox-xs" />
//     </label>

// </div>
//     </div>
//   )
// }

// export default GenderCheckbox