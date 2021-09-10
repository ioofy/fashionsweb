import React from 'react'
import { MenuList, MenuContainer,MenuLinks, MenuItem, MainMenu } from './MenuElements'

const Menu = () => {
    return (
        <MenuList>
            <MenuContainer>
                <MainMenu>
                    <MenuItem>
                        <MenuLinks to='/about'>About Us</MenuLinks> 
                    </MenuItem>
                    <MenuItem>
                        <MenuLinks to='/blog'>Our Blog</MenuLinks> 
                    </MenuItem>
                    <MenuItem>
                        <MenuLinks to='/products'>Our Products</MenuLinks> 
                    </MenuItem>
                    <MenuItem>
                        <MenuLinks to='/contact'>Contact Us</MenuLinks> 
                    </MenuItem>
                </MainMenu>
            </MenuContainer>
        </MenuList>
    )
}

export default Menu
