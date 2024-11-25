import { useState } from 'react'

type Operator = '+' | '-' | '*' | '/'
type Props = {
    operator: Operator,
    operand: number
}

const evaluate = (current: number, operator: Operator, operand: number) => {
    switch (operator) {
        case '+': return current + operand
        case '-': return current - operand
        case '*': return current * operand
        case '/': return current / operand
    }
}

const Counter = ({ operator, operand }: Props) => {
    const [value, setValue] = useState(1)
    const nextValue = evaluate(value, operator, operand)

    const clickHandler = () => setValue(
        prev => evaluate(prev, operator, operand)
    )

    return (
        <button onClick={clickHandler} style={{ margin: '10px' }}>
            ערך נוכחי: <span className="ltr">{`${value}`}</span><br />
            פעולה: {operator} <br />
            ערך הבא: <span className="ltr">{`${nextValue}`}</span><br />
        </button>
    )
}

export default Counter