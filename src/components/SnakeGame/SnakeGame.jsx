import React, { useState, useEffect, useCallback, useRef } from 'react';

// Game constants
const GRID_SIZE = 20;
const CELL_SIZE = 20; // In pixels
const BOARD_WIDTH = GRID_SIZE * CELL_SIZE;
const BOARD_HEIGHT = GRID_SIZE * CELL_SIZE;
const INITIAL_SPEED = 150; // Milliseconds between updates
const BOARD_COLOR = '#1a1a2e'; // Dark blue-purple
const SNAKE_COLOR = '#4ade80'; // Green-400
const FOOD_COLOR = '#f472b6'; // Pink-400
const GAME_OVER_TEXT_COLOR = '#f87171'; // Red-400
const SCORE_TEXT_COLOR = '#a78bfa'; // Violet-400

const getRandomCoord = () => ({
  x: Math.floor(Math.random() * GRID_SIZE),
  y: Math.floor(Math.random() * GRID_SIZE),
});

const isSamePos = (pos1, pos2) => pos1.x === pos2.x && pos1.y === pos2.y;

const SnakeGame = () => {
  const initialSnake = [{ x: Math.floor(GRID_SIZE / 2), y: Math.floor(GRID_SIZE / 2) }];
  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState(getRandomCoord());
  const [direction, setDirection] = useState({ x: 0, y: 0 }); // Initially no direction
  const [speed, setSpeed] = useState(INITIAL_SPEED);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0); // High score state
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false); // New state for game start
  const directionRef = useRef(direction); // Ref to get latest direction in interval

  // Load high score from localStorage on mount
  useEffect(() => {
    const storedHighScore = localStorage.getItem('snakeGameHighScore');
    if (storedHighScore) {
      setHighScore(parseInt(storedHighScore, 10));
    }
  }, []);

  // Reset Game Function
  const resetGame = useCallback(() => {
    setSnake(initialSnake);
    setFood(getRandomCoord());
    setDirection({ x: 0, y: 0 });
    setSpeed(INITIAL_SPEED);
    setScore(0);
    setGameOver(false);
    setGameStarted(false); // Reset game started flag
  }, [initialSnake]);

  // Game Over Check & High Score Update
  const handleGameOver = useCallback(() => {
    setGameOver(true);
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('snakeGameHighScore', score.toString());
    }
  }, [score, highScore]);

  // Move Snake Logic
  const moveSnake = useCallback(() => {
    if (gameOver || !gameStarted || (directionRef.current.x === 0 && directionRef.current.y === 0)) return; // Don't move if game over, not started, or no direction set

    setSnake(prevSnake => {
      const head = { ...prevSnake[0] };
      const currentDirection = directionRef.current; // Use ref here
      head.x += currentDirection.x;
      head.y += currentDirection.y;

      // Check wall collision
      if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        handleGameOver();
        return prevSnake;
      }

      // Check self collision
      for (let i = 1; i < prevSnake.length; i++) {
        if (isSamePos(head, prevSnake[i])) {
          handleGameOver();
          return prevSnake;
        }
      }

      const newSnake = [head, ...prevSnake];

      // Check food collision
      if (isSamePos(head, food)) {
        setScore(s => s + 10);
        // Keep placing food until it's not on the snake
        let newFoodPos;
        do {
           newFoodPos = getRandomCoord();
        } while (newSnake.some(segment => isSamePos(segment, newFoodPos)));
        setFood(newFoodPos);
        // Don't pop tail to grow
      } else {
        newSnake.pop(); // Remove tail if no food eaten
      }
      
      return newSnake;
    });
  }, [gameOver, handleGameOver, gameStarted, food]);

  // Game Loop
  useEffect(() => {
    // Only run the interval if the game has started and is not over
    if (!gameStarted || gameOver) return;

    const intervalId = setInterval(moveSnake, speed);
    return () => clearInterval(intervalId);
  }, [moveSnake, speed, gameOver, gameStarted]); // Add gameStarted dependency

  // Handle Keyboard Input
  const handleKeyDown = useCallback((e) => {
    if (gameOver) return;

    let newDirection = { ...directionRef.current };
    let keyProcessed = false;

    switch (e.key) {
      case 'ArrowUp':
        if (directionRef.current.y === 0) { newDirection = { x: 0, y: -1 }; keyProcessed = true; }
        break;
      case 'ArrowDown':
        if (directionRef.current.y === 0) { newDirection = { x: 0, y: 1 }; keyProcessed = true; }
        break;
      case 'ArrowLeft':
        if (directionRef.current.x === 0) { newDirection = { x: -1, y: 0 }; keyProcessed = true; }
        break;
      case 'ArrowRight':
        if (directionRef.current.x === 0) { newDirection = { x: 1, y: 0 }; keyProcessed = true; }
        break;
      default:
        break;
    }

    if (keyProcessed) {
      e.preventDefault(); // Prevent page scrolling
      directionRef.current = newDirection;
      // Start the game on the first valid key press
      if (!gameStarted) {
        setGameStarted(true);
      }
    }
  }, [gameOver, gameStarted]); // Add gameStarted dependency

  // Add/Remove event listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="flex flex-col items-center">
      {/* Score Display */}
      <div className="mb-4 text-xl font-bold flex space-x-6">
         <span style={{ color: SCORE_TEXT_COLOR }}>Score: {score}</span>
         <span style={{ color: SCORE_TEXT_COLOR }}>High Score: {highScore}</span>
      </div>

      {/* Game Board */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
          gridTemplateRows: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
          width: `${GRID_SIZE * CELL_SIZE}px`,
          height: `${GRID_SIZE * CELL_SIZE}px`,
          backgroundColor: BOARD_COLOR,
          border: `2px solid ${SCORE_TEXT_COLOR}`,
          position: 'relative', // Needed for game over overlay
          boxShadow: '0 0 20px rgba(167, 139, 250, 0.5)' // Added shadow
        }}
      >
        {/* Game Over Overlay */}
        {gameOver && (
          <div 
            style={{ 
              position: 'absolute', 
              top: 0, left: 0, right: 0, bottom: 0, 
              backgroundColor: 'rgba(0, 0, 0, 0.7)', 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'center', 
              alignItems: 'center',
              zIndex: 10
            }}
          >
            <div style={{ color: GAME_OVER_TEXT_COLOR, fontSize: '2em', fontWeight: 'bold', marginBottom: '20px' }}>
              Game Over!
            </div>
            <button 
              onClick={resetGame} 
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Restart
            </button>
          </div>
        )}

        {/* Snake Segments */}
        {snake.map((segment, index) => (
          <div 
            key={index} 
            style={{
              gridColumnStart: segment.x + 1,
              gridRowStart: segment.y + 1,
              backgroundColor: SNAKE_COLOR,
              borderRadius: '20%', // Slightly rounded squares
              boxShadow: `0 0 5px ${SNAKE_COLOR}` // Added glow effect
            }}
          />
        ))}

        {/* Food */}
        <div 
          style={{
            gridColumnStart: food.x + 1,
            gridRowStart: food.y + 1,
            backgroundColor: FOOD_COLOR,
            borderRadius: '50%', // Make food round
            boxShadow: `0 0 8px ${FOOD_COLOR}` // Added glow effect
          }}
        />
      </div>
    </div>
  );
};

export default SnakeGame; 