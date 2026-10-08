# Do mercado à pesquisa · Guia Lattes

Guia pessoal, em português, para Wesley Vieira preparar seu Currículo Lattes e organizar candidaturas a mestrados e bolsas. Conteúdo independente do CNPq, baseado em fontes oficiais conferidas em **8 de outubro de 2026**.

**Online:** https://wesleyvieira99.github.io/WVPortfolio/lattes/

## O que há nesta pasta

| Arquivo | Função |
| --- | --- |
| `index.html` | Guia completo, com estilos, ícones vetoriais, dados e JavaScript incorporados. |
| `fontes.json` | Relação estruturada das fontes oficiais, sua finalidade e a data de verificação. |
| `README.md` | Instruções de uso, manutenção, privacidade e publicação. |

Esta pasta é independente. Ela não altera o currículo PDF, os componentes ou a apresentação do portfólio principal.

## Como usar

1. Abra `index.html` em um navegador ou use o endereço online.
2. Leia o capítulo 1 para separar Lattes, seleção de mestrado e concessão de bolsa.
3. Use o cadastro guiado em oito passos. Faça o cadastro real apenas no serviço oficial do CNPq, aberto pelo link do guia.
4. Use **Onde entra?** para classificar formações, cursos, credenciais, empregos, projetos, software, artigos, notícias, prêmios, idiomas e rotina de estudo.
5. Consulte o acervo, filtre registros e exporte um CSV para organizar evidências.
6. Edite os rascunhos e revise todos os fatos antes de usá-los. Os campos entre colchetes exigem preenchimento pessoal.
7. Compare programas, leia os editais e confirme as regras de bolsa e de vínculo empregatício.
8. Monte sua lista de candidaturas e use o checklist. O painel não envia inscrições nem notificações.
9. Exporte seu progresso em JSON antes de trocar de dispositivo ou limpar os dados do navegador.

## Conteúdo e ferramentas

- Dez capítulos: fundamentos, cadastro, classificação da carreira, acervo, escrita, escolha do mestrado, bolsas, candidaturas, manutenção e fontes.
- Cadastro guiado em oito etapas e checklist geral de 24 itens.
- Classificador com 12 tipos de realização.
- Inventário pesquisável de **494 registros**: 27 formações, 446 cursos/credenciais, 13 artigos e 8 experiências. Registros não significam títulos distintos; é necessário revisar possíveis sobreposições e documentos.
- Rascunhos editáveis de texto inicial, atuação profissional, publicação no LinkedIn, produção de software e contato com orientação.
- Contagem de caracteres e alerta de 4.000 caracteres no texto inicial.
- Três exemplos de direção de pesquisa, explicitamente apresentados como hipóteses de trabalho.
- Painel de candidaturas com inclusão, edição, remoção, prazo, situação e notas.
- Busca por assunto, navegação por capítulos, modo claro/escuro, layout adaptável e impressão.
- Exportação e importação de progresso, CSV do acervo e download do HTML.
- Ícones SVG locais, sem fontes, bibliotecas ou serviços de análise externos.

## Origem do acervo

Os dados de carreira são uma fotografia de `lib/portfolio-seed.json`, no commit:

`a5b254dd30028aba933f0190be1e7461ac01158a`

Cada registro do inventário preserva título, instituição/emissor, data e contexto disponíveis, com encaminhamento e evidência sugeridos. A classificação é orientativa. Situação de curso, conclusão, carga horária, vínculo e natureza acadêmica precisam ser confirmados nos documentos.

Não há sincronização com LinkedIn, API do CNPq ou importação automática para o Lattes. Os artigos apontam para suas URLs públicas originais; não foram copiados integralmente para este guia.

## Privacidade e armazenamento

