import { useState } from "react"
import "../css/form.css"

function Form() {

  const [firstname, setfirstname] = useState("")
  const [lastname, setlastame] = useState("")
  const [email, setemail] = useState("")
  const [contact, setcontact] = useState("")
  const [gender, setgender] = useState("")
  const [sub, setsub] = useState({maths: true, hindi: false, english: false})
  const [resume, setresume] = useState("")
  const [url, seturl] = useState("")


  const changetick = (subj) => {

    setsub((prev) => ({...prev, [subj]: !prev[subj]}))

  }

    return(
        
        <>
        <form action="#" method="get" className="f_form">
            
            <label htmlFor="firstname"> First Name* </label> 
            <input type="text" id="firstname" placeholder="Enter your name" name="firstname" value={firstname} onChange={ (e) => setfirstname(e.target.value)} />

            <label htmlFor="lastname"> Last Name </label> 
            <input type="text" id="lastname" placeholder="Enter your last name" name="lastname" value={lastname} onChange={(e) => setlastame(e.target.value)}/>

            <label htmlFor="email"> Email </label> 
            <input type="email" id="email" placeholder="Enter your email" name="email" value={email} onChange={(e) => setemail(e.target.value)}/>

            <label htmlFor="contact"> Contact </label> 
            <input type="tel" id="contact" placeholder="Enter your phone number" name="contact" value={contact} onChange={(e) => setcontact(e.target.value)}/>

            <label htmlFor="gender"> Gender </label> <br />
            <input type="radio" id="gender" name="gender" value="male" checked={gender == "male"} onChange={(e) => setgender(e.target.value)}/> Male
            <input type="radio" id="gender" name="gender" value="female" checked={gender == "female"} onChange={(e) => setgender(e.target.value)}/> Female
            <input type="radio" id="gender" name="gender" value="other" checked={gender == "other"} onChange={(e) => setgender(e.target.value)}/> Gender

            <br /> <label htmlFor="checkbox"> Your best subjects </label> <br />

            {/* new observation unlocked on onChanged here. Why we used arrow fun inside onChanged?*/}
            <input type="checkbox" id="checkbox" name="maths" checked={sub.maths === true} onChange={() => changetick("maths")}/> Maths
            <input type="checkbox" id="checkbox" name="hindi" checked={sub.hindi === true} onChange={() => changetick("hindi")}/> Hindi
            <input type="checkbox" id="checkbox" name="english" checked={sub.english === true} onChange={() => changetick("english")}/> English

            <br /> <label htmlFor="resume"> Upload Resume </label> 
            <input type="file" id="resume" name="resume" value={resume} onChange={(e) => setresume(e.target.file[0])}/>

            <br /> <label htmlFor="url"> Enter URL </label> 
            <input type="url" id="url" name="url" value={url} onChange={(e) => seturl(e.target.value)}/>



        
        </form>
        
        
        </>
    )
}

export default Form