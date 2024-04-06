import React from 'react';

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem
        (itemName);
    
        let parsedItem;
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
  
        setLoading(false);
        } catch(error) {
          setLoading(false);
          setError(true);
        }
      }, 2000);
    }, [itemName, initialValue]);
  
    
  
    
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem)
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  
}

  export { useLocalStorage };

  // localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   { text: 'Estudiar todos los perros dias', completed: true},
//   { text: 'Tomar el Curso de React.js', completed: false},
//   { text: 'Fumar Marihuana', completed: true},
//   { text: 'Sacar a los perros', completed: false},
//   { text: 'Cocinar algo verga', completed: false},
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

  