import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { choiLaiGameBauCua } from "../redux/actions/GameBauCuaAction";

export default function ThongTinTroChoi(props) {
	const tongDiem = useSelector((state) => state.GameBauCuaReducer.tongDiem);
	const dispatch = useDispatch();
	return (
		<div className='pt-2 thongTinTroChoi'>
			<h2 className='text-center text-light'>Bầu Cua CyberSoft</h2>
			<div className='text-center py-3'>
				<span className='tienThuong'>
					Tiền Thưởng: <span className='text-success'>{tongDiem}$</span>
				</span>
			</div>
			<div className='text-center'>
				<button
					className='btn btn-primary fw-bold text-white'
					onClick={() => {
						dispatch(choiLaiGameBauCua());
					}}>
					Chơi lại
				</button>
			</div>
		</div>
	);
}
