import React from "react";

export const ContactPicker = ({ contacts, contact, setContact }) =>
{
  return (
    <select
      value={contact} // Asigură-te că acesta reflectă starea selectată curent
      onChange={(e) => setContact(e.target.value)} // Actualizează starea pe schimbare
    >
      <option key={-1} value="">No Contact Selected</option>
      {contacts.map((contact, index) => (
        <option key={index} value={contact.name}>{contact.name}</option>
      ))}
    </select>
  );
};
