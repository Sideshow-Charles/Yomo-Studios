import React from 'react';
import '../assets/styles/components/button.scss';

interface ButtonProps {
    content: string;
    // className?: string; 
}

const Button: React.FC<ButtonProps> = (props) => {
    const { content } = props;

    return (
        <button className="btn">
            {content}
        </button>
    );
};

export default Button;