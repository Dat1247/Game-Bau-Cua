import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { playGameBauCua } from "../redux/actions/GameBauCuaAction";
import XucXac from "./XucXac";

export default function DanhSachXucXac(props) {
	const danhSachXucXac = useSelector(
		(state) => state.GameBauCuaReducer.danhSachXucXac
	);
	const dispatch = useDispatch();
	return (
		<div
			className='d-flex flex-column align-items-center justify-content-center'
			style={{ height: "100%" }}>
			<div className='bg-white danhSachXucXac'>
				<div className='row'>
					<div
						className='col-12 text-center'
						style={{ marginTop: "75px", marginLeft: "90px" }}>
						<XucXac xucXacItem={danhSachXucXac[0]} />
					</div>
				</div>
				<div className='row mt-5'>
					<div className='col-6 text-end '>
						<XucXac xucXacItem={danhSachXucXac[1]} />
					</div>
					<div className='col-6 text-end'>
						<XucXac xucXacItem={danhSachXucXac[2]} />
					</div>
				</div>
			</div>
			<div className='mt-5'>
				<button
					style={{ width: "100px" }}
					onClick={() => {
						dispatch(playGameBauCua());
					}}>
					<img
						style={{ width: "100%" }}
						src='./img/GameBauCua/soc.png'
						alt='soc'
					/>
				</button>
			</div>
		</div>
	);
}
