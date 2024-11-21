// ServiceDetailsComponent.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

const serviceData = [
    { id: 1, name: "Limpeza Residencial Completa", price: 150, rating: "4/5", description: "Serviço completo de limpeza para sua casa.", details: "Detalhes adicionais sobre o serviço.", comments: [{ user: "Alice", rating: 5 }, { user: "Bob", rating: 4 }] },
    { id: 2, name: "Manutenção de Piscinas", price: 200, rating: "5/5", description: "Limpeza e manutenção de piscinas.", details: "Detalhes adicionais sobre o serviço.", comments: [{ user: "Carlos", rating: 5 }] },
    { id: 3, name: "Montagem de Móveis", price: 100, rating: "4.5/5", description: "Montagem profissional de móveis.", details: "Detalhes adicionais sobre o serviço.", comments: [{ user: "Dan", rating: 4 }, { user: "Eva", rating: 5 }] },
    { id: 4, name: "Reparos Elétricos Residenciais", price: 120, rating: "4.2/5", description: "Reparos eletrícos com segurança e eficiência.", details: "Detalhes adicionais sobre o serviço.", comments: [{ user: "Dan", rating: 4 }, { user: "Eva", rating: 5 }, {user: "Rafael", rating: 3}] },
    { id: 5, name: "Lavagem de Veículos a Domicílio", price: 80, rating: "4.8/5", description: "Lavagem de veículos de pequeno a médio porte com extrema qualidade.", details: "Detalhes adicionais sobre o serviço.", comments: [{ user: "Karyna", rating: 4 }, { user: "Lisarb", rating: 5 }, {user: "Italo", rating: 4}] },
    { id: 6, name: "Jardinagem", price: 90, rating: "4.6/5", description: "Cuidados e manutenção de jardins.", details: "Detalhes adicionais sobre o serviço.", comments: [{ user: "Carlos", rating: 2 }, { user: "Eduardo", rating: 5 }, {user: "Raquel", rating: 4}] },
    { id: 7, name: "Manutenção de Dispositivos", price: 70, rating: "4.7/5", description: "Manutenção técnica de dispositivos eletrônicos.", details: "Detalhes adicionais sobre o serviço.", comments: [{ user: "Dan", rating: 4 }, { user: "Eva", rating: 5 }] },
    // Add other services as needed
];

const ServiceDetailsComponent = () => {
    const { id } = useParams();
    const service = serviceData.find(s => s.id === parseInt(id));

    if (!service) {
        return <div>Serviço não encontrado.</div>;
    }

    return (
        <div style={styles.container}>
            
            <h1>{service.name}</h1>
            <p><strong>Preço:</strong> R$ {service.price}</p>
            <p><strong>Nota:</strong> {service.rating}</p>
            <p><strong>Descrição:</strong> {service.description}</p>
            <p><strong>Detalhes:</strong> {service.details}</p>
            <Link to={`/availability/${service.id}`} style={styles.link}>Ver localidade</Link>
            <div style={styles.commentsSection}>
                <h2>Comentários:</h2>
                {service.comments.length > 0 ? (
                    service.comments.map((comment, index) => (
                        <div key={index}>
                            <strong>{comment.user}:</strong> {comment.rating} estrelas
                        </div>
                    ))
                ) : (
                    <p>Sem comentários.</p>
                )}
            </div>
            <div style={styles.buttons}>
                <Link to="/menu">
                    <button style={styles.button}>Voltar</button>
                </Link>
                <button style={styles.button}>Contratar</button>
                
            </div>
            
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        margin: '0 200px',
    },
    link: {
        color: '#007BFF',
        textDecoration: 'none',
        margin: '10px 0',
    },
    commentsSection: {
        marginTop: '20px',
    },

    image: {
        height: '300px',
        border: '2px solid #fff',
        display: 'flex',
    },
    buttons: {
        display: 'flex',
        gap: '10px',
        marginTop: '20px',
    },
    button: {
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#fff',
        cursor: 'pointer',
    },
};

export default ServiceDetailsComponent;