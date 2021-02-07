import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createContributer } from '../store/actions'
import ProfileScreenComponent from '../screens/profile';

class ProfileScreenContainer extends Component {
	state = {
		contributer: {}
	}
	onChangeText = (name, val) => {
		this.setState({
			contributer: {
				...this.state.contributer,
				[name]: val
			}
		})
	}

	submitForm = () => {
		console.log('click')
		try {
			if (Object.keys(this.state.contributer).length) {
				// console.log(this.state.contributer)
				this.props.createContributer(this.state.contributer)
			} else {
				alert('Please filled all required field')
			}

		} catch (error) {
			console.log(error.message)
		}
	}

	clearForm = () => {
		this.setState({
			contributer: {}
		})
	}

	render() {
		return (
			<ProfileScreenComponent
				navigation={this.props.navigation}
				theme={this.props.theme}
				contributer={this.state.contributer}
				onChangeText={this.onChangeText.bind(this)}
				clearForm={this.clearForm.bind(this)}
				submitForm={this.submitForm.bind(this)}
				isContributerLoading={this.props.isContributerLoading}

			/>
		)
	}
}

const mapStateToProps = props => {
	console.log(props)
	const { theme, contributer } = props
	return {
		theme: theme.theme,
		contributer: contributer.contributer,
		isContributerLoading: contributer.isContributerLoading

	}
}

export default connect(mapStateToProps, { createContributer })(ProfileScreenContainer)
