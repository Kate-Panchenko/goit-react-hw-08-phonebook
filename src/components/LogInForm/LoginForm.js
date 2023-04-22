export const LoginForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
  };

  return (
    <form autoComplete="off">
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
};
