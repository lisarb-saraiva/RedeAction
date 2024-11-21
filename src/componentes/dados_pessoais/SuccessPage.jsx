// SuccessPage.jsx
import React from 'react';

const SuccessPage = () => {
    return (
        <div style={styles.container}>
            <h2>Cadastro Concluído!</h2>
            <p>Seu cadastro foi realizado com sucesso.</p>
        </div>
    );
};

const styles = {
    container: {
        width: '400px',
        margin: '0 75%',
        padding: '20px',
        textAlign: 'center',
    },
};

export default SuccessPage;