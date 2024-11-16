// src/components/Navbar.tsx
import { Menu } from 'antd';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar: React.FC = () => {
    return (
        <Menu mode="horizontal">
            <Menu.Item>
                <AnchorLink href="#about">About</AnchorLink>
            </Menu.Item>
            <Menu.Item>
                <AnchorLink href="#education">Education</AnchorLink>
            </Menu.Item>
            <Menu.Item>
                <AnchorLink href="#projects">Projects</AnchorLink>
            </Menu.Item>
            <Menu.Item>
                <AnchorLink href="#contact">Contact</AnchorLink>
            </Menu.Item>
        </Menu>
    );
};

export default Navbar;