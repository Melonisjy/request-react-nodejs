# client(react) / server(nodejs)

## Fetch
- 자바스크립트에서 HTTP 파이프라인을 구성하는 요청과 응답 등의 요소를 접근, 조작할 수 있게 해주는 api
- 기본적인 Fetch 요청 방식

```
function App() {
  const [todoList, setTodoList] = useState(null);

  const fetchData = () => {
    fetch("http://localhost:4000/api/todo")
      .then((response) => response.json())
      .then((data) => setTodoList(data));
  };
```

## Axios

```
function App() {
  const [todoList, setTodoList] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(SERVER_URL);
    setTodoList(response.data);
  };
```

## cors(cross-origin resource sharing) 정책

**Client: localhost:3000 (react 개발 서버)** <br>
**Server: localhost:4000**

client와 server의 포트가 다르기 때문에 데이터의 출처가 다르다 = Origin이 다르다 = 서로 데이터를 공유할 수 없다 <br>
-> 서버에서 cors 정책을 해결해야 한다. client X

**server**
- npm i cors
```
const cors = require("cors"); // import시킴.

app.use(cors()); // 괄호 안이 비어있으면 모두 허용한다는 뜻.
```

<hr>

*react-query 라이브러리를 쓰면 편리하다.*


### 참고
- [프론트에서 서버에 데이터 요청하는 방법 (React로 fetch, axios 사용하기) - 라매개발자 ](https://www.youtube.com/watch?v=d6suykcsNeY&t=268s)
- [mozila/Fetch 사용하기](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch)
