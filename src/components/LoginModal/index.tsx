import React from 'react'
import { FormGroup, Label, Input, Button } from 'reactstrap'
import { AiFillEye, AiFillEyeInvisible, AiOutlineClose } from 'react-icons/ai'
import { useActions } from './useActions'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { Profile } from '../../store/slice/Profile/profileSlice'
import { signup } from '../../store/slice/Auth/authSlice'

const LoginModal = () => {
  const [{ state }, { login, onChange, resetState }] = useActions()

  const dispatch = useAppDispatch()
  const auth = useAppSelector(state => state.auth)
  const profile: Profile = useAppSelector(state => state.profile)

  console.log(state);


  return (
    <>
      {
        auth?.isOpen ?

          <div className="d-flex justify-content-center text-black align-items-center modal bg-dark bg-opacity-75" tabIndex={10} role="dialog">
            <div className="modal-dialog w-100 h-75" role="document">
              <div className="modal-content w-100 h-75">
                <div className="modal-header">
                  <h5 className="modal-title text-black">Login Session</h5>
                  <button
                    onClick={() => {
                      dispatch(signup({ data: { isLogin: auth?.isLogin, isOpen: false } }))
                      resetState()
                    }}
                    className="border-0 bg-transparent" >
                    <AiOutlineClose color='black' size={20} />
                  </button>
                </div>
                <div className="modal-body">
                  <form action="" /* onSubmit={handleSubmit} */>
                    <FormGroup>
                      <Label>Email</Label>
                      <Input
                        type='text'
                        placeholder='Write the User Name'
                        value={state?.userName}
                        onChange={({ target: { value } }) => onChange('userName', value)}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label>Password</Label>
                      <div className='w-100 d-flex align-items-center'>
                        <Input
                          className='w-100 me-3'
                          value={state?.password}
                          type={state?.visible ? 'text' : 'password'}
                          placeholder='Write the Password'
                          onChange={({ target: { value } }) => onChange('password', value)}
                        />
                        {
                          state?.visible ?
                            <AiFillEye size={30}
                              onClick={() =>
                                onChange('visible', false)
                              }
                            />
                            :
                            <AiFillEyeInvisible size={30}
                              onClick={() =>
                                onChange('visible', true)
                              }
                            />
                        }
                      </div>
                    </FormGroup>

                    <FormGroup className='text-center mt-5'>
                      <Button
                        onClick={() => login({ id: profile.id, userName: state?.userName, password: state?.password })}
                        disabled={state?.password.length && state?.userName?.length ? false : true}
                        className={`w-50 ${state?.password.length && state?.userName?.length ? 'btn-info text-white' : ""}`}
                      >
                        Login
                      </Button>
                    </FormGroup>
                  </form>
                </div>
              </div>
            </div>
          </div>
          : null
      }
    </>
  )
}

export default LoginModal