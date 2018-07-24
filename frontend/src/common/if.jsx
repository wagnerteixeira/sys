import PropTypes from 'prop-types';

const If = props => {
    if(props.test){
        return props.children
    } else {
        return false
    }
}

If.propTypes = {
    test: PropTypes.bool.isRequired,
}

export default If