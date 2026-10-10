const P = "Imagens/";
const S = "Imagens/Sprites/";
const C = "Imagens/Conquistas/";

const sprite = (nome, arquivo) => ({ nome, imagem: S + arquivo + ".gif" });

const treinadores = [
    {
        nome: "Red", pokemon: "Mega Charizard X", pontos: 610,
        imagem: P + "Red.webp",
        pokemonsPrincipais: [
            sprite("Mega Charizard X", "Zard X Red"),
            sprite("Tyranitar", "Tyranitar Red"),
            sprite("Espeon", "Espeon Red")
        ]
    },
    {
        nome: "Cynthia", pokemon: "Mega Garchomp", pontos: 601,
        imagem: P + "Cynthia.webp",
        pokemonsPrincipais: [
            sprite("Mega Garchomp", "Chomp Cynthia"),
            sprite("Lucario", "Lucario Cynthia"),
            sprite("Spiritomb", "Spritomb Cynthia")
        ]
    },
    {
        nome: "Ash", pokemon: "Mega Lucario", pontos: 592,
        imagem: P + "Ash.webp",
        pokemonsPrincipais: [
            sprite("Greninja", "Greninja Ash"),
            sprite("Infernape", "Infernape Ash"),
            sprite("Pikachu", "Pikachu Ash")
        ]
    },

    ...[
        ["Yellow", "Mega Raichu Y", 584],
        ["Callen", "Greninja Forma Callen", 575],
        ["Ethan", "Mega Typhlosion", 566],
        ["Kael", "Mega Kingdra", 558],
        ["Magnus", "Mega Aggron", 549],
        ["Alder", "Mega Volcarona", 540],
        ["Alain", "Mega Charizard X", 531],
        ["Blue", "Mega Blastoise", 522],
        ["Iris", "Mega Haxorus", 514],
        ["Silver", "Mega Gengar", 505],
        ["Paul", "Mega Electivire", 496],
        ["N", "Mega Zoroark", 488],
        ["Bea", "Mega Hitmontop", 479],
        ["Lance", "Mega Dragonite", 470],
        ["Lorelei", "Mega Aurorus", 461],
        ["Padre Dough", "Mega Umbreon", 452],
        ["Blaze", "Mega Arcanine", 444],
        ["Drew", "Mega Flygon", 426],
        ["Tyrion", "Mega Snorlax", 418],
        ["Miriam", "Mega Empoleon", 409],
        ["Marnie", "Mega Grimmsnarl", 405],
        ["Sawyer", "Mega Sceptile", 400]
    ].map(([nome, pokemon, pontos]) => ({
        nome, pokemon, pontos, imagem: P + nome + ".webp"
    })),

    ...[
        ["Bibi", "Vivillon", 180, 85, ["Copa iniciantes.webp", "Torneio Punhos de aço 2.png"]],
        ["Hana", "Lucario", 152, 98, ["Copa iniciantes.webp", "Torneio Punhos de aço.png"]],
        ["Verso", "Donphan", 140, 111, ["Copa iniciantes 2.webp", "Torneios Punhos de aço.png"]],
        ["Hiro", "Frogadier", 125, 123, ["Copa iniciantes 1.webp", "Torneio Punhos de aço 3.png"]],
        ["Match", "Larvesta", 125, 124, ["Copa iniciantes 3.webp"]],
        ["Kuran", "Croconaw", 80, 200, ["Torneio Punhos de aço.png"]]
    ].map(([nome, pokemon, pontos, posicaoOficial, medalhas]) => ({
        nome, pokemon, pontos, posicaoOficial,
        imagem: P + nome + ".webp",
        jogador: true,
        medalhas: medalhas.map(m => C + m)
    }))
];

treinadores.sort((a, b) => b.pontos - a.pontos);

const ranking = document.getElementById("ranking");

const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;",
    '"': "&quot;", "'": "&#39;"
}[c]));

function faixa(titulo, descricao, classe) {
    const li = document.createElement("li");
    li.className = "faixa-ranking " + classe;
    li.innerHTML = `<strong>${titulo}</strong><span>${descricao}</span>`;
    ranking.appendChild(li);
}

