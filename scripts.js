const treinadores = [
    { nome: "Red", pokemon: "Mega Charizard X", pontos: 610, imagem: "imagens/Red.webp" },
    { nome: "Cynthia", pokemon: "Mega Garchomp", pontos: 601, imagem: "imagens/Cynthia.webp" },
    { nome: "Ash", pokemon: "Mega Lucario", pontos: 592, imagem: "imagens/Ash.webp" },
    { nome: "Yellow", pokemon: "Mega Raichu Y", pontos: 584, imagem: "imagens/Yellow.webp" },
    { nome: "Callen", pokemon: "Greninja Forma Callen", pontos: 575, imagem: "imagens/Callen.webp" },
    { nome: "Ethan", pokemon: "Mega Typhlosion", pontos: 566, imagem: "imagens/Ethan.webp" },
    { nome: "Kael", pokemon: "Mega Kingdra", pontos: 558, imagem: "imagens/Kael.webp" },
    { nome: "Magnus", pokemon: "Mega Aggron", pontos: 549, imagem: "imagens/Magnus.webp" },
    { nome: "Alder", pokemon: "Mega Volcarona", pontos: 540, imagem: "imagens/Alder.webp" },
    { nome: "Alain", pokemon: "Mega Charizard X", pontos: 531, imagem: "imagens/Alain.webp" },
    { nome: "Blue", pokemon: "Mega Blastoise", pontos: 522, imagem: "imagens/Blue.webp" },
    { nome: "Iris", pokemon: "Mega Haxorus", pontos: 514, imagem: "imagens/Iris.webp" },
    { nome: "Silver", pokemon: "Mega Gengar", pontos: 505, imagem: "imagens/Silver.webp" },
    { nome: "Paul", pokemon: "Mega Electivire", pontos: 516, imagem: "imagens/Paul.webp" },
    { nome: "N", pokemon: "Mega Zoroark", pontos: 488, imagem: "imagens/N.webp" },
    { nome: "Bea", pokemon: "Mega Hitmontop", pontos: 479, imagem: "imagens/Bea.webp" },
    { nome: "Lance", pokemon: "Mega Dragonite", pontos: 470, imagem: "imagens/Lance.webp" },
    { nome: "Lorelei", pokemon: "Mega Aurorus", pontos: 461, imagem: "imagens/Lorelei.webp" },
    { nome: "Padre Dough", pokemon: "Mega Umbreon", pontos: 452, imagem: "imagens/Padre Dough.webp" },
    { nome: "Blaze", pokemon: "Mega Arcanine", pontos: 444, imagem: "imagens/Blaze.webp" },
    { nome: "Marnie", pokemon: "Mega Grimmsnarl", pontos: 415, imagem: "imagens/Marnie.webp" },
    { nome: "Drew", pokemon: "Mega Flygon", pontos: 426, imagem: "imagens/Drew.webp" },
    { nome: "Tyrion", pokemon: "Mega Snorlax", pontos: 418, imagem: "imagens/Tyrion.webp" },
    { nome: "Miriam", pokemon: "Mega Empoleon", pontos: 409, imagem: "imagens/Miriam.webp" },
    { nome: "Sawyer", pokemon: "Mega Sceptile", pontos: 413, imagem: "imagens/Sawyer.webp" }
];

treinadores.sort((a, b) => b.pontos - a.pontos);

const ranking = document.getElementById("ranking");

treinadores.forEach((treinador, index) => {
    const item = document.createElement("li");
    if (index === 0) {
    item.classList.add("primeiro");
} else if (index === 1) {
    item.classList.add("segundo");
} else if (index === 2) {
    item.classList.add("terceiro");
}
   item.innerHTML = `
    ${treinador.imagem ? `<img src="${treinador.imagem}" alt="${treinador.nome}">` : ""}

    <div class="info">
        <strong>${index + 1}º — ${treinador.nome}</strong>
        <span>Pokémon principal: ${treinador.pokemon}</span>
        <span>${treinador.pontos} pontos</span>
    </div>
`;

    ranking.appendChild(item);
});