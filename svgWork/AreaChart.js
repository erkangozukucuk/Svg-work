import React, { Component } from 'react';
import { View, Animated, Easing, Button } from 'react-native';
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

class AreaChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			controlPoint1: new Animated.Value(250)
		};
		this.state.controlPoint1.addListener(newPos => {
			console.log(newPos);
			var p1 = newPos.value + 100;
			var p2 = newPos.value + 40;
			var p3 = newPos.value + 150;
			var p4 = newPos.value;
			var p5 = newPos.value + 200;
			var p6 = newPos.value + 180;
			var p7 = newPos.value + 120;
			var p8 = newPos.value + 250;
			this.refs.myPath.setNativeProps({
				d: `M 0 250 
				L 50 ${p1.toString()}
				L 100 ${p2.toString()}
				L 150 ${p3.toString()}
				L 200 ${p4.toString()}
				L 250 ${p5.toString()}
				L 300 ${p6.toString()}
				L 350 ${p7.toString()}
				L 350 ${p8.toString()}
				Z`
			});
		});
	}

	animate() {
		this.state.controlPoint1.setValue(250);
		Animated.timing(this.state.controlPoint1, {
			toValue: 0,
			duration: 2000,
			easing: Easing.linear
		}).start();
	}

	render() {
		return (
			<View style={{ alignItems: 'center', justifyContent: 'center' }}>
				<Svg height="250" width="350">
					<Path
						ref="myPath"
						d={`M 0 250 
					L 50 100
					L 100 40
					L 150 150
					L 200 250
					L 250 200
					L 300 180
					L 350 120
					L 350 250
					Z`}
						stroke="black"
						fill="yellow"
						strokeWidth={1}
					/>
				</Svg>
				<Button
					title="Start anim"
					onPress={() => {
						this.animate();
					}}
				/>
			</View>
		);
	}
}
export default AreaChart;
