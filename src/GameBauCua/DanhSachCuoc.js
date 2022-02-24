import React from "react";
import { useSelector } from "react-redux";
import QuanCuoc from "./QuanCuoc";

export default function DanhSachCuoc(props) {
	const danhSachCuoc = useSelector(
		(state) => state.GameBauCuaReducer.danhSachCuoc
	);

	const renderDanhSachCuoc = () => {
		return danhSachCuoc.map((item, index) => {
			return (
				<div className='col-4' key={index}>
					<QuanCuoc item={item} />
				</div>
			);
		});
	};
	return <div className='row'>{renderDanhSachCuoc()}</div>;
}
