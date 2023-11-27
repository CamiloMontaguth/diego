import './Footer.css';  // Asegúrate de tener este archivo para tus estilos

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2023 ColorBliss</p>
            <ul className="social-icons">
                <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="http://wa.link/bdnkc5" target="_blank" rel="noopener noreferrer">whatsApp</a></li>
                <li><a href="https://www.instagram.com/colorbliss.1/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
        </footer>
    );
}

export default Footer;
