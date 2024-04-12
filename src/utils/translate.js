// For Dynamic datas

//const showingTranslateValue = (data, lang) => {
//console.log("data : ", data, " langs :", lang);
//  return data !== undefined && Object?.keys(data).includes(lang)
//    ? data[lang]
//    : data?.en;
//};

// Added by : Govinda 28/3/2024 just for static data as of now

const showingTranslateValue = (categoryName) => {

  // Example translation object
  const translations = {
    // Add more translations as needed
  };

  // Check if translation exists for the category name
  if (translations.hasOwnProperty(categoryName)) {
    return translations[categoryName];
  } else {
    // If translation doesn't exist, return the original category name
    return categoryName;
  }
};
const showingImage = (data) => {
  return data !== undefined && data;
};

const showingUrl = (data) => {
  return data !== undefined ? data : '!#';
};

export { showingTranslateValue, showingImage, showingUrl };
