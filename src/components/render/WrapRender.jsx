import React, { useState } from 'react';
function WrappedComponent(props) {
        const [counter, setCounter] = useState(0);

        const handleCounter = () => {
            setCounter(counter + 1);
        }

        return (
            <div>
               {props.render(counter,handleCounter)}
            </div>
        );
    }


export default WrappedComponent;
