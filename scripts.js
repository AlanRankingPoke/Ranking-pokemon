
const P = "Imagens/";
const S = "Imagens/Sprites/";
const C = "Imagens/Conquistas/";

// CRIAÇÃO DE SPRITES E TREINADORES

const sprite = (nome, arquivo, alternativas = []) => ({
    nome,
    arquivo,
    alternativas,
    imagem: S + arquivo + ".gif"
});

const treinador = (nome, pokemon, pontos, pokemonsPrincipais = []) => ({
    nome,
    pokemon,
    pontos,
    imagem: P + nome + ".webp",
    pokemonsPrincipais
});

// RANKING COMPLETO

const treinadores = [

    // TOP 10 - MUNDIAL

    treinador("Red", "Mega Charizard X", 610, [
        sprite("Mega Charizard X", "Zard X Red"),
        sprite("Tyranitar", "Tyranitar Red"),
        sprite("Espeon", "Espeon Red")
    ]),

    treinador("Cynthia", "Mega Garchomp", 601, [
        sprite("Mega Garchomp", "Chomp Cynthia"),
        sprite("Lucario", "Lucario Cynthia"),
        sprite("Spiritomb", "Spritomb Cynthia")
    ]),

    treinador("Ash", "Mega Lucario", 592, [
        sprite("Greninja", "Greninja Ash"),
        sprite("Infernape", "Infernape Ash"),
        sprite("Pikachu", "Pikachu Ash")
    ]),

    treinador("Yellow", "Mega Raichu Y", 584, [
        sprite("Mega Raichu Y", "Mega Raichu Y Y"),
        sprite("Golisopod", "Golisopod Y"),
        sprite("Rhyperior", "Rhyperior Y")
    ]),

    treinador("Callen", "Greninja Forma Callen", 575, [
        sprite("Mega Greninja", "Mega greninja Kallen"),
        sprite("Delphox", "Delphox Kallen"),
        sprite("Chesnaught", "Chesnaught Kallen")
    ]),

    treinador("Ethan", "Mega Typhlosion", 566, [
        sprite("Typhlosion", "typlosion Ethan"),
        sprite("Donphan", "Donphan Ethan"),
        sprite("Heracross", "Heracross Ethan")
    ]),

    treinador("Alder", "Mega Volcarona", 558, [
        sprite("Volcarona", "Volcarona Alder"),
        sprite("Bouffalant", "bouffalant Alder"),
        sprite("Amoonguss", "amoonguss Alder")
    ]),

    treinador("Alain", "Mega Charizard X", 549, [
        sprite("Mega Charizard X", "Zard X Alain"),
        sprite("Metagross", "Metagross Alain"),
        sprite("Weavile", "Weavile Alain")
    ]),

    {
        ...treinador("Gladion", "Mega Lycanroc", 540, [
            sprite("Mega Lycanroc", "Lyncarock Gladion"),
            sprite("Meowscarada", "Meowscarada Gladion"),
            sprite("Porygon-Z", "Porygon Z Gladion", [
                "Porygon-Z Gladion",
                "Porygon z Gladion",
                "PorygonZ Gladion",
                "porygon z Gladion",
                "porygon-z Gladion",
                "Porygon  Z Gladion"
            ])
        ]),
        imagem: P + "Gladion.jpg"
    },

    treinador("Blue", "Mega Blastoise", 531, [
        sprite("Mega Blastoise", "Mega Blastoise Blue"),
        sprite("Arcanine", "Arcanine Blue"),
        sprite("Scizor", "scizor Blue")
    ]),

    // DEMAIS NPCS

    ...[
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
    ].map(([nome, pokemon, pontos]) =>
        treinador(nome, pokemon, pontos)
    ),

    // JOGADORES

    {
        ...treinador("Bibi", "Charizard", 190, [
            sprite("Azumarill", "Azulmaril Bibi", [
                "Azumarill Bibi"
            ]),
            sprite("Charizard", "Charizard Bibi"),
            sprite("Pikachu", "Pikachu bibi"),
            sprite("Quilladin", "Quiladin Bibi"),
            sprite("Rockruff", "rockruff Bibi"),
            sprite("Vivillon", "Vivillon Bibi")
        ]),
        jogador: true,
        posicaoOficial: 75,
        medalhas: [
            C + "Copa iniciantes.webp",
            C + "Torneio Punhos de aço 2.png"
        ]
    },

    {
        ...treinador("Hana", "Mega Swampert", 187, [
            sprite("Mega Swampert", "Mega swampert Hana"),
            sprite("Scovillain", "scovillain Hana"),
            sprite("Sylveon", "sylveon Hana"),
            sprite("Corviknight", "corviknight Hana")
        ]),
        jogador: true,
        posicaoOficial: 76,
        medalhas: [
            C + "Copa iniciantes.webp",
            C + "Torneio Punhos de aço.png"
        ]
    },

    {
        ...treinador("Hiro", "Greninja", 157, [
            sprite("Decidueye", "decidueye Hiro"),
            sprite("Gabite", "Gabite Hiro"),
            sprite("Greninja", "Greninja Hiro"),
            sprite("Larvesta", "Larvesta Hiro"),
            sprite("Metang", "Metang Hiro")
        ]),
        jogador: true,
        posicaoOficial: 100,
        medalhas: [
            C + "Copa iniciantes 1.webp",
            C + "Torneio Punhos de aço 3.png"
        ]
    },

    {
        ...treinador("Verso", "Mega Typhlosion", 155, [
            sprite("Donphan", "donphan Verso"),
            sprite("Typhlosion", "Typlosion Verso"),
            sprite("Whimsicott", "whimscott Verso", [
                "whimsicott Verso",
                "Whimsicott Verso",
                "Whimscott Verso",
                "whimscot Verso",
                "whimsicott verso"
            ]),
            sprite("Bewear", "Bewear Verso")
        ]),
        jogador: true,
        posicaoOficial: 101,
        medalhas: [
            C + "Copa iniciantes 2.webp",
            C + "Torneios Punhos de aço.png"
        ]
    },

    {
        ...treinador("Match", "Cinderace", 153, [
            sprite("Cinderace", "cinderace Match"),
            sprite("Delphox", "Delphox Match"),
            sprite("Rotom-Heat", "rotom-heat Match"),
            sprite("Turtonator", "turtonator Match")
        ]),
        jogador: true,
        posicaoOficial: 102,
        medalhas: [
            C + "Copa iniciantes 3.webp"
        ]
    },

    {
        ...treinador("Kuran", "Feraligatr", 95, [
            sprite("Bellibolt", "bellibolt Kuran"),
            sprite("Feraligatr", "Feralighator Kuran"),
            sprite("Grovyle", "Groavyle Kuran"),
            sprite("Infernape", "infernape Kuran"),
            sprite("Noibat", "Noibat Kuran"),
            sprite("Ursaring", "Ursaring Kuran")
        ]),
        jogador: true,
        posicaoOficial: 163,
        medalhas: [
            C + "Torneio Punhos de aço.png"
        ]
    }
];

