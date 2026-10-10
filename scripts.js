// ========================================
// RANKING POKÉMON RPG
// ========================================

// PASTAS DE IMAGENS
const PASTA_PERSONAGENS = "Imagens/";
const PASTA_CONQUISTAS = "Imagens/Conquistas/";
const PASTA_SPRITES = "Imagens/Sprites/";

// ========================================
// TREINADORES
// ========================================

const treinadores = [

    // RED
    {
        nome: "Red",
        pokemon: "Mega Charizard X",
        pontos: 610,
        imagem: PASTA_PERSONAGENS + "Red.webp",

        pokemonsPrincipais: [
            {
                nome: "Mega Charizard X",
                imagem: PASTA_SPRITES + "Zard X Red.gif"
            },
            {
                nome: "Tyranitar",
                imagem: PASTA_SPRITES + "Tyranitar Red.gif"
            },
            {
                nome: "Espeon",
                imagem: PASTA_SPRITES + "Espeon Red.gif"
            }
        ]
    },

    // CYNTHIA
    {
        nome: "Cynthia",
        pokemon: "Mega Garchomp",
        pontos: 601,
        imagem: PASTA_PERSONAGENS + "Cynthia.webp",

        pokemonsPrincipais: [
            {
                nome: "Mega Garchomp",
                imagem: PASTA_SPRITES + "Chomp Cynthia.gif"
            },
            {
                nome: "Lucario",
                imagem: PASTA_SPRITES + "Lucario Cynthia.gif"
            },
            {
                nome: "Spiritomb",
                imagem: PASTA_SPRITES + "Spiritomb Cynthia.gif"
            }
        ]
    },

    // ASH
    {
        nome: "Ash",
        pokemon: "Mega Lucario",
        pontos: 592,
        imagem: PASTA_PERSONAGENS + "Ash.webp",

        pokemonsPrincipais: [
            {
                nome: "Greninja",
                imagem: PASTA_SPRITES + "Greninja Ash.gif"
            },
            {
                nome: "Infernape",
                imagem: PASTA_SPRITES + "Infernape Ash.gif"
            },
            {
                nome: "Pikachu",
                imagem: PASTA_SPRITES + "Pikachu Ash.gif"
            }
        ]
    },

    { nome: "Yellow", pokemon: "Mega Raichu Y", pontos: 584, imagem: PASTA_PERSONAGENS + "Yellow.webp" },
    { nome: "Callen", pokemon: "Greninja Forma Callen", pontos: 575, imagem: PASTA_PERSONAGENS + "Callen.webp" },
    { nome: "Ethan", pokemon: "Mega Typhlosion", pontos: 566, imagem: PASTA_PERSONAGENS + "Ethan.webp" },
    { nome: "Kael", pokemon: "Mega Kingdra", pontos: 558, imagem: PASTA_PERSONAGENS + "Kael.webp" },
    { nome: "Magnus", pokemon: "Mega Aggron", pontos: 549, imagem: PASTA_PERSONAGENS + "Magnus.webp" },
    { nome: "Alder", pokemon: "Mega Volcarona", pontos: 540, imagem: PASTA_PERSONAGENS + "Alder.webp" },
    { nome: "Alain", pokemon: "Mega Charizard X", pontos: 531, imagem: PASTA_PERSONAGENS + "Alain.webp" },
    { nome: "Blue", pokemon: "Mega Blastoise", pontos: 522, imagem: PASTA_PERSONAGENS + "Blue.webp" },
    { nome: "Iris", pokemon: "Mega Haxorus", pontos: 514, imagem: PASTA_PERSONAGENS + "Iris.webp" },
    { nome: "Silver", pokemon: "Mega Gengar", pontos: 505, imagem: PASTA_PERSONAGENS + "Silver.webp" },
    { nome: "Paul", pokemon: "Mega Electivire", pontos: 496, imagem: PASTA_PERSONAGENS + "Paul.webp" },
    { nome: "N", pokemon: "Mega Zoroark", pontos: 488, imagem: PASTA_PERSONAGENS + "N.webp" },
    { nome: "Bea", pokemon: "Mega Hitmontop", pontos: 479, imagem: PASTA_PERSONAGENS + "Bea.webp" },
    { nome: "Lance", pokemon: "Mega Dragonite", pontos: 470, imagem: PASTA_PERSONAGENS + "Lance.webp" },
    { nome: "Lorelei", pokemon: "Mega Aurorus", pontos: 461, imagem: PASTA_PERSONAGENS + "Lorelei.webp" },
    { nome: "Padre Dough", pokemon: "Mega Umbreon", pontos: 452, imagem: PASTA_PERSONAGENS + "Padre Dough.webp" },
    { nome: "Blaze", pokemon: "Mega Arcanine", pontos: 444, imagem: PASTA_PERSONAGENS + "Blaze.webp" },
    { nome: "Drew", pokemon: "Mega Flygon", pontos: 426, imagem: PASTA_PERSONAGENS + "Drew.webp" },
    { nome: "Tyrion", pokemon: "Mega Snorlax", pontos: 418, imagem: PASTA_PERSONAGENS + "Tyrion.webp" },
    { nome: "Miriam", pokemon: "Mega Empoleon", pontos: 409, imagem: PASTA_PERSONAGENS + "Miriam.webp" },
    { nome: "Marnie", pokemon: "Mega Grimmsnarl", pontos: 405, imagem: PASTA_PERSONAGENS + "Marnie.webp" },
    { nome: "Sawyer", pokemon: "Mega Sceptile", pontos: 400, imagem: PASTA_PERSONAGENS + "Sawyer.webp" },

    // ========================================
    // JOGADORES DA CAMPANHA
    // ========================================

    {
        nome: "Bibi",
        pokemon: "Vivillon",
        pontos: 180,
        imagem: PASTA_PERSONAGENS + "Bibi.webp",
        jogador: true,
        posicaoOficial: 85,
        medalhas: [
            PASTA_CONQUISTAS + "Copa iniciantes.webp",
            PASTA_CONQUISTAS + "Torneio Punhos de aço 2.png"
        ]
    },

    {
        nome: "Hana",
        pokemon: "Lucario",
        pontos: 152,
        imagem: PASTA_PERSONAGENS + "Hana.webp",
        jogador: true,
        posicaoOficial: 98,
        medalhas: [
            PASTA_CONQUISTAS + "Copa iniciantes.webp",
            PASTA_CONQUISTAS + "Torneio Punhos de aço.png"
        ]
    },

    {
        nome: "Verso",
        pokemon: "Donphan",
        pontos: 140,
        imagem: PASTA_PERSONAGENS + "Verso.webp",
        jogador: true,
        posicaoOficial: 111,
        medalhas: [
            PASTA_CONQUISTAS + "Copa iniciantes 2.webp",
            PASTA_CONQUISTAS + "Torneios Punhos de aço.png"
        ]
    },

    {
        nome: "Hiro",
        pokemon: "Frogadier",
        pontos: 125,
        imagem: PASTA_PERSONAGENS + "Hiro.webp",
        jogador: true,
        posicaoOficial: 123,
        medalhas: [
            PASTA_CONQUISTAS + "Copa iniciantes 1.webp",
            PASTA_CONQUISTAS + "Torneio Punhos de aço 3.png"
        ]
    },

    {
        nome: "Match",
        pokemon: "Larvesta",
        pontos: 125,
        imagem: PASTA_PERSONAGENS + "Match.webp",
        jogador: true,
        posicaoOficial: 124,
        medalhas: [
            PASTA_CONQUISTAS + "Copa iniciantes 3.webp"
        ]
    },

    {
        nome: "Kuran",
        pokemon: "Croconaw",
        pontos: 80,
        imagem: PASTA_PERSONAGENS + "Kuran.webp",
        jogador: true,
        posicaoOficial: 200,
        medalhas: [
            PASTA_CONQUISTAS + "Torneio Punhos de aço.png"
        ]
    }
];

