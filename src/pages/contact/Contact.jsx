import React, { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [copyChecked, setCopyChecked] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleCopyChange = () => {
    setCopyChecked(!copyChecked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submit işlemleri burada gerçekleştirilir
    console.log('Form submitted:', { name, email, subject, message, copyChecked });
    // Örneğin burada form verilerini bir API'ye gönderebilirsiniz
  };

  return (
    <form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }} onSubmit={handleSubmit}>
      <h2>Contact us</h2>

      <div className='mb-4'>
        <label htmlFor='name' className='form-label'>Name</label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={handleNameChange}
          className='form-control'
          placeholder='Enter your name'
        />
      </div>

      <div className='mb-4'>
        <label htmlFor='email' className='form-label'>Email address</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={handleEmailChange}
          className='form-control'
          placeholder='Enter your email'
        />
      </div>

      <div className='mb-4'>
        <label htmlFor='subject' className='form-label'>Subject</label>
        <input
          type='text'
          id='subject'
          value={subject}
          onChange={handleSubjectChange}
          className='form-control'
          placeholder='Enter subject'
        />
      </div>

      <div className='mb-4'>
        <label htmlFor='message' className='form-label'>Message</label>
        <textarea
          id='message'
          value={message}
          onChange={handleMessageChange}
          className='form-control'
          placeholder='Enter your message'
        />
      </div>

      <div className='mb-4 form-check d-flex justify-content-center'>
        <input
          type='checkbox'
          id='copyCheck'
          className='form-check-input me-2'
          checked={copyChecked}
          onChange={handleCopyChange}
        />
        <label className='form-check-label' htmlFor='copyCheck'>Send me copy</label>
      </div>

      <button type='submit' className='btn btn-primary btn-block my-4'>Send</button>
    </form>
  );
}
