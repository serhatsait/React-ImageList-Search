import React, {Component} from 'react';

class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spanCount: 1
        };
        this.myRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.myRef);
        this.myRef.current.addEventListener('load', () => {
            const spanCount = Math.round(this.myRef.current.clientHeight / 5) + 2;
            this.setState({
                spanCount
            });
        });
    }

    render() {
        const {image} = this.props;
        return (
            <img style={{
                gridRowEnd: `span ${this.state.spanCount}`
            }} ref={this.myRef} alt={image.description} src={image.urls.small}/>
        )
    }
}

export default Image;