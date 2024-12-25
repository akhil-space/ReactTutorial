import CocktailCard from './CocktailCard';

const CocktailList = ({drinks})=>{
console.log( "inside cocktail list", drinks);

if (!drinks) {
    return (
      <h4 style={{ textAlign: 'center' }}>No matching cocktails found...</h4>
    );
  }

const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
});

return <>
{formattedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item} />;
      })}
</>
}

export default CocktailList;