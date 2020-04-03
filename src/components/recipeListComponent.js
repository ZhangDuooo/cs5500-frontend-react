import React from "react";
import {Link} from "react-router-dom";

export default class recipeListComponent extends React.Component {
    state = {
        recipes: [],
        title: ''
    }
    componentDidMount() {
        fetch("https://mighty-earth-70354.herokuapp.com/recipes", {mode: 'cors'})
            .then(response => response.json())
            .then(results => this.setState({
                    recipes: results
                })
            )
    }
    render() {
        return(
            <div>
                <h1 className="recipe-title text-center">Recipes</h1>
            <div className="container content-wrapper-list">
                <ul className="list-group">
                    <li className="list-group-item">
                    </li>

                    {
                        this.state.recipes.map(recipe =>
                            <li className="list-group-item"
                                key = {recipe.id}>
                                <Link to={`/recipes/${recipe.id}`}>
                                    {recipe.title}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
            </div>
        )
    }
}
