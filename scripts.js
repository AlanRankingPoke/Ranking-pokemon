const treinadores = [
    { nome: "Red", pokemon: "Mega Charizard X", pontos: 610, imagem: "Imagens/Red.webp" },
    { nome: "Cynthia", pokemon: "Mega Garchomp", pontos: 601, imagem: "Imagens/Cynthia.webp" },
    { nome: "Ash", pokemon: "Mega Lucario", pontos: 592, imagem: "Imagens/Ash.webp" },
    { nome: "Yellow", pokemon: "Mega Raichu Y", pontos: 584, imagem: "Imagens/Yellow.webp" },
    { nome: "Callen", pokemon: "Greninja Forma Callen", pontos: 575, imagem: "Imagens/Callen.webp" },
    { nome: "Ethan", pokemon: "Mega Typhlosion", pontos: 566, imagem: "Imagens/Ethan.webp" },
    { nome: "Kael", pokemon: "Mega Kingdra", pontos: 558, imagem: "Imagens/Kael.webp" },
    { nome: "Magnus", pokemon: "Mega Aggron", pontos: 549, imagem: "Imagens/Magnus.webp" },
    { nome: "Alder", pokemon: "Mega Volcarona", pontos: 540, imagem: "Imagens/Alder.webp" },
    { nome: "Alain", pokemon: "Mega Charizard X", pontos: 531, imagem: "Imagens/Alain.webp" },
    { nome: "Blue", pokemon: "Mega Blastoise", pontos: 522, imagem: "Imagens/Blue.webp" },
    { nome: "Iris", pokemon: "Mega Haxorus", pontos: 514, imagem: "Imagens/Iris.webp" },
    { nome: "Silver", pokemon: "Mega Gengar", pontos: 505, imagem: "Imagens/Silver.webp" },
    { nome: "Paul", pokemon: "Mega Electivire", pontos: 496, imagem: "Imagens/Paul.webp" },
    { nome: "N", pokemon: "Mega Zoroark", pontos: 488, imagem: "Imagens/N.webp" },
    { nome: "Bea", pokemon: "Mega Hitmontop", pontos: 479, imagem: "Imagens/Bea.webp" },
    { nome: "Lance", pokemon: "Mega Dragonite", pontos: 470, imagem: "Imagens/Lance.webp" },
    { nome: "Lorelei", pokemon: "Mega Aurorus", pontos: 461, imagem: "Imagens/Lorelei.webp" },
    { nome: "Padre Dough", pokemon: "Mega Umbreon", pontos: 452, imagem: "Imagens/Padre Dough.webp" },
    { nome: "Blaze", pokemon: "Mega Arcanine", pontos: 444, imagem: "Imagens/Blaze.webp" },
    { nome: "Drew", pokemon: "Mega Flygon", pontos: 426, imagem: "Imagens/Drew.webp" },
    { nome: "Tyrion", pokemon: "Mega Snorlax", pontos: 418, imagem: "Imagens/Tyrion.webp" },
    { nome: "Miriam", pokemon: "Mega Empoleon", pontos: 409, imagem: "Imagens/Miriam.webp" },
    { nome: "Marnie", pokemon: "Mega Grimmsnarl", pontos: 405, imagem: "Imagens/Marnie.webp" },
    { nome: "Sawyer", pokemon: "Mega Sceptile", pontos: 400, imagem: "Imagens/Sawyer.webp" },

    // JOGADORES
    {
        nome: "Bibi",
        pokemon: "Vivillon",
        pontos: 180,
        imagem: "Imagens/Bibi.webp",
        jogador: true,
        posicaoOficial: 85,
        medalhas: [
            "Imagens/Copa iniciantes.webp",
            "Imagens/Torneio Punhos de aço 2.png"
        ]
    },
    {
        nome: "Hana",
        pokemon: "Lucario",
        pontos: 152,
        imagem: "Imagens/Hana.webp",
        jogador: true,
        posicaoOficial: 98,
        medalhas: [
            "Imagens/Copa iniciantes.webp",
            "Imagens/Torneio Punhos de aço.png"
        ]
    },
    {
        nome: "Verso",
        pokemon: "Donphan",
        pontos: 140,
        imagem: "Imagens/Verso.webp",
        jogador: true,
        posicaoOficial: 111,
        medalhas: [
            "Imagens/Copa iniciantes 2.webp",
            "Imagens/Torneios Punhos de aço.png"
        ]
    },
    {
        nome: "Hiro",
        pokemon: "Frogadier",
        pontos: 125,
        imagem: "Imagens/Hiro.webp",
        jogador: true,
        posicaoOficial: 123,
        medalhas: [
            "Imagens/Copa iniciantes 1.webp",
            "Imagens/Torneio Punhos de aço 3.png"
        ]
    },
    {
        nome: "Match",
        pokemon: "Larvesta",
        pontos: 125,
        imagem: "Imagens/Match.webp",
        jogador: true,
        posicaoOficial: 124,
        medalhas: [
            "Imagens/Copa iniciantes 3.webp"
        ]
    },
    {
        nome: "Kuran",
        pokemon: "Croconaw",
        pontos: 80,
        imagem: "Imagens/Kuran.webp",
        jogador: true,
        posicaoOficial: 200,
        medalhas: [
            "Imagens/Torneio Punhos de aço.png"
        ]
    }
];

// PARA CADASTRAR NOVAS INFORMAÇÕES EM UM TREINADOR:
// classe: "Nome da classe",
// pokemonsPrincipais: [
//     { nome: "Pokémon", imagem: "Imagens/Pokemon.webp" }
// ],
// rivalidades: [
//     { treinador: "Nome", texto: "História", imagem: "Imagens/Rival.webp" }
// ],
// insignias: ["Imagens/Insignia.webp"]

const ranking = document.getElementById("ranking");

const escapeHTML = (valor) =>
    String(valor).replace(/[&<>"']/g, (c) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }[c]));

treinadores.sort((a, b) => b.pontos - a.pontos);

function criarFaixa(titulo, descricao, classe) {
    const faixa = document.createElement("li");

    faixa.className = `faixa-ranking ${classe}`;

    faixa.innerHTML = `
        <strong>${titulo}</strong>
        <span>${descricao}</span>
    `;

    ranking.appendChild(faixa);
}

function criarConteudoAba(treinador, aba) {

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

    const item = document.createElement("li");

    item.className = `card-treinador ${
        treinador.jogador ? "jogador" : "npc"
    }`;

    if (posicao === 1) item.classList.add("primeiro");
    if (posicao === 2) item.classList.add("segundo");
    if (posicao === 3) item.classList.add("terceiro");

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

    item.innerHTML = `
        <div class="topo-card">

            <img class="foto-treinador"
                 src="${escapeHTML(treinador.imagem)}"
                 alt="${escapeHTML(treinador.nome)}"
                 loading="lazy">

            <div class="info">
                <strong>${posicao}º — ${escapeHTML(treinador.nome)}</strong>

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

    const painel = item.querySelector(".painel-aba");
    const botoes = item.querySelectorAll(".botao-aba");

    botoes.forEach((botao) => {

        botao.addEventListener("click", () => {

            const estavaAberta =
                botao.getAttribute("aria-expanded") === "true";

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
