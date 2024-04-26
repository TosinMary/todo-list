import { useState } from "react"


function Home() {
   const [todos, setTodos] = useState(["Wash the plate","Read a book"])
   const [inputText, setInputText] = useState("")

   const handleInputText = (e) => {
    return setInputText(e.target.value)
   }

   const updateTodoList = () => {
    if(inputText){
        setTodos([...todos, inputText])
        setInputText("")
    }
   }

   const keyPressbtn = (e) =>{
if(e.key === "Enter") {
    return updateTodoList()
}
   }
  return (
   <>
   <div>
  <input type="text" value={inputText} placeholder="input your todo-li st" onChange={handleInputText} />
  <button onClick={updateTodoList} onKeyDown={keyPressbtn}>Submit</button>
   </div>
   <div>
    <ul>
        {todos.map((t, index)=>(<li key={index}>{t}</li>))}
    </ul>
   </div>
   </>
  )
}

export default Home