// ========================================
// ORGANIZAÇÃO DO RANKING
// ========================================

treinadores.sort((a, b) => b.pontos - a.pontos);

const ranking = document.getElementById("ranking");

const escapeHTML = (valor) =>
    String(valor).replace(/[&<>"']/g, (c) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }[c]));

// ========================================
// FAIXAS DE CLASSIFICAÇÃO
// ========================================

function criarFaixa(titulo, descricao, classe) {

    const faixa = document.createElement("li");

    faixa.className = `faixa-ranking ${classe}`;

    faixa.innerHTML = `
        <strong>${titulo}</strong>
        <span>${descricao}</span>
    `;

    ranking.appendChild(faixa);
}

// ========================================
// CONTEÚDO DAS ABAS
// ========================================

function criarConteudoAba(treinador, aba) {

    // POKÉMONS PRINCIPAIS
    if (aba === "pokemons") {

        const pokemons = treinador.pokemonsPrincipais || [];

        if (!pokemons.length) {
            return '<p class="vazio">Pokémons principais serão adicionados em breve.</p>';
        }

        return `
            <div class="galeria">
                ${pokemons.map((p) => `
                    <div class="mini-card">
                        <img src="${escapeHTML(p.imagem)}"
                             alt="${escapeHTML(p.nome)}"
                             loading="lazy">
                        <span>${escapeHTML(p.nome)}</span>
                    </div>
                `).join("")}
            </div>
        `;
    }

    // RIVALIDADES
    if (aba === "rivalidades") {

        const rivalidades = treinador.rivalidades || [];

        if (!rivalidades.length) {
            return '<p class="vazio">As rivalidades deste treinador serão reveladas em breve.</p>';
        }

        return `
            <div class="rivalidades-lista">
                ${rivalidades.map((r) => `
                    <div class="rivalidade-item">

                        ${r.imagem ? `
                            <img src="${escapeHTML(r.imagem)}"
                                 alt="${escapeHTML(r.treinador)}"
                                 loading="lazy">
                        ` : ""}

                        <div>
                            <strong>⚔️ ${escapeHTML(r.treinador)}</strong>
                            <p>${escapeHTML(r.texto)}</p>
                        </div>

                    </div>
                `).join("")}
            </div>
        `;
    }

    // CONQUISTAS DOS JOGADORES
    if (aba === "conquistas") {

        const medalhas = treinador.medalhas || [];
        const insignias = treinador.insignias || [];

        const imagens = (lista) => lista.length
            ? `
                <div class="galeria conquistas-galeria">
                    ${lista.map((arquivo) => `
                        <img src="${escapeHTML(arquivo)}"
                             alt="Conquista"
                             loading="lazy">
                    `).join("")}
                </div>
            `
            : '<p class="vazio">Nenhuma imagem cadastrada ainda.</p>';

        return `
            <div class="bloco-conquistas">

                <h3>🏆 Troféus e medalhas</h3>
                ${imagens(medalhas)}

                <h3>🎖️ Insígnias</h3>
                ${imagens(insignias)}

            </div>
        `;
    }

    return "";
}

// ========================================
// CRIAÇÃO DOS CARTÕES
// ========================================

let categoriaAnterior = "";

treinadores.forEach((treinador, index) => {

    const posicao = treinador.jogador
        ? treinador.posicaoOficial
        : index + 1;

    const categoria = posicao <= 10
        ? "mundial"
        : posicao <= 27
            ? "qualificatorias"
            : "disputa";

    // DIVISÕES DO MUNDIAL
    if (categoria !== categoriaAnterior) {

        if (categoria === "mundial") {
            criarFaixa(
                "🏆 CLASSIFICADOS PARA O MUNDIAL",
                "1º ao 10º lugar",
                "faixa-mundial"
            );
        }

        if (categoria === "qualificatorias") {
            criarFaixa(
                "🌍 CLASSIFICADOS PARA AS QUALIFICATÓRIAS",
                "11º ao 27º lugar",
                "faixa-qualificatorias"
            );
        }

        if (categoria === "disputa") {
            criarFaixa(
                "⚔️ DISPUTANDO VAGA NAS QUALIFICATÓRIAS",
                "28º lugar em diante",
                "faixa-disputa"
            );
        }

        categoriaAnterior = categoria;
    }

    // CRIA O CARTÃO
    const item = document.createElement("li");

    item.className = `card-treinador ${
        treinador.jogador ? "jogador" : "npc"
    }`;

    // TOP 3
    if (posicao === 1) item.classList.add("primeiro");
    if (posicao === 2) item.classList.add("segundo");
    if (posicao === 3) item.classList.add("terceiro");

    // ABAS DISPONÍVEIS
    const abas = [
        {
            id: "pokemons",
            titulo: "🐉 Pokémons Principais"
        },
        {
            id: "rivalidades",
            titulo: "⚔️ Rivalidades"
        },
        ...(treinador.jogador
            ? [{ id: "conquistas", titulo: "🏅 Conquistas" }]
            : [])
    ];

    const id = `treinador-${index}`;

    // CONTEÚDO DO CARTÃO
    item.innerHTML = `
        <div class="topo-card">

            <img class="foto-treinador"
                 src="${escapeHTML(treinador.imagem)}"
                 alt="${escapeHTML(treinador.nome)}"
                 loading="lazy">

            <div class="info">

                <strong>
                    ${posicao}º — ${escapeHTML(treinador.nome)}
                </strong>

                <span class="pokemon-destaque">
                    Pokémon principal: ${escapeHTML(treinador.pokemon)}
                </span>

                ${treinador.classe
                    ? `<span>Classe: ${escapeHTML(treinador.classe)}</span>`
                    : ""}

                <span class="pontuacao">
                    ⭐ ${treinador.pontos} pontos
                </span>

            </div>

        </div>

        <div class="botoes-abas">
            ${abas.map((aba) => `
                <button type="button"
                        class="botao-aba"
                        aria-expanded="false"
                        aria-controls="${id}-painel"
                        data-aba="${aba.id}">

                    ${aba.titulo}
                    <span class="seta">▾</span>

                </button>
            `).join("")}
        </div>

        <div class="painel-aba"
             id="${id}-painel"
             hidden>
        </div>
    `;

    // ========================================
    // FUNCIONAMENTO DAS ABAS
    // ========================================

    const painel = item.querySelector(".painel-aba");
    const botoes = item.querySelectorAll(".botao-aba");

    botoes.forEach((botao) => {

        botao.addEventListener("click", () => {

            const estavaAberta =
                botao.getAttribute("aria-expanded") === "true";

            // FECHA AS OUTRAS ABAS
            botoes.forEach((b) => {
                b.setAttribute("aria-expanded", "false");
                b.classList.remove("ativo");
            });

            if (estavaAberta) {

                painel.hidden = true;
                painel.innerHTML = "";

            } else {

                botao.setAttribute("aria-expanded", "true");
                botao.classList.add("ativo");

                painel.innerHTML = criarConteudoAba(
                    treinador,
                    botao.dataset.aba
                );

                painel.hidden = false;
            }
        });
    });

    ranking.appendChild(item);
});
