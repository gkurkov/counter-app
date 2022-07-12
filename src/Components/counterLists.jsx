import React, {useState} from 'react'
import Counter from './counter'

const СounterLists = () => {

    const initialState = [
        { id: 0, value: 0, name: 'Ненужная вещь' },
        { id: 1, value: 3, name: 'Ложка' },
        { id: 2, value: 0, name: 'Вилка' },
        { id: 3, value: 0, name: 'Тарелка' },
        { id: 4, value: 0, name: 'Набор минималиста' },
    ]
    const [counters, setCounters] = useState(initialState)

    const handleDelete = (id) => {
        const newCounters = counters.filter((c) => c.id !== id)
        setCounters(newCounters)
    }

    const handleReset = () => {
        setCounters(initialState)
    }

    
    const handleIncrement = (id) => {
        const elementToIncrement = counters.findIndex((count => count.id === id))
        const newCounters = [...counters]
        newCounters[elementToIncrement].value += 1
        setCounters(newCounters)
    }

    const handleDecrement  = (id) => {

        const elementToDecrement = counters.findIndex((count => count.id === id))
        const newCounters = [...counters]
        newCounters[elementToDecrement].value -= 1
        setCounters(newCounters)
    }

    return (
    <>
        {counters.map(count => (
        <Counter key={count.id} 
                 {...count}
                 onDelete={handleDelete}
                 onIncrement={handleIncrement}
                 onDecrement={handleDecrement}
        /> 
    ))}
        <button className="btn btn-primary btn-sm m-2" 
                onClick={handleReset}>
            Reset</button>
    </>
    )
}

export default СounterLists