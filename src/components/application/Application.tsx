import {ApplicationProps} from './Application.types'

const Application = ( props: ApplicationProps ) => {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      <img src="https://via.placeholder.com/150" alt="a person with a laptop" />
      <span title='close'>&times;</span>
      <div data-testid='custom-element'>Custom HTML Element</div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder='Full Name' value={'Chiran'} onClick={() => {}} />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job location</label>
          <select name="job-location" id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="Au">Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" name="terms" id="terms" /> I agree to the terms and conditions.
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  )
}

export default Application