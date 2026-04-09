import { useState, useEffect } from "react";

export function useCatImage({ fact }: { fact: string }) {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        if (!fact) return

        const letter = fact.split(" ")[0];

        fetch(`https://cataas.com/cat/says/${letter}?json=true`)
            .then(res => res.json())
            .then(data => setImageUrl(data.url))

    }, [fact])
    return { imageUrl }
}