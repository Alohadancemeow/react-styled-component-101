import React from 'react'
import { Button } from '../../globalStyles'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa'
import {
    FooterContainer,
    FooterSubHeading,
    FooterSubText,
    FooterSubscription,
    Form,
    FormInput,
    FooterLink,
    FooterLinkItems,
    FooterLinksWrapper,
    FooterLinksContainer,
    FooterLinksTitle,
    SocialIcon,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrapper,
    WebsiteRights
} from './footer.element'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to
                    receive the latest news and trends
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time.
                </FooterSubText>

                <Form>
                    <FormInput name="email" type="email" placeholder='Your Email' />
                    <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>

            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinksTitle>About Us</FooterLinksTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Creator</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinksTitle>Contact Us</FooterLinksTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Creator</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinksTitle>Videos</FooterLinksTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Creator</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinksTitle>Social Media</FooterLinksTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Creator</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrapper>
                    <SocialLogo to="/">
                        <SocialIcon />
                            ULTRA KILL
                    </SocialLogo>
                    <WebsiteRights>ULTRA KILL 2021</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook" >
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram" >
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink
                            href="https://www.youtube.com/watch?v=iP_HqoCuRI0&t=3750s&ab_channel=BrianDesignBrianDesign"
                            target="_blank"
                            aria-label="Youtube"
                            rel="noopener"
                            noreferrer
                        >
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter" >
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="LinkedIn" >
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrapper>
            </SocialMedia>

        </FooterContainer>
    )
}

export default Footer
