import React from 'react'
import { Container } from 'react-bootstrap';
function Search ({ handleInput, search}) {
    return (
        <Container bg="dark" variant="dark">
        <section className="searchbox-wrap">
            <input
            type="text"
            placeholder="Поиск фильма"
            className="searchbox"
            onChange={handleInput}
            onKeyPress={search}
            />
            
        </section>
        </Container>
    )
}

export default Search