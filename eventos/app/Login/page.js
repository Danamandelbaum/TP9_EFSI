export default function Login() {
    return (
      <div>
        <main >
          <h1>Iniciar sesión</h1>
          <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Entrar</button>
          </form>
        </main>
      </div>
    );
  }