// ORDENAÇÃO

treinadores.sort((a, b) => b.pontos - a.pontos);

const ranking = document.getElementById("ranking");

const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
}[c]));

// SISTEMA DE CARREGAMENTO DOS SPRITES

const extensoes = [".gif", ".png", ".webp", ".jpg", ".jpeg"];

function caminhosSprite(p) {
    const nomes = [p.arquivo, ...(p.alternativas || [])];
    return nomes.flatMap(nome =>
        extensoes.map(ext => S + nome + ext)
    );
}

function configurarSprites(painel, t) {
    const lista = t.pokemonsPrincipais || [];
    const imagens = painel.querySelectorAll(".mini-card img");

    imagens.forEach((img, i) => {
        const p = lista[i];
        if (!p) return;

        const caminhos = caminhosSprite(p);
        let tentativa = 0;

        img.onerror = () => {
            tentativa++;

            if (tentativa < caminhos.length) {
                img.src = caminhos[tentativa];
            } else {
                img.onerror = null;
                img.alt = "Sprite não encontrado: " + p.nome;
                console.warn(
                    "Sprite não encontrado:",
                    p.nome,
                    "Arquivos tentados:",
                    caminhos
                );
            }
        };

        img.src = caminhos[0];
    });
}

// FAIXAS DO RANKING

function faixa(titulo, descricao, classe) {
    const li = document.createElement("li");
    li.className = "faixa-ranking " + classe;

    li.innerHTML = `
        <strong>${titulo}</strong>
        <span>${descricao}</span>
    `;

    ranking.appendChild(li);
}

// CONTEÚDO DAS ABAS

