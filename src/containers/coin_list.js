import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoin } from '../actions/index';
import { accounting } from 'accounting';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class CoinList extends Component {
  componentDidMount() {
    this.props.fetchCoin();
  }

  render() {
    console.log(this.props.coins);
    if (!this.props.coins) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h1>CoinList</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <td>Coin Name</td>
              <td>Market Cap</td>
              <td>Price</td>
              <td>Volume 24H</td>
              <td>Change 24H(%)</td>
            </tr>
          </thead>
          <tbody> 
            {_.map(this.props.coins, ({quotes, USD, id, name, price, market_cap, percent_change_24h}) => (
              <tr key={id}>
                <td><Link to={`/${id}`}>{name}</Link></td>
                <td>${accounting.formatNumber(quotes.USD.market_cap)}</td>
                <td>{accounting.formatMoney(quotes.USD.price)}</td>
                <td>${accounting.formatNumber(quotes.USD.volume_24h)}</td>
                <td>&nbsp;{accounting.formatNumber(quotes.USD.percent_change_24h)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    coins: state.coins
  };
}

export default connect(mapStateToProps, {fetchCoin})(CoinList);