import { ArrowButton } from '../../styles/Buttons';

const Details = ({ details }) => {
  const { img, heading, desc } = details;
  return (
    <section className='sub-details'>
      <figure>
        <img src={img} alt={heading} />
      </figure>
      <div className='text-details'>
        <h2>{heading}</h2>
        <p className='light-text'>{desc}</p>
        <ArrowButton innerText='View the stories' />
      </div>
    </section>
  );
};

export default Details;
