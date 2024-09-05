const Registro = () => {
  return (
    <>
      <main>
        <h1>Registrar usuario</h1>
        <form>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Registrar</button>
        </form>
      </main>
    </>
  );
};

export default Registro;
