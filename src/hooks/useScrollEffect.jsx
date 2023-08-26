import { useEffect } from 'react';
import { gsap } from 'gsap';

const useScrollEffect = () => {
    // const lerp = (v0, v1, t) => {
    //     return v0 * (1 - t) + v1 * t;
    // };

    // const handleMouseWheel = (e) => {
    //     window.scrollY -= e.deltaY * 0.3;
    // };

    // const skewOnChange = (scrollPos) => {
    //     gsap.to(".wrapper-content", {
    //         skewY: scrollPos * -0.2,
    //         overwrite: "auto",
    //     });
    // };

    // useEffect(() => {
    //     let scrollPos = 0;
    //     let oldScrollPos = 0;

    //     const render = () => {
    //         requestAnimationFrame(render);
    //         // Calcul de la position de défilement
    //         scrollPos = lerp(scrollPos, window.scrollY, 0.1);

    //         if (Math.abs(scrollPos - oldScrollPos) > 0.1) {
    //             skewOnChange(scrollPos - oldScrollPos);
    //             oldScrollPos = scrollPos;
    //         }
    //     };

    //     window.addEventListener("wheel", handleMouseWheel);
    //     render();

    //     return () => {
    //         window.removeEventListener("wheel", handleMouseWheel);
    //     };
    // }, []);

};

export default useScrollEffect;
