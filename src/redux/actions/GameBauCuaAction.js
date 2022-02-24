import {
	CHOI_LAI_BAU_CUA,
	DAT_CUOC_BAU_CUA,
	PLAY_GAME_BAU_CUA,
} from "../types/GameBauCuaType";

export const datCuocGameBauCua = (quanCuoc, tangGiam) => ({
	type: DAT_CUOC_BAU_CUA,
	quanCuoc,
	tangGiam,
});

export const playGameBauCua = () => ({
	type: PLAY_GAME_BAU_CUA,
});

export const choiLaiGameBauCua = () => ({
	type: CHOI_LAI_BAU_CUA,
});
