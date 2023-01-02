import { Head } from "./Head";
import { Navbar } from "./Navbar";
import { Search } from "./Search";

import './Header.css'

export function Header() {
    return (
      <>
        <Head/>
        <Search/>
        <Navbar/>
      </>
    );
}  