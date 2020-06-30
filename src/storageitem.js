import React, { Component } from 'react'

export default class StorageItem extends Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     amount: props.item.amount,
        //     weight: props.item.weight
        // }
    }

    // toggleChange = () => {
    //     fetch(`http://hr-foodstorage.herokuapp.com/storage/${this.props.item.id}`, {
    //         method: "PATCH",
    //         headers: { "content-Type": "application/json" },
    //         body: JSON.stringify({
    //             amount: !this.state.amount,
    //             weight: !this.state.weight,

    //         })
    //     }
    //     ).then(res => {
    //         this.setState({
    //             amount: !this.state.amount,
    //             weight: !this.state.weight,

    //         })
    //     })
    // }

    render() {
        return (
            <div className="storage-item">
                {/* <input type="checkbox" defaultChecked={this.props.item.amount} onClick={this.toggleChange} />
                <p className={this.state.amount ? "amount" : null}>{this.props.item.name}</p>
                <input type="checkbox" defaultChecked={this.props.item.weight} onClick={this.toggleChange} />
                <p className={this.state.weight ? "weight" : null}>{this.props.item.name}</p> */}
                <h1>hi from h1</h1>
                <button onClick={() => this.props.deleteItem(this.props.item.id)}>Delete</button>
            </div>
        )
    }
}