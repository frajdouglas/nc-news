import axios from 'axios';

const redditApi = axios.create({
    baseURL: "https://reddit-clone-nc.herokuapp.com/api/",
  });
  
  export const getTopics = () => {
    return redditApi.get("/topics").then((res) => {
      return res.data;
    });
  };

  export const getArticles = (topic, sort_by) => {
    console.log(sort_by,topic)
    return redditApi.get("/articles", { params : { topic : topic, sort_by : sort_by}})
    .then((res) => {
      return res.data.articles;
    });
  };

  export const getSingleArticle = (articleid) => {
    return redditApi.get(`/articles/${articleid}`)
    .then((res) => {
      return res.data.articles;
    });
  };

  export const getComments = (articleid) => {
    return redditApi.get(`/articles/${articleid}/comments`)
    .then((res) => {
      return res.data.comments;
    });
  };

  export const addVote = (articleid) => {
    return redditApi.patch(`/articles/${articleid}`,{ inc_votes : 1 })
    .then((res) => {
      return res;
    })
  };

  export const deleteComment = (comment_id) => {
    console.log(comment_id)
    return redditApi.delete(`/comments/${comment_id}`)
    .then((res) => {
      return res;
    });
  };


  export const addComment = (articleid,commentObject) => {
    return redditApi.post(`/articles/${articleid}/comments`, commentObject)
    .then((res) => {
      return res.data;
    })
  };
