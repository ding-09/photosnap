import { ReactComponent as CheckIcon } from '../../assets/pricing/desktop/check.svg';

const PriceTableRow = ({ feature }) => {
  const { heading, tiers } = feature;
  return (
    <div className='row-container'>
      <tr>
        <th>{heading}</th>
      </tr>
      <tr className='tier-name'>
        <td>Basic</td>
        <td>Pro</td>
        <td>Business</td>
      </tr>
      <tr className='tier-avail'>
        {Object.values(tiers).map((tier) => {
          return tier ? (
            <td>
              <CheckIcon />
            </td>
          ) : (
            <td></td>
          )
        })}
      </tr>
    </div>
  );
};

export default PriceTableRow;
