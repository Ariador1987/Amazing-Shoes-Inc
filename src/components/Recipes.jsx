import personTwo from "../images/person2.jpg";

const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4,
};

const elvenGauntletsRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonstone: 4,
};

const Recipes = () => {
    return (
        <div>
            <h3>Current Recipe</h3>
            <img src={personTwo} alt="person Two" width="250" />
        </div>
    );
};

export default Recipes;
