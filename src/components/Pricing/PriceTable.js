import PriceTableRow from './PriceTableRow';
import { StyledPriceTable } from './PriceTable.styled';
import { v4 as uuidv4 } from 'uuid';

const PriceTable = ({ features }) => {
  return (
    <StyledPriceTable>
      <caption>The Features</caption>
      <tbody>
        {features.map((feature) => (
          <PriceTableRow feature={feature} key={uuidv4()} />
        ))}
      </tbody>
    </StyledPriceTable>
  );
};

export default PriceTable;
