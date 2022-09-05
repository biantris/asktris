<h1 align="center">
    asktris
</h1>

<p align="center">
   <a href="https://github.com/biantris/asktris/actions">
      <img alt="Tests server Passing" src="https://github.com/biantris/asktris/actions/workflows/test-server.yml/badge.svg" />
    </a>
    <a href="https://twitter.com/intent/follow?screen_name=biantris_">
        <img src="https://img.shields.io/twitter/follow/biantris_?style=social&logo=twitter"
        alt="follow on Twitter">
    </a>
</p>

> FullStack Playgorund and Challenge at AskLisa

### to-do
➜ [to-do (kanban) ](https://github.com/users/biantris/projects/3/views/1)

### Stack

#### ➜ Root
- [x] Linter (Eslint)
- [x] Prettier
- [x] Commitlint
- [x] Editorconfig
- [x] Lint staged
- [x] Pre-commit
- [x] Lerna + Yan Workspace
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
- [ ] Jest + Testing Library
- [x] Storybook
- [x] Linter (Eslint)
- [x] Prettier
- [x] Vite

### Project architecture
🚧 wip 🚧

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

### Run w/ Docker
🚧 wip 🚧

### APIs
- [x] resultGet
- [x] resultGetAll
- [x] resultPost
- [x] resultUpdate
- [x] resultDelete

### GraphQL
🚧 wip 🚧

## demo
🚧 wip 🚧
