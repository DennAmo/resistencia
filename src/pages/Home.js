import React from "react";

const Home = () => {
  
    return (
    <>
  <div className="home">

            <section className="hero">
                <div className="hero-content">
                    <h1>Throne Rebellion</h1>
                    <div className="store-buttons">
                        <a href="#" className="app-store">Discord</a>
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="feature">
                    <h3>ici on pourra</h3>
                    <p>dire des trucs pour se la péter</p>
                </div>
                <div className="feature">
                    <h3>faudra trouver de quoi remplir</h3>
                    <p>j'ai pas trop d'imagination</p>
                </div>
                <div className="feature">
                    <h3>faudra une banniere pour l'image au dessus</h3>
                    <p>avec des phrases qui résume la guilde pour ce texte</p>
                </div>
            </section>

            <section className="screenshots">
                <h2>là on pourrais mettre des screen de nous IG rassembler</h2>
                <div className="screenshot-grid">
                    <img src="/assets/complete.png" alt="Screenshot 1" />
                    <img src="/assets/complete.png" alt="Screenshot 2" />
                    <img src="/assets/complete.png" alt="Screenshot 3" />
                </div>
            </section>
        </div>
    </>
    );
  };
  
  export default Home;