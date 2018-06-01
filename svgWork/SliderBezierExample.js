import React, { Component } from 'react';
import { View, Animated, Easing, Button, Slider } from 'react-native';
import Svg, {
	Circle,
	Ellipse,
	G,
	LinearGradient,
	RadialGradient,
	Line,
	Path,
	Polygon,
	Polyline,
	Rect,
	Symbol,
	Text,
	Use,
	Defs,
	Stop
} from 'react-native-svg';

class SliderBezierExample extends Component {
	constructor(props) {
		super(props);
		this.state = {
			path: 'M 0 0 L 200 00 L 200 200 L 00 200 Z',
			controlPoint: 150
		};
	}

	changePath() {
		this.setState({ path: 'M 0 0 L 200 100 L 100 150 L 100 200 Z' });
	}

	render() {
		return (
			<View style={{ alignItems: 'center', justifyContent: 'center' }}>
				<Slider
					style={{ width: 300 }}
					step={1}
					minimumValue={0}
					maximumValue={300}
					value={this.state.controlPoint}
					onValueChange={val => this.setState({ controlPoint: val })}
				/>
				<Svg height="300" width="300" fill="red">
					<Path
						ref="myPath"
						d={`M 0 150 Q 150 ${this.state.controlPoint} 300 150`}
						stroke="black"
						fill="none"
					/>
				</Svg>
				<Button
					title="Start anim"
					onPress={() => {
						this.changePath();
					}}
				/>
			</View>
		);
	}
}
export default SliderBezierExample;
