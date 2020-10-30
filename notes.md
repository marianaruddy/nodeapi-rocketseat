# Curso Rocketseat

## Rodando o projeto
- Pra rodar o projeto, certifique-se que o docker está rodando com:
```
Docker ps
```
Se não, descubra o hash do docker com:
```
docker ps -a
```
E rode 
```
docker start <nome do container ou id>
```
- Para rodar o servidor rode:
```
npm run dev
```

## Instalações feitas
- O **nodemon** serve para reiniciar o servidor automaticamente ao salvar o arquivo
Para instalar : 
```
npm install -D nodemon
```
O -D ou --dev serve para instalar como dependência de desenvolvimento


- **Docker**. Para baixar a maquina virtual (container) do **mongodb** e executar na sua máquina:

```
docker pull mongo
```
Passa subir uma nova máquina virtual contendo a instalação do mongo rodando
```
docker run --name mongodb -p 27017:27017 -d mongo
```
--name mongodb: como vc vai chamar o container dentro do sistema
-p 27017:27017: redirecionamento de porta (porta na minha máquina:porta default do mongo)
-d mongo: imagem que quero usar

Se eu desligar o pc o docker vai parar de rodar. Para ver todos os containers que estão nessa situação:
```
docker ps -a
```
Para reiniciar um container Exited:
```
docker start <nome do container ou id>
```

- **Robo3t** é uma ferramenta gráfica para o **mongodb**

- O **mongoose** é um ORM (encapsula a lógica das operações do banco de dados através do código, ou seja, ao invés da gente usar a linguagem da base de dados, a gente usa javascript para isso) de bancos não relacionais com mongodb

```
npm install mongoose
```

OBS: no curso, ele que o pra conectar com o banco é necessario  fazer 
```
mongoose.connect('mongodb://localhost:27017/nodeapi', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});
```

## Sobre APIs
- O model, no **modelo MVC**, representa, basicamente, uma tabela do banco de dados, ou uma estrutura de dados que a gente vai gravar dentro do banco de dados.

- O **insomnia** é um software que facilita a visualização e o envio de requisições na api rest

- No ProductController, as funções `find()`, `findById()`, `findByIdAndUpdate()`, `findByIdAndDelete()`,… são do mongoose. 

- Ao usar:
```
       const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
```
o parâmetro  `{ new: true }` indica que a variável `product` vai receber o valor atualizado.

- Não é performático retornar todos os dados de uma vez, por isso, podemos usar o **mongoose-paginate** para retornar apenas uma página por vez.

- O **CORS** (Cross-Access Origin Security) permite acessar a api de outros endereços.
