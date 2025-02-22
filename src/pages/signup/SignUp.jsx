import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {
  
  const [input,setInput] = useState({
    fullName:'',
    username:'',
    password:'',
    confirmPassword:'',
    gender:''
  })
const {loading,signup} = useSignup()
  const handleSubmit = async(e) => {
    e.preventDefault()
  await signup(input)

  }

  const onCheckboxChange = (gender) => {
    setInput({...input, gender})
  }




  return (
    <div>
      <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full rounded-lg p-6 shadow-md bg-gray-400 bg-clip-padding
       backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-gray-300 text-center '>
          SignUp
          <span className='text-blue-500'>ChatApp</span>
        </h1>
 <form onSubmit={handleSubmit}>
 <div>
    <label className='label p-2'>
      <span className='text-base label-text'>FullName</span>
    </label>
    <input type='text' placeholder='Enter Full Name' className='w-full input input-bordered h-10'
    value={input.fullName}
    onChange={(e) => setInput({...input, fullName: e.target.value})}
     />
  </div>
  <div>
    <label className='label p-2'>
      <span className='text-base label-text'>Username</span>
    </label>
    <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10'
    value={input.username}
    onChange={(e) => setInput({...input, username: e.target.value})}
    />
  </div>
  <div>
    <label className='label p-2'>
      <span className='text-base label-text'>Password</span>
    </label>
    <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10'
    value={input.password}
    onChange={(e) => setInput({...input, password: e.target.value})}
    />
  </div>
  <div>
    <label className='label p-2'>
      <span className='text-base label-text'>Confirm Password</span>
    </label>
    <input type='password' placeholder='Confirm password' className='w-full input input-bordered h-10'
    value={input.confirmPassword}
    onChange={(e) => setInput({...input, confirmPassword: e.target.value})}
    />
  </div>
  <GenderCheckbox
  onCheckboxChange={onCheckboxChange} selectedGender={input.gender}
  />
  <Link to='/login' className='text-sm font-semibold hover:underline hover:text-blue-600 mt-2 inline-block'>
    Already have an account?
  </Link>
  <div>
    <button type='submit' className='btn btn-block btn-sm mt-2'
    disabled={loading}
    >
      {loading ? <span className='loading loading-spinner'></span> : "SignUp"}
    </button>
  </div>
 </form>
      </div>
    </div>
    </div>
  )
}

export default SignUp

// STARTER CODE FOR SIGNUP
// import React from 'react'
// import GenderCheckbox from './GenderCheckbox'

// const SignUp = () => {
//   return (
//     <div>
//       <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full rounded-lg p-6 shadow-md bg-gray-400 bg-clip-padding
//        backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-3xl font-semibold text-gray-300 text-center '>
//           SignUp
//           <span className='text-blue-500'>ChatApp</span>
//         </h1>
//  <form>
//  <div>
//     <label className='label p-2'>
//       <span className='text-base label-text'>FullName</span>
//     </label>
//     <input type='text' placeholder='Enter Full Name' className='w-full input input-bordered h-10' />
//   </div>
//   <div>
//     <label className='label p-2'>
//       <span className='text-base label-text'>Username</span>
//     </label>
//     <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
//   </div>
//   <div>
//     <label className='label p-2'>
//       <span className='text-base label-text'>Password</span>
//     </label>
//     <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10' />
//   </div>
//   <div>
//     <label className='label p-2'>
//       <span className='text-base label-text'>Confirm Password</span>
//     </label>
//     <input type='password' placeholder='Confirm password' className='w-full input input-bordered h-10' />
//   </div>
//   <GenderCheckbox/>
//   <a href='#' className='text-sm font-semibold hover:underline hover:text-blue-600 mt-2 inline-block'>
//     Already have an account?
//   </a>
//   <div>
//     <button className='btn btn-block btn-sm mt-2'>SignUp</button>
//   </div>
//  </form>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default SignUp