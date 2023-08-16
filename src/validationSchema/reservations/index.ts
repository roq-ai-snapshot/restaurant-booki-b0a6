import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  table_status: yup.string().required(),
  customer_id: yup.string().nullable(),
  restaurant_id: yup.string().nullable(),
});
