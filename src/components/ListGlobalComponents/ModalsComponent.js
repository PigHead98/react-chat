import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Fade } from 'reactstrap';

const ModalShowContactComponent = ( props ) => {
    const {
        titleModal,
        statusModal,
        toggle,
        cardInfoUser
    } = props;

    return (
        <div>
            <Modal centered isOpen={ statusModal } toggle={ toggle }>
                <ModalHeader toggle={ toggle }>{ titleModal }</ModalHeader>
                <ModalBody>
                    {
                        cardInfoUser ? cardInfoUser : 'Can not find contact!'
                    }
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={ toggle }>Add contact</Button>{ ' ' }
                    <Button color="secondary" onClick={ toggle }>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default ModalShowContactComponent;

Modal.propTypes = {
    isOpen : PropTypes.bool,
    autoFocus : PropTypes.bool,
    centered : PropTypes.bool,
    size : PropTypes.string,
    toggle : PropTypes.func,
    role : PropTypes.string,
    labelledBy : PropTypes.string,
    keyboard : PropTypes.bool,
    backdrop : PropTypes.oneOfType( [
        PropTypes.bool,
        PropTypes.oneOf( [ 'static' ] )
    ] ),
    scrollable : PropTypes.bool,
    onEnter : PropTypes.func,
    onExit : PropTypes.func,
    onOpened : PropTypes.func,
    onClosed : PropTypes.func,
    className : PropTypes.string,
    wrapClassName : PropTypes.string,
    modalClassName : PropTypes.string,
    backdropClassName : PropTypes.string,
    contentClassName : PropTypes.string,
    fade : PropTypes.bool,
    cssModule : PropTypes.object,
    zIndex : PropTypes.oneOfType( [
        PropTypes.number,
        PropTypes.string,
    ] ),
    backdropTransition : PropTypes.shape( Fade.propTypes ),
    modalTransition : PropTypes.shape( Fade.propTypes ),
    innerRef : PropTypes.object,
    unmountOnClose : PropTypes.bool,
    returnFocusAfterClose : PropTypes.bool // defaults to true
};