import React, { Component } from 'react';
import { isHardwareWallet } from '../Redux/actions'
import { connect }        from 'react-redux';
import getSteps           from '../utils/API'
import { setSteps,
         setCoinIHave,
         setCoinIWant,
         setAmount,
         setShowResults,
         }           from '../Redux/actions'

import withdrawalFees from '../../../hideandfee-api/src/models/ExchangeFees'

class BuySell extends Component {

  constructor(props) {
    super(props);

    this.state = {
      transaction: null,
      baseCurrency: null,
      baseConversion: 0,
      baseConversionUSD: 0,
      exchangeCurrency: null,
      exchangeAmount: 0,
      exchangeConversionUSD: 0,
      exchangeConversion: 0,
      isEditing: true,
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.isEditing != this.props.isEditing){
      this.props.dispatch(setShowResults(!nextState.isEditing))
    }
  }

  submitSteps = () => {
    const stepsPayload = [this.props.coinIHave, this.props.coinIWant, this.props.amount]
    if (stepsPayload.every((val) => (val))) {
      getSteps(...stepsPayload)
        .then((resp) => { this.props.dispatch(setSteps(resp)) })
        .catch((err) => { this.props.dispatch(setSteps([{title: "There Was Some Error"}])) })
      this.setState({ isEditing: false })
    }
  }

  handleChange = (...values) => {
    values[0] || this.props.coinIHave ? this.props.dispatch(setCoinIHave(values[0]  || this.props.coinIHave)) : null
    values[1] || this.props.coinIWant ? this.props.dispatch(setCoinIWant(values[1]  || this.props.coinIWant)) : null
    values[2] || this.props.amount    ? this.props.dispatch(setAmount(values[2]     || this.props.amount))    : null
  }

  currencyList = () => {
    return Object.keys(withdrawalFees.withdrawalFees.Bittrex) || []
  }

  render() {

    const buyOrSell = this.props.buyOrSell;
    const withOrTo  = this.props.buyOrSell && this.props.buyOrSell == 'buy' ? 'with' : 'to';
    let isDisabled;
    if ( [this.props.coinIHave, this.props.coinIWant, this.props.amount].every((val) => (val)) ){
      isDisabled = false;
    } else {
      isDisabled = true;
    }

    console.log(this.state.isEditing)
    return (
      <div>
        {
          this.state.isEditing ? (
            <div className="flex flex-col items-center">
              <span className="text-4xl m-8 text-center" style={{ fontFamily: 'Lobster' }}> {`What cryptocurrency`} <br/> {`are you looking to ${buyOrSell || "buy"}`}? </span>
              <div className="card-dark">
                <span>
                  I Have
                </span>
                <div className="exchange-card" style={{ marginBottom: '2rem' }}>
                  <select className="styled-input" placeholder="Coin" onChange={(e) => this.handleChange(e.target.value, null, null)}>
                    <option>Select a Coin</option>
                    {
                      this.currencyList().map(( currency, index ) => (<option key={index}>{currency}</option>))
                    }
                  </select>
                  <input type="number" placeholder="Amount" className="styled-input" onChange={(e) => this.handleChange(null, null, e.target.value)}/>
                </div>
                <div className="arrows-container">
                  <div className="arrows-icon" />
                </div>
                <span className="mt-4">
                  I Want
                </span>
                <div className="exchange-card">
                  <select className="styled-input" placeholder="Coin" onChange={(e) => this.handleChange(null, e.target.value, null)}>
                    <option>Select a Coin</option>
                    {
                      this.currencyList().map(( currency, index ) => (<option key={index}>{currency}</option>))
                    }
                  </select>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <div
                  className={`active-btn flex justify-center m-8 ${ isDisabled ? 'disabled' : '' }`}
                  onClick={ () => { this.submitSteps() } }
                >
                  <span> Calculate </span>
                </div>
              </div>
            </div>
          ) : (
          <div className="buy-sell-header">
          {console.log(this.props.buyOrSell)}
            <span> {this.props.buyOrSell}ing {this.props.coinIWant} {withOrTo} {this.props.amount} {this.props.coinIHave} </span>
            <span
              className="btn-simple"
              onClick={ () => this.setState({ isEditing: true }) }
            >
              edit
            </span>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
            coinIHave: state.coinIHave,
            coinIWant: state.coinIWant,
            amount: state.amount,
            buyOrSell: state.buyOrSell,
         }
}

export default connect(mapStateToProps)(BuySell);
