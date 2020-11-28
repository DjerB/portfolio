import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

const Icon = ({ name }) => {
    switch (name) {
        case 'GitHub':
            return <FiGithub />;
        case 'Linkedin':
            return <FaLinkedinIn />
        default: 
            return <span>No icon</span>
    }
}

export default Icon;