- Checklist, rascunhos, candidaturas, tema e etapa atual são armazenados em `localStorage`, sob a chave `wv-lattes-guide-v1`.
- Esses dados não são enviados para um servidor, para o GitHub ou para o CNPq pelo guia.
- O servidor de hospedagem recebe as solicitações normais de acesso à página. Links externos abrem os sites correspondentes, que têm suas próprias políticas.
- Não digite CPF, senha, endereço residencial, dados bancários ou documentos privados no painel.
- O backup JSON contém suas anotações. Guarde-o de forma privada e não o faça commit no repositório público.
- O arquivo XML oficial do Lattes é diferente do JSON deste guia e pode conter dados pessoais. Também deve ser guardado de forma privada.
- O armazenamento é específico de navegador e origem. A versão online e uma cópia local podem ter progressos separados. O modo privado e a limpeza de dados podem apagar as anotações.
- Importar um backup substitui os dados locais após confirmação. A importação valida o formato, limita o tamanho a 1 MB e restringe links a HTTP/HTTPS.
- A exportação do HTML contém o conteúdo do guia, não seus rascunhos pessoais. Exporte o progresso separadamente.

## Como atualizar o guia

### Regras, programas e prazos

1. Consulte a fonte oficial e suas retificações.
2. Atualize o texto do capítulo correspondente em `index.html`.
3. Atualize a referência em `fontes.json` e na lista de fontes do HTML.
4. Ajuste as datas de conferência apenas depois de efetivamente revisar as fontes.
5. Trate os exemplos de editais de 2027 como um recorte histórico quando os prazos acabarem. Eles não se renovam automaticamente.
6. Confira separadamente regras de CAPES, CNPq, FAPESP e do programa. Não generalize uma permissão de emprego para todas as bolsas.

### Inventário da carreira

O HTML contém um bloco JSON identificado por `id="guide-data"`. O campo `inventory` é uma lista com esta estrutura:

```json
{
  "type": "Curso / certificado",
  "title": "Título real",
  "org": "Instituição emissora",
  "date": "Data informada",
  "status": "Situação a conferir",
  "route": "Encaminhamento sugerido no Lattes",
  "proof": "Comprovante a separar",
  "theme": "Tema do curso"
}
```

`url` é opcional, usado em artigos públicos. Use somente URLs públicas apropriadas. Não insira URLs privadas com tokens, senhas ou links de documentos de identificação.

Ao mudar o acervo, revise também os números apresentados no capítulo 4, a data da fotografia e o commit de origem. Preserve o JSON válido e escape `</` como `<\/` dentro desse bloco para evitar encerrar a tag `script` acidentalmente. Não confunda o número de registros com uma contagem auditada de títulos distintos.

### Textos e estilos

- A paleta, tipografia, espaçamentos e pontos de adaptação ficam no bloco `<style>`.
- Os modelos editáveis ficam no objeto `templates` no JavaScript.
- Os exemplos de pesquisa ficam no objeto `research`.
- O classificador fica no objeto `classifications`.
- Os itens adicionais do checklist ficam no objeto `checks`.
- Mantenha identificadores existentes para não quebrar links, navegação e progresso salvo.

## Testar localmente

O HTML é autossuficiente e pode ser aberto diretamente. Para testar a versão com servidor local, a partir da raiz do repositório:

```bash
python3 -m http.server 4174
```

Abra `http://localhost:4174/lattes/`.

Verifique navegação, filtros, etapas, copiar/baixar rascunho, edição de candidatura, recarregamento com progresso, exportação/importação e tema. Confira em larguras de celular e desktop, com teclado e com preferência de movimento reduzido. A impressão apresenta o conteúdo do guia e a página atual do inventário; o CSV preserva o acervo completo. Ela não gera seu Currículo Lattes.

## Publicar no GitHub Pages

Este repositório publica o GitHub Pages a partir da branch `main`, pasta raiz. Basta manter `lattes/index.html` nessa estrutura e enviar as alterações à `main` pelo procedimento normal do repositório.

A página será servida em `/WVPortfolio/lattes/`. Não é necessário build, pacote npm, chave de API ou backend. Após a publicação, abra a página pública e confira os links e as ferramentas.

## Limites importantes

Este guia não cria uma conta no CNPq, não submete currículo, não efetua inscrições, não pede bolsas e não garante admissão ou financiamento. O PDF do portfólio não foi modificado. Para qualquer divergência, prevalecem as regras oficiais aplicáveis e o edital vigente. A escolha de linha, método de pesquisa e orientação exige avaliação pessoal e acadêmica.
