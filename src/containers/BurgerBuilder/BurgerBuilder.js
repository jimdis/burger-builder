import React, { useState } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
}

const BurgerBuilder = props => {
  const [state, setState] = useState({
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  })

  const addIngredientHandler = type => {
    const oldCount = state.ingredients[type]
    const updatedCount = oldCount + 1
    const updatedIngredients = {
      ...state.ingredients,
    }
    updatedIngredients[type] = updatedCount
    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = state.totalPrice
    const newPrice = oldPrice + priceAddition
    setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    })
  }

  const removeIngredientHandler = type => {}

  return (
    <Aux>
      <Burger ingredients={state.ingredients} />
      <BuildControls ingredientAdded={addIngredientHandler} />
    </Aux>
  )
}

export default BurgerBuilder
