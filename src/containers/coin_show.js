import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchCoinDetail } from '../actions';
import { accounting } from 'accounting';

class CoinShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchCoinDetail(id);
  }
  render() {
    console.log(this.props.match);
    const { coins } = this.props;
    if (!coins) {
      return <div>Loading...</div>;
    };
    return (
      <div className="cost-show">
        <h1>{coins.name}</h1>
        <p>Rank : {coins.rank}</p>
        <p>Price : {accounting.formatMoney(coins.quotes.USD.price)}</p>
        <p>MarketCap : ${accounting.formatNumber(coins.quotes.USD.market_cap)}</p>
        <p>Percent Change 24H : &nbsp;{accounting.formatNumber(coins.quotes.USD.percent_change_24h)}</p>
        <p>Circulating Supply : {coins.circulating_supply} {coins.symbol}</p>
        <p>Max Supply : {coins.max_supply} {coins.symbol}</p>
      </div>
    );
  }
}
function mapStateToProps({ coins }, ownProps) {
return { coins: coins[ownProps.match.params.id] };
}
export default connect(mapStateToProps, { fetchCoinDetail })(CoinShow);