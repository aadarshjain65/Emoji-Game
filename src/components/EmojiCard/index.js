import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiUrl, emojiName} = emojiDetails
  const onClickEmojiCard = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button type="button" className="emoji-button" onClick={onClickEmojiCard}>
        <img src={emojiUrl} alt={emojiName} className="emoji-icon" />
      </button>
    </li>
  )
}

export default EmojiCard
