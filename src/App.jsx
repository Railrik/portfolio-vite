import React, { useState, useEffect } from 'react';
import AnimatedCursor from "react-animated-cursor"

import { gsap } from 'gsap';

import './App.scss';
import Loader from './components/Loader/Loader';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
  // State pour le chargement
  const [isLoading, setIsLoading] = useState(true);

  // Gestionnaire pour indiquer que le chargement est terminé
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Effet pour animer le chargement et l'affichage de Wrapper
  useEffect(() => {
    // Lorsque le chargement des images est terminé
    if (!isLoading) {
      // Sélectionner les éléments DOM
      const loader = document.querySelector('.loader');
      const wrapper = document.querySelector('.wrapper');

      // Animer le loader pour le masquer
      gsap.to(loader, {
        autoAlpha: 0,
        duration: 0.5,
      });

      // Animer le wrapper (partie main du site) pour le rendre visible
      gsap.to(wrapper, {
        autoAlpha: 1,
        duration: 0.5,
      });
    }
  }, [isLoading]);

  return (
    <div className="app">
      <>
        <AnimatedCursor
          outerAlpha={1}
          innerSize={10}
          outerSize={20}
          outerScale={2}
          innerStyle={{
            backgroundColor: '#fff'
          }}
          outerStyle={{
            mixBlendMode: 'difference',
            backgroundColor: '#fff'
          }}
          clickables={[
            'a',
            'input',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.logo'
          ]}
        />
        <Loader onLoadingComplete={handleLoadingComplete} />
        <Wrapper />
      </>
    </div>
  );
}

export default App;
