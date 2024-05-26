'use client'

export default function AboutError({ error, reset }: { error: Error, reset: () => void }) {
    return (
        <div>
            <h3>This will show when a error occurs</h3>
            <p>{ error.message }</p>
            <button onClick={ () => reset() }>RESET PAGE</button>
        </div>
    )
}
