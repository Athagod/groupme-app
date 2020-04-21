import React from 'react'
import './styles.css'

function EditProfileForm() {
  return (
    <form>
      <fieldset className="edit-profile-fieldset">
      
        <ul className="edit-profile-list"> 
          <li>   
            <label>First Name:</label>
            <input 
              type="text" 
              placeholder="Required" 
              id="first-name" 
              name="first_name" 
            />
          </li>
          <li>   
            <label>Last Name:</label>
            <input 
              type="text" 
              placeholder="Required" 
              id="last-name" 
              name="Last_name" 
            />
          </li>    
          <li>
            <label>City:</label>
            <input 
              type="text" 
              id="city" 
              name="user_city" 
              placeholder="Enter city" 
            />
          </li>
          <li>
          <label>State:</label>
            <select id="state" name="user_state">
              <option value="select">Choose State</option>                    
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </li>
          <li>
            <label>Zip Code:</label>
            <input 
              type="tel" 
              className="zip" 
              id="zipcode" 
              name="user_zipcode" 
              placeholder="Enter 4 digit zip code" 
            />
          </li>
          <li>
            <label className="edit-profile-gender-label">Gender:</label>

            <input 
              type="radio" 
              id="male" 
              name="gender" 
              value="male" 
            />
            <label className="edit-profile-gender-male">Male</label>

            <input 
              type="radio" 
              id="female" 
              name="gender" 
              value="female" 
            />
            <label className="edit-profile-gender-female">Female</label>
          </li>
          <li>   
            <label>Birthday:</label>
            <input 
              type="date" 
              id="birthday" 
              name="birthdate" 
            />
          </li> 
          <li>
            <label>Phone Number:</label>
            <input 
              type="tel" 
              id="phone" 
              name="user_phone" 
              placeholder="Enter phone number" 
            />
          </li>
          <li>
            <label>Email Address:</label>
            <input 
              type="email" 
              id="mail" 
              name="email" 
              placeholder="Enter email address" 
            />
          </li>
        </ul>

      </fieldset>
    </form>
  )
}

export default EditProfileForm
