// ** BirthdateForm.js
import { useState } from "react";

// Pass props from App.js
function BirthdateForm(props) {
    // Initialize state to track the changing value of the date input
        // - dateValue, setDateValue
    const [dateValue, setDateValue] = useState('2020-07-24');

    // A function to hold the change event on the date selector and update the setDateValue with the date selected by the user
    const handleChange = function(e) {
        console.log('new date selected!');
        setDateValue(e.target.value);
    }

    // A function to handle the form submission that will update the userBirthdate state in App.js by passing it the updated dateValue set in the above function. (via the chosenBirthdate parameter)
    const handleDateSelect = function(e) {
        props.handleSubmit(e, dateValue);
    }

    // Render the Component
    return (
            // form (this will call the form submission function above on submission)
            <form action="" onSubmit={ handleDateSelect }>
                <label htmlFor="birthDate">Enter your birthdate:</label>
                {/* input type="date" (this will call the handleChange function defined above when changed!) */}
                <input 
                    type="date" 
                    name="birthDate" 
                    id="birthDate" 
                    onChange={handleChange}
                    value={dateValue}
                />
                <button>Generate</button>
            </form>
        )
}

// Export BirthdateForm.js
export default BirthdateForm;
