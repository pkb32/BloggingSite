import React, {useId} from 'react'

function Select({
    //nija hisab re propertiy de, name de xyz de kichi bhi jouta tu use karibu
    options,
    label,
    className="",
    ...props

}, ref) {
    const id = useId()
  return (
    <div className='w-full'>
      {label && <label className="" htmlFor={id}></label>}
       
       <select 
       {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black
            outline-none focus:bg-gray-500 duration-200 border border-gray-200 w-full
            ${className}`}
        >
         {options?.map((option)=>(
            <option key={option} value={option}>
                {option}
            </option>

         ))}

       </select>
   
   
    </div>
  )
}

export default React.forwardRef(Select)
