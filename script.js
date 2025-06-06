const facts = [
  "Bananas are berries, but strawberries aren't.",
  "Octopuses have three hearts.",
  "Honey never spoils.",
  "A group of flamingos is called a flamboyance.",
  "The Eiffel Tower can grow taller in summer.",
  "Rainbows are an effect from total internal reflection."
];

function showFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  document.getElementById("fact").textContent = facts[randomIndex];
}