function conteudo(t, aba) {
    if (aba === "pokemons") {
        const lista = t.pokemonsPrincipais || [];
        return lista.length
            ? `<div class="galeria">${lista.map(p => `
                <div class="mini-card">
                    <img src="${esc(p.imagem)}" alt="${esc(p.nome)}" loading="lazy">
                    <span>${esc(p.nome)}</span>
                </div>`).join("")}</div>`
            : `<p class="vazio">Pokémons principais serão adicionados em breve.</p>`;
    }

    if (aba === "rivalidades") {
        const lista = t.rivalidades || [];
        return lista.length
            ? `<div class="rivalidades-lista">${lista.map(r => `
                <div class="rivalidade-item">
                    ${r.imagem ? `<img src="${esc(r.imagem)}" alt="${esc(r.treinador)}" loading="lazy">` : ""}
                    <div><strong>⚔️ ${esc(r.treinador)}</strong><p>${esc(r.texto)}</p></div>
                </div>`).join("")}</div>`
            : `<p class="vazio">As rivalidades deste treinador serão reveladas em breve.</p>`;
    }

    if (aba === "conquistas") {
        const galeria = lista => lista.length
            ? `<div class="galeria conquistas-galeria">${lista.map(img =>
                `<img src="${esc(img)}" alt="Conquista" loading="lazy">`
              ).join("")}</div>`
            : `<p class="vazio">Nenhuma imagem cadastrada ainda.</p>`;

        return `<div class="bloco-conquistas">
            <h3>🏆 Troféus e medalhas</h3>
            ${galeria(t.medalhas || [])}
            <h3>🎖️ Insígnias</h3>
            ${galeria(t.insignias || [])}
        </div>`;
    }

    return "";
}

let categoriaAnterior = "";

treinadores.forEach((t, i) => {
    const pos = t.jogador ? t.posicaoOficial : i + 1;
    const categoria = pos <= 10 ? "mundial" : pos <= 27 ? "qualificatorias" : "disputa";

    if (categoria !== categoriaAnterior) {
        const faixas = {
            mundial: ["🏆 CLASSIFICADOS PARA O MUNDIAL", "1º ao 10º lugar", "faixa-mundial"],
            qualificatorias: ["🌍 CLASSIFICADOS PARA AS QUALIFICATÓRIAS", "11º ao 27º lugar", "faixa-qualificatorias"],
            disputa: ["⚔️ DISPUTANDO VAGA NAS QUALIFICATÓRIAS", "28º lugar em diante", "faixa-disputa"]
        };
        faixa(...faixas[categoria]);
        categoriaAnterior = categoria;
    }

    const li = document.createElement("li");
    li.className = `card-treinador ${t.jogador ? "jogador" : "npc"}`;

    if (pos <= 3) {
        li.classList.add(["primeiro", "segundo", "terceiro"][pos - 1]);
    }

    const abas = [
        ["pokemons", "🐉 Pokémons Principais"],
        ["rivalidades", "⚔️ Rivalidades"],
        ...(t.jogador ? [["conquistas", "🏅 Conquistas"]] : [])
    ];

    const id = `treinador-${i}`;

    li.innerHTML = `
        <div class="topo-card">
            <img class="foto-treinador" src="${esc(t.imagem)}"
                 alt="${esc(t.nome)}" loading="lazy">
            <div class="info">
                <strong>${pos}º — ${esc(t.nome)}</strong>
                <span class="pokemon-destaque">Pokémon principal: ${esc(t.pokemon)}</span>
                ${t.classe ? `<span>Classe: ${esc(t.classe)}</span>` : ""}
                <span class="pontuacao">⭐ ${t.pontos} pontos</span>
            </div>
        </div>

        <div class="botoes-abas">
            ${abas.map(([aba, titulo]) => `
                <button type="button" class="botao-aba"
                    data-aba="${aba}" aria-expanded="false"
                    aria-controls="${id}-painel">
                    ${titulo} <span class="seta">▾</span>
                </button>`).join("")}
        </div>

        <div class="painel-aba" id="${id}-painel" hidden></div>
    `;

    const painel = li.querySelector(".painel-aba");
    const botoes = li.querySelectorAll(".botao-aba");

    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            const aberta = botao.getAttribute("aria-expanded") === "true";

            botoes.forEach(b => {
                b.setAttribute("aria-expanded", "false");
                b.classList.remove("ativo");
            });

            painel.hidden = aberta;
            painel.innerHTML = aberta ? "" : conteudo(t, botao.dataset.aba);

            if (!aberta) {
                botao.setAttribute("aria-expanded", "true");
                botao.classList.add("ativo");
            }
        });
    });

    ranking.appendChild(li);
});
