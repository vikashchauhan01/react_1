import React from 'react';
import $ from 'jquery';
import { Button } from 'reactstrap';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    openModal = () => {
        $('#exampleModal').modal('show');
    };
    render() {
        return (
            <div>
                <Button color="danger" onClick={this.openModal.bind(this)}>Danger!</Button>
            </div>
        );
    }
}
export default Home;