import React from 'react'
import Button from '../Components/Button'
import Select from 'react-select'

function AddExpense() {
    const options = [
        { value: 'salary', label: 'Salary' },
        { value: 'rent', label: 'Rent' },
        { value: 'printing_stationary', label: 'Printing & Stationary' },
        { value: 'refreshment', label: 'Refreshment' },
        { value: 'electricity', label: 'Electricity' },
        { value: 'repairs', label: 'Repairs' },
        { value: 'equipments', label: 'Equipments' },
        { value: 'miscellaneous', label: 'Miscellaneous Expense' },
    ]

    const [category, setCategory] = useState(null)
    const [amount, setAmount] = useState(null)
    const [description, setDescription] = useState(null)
    const [date, setDate] = useState(null)

    const handleAddExpense = () => {
        // Add expense to the database
    }

  return (
    
    <div className='flex flex-col h-screen row-span-4 '>


                <div className='flex flex-col items-start  px-8  pt-20'>
                  <h1 className='text-2xl sm:text-2xl  font-bold '>Add new expense</h1>
                  <h2 className='text-[#66666] text-sm sm:text-lg  '>Please add details for expense tracking.</h2>
                </div>

                <div className='px-8 flex flex-col gap-2  py-10 '>
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
                      id='category'
                      isSearchable={false}
                      
                    />
                  </div>
                  <div>
                    <label
                      for="date"
                      class="block text-sm font-medium text-gray-600"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="bg-white px-3 border text-gray-600 text-sm  rounded-md w-full p-2 md:p-4 xl:p-2"
                      required
                      placeholder='Select date'
                      
                    />
                  </div>

                  <div className='py-5'>
                    <Button
                      buttonStyle={'bg-[#2740CD] text-white p-3 rounded-xl w-full'}
                      text={'Add Expense'}
                      />
                  </div>


                </div>

              </div>
  )
}

export default AddExpense