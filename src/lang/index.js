import Vue from "vue"
import VueI18n from "vue-i18n"
import elementEnLocale from "element-ui/lib/locale/lang/en"
import elementZhLocale from "element-ui/lib/locale/lang/zh-CN"
import enLocale from "./en"
import zhLocale from "./zh"

Vue.use(VueI18n)

const massages = {
	en: {
		...elementEnLocale,
		...enLocale
	},
	zn: {
		...elementZhLocale,
		...zhLocale
	}
}

const i18n = new VueI18n({
	locale: "zh",
	massages
})

export default i18n
