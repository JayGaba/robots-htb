exports.handler = async (event, context) => {
  // Set the default cookie value
  let cookieValue = '1';
  
  // Check if the cookie is already set
  if (event.headers.cookie && event.headers.cookie.includes("value=")) {
    // Extract the cookie value
    cookieValue = event.headers.cookie
      .split('; ')
      .find(cookie => cookie.startsWith('value='))
      .split('=')[1];
  }

  // Set response body and redirection if the cookie value is '69'
  let redirectLocation = '';
  if (cookieValue === '69') {
    redirectLocation = '/lmaotaketheflag.txt';
  } else {
    // If the cookie value is not '69', reset it to '1'
    cookieValue = '1';
  }

  // Set the cookie and return the redirect if the cookie value is '69', otherwise, just set the cookie
  const response = {
    statusCode: 302, // Redirect status code
    headers: {
      'Content-Type': 'text/plain',
      'Set-Cookie': `value=${cookieValue}; Path=/; Max-Age=86400; SameSite=None; Secure`,
      'Location': redirectLocation // Include the redirect location in the headers
    },
    body: '' // Empty response body
  };

  return response;
};
