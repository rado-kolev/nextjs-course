import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/profile') {
    const response = NextResponse.next();

    const themePreference = request.cookies.get('theme');

    if (!themePreference) {
      response.cookies.set('theme', 'dark');
    }

    response.headers.set('custom-header', 'custom-value');

    return response;

    // return NextResponse.redirect(new URL('/hello', request.url)) //* redirects to the desired location

    // return NextResponse.rewrite(new URL('/hello', request.url)) //* rewrites the URL to the desired location
  }
  // return NextResponse.redirect(new URL('/', request.url))
}

// export const config = {
//   matcher: '/profile'
// }