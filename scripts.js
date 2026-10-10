
const P = "Imagens/";
const S = "Imagens/Sprites/";
const C = "Imagens/Conquistas/";

// CRIAÇÃO DOS POKÉMON E TREINADORES

const sprite = (nome, arquivo, alternativas = []) => ({
    nome,
    arquivo,
    alternativas
});

const treinador = (nome, pokemon, pontos, pokemonsPrincipais = []) => ({
    nome,
    pokemon,
    pontos,
    imagem: P + nome + ".webp",
    pokemonsPrincipais
});

// CATÁLOGO DE INSÍGNIAS
// Novas insígnias podem ser adicionadas aqui.

const INSIGNIAS = {
    dragao: { nome: "Dragão", arquivo: "Dragão" },
    lutador: { nome: "Lutador", arquivo: "Lutador" },
    pedra: { nome: "Pedra", arquivo: "Pedra" },
    planta: { nome: "Planta", arquivo: "Planta" },
    valley: { nome: "Valley", arquivo: "Valley" }
};

// CATÁLOGO DE CAMPEONATOS
// Novos campeonatos podem ser adicionados aqui.

const CAMPEONATOS = {
    iniciantes: {
        nome: "Campeonato de Iniciantes",
        arquivo: "Campeonato de Iniciantes"
    },
    punhos: {
        nome: "Punhos de Ferro",
        arquivo: "Punhos de Ferro"
    },
    festival: {
        nome: "Festival Pokémon",
        arquivo: "Festival Pokémon"
    }
};

// CONQUISTAS DOS JOGADORES
// 0 = participou, mas não chegou ao pódio.
// 1, 2, 3 = colocação.
// Campeonato ausente = não participou.

const CONQUISTAS = {
    Bibi: {
        insignias: ["lutador", "planta", "pedra", "valley"],
        campeonatos: {
            iniciantes: 0,
            punhos: 2,
            festival: 0
        }
    },

    Hana: {
        insignias: ["planta", "dragao", "lutador", "valley"],
        campeonatos: {
            iniciantes: 0,
            punhos: 0,
            festival: 1
        }
    },

    Hiro: {
        insignias: ["planta", "pedra", "valley"],
        campeonatos: {
            iniciantes: 1,
            punhos: 3,
            festival: 2
        }
    },

    Verso: {
        insignias: ["lutador", "planta", "valley"],
        campeonatos: {
            iniciantes: 2,
            punhos: 1,
            festival: 0
        }
    },

    Match: {
        insignias: ["lutador", "planta", "dragao", "valley"],
        campeonatos: {
            iniciantes: 3,
            festival: 3
        }
    },

    Kuran: {
        insignias: ["dragao", "planta"],
        campeonatos: {
            punhos: 0,
            festival: 0
        }
    }
};

// HISTÓRIAS OFICIAIS DAS RIVALIDADES
// Para atualizar uma rivalidade, altere o texto do treinador.

const RIVALIDADES = {

    Hana: `Desde o primeiro dia na Academia Pokémon, Hana e Hiro construíram uma rivalidade marcada por provocações e batalhas intensas. Com duas vitórias para cada lado, o placar permanece empatado em 2 a 2, e nenhum dos dois parece disposto a ceder.

Curiosamente, Hana também considera a lendária treinadora Cynthia sua rival. O motivo? Ninguém sabe ao certo, e Hana não parece interessado em explicar.`,

    Hiro: `Para Hiro, rivalidade não é uma questão de quantidade, mas de importância. Desde os primeiros dias na Academia Pokémon, Hana se tornou seu maior adversário, protagonizando confrontos intensos e uma disputa que atualmente está empatada em 2 a 2.

Hiro não reconhece nenhum outro treinador como rival. Para ele, esse posto pertence exclusivamente a Hana.`,

    Bibi: `A rivalidade entre Bibi e Ryo nasceu no primeiro campeonato em que se enfrentaram. Desde então, os dois desenvolveram uma relação curiosa: grandes amigos fora das arenas, mas adversários determinados quando uma batalha começa.

Com Lucia Stone, a história é diferente. Após os acontecimentos do Festival Pokémon, Bibi carrega um desejo de vingança e espera ansiosamente pela oportunidade de uma revanche.

Já Hiro entrou nessa lista por um motivo inusitado: o Quilladin de Bibi desenvolveu sua própria rivalidade com ele. E, aparentemente, Bibi decidiu comprar a briga de seu Pokémon!`,

    Kuran: `Até o momento, Kuran não reconheceu nenhum treinador como seu rival. Em sua visão, ninguém demonstrou ser digno de ocupar esse posto.`,

    Verso: `Verso ainda não anunciou nenhuma rivalidade oficial. Para ele, nenhum treinador provou merecer esse título. Resta saber quem será capaz de mudar sua opinião.`,

    Match: `Match não considera ninguém seu rival atualmente. Até agora, nenhum adversário conseguiu conquistar esse reconhecimento.`
};

