import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import SidebarNew from '../Components/SidebarNew';
import Select from 'react-select';
import Button from '../Components/Button';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS

function AddStudent() {
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [course, setCourse] = useState(null);
  const [batch, setBatch] = useState(null);
  const [intake, setIntake] = useState(null);
  const [mode, setMode] = useState(null);
  const [phoneNum, setPhoneNum] = useState('');
  const [parentNum, setParentNum] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [branch, setBranch] = useState(null);
  const [admCoordinator, setAdmCoordinator] = useState('');
  const [admYear, setAdmYear] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [admissionFee, setAdmissionFee] = useState(null);
  const [utrNumber, setUtrNumber] = useState(null);

  const changeBatch = (e) => {
    setBatch(e.value);
  };

  const changeCourse = (e) => {
    setCourse(e.value);
  };

  const changeIntake = (e) => {
    setIntake(e.value);
    console.log(e.value);
  };

  const modeOptions = [
    {
      value: 'Online',
      label: 'Online',
    },
    {
      value: 'Offline',
      label: 'Offline',
    },
    {
      value: 'Correspondence',
      label: 'Correspondence',
    },
  ];

  const branchOptions = [
    {
      label: 'Kumaranellur',
      value: 'Kumaranellur',
    },
  ];
  const yearOptions = [
    {
      label: 2024,
      value: 2024,
    },
    {
      label: 2025,
      value: 2025,
    },
    {
      label: 2026,
      value: 2026,
    },
    {
      label: 2027,
      value: 2027,
    },
    {
      label: 2028,
      value: 2028,
    },
  ];

  const courseOptions = [
    {
      value: 'SSLC',
      label: 'SSLC',
    },
    {
      value: 'Plustwo',
      label: 'Plustwo',
    },
  ];

  const batchOptions = [
    {
      value: 'Science',
      label: 'Science',
    },
    {
      value: 'Commerce',
      label: 'Commerce',
    },
    {
      value: 'Humanities',
      label: 'Humanities',
    },
  ];

  const intakeOptions = [
    {
      value: 'April',
      label: 'April',
    },
    {
      value: 'September',
      label: 'September',
    },
  ];

  const addStudentHandler = () => {
    console.log('add student handler');

    if (
      !place &&
      !admYear &&
      !course &&
      !intake &&
      !mode &&
      !phoneNum &&
      !parentNum &&
      !dob &&
      !email &&
      !branch &&
      !admCoordinator &&
      !admissionFee &&
      !email &&
      !confirmEmail &&
      !utrNumber
    ) {
      console.log('test error');
      toast.error('Please fill all fields to continue');
      navigate('/add');
    } else if (email !== confirmEmail) {
      console.log('2nd test error ');
      toast.error('emails doesnt match');
    } else {
      const requestData = {
        name,
        place,
        year: admYear,
        course,
        intake,
        mode,
        phoneNumber: phoneNum,
        parentNumber: parentNum,
        dob,
        email,
        branch,
        admissionCoordinator: admCoordinator,
        admissionFee,
        utrNumber,
      };

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      axios
        .post('http://127.0.0.1:5000/api/students/nios', requestData, config)
        .then((response) => {
          const data = response.data;
          console.log(`student data ${data.name}`);

          if (data && data.message) {
            console.log(`error ${data.message}`);
            toast.error(data.message);
            return;
          } else if (data && data.name) {
            console.log(`success`);
            window.alert('student added successfully');

            // Reset all states to their initial values
            setName('');
            setPlace('');
            setCourse(null);
            setBatch(null);
            setIntake(null);
            setMode(null);
            setPhoneNum('');
            setParentNum('');
            setDob('');
            setEmail('');
            setConfirmEmail('');
            setBranch(null);
            setAdmCoordinator('');
            setAdmYear(null);
            setAdmissionFee(null);
            setUtrNumber(null);

            setTimeout(() => {
              navigate('/');
            }, 2000); // Adjust the time as needed (2000 milliseconds = 2 seconds)
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          toast.error('An error occurred while adding the student.');
        });
    }
  };

  return (
    <div className="bg-[#f0f0f0] h-screen w-screen overflow-hidden">
      <div className="h-full w-full  block md:grid md:grid-cols-7 lg:grid-cols-6 xl:grid-cols-11 2xl:grid-cols-6">
        {/* mobile screens */}
        <div className=" h-full md:hidden flex flex-col gap-3 p-4">
          <div className="h-full overflow-y-auto px-3 flex flex-col gap-3">
            <div className="flex flex-col pt-5 ">
              <h1 className="text-2xl font font-semibold">Add Student</h1>
              <h1 className="text-[#333333] text-md">
                Enter the details of the student{' '}
              </h1>
            </div>
            <div className="pt-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-white border border-white text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="John"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="place"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Place
              </label>
              <input
                type="text"
                id="place"
                className="bg-white border border-white text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="nyc"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="year"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Year
              </label>
              <Select
                options={yearOptions}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderRadius: '.5rem',
                    padding: '0.2rem',
                    borderWidth: '0px',
                    backgroundColor: 'RGB(255, 255, 255)',
                  }),
                }}
                className="border-white text-sm"
                closeMenuOnSelect={true}
                isSearchable={false}
                onChange={(e) => setAdmYear(e.value)}
                name="feeType"
                controlShouldRenderValue={
                  admYear ? true : admYear === false ? true : false
                }
              />
            </div>
            <div>
              <label
                htmlFor="course"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Course
              </label>
              <Select
                options={courseOptions}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderRadius: '.5rem',
                    padding: '0.2rem',
                    borderWidth: '0px',
                    backgroundColor: 'RGB(255, 255, 255)',
                  }),
                }}
                className="border-white text-sm"
                closeMenuOnSelect={true}
                isSearchable={false}
                onChange={(e) => setCourse(e.value)}
                name="feeType"
                controlShouldRenderValue={
                  course ? true : course === false ? true : false
                }
              />
            </div>
            {course === 'Plustwo' && (
              <div>
                <label
                  htmlFor="batch"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Batch
                </label>
                <Select
                  options={batchOptions}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderRadius: '.5rem',
                      padding: '0.2rem',
                      borderWidth: '0px',
                      backgroundColor: 'RGB(255, 255, 255)',
                    }),
                  }}
                  className="border-white text-sm"
                  closeMenuOnSelect={true}
                  isSearchable={false}
                  onChange={changeBatch}
                  controlShouldRenderValue={batch ? true : false}
                />
              </div>
            )}
            <div>
              <label
                htmlFor="intake"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Intake
              </label>
              <Select
                options={intakeOptions}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderRadius: '.5rem',
                    padding: '0.2rem',
                    borderWidth: '0px',
                    backgroundColor: 'RGB(255, 255, 255)',
                  }),
                }}
                className="border-white text-sm"
                closeMenuOnSelect={true}
                isSearchable={false}
                onChange={(e) => setIntake(e.value)}
                name="feeType"
                controlShouldRenderValue={
                  intake ? true : intake === false ? true : false
                }
              />
            </div>
            <div>
              <label
                htmlFor="mode"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Mode
              </label>
              <Select
                options={modeOptions}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderRadius: '.5rem',
                    padding: '0.2rem',
                    borderWidth: '0px',
                    backgroundColor: 'RGB(255, 255, 255)',
                  }),
                }}
                className="border-white text-sm"
                closeMenuOnSelect={true}
                isSearchable={false}
                onChange={(e) => setMode(e.value)}
                name="feeType"
                controlShouldRenderValue={
                  mode ? true : mode === false ? true : false
                }
              />
            </div>
            <div>
              <label
                htmlFor="phoneNum"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNum"
                className="bg-white border border-white text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="9876543210"
                value={phoneNum}
                onChange={(e) => setPhoneNum(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="parentNum"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Parent's Phone Number
              </label>
              <input
                type="text"
                id="parentNum"
                className="bg-white border border-white text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="9876543210"
                value={parentNum}
                onChange={(e) => setParentNum(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Date of Birth
              </label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="bg-white border border-white text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Select date"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-white border border-white text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="student@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirmEmail"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Confirm Email
              </label>
              <input
                type="email"
                id="confirmEmail"
                className="bg-white border border-white text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="student@gmail.com"
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="branch"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Branch
              </label>
              <Select
                options={branchOptions}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderRadius: '.5rem',
                    padding: '0.2rem',
                    borderWidth: '0px',
                    backgroundColor: 'RGB(255, 255, 255)',
                  }),
                }}
                className="border-white text-sm"
                closeMenuOnSelect={true}
                isSearchable={false}
                onChange={(e) => setBranch(e.value)}
                name="branch"
                controlShouldRenderValue={
                  branch ? true : branch === false ? true : false
                }
              />
            </div>
            <div>
              <label
                htmlFor="admissionCorrdinator"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Admission Coordinator
              </label>
              <input
                type="text"
                id="admissionCorrdinator"
                className="bg-white border border-white text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="John Doe"
                onChange={(e) => setAdmCoordinator(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="admissionFee"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Admission Fee
              </label>
              <input
                type="text"
                id="admissionFee"
                className="bg-white border border-white text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="1000"
                onChange={(e) => setAdmissionFee(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="utrNumber"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Utr Number
              </label>
              <input
                type="text"
                id="utrNumber"
                className="bg-white border border-white text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter the utr numnber"
                onChange={(e) => setUtrNumber(e.target.value)}
                required
              />
            </div>
            <div
              className="w-full pt-4 pb-4 bg-red-100"
              onClick={() => addStudentHandler()}
            >
              <Button
                buttonStyle={
                  'bg-[#2740CD] text-white text-md lg:text-md font-medium p-3 px-6 rounded-xl w-full '
                }
                text={'Add Student'}
              />
              <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
                theme="colored"
              />{' '}
            </div>
          </div>
        </div>

        {/* tablet screens */}
        <div className="hidden md:grid md:grid-cols-7 lg:grid-cols-7 xl:hidden p-4 w-screen h-screen">
          <div className="md:col-span-1 lg:col-span-1">
            {/* <SidebarComponent /> */}
            <SidebarNew />
          </div>
          <div className="md:col-span-6 lg:col-span-6 ">
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <div className="p-12">
              <h1 className="text-3xl lg:text-5xl font font-semibold">
                Add Student
              </h1>
              <h1 className="text-[#333333] text-lg lg:text-xl">
                Enter the details of the student{' '}
              </h1>
            </div>
            <div className="flex flex-col gap-5 p-8">
              <div className="grid grid-cols-3 gap-5">
                <div className="col-span-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm lg:text-lg font-medium text-gray-900"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="bg-white border border-white text-gray-900 text-sm lg:text-lg rounded-lg block w-full p-2.5"
                      placeholder="John"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="place"
                    className="block text-sm lg:text-lg font-medium text-gray-900"
                  >
                    Place
                  </label>
                  <input
                    type="text"
                    id="place"
                    className="bg-white border border-white text-gray-900 text-sm lg:text-lg rounded-lg block w-full p-2.5"
                    placeholder="nyc"
                    onChange={(e) => setPlace(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-5 gap-5">
                <div className="col-span-1">
                  <label
                    htmlFor="year"
                    className="block text-sm lg:text-lg font-medium text-gray-900"
                  >
                    Year
                  </label>
                  <Select
                    options={yearOptions}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderRadius: '.5rem',
                        padding: '0.2rem',
                        borderWidth: '0px',
                        backgroundColor: 'RGB(255, 255, 255)',
                      }),
                    }}
                    className="border-white text-sm lg:text-lg"
                    closeMenuOnSelect={true}
                    isSearchable={false}
                    onChange={(e) => setAdmYear(e.value)}
                    name="feeType"
                    controlShouldRenderValue={
                      admYear ? true : admYear === false ? true : false
                    }
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="course"
                    className="block text-sm lg:text-lg font-medium text-gray-900"
                  >
                    Course
                  </label>
                  <Select
                    options={courseOptions}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderRadius: '.5rem',
                        padding: '0.2rem',
                        borderWidth: '0px',
                        backgroundColor: 'RGB(255, 255, 255)',
                      }),
                    }}
                    className="border-white text-sm lg:text-lg"
                    closeMenuOnSelect={true}
                    isSearchable={false}
                    onChange={(e) => setCourse(e.value)}
                    name="feeType"
                    controlShouldRenderValue={
                      course ? true : course === false ? true : false
                    }
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="intake"
                    className="block text-sm lg:text-lg font-medium text-gray-900"
                  >
                    Intake
                  </label>
                  <Select
                    options={intakeOptions}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderRadius: '.5rem',
                        padding: '0.2rem',
                        borderWidth: '0px',
                        backgroundColor: 'RGB(255, 255, 255)',
                      }),
                    }}
                    className="border-white text-sm lg:text-lg"
                    closeMenuOnSelect={true}
                    isSearchable={false}
                    onChange={(e) => setIntake(e.value)}
                    name="feeType"
                    controlShouldRenderValue={
                      intake ? true : intake === false ? true : false
                    }
                  />
                </div>
              </div>

              <div
                className={`grid ${
                  course === 'Plustwo' ? 'grid-cols-5' : 'grid-cols-4'
                } gap-5`}
              >
                {course === 'Plustwo' && (
                  <div className="col-span-1">
                    <label
                      htmlFor="batch"
                      className="block text-sm lg:text-lg font-medium text-gray-900"
                    >
                      Batch
                    </label>
                    <Select
                      options={batchOptions}
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          borderRadius: '.5rem',
                          padding: '0.2rem',
                          borderWidth: '0px',
                          backgroundColor: 'RGB(255, 255, 255)',
                        }),
                      }}
                      className="border-white text-sm lg:text-lg"
                      closeMenuOnSelect={true}
                      isSearchable={false}
                      onChange={changeBatch}
                      controlShouldRenderValue={batch ? true : false}
                    />
                  </div>
                )}

                <div className="col-span-2">
                  <label
                    htmlFor="phoneNum"
                    className="block text-sm lg:text-lg font-medium text-gray-900"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneNum"
                    className="bg-white border border-white text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="9876543210"
                    onChange={(e) => setPhoneNum(e.target.value)}
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="parentNum"
                    className="block text-sm lg:text-lg font-medium text-gray-900"
                  >
                    Parent's Phone Number
                  </label>
                  <input
                    type="text"
                    id="parentNum"
                    className="bg-white border border-white text-gray-900 text-sm lg:text-lg rounded-lg block w-full p-2.5"
                    placeholder="9876543210"
                    onChange={(e) => setParentNum(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-5">
                <div className="col-span-2">
                  <label
                    htmlFor="mode"
                    className="block text-sm lg:text-lg font-medium text-gray-900"
                  >
                    Mode
                  </label>
                  <Select
                    options={modeOptions}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderRadius: '.5rem',
                        padding: '0.2rem',
                        borderWidth: '0px',
                        backgroundColor: 'RGB(255, 255, 255)',
                      }),
                    }}
                    className="border-white text-sm lg:text-lg"
                    closeMenuOnSelect={true}
                    isSearchable={false}
                    onChange={(e) => setMode(e.value)}
                    name="feeType"
                    controlShouldRenderValue={
                      mode ? true : mode === false ? true : false
                    }
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="dob"
                    className="block text-sm lg:text-lg font-medium text-gray-900"
                  >
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    onChange={(e) => setDob(e.target.value)}
                    className="bg-white border border-white text-gray-900 text-sm lg:text-lg rounded-lg block w-full p-2.5"
                    placeholder="Select date"
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm lg:text-lg font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-white border border-white text-gray-900 text-sm lg:text-lg rounded-lg block w-full p-2.5"
                    placeholder="student@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-4 gap-5">
                <div className="col-span-2">
                  <label
                    htmlFor="confirmEmail"
                    className="block text-sm lg:text-lg font-medium text-gray-900"
                  >
                    Confirm Email
                  </label>
                  <input
                    type="email"
                    id="confirmEmail"
                    className="bg-white border border-white text-gray-900 text-sm lg:text-lg rounded-lg block w-full p-2.5"
                    placeholder="student@gmail.com"
                    onChange={(e) => setConfirmEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="branch"
                    className="block text-sm lg:text-lg font-medium text-gray-900"
                  >
                    Branch
                  </label>
                  <Select
                    options={branchOptions}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderRadius: '.5rem',
                        padding: '0.2rem',
                        borderWidth: '0px',
                        backgroundColor: 'RGB(255, 255, 255)',
                      }),
                    }}
                    className="border-white text-sm lg:text-lg"
                    closeMenuOnSelect={true}
                    isSearchable={false}
                    onChange={(e) => setBranch(e.value)}
                    name="branch"
                    controlShouldRenderValue={
                      branch ? true : branch === false ? true : false
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-4 gap-5">
                <div className="col-span-2">
                  <label
                    htmlFor="admissionCorrdinator"
                    className="block text-sm lg:text-lg font-medium text-gray-900"
                  >
                    Admission Coordinator
                  </label>
                  <input
                    type="text"
                    id="admissionCorrdinator"
                    className="bg-white border border-white text-gray-900 text-sm lg:text-lg rounded-lg block w-full p-2.5"
                    placeholder="John Doe"
                    onChange={(e) => setAdmCoordinator(e.target.value)}
                    required
                  />
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="admissionFee"
                    className="block text-sm lg:text-lg font-medium text-gray-900"
                  >
                    Admission Fee
                  </label>
                  <input
                    type="text"
                    id="admissionFee"
                    className="bg-white border border-white text-gray-900 text-sm lg:text-lg  rounded-lg block w-full p-2.5"
                    placeholder="1000"
                    onChange={(e) => setAdmissionFee(e.target.value)}
                    required
                  />
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="utrNumber"
                    className="block text-sm lg:text-lg font-medium text-gray-900"
                  >
                    UTR number
                  </label>
                  <input
                    type="text"
                    id="utrNumber"
                    className="bg-white border border-white text-gray-900 text-sm lg:text-lg  rounded-lg block w-full p-2.5"
                    placeholder="Enter UTR number"
                    onChange={(e) => setUtrNumber(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex justify-center items-center p-10">
                <button
                  className={
                    'bg-[#2740CD] text-white text-md lg:text-md font-medium p-3 px-6 rounded-xl w-1/2 '
                  }
                  onClick={() => addStudentHandler()}
                >
                  Add student
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* pc screens */}
        <div className="hidden xl:grid xl:grid-cols-11 p-4 w-screen h-screen ">
          <div className="col-span-2">
            <SidebarNew />
          </div>
          <div className="col-span-9 space-y-8  pr-3 ">
            <div className="px-12 pt-10 xl:pt-6  ">
              <h1 className="3xl:text-3xl text-xl  font font-semibold">
                Add Student
              </h1>
              <h1 className="text-[#333333] 3xl:text-lg text-sm">
                Enter the details of the student{' '}
              </h1>
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-5 flex flex-col gap-3 3xl:gap-5  ps-12 px-3 row-span-5">
                <div className="">
                  <label
                    for="name"
                    class="block text-sm 3xl:text-lg font-medium text-gray-900 "
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    class="bg-white border border-white text-gray-900 text-sm 3xl:text-lg rounded-lg block w-full p-2 3xl:p-2.5"
                    placeholder="John"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    for="year"
                    class="block text-sm 3xl:text-lg font-medium text-gray-900 "
                  >
                    Course
                  </label>
                  <Select
                    options={courseOptions}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderRadius: '.5rem',
                        padding: '0.4rem',
                        borderWidth: '0px',
                        backgroundColor: 'RGB(255, 255, 255)',
                      }),
                    }}
                    className="border-white text-sm 3xl:text-lg"
                    closeMenuOnSelect={true}
                    isSearchable={false}
                    onChange={(e) => setCourse(e.value)}
                    name="feeType"
                    controlShouldRenderValue={
                      course ? true : course === false ? true : false
                    }
                  />
                </div>
                <div>
                  <label
                    for="phoneNum"
                    class="block text-sm 3xl:text-lg font-medium text-gray-900 "
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneNum"
                    class="bg-white border border-white text-gray-900 text-sm 3xl:text-lg rounded-lg block w-full p-2.5"
                    placeholder="9876543210"
                    value={phoneNum}
                    onChange={(e) => setPhoneNum(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block text-sm 3xl:text-lg font-medium text-gray-900 "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="bg-white border border-white text-gray-900 text-sm 3xl:text-lg rounded-lg block w-full p-2.5"
                    placeholder="student@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    for="admissionCorrdinator"
                    class="block text-sm 3xl:text-lg font-medium text-gray-900 "
                  >
                    Admission Coordinator
                  </label>
                  <input
                    type="text"
                    id="admissionCorrdinator"
                    class="bg-white border border-white text-gray-900 text-sm 3xl:text-lg rounded-lg block w-full p-2.5"
                    placeholder="John Doe"
                    value={admCoordinator}
                    onChange={(e) => setAdmCoordinator(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="col-span-4 flex flex-col gap-3 3xl:gap-5 px-4">
                <div>
                  <label
                    for="place"
                    class="block text-sm 3xl:text-lg font-medium text-gray-900 "
                  >
                    Place
                  </label>
                  <input
                    type="text"
                    id="place"
                    class="bg-white border border-white text-gray-900 text-sm 3xl:text-lg rounded-lg block w-full p-2.5"
                    placeholder="nyc"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    for="year"
                    class="block text-sm 3xl:text-lg font-medium text-gray-900 "
                  >
                    Intake
                  </label>
                  <Select
                    options={intakeOptions}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderRadius: '.5rem',
                        padding: '0.4rem',
                        borderWidth: '0px',
                        backgroundColor: 'RGB(255, 255, 255)',
                      }),
                    }}
                    className="border-white text-sm 3xl:text-lg"
                    closeMenuOnSelect={true}
                    isSearchable={false}
                    onChange={(e) => setIntake(e.value)}
                    name="feeType"
                    controlShouldRenderValue={
                      intake ? true : intake === false ? true : false
                    }
                  />
                </div>
                <div>
                  <label
                    for="parentNum"
                    class="block text-sm 3xl:text-lg font-medium text-gray-900 "
                  >
                    Parent's Phone Number
                  </label>
                  <input
                    type="text"
                    id="parentNum"
                    class="bg-white border border-white text-gray-900 text-sm3xl:text-lg rounded-lg block w-full p-2.5"
                    placeholder="9876543210"
                    value={parentNum}
                    onChange={(e) => setParentNum(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    for="confirmEmail"
                    class="block text-sm 3xl:text-lg font-medium text-gray-900 "
                  >
                    Confirm Email
                  </label>
                  <input
                    type="email"
                    id="confirmEmail"
                    class="bg-white border border-white text-gray-900 text-sm 3xl:text-lg rounded-lg block w-full p-2.5"
                    placeholder="student@gmail.com"
                    value={confirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    for="admissionFee"
                    class="block text-sm 3xl:text-lg font-medium text-gray-900 "
                  >
                    Admission Fee
                  </label>
                  <input
                    type="text"
                    id="admissionFee"
                    class="bg-white border border-white text-gray-900 text-sm 3xl:text-lg rounded-lg block w-full p-2.5"
                    placeholder="1000"
                    value={admissionFee}
                    onChange={(e) => setAdmissionFee(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="col-span-3 px-4 flex flex-col gap-3 3xl:gap-6">
                <div>
                  <label
                    for="year"
                    class="block text-sm 3xl:text-lg font-medium text-gray-900 "
                  >
                    Year
                  </label>
                  <Select
                    options={yearOptions}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderRadius: '.5rem',
                        padding: '0.3rem',
                        borderWidth: '0px',
                        backgroundColor: 'RGB(255, 255, 255)',
                      }),
                    }}
                    className="border-white text-sm 3xl:text-lg"
                    closeMenuOnSelect={true}
                    isSearchable={false}
                    onChange={(e) => setAdmYear(e.value)}
                    name="feeType"
                    controlShouldRenderValue={
                      admYear ? true : admYear === false ? true : false
                    }
                  />
                </div>
                {course === 'Plustwo' && (
                  <div>
                    <label
                      for="batch"
                      class="block text-sm 3xl:text-lg font-medium text-gray-900 "
                    >
                      Batch
                    </label>
                    <Select
                      options={batchOptions}
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          borderRadius: '.5rem',
                          padding: '0.3rem',
                          borderWidth: '0px',
                          backgroundColor: 'RGB(255, 255, 255)',
                        }),
                      }}
                      className="border-white text-sm 3xl:text-lg"
                      closeMenuOnSelect={true}
                      isSearchable={false}
                      onChange={changeBatch}
                      controlShouldRenderValue={batch ? true : false}
                    />
                  </div>
                )}
                <div>
                  <label
                    for="mode"
                    class="block text-sm 3xl:text-lg font-medium text-gray-900 "
                  >
                    Mode
                  </label>
                  <Select
                    options={modeOptions}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderRadius: '.5rem',
                        padding: '0.3rem',
                        borderWidth: '0px',
                        backgroundColor: 'RGB(255, 255, 255)',
                      }),
                    }}
                    className="border-white text-sm 3xl:text-lg"
                    closeMenuOnSelect={true}
                    isSearchable={false}
                    onChange={(e) => setMode(e.value)}
                    name="feeType"
                    controlShouldRenderValue={
                      mode ? true : mode === false ? true : false
                    }
                  />
                </div>
                <div>
                  <label
                    for="dob"
                    class="block text-sm 3xl:text-lg font-medium text-gray-900 "
                  >
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    class="bg-white border border-white text-gray-900 text-sm 3xl:text-lg rounded-lg block w-full p-2"
                    placeholder="Select date"
                  />
                </div>
                <div>
                  <label
                    for="branch"
                    class="block text-sm 3xl:text-lg font-medium text-gray-900 "
                  >
                    Branch
                  </label>
                  <Select
                    options={branchOptions}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderRadius: '.5rem',
                        padding: '0.3rem',
                        borderWidth: '0px',
                        backgroundColor: 'RGB(255, 255, 255)',
                      }),
                    }}
                    className="border-white text-sm 3xl:text-lg"
                    closeMenuOnSelect={true}
                    isSearchable={false}
                    onChange={(e) => setBranch(e.value)}
                    name="branch"
                    controlShouldRenderValue={
                      branch ? true : branch === false ? true : false
                    }
                  />
                </div>
                <div>
                  <label
                    for="utrNumber"
                    class="block text-sm 3xl:text-lg font-medium text-gray-900 "
                  >
                    UTR number
                  </label>
                  <input
                    type="text"
                    id="utrNumber"
                    onChange={(e) => setUtrNumber(e.target.value)}
                    class="bg-white border border-white text-gray-900 text-sm 3xl:text-lg rounded-lg block w-full p-2"
                    placeholder="Enter UTR number"
                  />
                </div>
              </div>
            </div>
            <div
              className=" pr-3 float-end flex  justify-end "
              onClick={() => addStudentHandler()}
            >
              <Button
                buttonStyle={
                  'bg-[#2740CD] text-white text-md lg:text-md font-medium p-3 px-6 rounded-xl w-full '
                }
                text={'Add Student'}
              />
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
