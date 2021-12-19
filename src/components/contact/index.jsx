import React, { useState, useEffect } from "react";

import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiGithubLine } from "react-icons/ri";
import { getContacts } from "../../services/contactService";
import "./contact.css";
import "./contactCard.css";

function ContactCard({ name, section, image, facebook, ig, github }) {
  return (
    <div className="contact__card">
      <div className="contact__imgBx">
        <img src={image} alt="" />
      </div>
      <div className="contact__content">
        <div className="contact__contentBx">
          <h3 className="contact__name">
            {name}
            <br />
            <span className="contact__section">{section}</span>
          </h3>
        </div>
        <ul className="contact__socialBx">
          <li className="contact__social social__1">
            <a href={facebook} target="_blank" rel="noreferrer">
              <RiFacebookFill color="white" size="2.4rem" />
            </a>
          </li>
          <li className="contact__social social__2">
            <a href={ig} target="_blank" rel="noreferrer">
              <RiInstagramFill color="white" size="2.4rem" />
            </a>
          </li>
          <li className="contact__social social__3">
            <a href={github} target="_blank" rel="noreferrer">
              <RiGithubLine color="white" size="2.4rem" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

const Contact = () => {
  const [contact, setContact] = useState(getContacts());
  const [isShuffle, setIsShuffle] = useState(false);

  useEffect(() => {
    let shuffle = contact;
    for (let i = shuffle.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = shuffle[i];
      shuffle[i] = shuffle[j];
      shuffle[j] = temp;
    }

    setContact(shuffle);
    setIsShuffle(true);
  }, [contact]);

  return (
    <div id="contact" className="contact__background">
      <div className="contact__backdrop"></div>
      <div className="contact__container">
        {isShuffle && (
          <React.Fragment>
            <div className="contact__title">Contact</div>
            <div className="contact__content">
              {contact.map((admin) => (
                <ContactCard
                  key={admin.id}
                  name={admin.name}
                  section={admin.section}
                  image={admin.image}
                  facebook={admin.facebook}
                  ig={admin.ig}
                  github={admin.github}
                />
              ))}
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Contact;
