// UserDetailsPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserDetailsPage = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const personalData = JSON.parse(localStorage.getItem('personalData'));
        if (!personalData) {
            navigate('/'); // Redireciona se não houver dados pessoais
        }
    }, [navigate]);

    const handleNext = () => {
        const userDetails = { email, phone, username };
        const personalData = JSON.parse(localStorage.getItem('personalData'));
        const allData = { ...personalData, ...userDetails };
        localStorage.setItem('allData', JSON.stringify(allData));
        navigate('/finalization'); // Navega para a próxima página
    };

    return (
        <div style={styles.container}>
            <h2>Detalhes do Usuário</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
                <div style={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label htmlFor="phone">Telefone</label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label htmlFor="username">Nome de Usuário</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                <button type="submit" style={styles.button}>Próximo</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        width: '400px',
        margin: '0 75%',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    inputGroup: {
        marginBottom: '15px',
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    button: {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#fff',
        cursor: 'pointer',
    },
};

export default UserDetailsPage;