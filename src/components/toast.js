import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

toast.configure({
  autoClose: 1500,
  draggable: true,
});

const notifyA = () => toast.error('Введите сумму для проведения операции!', {});

const notifyB = () =>
  toast.error('На счету недостаточно средств для проведения операции!', {});

const notifyC = () => toast.success('Операция успешна!', {});

export { notifyA, notifyB, notifyC };
