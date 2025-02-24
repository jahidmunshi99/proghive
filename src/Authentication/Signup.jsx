import React, { useContext, useRef } from 'react'
import { Link } from 'react-router'
import { authContext } from './AuthProvider'
import { FcGoogle } from 'react-icons/fc'



const SignUp = () => {

  const formRef = useRef(null)
  const { signUpwithEmail, signUpWithGoogle, error, setLoading, loading, setError, showPass, setShowPass,} = useContext(authContext)

  const handleSignUp = (e)=>{
    e.preventDefault()
    const form = formRef.current
    const email = e.target.email.value
    const name = e.target.name.value
    const photoURL = e.target.photoURL.value
    const password = e.target.password.value

    setLoading('')

    if( !email) return setError('You Must Provide Email.')
    if( !name) return setError('You Must Provide Name.')
    if( !photoURL) return setError('You Must Provide Photo Url.')
    if( !password) return setError('You Must Provide password.')

    const allField = {
      form,
      email,
      name,
      photoURL,
      password
    }

    setLoading('')
    setError('')
    signUpwithEmail(allField)
  }


  return (
    <>
    { loading && <div>{loading}</div>}
      <div className="flex items-center justify-center bg-gray-900 min-h-screen py-10">
        <div className="bg-white shadow-lg rounded-lg p-8 w-md">
          <h2 className="text-2xl font-bold mb-6 text-[#EF4444] text-center">Create your Account</h2>

          <form ref={formRef} onSubmit={handleSignUp}>
            <div className="">
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="name@company.com"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g. Bonnie Green"
                />
              </div>
            </div>

            <div className="mb-4">
              <div className="">
                <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
                  Photo
                </label>
                <input
                  type="text"
                  id="photoURL"
                  name="photoURL"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Photo URL"
                />
              </div>

              <div className="my-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type={ !showPass ? "password" : 'text'}                
                  name="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="••••••••"
                  
                />
              </div>
              {/* Show Password */}
              <div className="my-2 flex">
                <input onClick={ ()=> setShowPass( !showPass )} className='mr-2' name='showpass' id='showpass' type="checkbox" />
                <label htmlFor="showpass" className="block text-sm font-medium text-gray-700 cursor-pointer">
                  Show Password
                </label>
              </div>            
            </div>
            <div className="my-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="terms"
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2 text-sm text-gray-600">
                  By signing up, you agree to Flowbite's Terms of Use and Privacy Policy.
                </span>
              </label>
            </div>

            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="updates"
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2 text-sm text-gray-600">
                  Email me about product updates and resources.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="bg-[#EF4444] py-2 w-full hover:bg-red-600 font-normal text-white border-none rounded-sm"
            >
              Create an account
            </button>

            {
              error && <p className='text-red-500'>{error}</p>
            }

            <div className="divider text-center my-3">OR</div>

            {/* Google and Apple Sign-Up */}
            <div className="flex flex-col gap-4 mb-4">
              <button              
                type="button"
                onClick={ ()=> signUpWithGoogle() }
                className="w-full flex justify-center items-center gap-2 px-4 py-2 cursor-pointer border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-100"
              >
                <FcGoogle className="text-xl" /> 
                Sign up with Google
              </button>
            </div>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link              
              to="/signin" className="font-bold hover:underline text-[#EF4444]">
              Login here
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  )
}

export default SignUp