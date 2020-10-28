import React, { useState } from 'react';
import Product from '../../Components/Product/Product'
import Container from '../../Components/Container/Container'
import './Home.scss';

/*
* Página principal
*/
const Home = () => {
    const storage = JSON.parse(localStorage.getItem('lastItems'));
    const [lastView, setLastView] = useState(storage);

    return (
        <main className="home">
            <Container>
                {
                    !lastView && 
                    <h1 className="home-title">¡Buscá un producto!</h1>
                }

                {/* Si el componente encuentra ítems en el logalStorage renderiza los mismos en una lista */}
                {
                    lastView &&
                        <>
                            <h2 className="home-subtitle">Últimos buscados</h2>

                            <ul className="last-items">
                                { lastView.map(product => <Product key={product.id} {...product} />) }
                            </ul>
                        </>
                }
            </Container>
        </main>
    )
};

export default Home;