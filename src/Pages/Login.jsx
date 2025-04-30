
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../services/supabase'
import Auth from '../component/Auth'


export const Login = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) navigate('/note')
    }

    checkSession()
  }, [navigate])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <svg className="mx-auto h-12 w-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome to Notes App
          </h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Securely access your notes from anywhere
          </p>
        </div>

        <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Auth />
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a 
              href="#" 
              className="font-medium text-green-600 hover:text-green-500"
              onClick={(e) => {
                e.preventDefault();
                navigate('/signup'); // Add this route if you have signup functionality
              }}
            >
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login