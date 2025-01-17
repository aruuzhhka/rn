
import "../assets/Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Вход</h2>

        <p className="login-text">
          Если у вас нет аккаунта, зарегистрируйтесь{" "}
          <a href="/signup" className="signup-link">
            Зарегистрироваться здесь!
          </a>
        </p>

        {/* Форма */}
        <form className="login-form">
          <label className="input-label" htmlFor="email">
            E-mail
          </label>
          <div className="input-group">
            <span className="icon">📧</span>
            <input
              type="email"
              id="email"
              placeholder="Введите свой адрес электронной почты"
              className="input-field"
              required
            />
          </div>

          <label className="input-label" htmlFor="password">
            Пароль
          </label>
          <div className="input-group">
            <span className="icon">🔒</span>
            <input
              type="password"
              id="password"
              placeholder="Введите свой пароль"
              className="input-field"
              required
            />
          </div>

          {/* Кнопка Войти */}
          <button type="submit" className="login-button">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;