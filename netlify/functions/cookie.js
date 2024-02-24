// netlify/functions/cookie.js

exports.handler = async (event, context) => {
  // Set the cookie value
  let cookieValue = '1';
  
  // Check if the cookie is already set
  if (event.headers.cookie && event.headers.cookie.includes("value=")) {
    // Extract the cookie value
    cookieValue = event.headers.cookie
      .split('; ')
      .find(cookie => cookie.startsWith('value='))
      .split('=')[1];
  }

  // Check the cookie value and set response accordingly
  let responseBody = '';
  if (cookieValue === '69') {
    responseBody = 'Flag: {wh0_tf_l3t_th1s_guy_c00k}';
  } else {
    responseBody = 'Welcome to our website!';
  }

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Set-Cookie': `value=${cookieValue}; Path=/; Max-Age=86400; SameSite=None; Secure`,
    },
    body: responseBody,
  };
};
