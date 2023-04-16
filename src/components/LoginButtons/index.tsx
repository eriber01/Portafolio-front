import { Button } from 'reactstrap'
import { useAppDispatch, useAppSelector } from '../../store/store';
import { toggle } from '../../store/slice/Auth/authSlice';

const LoginButtons = () => {

  const auth = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div>
        {
          !auth.isLogin ? <Button
            onClick={() => {
              dispatch(toggle({ data: { isLogin: auth.isLogin, isOpen: true } }))
            }}
            className='btn btn-success w-100'
          >
            Login
          </Button>
            : null
        }

        {
          auth.isLogin ?
            <Button
              onClick={() => {
                sessionStorage.removeItem('token')
                dispatch(toggle({ data: { isLogin: false, isOpen: false } }))
              }}
              className='btn btn btn-danger w-100'
            >
              Logout
            </Button> : null
        }

      </div>
    </div>
  )
}

export default LoginButtons