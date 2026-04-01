import { useState, useEffect } from "react";
import "./app.css"

const ENDPOINT_CAT_FACT = "https://catfact.ninja/fact"

export function App() {
    const [fact, setFact] = useState('');
    const [word, setWord] = useState('bye');
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        fetch(ENDPOINT_CAT_FACT)
            .then(res => res.json())
            .then(data => {
                const letter = data.fact
                setFact(letter)
                setWord(letter.split(" ")[0])
            })
    }, [])

    useEffect(() => {
        if (!word) return
        fetch(`https://cataas.com/cat/says/${word}?json=true`)
            .then(res => res.json())
            .then(data => setImageUrl(data.url))

    }, [fact])

    return (
        <main>
            <h1>Apps de Gatos</h1>
            <section>
                {
                    fact && <p>{fact}</p>
                }
                {
                    imageUrl && <img src={imageUrl} alt={`Image extracted using the firsh letter for ${fact}`} />
                }
            </section>
        </main>
    )
}  