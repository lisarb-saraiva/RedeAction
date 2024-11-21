import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = ({ onSendCode, onBack }) => {
    const [identifier, setIdentifier] = useState('');
    const [message, setMessage] = useState('');
    const [codeSent, setCodeSent] = useState(false); // Adicionando estado para rastrear se o código foi enviado
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Chama a função para enviar o código de verificação
        onSendCode(identifier);
        setMessage('Um código de verificação foi enviado para recuperação da sua senha.');
        setIdentifier('');
        setCodeSent(true); // Atualiza o estado indicando que o código foi enviado
    };

    const handleNext = () => {
        // Redireciona para o componente PasswordRecovery
        navigate('/password-recovery');
    };

    return (
        <div style={styles.container}>
            <div style={styles.backContainer} onClick={onBack}>
                <i className="fa fa-arrow-left" style={styles.backIcon}></i>
                <span style={styles.backText}>Voltar</span>
            </div>
            <h2>Recuperar Senha</h2>
            <form onSubmit={handleSubmit}>
                <div style={styles.inputGroup}>
                    <label htmlFor="identifier">E-mail ou Telefone</label>
                    <input
                        type="text"
                        id="identifier"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                <button type="submit" style={styles.button}>Enviar Código</button>
                {message && <p style={styles.message}>{message}</p>}
                {codeSent && (
                    <button type="button" onClick={handleNext} style={styles.nextButton}>
                        Próximo
                    </button>
                )}
            </form>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        border: '2px solid #ccc',
        borderRadius: '10px',
    },
    backContainer: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        marginBottom: '20px',
    },
    backIcon: {
        fontSize: '20px',
        marginRight: '8px',
    },
    backText: {
        fontSize: '16px',
        color: '#007BFF',
    },
    inputGroup: {
        width: '100%',
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
        margin: '0',
    },
    nextButton: {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#28a745', // Cor diferente para o botão Próximo
        color: '#fff',
        cursor: 'pointer',
        marginTop: '10px', // Espaço acima do botão Próximo
    },
};

export default ForgotPassword;