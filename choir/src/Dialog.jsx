import { useRef, useState } from 'react';
import Button from './Button';
import "./Dialog.css"

function Dialog({ openDialogRef }) {
  const dialogRef = useRef(null);
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [submission, setSubmission] = useState('');
  const [error, setError] = useState('');

  openDialogRef.current = () => {
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current.close();
    setError('');
    setEmail('');
    setConfirmEmail('');
    setSubmission('');
  };

  const isEmailValid = (email) => {
    return email.includes('@');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !confirmEmail) {
      setError('Please enter email address');
      return;
    }

    if (!isEmailValid(email) || !isEmailValid(confirmEmail)) {
      setError('Please enter valid email');
      return;
    }

    if (email !== confirmEmail) {
      setError('Emails do not match');
      return;
    }

    setSubmission('Subscribed successfully!');
    setEmail('');
    setConfirmEmail('');
    setTimeout(closeDialog, 2000); 
  };

  return (
    <dialog ref={dialogRef}>
      <form method="dialog" onSubmit={handleSubmit}>
        <div className="subscribe">
          <h2>Subscribe To Us</h2>
          <label htmlFor="email">Email Address:</label>
          <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
          <label htmlFor="confirmEmail">Confirm Email Address:</label>
          <input id="confirmEmail" type="text" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} placeholder="Confirm Email Address" />
          {error && <p className="error">{error}</p>}
          <div className="two-buttons">
            <Button type="submit" visual="button">Submit</Button>
            <Button onClick={closeDialog} type="button" visual="button">Close</Button>
          </div>
        </div>
      </form>
      {submission && <p className="success">{submission}</p>}
    </dialog>
  );
}

export default Dialog;
