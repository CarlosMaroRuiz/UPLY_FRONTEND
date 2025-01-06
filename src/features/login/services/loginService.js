export const loginService = async (email, password) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_URL_API}/auth/login`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error('Error al realizar la petición');
    }

    return await response.json();
  } catch (err) {
    throw new Error(err.message || 'Error en la conexión');
  }
};
