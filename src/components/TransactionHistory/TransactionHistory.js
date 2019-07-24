import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tr}>
          <th className={styles.th}>Transaction</th>
          <th className={styles.th}>Amount</th>
          <th className={styles.th}>Date</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, date }) => (
          <tr
            className={
              type === 'Withdrawal' ? styles.withdrawal : styles.deposit
            }
            key={id}
          >
            <td className={styles.td}>{type}</td>
            <td className={styles.td}>{amount}.00$</td>
            <td className={styles.td}>{date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TransactionHistory;
