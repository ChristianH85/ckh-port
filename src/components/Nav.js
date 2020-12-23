import React from 'react'
import {Navbar, Icon, NavItem} from 'react-materialize'

function Nav(){

    return(
        <Navbar className='nav'
        alignLinks="right"
        brand={<a className="brand-logo left-align" href="/">Christian K. Henry</a>}
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
            draggable: true,
            edge: 'right',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
        }}
        >
        <NavItem href="/">
            About
        </NavItem>
        <NavItem href="/portfolio">
            Portfolio
        </NavItem>
        <NavItem href="/contact">
            Contact
        </NavItem>
        </Navbar>
    )
}
export default Nav