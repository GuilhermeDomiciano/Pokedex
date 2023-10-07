'use client'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

export default function CardPokemonHome({ pokemon }) {
    return (
        <>
            <Card style={{ width: '15rem' }}>
                <Card.Body className='text-center text-capitalize'>
                    <Card.Title>{pokemon.name}</Card.Title>
                    <Button variant="danger">
                        <Link className='text-decoration-none text-white' href={`${pokemon.name}`}>Detalhes</Link>
                    </Button>
                </Card.Body>
            </Card>
        </>
    )
}