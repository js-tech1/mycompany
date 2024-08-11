import { NextResponse } from 'next/server';
import axios from 'axios';

const sendKeepAliveRequest = async () => {
  try {
    const response = await axios.get(`https://js-tech1.onrender.com/`);
    console.log(`Keep-alive request sent. Status: ${response.status}`);
  } catch (error) {
    console.error('Error sending keep-alive request:', error);
  }
};

// Send keep-alive request every 30 seconds
setInterval(sendKeepAliveRequest, 30 * 1000);

// Immediately send the first request
sendKeepAliveRequest();



export function middleware(request) {
  const { pathname } = request.nextUrl;

  // List of valid paths
  const validPaths = [
    '/about',
    '/',
    '/blog',
    // '/blog-details',
    // '/blog-sidebar',
    '/contact',
    '/blog-details',

    // '/signin',
    // '/signup',
    // add more paths as needed
  ];

  // List of paths to ignore
  const ignorePaths = [
    '/_next',
    '/static',
    '/public',
    '/favicon.ico',
    '/images',
    // add more paths as needed
  ];

  // Check if the requested path should be ignored
  if (ignorePaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Check if the requested path is valid
  if (!validPaths.includes(pathname) && pathname !== '/error') {
    // Redirect to the /error page
    return NextResponse.redirect(new URL('/error', request.url));
  }

  return NextResponse.next();
}