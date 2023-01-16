![OpenSource API banner](https://user-images.githubusercontent.com/51878265/212617054-61bc38e5-ea65-4594-a23c-f46de14b7fec.png)

<h3 align="center" >An Open Source, free, and public API.<h3>

<br>

## 🛠️ Technlogies used

|  Server  | Database |   Testing   | Deployment |
| :------: | :------: | :---------: | :--------: |
| Node.js, Express, Mongoose | MongoDB | Mocha, Chai | Vercel |

## 👨‍💻 Developing the API

This section include how to test and devlop api at your end.

**GitPod**



[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Pradumnasaraf/OpenSource-API)

**Docker Compose**
  
Prerequisites: You need to have Docker and Compose installed in your local system.

```bash
docker compose up
```

**Local Setup**

You need to have Node.js installed and Mongo server on your localhost



Step 1)
```
npm run env
```

It will copy `.env.example` to `.env` 

Step 2)


```
npm run dev
```


## Endpoints

Base URL - `opensourceapi.vercel.app`

Endpoints: **api/devtip**

- **GET:** - To get all the Developer tips.
- **POST** - Post a new Developer tip.

```json
{
  "summary": "Take breaks while coding"
}
```

## 🛡️ License

**OpenSource API** is licensed under the GPL-3.0 License - see the [LICENSE](/LICENSE) file for details.

## 🤝 Support

Don't forget to leave a star ⭐️
