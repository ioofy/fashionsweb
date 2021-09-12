import React from 'react'
import { 
    FooterContainer, FooterLinksContainer, 
    FooterLinksWrapper, FooterLinksItems, 
    FooterLinkTitle, FooterLink,
    SocialMedia, SocialMediaWrap,
    SocialLogo,SocialIconLink,SocialIcons,
    Alrights, Privacy
} from './FooterElement'
import {FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'


const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/signup'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Story</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>Our Blog</FooterLinkTitle>
                        <FooterLink to='/signup'>Marketing</FooterLink>
                        <FooterLink to='/'>Consluting</FooterLink>
                        <FooterLink to='/'>Development</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>Our Outlet</FooterLinkTitle>
                        <FooterLink to='/signup'>Jakarta</FooterLink>
                        <FooterLink to='/'>Bandung</FooterLink>
                        <FooterLink to='/'>Bogor</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>Our Services</FooterLinkTitle>
                        <FooterLink to='/'>Clients</FooterLink>
                        <FooterLink to='/signup'>Careers</FooterLink>
                        <FooterLink to='/'>Contact us</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo>
                        © {new Date().getFullYear()} Fashions.
                        <Alrights to="/">Term Of Services.</Alrights>
                        <Privacy to="/">Privacy Policy.</Privacy>
                    </SocialLogo>
                    <SocialIcons>
                        <SocialIconLink href={'//www.facebook.com'} target='_blank' aria-label="facebook" rel="noopener noreferrer">
                            <FaFacebookSquare/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label="Twitter" style={{}}>
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label="Twitter">
                            <IoLogoWhatsapp/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
