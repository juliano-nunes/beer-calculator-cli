# Projeto Beer Calculador
Aplicação Vue que calcula a melhor cerveja para tomar de acordo com a temperatura informada

### Pré-Requisitos

**Dependências:** 
```
- Docker
```
## Preparando ambiente com Docker

Acesse o diretório em que o repositório foi clonado através do terminal e
execute os comandos:
 - `docker build -t basement/beer-calculator-cli .` para compilar imagens, criar containers etc.
 - `docker run -it -p 8080:8080 --rm --name beer-calculator-cli basement/beer-calculator-cli` para instalar o projeto e inicializar o servidor
