import React, { createContext, useContext, useState } from 'react';


const FeaturedCategoriesContext = createContext();

const FeaturedCategoriesProvider = ({ children }) => {

  const [featuredCategories, setFeaturedCategories] = useState(() => {
    return [
      { id: 1, name: 'Women', imageUrl: 'https://img.freepik.com/free-photo/lady-trousers-blouse-keeps-sequins-dress-woman-posing-with-packages-while-shopping-pink-background_197531-17607.jpg?w=360&t=st=1703422124~exp=1703422724~hmac=fd56131ef692e547ea3fea344d79d3c83240952b8c53407aca5aee2da38b17f4' },
      { id: 2, name: 'Men', imageUrl: 'https://img.freepik.com/free-photo/full-length-portrait-handsome-serious-man_171337-17388.jpg?w=360&t=st=1703421291~exp=1703421891~hmac=c6cf8f344513f50fd5738e18e0be9cf8e71a8530f14e609189f093f8326109db' },
    ];
  });

 
  const updateFeaturedCategories = (newCategories) => {
    setFeaturedCategories(newCategories);
  };

  return (
    <FeaturedCategoriesContext.Provider value={{ featuredCategories, updateFeaturedCategories }}>
      {children}
    </FeaturedCategoriesContext.Provider>
  );
};

const useFeaturedCategories = () => {
  const context = useContext(FeaturedCategoriesContext);
  if (!context) {
    throw new Error('useFeaturedCategories must be used within a FeaturedCategoriesProvider');
  }
  return context;
};

export { FeaturedCategoriesProvider, useFeaturedCategories };
