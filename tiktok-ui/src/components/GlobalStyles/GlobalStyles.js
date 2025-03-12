import PropTypes from 'prop-types';
// components/GlobalStyles/index.js
import './GlobalStyles.scss';

function GlobalStyles({ children }) {
    return children;
}
GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};
export default GlobalStyles;