// RANKING COMPLETO

const treinadores = [

    // TOP 10 - CLASSIFICADOS PARA O MUNDIAL

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
        posicaoOficial: 75
    },

    {
        ...treinador("Hana", "Mega Swampert", 187, [
            sprite("Mega Swampert", "Mega swampert Hana"),
            sprite("Scovillain", "scovillain Hana"),
            sprite("Sylveon", "sylveon Hana"),
            sprite("Corviknight", "corviknight Hana")
        ]),
        jogador: true,
        posicaoOficial: 76
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
        posicaoOficial: 100
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
        posicaoOficial: 101
    },

    {
        ...treinador("Match", "Cinderace", 153, [
            sprite("Cinderace", "cinderace Match"),
            sprite("Delphox", "Delphox Match"),
            sprite("Rotom-Heat", "rotom-heat Match"),
            sprite("Turtonator", "turtonator Match")
        ]),
        jogador: true,
        posicaoOficial: 102
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
        posicaoOficial: 163
    }
];

// ORDENAÇÃO DO RANKING

treinadores.sort((a, b) => b.pontos - a.pontos);

const ranking = document.getElementById("ranking");

const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
}[c]));

// SISTEMA DE CARREGAMENTO DE IMAGENS

const extensoesSprites = [
    ".gif", ".png", ".webp", ".jpg", ".jpeg"
];

const extensoesConquistas = [
    ".png", ".webp", ".jpg", ".jpeg", ".gif"
];

function caminhosImagem(pasta, nomes, extensoes) {
    return nomes.flatMap(nome =>
        extensoes.map(ext => pasta + nome + ext)
    );
}

function carregarImagem(img, caminhos) {
    let tentativa = 0;

    img.onerror = () => {
        tentativa++;

        if (tentativa < caminhos.length) {
            img.src = caminhos[tentativa];
        } else {
            img.onerror = null;
            img.alt = "Imagem não encontrada";
            console.warn("Imagem não encontrada:", caminhos);
        }
    };

    if (caminhos.length) {
        img.src = caminhos[0];
    }
}

