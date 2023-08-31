import React, { useEffect, useState } from 'react';
import './Footer.scss';
const Footer = () => {
    const [alreadyCsl, setAlreadyCsl] = useState(false)
    useEffect(() => {
        setAlreadyCsl(true)
        if (alreadyCsl) {
            const styles = `
            font-weight: bold;
            color: #c3d1d8;
            background:#0000ff;
          `;

            console.log('%cLigny Benjamin', styles);
            console.log('%cCopyright © 2023', styles);
            console.log('%chttps://ligny.pro', styles);
        }
    }, [alreadyCsl]);

    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-copy">
                    &copy; {new Date().getFullYear()} <a href='https://ligny.pro'>ligny.pro</a>. Tous droits réservés.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
