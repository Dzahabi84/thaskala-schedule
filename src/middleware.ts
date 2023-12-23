import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    console.log('Im here boss');
    
    const date = new Date()
    if(date.getDay() == 1) {
        return NextResponse.redirect(new URL('/monday', request.url))
    } else if (date.getDay() == 2) {
        return NextResponse.redirect(new URL('/tuesday', request.url))
    } else if (date.getDay() == 3) {
        return NextResponse.redirect(new URL('/wednesday', request.url))
    } else if (date.getDay() == 4) {
        return NextResponse.redirect(new URL('/thursday', request.url))
    } else if (date.getDay() == 5) {
        return NextResponse.redirect(new URL('/friday', request.url))
    } else if (date.getDay() == 6) {
        return NextResponse.redirect(new URL('/friday', request.url))
    } else if (date.getDay() == 0) {
        return NextResponse.redirect(new URL('/friday', request.url))
    } else {
        return NextResponse.redirect(new URL('/monday', request.url))
    }
}

export const config = {
    matcher: '/:path',
  }