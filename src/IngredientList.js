import React, { Component } from 'react'
import IngredientItem from './IngredientItem.js'

export default class IngredientList extends Component {
    render() {
        return (
            <div className="recipe">
                <ul>
                    <IngredientItem amount="1 1/2 cups" ingredient="milk" />
                    <IngredientItem amount="1/2 cup" ingredient="mascarpone" />
                    <IngredientItem amount="1/2 tsp" ingredient="pink salt" />
                    <IngredientItem amount="1 lb" ingredient="Black Mission Figs" />
                    <IngredientItem amount="1/2 cup" ingredient="brown sugar" />
                    <IngredientItem amount="2-4 tbsp" ingredient="water" />
                </ul>
                <ul>
                    <IngredientItem amount="1 1/2 cups" ingredient="heavy cream" />
                    <IngredientItem amount="1/3 cup" ingredient="granulated sugar" />
                    <IngredientItem amount="2" ingredient="egg yolks" />
                    <IngredientItem amount="1" ingredient="lemon, juiced" />
                    <IngredientItem amount="2 tbsp" ingredient="butter" />
                    <IngredientItem amount="1 cup" ingredient="honey roasted pecans, roughly chopped" />
                </ul>
            </div>
        )
    }
}
