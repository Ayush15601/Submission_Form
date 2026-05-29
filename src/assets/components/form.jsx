import { useState } from "react"
import "../css/form.css"

function Form() {

  const [firstname, setfirstname] = useState("")

    return(
        
        <>
        <form action="#" method="get">
            
            <label for="firstname"> First Name</label> <br />
            <input type="text" id="firstname" placeholder="Enter your name" name="firstname" value={firstname} onChange={ (e) => setfirstname(e.target.value)} />

        </form>
        
        
        </>
    )
}

export default Form