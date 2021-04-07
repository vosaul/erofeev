import React from 'react'
import ReCaptcha, { Loader } from "@pittica/gatsby-plugin-recaptcha"

export default class ContactPage extends React.Component {
  constructor(props, context) {
    Loader()
  }

  verifyCallback = (token) => {
  }

  render() {
    return (
      <ReCaptcha
        action="homepage"
        sitekey="RECAPTCHA_PUBLIC_KEY"
        callback={this.verifyCallback}
      />
    )
  }
}
