
import "../assets/Signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-card">
       
        {/* Заголовок */}
        <h2 className="title">Создать аккаунт</h2>

        {/* Форма */}
        <form className="signup-form">
          <div className="input-group">
            <input type="text" placeholder="Имя" className="input-field" />
            <input type="text" placeholder="Фамилия" className="input-field" />
          </div>
          {/* <div className="input-group">
            <input type="text" placeholder="Имя" className="input-field" />
            <input type="text" placeholder="Фамилия" className="input-field" />
          </div> */}
          <input
            type="email"
            placeholder="E-mail"
            className="input-field full-width"
          />
          <input
            type="password"
            placeholder="Пароль"
            className="input-field full-width"
          />

          {/* Кнопка регистрации */}
          <button type="submit" className="submit-button">
            Зарегистрироваться
          </button>

          {/* Ссылка для входа */}
          <p className="login-link">
            У вас уже есть аккаунт? <a href="/login">Войти</a>
          </p>

          {/* <div className="divider">или</div> */}

          {/* Кнопка Google */}
          <button className="google-button">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="google-logo"
            />
            Войти с помощью Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;