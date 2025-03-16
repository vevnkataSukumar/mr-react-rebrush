import React, { useState, useEffect } from "react";
import axios from "axios";

function HookCounter() {
    //Fetch data using button
    const[post,setPost]=useState({})
    const[id,setId]=useState(1)
    const[idFromButtonClick,setIdFromButtonClick]=useState(1);

    const handleClick=()=>{
        setIdFromButtonClick(id);

    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res =>{
                console.log(res)
                setPost(res.data)
            })
            .catch(err=>{
                console.log(err)
            })

    },[idFromButtonClick])
    return(
        <div>
            <input type="text" value={id} onChange={e=>setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
        </div>
    )
    
    
    

}
export default HookCounter;
    //useState with objects
    /*const [name,setName]=useState({firstName:'', lastName:' '})
    return(
        <form>
            <input type="text" value={name.firstName} onChange={e =>setName({ ...name,firstName:e.target.value})} />
            <input type="text" value={name.lastName} onChange={e =>setName({ ...name,lastName:e.target.value})} />
            <h2>Your FirstName is:{name.firstName}</h2>
            <h2>Your LastName is:{name.lastName}</h2>
        </form>
    )*/


    //previous count
    /*const initialCount=0;
    const [count,setCount]=useState(initialCount);

    const incrementFive=()=>{
        for(let i=0; i<5; i++){
            setCount(prevCount=>prevCount+1)
        }
    }
    return(
        <div>
            Count:{count}
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
            <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )*/

//useState with arrays
/*const [items, setItems] = useState([]);

const addItem=()=>{
    setItems([...items,{
        id:items.length,
        value: Math.floor(Math.random()*10)+1
    }])
}
return (
    <div>
        <button onClick={addItem}>Add a number</button>
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.value}</li>
            ))}
        </ul>
    </div>
)*/

//useEffect 
    /*const[count,setCount]=useState(0)
    useEffect(()=>{
        document.title=`You clicked ${count} times`
    })
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Click {count} times</button>
        </div>
    )*/

 //useEffect conditionally run effect
    /*const[count,setCount]=useState(0)
    const[name,setName]=useState('')

    useEffect(()=>{
        console.log('useEffect-updating document title')
        document.title=`You clicked ${count} times`
    },[count])
    return(
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} />
            <button onClick={()=>setCount(count+1)}>click {count} times</button>
        </div>
    )*/

//Run effects only once
   /*const[x,setX]=useState(0);
   const[y,setY]=useState(0);

   const logMouseposition=e=>{
    console.log('Mouse event');
    setX(e.clientX);
    setY(e.clientY);
   }
   useEffect(()=>{
    console.log('useEffect called');
    window.addEventListener('mousemove', logMouseposition)
   },[])

   return(
    <div>
        Hooks X-{x} Y-{y}
    </div>
   )*/
  
  //fetching data using get

 /*const[posts,setPosts]=useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res =>{
                console.log(res)
                setPosts(res.data)
            })
            .catch(err=>{
                console.log(err)
            })

    },[])
    return(
        <div>
            <ul>
                {posts.map(post=>(
                    <li key={post.id}>{post.title}</li>

                ))}
            </ul>
        </div>
    )*/

    //fetching data using id
    /*const[post,setPost]=useState({})
    const[id,setId]=useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res =>{
                console.log(res)
                setPost(res.data)
            })
            .catch(err=>{
                console.log(err)
            })

    },[id])
    return(
        <div>
            <input type="text" value={id} onChange={e=>setId(e.target.value)} />
            <div>{post.title}</div>
        </div>
    )*/