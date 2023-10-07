'use client'

import Card from 'react-bootstrap/Card';

export default function CardPokemonDetails({ pokemon }) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='border' variant="top" src={`${pokemon.sprites.front_default}`} />
                <Card.Body className='text-center text-capitalize'>
                    <Card.Title>{pokemon.name}</Card.Title>
                    <div className='row'>
                        <div className='col-12'>
                            Altura: {pokemon.height}
                        </div>
                        <div className='col-12'>
                            Peso: {pokemon.weight}
                        </div>
                        <div className='col-12 text-capitalize'>
                            Tipo: {pokemon.types[0].type.name}
                        </div>
                    </div>
            </Card.Body>
        </Card >
        </>
    )
}