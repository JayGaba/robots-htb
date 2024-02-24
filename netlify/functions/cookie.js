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
  if (cookieValue === '69') {
  responseBody = 'window.onload = function() { alert("Flag: {wh0_tf_l3t_th1s_guy_c00k}"); };';
} else {
  responseBody = ''; // Empty response body if the cookie value is not '69'
}

  
  if (cookieValue === '69') {
  return {
    statusCode: 302, // Redirect status code
    headers: {
      Location: '/lmaotaketheflag.txt' // Redirect to flag page
    },
    body: '' // Empty response body
  };
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
