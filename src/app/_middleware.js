// src/app/_middleware.js (or src/_middleware.js)

import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();

  // Define a list of existing routes
  const validRoutes = ['/home', '/about', '/contact']; // Add your valid routes here

  // Check if the requested path matches any valid route
  if (!validRoutes.includes(url.pathname) && url.pathname !== '/error') {
    // Redirect to the /error page if the path is not found
    url.pathname = '/error';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
