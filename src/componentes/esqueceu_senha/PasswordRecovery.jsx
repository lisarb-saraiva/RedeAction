import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

const PasswordRecovery = () => {
    const [code, setCode] = useState('');
    const navigate = useNavigate();

    const handleVerifyCode = (e) => {
        e.preventDefault();
        // Aqui você deve incluir a lógica para verificar o código
        console.log('Código enviado:', code);
        // Se o código estiver correto, redirecionar para a próxima etapa
        navigate('/change-password'); // Redireciona para o componente ChangePassword
    };

    const handleResendCode = () => {
        // Redireciona de volta para o ForgotPassword para reenviar o código
        navigate('/forgot-password');
    };

    return (
        <div style={styles.container}>
            <h2>Recuperação de Senha</h2>
            <form onSubmit={handleVerifyCode}>
                <div style={styles.inputGroup}>
                    <label htmlFor="code">Código de Verificação</label>
                    <input
                        type="text"
                        id="code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.backContainer} onClick={handleResendCode}>
                    <span style={styles.backText}>Reenviar Código</span>
                </div>
                <button type="submit" style={styles.button}>Próximo</button>
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
};

export default PasswordRecovery;