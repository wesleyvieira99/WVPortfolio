# WVPortfolio

Portfólio de **Wesley Vieira**, líder de engenharia de software, com experiência em sistemas financeiros, arquitetura, IA e desenvolvimento de pessoas.

[Portfólio online](https://wesleyvieira99.github.io/WVPortfolio/) · [LinkedIn](https://www.linkedin.com/in/techvieira/) · [Guia de atualização](GUIA_DE_ATUALIZACAO.md)

## A experiência

- Design Matrix com superfícies de vidro, navegação responsiva, movimento opcional e respeito à preferência de movimento reduzido.
- Trajetória profissional completa, impactos reportados, tecnologias, premiação, fotos, imprensa e recomendações.
- Repositórios públicos do GitHub com busca, filtros e leitura de código dentro do site.
- Treze artigos autorais completos, com capas, imagens, categorias e leitura na própria página.
- Formação acadêmica, idiomas com bandeiras e catálogo unificado de 446 cursos e certificações.
- Rotina de estudos: compromisso diário de 6 horas, seis pilares e uma agenda navegável de segunda a domingo.
- PDFs atualizados para download e histórico datado de currículos.

## Executar e gerar o site

Requer Node.js 22 ou superior e npm.

```bash
npm ci
npm run check
npm run build
npm run preview
```

Abra `http://localhost:8080`. O build gera `dist/`, pronto para hospedagem estática. Os caminhos são relativos e funcionam no subdiretório `/WVPortfolio/` do GitHub Pages.

## Onde está cada parte

| Caminho | Conteúdo |
| --- | --- |
| `components/portfolio.tsx` | Experiência principal, filtros e leitores de artigos/código |
| `components/study-routine.tsx` | Rotina de estudo e navegação por dia |
| `app/globals.css` | Identidade visual e regras responsivas |
| `lib/portfolio-seed.json` | Currículo, cursos, formação e agenda estruturada |
| `lib/repos-seed.json` | Cópia de referência dos repositórios para uso quando a API estiver indisponível |
| `public/assets/` | Fotografias, logos, capas e imagens originais dos artigos |
| `public/articles/` | Texto estruturado dos artigos |
| `public/downloads/` | PDFs atuais exibidos no site |
| `curriculo/historico/` | Versões datadas, preservadas sem sobrescrita |
| `curriculo/fonte/` | Fonte editável e recursos para reconstruir os PDFs |
| `.github/workflows/pages.yml` | Build e publicação a cada atualização da branch principal |

## Atualização dos conteúdos

Edite `lib/portfolio-seed.json`, gere o site e faça commit na branch `main`. O GitHub Actions publica o resultado no Pages. O [guia](GUIA_DE_ATUALIZACAO.md) detalha os campos e o procedimento.

Os repositórios são consultados automaticamente na API pública do GitHub quando o visitante abre a página e a cada 15 minutos enquanto ela permanece aberta. Os conteúdos do LinkedIn são uma cópia editorial revisada. **Não há sincronização automática ativa com o LinkedIn.** Uma conexão automática exige uma fonte autorizada e um processo externo; login e senha não devem ser colocados neste projeto.

O GitHub Pages entrega arquivos estáticos. O painel autenticado e a persistência de servidor da versão original não são executados no Pages. Nesta edição, as atualizações são feitas pelo repositório e publicadas pelo Actions.

## Rotina de estudo

A rotina foi organizada a partir do calendário eduControl enviado pelo proprietário, com as recorrências atuais a partir de 12/10/2026, no fuso `America/Sao_Paulo`. Os blocos reservam entre 6h15 e 7h por dia. Representam planejamento, não registro automático de presença. A referência a mais de sete anos diz respeito à consistência de estudo declarada, não à comprovação histórica desta agenda específica.

## Conteúdo e uso

Textos autorais, imagem pessoal e materiais de carreira pertencem a Wesley Vieira. Marcas de instituições e jornais identificam as fontes e permanecem de seus respectivos titulares. O código inclui dependências de terceiros sob suas próprias licenças.
