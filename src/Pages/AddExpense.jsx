import React, { useState } from 'react';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS
import MobileNavigation from '../Components/MobileNavigation';
import Button from '../Components/Button';
import SidebarNew from '../Components/SidebarNew';
import axios from 'axios';

function AddExpense() {
  const options = [
    { value: 'Salary', label: 'Salary' },
    { value: 'Rent', label: 'Rent' },
    { value: 'Printing & Stationary', label: 'Printing & Stationary' },
    { value: 'Refreshment', label: 'Refreshment' },
    { value: 'Electricity', label: 'Electricity' },
    { value: 'Repairs', label: 'Repairs' },
    { value: 'Equipments', label: 'Equipments' },
    { value: 'Miscellaneous Expense', label: 'Miscellaneous Expense' },
    { value: 'Exam Fees', label: 'Exam Fees' },
    { value: 'Registration Fees', label: 'Registration Fees' },
    { value: 'Error value', label: 'Error value' },
  ];

  const [category, setCategory] = useState(null);
  const [amount, setAmount] = useState(null);
  const [description, setDescription] = useState(null);
  const [date, setDate] = useState(null);

  const addExpenseHandler = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const { data } = await axios.post(
        'http://127.0.0.1:5000/api/expense/add',
        { category, description, amount, date },
        config
      );

      if (data.transaction && data.transaction.type) {
        toast.success('Expense added successfully');
      }
    } catch (error) {
      if (error.response) {
        // Extracting the error message from the response
        console.log(error.response.data.message);
        const errorMessage = error.response.data.message;
        toast.error(errorMessage);
      } else {
        // Handling other types of errors
        console.error('An error occurred:', error.message);
      }
    }
  };

  return (
    <div className="bg-[#f0f0f0] h-screen w-screen overflow-hidden">
      <div className="h-full w-full block md:grid md:grid-cols-7 lg:grid-cols-6 xl:grid-cols-11 2xl:grid-cols-6">
        {/* mobile screens */}
        <div className="block md:hidden ">
          <div className="flex flex-col h-screen ">
            <div className="flex flex-col items-start  px-8  pt-20">
              <h1 className="text-2xl sm:text-2xl  font-bold ">
                Add new expense
              </h1>
              <h2 className="text-[#66666] text-sm sm:text-lg  ">
                Please add details for expense tracking.
              </h2>
            </div>

            <div className="px-8 flex flex-col gap-2  py-10 ">
              <div>
                <label
                  for="amount"
                  class="block text-sm font-medium text-gray-600"
                >
                  Amount
                </label>
                <input
                  type="text"
                  id="amount"
                  class="bg-white border text-gray-600 text-sm  rounded-md block w-full p-2 md:p-4 xl:p-2"
                  placeholder="Enter the amount"
                  required
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                />
              </div>
              <div>
                <label
                  for="description"
                  class="block text-sm font-medium text-gray-600"
                >
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  class="bg-white border text-gray-600 text-sm  rounded-md block w-full p-2 md:p-4 xl:p-2"
                  placeholder="Describe the expense"
                  required
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-600"
                >
                  Category
                </label>
                <Select
                  options={options}
                  id="category"
                  isSearchable={false}
                  onChange={(e) => {
                    setCategory(e.value);
                  }}
                />
              </div>
              <div className="w-full ">
                <label
                  for="date"
                  className="block text-sm font-medium text-gray-600"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="bg-white px-3 border text-gray-600 text-sm  rounded-md w-full p-2 md:p-4 xl:p-2"
                  required
                  placeholder="Select date"
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </div>
              <div className="py-5">
                <Button
                  buttonStyle={'bg-[#2740CD] text-white p-3 rounded-xl w-full'}
                  text={'Add Expense'}
                  onClick={addExpenseHandler}
                />
              </div>
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
                theme="colored"
              />{' '}
            </div>
          </div>

          <div className="">
            <MobileNavigation />
          </div>
        </div>

        {/* tablet screens */}
        <div className="hidden md:grid md:grid-cols-7 lg:grid-cols-7 xl:hidden p-4 w-screen h-screen">
          <div className="md:col-span-1 lg:col-span-1">
            {' '}
            {/* First col is acquired by the sidebar component */}
            <SidebarNew />
          </div>
          <div className="md:col-span-6 lg:col-span-6 p-10 flex  justify-center items-center">
            {' '}
            {/* Second col is acquired by the main content */}
            <div className="p-20 w-full bg-white  rounded-2xl">
              <div className="flex flex-col items-start   ">
                <h1 className="text-3xl   font-bold lg:text-4xl ">
                  Add new expense
                </h1>
                <h2 className="text-[#66666] text-lg sm:text-lg lg:text-2xl  ">
                  Please add details for expense tracking.
                </h2>
              </div>

              <div className=" flex flex-col gap-2  py-10 ">
                <div>
                  <label
                    for="amount"
                    class="block text-lg lg:text-2xl font-medium text-gray-600"
                  >
                    Amount
                  </label>
                  <input
                    type="text"
                    id="amount"
                    class="bg-white border text-gray-600 text-lg lg:text-2xl  rounded-md block w-full p-2 md:p-4 xl:p-2"
                    placeholder="Enter the amount"
                    required
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label
                    for="description"
                    class="block text-lg lg:text-2xl font-medium text-gray-600"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    class="bg-white border text-gray-600 text-lg lg:text-2xl  rounded-md block w-full p-2 md:p-4 xl:p-2"
                    placeholder="Describe the expense"
                    required
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="category"
                    className="block text-lg lg:text-2xl font-medium text-gray-600"
                  >
                    Category
                  </label>

                  {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! bug !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                  {/* this component size need to change */}
                  <Select
                    options={options}
                    id="category"
                    isSearchable={false}
                    onChange={(e) => {
                      setCategory(e.value);
                    }}
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        fontSize: '1.125rem', // This corresponds to text-lg in Tailwind CSS
                      }),
                      option: (provided) => ({
                        ...provided,
                        fontSize: '1.125rem', // This corresponds to text-lg in Tailwind CSS
                      }),
                    }}
                  />
                </div>
                <div>
                  <label
                    for="date"
                    class="block text-lg lg:text-2xl font-medium text-gray-600"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="bg-white px-3 border text-gray-600 text-lg lg:text-2xl  rounded-md w-full p-2 md:p-4 xl:p-2"
                    required
                    placeholder="Select date"
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                  />
                </div>
                <div className="p-5">
                  <Button
                    buttonStyle={
                      'bg-[#2740CD] text-white text-lg lg:text-2xl font-medium p-3 rounded-xl w-full '
                    }
                    text={'Add Expense'}
                    onClick={addExpenseHandler}
                  />
                </div>
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
                  theme="colored"
                />{' '}
              </div>
            </div>
          </div>
        </div>

        {/* pc screens */}
        <div className="hidden xl:grid xl:grid-cols-11 p-4 w-screen h-screen">
          {' '}
          {/* Total 2 cols for pc screens */}
          {/* <SidebarComponent /> */}
        </div>
      </div>
    </div>
  );
}

export default AddExpense;
