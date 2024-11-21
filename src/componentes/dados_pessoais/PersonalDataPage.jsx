// PersonalDataPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PersonalDataPage = () => {
    const [fullName, setFullName] = useState('');
    const [cpf, setCpf] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate();

    const handleNext = () => {
        const personalData = { fullName, cpf, birthDate, gender };
        // Armazena os dados em local storage ou no estado global, se necessário
        localStorage.setItem('personalData', JSON.stringify(personalData));
        navigate('/user-details'); // Navega para a próxima página
    };

    return (
        <div style={styles.container}>
            <div style={styles.logoContainer}>
                <img 
                    src="./src/imagens/download.png" 
                    alt="Logo"
                    style={styles.logo}
                />
                
            </div>
            <button onClick={() => navigate(-1)} style={styles.backButton}>
                    Voltar
                </button>
            <h2>Dados Pessoais</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
                <div style={styles.inputGroup}>
                    <label htmlFor="fullName">Nome Completo</label>
                    <input
                        type="text"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label htmlFor="cpf">CPF</label>
                    <input
                        type="text"
                        id="cpf"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label htmlFor="birthDate">Data de Nascimento</label>
                    <input
                        type="date"
                        id="birthDate"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label>Sexo</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="masculino"
                                checked={gender === 'masculino'}
                                onChange={(e) => setGender(e.target.value)}
                                required
                            />
                            Masculino
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="feminino"
                                checked={gender === 'feminino'}
                                onChange={(e) => setGender(e.target.value)}
                                required
                            />
                            Feminino
                        </label>
                    </div>
                </div>
                <button type="submit" style={styles.button}>Próximo</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        width: '400px',
        margin: '0 70%',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',
    },
    logo: {
        backgroundColor: '#fbf4f4a8',
        width: '180px',
        display: 'flex',
        margin: '0 auto',
        border: '1px solid #0c92ec71',
        borderRadius: '6px',
    },
    backButton: {
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#fff',
        cursor: 'pointer',
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

export default PersonalDataPage;