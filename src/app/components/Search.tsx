'use client'

import React, { FormEvent } from 'react'
import { useState } from 'react'

import { useRouter } from 'next/navigation'

export default function Search() {
    const [ search, setSearch ] = useState('')
    const router = useRouter()

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setSearch('')
        router.push(`/${search}/`)
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input  
                type="text" 
                value={ search }
                onChange={ (event) => setSearch(event.target.value) }
                placeholder='Search'
            />
            <br />
            <button>Search</button>
        </form>
    )
}
