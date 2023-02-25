# Descrição

O Projeto se trata de um banco de dados para o controle de leitura, onde podemos adicionar o ( Titulo ) , ( Descrição do Livro) , ( Páginas lidas ) e ( Total de páginas ).

# OBSERVAÇÃO

O Arquivo `Projeto.postman_collection` trás o histórico em formato Json de todos métodos aplicados no projeto.

# Passo a passo de construção

1. `npm init -y` para inicar o npm
2. `npm i` para instalar todas dependências do projeto
3. `npm start` para iniciar o projeto

# Funcionamento

4.  A estruturação do banco deste projeto é feita toda na pasta `Infra`,

    Para alteração do nome do banco, é necessário alterar a /** Linha 4 **/ do arquivo `db.js`

    o mesmo será criado na mesma pasta. Para a visualização podemos utilizar a própria porta determinada como `LocalHost` ou algum programa externo,
    Neste caso foi utilizado o `Bd Browser` e `Xampp` para uma melhor visualização.

    No arquivo `content.js` determinamos a estrutura da tabela ser criada no nosso banco, caso a mesma não seja encontrada. Se seu banco estiver estuturado corretamente, ao dar o `Start` o terminal irá apresentar os dados encontrados no banco.

    ## OBSERVAÇÃO

        Caso queira criar um "novo" banco sempre que rodar o projeto, basta adicionar a linha de código  `  db.run(`delete from conteudos`)  ` dentro do `app.listen` disponível no  arquivo `server.js`

# Métodos

5. Os métodos para a utilização do crud estão dispostos no arquivo `ContensController.js` disponíveis na pasta `Controllers` onde são feitas todas `Requests` e `Responses` do projeto

Os métodos `GET`,`POST` são os mais simples, requisitando ou adicionando conteúdos a tabela especificada, como exemplo :

      `  app.get("/conteudo"  `
      ` app.post("/conteudo"  `

No caso dos métodos `Put` e `Delete`, necessitamos de uma chave para entendermos QUAL elemento será editado ou deletado, neste caso utilizamos a `PK` do banco,que é o `Id`, como exemplo:

      ` app.delete("/conteudo/:id" `
      ` app.put("/conteudo/:id" `

## OBSERVAÇÃO

      É possível alterar a chave  a ser buscada nos métodos `put` e  `Delete`, mas é preferível trabalharmos com as chaves primárias.

# Trabalhando no Banco

6. Neste projeto, conseguimos alterar os conteúdos pelo `Console` utilizando a estrutura de `JSON`

ou

Utilizando `Programas externos`, como citado o `Bd Browser` ou qualquer um de sua preferência, onde há uma adição mais visual dos dados.
