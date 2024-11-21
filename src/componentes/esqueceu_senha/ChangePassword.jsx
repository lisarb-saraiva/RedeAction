import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

const ChangePassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            alert('As senhas não correspondem!');
            return;
        }
        // Aqui você deve incluir a lógica para alterar a senha
        console.log('Nova senha:', newPassword);
        // Redireciona para a página de login após alterar a senha
        navigate('/');
    };

    return (
        <div style={styles.container}>
            <h2>Alterar Sua Senha</h2>
            <form onSubmit={handleSubmit}>
                <div style={styles.inputGroup}>
                    <label htmlFor="newPassword">Nova Senha</label>
                    <div style={styles.passwordContainer}>
                        <input
                            type={showNewPassword ? 'text' : 'password'}
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            style={styles.input}
                        />
                        <i 
                            className={`fa ${showNewPassword ? 'fa-eye-slash' : 'fa-eye'}`} 
                            onClick={() => setShowNewPassword(!showNewPassword)} 
                            style={styles.eyeIcon}
                        ></i>
                    </div>
                </div>
                <div style={styles.inputGroup}>
                    <label htmlFor="confirmPassword">Confirmar Senha</label>
                    <div style={styles.passwordContainer}>
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            style={styles.input}
                        />
                        <i 
                            className={`fa ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`} 
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                            style={styles.eyeIcon}
                        ></i>
                    </div>
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
    inputGroup: {
        width: '100%',
        marginBottom: '15px',
    },
    passwordContainer: {
        position: 'relative',
        width: '100%',
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    eyeIcon: {
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        fontSize: '18px',
        color: '#007BFF', // Cor do ícone
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

export default ChangePassword;