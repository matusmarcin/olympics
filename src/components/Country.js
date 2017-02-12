import React, { PropTypes, Component } from 'react';
import Medal from './Medal';

class Country extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.toggle = this.toggle.bind(this);
  }

  getClassName() {
    return `country 
      ${this.state.expanded ? 'expanded ' : ''}
      ${this.props.goldCount > 0 ? 'has-gold ' : ''}
      ${this.props.silverCount > 0 ? 'has-silver ' : ''}
      ${this.props.bronzeCount > 0 ? 'has-bronze ' : ''}
      `;
  }

  toggle(e = false) {
    if (e) {
      e.preventDefault();
    }
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    return (
      <li className={this.getClassName()}>
        { // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        }<a onClick={e => this.toggle(e)}>
          <span>
            {this.props.emoji}
            {this.props.name ? this.props.name : this.props.code} ({this.props.totalCount})
          </span>
          <abbr title={`${this.props.goldCount} gold medals`}>{'🥇'.repeat(this.props.goldCount)}</abbr>
          <abbr title={`${this.props.silverCount} silver medals`}>{'🥈'.repeat(this.props.silverCount)}</abbr>
          <abbr title={`${this.props.bronzeCount} bronze medals`}>{'🥉'.repeat(this.props.bronzeCount)}</abbr>
        </a>
        <ul>
          {this.props.medals.map(medal =>
            <Medal
              key={medal.id}
              {...medal}
            />,
          )}
        </ul>
      </li>
    );
  }
}

Country.propTypes = {
  medals: PropTypes.arrayOf(PropTypes.shape({
    athlete: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    event: PropTypes.string.isRequired,
    medal: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  code: PropTypes.string.isRequired,
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  emoji: PropTypes.string,
  goldCount: PropTypes.number.isRequired,
  silverCount: PropTypes.number.isRequired,
  bronzeCount: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
};

Country.defaultProps = {
  name: false,
  emoji: '🏳',
};

export default Country;
