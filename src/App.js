import React, {useState, useEffect} from 'react'
import './css/App.scss'
import './css/normalize.css'
import './css/skeleton.css'

function take(n, xs) {
  var result = [];
  for (var i = 0; i < Math.min(n, xs.length); i++) {
    result.push(xs[i]);
  }
  return result;
}

function groupsOf(n, xs) {
  var result = [];
  for ( var i = 0; i < xs.length; i += n ) {
    result.push(xs.slice( i, i +n));
  }
  return result;
}

function articlesWithAuthors(articles, authors) {
  var result = [];
  var author;
  for (var i = 0; i < articles.length; i++) {
    author = authors.filter(author => articles[i].userId === author.id)[0];
    result.push({
      title: articles[i].title,
      content: articles[i].body,
      author: (author ? author.name : ''),
      id: articles[i].id
    });
  }
  return result;
}

function ArticleView(props) {
  console.log(props.article)
  return (
    <div className='article four columns'>
      <p className='title'>{props.article.title}</p>
      <p className='content'>{props.article.content}</p>
      <p className='author'>{props.article.author}</p>
    </div>
  )
}

function ArticleRowView(props) {
  return (
    <div className='row'>
      {props.articles.map((article) => {
        return <ArticleView key={'article-' + article.id} article={article} />
      })}
    </div>
  )
}

function App() {
  const [articles, setArticles] = React.useState([]);
  const [authors, setAuthors] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setArticles(json));

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setAuthors(json));
  }, []);

  var rows = groupsOf(3, take(100, articlesWithAuthors(articles, authors)));

  return (
    <div className='container'>
      <i className="fas fa-search"></i>
      <div className='input'>
        <input type='search' id='filter' name='filter' placeholder='Filter by author...'/>
      </div>

      {rows.map((row, i) => <ArticleRowView key={'row-' + i} articles={row} /> )}
    </div>
  )
}

export default App;