function conteudo(t, aba) {

    if (aba === "pokemons") {
        const lista = t.pokemonsPrincipais || [];

        return lista.length
            ? `<div class="galeria">
                ${lista.map(p => `
                    <div class="mini-card">
                        <img
                            alt="${esc(p.nome)}"
                            loading="lazy"
                        >
                        <span>${esc(p.nome)}</span>
                    </div>
                `).join("")}
            </div>`
            : `<p class="vazio">
                Pokémons principais serão adicionados em breve.
            </p>`;
    }

    if (aba === "rivalidades") {
        const lista = t.rivalidades || [];

        return lista.length
            ? `<div class="rivalidades-lista">
                ${lista.map(r => `
                    <div class="rivalidade-item">
                        ${r.imagem ? `
                            <img
                                src="${esc(r.imagem)}"
                                alt="${esc(r.treinador)}"
                                loading="lazy"
                            >
                        ` : ""}
                        <div>
                            <strong>⚔️ ${esc(r.treinador)}</strong>
                            <p>${esc(r.texto)}</p>
                        </div>
                    </div>
                `).join("")}
            </div>`
            : `<p class="vazio">
                As rivalidades deste treinador serão reveladas em breve.
            </p>`;
    }

    if (aba === "conquistas") {

        const galeria = lista => lista.length
            ? `<div class="galeria conquistas-galeria">
                ${lista.map(img => `
                    <img
                        src="${esc(img)}"
                        alt="Conquista"
                        loading="lazy"
                    >
                `).join("")}
            </div>`
            : `<p class="vazio">
                Nenhuma imagem cadastrada ainda.
            </p>`;

        return `
            <div class="bloco-conquistas">
                <h3>🏆 Troféus e medalhas</h3>
                ${galeria(t.medalhas || [])}

                <h3>🎖️ Insígnias</h3>
                ${galeria(t.insignias || [])}
            </div>
        `;
    }

    return "";
}

// MONTAGEM DOS CARTÕES

let categoriaAnterior = "";

treinadores.forEach((t, i) => {

    const pos = t.jogador ? t.posicaoOficial : i + 1;

    const categoria = pos <= 10
        ? "mundial"
        : pos <= 27
            ? "qualificatorias"
            : "disputa";

    if (categoria !== categoriaAnterior) {

        const faixas = {
            mundial: [
                "🏆 CLASSIFICADOS PARA O MUNDIAL",
                "1º ao 10º lugar",
                "faixa-mundial"
            ],
            qualificatorias: [
                "🌍 CLASSIFICADOS PARA AS QUALIFICATÓRIAS",
                "11º ao 27º lugar",
                "faixa-qualificatorias"
            ],
            disputa: [
                "⚔️ DISPUTANDO VAGA NAS QUALIFICATÓRIAS",
                "28º lugar em diante",
                "faixa-disputa"
            ]
        };

        faixa(...faixas[categoria]);
        categoriaAnterior = categoria;
    }

    const li = document.createElement("li");

    li.className = `card-treinador ${t.jogador ? "jogador" : "npc"}`;

    if (pos <= 3) {
        li.classList.add(
            ["primeiro", "segundo", "terceiro"][pos - 1]
        );
    }

    const abas = [
        ["pokemons", "🐉 Pokémons Principais"],
        ["rivalidades", "⚔️ Rivalidades"],
        ...(t.jogador ? [["conquistas", "🏅 Conquistas"]] : [])
    ];

    const id = `treinador-${i}`;

    li.innerHTML = `
        <div class="topo-card">
            <img
                class="foto-treinador"
                src="${esc(t.imagem)}"
                alt="${esc(t.nome)}"
                loading="lazy"
            >

            <div class="info">
                <strong>${pos}º — ${esc(t.nome)}</strong>

                <span class="pokemon-destaque">
                    Pokémon principal: ${esc(t.pokemon)}
                </span>

                ${t.classe
                    ? `<span>Classe: ${esc(t.classe)}</span>`
                    : ""
                }

                <span class="pontuacao">
                    ⭐ ${t.pontos} pontos
                </span>
            </div>
        </div>

        <div class="botoes-abas">
            ${abas.map(([aba, titulo]) => `
                <button
                    type="button"
                    class="botao-aba"
                    data-aba="${aba}"
                    aria-expanded="false"
                    aria-controls="${id}-painel"
                >
                    ${titulo}
                    <span class="seta">▾</span>
                </button>
            `).join("")}
        </div>

        <div
            class="painel-aba"
            id="${id}-painel"
            hidden
        ></div>
    `;

    const painel = li.querySelector(".painel-aba");
    const botoes = li.querySelectorAll(".botao-aba");

    botoes.forEach(botao => {

        botao.addEventListener("click", () => {

            const aberta =
                botao.getAttribute("aria-expanded") === "true";

            botoes.forEach(b => {
                b.setAttribute("aria-expanded", "false");
                b.classList.remove("ativo");
            });

            painel.hidden = aberta;

            painel.innerHTML = aberta
                ? ""
                : conteudo(t, botao.dataset.aba);

            if (!aberta) {
                botao.setAttribute("aria-expanded", "true");
                botao.classList.add("ativo");

                if (botao.dataset.aba === "pokemons") {
                    configurarSprites(painel, t);
                }
            }
        });
    });

    ranking.appendChild(li);
});
