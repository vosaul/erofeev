import React from 'react';


export default class SubscribeForm extends React.Component {
  render() {
      function onSubmit(token) {
        document.getElementById("subscribe-form").submit();
      }
        return (
          <form
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
            >
              Subscribe
            </button>
            <div
              class="g-recaptcha"
              data-sitekey="6Lcs_Z8aAAAAANr4dssNoVeFcDTvkcyHC0XqEf1i"
            ></div>
          </form>
        );
    }
}
