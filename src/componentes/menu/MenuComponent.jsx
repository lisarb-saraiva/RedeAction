// MenuComponent.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

const services = [
    { id: 1, name: "Limpeza Residencial Completa", price: 150, rating: "4/5", description: "Serviço completo de limpeza para sua casa.", image: "./src/imagens/model.png" },
    { id: 2, name: "Manutenção de Piscinas", price: 200, rating: "5/5", description: "Limpeza e manutenção de piscinas.", image: "./src/imagens/model.png" },
    { id: 3, name: "Montagem de Móveis", price: 100, rating: "4.5/5", description: "Montagem profissional de móveis.", image: "./src/imagens/model.png" },
    { id: 4, name: "Reparos Elétricos Residenciais", price: 120, rating: "4.2/5", description: "Reparos elétricos com segurança e eficiência.", image: "./src/imagens/model.png" },
    { id: 5, name: "Lavagem de Veículos a Domicílio", price: 80, rating: "4.8/5", description: "Lavagem de veículos com qualidade.", image: "./src/imagens/model.png" },
    { id: 6, name: "Jardinagem", price: 90, rating: "4.6/5", description: "Cuidados e manutenção de jardins.", image: "./src/imagens/model.png" },
    { id: 7, name: "Manutenção de Dispositivos", price: 70, rating: "4.7/5", description: "Manutenção técnica de dispositivos eletrônicos.", image: "./src/imagens/model.png" },
];

const MenuComponent = () => {
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <img src="./src/imagens/logo.png" alt="Logo" style={styles.logo} />
                <h1 style={styles.title}>RedeAction</h1>
                <div style={styles.icons}>
                    <i className="fa fa-bell" style={styles.icon}></i>
                    <i className="fa fa-bars" style={styles.icon}></i>
                </div>
            </header>
            <div style={styles.serviceList}>
                {services.map(service => (
                    <div key={service.id} style={styles.serviceItem}>
                        <Link to={`/service/${service.id}`} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                            <img src={service.image} alt={service.name} style={styles.serviceImage} />
                            <div style={styles.serviceDetails}>
                                <h3 style={styles.serviceName}>{service.name}</h3>
                                <p style={styles.serviceDescription}>{service.description}</p>
                                <p style={styles.servicePrice}>R$ {service.price}</p>
                                <p style={styles.serviceRating}>Nota: {service.rating}</p>
                                <i className="fa fa-heart" style={styles.favoriteIcon}></i>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <footer style={styles.footer}>
                <i className="fa fa-home" style={styles.footerIcon}></i>
                <i className="fa fa-search" style={styles.footerIcon}></i>
                <i className="fa fa-briefcase" style={styles.footerIcon}></i>
                <i className="fa fa-user" style={styles.footerIcon}></i>
            </footer>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        margin:'0 250px',
        height: '100vh',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: '#f8f9fa3d',
        borderBottom: '1px solid #ddd',
    },
    logo: {
        width: '50px',
        marginRight: '20px',
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
        fontSize: '24px',
    },
    icons: {
        display: 'flex',
        gap: '15px',
    },
    icon: {
        fontSize: '24px',
        cursor: 'pointer',
    },
    serviceList: {
        overflowY: 'auto',
        flexGrow: 1,
        padding: '20px',
    },
    serviceItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '15px',
        padding: '10px',
        border: '1px solid #0a0a0a',
        borderRadius: '8px',
        backgroundColor: '#1e6bae7b',
    },
    serviceImage: {
        width: '100px',
        height: '100px',
        borderRadius: '8px',
        marginRight: '15px',
    },
    serviceDetails: {
        flexGrow: 1,
    },
    serviceName: {
        margin: '0',
    },
    serviceDescription: {
        margin: '5px 0',
        color: '#333',
        backgroundColor: '#68a5e7',
        padding: '5px',
        borderRadius: '4px',
    },
    servicePrice: {
        fontWeight: 'bold',
    },
    serviceRating: {
        margin: '5px 0',
    },
    link: {
        color: '#007BFF',
        textDecoration: 'none',
    },
    favoriteIcon: {
        fontSize: '20px',
        cursor: 'pointer',
        marginLeft: '10px',
        color: '#f3260691',
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '10px',
        borderTop: '1px solid #ddd',
        backgroundColor: '#f8f9fa30',
    },
    footerIcon: {
        fontSize: '24px',
        cursor: 'pointer',
    },
};

export default MenuComponent;