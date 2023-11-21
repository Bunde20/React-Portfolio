import { useState } from 'react';
import { validEmail } from '../utils/helpers';

export default function ContactMe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
 
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validEmail(email)) {
      setErrorMessage('Email is invalid, please try again.');
    if (!name) 
      setErrorMessage('Name is required');
    if (!message)
      setErrorMessage('Message is required');
      return;
    }
    alert(`Hello ${name}, thank you for your message!`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="d-flex">
      <div className="mt-5 col-xl-4 col-md-6 col-12 border container text-center">
        <h1>Contact Me:</h1>
        <form
          action="https://formsubmit.co/stevenbunde2020@gmail.com"
          method="POST"
          className="form d-flex flex-column"
          onSubmit={handleFormSubmit}
        >
          <input
            className="my-3"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            onBlur={() => {
              if (!name) {
                setErrorMessage('Name is required');
              } else {
                setErrorMessage('');
              }
            }}
            type="text"
            placeholder="name"
          />
          <input
            className="my-3"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => {
              if (!email) {
                setErrorMessage('Email is required');
              } else {
                setErrorMessage('');
              }
            }}
            type="email"
            placeholder="email"
          />
          <textarea
            className="my-3"
            value={message}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            onBlur={() => {
              if (!message) {
                setErrorMessage('Message is required');
              } else {
                setErrorMessage('');
              }
            }}
            type="text"
            placeholder="message"
          />
            <button className="btn btn-dark" type="submit" disabled={!email && name && message}>
            Submit
            </button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}
