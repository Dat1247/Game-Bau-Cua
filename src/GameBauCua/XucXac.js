import React, { Fragment } from "react";
import { useSpring, animated } from "react-spring";

export default function XucXac(props) {
	const { xucXacItem } = props;
	const [propsDice, api] = useSpring(() => ({
		to: {
			xyz: [720, 720, 720],
		},
		from: {
			xyz: [0, 0, 0],
		},
		config: { duration: 500 },
	}));
	api.start({
		to: {
			xyz: [720, 720, 720],
		},
		from: { xyz: [0, 0, 0] },
	});
	return (
		<Fragment>
			<animated.div
				className='scene'
				style={{
					transform: propsDice.xyz.to((x, y, z) => {
						return `translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
					}),
				}}>
				<div className='cube'>
					<img
						className='ms-2 cube__face front'
						style={{ width: "100%" }}
						src={xucXacItem.hinhAnh}
						alt={xucXacItem.ma}
					/>
					<img
						className='ms-2 cube__face back'
						style={{ width: "100%" }}
						src='./img/GameBauCua/nai.png'
						alt='nai'
					/>
					<img
						className='ms-2 cube__face top'
						style={{ width: "100%" }}
						src='./img/GameBauCua/tom.png'
						alt='tom'
					/>
					<img
						className='ms-2 cube__face bottom'
						style={{ width: "100%" }}
						src='./img/GameBauCua/ca.png'
						alt='ca'
					/>
					<img
						className='ms-2 cube__face left'
						style={{ width: "100%" }}
						src='./img/GameBauCua/bau.png'
						alt='bau'
					/>
					<img
						className='ms-2 cube__face right'
						style={{ width: "100%" }}
						src='./img/GameBauCua/cua.png'
						alt='cua'
					/>
				</div>
			</animated.div>
		</Fragment>
	);
}
