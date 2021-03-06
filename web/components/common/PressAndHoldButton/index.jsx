import React from 'react';

export default class PressAndHoldButton extends React.Component {
    componentWillMount() {
        this.timeout = null;
        this.interval = null;
    }
    componentWillUnmount() {
        this.handleRelease();
    }
    handleHoldDown() {
        let that = this;
        let delay = Number(this.props.delay) || 500;
        let throttle = Number(this.props.throttle) || 50;

        this.timeout = setTimeout(function() {
            that.handleRelease();

            that.interval = setInterval(function() {
                if (that.interval) {
                    that.props.onClick();
                }
            }, throttle);
        }, delay);
    }
    handleRelease() {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
    render() {
        let { type, className, onClick } = this.props;
        type = type || 'button';
        className = className || 'btn';

        return (
            <button
                type={type}
                className={className}
                onClick={onClick}
                onMouseDown={::this.handleHoldDown}
                onMouseUp={::this.handleRelease}
                onMouseLeave={::this.handleRelease}
            >
                {this.props.children}
            </button>
        );
    }
}
