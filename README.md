# Trucker Health - 2020
### Pao de Queijo e Acarajé / Hackaton CCR

#### Quem somos

Somos a equipe do Trucker Health, que é a junção de developers do estado de Minas Gerais e Bahia. Os Membros são: Marilia Suzart, Diego Duarte, Marcos Lacerda e Marlon Evangelista

#### Tech team:
[![TruckerHealthFront](https://avatars1.githubusercontent.com/u/30198542?s=120&v=4)](https://github.com/gabrielesuzart)
[![TruckerHealthBack](https://avatars1.githubusercontent.com/u/58738015?s=120&v=4)](https://github.com/dfduarte)
[![TruckerHealthBack](https://avatars1.githubusercontent.com/u/4759987?s=120&v=4)](https://github.com/maclacerda)

#### Graphic design team:
* Marlon Evangelista

#### Apresentação 

Com base em pesquisas realizadas pelo time, percebemos que os caminhoneiros possuem uma grande carga de trabalho combinada com habitos, em geral, ruins de alimentação e bem estar. Pensando nesse problema surgiu o Trucker Health, que auxilia o caminhoneiro a evitar diversas doenças, especialmente as DCNT (Doenças Cronicas não Transmissiveis).

#### O Produto

O app terá acesso a vários recursos de saude e bem estar no app, como acesso a campanhas de vacinação, Maio Amarelo, bem-estar e saúde e interligar esses dados de saúde ao departamento de recursos humanos da frota desse funcionário, auxiliando-os a trazer melhor bem-estar e uma vida melhor a esses que trabalham tão duro nas estradas.

#### Techstack utilizada no frontend

Para o desenvolvimento da landing page e iniciar a construção da plataforma empresarial, utilizamos a linguagem de programação JavaScript e a biblioteca/framework ReactJS. 

Para padronizar a escrita do código utilizamos ferramentas como o  TypeScript, EsLint, Prettier e Editor Config. Para estilizar o CSS evitando conflitos de classes, utilizamos o Styled Components.

Para gerenciar as dependências de desenvolvimento usamos o Yarn. Para a criação e validação utilizamos o Unform e Yup.
Para otimizar o desenvolvimento das próximas funcionalidades e manter a consistência no layout, desenvolvemos um design system utilizando o Styled System, documentamos os componentes com o Storybook.

#### Protótipo navegável

[Clique aqui para ver o protótipo no figma](<AGUARDANDO>)

#### Aplicação desenvolvida

[Clique aqui para acessar a aplicação em produção](https://trucker-health.netlify.app/)

#### Backend

[Clique aqui para acessar o repositorio e a documentação dos APIs](https://github.com/dfduarte/api-trucker-health)

#### Pitch

[Clique aqui para assistir o pitch](https://youtu.be/EbE68I6-vdg)


#### Como rodar o projeto

Faça o clone do repositório para sua máquina local
```
git clone git@github.com:GabrieleSuzart/web-trucker-health.git
```

Instale as dependências de desenvolvimento do projeto, abra o terminal na pasta raiz e execute o comando:
```
yarn install
```

Para acessar a documentação do design system via http://localhost:9009, rode:
```
yarn storybook
```

Para subir a aplicação na máquina, execute o comando e abra o [http://localhost:3000](http://localhost:3000) no navegador
```
yarn start
```

Para executar os testes unitários, rode:
```
yarn test
```
