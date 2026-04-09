
import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact.ts"
import "./app.css"

export function App() {
    const {fact, refreshFact} = useCatFact()
    const { imageUrl } = useCatImage({ fact });

    const handleClick = () => {
        refreshFact()
    }

    return (
        <main>
            <h1>Apps de Gatos</h1>
            <section>
                {
                    fact && <p>{fact}</p>
                }
                <button onClick={handleClick}>News Fact Cat</button>
                {
                    imageUrl && <img src={imageUrl} alt={`Image extracted using the firsh letter for ${fact}`} />
                }
            </section>
        </main>
    )
}  