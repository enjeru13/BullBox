import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext.jsx'
import { useNavigate, Link } from 'react-router-dom'

function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const { signIn, isAuthenticated, errors: singInErrors } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate('/profile')
  }, [isAuthenticated, navigate])

  const onSubmit = handleSubmit(async (values) => {
    signIn(values)
  })
  return (
    <div>
      <div className='bg-dark'>
        <div className='vh-100 d-flex align-items-center justify-content-center'>
          <div className='w-100'>
            <div className='col'>

              {
                singInErrors.map((error, i) => (
                  <div className='bg-danger text-center p-2 text-white m-2' key={i}>
                    {error}
                  </div>
                ))
              }

              <div className='text-warning text-center'><h2 className=''>Inicia Sesion</h2></div>
              <form onSubmit={onSubmit} className='d-flex flex-column align-items-center mt-3'>
                <div className='mb-3'>
                  <input type="text" className='form-control' placeholder='nombre de usuario'  {...register('username', { required: true })} />
                  {errors.username && <p className='text-danger'>El usuario es obligatorio</p>}
                </div>
                <div className='mb-3'>
                  <input type="password" className='form-control' placeholder='contraseña' {...register('password', { required: true })} />
                  {errors.password && <p className='text-danger'>La constraseña es obligatoria</p>}
                </div>
                <button type='submit' className='m-1 btn btn-warning fw-bold'>
                  Iniciar Sesion
                </button>
                <p className='flex justify-between text-white m-3 '>No tienes una cuenta aun? <Link to="/register" className='text-info'> Registrate! </Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
