import React from 'react';
import { useState, useEffect } from 'react';

/* Hook */
// Control what happens depending on which stage of lifecycle the component is
export const Text = () => {
    const [text, setText] = useState("");

    // Whenever Text re-renders, this will be called
    useEffect(() => {
        console.log("COMPONENT MOUNTED");

        // This executes when component unmounts
        return () => {
            console.log("COMPONENT UNMOUNTED");
        };
    }, [text]); // leaving array empty will "only execute once"

    return (
        <div>
            <input
                onChange={(event) => {
                    setText(event.target.value);
                }}
            />

            <h1> {text} </h1>
        </div>
    );
};

/* 
How is it useful?

Take a case scenario of a request to an API when rendering
and continuously make that that request

But when the component disappears, we want to stop that request
we can use useEffect for that logic
*/
