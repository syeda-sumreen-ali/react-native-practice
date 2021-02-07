const SIZES = {

	//small text
	s3: 10,
	s2: 11,
	s1: 12,

	//body text
	p3: 13,
	p2: 14,
	p1: 15,

	//heading text
	h8: 16,
	h7: 17,
	h6: 18,
	h5: 20,
	h4: 22,
	h3: 24,
	h2: 26,
	h1: 28,

	//xlarge text
	xl2: 30,
	xl1: 32,
}

const FONTS = {
	//small text
	s3_r: { fontSize: SIZES.s3, fontFamily: "Roboto-Regular" },
	s3_m: { fontSize: SIZES.s3, fontFamily: "Roboto-Medium" },
	s3_b: { fontSize: SIZES.s3, fontFamily: "Roboto-Bold" },

	s2_r: { fontSize: SIZES.s2, fontFamily: "Roboto-Regular" },
	s2_m: { fontSize: SIZES.s2, fontFamily: "Roboto-Medium" },
	s2_b: { fontSize: SIZES.s2, fontFamily: "Roboto-Bold" },

	s1_r: { fontSize: SIZES.s1, fontFamily: "Roboto-Regular" },
	s1_m: { fontSize: SIZES.s1, fontFamily: "Roboto-Medium" },
	s1_b: { fontSize: SIZES.s1, fontFamily: "Roboto-Bold" },


	//body text
	p3_r: { fontSize: SIZES.p3, fontFamily: "Roboto-Regular" },
	p3_m: { fontSize: SIZES.p3, fontFamily: "Roboto-Medium" },
	p3_b: { fontSize: SIZES.p3, fontFamily: "Roboto-Bold" },

	p2_r: { fontSize: SIZES.p2, fontFamily: "Roboto-Regular" },
	p2_m: { fontSize: SIZES.p2, fontFamily: "Roboto-Medium" },
	p2_b: { fontSize: SIZES.p2, fontFamily: "Roboto-Bold" },

	p1_r: { fontSize: SIZES.p1, fontFamily: "Roboto-Regular" },
	p1_m: { fontSize: SIZES.p1, fontFamily: "Roboto-Medium" },
	p1_b: { fontSize: SIZES.p1, fontFamily: "Roboto-Bold" },


	//heading text
	h8_r: { fontSize: SIZES.h8, fontFamily: "Roboto-Regular" },
	h8_m: { fontSize: SIZES.h8, fontFamily: "Roboto-Medium" },
	h8_b: { fontSize: SIZES.h8, fontFamily: "Roboto-Bold" },

	h7_r: { fontSize: SIZES.h7, fontFamily: "Roboto-Regular" },
	h7_m: { fontSize: SIZES.h7, fontFamily: "Roboto-Medium" },
	h7_b: { fontSize: SIZES.h7, fontFamily: "Roboto-Bold" },

	h6_r: { fontSize: SIZES.h6, fontFamily: "Roboto-Regular" },
	h6_m: { fontSize: SIZES.h6, fontFamily: "Roboto-Medium" },
	h6_b: { fontSize: SIZES.h6, fontFamily: "Roboto-Bold" },

	h5_r: { fontSize: SIZES.h5, fontFamily: "Roboto-Regular" },
	h5_m: { fontSize: SIZES.h5, fontFamily: "Roboto-Medium" },
	h5_b: { fontSize: SIZES.h5, fontFamily: "Roboto-Bold" },

	h4_r: { fontSize: SIZES.h4, fontFamily: "Roboto-Regular" },
	h4_m: { fontSize: SIZES.h4, fontFamily: "Roboto-Medium" },
	h4_b: { fontSize: SIZES.h4, fontFamily: "Roboto-Bold" },

	h3_r: { fontSize: SIZES.h3, fontFamily: "Roboto-Regular" },
	h3_m: { fontSize: SIZES.h3, fontFamily: "Roboto-Medium" },
	h3_b: { fontSize: SIZES.h3, fontFamily: "Roboto-Bold" },

	h2_r: { fontSize: SIZES.h2, fontFamily: "Roboto-Regular" },
	h2_m: { fontSize: SIZES.h2, fontFamily: "Roboto-Medium" },
	h2_b: { fontSize: SIZES.h2, fontFamily: "Roboto-Bold" },

	h1_r: { fontSize: SIZES.h1, fontFamily: "Roboto-Regular" },
	h1_m: { fontSize: SIZES.h1, fontFamily: "Roboto-Medium" },
	h1_b: { fontSize: SIZES.h1, fontFamily: "Roboto-Bold" },


	//xlarge text
	xl2_r: { fontSize: SIZES, fontFamily: "Roboto-Regular" },
	xl2_m: { fontSize: SIZES, fontFamily: "Roboto-Medium" },
	xl2_b: { fontSize: SIZES, fontFamily: "Roboto-Bold" },

	xll_r: { fontSize: SIZES, fontFamily: "Roboto-Regular" },
	xl1_m: { fontSize: SIZES, fontFamily: "Roboto-Medium" },
	xl1_b: { fontSize: SIZES, fontFamily: "Roboto-Bold" },

}

const COLOR = {
	light: '#f9f9f7',
	black1: '#332e35',
	black2: '#232324',
	gray1: '#b3b3b3',
	white: '#fff',
	black: '#121212'
}

const LIGHT_THEME = {
	base: COLOR.light,
	primary: COLOR.black1,
	base2: COLOR.white,
	primary2: COLOR.black,
	borderColor: COLOR.gray1,
	placeholder: COLOR.gray1,
	light: COLOR.light,

	h1: COLOR.black1,
	text: COLOR.black1,

	light2: '#cdd5d6',
	brown: '#98928d',
	skyBlue: '#a8b2b7',
	brownGray: '#6b6a6c',
	AuChico: '#936061',
	blue: '#6e8198',
	ash: '#cbc7bd',
	ash2: '#bfb9b3',


}

const DARK_THEME = {
	base: COLOR.black2,
	primary: COLOR.light,
	base2: COLOR.black,
	light: COLOR.light,
	primary2: COLOR.white,
	borderColor: COLOR.gray1,
	h1: COLOR.light,
	text: COLOR.light,
	placeholder: COLOR.gray1,


	tapa: '#74706e',
	brownGray: '#654f4f',
	osloGray: '#83888f',
	tundora: '#4a4648',
	tundora2: ' #4f4e58',
	abbey: '#47363c',
	mojoRed: '#c03846',
	donkeyBrown: '#a18c77'

}


export { SIZES, FONTS, LIGHT_THEME, DARK_THEME }
