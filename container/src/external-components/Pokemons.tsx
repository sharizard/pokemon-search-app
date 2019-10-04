import React, { useEffect } from 'react';

const Pokemons: React.FC = () => {

    useEffect(() => {
        const pokemons = (window as any).Pokemons;
        pokemons && pokemons.mount();
        return () => {
            pokemons.unmount();
        };
    }, [])

    return (
        <div id="pokemons"></div>
    )
};

export default Pokemons;
