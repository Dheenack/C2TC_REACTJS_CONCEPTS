import React, { useState } from 'react'

export const WithCounter = (WrappedComponent,incrementNumber) => {
    const UpdatedComponent = (props) =>{
        const [count,SetCount] = useState(0);
        const incrementCount=()=>{
            SetCount(count+incrementNumber);
        };

        return (
            <WrappedComponent
            count={count}
            incrementCount={incrementCount}
            {...props}
            />
        );
    };
    return UpdatedComponent;
  
};
