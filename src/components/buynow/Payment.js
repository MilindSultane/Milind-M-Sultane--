import React from 'react';
import swal from 'sweetalert';
import "./payment.css";

const Payment = () => {
  return (
   <div>
     <div class="container">
    <h1 class="main_heading">Payment Form</h1>
		<p>Required Fields are followed by *</p>
		<h2>Contact Details</h2>
        <form  onsubmit="return valiate()">
        <p>First Name: * <input type="text" name="First name" required placeholder="Milind"/></p>
		<p>Last Name: * <input type="text" name="Last name" required placeholder="Sultane"/></p>

        <fieldset required="">
			<legend>Gender *</legend>
			<p>
				Male: <input type="radio" name="gender" value="male" required/>
				Female: <input type="radio" name="gender" value="female" required/>
			</p>
			</fieldset>

            <p>
            Address:<textarea name="address" id="address" cols="20" rows="5" placeholder="address" required></textarea>
            </p>
            <p>
             Email: * <input type="email" name="email" id="email" required="" placeholder="milind@gmail.com" required/>
            </p>
            <p> 
            Pincode: * <input type="number" name="pincode" id="pincode" required="" placeholder="444203" required/>
            </p>

            <h2>Payment Information</h2>
            <p>Card Type: *
				<select name="Card-type" id="Card-type" required>
					<option value="">--Select Card Type--</option>
					<option value="Rupay">Rupay</option>
					<option value="Visa">Visa</option>
					<option value="Maestro">Maestro</option>
					<option value="Mastercard">Mastercard</option>
				</select>
			</p>

            <p>Card number: * <input type="number" name="card-number" id="card-number" required="" placeholder="1234 5678 1234" required/></p>
			<p>Expiry date:  *<input type="date" name="exp-date" id="exp-date" required="" placeholder="02/2070" required/></p>
			<p>CVV: * <input type="password" name="CVV" id="CVV" name="cvv" required/></p>
			<input type="submit" name="Pay Now" value="Pay Now" onclick="return validate()"></input>
            
        </form>
      
    </div>
   {/*  <script>
    function validate(){
    var cv+ = document.getElementById("cvv")
    {
      if (pincode.value.length < 3 || pincode.length > 3){
		alert("Invalid Pincode");
		return false;
	}
	else{
		true;
    }
  }
    };
    </script> */}

    
   </div>
   
  )
}

export default Payment
