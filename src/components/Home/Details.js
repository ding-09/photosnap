import { ArrowButton } from '../../styles/Buttons';
import Picture from '../Picture';

const Details = ({ details }) => {
  const { imgs, heading, desc } = details;
  return (
    <section className='sub-details'>
      <figure>
        <Picture imgs={imgs} />
      </figure>
      <div className='text-details'>
        <h2>{heading}</h2>
        <p className='light-text'>{desc}</p>
        <ArrowButton innerText='View the stories' color='#000' />
      </div>
    </section>
  );
};

export default Details;
