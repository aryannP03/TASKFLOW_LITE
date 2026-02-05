const USER_UPDATE = [
    {
    name: 'fullname',
    label: 'Fullname',
    type: 'text',
    placeholder: 'Fullname',
    rules: { required: 'Username is required!' }
  },
  {
    name: 'username',
    label: 'User name',
    type: 'text',
    placeholder: 'Enter Username',
    rules: { required: 'Username is required!' }
  },
  {
    name: 'email',
    label: 'email ',
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
    name: "gender",
    label: "Gender",
    type: "select",
    options: [
      // { label: "Select gender", value: "" },
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
      { label: "Other", value: "other" }
    ],
    rules: { required: "Gender is required!" }
  },
  {
  name: "dob",
  label: "Date of Birth",
  type: "date",
  placeholder: "DD/MM/YYYY",
  rules: {
    required: "Date of Birth is required!"
    }
  },
  {
    name: 'address',
    label: 'Address',
    type: 'text',
    placeholder: 'Address',
  },
  {
    name: 'zipcode',
    label: '',
    type: 'text',
    placeholder: 'Zip Code',
  },
  {
    name: 'state',
    label: '',
    type: 'select',
    options: [
      // { label: "Select State", value: "" },
      { label: "New Delhi", value: "new-delhi" },
      { label: "MP", value: "MP" },
      { label: "UP", value: "UP" },
      { label: "other", value: "other" },
    ],
    rules: { required: "Gender is required!" }
    }


]

export default USER_UPDATE