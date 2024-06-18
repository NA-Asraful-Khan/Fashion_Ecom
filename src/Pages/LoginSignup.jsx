import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className="loginSignup">
      <div className="loginSignup-container">
        <h1>Sign up</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login Here</span></p>
        <div className="loginSignup-agree">
          <input type="checkbox" name="" id=""/>
          <p>By Contuning, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
