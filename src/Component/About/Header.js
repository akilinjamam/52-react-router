import React from 'react';

import CustomLink from './CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>welcome to my fancy router</h1>
            <nav>
                <CustomLink to={"./home"}>Home</CustomLink>
                <CustomLink to={"./friends"}>Friends</CustomLink>
                <CustomLink to={"./posts"}>Posts</CustomLink>
                <CustomLink to={"./about"}>About</CustomLink>


            </nav>
        </div>
    );
};

export default Header;