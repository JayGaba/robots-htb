exports.handler = async (event, context) => {
  let cookieValue = '1';
  
  if (event.headers.cookie && event.headers.cookie.includes("value=")) {
    cookieValue = event.headers.cookie
      .split('; ')
      .find(cookie => cookie.startsWith('value='))
      .split('=')[1];
  }

  console.log(`Current cookie value: ${cookieValue}`); // Added for debugging

  let redirectLocation = '';
  if (cookieValue === '69') {
    redirectLocation = '/lmaotaketheflag.txt';
  } else {
    cookieValue = '1';
  }

  console.log(`Redirect location: ${redirectLocation}`); // Added for debugging

  const response = {
    statusCode: 302,
    headers: {
      'Content-Type': 'text/plain',
      'Set-Cookie': `value=${cookieValue}; Path=/; Max-Age=86400; SameSite=None; Secure`,
      'Location': redirectLocation
    },
    body: ''
  };

  return response;
};
