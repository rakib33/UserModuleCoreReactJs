import { Button } from 'bootstrap';
import React , {useState} from 'react'
import Child from './Child'

export default function ParentFile(){
  
  const [data,setData] = useState('This is Child');
  const parentToChild =()=>{
    setData("This is data from parent to child component");
  }
  return (
    <div>
      <Child parentToChild={data}/>
      <div>
        <button onClick={()=>parentToChild()}>Click Parent</button>
      </div>
    </div>
  )
}