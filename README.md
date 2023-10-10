# Never use Mutate State

- Do not Mutate State Directly!!
  - 상태변화 감지 안됨.
  - 직접 접근하여 가변할 경우 before state === after state
  - 개체 참조가 여전히 동일하므로 비교가 실패함.

# Redux Three Principles (Redux 세가지 원칙)

1. Single source of truth (단일 정보 소스)

- The state of the entire application is stored in an object tree within a **single store**.
- 모든 애플리케이션의 상태는 **단일 저장소** 내의 개체 트리에 저장된다.

2. State is read-only(상태는 읽기 전용)

- The only way to change the state is **to emit an action** that describes what happened.
- 발생한 일을 설명하는 **action을 내보내는 방법**만 사용하여 상태를 변경해야 한다.

3. Changes are made with pure functions(순수 함수로 변경이 이루어질 것)

- Reducers are pure functions that take a previous state and action and return a new state. Keep in mind that you must return a **New State** object instead of changing the old state.
- Reducer는 이전 state와 action을 취하고 새로운 State를 반환하는 순수함수이다. 이전 상태를 변경하는 대신 **새로운 State** 개체를 반환해야 한다는 점을 명심해라.

## 순수 함수(Pure functions)의 특징

- 외부 네트워크나 데이터베이스 호출을 하지 않는다.
- 반환 값은 매개변수 값에 의해서만 결정된다.
- 해당 인수는 "불변(immutable)"으로 간주되어야 한다. 즉, 변경해서는 안 된다.
- 동일한 인수 집합을 사용하여 순수 함수를 호출하면 항상 동일한 값이 반환된다.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
