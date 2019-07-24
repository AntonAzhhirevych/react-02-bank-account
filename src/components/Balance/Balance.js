import React from 'react';
import PropTypes from 'prop-types';
import styles from './Balance.module.css';

const Balance = ({ current, deposit, withdrawal }) => {
  return (
    <section className={styles.balance}>
      <span className={styles.balance_spn}>⬆{deposit}$</span>
      <span className={styles.balance_spn}>⬇{withdrawal}$</span>
      <span className={styles.balance_spn}>Balance: {current}$</span>
    </section>
  );
};

Balance.propTypes = {
  current: PropTypes.number.isRequired,
  deposit: PropTypes.number.isRequired,
  withdrawal: PropTypes.number.isRequired,
};

export default Balance;
