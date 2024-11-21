// LocationSelectionComponent.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

const LocationSelectionComponent = () => {
    const [address, setAddress] = useState('');
    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);

    useEffect(() => {
        const loadMap = () => {
            const googleMapsScript = document.createElement('script');
            googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
            googleMapsScript.async = true;
            document.body.appendChild(googleMapsScript);

            window.initMap = () => {
                const initialLocation = { lat: -23.550520, lng: -46.633308 }; // Default to São Paulo
                const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
                    zoom: 12,
                    center: initialLocation,
                });
                setMap(mapInstance);

                const markerInstance = new window.google.maps.Marker({
                    position: initialLocation,
                    map: mapInstance,
                });
                setMarker(markerInstance);

                mapInstance.addListener('click', (event) => {
                    const clickedLocation = { lat: event.latLng.lat(), lng: event.latLng.lng() };
                    markerInstance.setPosition(clickedLocation);
                    setSelectedLocation(clickedLocation);
                });
            };
        };

        loadMap();
    }, []);

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleAddressSubmit = (e) => {
        e.preventDefault();
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address }, (results, status) => {
            if (status === 'OK') {
                const location = results[0].geometry.location;
                map.setCenter(location);
                marker.setPosition(location);
                setSelectedLocation({ lat: location.lat(), lng: location.lng() });
            } else {
                alert('Endereço não encontrado: ' + status);
            }
        });
    };

     return (
        <div style={styles.container}>
            <header style={styles.header}>
                <img src="./src/imagens/logo.png" alt="Logo" style={styles.logo} />
                <h1 style={styles.title}>RedeAction</h1>
            </header>
            <div id="map" style={styles.map}></div>
            <form onSubmit={handleAddressSubmit} style={styles.addressForm}>
                <input
                    type="text"
                    value={address}
                    onChange={handleAddressChange}
                    placeholder="Digite o endereço"
                    style={styles.addressInput}
                />
                <button type="submit" style={styles.addressButton}>Buscar</button>
            </form>
            <div style={styles.buttons}>
                <Link to="/menu">
                    <button style={styles.button}>Voltar</button>
                </Link>
                <Link to="/date-selection">
                    <button style={styles.button} disabled={!selectedLocation}>Próximo</button>
                </Link>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        margin: '0 200px',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
    },
    logo: {
        width: '50px',
        marginRight: '20px',
    },
    title: {
        fontSize: '24px',
        flexGrow: 1,
    },
    map: {
        height: '400px',
        marginBottom: '20px',
    },
    addressForm: {
        display: 'flex',
        gap: '10px',
        marginBottom: '20px',
    },
    addressInput: {
        flexGrow: 1,
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    addressButton: {
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#fff',
        cursor: 'pointer',
    },
    buttons: {
        display: 'flex',
        gap: '10px',
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

export default LocationSelectionComponent;