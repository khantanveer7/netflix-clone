import React from 'react'
import Banner from './components/banner/Banner'
import Row from './components/row/Row'
import requests from './requests'
import './App.css'
import Nav from './components/nav/Nav'

const App = () => {
  return (
    <div className='app'>
      <Nav />
      <Banner />
      <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginal} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComendyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentaries Movies" fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default App
