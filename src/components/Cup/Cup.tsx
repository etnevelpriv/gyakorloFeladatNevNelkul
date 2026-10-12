import { useState } from "react";

let guest = 0

export const Cup = function () {
    guest += 1;
    return <p>{guest}</p>
};
export const ButtonValue = function () {
    const [count, setCount] = useState<number>(0);
    return (
        <>
            <p>{count}</p>
            <button onClick={()=> setCount((count)=>count+=1)}>+1</button>
        </>
    )
};

