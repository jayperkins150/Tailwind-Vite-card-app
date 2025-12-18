import React, { useState } from 'react';
import Card from './components/Card';
import { ThemeToggle } from './components/ThemeToggle';

// Initial data for dynamic cards
const INITIAL_CARDS = [
  { 
    id: 1, 
    title: "Why I made this app", 
    description: "This app uses the Tailwind dark mode function, with all CSS styling set inline.", 
  },
];

// Component for the Card Input Form
const CardForm = ({ onAddCard }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !description) return;
        
        onAddCard({
            id: Date.now(), // Unique ID
            title: title,
            description: description,
        });
        
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-12 p-6 max-w-lg mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Add New Card</h2>
            
            <input
                type="text"
                placeholder="Card Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
            />
            
            <textarea
                placeholder="Card Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
            />
            
            <button
                type="submit"
                className="w-full py-2 rounded font-bold text-white transition
                           bg-green-500 hover:bg-green-600 dark:bg-emerald-500 dark:hover:bg-emerald-600"
            >
                Add Card
            </button>
        </form>
    );
};


function App() {
  const [cards, setCards] = useState(INITIAL_CARDS);

  const handleAddCard = (newCard) => {
    setCards((prevCards) => [newCard, ...prevCards]);
  };

  return (
    <div className="min-h-screen mx-auto p-8 
                    bg-white text-gray-900
                    dark:bg-gray-900 dark:text-gray-100
                    transition-colors">

      {/* Header */}
      <div className="flex justify-between items-center mb-12 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold">My Tailwind + Vite Card App</h1>
        <ThemeToggle />
      </div>

      {/* Form Component */}
      <CardForm onAddCard={handleAddCard} />

      {/* Cards Display Section - This is the parent flex container */}
      <div className="flex flex-wrap justify-center max-w-7xl mx-auto">
        
        {/* Map over the cards state to render the Card components */}
        {cards.map((card) => (
          <Card 
            key={card.id}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
