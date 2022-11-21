class Request {
    constructor(url,method, params,headers, format ="json"){
        this.url = url
        this.method= method
        this.params = params
        this.headers= headers
        this.format = format
    }
    sendRequest(){
        switch (this.method){
            case "GET":
                   fetch(this.url, {
                     method: "GET",
                     headers: this.headers,
                   })
                   .then((response)=> {
                    if(response.status==200 || response.status==201){
                        return {result:"Все прошло удачно"}
                    } else if(response.status==500 ){
                        return {result: "Произошла неизвестная ошибка"}
                    }
                    else if(response.status==400){
                         return {result: "Данные не верны"}
                    } else if(response.status==403) {
                     return {result: "У Вас нету доступа на данный сервис"}
                    }
                    else {
                     return{result: "ERROR"}
                    }
                    }
                    )
                   .then(data=> console.log(data))
                break;
            case "POST":
                fetch(this.url, {
                    method: "POST",
                    headers: this.headers,
                    body: JSON.stringify(this.params)
                  })
                  .then((response)=> {
                    if(response.status==200 || response.status==201){
                        return {result:"Все прошло удачно"}
                    } else if(response.status==500 ){
                        return {result: "Произошла неизвестная ошибка"}
                    }
                    else if(response.status==400){
                         return {result: "Данные не верны"}
                    } else if(response.status==403) {
                     return {result: "У Вас нету доступа на данный сервис"}
                    }
                    else {
                     return{result: "ERROR"}
                    }
                   }
                   )
                  .then(data=> console.log(data))
                break
            case "PUT":
                fetch(this.url, {
                    method: "PUT",
                    headers: this.headers,
                    body: JSON.stringify(this.params)
                  })
                  .then((response)=> {
                   if(response.status==200 || response.status==201){
                       return {result:"Все прошло удачно"}
                   } else if(response.status==500 ){
                       return {result: "Произошла неизвестная ошибка"}
                   }
                   else if(response.status==400){
                        return {result: "Данные не верны"}
                   } else if(response.status==403) {
                    return {result: "У Вас нету доступа на данный сервис"}
                   }
                   else {
                    return{result: "ERROR"}
                   }
                   }
                   )
                  .then(data=> console.log(data))
                break
            case "DELETE":
                fetch(this.url, {
                    method: "DELETE",
                    headers: this.headers,
                  })
                  .then((response)=> {
                    if(response.status==200 || response.status==201){
                        return {result:"Все прошло удачно"}
                    } else if(response.status==500 ){
                        return {result: "Произошла неизвестная ошибка"}
                    }
                    else if(response.status==400){
                         return {result: "Данные не верны"}
                    } else if(response.status==403) {
                     return {result: "У Вас нету доступа на данный сервис"}
                    }
                    else {
                     return{result: "ERROR"}
                    }
                   }
                   )
                  .then(data=> console.log(data))
            break
                default: 
                alert("Неверный метод запроса!")
        }
    }
}
// get запрос
const reqGet = new Request("https://jsonplaceholder.typicode.com/posts","GET")
reqGet.sendRequest();

//post запрос
const obj= {
        "userId": 2,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      
}
const reqPost = new Request("https://jsonplaceholder.typicode.com/posts","POST",obj,{"Content-type":"Application/json"})
reqPost.sendRequest();

//put запрос
const obj2= {
    "userId": 2,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  
}
const reqPut = new Request("https://jsonplaceholder.typicode.com/posts/1","PUT",obj2,{"Content-type":"Application/json"})
reqPut.sendRequest();

//delete запрос

const reqDelete = new Request("https://jsonplaceholder.typicode.com/posts/1","DELETE")
reqDelete.sendRequest();
