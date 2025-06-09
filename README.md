# sistema-de-consulta

Este é um sistema simples de cadastro de pacientes com uma agenda de consultas integrada, ideal para clínicas, consultórios ou estudos de desenvolvimento web.

##  Visão Geral

Este sistema é dividido em duas áreas principais, pensadas para facilitar o uso e manter a interface limpa e compacta:

Cadastro de Paciente:
O usuário preenche os dados do paciente em duas etapas:

  - Informações pessoais (nome, idade e endereço).
  - Agendamento da consulta (dia da semana e horário) e registro final.

Agenda Semanal:

  - Exibe as consultas organizadas por dia (de segunda a sexta). Cada agendamento mostra o horário e o nome do paciente.
  - O botão "Ver" abre mais detalhes da consulta, onde o usuário também pode excluir o paciente da agenda.

Tudo foi pensado para que a experiência seja simples, rápida e agradável para o usuário.

![image](https://github.com/user-attachments/assets/49143be4-9387-4747-96dc-705d3a87c7f8)

##  Funcionalidades

- Cadastro de pacientes dividido em duas etapas:
  - Primeira etapa: inserção de nome, idade e endereço.
  - Segunda etapa: inserção do horário, dia da semana e botão para **registrar** o paciente.
- Botão para limpar todos os campos do formulário.
- Botão para registrar o paciente disponível somente na segunda etapa do formulário.
- Exibição da agenda semanal separada por dias (Segunda a Sexta).
- Visualização rápida da consulta com horário e nome do paciente.
- Ao clicar em "Ver" nos detalhes da consulta, é possível visualizar mais informações e há um botão para **excluir** o paciente da agenda.


##  Tecnologias Utilizadas

| Tecnologia | Função                                      |
|------------|---------------------------------------------|
| React      | Biblioteca principal para construção da UI  |
| CSS3       | Estilização com módulos CSS                 |
| JavaScript | Lógica da aplicação                         |

##  Como Rodar o projeto localmente

**Pré-requisitos**

  - Node.js (v14+)
  - npm (v6+) ou yarn


**Passo a passo**
1. Clone o repositório:
   ```bash
   git clone https://github.com/leo-func/sistema-de-consulta.git

2. Acesse o diretório do projeto:
   ```bash
   cd sistema-de-consulta

3. Instale as dependências:
   ```
   npm install


4. Inicialização do servidor:
   ```
   npm run dev
