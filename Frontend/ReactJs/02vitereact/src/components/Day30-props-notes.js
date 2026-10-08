// Day-30: React Props - Notes
// Props (short for properties) allow you to pass data from parent to child components
// They make components reusable and dynamic
// Props are read-only - child cannot modify them

// Key Concepts:
// 1. Props are passed like HTML attributes: <Component propName="value" />
// 2. Access props in functional component via parameter: function Comp(props) or destructured { name }
// 3. Props can be any data type: string, number, boolean, array, object, function
// 4. Default props can be set using defaultProps or default parameter values
// 5. Children prop - special prop to pass JSX between component tags

// Example:
// Parent → <Card title="Hello" description="World" />
// Child  → function Card({ title, description }) { return <h1>{title}</h1> }

// PropTypes for type checking:
// import PropTypes from 'prop-types';
// Card.propTypes = { title: PropTypes.string.isRequired }
