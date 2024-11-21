// LoginComponent.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import ForgotPassword from './componentes/esqueceu_senha/ForgotPassword';

const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isRecovering, setIsRecovering] = useState(false);
    const navigate = useNavigate(); // Use navigate hook

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Usuário:', username);
        console.log('Senha:', password);
        // Redirect to MenuComponent
        navigate('/menu'); // Change path to your desired route
    };

    const handleRecovery = (identifier) => {
        console.log(`Código enviado para: ${identifier}`);
    };

    const handleBack = () => {
        setIsRecovering(false);
    };

    return (
        <div style={styles.container}>
            <div>
                <img 
                    src="./src/imagens/download.png" 
                    alt="Logo"
                    style={styles.logo}
                />
            </div>
            {isRecovering ? (
                <ForgotPassword onSendCode={handleRecovery} onBack={handleBack} />
            ) : (
                <>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div style={styles.inputGroup}>
                            <label htmlFor="username">Usuário</label>
                            <input 
                                type="text" 
                                id="username" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                required 
                                style={styles.input} 
                            />
                        </div>
                        <div style={styles.inputGroup}>
                            <label htmlFor="password">Senha</label>
                            <div style={styles.passwordContainer}>
                                <input 
                                    type={showPassword ? 'text' : 'password'} 
                                    id="password" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required 
                                    style={styles.input} 
                                />
                                <button type="button" onClick={togglePasswordVisibility} style={styles.mostrar}>
                                    {showPassword ? (
                                        <i className="fa fa-eye"></i>
                                    ) : (
                                        <i className="fa fa-eye-slash"></i>
                                    )}
                                </button>
                            </div>
                        </div>
                        <div style={styles.linkContainer}>
                            <a onClick={() => setIsRecovering(true)} style={styles.link}>Esqueceu sua senha?</a>
                        </div>
                        <button type="submit" style={styles.button}>Entrar</button>
                        <Link to="/personal-data" style={{ textDecoration: 'none' }}>
                            <button type="button" style={styles.button}>Registrar</button>
                        </Link>
                    </form>
                </>
            )}
        </div>
    );
};

const styles = {
    container: {
        width: '600px',
        height: '500px',
        margin: '0 35%',
        padding: '20px',
        border: '10px solid #ccc',
        borderRadius: '18px',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    },
    inputGroup: {
        marginBottom: '15px',
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '16px',
        border: '2px solid #ccc',
    },
    passwordContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    linkContainer: {
        margin: '10px 0 0 200px',
        cursor: 'pointer',
    },

    button: {
        width: '100%',
        padding: '10px',
        borderRadius: '16px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#fff',
        cursor: 'pointer',
        marginTop: '10px',
    },
    logo: {
        backgroundColor: '#fbf4f4a8',
        width: '180px',
        display: 'flex',
        margin: '0 auto',
        border: '1px solid #0c92ec71',
        borderRadius: '6px',
    },
    mostrar: {
        margin: '0 0 0 30px',
        border: '2px solid #0c92ec',
        borderRadius: '24px',
    },
};

export default LoginComponent;