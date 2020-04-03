import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import recipeListComponent from "./recipeListComponent";
import RecipeDetailComponent from "./recipeDetailComponent";

class RecipeComponent extends React.Component {
    render() {
        return(
            <div>
                <Router>
                    <Route
                        path = "/recipes"
                        exact = {true}
                        component={recipeListComponent}
                    />
                    <Route
                        path = "/recipes/:recipeId"
                        exact = {true}
                        render={(props) =>
                            <RecipeDetailComponent
                                recipeId={props.match.params.recipeId}
                            />}
                    />
                </Router>
            </div>
        )
    }
}


export default RecipeComponent
