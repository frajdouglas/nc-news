import axios from 'axios';

const redditApi = axios.create({
    baseURL: "https://reddit-clone-nc.herokuapp.com/api/",
  });
  
  export const getTopics = () => {
    return redditApi.get("/topics").then((res) => {
      return res.data;
    });
  };

  export const getArticles = (topic) => {
    return redditApi.get("/articles", { params : { topic : topic}})
    .then((res) => {
        console.log(res.data.articles)
      return res.data.articles;
    });
  };
