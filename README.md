# :zap: PF Corrector

**Site: https://pfcorrector.netlify.app/**

![site preview](https://i.imgur.com/uyMGYOa.pngf)

PF Corrector é uma aplicação web desenvolvida com a finalidade corrigir o fator de potência em sistemas elétricos, com ênfase na correção de sistemas motor de indução trifásico + banco de capacitores na correção "completa".

A aplicação, além de expôr os dados numéricos das características elétricas do sistema, também gera gráficos para uma compreensão intuitiva dos impactos da correção do fator de potência no sistema.

- **Correção simples**: Utiliza-se dos dados de placa de um motor qualquer para determinar as novas características elétricas e dimensionar um banco de capacitores fixo para o sistema.

- **Correção completa**: Utiliza-se dos dados de placa e dados de ensaio de um MIT (Motor de Indução Trifásico) para calcular o valor de parâmetros adicionais do motor e determinar os novos valores do sistema motor + banco de capacitores.

## :computer: Instalação

Primeiramente, use o próprio Git para clonar o repositório:

```bash
git clone PF-Corrector
```

Após cloná-lo, use o NPM para instalar todas as ferramentas externas da aplicação:

```bash
npm install
```

Para desenvolver, use o comando abaixo para ter acesso à ferramenta de Hot-Reloading do module bundler Vite:

```bash
npm run dev
```

Por fim, minimize os arquivos e os compacte na pasta "dist" com o comando a seguir:

```bash
npm run build
```

## :pencil: Créditos

A ferramenta foi criada como parte do Trabalho de Conclusão de Curso de Eletrotécnica feito por Eduardo Estrela Porto Lima ([@eduardo-estrela](https://github.com/eduardo-estrela)) e Guilherme de Santana Soares Xavier ([@DasGestirn](https://github.com/DasGestirn)) no IFBA Campus Salvador. A elaboração do estudo necessário ao desenvolvimento da aplicação contou com a orientação do Prof. Dr. Davi Franco Rêgo.

O TCC está disponível para leitura em: https://archive.org/details/tcc-edu-gui-cfp
