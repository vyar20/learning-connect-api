'use client'

import { BaseSyntheticEvent, useState, type FC, type ReactNode } from 'react'

interface PageProps {
  children?: ReactNode
}

const Page: FC<PageProps> = () => {
  const [name, setName] = useState('')
  const [valueFromServer, setValueFromServer] = useState(null)

  const onSubmitHandler = async (event: BaseSyntheticEvent) => {
    event.preventDefault()

    const response = await fetch('/api/name', {
      method: 'POST',
      body: JSON.stringify({ name })
    })

    if (!response.ok) return alert('Error fetching')

    const data = await response.json()

    console.log(data)

    setValueFromServer(data.name === '' ? null : data.name)
  }

  const onChangeHandler = (value: string) => {
    setName(value)
  }

  return (
    <div className='h-screen flex-1 w-full flex'>
      <form
        onSubmit={onSubmitHandler}
        className='flex flex-col max-w-sm w-full p-4 shadow-lg gap-4 m-auto'>
        <p>Response : {valueFromServer ?? 'No Data'}</p>
        <input
          type='text'
          name='name'
          placeholder='name'
          value={name}
          onChange={(event) => onChangeHandler(event.target.value)}
          className='border rounded px-4 py-2'
        />
        <button className='px-4 py-2 bg-indigo-600 hover:bg-indigo-700 focus:bg-indigo-800 text-white rounded'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Page
