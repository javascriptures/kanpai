import React from 'react';
import { Link } from 'react-router-dom';

const SearchResult = ({ drinks }) => {
  let cocktails;
  if (drinks !== null) {
    cocktails = drinks.map(drink => {
      const id = drink.idDrink;
      return (
        <div className='container' key={id}>
          <div className='gallery' key={id}>
            <Link
              to={`/drinks/${id}`}
              id={id}
              style={{ textDecoration: 'none' }}
            >
              <div className='galleryMembers'>
                <img
                  className='cocktail'
                  src={drink.strDrinkThumb}
                  alt='Cocktails'
                />
                <h2 className='description'>{drink.strDrink}</h2>
              </div>
            </Link>
          </div>
        </div>
      );
    });
  } else {
    return (
      <div className='noSearch'>
        <img
          className='nothingHere'
          src='https://media.giphy.com/media/l2SpRf55ejxqJ53UY/giphy.gif'
          alt='Nothing to see here'
        />{' '}
      </div>
    );
  }
  return (
    <div>
      <div>{cocktails}</div>
    </div>
  );
};

export default SearchResult;
