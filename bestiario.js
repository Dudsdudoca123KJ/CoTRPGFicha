export const officialMonsters = [
{
id:"errante_mana",name:"Errante da Mana",category:"comum",role:"Perseguidor",difficulty:1,focus:"Mágico / Saber",pv:18,def:14,movement:4,xp:40,points:14,attributes:{FOR:3,DES:2,INT:4,SAB:3,VIG:2},
description:"Humanoide deformado por uma concentração instável de mana. Persegue criaturas que entram em seu território.",
skills:["Golpe Instável: ataque 1d20 + FOR contra a DEF; causa 1d8 de dano.","Investida: se avançar pelo menos 2 espaços antes do ataque, recebe +2 na rolagem."],
traits:["Quando fica com metade dos PV ou menos, seus ataques causam +2 de dano."]
},
{
id:"aracnideo_cristalino",name:"Aracnídeo Cristalino",category:"comum",role:"Emboscador",difficulty:1,focus:"Precisão",pv:18,def:17,movement:5,xp:40,points:14,attributes:{FOR:2,DES:5,INT:1,SAB:4,VIG:2},
description:"Aranha de carapaça cristalina que se camufla em cavernas e locais ricos em minerais.",
skills:["Presas Cristalinas: ataque 1d20 + DES contra a DEF; causa 1d6 de dano.","Teia Cristalina: um alvo a até 4 espaços faz teste de DES, CD 12. Quem falhar fica Imobilizado.","Salto Predatório: pode saltar até 3 espaços antes de realizar seu ataque."],
traits:["Prefere atacar alvos isolados ou distraídos."]
},
{
id:"lobo_veu",name:"Lobo do Véu",category:"comum",role:"Caçador veloz",difficulty:1,focus:"Precisão / Físico",pv:18,def:17,movement:6,xp:40,points:14,attributes:{FOR:3,DES:5,INT:1,SAB:3,VIG:2},
description:"Predador parcialmente espectral que atravessa florestas cobertas por névoa e persegue criaturas feridas.",
skills:["Mordida Espectral: ataque 1d20 + DES contra a DEF; causa 1d6 de dano.","Passo Nebuloso: uma vez a cada 2 turnos, atravessa espaços ocupados e obstáculos pequenos durante seu deslocamento."],
traits:["Recebe vantagem no ataque contra um alvo que já tenha sido ferido por ele."]
},
{
id:"vigia_desfigurado",name:"Vigia Desfigurado",category:"comum",role:"Suporte e perturbação",difficulty:1,focus:"Saber / Mágico",pv:18,def:15,movement:4,xp:40,points:14,attributes:{FOR:1,DES:3,INT:3,SAB:5,VIG:2},
description:"Criatura flutuante com um grande olho e apêndices deformados. Observa invasores e auxilia outros monstros.",
skills:["Raio Distorcido: ataque 1d20 + INT contra a DEF; causa 1d4 de dano.","Olhar Perturbador: um alvo visível faz teste de SAB, CD 12. Se falhar, fica Confuso.","Sinalizador: escolhe um alvo visível; o próximo ataque de outro monstro contra ele recebe vantagem até o próximo turno do Vigia."],
traits:["Tenta manter distância e apoiar outras criaturas."]
},
{
id:"lobo",name:"Lobo",category:"comum",role:"Predador de matilha",difficulty:1,focus:"Precisão",pv:21,def:17,movement:6,xp:40,points:14,attributes:{FOR:3,DES:5,INT:0,SAB:3,VIG:3},
description:"Predador ágil que costuma caçar em grupo, cercando a presa antes de avançar.",
skills:["Mordida: ataque 1d20 + DES contra a DEF; causa 1d6 de dano.","Caçada em Matilha: recebe vantagem no ataque contra um alvo adjacente a outro lobo aliado."],
traits:[]
},
{
id:"javali",name:"Javali",category:"comum",role:"Investida",difficulty:1,focus:"Físico",pv:24,def:15,movement:5,xp:50,points:14,attributes:{FOR:5,DES:3,INT:0,SAB:2,VIG:4},
description:"Animal robusto e territorial, que usa as presas e o impulso do próprio corpo para atacar.",
skills:["Presas: ataque 1d20 + FOR contra a DEF; causa 1d8 de dano.","Arrancada: se avançar pelo menos 2 espaços em linha reta antes de atacar, recebe +2 na rolagem."],
traits:[]
},
{
id:"sentinela_oca",name:"Sentinela Oca",category:"comum",role:"Defensor",difficulty:2,focus:"Físico",pv:37,def:17,movement:2,xp:60,points:17,attributes:{FOR:5,DES:1,INT:1,SAB:3,VIG:7},
description:"Armadura antiga animada por uma força desconhecida. Guarda ruínas, portões e salões esquecidos.",
skills:["Golpe de Metal: ataque 1d20 + FOR contra a DEF; causa 1d8 de dano.","Guarda Inabalável: até o início de seu próximo turno, recebe +2 DEF."],
traits:["Enquanto Guarda Inabalável estiver ativa, não pode ser empurrada."]
},
{
id:"hospedeiro_fungico",name:"Hospedeiro Fúngico",category:"comum",role:"Controle de área",difficulty:2,focus:"Saber / Físico",pv:31,def:15,movement:2,xp:60,points:17,attributes:{FOR:3,DES:1,INT:3,SAB:5,VIG:5},
description:"Corpo humanoide tomado por fungos e raízes. Espalha esporos em ambientes úmidos e subterrâneos.",
skills:["Braço Fúngico: ataque 1d20 + FOR contra a DEF; causa 1d8 de dano.","Nuvem de Esporos: criaturas em até 2 espaços fazem teste de VIG, CD 12. Quem falhar fica Envenenado.","Raízes Aprisionadoras: um alvo adjacente faz teste de FOR, CD 12. Se falhar, fica Imobilizado."],
traits:["Não é afetado pela condição Envenenado."]
},
{
id:"urso",name:"Urso",category:"comum",role:"Força bruta",difficulty:2,focus:"Físico",pv:34,def:16,movement:4,xp:80,points:17,attributes:{FOR:6,DES:2,INT:0,SAB:3,VIG:6},
description:"Animal de grande porte e força física, capaz de afastar invasores com golpes poderosos.",
skills:["Patada: ataque 1d20 + FOR contra a DEF; causa 1d10 de dano.","Investida: se avançar pelo menos 2 espaços antes de atacar, recebe +2 na rolagem."],
traits:[]
},
{
id:"carnage",name:"Carnage",category:"comum",role:"Criatura mutada",difficulty:2,focus:"Físico / Precisão",pv:31,def:13,movement:4,xp:60,points:17,attributes:{FOR:5,DES:3,INT:1,SAB:3,VIG:5},
description:"Criatura que já foi comum, mas acabou contaminada por uma substância orgânica desconhecida. Sua carne pulsa, seus músculos e ossos se deformam e partes do corpo podem se alongar de maneira anormal. A aparência e os movimentos variam conforme a criatura original.",
skills:["Golpe Disforme: ataque 1d20 + FOR contra a DEF; causa 1d8 de dano.","Fibras Alongadas: atinge um alvo a até 4 espaços. Faça 1d20 + DES contra a DEF; causa 1d6 de dano.","Regeneração Pulsante: se não receber dano desde o fim de seu turno anterior, recupera 3 PV no início do turno."],
traits:["Corpo Contaminado: não pode ficar Envenenado. Sua aparência depende da criatura que foi contaminada.","Variantes exemplificadas no manual: Lobo Carnage, Urso Carnage e Humano Carnage."]
},
{
id:"devastador_rochoso",name:"Devastador Rochoso",category:"comum",role:"Força bruta",difficulty:3,focus:"Físico",pv:47,def:17,movement:3,xp:80,points:20,attributes:{FOR:7,DES:1,INT:0,SAB:3,VIG:9},
description:"Fera quadrúpede coberta por placas minerais. Usa o próprio peso para romper obstáculos e afastar invasores.",
skills:["Patada Brutal: ataque 1d20 + FOR contra a DEF; causa 1d8 de dano.","Impacto Brutal: atinge uma criatura adjacente. Se acertar, ela faz teste de FOR, CD 12; se falhar, fica Atordoada."],
traits:["Couraça Mineral: reduz em 2 o dano recebido de ataques físicos."]
},
{
id:"coracao_enraizado",name:"O Coração Enraizado",category:"chefe",role:"Controlador de território",difficulty:4,focus:"Físico / Saber",pv:91,def:25,movement:1,xp:250,points:23,attributes:{FOR:6,DES:1,INT:4,SAB:5,VIG:7},
description:"Árvore ancestral alimentada por mana, cujas raízes se espalham por toda a área do confronto. O terreno faz parte da batalha.",
skills:["Chicote de Raízes: ataque 1d20 + FOR contra a DEF; causa 2d8 de dano.","Raízes Famintas: escolhe até 2 alvos a até 5 espaços. Cada um faz teste de DES, CD 15; quem falhar fica Imobilizado.","Pulso Vital: recupera 8 PV. Pode usar uma vez por combate.","Despertar da Floresta: ao chegar à metade dos PV, cria áreas de raízes. O terreno escolhido pelo mestre reduz o deslocamento em 2 espaços."],
traits:["Raízes e obstáculos próximos podem ser usados como cobertura ou elementos táticos."]
},
{
id:"rei_sem_rosto",name:"O Rei Sem Rosto",category:"chefe",role:"Duelista e comandante",difficulty:5,focus:"Físico / Precisão / Saber",pv:88,def:29,movement:4,xp:300,points:26,attributes:{FOR:7,DES:5,INT:2,SAB:6,VIG:6},
description:"Antigo soberano vestido em armadura negra. Sua presença impõe silêncio e obediência, embora ninguém conheça seu verdadeiro rosto.",
skills:["Lâmina Amaldiçoada: ataque 1d20 + FOR contra a DEF; causa 2d8 de dano.","Sentença Real: um alvo visível faz teste de SAB, CD 15. Se falhar, fica com Medo.","Postura do Soberano: no início do turno, escolhe uma postura até o próximo turno: Defensiva (+2 DEF) ou Ofensiva (+2 dano nos ataques).","Decreto Final: ao chegar à metade dos PV, realiza um ataque contra cada inimigo adjacente; cada alvo resolve a DEF separadamente."],
traits:["Sua postura deve ser anunciada antes de resolver as ações do turno."]
},
{
id:"fragmento_faminto",name:"O Fragmento Faminto",category:"chefe",role:"Ameaça arcana",difficulty:5,focus:"Mágico / Saber",pv:80,def:28,movement:4,xp:250,points:26,attributes:{FOR:4,DES:4,INT:7,SAB:6,VIG:5},
description:"Massa instável de mana que muda de forma e absorve energia de habilidades lançadas contra ela.",
skills:["Estilhaço de Mana: ataque 1d20 + INT contra a DEF; causa 2d4 de dano.","Deformação: no início de cada turno, escolhe uma forma: Agressiva (+2 no ataque), Defensiva (+2 DEF) ou Instável (ataques atingem uma área de 2 espaços, mas causam 1d4 a menos).","Absorção Arcana: uma vez por combate, anula o dano de uma habilidade mágica que o atingiria e recupera 10 PV.","Ruptura: ao chegar à metade dos PV, libera uma onda de mana. Inimigos a até 3 espaços fazem teste de DES, CD 15; quem falhar recebe 2d4 de dano."],
traits:["A forma atual deve ser anunciada no início de seu turno."]
},
{
id:"carnebroso",name:"Carnebroso",category:"chefe",role:"Massa orgânica coletiva",difficulty:5,focus:"Físico / Precisão",pv:104,def:27,movement:3,xp:400,points:26,attributes:{FOR:8,DES:3,INT:2,SAB:5,VIG:8},
description:"Uma enorme criatura formada pela fusão de vários Carnages. Corpos, membros, mandíbulas e outras partes de criaturas contaminadas se misturam em uma única massa viva. Sua estrutura muda constantemente, revelando partes que tentam se mover ao mesmo tempo. O Carnebroso precisa ser enfrentado como uma ameaça coletiva, e não como vários monstros separados.",
skills:["Membros Entrelaçados: ataque 1d20 + FOR contra a DEF; causa 2d8 de dano.","Tentáculos de Carne: escolhe até 2 alvos a até 4 espaços. Cada alvo faz teste de DES, CD 15; quem falhar fica Imobilizado. No fim de seu turno, pode tentar escapar com teste de FOR, CD 15.","Devorar: ataca uma criatura adjacente que esteja Imobilizada; causa 2d6 de dano e recupera 8 PV. Pode usar uma vez por alvo em cada combate.","Ruptura Orgânica: ao chegar à metade dos PV pela primeira vez, libera uma onda de carne. Inimigos a até 3 espaços fazem teste de DES, CD 15; quem falhar recebe 2d8 de dano."],
traits:["Massa Coletiva: não pode ficar Envenenado e recebe vantagem em testes para resistir a Atordoamento. Mesmo quando partes de seu corpo são danificadas, o restante continua agindo."]
}
];
