import { parseISO, format } from 'date-fns';

import pt from 'date-fns/locale/pt-BR/index';

const formatDate = (date: string): string =>
  format(parseISO(date), 'P', {
    locale: pt,
  });

export default formatDate;
