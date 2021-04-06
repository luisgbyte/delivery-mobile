import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

const formatValue = (value) =>
    Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })
        .format(value)
        .replace(/^(\D+)/, '$1 ');
export default formatValue;
