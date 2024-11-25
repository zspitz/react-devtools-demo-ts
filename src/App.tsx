import { useState } from 'react'
import Counter from './Counter'

const App = () => {
    const [operand, setOperand] = useState<string>('1')
    const numOperand = Number.parseFloat(operand)

    return (
        <>
            <span>בחר אופרנד:</span>
            <input value={operand} onChange={e => setOperand(e.target.value)} />
            <hr />
            <Counter operator='+' operand={numOperand} />
            <Counter operator='*' operand={numOperand} />
        </>
    )
}

export default App