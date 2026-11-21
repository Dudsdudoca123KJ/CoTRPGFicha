# Champions of Terestalia — primeira versão

Site responsivo para fichas e campanhas. Não é um VTT: não tem mapa, grade, tokens ou posicionamento.

## O que já está incluído

- Interface responsiva para celular e computador.
- Login/cadastro por e-mail (quando Supabase estiver configurado).
- Criar campanha como mestre e entrar por código.
- Papéis de mestre e jogador.
- Fichas com atributos, PV, DEF, iniciativa, deslocamento, inventário, cargas e Focos.
- Progressão de nível/XP e limites de atributos até o nível 10.
- Cadastro de habilidades, passivas, características e anotações.
- Bestiário privado do mestre por campanha.
- Modo demonstração local para explorar a interface sem configurar servidor.

## Importante: demonstração x multiplayer

Sem configurar o Supabase, o site abre em **Modo demonstração**. Nesse modo, os dados ficam somente no armazenamento local do navegador e não são compartilhados com outras pessoas.

Para login, convites e sincronização multiplayer reais, configure o Supabase:

1. Crie um projeto em https://supabase.com.
2. Abra o SQL Editor e execute todo o arquivo `schema.sql`.
3. Em Project Settings > API, copie a Project URL e a chave `anon`/publishable.
4. Cole os valores em `config.js`:
   - `supabaseUrl`
   - `supabaseAnonKey`
5. Em Authentication > Providers, habilite Email.
6. Em Database > Publications, adicione `characters` e `monsters` à publicação `supabase_realtime`.
7. Publique a pasta do site em um host estático com HTTPS (por exemplo, Netlify ou Cloudflare Pages).

A chave `anon`/publishable pode ficar no navegador porque o acesso é protegido pelas políticas RLS do `schema.sql`. **Nunca coloque a chave `service_role` no site.**

## Como testar no computador

A pasta pode ser publicada como site estático. Para testar localmente, rode um servidor HTTP na pasta (não abra `index.html` diretamente):

```bash
python -m http.server 8000
```

Depois abra `http://localhost:8000`.

## Regras implementadas da versão atual do manual

- PV máximo: 20 + (VIG × 2).
- DEF: 5 + FOR + DES + armadura + escudo.
- Iniciativa: 1d20 + DES.
- Deslocamento: DES + VIG, com penalidades por requisito de FOR não atendido.
- Capacidade: piso((FOR + VIG) / 2) + bônus da mochila.
- 2 PA por nível; limites de atributo: 5 (níveis 1–3), 8 (4–6), 11 (7–10).
- XP acumulada: níveis 2–10 em 150, 350, 550, 750, 950, 1150, 1350, 1550 e 1750.
- Dano base por nível de Foco conforme o manual.
- Limite de cargas: 9 para Físico/Precisão e 12 para Mágico/Saber.

## Limitações desta primeira entrega

- O salvamento dos campos da ficha é feito pelos botões Salvar; o indicador de autosave ainda não está implementado.
- O Realtime precisa ser habilitado no painel Supabase e o canal de atualização automática da tela ainda precisa de uma rodada própria de implementação/teste.
- O cadastro completo das 80 armas, armaduras, escudos, poções e todas as habilidades do manual ainda precisa ser importado para um catálogo pesquisável.
- O mestre pode editar as fichas de personagens, mas a interface de troca de dono/transferência ainda não existe.
- O site ainda não foi publicado na internet; este ZIP contém o projeto e a configuração do backend.

## Próximas etapas recomendadas

1. Configurar o Supabase e testar duas contas em celulares diferentes.
2. Implementar autosave e sincronização realtime com tratamento de conflito.
3. Importar o catálogo integral do manual.
4. Fazer testes de permissões: jogador A não acessa ficha de B; jogador não vê monstros; mestre administra as fichas da campanha.
