<h1 align="center">
    asktris Full-Stack
</h1>

<p align="center">
   <a href="https://github.com/biantris/asktris/actions">
      <img alt="Tests server Passing" src="https://github.com/biantris/asktris/actions/workflows/test-server.yml/badge.svg" />
    </a>
    <a href="https://github.com/biantris/asktris/actions">
      <img alt="Tests web Passing" src="https://github.com/biantris/asktris/actions/workflows/test-web.yml/badge.svg" />
    </a>
    <a href="https://twitter.com/intent/follow?screen_name=biantris_">
        <img src="https://img.shields.io/twitter/follow/biantris_?style=social&logo=twitter"
        alt="follow on Twitter">
    </a>
</p>

### Home Page
![image](https://user-images.githubusercontent.com/65451957/214925304-9304d9dd-5150-4401-9feb-df39e179454f.png)

### Result Page
`wip`

### Create Scan Page
![image](https://user-images.githubusercontent.com/65451957/214925487-098d13a3-75e7-48e9-b86e-c3fdc4483bb3.png)

### to-do
➜ [to-do (kanban) ](https://github.com/users/biantris/projects/3/views/1)
![image](https://user-images.githubusercontent.com/65451957/214915881-c790636d-45fb-423e-8c25-19c7b4cd92c0.png)


### Stack

#### ➜ Root
- [x] Linter (Eslint)
- [x] Prettier
- [x] Commitlint
- [x] Editorconfig
- [x] Lint staged
- [x] Pre-commit
- [x] Turborepo + Yarn Workspace
- [ ] Dockerfile
- [x] CI/CD w/ Github Actions

#### ➜ Server

- [x] TypeScript
- [x] Koa
- [x] MongoDB
- [x] Mongoose
- [x] API REST
- [x] Jest
- [x] SuperTest
- [x] Linter (Eslint)
- [x] Prettier
- [x] Webpack + babel

#### ➜ Web
- [x] TypeScript
- [x] ReactTS
- [x] Axios
- [x] Semantic UI
- [x] Jest + Testing Library
- [x] Storybook
- [x] Linter (Eslint)
- [x] Prettier
- [x] Vite

### Project architecture
`🚧 wip 🚧`

```
.
├── packages/
│   └── api [wip]
|   └── babel
|   └── server
|   └── ui [wip]
|   └── shared
|   └── test
|   └── types
|   └── web
└── ...
```

### Getting Started
- clone this repo

#### Server
- go to the server path `../packages/server`
- or `yarn server`

```sh
# install dependencies
> yarn
# or
> yarn install

# copy .env file
> cp .env.example .env

# start project
> yarn start

# open in
http://localhost:9000/api/version
```
#### Web
- go to the web path `../packages/web`
- or `yarn web`

```sh
# install dependencies
> yarn
# or
> yarn install

# copy .env file
> cp .env.local .env

# start project
> yarn dev

# open in
http://localhost:8080
```
#### Run Storybook
- `yarn storybook`
![image](https://user-images.githubusercontent.com/65451957/188338652-8cabae6b-f16c-4c4f-943c-1be6e4884426.png)

### APIs
- [x] resultGet
- [x] resultGetAll
- [x] resultPost
- [x] resultUpdate
- [x] resultDelete

## demo
`🚧 wip 🚧`
