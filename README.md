# Todo List

The base for this app is a fork from an [example project of angular with java by Bhargav Bachina](https://medium.com/bb-tutorials-and-thoughts/how-to-develop-and-build-angular-app-with-java-backend-87fb603c6e17)


## How to start the project on your local machine

### 1. Clone the project

```shell
git clone git@github.com:ToddEmonster/todo-list.git
```

### 2. Start the FRONT : Run Angular on port 4200

```shell
cd src/main/ui
npm install
npm start
```

### 3. Start the BACK : Run Java Code on 8080

```shell
mvn clean install
java -jar target/users-0.0.1-SNAPSHOT.jar
```

### 4. Display in browser

Open a browser and go to `localhost:4200`