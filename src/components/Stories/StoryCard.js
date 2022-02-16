import { StyledStoryCard } from './StoryCard.styled';
import { ArrowButton } from '../../styles/Buttons';

const StoryCard = ({ story }) => {
  const { date, title, author, img } = story;
  return (
    <StyledStoryCard img={img}>
      <div className='text-container'>
        <span className='date'>{date}</span>
        <h2>{title}</h2>
        <p className='author'>by {author}</p>
      </div>
      <ArrowButton innerText='Read story' color='#fff' />
    </StyledStoryCard>
  );
};

export default StoryCard;
