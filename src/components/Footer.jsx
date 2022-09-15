import React from 'react';
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import './Footer.css';




export const Footer = () => {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <BsInstagram />
                <AiOutlineTwitter />
                <BsFacebook />

            </div>
            <p> &copy; 2022 sayraflores.com</p>
        </div>
    )
}
