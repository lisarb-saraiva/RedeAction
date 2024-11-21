// FinalizationPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FinalizationPage = () => {
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [complement, setComplement] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const allData = JSON.parse(localStorage.getItem('allData'));
        if (!allData) {
            navigate('/'); // Redireciona se não houver dados
        }
    }, [navigate]);

    const handleFinalize = async (e) => {
        e.preventDefault();

        const finalData = JSON.parse(localStorage.getItem('allData'));
        const addressData = { state, city, neighborhood, houseNumber, complement };
        const completeData = { ...finalData, ...addressData };

        // Aqui você deve enviar os dados para o banco de dados
        // Simulação de envio
        console.log('Dados a serem enviados:', completeData);

        // Limpar os dados do localStorage após enviar
        localStorage.removeItem('allData');

        // Navegar para a próxima página (ou página de sucesso)
        navigate('/success');
    };

    return (
        <div style={styles.container}>
            <h2>Finalização do Cadastro</h2>
            <form onSubmit={handleFinalize}>
                <div style={styles.inputGroup}>
                    <label htmlFor="state">Estado</label>
                    <input
                        type="text"
                        id="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label htmlFor="city">Cidade</label>
                    <input
                        type="text"
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label htmlFor="neighborhood">Bairro</label>
                    <input
                        type="text"
                        id="neighborhood"
                        value={neighborhood}
                        onChange={(e) => setNeighborhood(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label htmlFor="houseNumber">Número da Casa</label>
                    <input
                        type="text"
                        id="houseNumber"
                        value={houseNumber}
                        onChange={(e) => setHouseNumber(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label htmlFor="complement">Complemento</label>
                    <input
                        type="text"
                        id="complement"
                        value={complement}
                        onChange={(e) => setComplement(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label>
                        <input
                            type="checkbox"
                            checked={termsAccepted}
                            onChange={() => setTermsAccepted(!termsAccepted)}
                            required
                        />
                        Aceito todos os termos de segurança e condições
                    </label>
                </div>
                <button type="submit" style={styles.button} disabled={!termsAccepted}>Finalizar</button>
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

export default FinalizationPage;