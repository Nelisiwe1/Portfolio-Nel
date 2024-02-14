import React, { Fragment } from "react";

function Contact(props) {
  let content = {
    English: {
      title: "Contact",
      address: "Lorem ipsum, Lorem ipsum, Lorem, 123456",
      phone: {
        label: "Phone",
        value: "+12 34567"
      },
      email: {
        label: "Email",
        value: "abc@example.com"
      }
    },
    Address: {
      address: "Western cape, Capetown, South Africa",
      phone: {
        label: "loaction",
        value: "+12 34567"
      },
      email: {
        label: "@",
        value: "abc@example.com"
      }
    }
  };

  props.language === ""
    ? (content = content)
    : (content = content.English);
  return (
    <Fragment>
      <h2>{content.title}</h2>
      <hr />
      <address>{content.Address}</address>
      <address>
        <abbr title="Phone">{content.phone.label}: </abbr>
        {content.phone.value}
        <br />
        <abbr title="Email">{content.email.label}: </abbr>
        <a href={`mailto:${content.email.value}`}>{content.email.value}</a>
      </address>
    </Fragment>
  );
}

export default Contact;
