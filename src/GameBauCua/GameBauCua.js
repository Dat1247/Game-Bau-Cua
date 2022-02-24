import React from "react";
import DanhSachCuoc from "./DanhSachCuoc";
import DanhSachXucXac from "./DanhSachXucXac";
import "./GameBauCua.css";
import ThongTinTroChoi from "./ThongTinTroChoi";

export default function GameBauCua(props) {
	return (
		<div className='container'>
			<ThongTinTroChoi />
			<div className='row'>
				<div className='col-7'>
					<DanhSachCuoc />
				</div>
				<div className='col-5'>
					<DanhSachXucXac />
				</div>
			</div>
		</div>
	);
}
