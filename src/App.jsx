// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './LoginComponent';
import PersonalDataPage from './componentes/dados_pessoais/PersonalDataPage';
import UserDetailsPage from './componentes/dados_pessoais/UserDetailsPage';
import FinalizationPage from './componentes/dados_pessoais/FinalizationPage'; // Novo componente
import SuccessPage from './componentes/dados_pessoais/SuccessPage'; // Página de sucesso exemplo
import ForgotPassword from './componentes/esqueceu_senha/ForgotPassword';
import PasswordRecovery from './componentes/esqueceu_senha/PasswordRecovery';
import ChangePassword from './componentes/esqueceu_senha/ChangePassword'; // Importando o novo componente
import MenuComponent from './componentes/menu/MenuComponent';
import ServiceDetailsComponent from './componentes/menu/ServiceDetailsComponent';
import LocationSelectionComponent from './componentes/menu/LocationSelectionComponent';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginComponent />} />
                <Route path="/personal-data" element={<PersonalDataPage />} />
                <Route path="/menu" element={<MenuComponent />} />
                <Route path="/user-details" element={<UserDetailsPage />} />
                <Route path="/finalization" element={<FinalizationPage />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/password-recovery" element={<PasswordRecovery />} />
                <Route path="/success" element={<SuccessPage />} /> {/* Exemplo de página de sucesso */}
                <Route path="/change-password" element={<ChangePassword />} /> {/* Nova rota para ChangePassword */}
                <Route path="/service/:id" element={<ServiceDetailsComponent />} />
                <Route path="/availability/:id" element={<LocationSelectionComponent />} />
                
            </Routes>
        </Router>
    );
};

export default App;