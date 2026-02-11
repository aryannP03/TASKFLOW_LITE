const USER_SIGNUP = [
    {
    name: 'username',
    label: 'User name',
    type: 'text',
    placeholder: 'Enter Username',
    rules: { required: 'Username is required!' }
  },
  {
    name: 'email',
    label: 'Email ',
    type: 'email',
    placeholder: 'Enter your email',
    rules: { required: 'Email is required!' }
  },
  {
    name: 'phone',
    label: 'Phone No.',
    type: 'tel',
    placeholder: 'Phone No.',
    rules: { 
      required: 'Phone No. is required!',
      minLength: { value: 10, message: 'Invalid No.' }
    }
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
  },
  {
    name: "above18",
    label: "I confirm that I am 18 years or older and legally allowed to participate in online gaming.",
    type: "checkbox",
    rules: {
        required: "You must be above 18"
    }
  }

]

export default USER_SIGNUP