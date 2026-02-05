const USER_LOGIN = [
  {
    name: 'email',
    label: 'Username',
    type: 'email',
    placeholder: 'Enter Username',
    rules: { required: 'Email is required!' }
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Password',
    rules: { 
      required: 'Password is required!',
      minLength: { value: 3, message: 'Password must be at least 3 characters' }
    }
  }
]
export default USER_LOGIN;