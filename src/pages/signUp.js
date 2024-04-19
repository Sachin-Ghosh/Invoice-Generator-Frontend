

// pages/signup.js
import Head from 'next/head';
import { useState } from 'react';
import { myFetch } from '@/utils/myFetch';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';    
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css'


const Signup = () => {
    const router = useRouter();
    const [email, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [role, setRole] = useState('User');
  const [error, setError] = useState('');
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));console.log(formData)
//   };
const handleChange = (e) => {
  const { name, value } = e.target || e;
  console.log(name, value);
      // Update state according to input name
    switch (name) {
      case 'email':
        setUserEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      case 'phoneNumber':
        setPhoneNumber(value);
        break;
      case 'companyName':
        setCompanyName(value);
        break;
      case 'role':
        setRole(value);
        break;
      default:
        break;
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    let url = `${process.env.API_URL}api/users/create-user`;
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!phoneNumber) {
      setError('Phone number is required');
      return;
  }


    try {
        // let data = await myFetch(url, 'POST', formData);
  const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password,
          phoneNumber,
          companyName, role })
      });
    
    //   console.log('SignUp successful:', data);
    //   signUp(data);

      if (response.ok) {
        const data = await response.json();
        router.push('/login');
        console.log(data.message); // Do something after successful signup
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    // <div className="flex justify-center items-center h-screen bg-cover bg-center">
    //   <div className="p-8 rounded-lg shadow-lg">
    //     <h1 className="text-3xl font-semibold mb-4">Sign Up</h1>
    //     <input
    //       type="text"
    //       name="email"
    //       placeholder="Email"
    //       value={email}
    //       onChange={handleChange}
    //       className="w-full px-3 py-2 mb-3 border rounded-md focus:outline-none"
    //     />
    //     <input
    //       type="password"
    //       name="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={handleChange}
    //       className="w-full px-3 py-2 mb-3 borderrounded-md focus:outline-none"
    //     />
    //     <input
    //       type="password"
    //       name="confirmPassword"
    //       placeholder="Confirm Password"
    //       value={confirmPassword}
    //       onChange={handleChange}
    //       className="w-full px-3 py-2 mb-3 border rounded-md focus:outline-none"
    //     />
    //     <button
    //       onClick={handleSignup}
    //       className="w-full px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
    //     >
    //       Signup
    //     </button>
    //     {error && <p className="text-red-500 mt-2">{error}</p>}
    //   </div>
    // </div>
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url(https://www.storeplan.net.au/wp-content/uploads/2017/04/Pallet-Racking-in-Sydney_edited_website.jpg)",
          filter: "blur(8px)",
        }}
      ></div>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl text-gray-700 font-extrabold ">
                Sign up
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSignup}>
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div className="flex items-center w-full">
                  {/* <label htmlFor="phoneNumber" className="sr-only">
                    Phone Number
                  </label> */}
                
                  <div className="flex flex-col w-full">  
                  <PhoneInput
                    // id="phoneNumber"
                    defaultCountry="IN"
                    name="phoneNumber"
                    required
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={(value) => setPhoneNumber(value)}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 

                    error={ phoneNumber ? (isValidPhoneNumber(phoneNumber) ? undefined : 'Invalid phone number') : 'Phone number required'}
                  />
                   
                  </div>
                </div>
                <div>
                  <label htmlFor="companyName" className="sr-only">
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    autoComplete="companyName"
                    required
                    value={companyName}
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Company Name"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="sr-only">
                    Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    onChange={handleChange}
                    value={role}
                  >
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="sr-only">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={confirmPassword}
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-2-6a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Sign up
                </button>
              </div>
            </form>
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
