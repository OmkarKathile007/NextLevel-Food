// this part is seperately created for the navigation link in the header it should render only on client side
// so the rest of the page can be rendered on the server side for fast loading SEO


'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";

export default function NavLink({href,children}){


    const path=usePathname();
    return (
        <Link href={href} className={path.startsWith(href)?` ${classes.link} ${classes.active}`:classes.link}>
             {children}
        </Link>

       
    )
}