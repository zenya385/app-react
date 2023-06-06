import Section from "./components/Section";
import PaintingList from "./components/PaintingList";
import paintings from "../src/paintings.json";

function App() {
  return (
    <div>
      <Section title="Gallery">
        <PaintingList items={paintings} />
      </Section>

      <Section title="Top gallery" />
    </div>
  );
}

export default App;
