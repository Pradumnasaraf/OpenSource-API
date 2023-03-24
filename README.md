![OpenSource API banner](https://user-images.githubusercontent.com/51878265/212617054-61bc38e5-ea65-4594-a23c-f46de14b7fec.png)

<div align="center">

<h3 >An Open Source, free, and public API.<h3>

[![Publish Docker Image to DockerHub](https://github.com/Pradumnasaraf/OpenSource-API/actions/workflows/publish-dockerhub.yml/badge.svg)](https://github.com/Pradumnasaraf/OpenSource-API/actions/workflows/publish-dockerhub.yml) [![Publish Image to GitHub Container Registry](https://github.com/Pradumnasaraf/OpenSource-API/actions/workflows/publish-ghcr.yml/badge.svg)](https://github.com/Pradumnasaraf/OpenSource-API/actions/workflows/publish-ghcr.yml) [![Unit Tests](https://github.com/Pradumnasaraf/OpenSource-API/actions/workflows/unit-testing.yml/badge.svg)](https://github.com/Pradumnasaraf/OpenSource-API/actions/workflows/unit-testing.yml) [![Format](https://github.com/Pradumnasaraf/OpenSource-API/actions/workflows/prettier.yml/badge.svg)](https://github.com/Pradumnasaraf/OpenSource-API/actions/workflows/prettier.yml)

</div>

<br>

## 🛠️ Technlogies used

|           Server           | Database |   Testing   | Deployment |
| :------------------------: | :------: | :---------: | :--------: |
| Node.js, Express, Mongoose | MongoDB  | Mocha, Chai |   Vercel   |

## 📌 Endpoints

| Endpoints          | Description                 | Method |
| :----------------- | :-------------------------- | :----- |
| `/`                | Home page.                  | GET    |
| `/api/devtips`     | Returns a list of dev tips. | GET    |
| `/api/devtips/:id` | Returns a single dev tip.   | GET    |
| `/api/devtips`     | Creates a new dev tip.      | POST   |
| `/api/devtips/:id` | Updates a dev tip.          | PATCH  |
| `/api/devtips/:id` | Deletes a dev tip.          | DELETE |
|                    |                             |        |

## 👨‍💻 Developing the API

This section includes how to test and develop API at your end. You can either run it in the cloud using **Gitpod** or run it inside a container using **docker** or choose to set up the complete environment locally.

**GitPod**

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Pradumnasaraf/OpenSource-API)

**Docker Compose**

Prerequisites - Docker and Compose installed in your local system.

You can run below command and you can access the API at `localhost:9009`

```bash
docker compose up
```

**Local setup**

Prerequisites- Node.js installed and a Mongo server on your localhost.

Step 1: Copy `.env.example` to `.env`.

```
npm run env
```

Step 2: Run the app in development mode.

```
npm run dev
```

## 🛡️ License

**OpenSource API** is licensed under the GPL-3.0 License - see the [LICENSE](/LICENSE) file for details.

## 🤝 Support

Don't forget to leave a star ⭐️
