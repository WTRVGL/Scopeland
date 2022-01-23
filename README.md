
# Scopeland

Full stack applicatie virtuele webshop met ingebouwde CMS.

## Info
### Opdracht
Project in kader van "Werkplekleren" tijdens het tweede jaar Graduaat Programmeren aan PXL in Hasselt. 
De opdracht was het maken van een webshop waarbij:
* Beheren van een database m.b.v. een desktop WPF applicatie.
* Statische frontend met "hardcoded" producten.

### Resultaat
Vanaf het begin had ik de intentie om geen frontend af te leveren met "hardcoded" producten maar om een werkende full-stack oplossing te maken voor deze opdracht.

Het uitendelijke resultaat bestaat uit de volgende delen.
#### WPF desktop applicatie
* MVVM patroon
* CRUD functionaliteit 
* Login / Registratie (hashing)
#### Web Api
*  Repository patroon voor implementatie data acces.
* JWT Token + Cookie authentication.
#### Gatsby
*  Automatische generatie producten- en categoriepagina's met behulp van .mdx files.
* Cookie authenticatie voor private routes (/account).
* Forestry CMS implementatie voor beheer .mdx files.
#### Sql Server
* SQL script voor seeding database.
#### Docker
*  Dockerfile voor Gatsby, Web Api, Sql Server.
* Docker-compose voor simultane launch frontend + backend.
## Start

### Dependencies

- Docker (indien volledige applicatie simultaan uitgevoerd wordt)

### Opstarten

#### Docker

```
docker compose build
```

```
docker compose up
```
#### Hosts
* Gatsby: localhost:9000
* Web Api: localhost:5000
* Sql Server: localhost:1000

#### Local Gatsby:
in /gatsby_client:
```
npm install
```
development:
```
gatsby develop
```

build:
```
gatsby build
```
```
gatsby serve
```
#### Database accounts:
* admin:admin
* user:user
