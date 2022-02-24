import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSpring, animated } from "react-spring";
import { datCuocGameBauCua } from "../redux/actions/GameBauCuaAction";

export default function QuanCuoc(props) {
	const dispatch = useDispatch();
	const [stateDecrease, setStateDecrease] = useState(true);
	const [stateIncrease, setStateIncrease] = useState(true);

	const { propsUseSpringDecrease } = useSpring({
		to: { propsUseSpringDecrease: stateDecrease ? 1 : 0 },
		from: { propsUseSpringDecrease: 0 },
		config: { duration: 500 },
	});

	const { propsUseSpringIncrease } = useSpring({
		to: { propsUseSpringIncrease: stateIncrease ? 1 : 0 },
		from: { propsUseSpringIncrease: 0 },
		config: { duration: 500 },
	});

	const quanCuoc = props.item;
	return (
		<div className='mt-3'>
			<img
				style={{ width: "200px" }}
				src={quanCuoc.hinhAnh}
				alt={quanCuoc.ma}
			/>
			<div
				className='bg-success mt-2 text-center d-flex align-items-center justify-content-center'
				style={{ width: "200px", borderRadius: "10px" }}>
				<animated.button
					className='btn btn-danger'
					style={{
						scale: propsUseSpringDecrease.to({
							range: [0, 0.25, 0.4, 0.5, 0.75, 0.9, 1],
							output: [1, 1.1, 1.15, 1.2, 1.15, 1.1, 1],
						}),
					}}
					onClick={() => {
						setStateDecrease(!stateDecrease);
						dispatch(datCuocGameBauCua(quanCuoc, false));
					}}>
					-
				</animated.button>
				<span className='text-warning mx-2' style={{ fontSize: 20 }}>
					{quanCuoc.diemCuoc}
				</span>
				<animated.button
					className='btn btn-danger'
					style={{
						scale: propsUseSpringIncrease.to({
							range: [0, 0.25, 0.4, 0.5, 0.75, 0.9, 1],
							output: [1, 1.1, 1.15, 1.2, 1.15, 1.1, 1],
						}),
					}}
					onClick={() => {
						setStateIncrease(!stateIncrease);
						dispatch(datCuocGameBauCua(quanCuoc, true));
					}}>
					+
				</animated.button>
			</div>
		</div>
	);
}
