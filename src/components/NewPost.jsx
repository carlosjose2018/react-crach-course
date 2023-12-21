import { useState } from "react";
import classes from "./NewPost.module.css"


const NewPost = () => {
 const [enteredBody, setEnteredBody] = useState("");

  function changeBodyHandle(event){
     setEnteredBody(event.target.value)
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Nome</label>
        <textarea id="body" required  rows={3} onChange={changeBodyHandle}/>
      </p>
      <p>{enteredBody}</p>
      <p>
       <label htmlFor="name">Descrição</label>
        <textarea type="text" id="name" required/>
      </p>
    </form>
  )
}

export default NewPost
