import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { notifyA, notifyB, notifyC, notifyD } from '../Notification/toast';
import styles from './Controls.module.css';

class Controls extends Component {
  state = {
    value: '',
  };

  changeInput = ({ target }) => {
    this.setState({ value: target.value });
  };

  reset = () => {
    this.setState({ value: '' });
  };

  handleSubmit = ({ target }) => {
    const { name } = target;
    const { onState, onControls } = this.props;

    const value = Number(target.closest('section').children[0].value);

    if (value === 0) {
      notifyA();
    } else if (name === 'Withdrawal' && value > onState) {
      notifyB();
    } else if (value < 0) {
      notifyD();
      this.reset();
    } else {
      onControls({
        type: name,
        amount: target.closest('section').children[0].value,
      });

      this.reset();

      notifyC();
    }
  };

  render() {
    const { value } = this.state;
    return (
      <section className={styles.controls}>
        <input
          className={styles.controls_inp}
          type="number"
          onChange={this.changeInput}
          value={value}
        />
        <button
          className={styles.controls_btn}
          name="Deposit"
          onClick={this.handleSubmit}
          type="button"
        >
          Deposit
        </button>
        <button
          className={styles.controls_btn}
          name="Withdrawal"
          onClick={this.handleSubmit}
          type="button"
        >
          Withdraw
        </button>
      </section>
    );
  }
}
Controls.propTypes = {
  onState: PropTypes.number.isRequired,
  onControls: PropTypes.func.isRequired,
};

export default Controls;
