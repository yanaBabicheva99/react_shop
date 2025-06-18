import { useState } from 'react';
import styles from './styles.module.scss'

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div className={styles.block}>
            <div>{count}</div>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
};

export default Counter;