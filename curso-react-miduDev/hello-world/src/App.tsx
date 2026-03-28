
import { TwFollowCard } from "./components/TwFollowCard"
import './App.css'

export function App() {
  return (
    <section className="app">
      <h3>Twitter Follow Card</h3>
      <TwFollowCard name="Midudev" userName="midudev" rank={1} />
      <TwFollowCard name="Daniel Blanco" userName="danielblanco96" rank={2} />
      <TwFollowCard name="Damian Catanzaro" userName="dcatanzaro" rank={3} />
      <TwFollowCard name="Eudy Joel" userName="Joel-RD" rank={4} />
    </section>
  )
}