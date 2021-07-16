import React from "react";
import logo from "./logoheader.svg";
import "./App.css";
import CustomizedTables from "./components/CustomizedTable/CustomizedTables.js";
import Cards from "./components/Cards/Cards.js";
import SearchBar from "./components/SearchBar/SearchBar.js";
import { MoonPayCheckWhichCoins } from "./components/MoonPayCheckWhichCoins.js";
import axios from "axios";
import CurrencySettings from "./components/Settings/CurrencySettings.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      searchOn: false,
      value: "",
      isLoaded: false,
      coins: [],
      coinsForCard: [],
      rawCoins: [],
      coinsOnMoonPay: [],
      currencies: [
        "gbp",
        "btc",
        "eth",
        "usd",
        "aud",
        "cad",
        "eur",
        "rub",
        "idr",
        "krw",
        "cny",
        "thb",
      ],
      settings: ["Coming Soon"],
      settingsAPIParam: {
        All: "all",
      },
      currencySymbols: {
        GBP: "£", // British Pound Sterling
        EUR: "€", // Euro
        CRC: "₡", // Costa Rican Colón
        USD: "$", // US Dollar
        ILS: "₪", // Israeli New Sheqel
        INR: "₹", // Indian Rupee
        JPY: "¥", // Japanese Yen
        KRW: "₩", // South Korean Won
        NGN: "₦", // Nigerian Naira
        PHP: "₱", // Philippine Peso
        PLN: "zł", // Polish Zloty
        PYG: "₲", // Paraguayan Guarani
        THB: "฿", // Thai Baht
        AUD: "$",
        CAD: "$",
        RUB: "₽",
        IDR: "Rp",
        CNY: "¥",
        BTC: "₿",
        ETH: "Ξ",
      },
      currency: "gbp",
      currencySymbol: "£",
      dataSettings: "all",
      pageNumber: 1,
      pageSettings: [0, 10],
      orderSelection: "",
    };
    this.onChange = this.onChange.bind(this);
    this.handleCurrencyClick = this.handleCurrencyClick.bind(this);
    this.handleSettingsClick = this.handleSettingsClick.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleTableHeaderClick = this.handleTableHeaderClick.bind(this);
  }

  componentDidMount() {
    this.localStorage();
    let currencyState = this.state.currency;
    let settings = this.state.settingsAPIParam[this.state.dataSettings];
    function checkLocalStorageC() {
      if (localStorage.getItem("currency") !== null) {
        return localStorage.getItem("currency");
      } else {
        return currencyState;
      }
    }
    function checkLocalStorageS() {
      if (localStorage.getItem("dataSettings") !== null) {
        return localStorage.getItem("dataSettings");
      } else {
        return settings;
      }
    }
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${checkLocalStorageC()}&order=market_cap_desc&per_page=350&page=1&sparkline=false`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            coins: result.slice(
              this.state.pageSettings[0],
              this.state.pageSettings[1]
            ),
            rawCoins: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );

    axios
      .get(
        `https://api.moonpay.io/v3/currencies?apiKey=pk_test_XYlfn9ISmwfjwReteBLpiN1TdSDV7Pw7`
      )
      .then((res) => {
        let allNames = [];
        for (let i = 0; res.data.length > i; i++) {
          allNames.push(res.data[i].name.toLowerCase());
        }
        console.log(allNames);
        this.setState({
          coinsOnMoonPay: allNames,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  updateData(currency, settingsAllorDefi) {
    let settings = this.state.settingsAPIParam[this.state.dataSettings];
    function checkLocalStorageC() {
      if (localStorage.getItem("currency") !== null) {
        return localStorage.getItem("currency");
      } else {
        return this.state.currency;
      }
    }
    function checkLocalStorageS() {
      if (localStorage.getItem("dataSettings") !== null) {
        return localStorage.getItem("dataSettings");
      } else {
        return settings;
      }
    }
    console.log(settingsAllorDefi);
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${checkLocalStorageC()}&order=market_cap_desc&per_page=350&page=1&sparkline=false`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            coins: result.slice(
              this.state.pageSettings[0],
              this.state.pageSettings[1]
            ),
            rawCoins: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  localStorage() {
    if (localStorage.getItem("currency") !== null) {
      this.setState({
        currency: localStorage.getItem("currency"),
      });
    }

    if (localStorage.getItem("dataSettings") !== null) {
      this.setState({
        dataSettings: localStorage.getItem("dataSettings"),
      });
    }
  }

  onChange(e) {
    const allCoins = this.state.rawCoins;
    this.setState({
      value: e.target.value,
    });
    // if searchbar is empty then show all the coins
    if (e.target.value == "") {
      this.setState({
        coins: allCoins.slice(
          this.state.pageSettings[0],
          this.state.pageSettings[1]
        ),
      });
      // if backspace on searchbar then table renders all coins
    } else if (e.target.value.length < this.state.value.length) {
      {
        let searcjQery = e.target.value.toLowerCase(),
          displayedCoins = allCoins.filter((el) => {
            let searchValue = el.name.toLowerCase();

            return searchValue.indexOf(searcjQery) !== -1;
          });
        this.setState({
          coins: allCoins.slice(
            this.state.pageSettings[0],
            this.state.pageSettings[1]
          ),
        });
      }
      // if something has been entered on the searchbar then it searches through the coins array taking name and symbol into account
    } else if (e.target.value !== this.state.value) {
      {
        let searcjQery = e.target.value.toLowerCase(),
          displayedCoins = allCoins.filter((el) => {
            let searchValue = el.name
              .toLowerCase()
              .concat(el.symbol.toLowerCase());
            let searchBy = searchValue.indexOf(searcjQery) !== -1;
            return searchBy;
          });
        this.setState({
          coins: displayedCoins,
        });
      }
    }
  }
  handleTableHeaderClick(e) {
    const header = e.currentTarget.getAttribute("data-item");
    console.log("coins being managed" + this.state.pageSettings);
    if (header === this.state.orderSelection) {
      const allCoins = this.state.rawCoins;
      this.setState({
        coins: allCoins.slice(
          this.state.pageSettings[0],
          this.state.pageSettings[1]
        ),
        orderSelection: "",
      });
    } else if (header === "price_change_percentage_24h") {
      const coins = this.state.rawCoins;
      const coinsOnPage = coins.slice(
        this.state.pageSettings[0],
        this.state.pageSettings[1]
      );
      const coinOrderByPrice = coinsOnPage.sort(
        (a, b) =>
          parseFloat(b.price_change_percentage_24h) -
          parseFloat(a.price_change_percentage_24h)
      );
      console.log(coinOrderByPrice);
      this.setState({
        coins: coinOrderByPrice,
        orderSelection: header,
      });
    } else if (header === "total_volume") {
      const coins = this.state.rawCoins;
      const coinsOnPage = coins.slice(
        this.state.pageSettings[0],
        this.state.pageSettings[1]
      );
      const coinOrderByPrice = coinsOnPage.sort(
        (a, b) => parseFloat(b.total_volume) - parseFloat(a.total_volume)
      );

      this.setState({
        coins: coinOrderByPrice,
        orderSelection: header,
      });
    } else if (header === "current_price") {
      const coins = this.state.rawCoins;
      const coinsOnPage = coins.slice(
        this.state.pageSettings[0],
        this.state.pageSettings[1]
      );
      const coinOrderByPrice = coinsOnPage.sort(
        (a, b) => parseFloat(b.current_price) - parseFloat(a.current_price)
      );

      this.setState({
        coins: coinOrderByPrice,
        orderSelection: header,
      });
    } else if (header === "market_cap") {
      const coins = this.state.rawCoins;
      const coinsOnPage = coins.slice(
        this.state.pageSettings[0],
        this.state.pageSettings[1]
      );
      const coinOrderByPrice = coinsOnPage.sort(
        (a, b) => parseFloat(b.market_cap) - parseFloat(a.market_cap)
      );

      this.setState({
        coins: coinOrderByPrice,
        orderSelection: header,
      });
    } else if (header === "market_cap_rank") {
      const coins = this.state.rawCoins;
      const coinsOnPage = coins.slice(
        this.state.pageSettings[0],
        this.state.pageSettings[1]
      );
      const coinOrderByPrice = coinsOnPage.sort(
        (a, b) => parseFloat(a.market_cap_rank) - parseFloat(b.market_cap_rank)
      );

      this.setState({
        coins: coinOrderByPrice,
        orderSelection: header,
      });
    }
  }
  handleCurrencyClick(e) {
    this.setState({
      currency: e.currentTarget.getAttribute("data-item"),
    });
    localStorage.setItem("currency", e.currentTarget.getAttribute("data-item"));
    return this.updateData(
      e.currentTarget.getAttribute("data-item"),
      this.state.dataSettings
    );
  }
  handleSettingsClick(e) {
    this.setState({
      dataSettings: this.state.settingsAPIParam[
        e.currentTarget.getAttribute("data-item")
      ],
      pageNumber: 1,
      pageSettings: [0, 10],
      orderSelection: "",
    });
    localStorage.setItem(
      "dataSettings",
      this.state.settingsAPIParam[e.currentTarget.getAttribute("data-item")]
    );

    return this.updateData(
      this.state.currency,
      this.state.settingsAPIParam[e.currentTarget.getAttribute("data-item")]
    );
  }
  handlePageChange(e) {
    const allCoins = this.state.rawCoins;
    if (e === "up") {
      const number = this.state.pageSettings.map(function (value) {
        return value + 10;
      });
      this.setState({
        pageNumber: this.state.pageNumber + 1,
        pageSettings: number,
        coins: allCoins.slice(number[0], number[1]),
      });
    } else if (e === "down") {
      const number = this.state.pageSettings.map(function (value) {
        return value - 10;
      });
      this.setState({
        pageNumber: this.state.pageNumber - 1,
        pageSettings: number,
        coins: allCoins.slice(number[0], number[1]),
      });
    }
  }

  render() {
    let width = window.innerWidth;
    if (width > 768) {
      return (
        <div className="App">
          <header className="App-header">
            <div className="row">
            <p className="footer-title"style={{ backgroundColor: '#' }}>
               <a target="_blank" href="https://www.binance.com/en/register?ref=BC0PJGIM/"style={{ color: '#FFFFFF' }}>Sign up to Binance and earn back 10% commission on all your trades</a>
            </p>
            </div>
            <div className="row">
              <h1 classname="logo-text">
                <img className="brain" src={logo} /> Coinbook.co.uk
              </h1>
            </div>
          </header>
          <body className="App-body">
            <Cards
              currency={this.state.currency}
              currency_symbols={this.state.currencySymbols}
              data={this.state}
            />
            <div style={{ width: 500 }}></div>

            <div>
              <SearchBar
                inputValue={this.state.value}
                onChange={this.onChange}
              />
              <span>
                <CurrencySettings
                  currencies={this.state.currencies}
                  settings={this.handleSettingsClick}
                  settingsOptions={this.state.settings}
                  onClick={this.handleCurrencyClick}
                  inputValue={this.state.currency}
                />
              </span>
            </div>

            <div>
              <CustomizedTables
                coins={this.state}
                currency={this.state.currency}
                currency_symbols={this.state.currencySymbols}
                settings={this.state.settingsData}
                pageNumber={this.state.pageNumber}
                pageSettings={this.state.pageSettings}
                onClick={this.handlePageChange}
                searchValue={this.state.value}
                handleTableHeaderClick={this.handleTableHeaderClick}
                orderSelection={this.state.orderSelection}
                coinsOnMoonPay={this.state.coinsOnMoonPay}
              />
            </div>

            <div></div>
          </body>
          <footer className="App-footer">
            <div className="donate">
              <p className="footer-title">Donations ❤️</p>
              <p className="footer-title">
                Bitcoin: 14Z6pUMZikKGcuBDxxSMHSmrhcUwrAHcNs
              </p>

              <p className="footer-title">
                Ethereum: 0xe44400ea92cD298FA05D7a901362530EC2A51C34
              </p>

              <p className="footer-title">
                BNB: bnb1udd4c7dsxrf2gjca9w6y3yau2wujnvxzd8vzla
              </p>

              <p className="footer-title">
                XRP: rfsGFqq8ZHTEbUs3ibvbTVZN8LnvZNT2UY
              </p>

              <p className="footer-title">
                Brave Verified Creator
              </p>
            </div>
          </footer>
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <div className="row">
              <h1 classname="logo-text">
                <img className="brain" src={logo} /> <br />
                Coinbook
              </h1>
            </div>
            <div className="row">
            <p className="footer-title"style={{ backgroundColor: '#' }}>
                <a target="_blank" href="https://www.binance.com/en/register?ref=BC0PJGIM/"style={{ color: '#FFFFFF' }}>Sign up to Binance and earn back 10% commission on all your trades</a>
            </p>
            </div>
          </header>
          <body className="App-body">
            <Cards
              currency={this.state.currency}
              currency_symbols={this.state.currencySymbols}
              data={this.state}
            />
            <div style={{ width: 500 }}></div>

            <CurrencySettings
              currencies={this.state.currencies}
              settings={this.handleSettingsClick}
              settingsOptions={this.state.settings}
              onClick={this.handleCurrencyClick}
              inputValue={this.state.currency}
            />
            <SearchBar inputValue={this.state.value} onChange={this.onChange} />

            <CustomizedTables
              coins={this.state}
              currency={this.state.currency}
              currency_symbols={this.state.currencySymbols}
              settings={this.state.settingsData}
              pageNumber={this.state.pageNumber}
              pageSettings={this.state.pageSettings}
              onClick={this.handlePageChange}
              searchValue={this.state.value}
              handleTableHeaderClick={this.handleTableHeaderClick}
              orderSelection={this.state.orderSelection}
              coinsOnMoonPay={this.state.coinsOnMoonPay}
            />
          </body>
          <footer className="App-footer">
            <div className="donate">
              <p className="footer-title">Donations ❤️</p>
              <p className="footer-title">
                Bitcoin: 14Z6pUMZikKGcuBDxxSMHSmrhcUwrAHcNs
              </p>

              <p className="footer-title">
                Ethereum: 0xe44400ea92cD298FA05D7a901362530EC2A51C34
              </p>

              <p className="footer-title">
                BNB: bnb1udd4c7dsxrf2gjca9w6y3yau2wujnvxzd8vzla
              </p>

              <p className="footer-title">
                XRP: rfsGFqq8ZHTEbUs3ibvbTVZN8LnvZNT2UY
              </p>

              <p className="footer-title">
                Brave Verified Creator
              </p>
            </div>
          </footer>
        </div>
      );
    }
  }
}

export default App;