function SuccessScreen() {
  return (
    <div className="success-screen">
      <div className="success-icon">
        ✓
      </div>

      <h2>Registration Complete!</h2>

      <p>
        You are on the PRODJET waitlist.
      </p>

      <div className="success-card">
        <h3>#757</h3>

        <p>
          Referral Code:
          <strong>USR757</strong>
        </p>

        <p>
          Referrals Joined: 0/3
        </p>
      </div>
    </div>
  );
}

export default SuccessScreen;