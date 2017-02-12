import React, { PropTypes, Component } from 'react';
import ToggleButton from 'react-toggle-button';
import Country from './Country';

class CountryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goldVisible: true,
      silverVisible: true,
      bronzeVisible: true,
    };
  }

  getClassName() {
    return `country-list 
          ${this.state.goldVisible ? 'show-gold ' : ''}
          ${this.state.silverVisible ? 'show-silver ' : ''}
          ${this.state.bronzeVisible ? 'show-bronze ' : ''}`;
  }

  render() {
    return (
      <div>
        { this.props.loading ?
          <p>Loading...</p>
          :
          <p className="lead">
          List of countries participating in the 2008 Olympics
          by total medal count in descending order.
          </p>
        }
        { !this.props.loading ?
          <div className="filter" role="group" aria-label="Filter">
            <div className="filter-label">
              Now showing:
            </div>
            <div className="medal-toggle">
              <div className="medal"> 🥇 </div>
              <ToggleButton
                value={this.state.goldVisible || false}
                onToggle={() => {
                  this.setState({
                    goldVisible: !this.state.goldVisible,
                  });
                }}
              />
            </div>
            <div className="medal-toggle">
              <div className="medal"> 🥈 </div>
              <ToggleButton
                value={this.state.silverVisible || false}
                onToggle={() => {
                  this.setState({
                    silverVisible: !this.state.silverVisible,
                  });
                }}
              />
            </div>
            <div className="medal-toggle">
              <div className="medal"> 🥉 </div>
              <ToggleButton
                value={this.state.bronzeVisible || false}
                onToggle={() => {
                  this.setState({
                    bronzeVisible: !this.state.bronzeVisible,
                  });
                }}
              />
            </div>
          </div>
          : ''
        }

        <ol className={this.getClassName()}>
          {this.props.countries.map(country =>
            <Country
              key={country.code}
              {...country}
            />,
          )}
        </ol>
      </div>
    );
  }
}

CountryList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    medals: PropTypes.arrayOf(PropTypes.shape({
      athlete: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      sex: PropTypes.string.isRequired,
      event: PropTypes.string.isRequired,
      medal: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    code: PropTypes.string.isRequired,
    goldCount: PropTypes.number.isRequired,
    silverCount: PropTypes.number.isRequired,
    bronzeCount: PropTypes.number.isRequired,
    totalCount: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  loading: PropTypes.bool,
};

CountryList.defaultProps = {
  loading: true,
};

export default CountryList;
