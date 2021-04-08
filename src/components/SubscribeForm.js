import React, { useState } from "react"
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";


export default class SubscribeForm extends React.Component {
  render() {
      const [token, setToken] = useState()

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    })
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    const data = new FormData(form)
    data.append("g-recaptcha-response", token)

      function onSubmit(token) {
        document.getElementById("subscribe-form").submit();
      }
        return (
                  <GoogleReCaptchaProvider reCaptchaKey="6LfSJOoUAAAAACo5FptLy5inFhJmhIPF9E9ekwsN">

          <form
          onSubmit={handleOnSubmit}
            name="subscribeForm"
            method="POST"
            data-netlify-honeypot="bot-field"
            data-netlify="true"
            data-sitekey="6Lcs_Z8aAAAAANr4dssNoVeFcDTvkcyHC0XqEf1i"
            id="subscribe-form"
            className="subscribe-form"
          >
            <div className="screen-reader-text">
              <label id="subscribe-form-bot-label">
                Don't fill this out if you're human:{" "}
                <input
                  name="bot-field"
                  aria-labelledby="subscribe-form-bot-label"
                />
              </label>
            </div>
            <div className="form-row">
              <label id="subscribe-form-email-label">
                <span className="screen-reader-text">Email address</span>
                <input
                  className="subscribe-email"
                  aria-labelledby="subscribe-form-email-label"
                  type="email"
                  name="email"
                  placeholder="Enter Email Address..."
                />
              </label>
            </div>
            <input
              type="hidden"
              aria-label="subscribe-form-name-label"
              name="form-name"
              value="subscribeForm"
            />
            <button
              className="button g-recaptcha"
              type="submit"
              data-sitekey="6Lcs_Z8aAAAAANr4dssNoVeFcDTvkcyHC0XqEf1i"
              data-callback="onSubmit"
              data-action="submit"
            >
              Subscribe
            </button>
          </form>
                  </GoogleReCaptchaProvider>

        );
    }
}
