import React from "react";
import Iframe from "react-iframe";
import "./CustomizedTables.css";
import Chart from "../Chart/Chart.js";
import PageSettings from "../PageSettings/pageSettings.js";
import { purple } from "@material-ui/core/colors";

export default class CustomizedTables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coinClicked: "",
      chartDays: 30,
      redraw: false,
      currency: this.props.currency,
      currency_symbols: this.props.currency_symbols,
      button_color: "white",
      orderSelection: this.props.orderSelection,
    };
    this.dateClick = this.dateClick.bind(this);
  }
  handleUporDown(coinChange) {
    if (coinChange > 0) {
      return "up";
    } else if (coinChange < -10) {
      return "fuck";
    } else {
      return "down";
    }
  }
  handleEmoji(coinChange) {
    if (coinChange < -20) {
      return <span>😭</span>;
    } else if (coinChange < -10) {
      return <span>😢</span>;
    } else if (coinChange < -5) {
      return <span>😡</span>;
    } else if (coinChange < 0) {
      return <span>😕</span>;
    } else if (coinChange < 10) {
      return <span>👍</span>;
    } else if (coinChange < 20) {
      return <span>🚀</span>;
    } else if (coinChange > 20) {
      return <span>🌖</span>;
    }
  }

  roundDownPrice(number) {
    if (number >= 1) {
      const decimals = 2;
      const amount =
        Math.floor(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
      return amount
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else if (number >= 0.001) {
      const decimals = 6;
      return (
        Math.floor(number * Math.pow(10, decimals)) /
        Math.pow(10, decimals).toString()
      );
    } else {
      const decimals = 8;
      return (
        Math.floor(number * Math.pow(10, decimals)) /
        Math.pow(10, decimals).toString()
      );
    }
  }
  roundDown(number, decimals) {
    decimals = decimals || 0;
    return Math.floor(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
  }

  handleClick(e) {
    if (this.state.coinClicked !== e.currentTarget.getAttribute("data-item")) {
      const coin = e.currentTarget.getAttribute("data-item");
      this.setState({
        coinClicked: coin,
      });
      console.log("We need to get the details for " + coin);
    } else {
      this.setState({
        coinClicked: "",
      });
    }
    this.chartRender(this.props.coins.id, this.state.chartDays);
  }

  dateClick(e) {
    const dayRequest = e.currentTarget.getAttribute("data-item");
    this.setState({
      chartDays: dayRequest,
    });
  }

  chartRender(coin, days) {
    const { error, isLoaded, coins } = this.props.coins;
    const symbol = this.state.currency_symbols[
      this.props.currency.toUpperCase()
    ];
    if (coin === this.state.coinClicked) {
      return (
        <tr className="chartandpay">
          <td></td>
          <td colspan="8">
            <div class="container">
              <a
                className="btn btn-1"
                key="1-days"
                data-item={1}
                onClick={this.dateClick}
                id={coin}
              >
                Past day
              </a>
              <a
                className="btn btn-1"
                key="7-days"
                data-item={7}
                onClick={this.dateClick}
                id={coin}
              >
                Past week
              </a>
              <a
                className="btn btn-1"
                key="30-days"
                data-item={30}
                onClick={this.dateClick}
                id={coin}
              >
                Past month
              </a>
              <a
                class="btn btn-1"
                key="365-days"
                data-item={365}
                onClick={this.dateClick}
                id={coin}
              >
                Past year
              </a>
              <a
                class="btn btn-1"
                key="365-days"
                data-item={1825}
                onClick={this.dateClick}
                id={coin}
              >
                Past 5 years
              </a>
            </div>

            <Chart
              id={coin}
              days={days}
              redraw={this.state.redraw}
              currency={this.props.currency}
              currencysymbols={symbol}
            />
          </td>
        </tr>
      );
    } else {
    }
  }

  result() {
    const { error, isLoaded, coins } = this.props.coins;
    if (coins.length > 0) {
      const pageSettings = this.props.pageSettings;
      return coins.slice(pageSettings[0], pageSettings[1]).map((coin) => (
        <>
          <tr
            key={coin.id}
            data-item={coin.id}
            onClick={this.handleClick.bind(this)}
          >
            <td>{coin.market_cap_rank}</td>
            <td className="theCoinId">
              <p className="theCoinIdSec">
                <img src={coin.image} className="Coin-Logo" />

                {coin.name}
                <span className="symbol">{coin.symbol.toUpperCase()}</span>
              </p>
            </td>
            <td>
              {this.props.currency_symbols[this.props.currency.toUpperCase()]}
              {this.roundDownPrice(coin.current_price)}
            </td>
            <td
              className={this.handleUporDown(coin.price_change_percentage_24h)}
            >
              {this.roundDown(coin.price_change_percentage_24h, 2)}%
            </td>
            <td>
              {this.state.currency_symbols[this.props.currency.toUpperCase()]}
              {this.roundDown(coin.total_volume)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </td>
            <td>
              {this.state.currency_symbols[this.props.currency.toUpperCase()]}
              {coin.market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </td>
            <td>
              {this.roundDown(coin.circulating_supply)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </td>

            <td className="emoji">
              {this.handleEmoji(coin.price_change_percentage_24h)}
            </td>
          </tr>
          {this.chartRender(coin.id, this.state.chartDays)}
        </>
      ));
    } else {
      return <p>No results 😕</p>;
    }
  }
  render() {
    const { error, isLoaded, coins } = this.props.coins;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <table>
          <tr>
            <th>Rank</th>
            <th>Coin</th>
            <th
              className="table-header-button"
              data-item="current_price"
              onClick={this.props.handleTableHeaderClick}
            >
              Price
            </th>
            <th
              className="table-header-button"
              data-item="price_change_percentage_24h"
              onClick={this.props.handleTableHeaderClick}
            >
              Change
            </th>
            <th
              className="table-header-button"
              data-item="total_volume"
              onClick={this.props.handleTableHeaderClick}
            >
              Volume
            </th>
            <th
              className="table-header-button"
              data-item="market_cap"
              onClick={this.props.handleTableHeaderClick}
            >
              MarketCap
            </th>
            <th>Supply</th>
          </tr>
          {this.result()}
          <tr>
            <PageSettings
              pageNumber={this.props.pageNumber}
              onClick={this.props.onClick}
              searchValue={this.props.searchValue}
            />
          </tr>
        </table>
      );
    }
  }
}
