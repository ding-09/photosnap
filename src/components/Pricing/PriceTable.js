import PriceTableRow from './PriceTableRow';
import { StyledPriceTable } from './PriceTable.styled';
import { v4 as uuidv4 } from 'uuid';

const PriceTable = ({ features }) => {
  return (
    <StyledPriceTable>
      <caption className='mobile-caption'>The Features</caption>
      <caption className='caption'>Compare</caption>
      <thead className='table-head'>
        <tr>
          <th>The Features</th>
        </tr>
        <tr>
          <th>Basic</th>
          <th>Pro</th>
          <th>Business</th>
        </tr>
      </thead>
      {features.map((feature) => (
        <tbody>
          <PriceTableRow feature={feature} key={uuidv4()} />
        </tbody>
      ))}
    </StyledPriceTable>
  );
};

export default PriceTable;
