import React from 'react';
import './Hobbies.scss';
import Fancybox from '../../../hooks/FancyBox';

import carrousel_1_jpg from '../../../assets/img/carrousel/jpg/1.jpg';
import carrousel_2_jpg from '../../../assets/img/carrousel/jpg/2.jpg';
import carrousel_3_jpg from '../../../assets/img/carrousel/jpg/3.jpg';
import carrousel_4_jpg from '../../../assets/img/carrousel/jpg/4.jpg';
import carrousel_5_jpg from '../../../assets/img/carrousel/jpg/5.jpg';

import carrousel_1_avif from '../../../assets/img/carrousel/avif/1.avif';
import carrousel_2_avif from '../../../assets/img/carrousel/avif/2.avif';
import carrousel_3_avif from '../../../assets/img/carrousel/avif/3.avif';
import carrousel_4_avif from '../../../assets/img/carrousel/avif/4.avif';
import carrousel_5_avif from '../../../assets/img/carrousel/avif/5.avif';

import carrousel_1_webp from '../../../assets/img/carrousel/webp/1.webp';
import carrousel_2_webp from '../../../assets/img/carrousel/webp/2.webp';
import carrousel_3_webp from '../../../assets/img/carrousel/webp/3.webp';
import carrousel_4_webp from '../../../assets/img/carrousel/webp/4.webp';
import carrousel_5_webp from '../../../assets/img/carrousel/webp/5.webp';

const Hobbies = () => {
    return (
        <div className="section section-hobbies" id="hobbies">
            <section className="demo-text">
                <h2 className="wrapper-content text">Hobbies</h2>
            </section>
            <section className="demo-gallery gallery-type-2 lerp">
                <Fancybox
                    options={{
                        Carousel: {
                            // infinite: false,
                        },
                    }}
                >

                    <ul className="wrapper-content">
                        <li>
                            <a href={carrousel_1_jpg} data-fancybox="hobbies" className="fancybox" data-caption="Musique">
                                <picture>
                                    <source srcSet={carrousel_1_avif} type="image/avif" />
                                    <source srcSet={carrousel_1_webp} type="image/webp" />
                                    <img src={carrousel_1_jpg} alt="musique" />
                                </picture>
                            </a>
                        </li>

                        <li>
                            <a href={carrousel_2_jpg} data-fancybox="hobbies" className="fancybox" data-caption="Tennis">
                                <picture>
                                    <source srcSet={carrousel_2_avif} type="image/avif" />
                                    <source srcSet={carrousel_2_webp} type="image/webp" />
                                    <img src={carrousel_2_jpg} alt="tennis" />
                                </picture>
                            </a>
                        </li>
                        <li>
                            <a href={carrousel_3_jpg} data-fancybox="hobbies" className="fancybox" data-caption="Jeux vidéo">
                                <picture>
                                    <source srcSet={carrousel_3_avif} type="image/avif" />
                                    <source srcSet={carrousel_3_webp} type="image/webp" />
                                    <img src={carrousel_3_jpg} alt="jeux vidéo" />
                                </picture>
                            </a>
                        </li>
                        <li>
                            <a href={carrousel_4_jpg} data-fancybox="hobbies" className="fancybox" data-caption="Nature">
                                <picture>
                                    <source srcSet={carrousel_4_avif} type="image/avif" />
                                    <source srcSet={carrousel_4_webp} type="image/webp" />
                                    <img src={carrousel_4_jpg} alt="nature" />
                                </picture>
                            </a>
                        </li>
                        <li>
                            <a href={carrousel_5_jpg} data-fancybox="hobbies" className="fancybox" data-caption="Skateboard électrique">
                                <picture>
                                    <source srcSet={carrousel_5_avif} type="image/avif" />
                                    <source srcSet={carrousel_5_webp} type="image/webp" />
                                    <img src={carrousel_5_jpg} alt="skateboard" />
                                </picture>
                            </a>
                        </li>
                    </ul>
                </Fancybox>
            </section>
        </div>
    );
};

export default Hobbies;
