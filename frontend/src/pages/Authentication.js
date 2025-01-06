import AuthForm from '../components/AuthForm';

export const AuthenticationPage = () => {
  return <AuthForm />;
};

export async function action({ request}) {
  const mode = new URL(request.url).searchParams.get('mode') === 'login' ? '/login' : '/signup';

  if (mode !== 'login' && mode !== '/signup') {
    throw new Response(JSON.stringify({ message: 'Unsuported mode.' }),
      {
        status: 422,
      });
  };

  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };

  const response = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'Could not authenticate user.' }),
      {
        status: 500,
      });
  } 
  
  return new Response(null, { 
    status: 302,
    headers: {
      Location: '/',
    },
  });
};
