import React,{useState} from "react";
const Register=()=>{
    const [state, setState] = useState({
        fullName: "",
        email: "",
        password: "",
        address: "",
        color: "",
        city: "",
        state: "",
        country:"",
        zip: 0,
        checkMe: false
      })

      const handleChange = evt => {
        const name = evt.target.name;
        const value =
        evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        setState({
          ...state,
          [name]: value
        })
      }

      const submitHandler=event=>{
        event.preventDefault();
        console.log(state);
        alert("registered successfully")
      }

    return(
        <>
        <h3>Register Form </h3>
        <pre>{JSON.stringify(state)}</pre>
        <form onSubmit={submitHandler}>
            <div class="form-group">
            <label class="form-check-label">Full Name</label>
            <input type="text" name="fullName" value={ state.fullName } onChange={ handleChange } /><br/>

            <label>Email Id</label>
            <input type="email" name="email" value={ state.email } onChange={ handleChange } /><br/>

            <label>Password</label>
            <input type="password" name="password" value={state.password} onChange={handleChange}/><br/>
            
            <label>Address</label>
            <textarea rows="4" cols="50" name="address" value={state.address} onChange={handleChange}/><br/>
        
            <label>Colour</label>
            <select name="color" value={ state.color } onChange={ handleChange } /><br/>

            <label>City</label>
            <input type="text" name="city" value={ state.city } onChange={ handleChange } /><br/>

            <label>State</label>
            <select  name="state">
                <option value="">Select state</option>
                <option value="AN">Andaman and Nicobar Islands</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="AR">Arunachal Pradesh</option>
                <option value="AS">Assam</option>
                <option value="BR">Bihar</option>
                <option value="CH">Chandigarh</option>
                <option value="CT">Chhattisgarh</option>
                <option value="DN">Dadra and Nagar Haveli</option>
                <option value="DD">Daman and Diu</option>
                <option value="DL">Delhi</option>
                <option value="GA">Goa</option>
                <option value="GJ">Gujarat</option>
                <option value="HR">Haryana</option>
                <option value="HP">Himachal Pradesh</option>
                <option value="JK">Jammu and Kashmir</option>
                <option value="JH">Jharkhand</option>
                <option value="KA">Karnataka</option>
                <option value="KL">Kerala</option>
                <option value="LA">Ladakh</option>
                <option value="LD">Lakshadweep</option>
                <option value="MP">Madhya Pradesh</option>
                <option value="MH">Maharashtra</option>
                <option value="MN">Manipur</option>
                <option value="ML">Meghalaya</option>
                <option value="MZ">Mizoram</option>
                <option value="NL">Nagaland</option>
                <option value="OR">Odisha</option>
                <option value="PY">Puducherry</option>
                <option value="PB">Punjab</option>
                <option value="RJ">Rajasthan</option>
                <option value="SK">Sikkim</option>
                <option value="TN">Tamil Nadu</option>
                <option value="TG">Telangana</option>
                <option value="TR">Tripura</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="UT">Uttarakhand</option>
                <option value="WB">West Bengal</option>
            </select><br/>

            <label>Country</label>
            <input type="text" name="country" value={ state.country } onChange={ handleChange }/><br/>

            <label>Postal code</label>
            <input type="number" name="zip" value={ state.zip} onChange={ handleChange } /><br/>

            <input type="checkbox" name="checkMe" checked={ state.checkMe } onChange={ handleChange } />
            <label>Check me</label><br/>

            <input type="submit" value="Register"/>
            </div>
            
        </form>
        </>
    )
}
export default Register