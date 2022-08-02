import React, { useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const Recaptcha = () => {
  const recaptchaRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const captchaToken = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();
    
    // Pass this token to your server for validation...
    console.log("calling",{captchaToken})
    // Sample
    // const res = await axios.post(
    //   API_URL,
    //   { 
    //     fromData,
    //     captchaToken
    //   }
    // );
  }

  //to get the token without any user interactions
  const onloadFun = async(e) => {
    const captchaToken = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();
    
    // Pass this token to your server for validation...
    console.log("calling",{captchaToken})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="submit" value="Submit" />
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LcZ6RohAAAAAD5JUaVIIn4vmgr09OcPaHMGGdM_"
          size="invisible"
          asyncScriptOnLoad={onloadFun}
        />
      </form>
    </div>
  );
};

export default Recaptcha;