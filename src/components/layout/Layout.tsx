import * as React from 'react';
import Footer from './Footer';
import NavBar from './Header';
export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return <>
  <NavBar/>
  {children}
  <Footer/>
  </>;
}
