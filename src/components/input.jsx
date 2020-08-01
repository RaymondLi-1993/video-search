import React,{useState}from "react";

let Input = ({onFormSubmit}) => {
  const [search, setSearch] = useState(``);

  let handleSubmit = (event) =>{
    event.preventDefault();

    onFormSubmit(search);
  }

  return( 
    <div className = "search-bar ui segment">
       <form className="ui form" onSubmit = {handleSubmit}>
         <div className="field">
           <label>Video Search</label>
           <input 
             value = {search}
             onChange={(event)=> setSearch(event.target.value)} 
             placeholder = "Search">
           </input>
         </div>    
       </form>
     </div>
    )
 }



export default Input;