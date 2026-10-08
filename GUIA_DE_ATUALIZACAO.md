# Guia de atualização do portfólio

## 1. Atualizar informações

Abra `lib/portfolio-seed.json` no GitHub e use o botão de edição. Altere os dados, preservando a estrutura JSON. Faça commit na branch `main` ou crie uma branch e integre a alteração por pull request.

| Informação | Campo |
| --- | --- |
| Apresentação e indicadores | `presentation`, `profile` |
| Experiências | `roles` |
| Tecnologias | `tech` |
| Formação | `education` |
| Cursos e certificados | `courses` |
| Idiomas e bandeiras | `languages` |
| Artigos e capas | `articles`, `article_groups` |
| Imprensa e recomendações | `press`, `recommendations` |
| Rotina diária | `study_routine` |
| Data editorial | `updated` |

A busca e os totais de cursos e programas usam os dados. Os indicadores editoriais em `presentation.metrics` também devem ser revisados quando a contagem mudar.

## 2. Atualizar a rotina de estudo

Em `study_routine.days`, cada dia tem `id`, `name`, `minutes` e uma lista `blocks`. Cada bloco contém `start`, `end`, `title`, `category` e `minutes`. Use horários de 24 horas no fuso de São Paulo.

Categorias: `engineering`, `languages`, `academic`, `foundations`, `certifications`, `leadership`. Atualize os totais do dia, da semana e dos pilares ao alterar horários. O compromisso diário de destaque fica em `daily_commitment_hours`. A semana publicada foi extraída das recorrências efetivas a partir de 12/10/2026; eventos antigos e exceções encerradas não foram duplicados.

O calendário original contém registros pessoais e não foi publicado. O site recebe somente a rotina de estudo estruturada.

## 3. Adicionar artigos

Adicione o registro em `articles` com título, resumo, tags, URL original, imagem e identificador único. Coloque a capa em `public/assets/` e o texto estruturado em `public/articles/IDENTIFICADOR.json`. Preserve a autoria e a fonte. O leitor suporta parágrafos, títulos, código, citações, listas, imagens e links. As tags usam o separador ` · `.

## 4. Substituir os PDFs e preservar o histórico

Antes de substituir um currículo, copie sua versão para `curriculo/historico/AAAA-MM-DD/`. Mantenha o PDF completo e o executivo. Em seguida, substitua os arquivos de mesmo nome em `public/downloads/`. A página passará a oferecer os novos PDFs após a publicação.

O diretório de histórico desta entrega contém a versão de 07/10/2026 e a versão de 08/10/2026, com a rotina de estudo. A fonte editável fica em `curriculo/fonte/`. Extraia o ZIP, instale as dependências indicadas no README interno e execute `build.py`. Revise as páginas antes de publicar.

## 5. Publicar no GitHub Pages

O fluxo `.github/workflows/pages.yml` executa a verificação, gera o site e envia o resultado para o GitHub Pages sempre que há commit na `main`. Em **Settings > Pages**, a origem deve ser **GitHub Actions**.

No GitHub, abra **Actions**, selecione a execução e aguarde o status de sucesso. O endereço será `https://wesleyvieira99.github.io/WVPortfolio/`. Se uma atualização falhar, a versão anterior continua disponível. Corrija o erro indicado pelo Actions e faça novo commit. Não é preciso contratar servidor para esta versão estática.

## 6. GitHub e LinkedIn

O painel de projetos consulta somente repositórios públicos da conta `wesleyvieira99`. Se a API limitar chamadas, a página usa o snapshot local e informa isso ao visitante. A leitura do código depende da disponibilidade da API.

O LinkedIn não está conectado automaticamente. Atualize os dados a partir de informações revisadas ou de sua exportação oficial. `lib/import-linkedin.ts` preserva a lógica de importação CSV como recurso de desenvolvimento; não existe um painel de importação autenticado nesta edição estática. Uma sincronização automática futura deve usar acesso autorizado e um serviço externo. Nunca coloque senhas ou tokens no HTML, no JSON ou em commits.

## 7. Validar antes do commit

```bash
npm ci
npm run check
npm run build
npm run preview
```

Verifique a página em desktop e celular, os sete dias da rotina, os filtros, um artigo, um repositório e os downloads dos dois PDFs. Mantenha a preferência de movimento reduzido e a navegação por teclado. Nunca publique `node_modules`, arquivos `.env` ou dados pessoais que não façam parte do portfólio.


## Publicação estática por branch

Em 08/10/2026, o GitHub informou que as execuções do Actions estavam bloqueadas por uma pendência de faturamento da conta. Por isso, o projeto também inclui uma exportação estática no diretório raiz. Não foi feita nenhuma alteração no plano ou no faturamento.

Após editar o código, o currículo ou os dados:

```bash
npm ci
npm run check
npm run export:pages
git add .
git commit -m "Update portfolio"
git push origin main
```

No GitHub, configure **Settings > Pages > Deploy from a branch > main > /(root)**. O arquivo `.nojekyll` mantém a publicação dos arquivos estáticos. O código, os dados e a exportação precisam ser enviados juntos. A disponibilidade final da hospedagem continua sujeita ao estado da conta no GitHub.

O workflow `.github/workflows/pages.yml` está disponível para execução manual depois que o Actions estiver disponível. Para usá-lo, troque a origem do Pages para GitHub Actions e execute **Publish portfolio**.
