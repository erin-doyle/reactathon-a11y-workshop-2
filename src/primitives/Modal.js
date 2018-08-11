import { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


const modalRoot = document.getElementById('modal-root');
const body = document.getElementsByTagName('body')[0];

class Modal extends Component {
    constructor(props) {
        super(props);

        this.el = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
        body.className = "modal-open";
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
        body.className = "";
    }

    render() {
        // Use a portal to render the children into the element
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }
}

Modal.propTypes = {
    children: PropTypes.node.isRequired
};


export default Modal;
