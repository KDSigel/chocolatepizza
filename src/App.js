import React, { Component } from 'react'
import Header from './Header.js'
import ImageSection from './ImageSection.js'
import Recipe from './Recipe.js'
import IngredientList from './IngredientList.js'
import Author from './Author.js'
import Footer from './Footer.js'

import './App.css'

export default class App extends Component {
  render() {
    return (
        <div className="body">
          
          <div></div>

          <div>
            <Header className="sub-head" img="logo.png" />
            <hr />
            <main>
              <section className="outer-container">
              <ImageSection className="article"/>
              <Recipe className="article"/>
              <IngredientList />
              <hr />
              <Author />
              </section>
            </main>
            <Footer />
          </div>

          <div></div>

        </div>
    )
  }
}
