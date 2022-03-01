import PriceTableRow from './PriceTableRow';
import { StyledPriceTable } from './PriceTable.styled';

const PriceTable = ({ features }) => {
  return (
    <StyledPriceTable>
      <caption>The Features</caption>
      <tbody>
        {features.map((feature) => (
          <PriceTableRow feature={feature} />
        ))}
      </tbody>
    </StyledPriceTable>
  );
};

export default PriceTable;
