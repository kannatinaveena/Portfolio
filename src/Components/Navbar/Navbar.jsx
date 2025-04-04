import React, { useRef, useState } from 'react';
import './Navbar.css';
import LOGO1 from '../../assets/LOGO1.png';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const menuRef = useRef();
    
    const openMenu = () => {
        menuRef.current.style.right = "0";
    }
    
    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    }
    
    return (
        <div className='navbar'>
            <img src={LOGO1} alt="Logo" style={{ width: '80px', height: 'auto' }} />
            <img src={menu_open} onClick={openMenu} alt="Menu" className='nav-mob-open'/>
            
            <ul ref={menuRef} className='nav-menu'>
                <img src={menu_close} onClick={closeMenu} alt="Close" className="nav-mob-close" />
                <li>
                    <AnchorLink className='anchor-link' href='#home'>
                        <p onClick={()=>setMenu("home")}>Home</p>
                    </AnchorLink>
                    {menu==="home" ? <img src={underline} alt=''/> : <></>}
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#about'>
                        <p onClick={()=>setMenu("about me")}>About me</p>
                    </AnchorLink>
                    {menu==="about me" ? <img src={underline} alt=''/> : <></>}
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#projects'>
                        <p onClick={()=>setMenu("projects")}>Projects</p>
                    </AnchorLink>
                    {menu === "projects" && <img src={underline} alt='' />}
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>
                        <p onClick={()=>setMenu("contact")}>Contact</p>
                    </AnchorLink>
                    {menu==="contact" ? <img src={underline} alt=''/> : <></>}
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#skills'>
                        <p onClick={()=>setMenu("skills")}>Skills</p>
                    </AnchorLink>
                    {menu==="skills" ? <img src={underline} alt=''/> : <></>}
                </li>
            </ul>
            
            <div className="nav-connect">
                <AnchorLink className='anchor-link' offset={50} href='#contact'>
                    Connect with me
                </AnchorLink>
            </div>
        </div>
    );
}

export default Navbar;