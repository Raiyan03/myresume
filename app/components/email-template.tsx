import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
    message: string;
    email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName, message, email }) => (
  <div>
    <p>From: {email}</p>
    <h1>Hello, {firstName}!</h1>
    <p>{message}</p>
    <p>Best regards,</p>
    <p>{firstName}</p>
  </div>
);
