import React from 'react';
import './Hobbies.scss';
import Fancybox from '../../../hooks/FancyBox';

import carrousel_1 from '../../../assets/img/carrousel/1.jpg';
import carrousel_2 from '../../../assets/img/carrousel/2.jpg';
import carrousel_3 from '../../../assets/img/carrousel/3.jpg';
import carrousel_4 from '../../../assets/img/carrousel/4.jpg';
import carrousel_5 from '../../../assets/img/carrousel/5.jpg';

const Hobbies = () => {
    return (
        <div className="section section-hobbies" id="hobbies">
            <section className="demo-text">
                <div className="wrapper-content text">Hobbies</div>
            </section>
            <section className="demo-gallery gallery-type-2">
                <Fancybox
                    options={{
                        Carousel: {
                            infinite: false,
                        },
                        // wheel: false,

                    }}
                >
                    <ul className="wrapper-content">
                        <li>
                            <a href={carrousel_1} data-fancybox="hobbies" className="fancybox" data-caption="Musique">
                                <img src={carrousel_1} alt="musique" />
                            </a>
                        </li>
                        <li>
                            <a href={carrousel_2} data-fancybox="hobbies" className="fancybox" data-caption="Tennis">
                                <img src={carrousel_2} alt="tennis" />
                            </a>
                        </li>
                        <li>
                            <a href={carrousel_3} data-fancybox="hobbies" className="fancybox" data-caption="Jeux vidéo">
                                <img src={carrousel_3} alt="Jeux vidéo" />
                            </a>
                        </li>
                        <li>
                            <a href={carrousel_4} data-fancybox="hobbies" className="fancybox" data-caption="Nature">
                                <img src={carrousel_4} alt="nature" />
                            </a>
                        </li>
                        <li>
                            <a href={carrousel_5} data-fancybox="hobbies" className="fancybox" data-caption="Skateboard électrique">
                                <img src={carrousel_5} alt="Skateboard" />
                            </a>
                        </li>
                    </ul>
                </Fancybox>
            </section>
        </div>
    );
};

export default Hobbies;
