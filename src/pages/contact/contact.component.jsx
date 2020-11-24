import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import {
  ContactPreviewContainer,
  TextArea,
  ContactTitle,
  ButtonContainer,
} from "./contact.syles";

import CustomButton from "../../components/custom-button/custom-button.component";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fistName: "",
      lastName: "",
      email: "",
      message: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <ContactPreviewContainer>
        <ContactTitle>CONTACT US</ContactTitle>
        <div>
          <FormInput
            name="fistName"
            type="firstName"
            handleChange={this.handleChange}
            value={this.state.fistName}
            label="Name"
            required
          />
          <FormInput
            name="lastName"
            type="lastName"
            handleChange={this.handleChange}
            value={this.state.lastName}
            label="Last Name"
            required
          />
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />
        </div>
        <TextArea name="message" placeholder="Send us something!"></TextArea>
        <ButtonContainer>
          <CustomButton type="googleSignInStyles"> Send </CustomButton>
        </ButtonContainer>
      </ContactPreviewContainer>
    );
  }
}

export default ContactPage;
