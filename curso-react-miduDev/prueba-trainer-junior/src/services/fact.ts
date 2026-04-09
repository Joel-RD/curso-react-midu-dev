const ENDPOINT_CAT_FACT = "https://catfact.ninja/fact"
export async function getRandomFact() {
    return await fetch(ENDPOINT_CAT_FACT)
        .then(res => res.json())
        .then(data => data.fact)
}
