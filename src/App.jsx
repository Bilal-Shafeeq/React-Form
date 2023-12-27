// https://react-hook-form.com/get-started                //Documentation
import React, { useRef } from 'react'
import { useForm } from "react-hook-form"



const App = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmitFun = (data) => {
    console.log(data)
  }

  const password = useRef({});
  password.current = watch("password", "");

  return (
    <>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Registration Form
              </h2>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit(onSubmitFun)}>
              <input type="hidden" name="remember" defaultValue="True" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div style={{ marginBottom: "15px" }}>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input id="name" type="text" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name"
                    {...register("name")}
                  />
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input id="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email"
                    {...register("email")}
                  />
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <label htmlFor="password" className="sr-only">Password</label>
                  <input id="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" 
                  {...register("password", {
                    required: "This field is required",
                    minLength: {
                      value: 6,
                      message: "Password must have at least 6 characters"
                    }
                  })}{...register("password")}
                  />
                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                  <input id="confirm-password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm Password" 
                  {...register("confirmPassword", {
                    validate: (value) =>
                      value === password.current || "The passwords do not match"
                  })}
                  />
                {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword.message}</p>}
                  
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <label htmlFor="phone" className="sr-only">Phone Number</label>
                  <input id="phone" name="phone" type="tel" autoComplete="phone" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Phone Number"
                    {...register("mobNumber")}
                  />
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <label htmlFor="address" className="sr-only">Address</label>
                  <input id="address" type="text" autoComplete="address" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Address" 
                  {...register("address")}
                  />
                </div>
              </div>
              <div>
                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 16v-4m0 0v-4m0 4h4m-4 0H8"></path>
                    </svg>
                  </span>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
    </>
  )
}

export default App


