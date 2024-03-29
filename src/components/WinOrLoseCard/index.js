import './index.css'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imgUrl = isWon ? WON_IMAGE : LOSE_IMAGE
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-lose-card">
      <div className="win-lose-content">
        <h1 className="game-status"> {gameStatus} </h1>
        <p className="current-score-label"> {scoreLabel} </p>
        <p className="current-score-value"> {score}/12 </p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img src={imgUrl} alt="win or lose" className="win-or-lose-image" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
