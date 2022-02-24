import {
	CHOI_LAI_BAU_CUA,
	DAT_CUOC_BAU_CUA,
	PLAY_GAME_BAU_CUA,
} from "../types/GameBauCuaType";

const initialState = {
	danhSachCuoc: [
		{ ma: "ga", hinhAnh: "./img/GameBauCua/ga.png", diemCuoc: 0 },
		{ ma: "bau", hinhAnh: "./img/GameBauCua/bau.png", diemCuoc: 0 },
		{ ma: "ca", hinhAnh: "./img/GameBauCua/ca.png", diemCuoc: 0 },
		{ ma: "cua", hinhAnh: "./img/GameBauCua/cua.png", diemCuoc: 0 },
		{ ma: "nai", hinhAnh: "./img/GameBauCua/nai.png", diemCuoc: 0 },
		{ ma: "tom", hinhAnh: "./img/GameBauCua/tom.png", diemCuoc: 0 },
	],
	tongDiem: 1000,
	danhSachXucXac: [
		{ ma: "bau", hinhAnh: "./img/GameBauCua/bau.png" },
		{ ma: "ca", hinhAnh: "./img/GameBauCua/ca.png" },
		{ ma: "cua", hinhAnh: "./img/GameBauCua/cua.png" },
	],
};

export const GameBauCuaReducer = (state = initialState, action) => {
	switch (action.type) {
		case DAT_CUOC_BAU_CUA: {
			const danhSachCuocUpdate = [...state.danhSachCuoc];

			let index = danhSachCuocUpdate.findIndex(
				(quanCuoc) => quanCuoc.ma === action.quanCuoc.ma
			);
			if (index !== -1) {
				if (action.tangGiam) {
					if (state.tongDiem > 0) {
						danhSachCuocUpdate[index].diemCuoc += 100;
						state.tongDiem -= 100;
					}
				} else {
					if (danhSachCuocUpdate[index].diemCuoc > 0) {
						danhSachCuocUpdate[index].diemCuoc -= 100;
						state.tongDiem += 100;
					}
				}
			}
			state.danhSachCuoc = danhSachCuocUpdate;

			return { ...state };
		}
		case PLAY_GAME_BAU_CUA: {
			let mangXucXacNgauNhien = [];
			for (let i = 0; i < 3; i++) {
				let xucXacNgauNhien = Math.floor(
					Math.random() * state.danhSachCuoc.length
				);
				mangXucXacNgauNhien.push(state.danhSachCuoc[xucXacNgauNhien]);
			}
			state.danhSachXucXac = mangXucXacNgauNhien;

			mangXucXacNgauNhien.forEach((xucXacNN, index) => {
				const indexNN = state.danhSachCuoc.findIndex(
					(qc) => qc.ma === xucXacNN.ma
				);
				if (indexNN !== -1) {
					state.tongDiem += state.danhSachCuoc[indexNN].diemCuoc;
				}
			});

			state.danhSachCuoc.forEach((qc, index) => {
				let indexXucXacNN = mangXucXacNgauNhien.findIndex(
					(xxnn) => xxnn.ma === qc.ma
				);
				if (indexXucXacNN !== -1) {
					state.tongDiem += qc.diemCuoc;
				}
			});

			state.danhSachCuoc = state.danhSachCuoc.map((qc, index) => {
				return { ...qc, diemCuoc: 0 };
			});

			return { ...state };
		}

		case CHOI_LAI_BAU_CUA: {
			state.tongDiem = 1000;
			state.danhSachCuoc = state.danhSachCuoc.map((qc, index) => {
				return { ...qc, diemCuoc: 0 };
			});
			return { ...state };
		}
		default:
			return state;
	}
};
