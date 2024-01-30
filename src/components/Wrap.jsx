import React, { useState } from 'react';

const WrapHoc = (WrapFunction) => {
    function WrappedComponent() {
        const [counter, setCounter] = useState(0);

        const handleCounter = () => {
            setCounter(counter + 1);
        }

        return (
            <div>
                <WrapFunction counter={counter} handleCounter={handleCounter} />
            </div>
        )
    }

    return WrappedComponent;
}

export default WrapHoc
