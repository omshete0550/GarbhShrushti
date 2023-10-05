import axios from 'axios'

const AuthPage = (props) => {
  async function onSubmits(e) {
    e.preventDefault();
    const { value } = e.target[0];
    console.log(value);
    await axios.post("http://localhost:8800/authenticate",
      {
        username: value
      })
      .then(r => props.onAuth({ ...r.data, secret: value }).then((res) => console.log(res)))
      .catch(e => console.log(e))
  };

  return (
    <div className="background">
      <form onSubmit={onSubmits} className="form-card">
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;