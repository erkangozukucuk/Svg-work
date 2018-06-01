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

class SvgExample extends Component {
	constructor(props) {
		super(props);
		this.state = {
			controlPoint1: new Animated.ValueXY({ x: 0, y: 200 }),
		};
		this.state.controlPoint1.addListener(width => {
			console.log(width);
			this.refs.myPath.setNativeProps({
				d: `M 0 0 L 200 00 L ${width.y.toString()} 200 L ${width.x.toString()} 200 Z`
			});
		});
	}

	animate() {
		this.state.controlPoint1.setValue({ x: 0, y: 200 });
		Animated.timing(this.state.controlPoint1, {
			toValue: { x: 100, y: 100 },
			duration: 500,
			easing: Easing.linear
		}).start();
	}

	render() {
		return (
			<View style={{ alignItems: 'center', justifyContent: 'center' }}>
				<Svg height="250" width="250">
					{/* <Rect ref="myRect" x="0" y="0" width="100" height="200" /> */}
					<Path ref="myPath" d="M 0 0 L 200 00 L 200 200 L 00 200 Z" stroke="black" fill="none" />
					{/* <Path d={`M 0 0 Q ${val} 100 200 0`} stroke="black" fill="none" /> */}
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
export default SvgExample;
