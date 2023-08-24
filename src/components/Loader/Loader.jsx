import React, { useState, useEffect } from 'react';
import './Loader.scss';
import logoWhite from '../../assets/img/logo-white.png';
import imagesLoaded from 'imagesloaded';

const Loader = ({ onLoadingComplete }) => {
    // State pour stocker la progression du chargement
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Sélectionner toutes les images du site
        const images = document.querySelectorAll('img');
        const totalImages = images.length; // Obtenir le nombre total d'images
        let currentProgress = 0; // Initialiser la progression actuelle

        // Fonction pour incrémenter la progression
        const incrementProgress = () => {
            if (currentProgress <= totalImages) {
                // Calculer la progression en pourcentage
                setProgress(Math.round((currentProgress / totalImages) * 100));
                currentProgress++;
                setTimeout(incrementProgress, 100); // Répéter toutes les 100 millisecondes
            } else {
                onLoadingComplete(); // Appeler la fonction de chargement complet une fois terminé
            }
        };

        // Utiliser la bibliothèque imagesLoaded pour détecter lorsque toutes les images sont chargées
        imagesLoaded(images, { background: true }, () => {
            // Appel de la fonction d'incrémentation de progression
            incrementProgress();
        });
    }, []);

    return (
        <div className="loader">
            {/* Logo et texte de chargement */}
            <div>
                <h3 />
                <img src={logoWhite} alt="logo" width="80px" />
                <h4 className="loader--text">{progress} %</h4>
            </div>
        </div>
    );
};

export default Loader;
