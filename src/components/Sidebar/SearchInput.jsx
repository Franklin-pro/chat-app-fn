import React from 'react'
import { FaSearch } from "react-icons/fa";
const SearchInput = () => {
  return (
  <form className='flex items-center gap-2'>
    <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />
    <button className='btn btn-circle bg-slate-500 border-slate-500'>
        <FaSearch />
    </button>
  </form>
  )
}

export default SearchInput

// STATER CODE FOR SEARCH INPUT 
// import React from 'react'
// import { FaSearch } from "react-icons/fa";
// const SearchInput = () => {
//   return (
//   <form className='flex items-center gap-2'>
//     <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />
//     <button className='btn btn-circle bg-slate-500 border-slate-500'>
//         <FaSearch />
//     </button>
//   </form>
//   )
// }

// export default SearchInput