import React from "react";
import shrimp from "../assets/shrimp-fried-rice.jpg"
import chicken from "../assets/additive-sesame-chicken.jpeg"

export default class RecipeDetailComponent extends React.Component {
    state = {
        recipe: {},
        steps: [],
        ingredients: []
    }
    componentDidMount() {
        fetch(`https://mighty-earth-70354.herokuapp.com/recipe/${this.props.recipeId}`)
            .then(response => response.json())
            .then(results => this.setState({
                recipe: results,
                steps: results.steps,
                ingredients: results.ingredients
            }))

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.cityID !== prevProps.cityID) {
            fetch(`https://mighty-earth-70354.herokuapp.com/recipe/${this.props.recipeId}`)
                .then(response => response.json())
                .then(results => this.setState({
                    recipe: results,
                    steps: results.steps,
                    ingredients: results.ingredients
                }))
        }
    }
    render() {
        return(

            <div className="container content-wrapper-detail">
                <div className="text-center">
                    {this.state.recipe.title === "Shrimp Fried Rice" &&
                    <img src={shrimp} className="picture"/>}
                    {this.state.recipe.title === "Addictive Sesame Chicken" &&
                    <img src={chicken} className="picture"/>}
                </div>
                <ul className="list-group">

                    <li className="list-group-item">{this.state.recipe.title}</li>
                    <li className="list-group-item">Yield: {this.state.recipe.yield}</li>
                    <li className="list-group-item">Cooking Time: {this.state.recipe.cookingTime}</li>
                    <li className="list-group-item">Preparation Time: {this.state.recipe.prepTime}</li>
                    <li className="list-group-item">Steps: {this.state.steps.map(step => <div>* {step}</div>)}</li>

                    <li className="list-group-item">Ingredients: {this.state.ingredients.map(ingredient =>
                            <div>

                                - {ingredient}
                            </div>
                    )}</li>
                </ul>

            </div>

        )
    }
}
