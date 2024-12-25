import { useState } from "react";

function MountingPhase(){
const [ data, setData]=useState(null);


    return <h1>{data? 'fetch data' : 'Loading .... please wait'} </h1>
}


export default MountingPhase;