function configurarImagens(painel, t, aba) {

    if (aba === "pokemons") {
        const lista = t.pokemonsPrincipais || [];
        const imagens = painel.querySelectorAll(".mini-card img");

        imagens.forEach((img, i) => {
            const p = lista[i];
            if (!p) return;

            carregarImagem(
                img,
                caminhosImagem(
                    S,
                    [p.arquivo, ...(p.alternativas || [])],
                    extensoesSprites
                )
            );
        });
    }

    if (aba === "conquistas") {
        painel.querySelectorAll("img[data-conquista]").forEach(img => {
            carregarImagem(
                img,
                caminhosImagem(
                    C,
                    [img.dataset.conquista],
                    extensoesConquistas
                )
            );
        });
    }
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

// RESULTADOS DOS CAMPEONATOS

function resultadoCampeonato(posicao) {
    if (posicao === 0) {
        return {
            texto: "Participou — Sem pódio",
            cor: "#9ca3af"
        };
    }

    const resultados = {
        1: {
            texto: "🥇 1º lugar — Campeão",
            cor: "#f5c542"
        },
        2: {
            texto: "🥈 2º lugar — Vice-campeão",
            cor: "#c4ccd8"
        },
        3: {
            texto: "🥉 3º lugar",
            cor: "#d9945b"
        }
    };

    return resultados[posicao] || {
        texto: `${posicao}º lugar`,
        cor: "#9ca3af"
    };
}

// ABA DE CONQUISTAS

function conteudoConquistas(t) {
    const dados = CONQUISTAS[t.nome] || {
        insignias: [],
        campeonatos: {}
    };

    const insignias = dados.insignias
        .map(id => INSIGNIAS[id])
        .filter(Boolean);

    const campeonatos = Object.entries(dados.campeonatos)
        .filter(([id]) => CAMPEONATOS[id])
        .map(([id, posicao]) => ({
            ...CAMPEONATOS[id],
            posicao
        }));

    const galeriaInsignias = insignias.length
        ? `
            <div class="galeria">
                ${insignias.map(insignia => `
                    <div class="mini-card">
                        <img
                            data-conquista="${esc(insignia.arquivo)}"
                            alt="Insígnia ${esc(insignia.nome)}"
                            loading="lazy"
                        >
                        <span>${esc(insignia.nome)}</span>
                    </div>
                `).join("")}
            </div>
        `
        : `<p class="vazio">
            Nenhuma insígnia conquistada ainda.
        </p>`;

    const galeriaCampeonatos = campeonatos.length
        ? `
            <div class="lista-campeonatos">
                ${campeonatos.map(c => {
                    const resultado = resultadoCampeonato(c.posicao);

                    return `
                        <div class="card-campeonato"
                             style="
                                display:flex;
                                align-items:center;
                                gap:14px;
                                padding:12px;
                                margin-bottom:12px;
                                border:1px solid ${resultado.cor}77;
                                border-left:4px solid ${resultado.cor};
                                border-radius:12px;
                                background:rgba(128,128,128,0.07);
                             ">

                            <img
                                data-conquista="${esc(c.arquivo)}"
                                alt="${esc(c.nome)}"
                                loading="lazy"
                                style="
                                    width:85px;
                                    height:85px;
                                    object-fit:contain;
                                    flex-shrink:0;
                                "
                            >

                            <div style="
                                display:flex;
                                flex-direction:column;
                                gap:7px;
                                min-width:0;
                            ">
                                <strong style="
                                    font-size:15px;
                                    overflow-wrap:anywhere;
                                ">
                                    ${esc(c.nome)}
                                </strong>

                                <span style="
                                    color:${resultado.cor};
                                    font-weight:bold;
                                    font-size:13px;
                                ">
                                    ${esc(resultado.texto)}
                                </span>
                            </div>
                        </div>
                    `;
                }).join("")}
            </div>
        `
        : `<p class="vazio">
            Nenhuma participação em campeonatos registrada.
        </p>`;

    return `
        <div class="bloco-conquistas">
            <h3>🎖️ Insígnias Conquistadas</h3>
            ${galeriaInsignias}

            <h3 style="margin-top:24px;">
                🏆 Histórico de Campeonatos
            </h3>
            ${galeriaCampeonatos}
        </div>
    `;
}

// ABA DE RIVALIDADES - CAIXA DE TEXTO SIMPLES

function conteudoRivalidades(t) {
    const historia = RIVALIDADES[t.nome];

    if (!historia) {
        return `<p class="vazio">
            As rivalidades deste treinador serão reveladas em breve.
        </p>`;
    }

    return `
        <div class="caixa-rivalidade"
             style="
                padding:16px;
                border-radius:12px;
                border:1px solid rgba(150,150,150,0.3);
                background:rgba(128,128,128,0.08);
                line-height:1.75;
                font-size:14px;
                white-space:pre-line;
                overflow-wrap:break-word;
             ">${esc(historia)}</div>
    `;
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
        return conteudoRivalidades(t);
    }

    if (aba === "conquistas") {
        return conteudoConquistas(t);
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

                configurarImagens(
                    painel,
                    t,
                    botao.dataset.aba
                );
            }
        });
    });

    ranking.appendChild(li);
});
