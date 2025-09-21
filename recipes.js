// noinspection JSNonASCIINames
let recipes = {
	"奶奶的拐杖": {
		"type": "增强型工作台",
		"map": [
			[null, "橡木原木", null],
			[null, "橡木原木", null],
			[null, "橡木原木", null]
		],
		"ingredients": [
			["橡木原木", 3]
		],
		"count": 1
	},
	"爷爷的拐杖": {
		"type": "增强型工作台",
		"map": [
			["皮革", "橡木原木", "皮革"],
			[null, "橡木原木", null],
			[null, "橡木原木", null]
		],
		"ingredients": [
			["皮革", 2],
			["橡木原木", 3]
		],
		"count": 1
	},
	"便携工作台": {
		"type": "增强型工作台",
		"map": [
			["书", "工作台", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["书", 1],
			["工作台", 1]
		],
		"count": 1
	},
	"幸运饼干": {
		"type": "增强型工作台",
		"map": [
			["曲奇", "纸", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["曲奇", 1],
			["纸", 1]
		],
		"count": 1
	},
	"减肥曲奇": {
		"type": "魔法工作台",
		"map": [
			["曲奇", "鞘翅鳞片", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["曲奇", 1],
			["鞘翅鳞片", 1]
		],
		"count": 1
	},
	"物品输出箱": {
		"type": "增强型工作台",
		"map": [
			["铅锭", "漏斗", "铅锭"],
			["铅锭", "箱子", "铅锭"],
			[null, "铅锭", null]
		],
		"ingredients": [
			["铅锭", 5],
			["漏斗", 1],
			["箱子", 1]
		],
		"count": 1
	},
	"增强型工作台": {
		"type": "多方块结构",
		"map": [
			[null, null, null],
			[null, "工作台", null],
			[null, "发射器", null]
		],
		"ingredients": [
			["工作台", 1],
			["发射器", 1]
		],
		"count": 1
	},
	"便携垃圾箱": {
		"type": "增强型工作台",
		"map": [
			["铁锭", "铁锭", "铁锭"],
			["铁锭", null, "铁锭"],
			["铁锭", "铁锭", "铁锭"]
		],
		"ingredients": [
			["铁锭", 8]
		],
		"count": 1
	},
	"牛肉干": {
		"type": "增强型工作台",
		"map": [
			["盐", "牛排", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["盐", 1],
			["牛排", 1]
		],
		"count": 1
	},
	"猪肉干": {
		"type": "增强型工作台",
		"map": [
			["盐", "熟猪排", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["盐", 1],
			["熟猪排", 1]
		],
		"count": 1
	},
	"鸡肉干": {
		"type": "增强型工作台",
		"map": [
			["盐", "熟鸡肉", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["盐", 1],
			["熟鸡肉", 1]
		],
		"count": 1
	},
	"羊肉干": {
		"type": "增强型工作台",
		"map": [
			["盐", "熟羊肉", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["盐", 1],
			["熟羊肉", 1]
		],
		"count": 1
	},
	"兔肉干": {
		"type": "增强型工作台",
		"map": [
			["盐", "熟兔肉", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["盐", 1],
			["熟兔肉", 1]
		],
		"count": 1
	},
	"鱼干": {
		"type": "增强型工作台",
		"map": [
			["盐", "熟鳕鱼", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["盐", 1],
			["熟鳕鱼", 1]
		],
		"count": 1
	},
	"海带曲奇": {
		"type": "增强型工作台",
		"map": [
			[null, "干海带", null],
			["干海带", "糖", "干海带"],
			[null, "干海带", null]
		],
		"ingredients": [
			["干海带", 4],
			["糖", 1]
		],
		"count": 2
	},
	"磨石": {
		"type": "多方块结构",
		"map": [
			[null, null, null],
			[null, "橡木栅栏", null],
			[null, "发射器 (朝上)", null]
		],
		"ingredients": [
			["橡木栅栏", 1],
			["发射器 (朝上)", 1]
		],
		"count": 1
	},
	"盔甲锻造台": {
		"type": "多方块结构",
		"map": [
			[null, null, null],
			[null, "铁砧", null],
			[null, "发射器 (朝上)", null]
		],
		"ingredients": [
			["铁砧", 1],
			["发射器 (朝上)", 1]
		],
		"count": 1
	},
	"矿石粉碎机": {
		"type": "多方块结构",
		"map": [
			[null, null, null],
			[null, "下界砖栅栏", null],
			["铁栏杆", "发射器 (朝上)", "铁栏杆"]
		],
		"ingredients": [
			["下界砖栅栏", 1],
			["铁栏杆", 2],
			["发射器 (朝上)", 1]
		],
		"count": 1
	},
	"魔法结晶 - I": {
		"type": "磨石",
		"map": [
			["下界疣", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["下界疣", 1]
		],
		"count": 2
	},
	"魔法结晶 - II": {
		"type": "增强型工作台",
		"map": [
			["魔法结晶 - I", "魔法结晶 - I", null],
			["魔法结晶 - I", "魔法结晶 - I", null],
			[null, null, null]
		],
		"ingredients": [
			["魔法结晶 - I", 4]
		],
		"count": 1
	},
	"魔法结晶 - III": {
		"type": "增强型工作台",
		"map": [
			["魔法结晶 - II", "魔法结晶 - II", null],
			["魔法结晶 - II", "魔法结晶 - II", null],
			[null, null, null]
		],
		"ingredients": [
			["魔法结晶 - II", 4]
		],
		"count": 1
	},
	"末影结晶 - I": {
		"type": "磨石",
		"map": [
			["末影之眼", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["末影之眼", 1]
		],
		"count": 2
	},
	"末影结晶 - II": {
		"type": "增强型工作台",
		"map": [
			["末影结晶 - I", "末影结晶 - I", null],
			["末影结晶 - I", "末影结晶 - I", null],
			[null, null, null]
		],
		"ingredients": [
			["末影结晶 - I", 4]
		],
		"count": 1
	},
	"末影结晶 - III": {
		"type": "增强型工作台",
		"map": [
			["末影结晶 - II", "末影结晶 - II", null],
			["末影结晶 - II", "末影结晶 - II", null],
			[null, null, null]
		],
		"ingredients": [
			["末影结晶 - II", 4]
		],
		"count": 1
	},
	"末影背包": {
		"type": "魔法工作台",
		"map": [
			["末影结晶 - II", "皮革", "末影结晶 - II"],
			["皮革", "箱子", "皮革"],
			["末影结晶 - II", "皮革", "末影结晶 - II"]
		],
		"ingredients": [
			["末影结晶 - II", 4],
			["皮革", 4],
			["箱子", 1]
		],
		"count": 1
	},
	"末影头盔": {
		"type": "盔甲锻造台",
		"map": [
			["末影结晶 - I", "末影之眼", "末影结晶 - I"],
			["黑曜石", null, "黑曜石"],
			[null, null, null]
		],
		"ingredients": [
			["末影结晶 - I", 2],
			["末影之眼", 1],
			["黑曜石", 2]
		],
		"count": 1
	},
	"末影胸甲": {
		"type": "盔甲锻造台",
		"map": [
			["末影结晶 - I", null, "末影结晶 - I"],
			["黑曜石", "末影之眼", "黑曜石"],
			["黑曜石", "黑曜石", "黑曜石"]
		],
		"ingredients": [
			["末影结晶 - I", 2],
			["黑曜石", 5],
			["末影之眼", 1]
		],
		"count": 1
	},
	"末影护腿": {
		"type": "盔甲锻造台",
		"map": [
			["末影结晶 - I", "末影之眼", "末影结晶 - I"],
			["黑曜石", null, "黑曜石"],
			["黑曜石", null, "黑曜石"]
		],
		"ingredients": [
			["末影结晶 - I", 2],
			["末影之眼", 1],
			["黑曜石", 4]
		],
		"count": 1
	},
	"末影靴子": {
		"type": "盔甲锻造台",
		"map": [
			[null, null, null],
			["末影结晶 - I", null, "末影结晶 - I"],
			["黑曜石", null, "黑曜石"]
		],
		"ingredients": [
			["末影结晶 - I", 2],
			["黑曜石", 2]
		],
		"count": 1
	},
	"魔法末影之眼": {
		"type": "魔法工作台",
		"map": [
			["末影结晶 - II", "末影珍珠", "末影结晶 - II"],
			["末影珍珠", "末影之眼", "末影珍珠"],
			["末影结晶 - II", "末影珍珠", "末影结晶 - II"]
		],
		"ingredients": [
			["末影结晶 - II", 4],
			["末影珍珠", 4],
			["末影之眼", 1]
		],
		"count": 1
	},
	"魔法糖": {
		"type": "增强型工作台",
		"map": [
			["糖", "红石粉", "荧石粉"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["糖", 1],
			["红石粉", 1],
			["荧石粉", 1]
		],
		"count": 1
	},
	"怪物肉干": {
		"type": "增强型工作台",
		"map": [
			["盐", "腐肉", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["盐", 1],
			["腐肉", 1]
		],
		"count": 1
	},
	"史莱姆头盔": {
		"type": "盔甲锻造台",
		"map": [
			["黏液球", "铁锭", "黏液球"],
			["铁锭", null, "铁锭"],
			[null, null, null]
		],
		"ingredients": [
			["黏液球", 2],
			["铁锭", 3]
		],
		"count": 1
	},
	"史莱姆胸甲": {
		"type": "盔甲锻造台",
		"map": [
			["黏液球", null, "黏液球"],
			["铁锭", "黏液球", "铁锭"],
			["铁锭", "黏液球", "铁锭"]
		],
		"ingredients": [
			["黏液球", 4],
			["铁锭", 4]
		],
		"count": 1
	},
	"史莱姆护腿": {
		"type": "盔甲锻造台",
		"map": [
			["黏液球", "铁锭", "黏液球"],
			["铁锭", null, "铁锭"],
			["铁锭", null, "铁锭"]
		],
		"ingredients": [
			["黏液球", 2],
			["铁锭", 5]
		],
		"count": 1
	},
	"史莱姆靴子": {
		"type": "盔甲锻造台",
		"map": [
			[null, null, null],
			["黏液球", null, "黏液球"],
			["铁锭", null, "铁锭"]
		],
		"ingredients": [
			["黏液球", 2],
			["铁锭", 2]
		],
		"count": 1
	},
	"处决之剑": {
		"type": "增强型工作台",
		"map": [
			[null, "绿宝石", null],
			["魔法结晶 - II", "绿宝石", "魔法结晶 - II"],
			[null, "烈焰棒", null]
		],
		"ingredients": [
			["绿宝石", 2],
			["魔法结晶 - II", 2],
			["烈焰棒", 1]
		],
		"count": 1
	},
	"魔法书皮": {
		"type": "增强型工作台",
		"map": [
			[null, "魔法结晶 - II", null],
			["魔法结晶 - II", "书", "魔法结晶 - II"],
			[null, "魔法结晶 - II", null]
		],
		"ingredients": [
			["魔法结晶 - II", 4],
			["书", 1]
		],
		"count": 1
	},
	"魔法玻璃": {
		"type": "魔法工作台",
		"map": [
			["魔法结晶 - II", "金粉", "魔法结晶 - II"],
			["学识之瓶", "玻璃板", "学识之瓶"],
			["魔法结晶 - II", "学识之瓶", "魔法结晶 - II"]
		],
		"ingredients": [
			["魔法结晶 - II", 4],
			["金粉", 1],
			["学识之瓶", 3],
			["玻璃板", 1]
		],
		"count": 1
	},
	"基础电路板": {
		"type": "生物掉落",
		"map": [
			[null, null, null],
			[null, "Iron Golem", null],
			[null, null, null]
		],
		"ingredients": [
			["Iron Golem", 1]
		],
		"count": 1
	},
	"高级电路板": {
		"type": "增强型工作台",
		"map": [
			["青金石块", "青金石块", "青金石块"],
			["红石块", "基础电路板", "红石块"],
			["青金石块", "青金石块", "青金石块"]
		],
		"ingredients": [
			["青金石块", 6],
			["红石块", 2],
			["基础电路板", 1]
		],
		"count": 1
	},
	"淘金盘": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			["石头", "碗", "石头"],
			["石头", "石头", "石头"]
		],
		"ingredients": [
			["石头", 5],
			["碗", 1]
		],
		"count": 1
	},
	"下界淘金盘": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			["下界砖", "淘金盘", "下界砖"],
			["下界砖", "下界砖", "下界砖"]
		],
		"ingredients": [
			["下界砖", 5],
			["淘金盘", 1]
		],
		"count": 1
	},
	"筛矿": {
		"type": "淘金盘",
		"map": [
			["沙砾", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["沙砾", 1]
		],
		"count": 1
	},
	"简易冶炼炉": {
		"type": "多方块结构",
		"map": [
			[null, "橡木栅栏", null],
			["砖块", "发射器 (朝上)", "砖块"],
			[null, "打火石", null]
		],
		"ingredients": [
			["橡木栅栏", 1],
			["砖块", 2],
			["发射器 (朝上)", 1],
			["打火石", 1]
		],
		"count": 1
	},
	"冶炼炉": {
		"type": "多方块结构",
		"map": [
			[null, "下界砖栅栏", null],
			["下界砖块", "发射器 (朝上)", "下界砖块"],
			[null, "打火石", null]
		],
		"ingredients": [
			["下界砖栅栏", 1],
			["下界砖块", 2],
			["发射器 (朝上)", 1],
			["打火石", 1]
		],
		"count": 1
	},
	"自动点火机": {
		"type": "增强型工作台",
		"map": [
			["铁锭", "打火石", "铁锭"],
			["铁锭", "基础电路板", "铁锭"],
			[null, "侦测器", null]
		],
		"ingredients": [
			["铁锭", 4],
			["打火石", 1],
			["基础电路板", 1],
			["侦测器", 1]
		],
		"count": 1
	},
	"压力机": {
		"type": "多方块结构",
		"map": [
			["平滑石台阶", "发射器 (朝下)", "平滑石台阶"],
			["活塞", "玻璃", "活塞"],
			["活塞", "炼药锅", "活塞"]
		],
		"ingredients": [
			["平滑石台阶", 2],
			["发射器 (朝下)", 1],
			["活塞", 4],
			["玻璃", 1],
			["炼药锅", 1]
		],
		"count": 1
	},
	"电池": {
		"type": "增强型工作台",
		"map": [
			[null, "红石粉", null],
			["锌锭", "硫酸盐", "铜锭"],
			["锌锭", "硫酸盐", "铜锭"]
		],
		"ingredients": [
			["红石粉", 1],
			["锌锭", 2],
			["硫酸盐", 2],
			["铜锭", 2]
		],
		"count": 1
	},
	"萤石头盔": {
		"type": "盔甲锻造台",
		"map": [
			["荧石", "荧石", "荧石"],
			["荧石", null, "荧石"],
			[null, null, null]
		],
		"ingredients": [
			["荧石", 5]
		],
		"count": 1
	},
	"萤石胸甲": {
		"type": "盔甲锻造台",
		"map": [
			["荧石", null, "荧石"],
			["荧石", "荧石", "荧石"],
			["荧石", "荧石", "荧石"]
		],
		"ingredients": [
			["荧石", 8]
		],
		"count": 1
	},
	"萤石护腿": {
		"type": "盔甲锻造台",
		"map": [
			["荧石", "荧石", "荧石"],
			["荧石", null, "荧石"],
			["荧石", null, "荧石"]
		],
		"ingredients": [
			["荧石", 7]
		],
		"count": 1
	},
	"萤石靴子": {
		"type": "盔甲锻造台",
		"map": [
			[null, null, null],
			["荧石", null, "荧石"],
			["荧石", null, "荧石"]
		],
		"ingredients": [
			["荧石", 4]
		],
		"count": 1
	},
	"大马士革钢头盔": {
		"type": "盔甲锻造台",
		"map": [
			["大马士革钢锭", "大马士革钢锭", "大马士革钢锭"],
			["大马士革钢锭", null, "大马士革钢锭"],
			[null, null, null]
		],
		"ingredients": [
			["大马士革钢锭", 5]
		],
		"count": 1
	},
	"大马士革钢胸甲": {
		"type": "盔甲锻造台",
		"map": [
			["大马士革钢锭", null, "大马士革钢锭"],
			["大马士革钢锭", "大马士革钢锭", "大马士革钢锭"],
			["大马士革钢锭", "大马士革钢锭", "大马士革钢锭"]
		],
		"ingredients": [
			["大马士革钢锭", 8]
		],
		"count": 1
	},
	"大马士革钢护腿": {
		"type": "盔甲锻造台",
		"map": [
			["大马士革钢锭", "大马士革钢锭", "大马士革钢锭"],
			["大马士革钢锭", null, "大马士革钢锭"],
			["大马士革钢锭", null, "大马士革钢锭"]
		],
		"ingredients": [
			["大马士革钢锭", 7]
		],
		"count": 1
	},
	"大马士革钢靴子": {
		"type": "盔甲锻造台",
		"map": [
			[null, null, null],
			["大马士革钢锭", null, "大马士革钢锭"],
			["大马士革钢锭", null, "大马士革钢锭"]
		],
		"ingredients": [
			["大马士革钢锭", 4]
		],
		"count": 1
	},
	"强化合金头盔": {
		"type": "盔甲锻造台",
		"map": [
			["强化合金锭", "强化合金锭", "强化合金锭"],
			["强化合金锭", null, "强化合金锭"],
			[null, null, null]
		],
		"ingredients": [
			["强化合金锭", 5]
		],
		"count": 1
	},
	"强化合金胸甲": {
		"type": "盔甲锻造台",
		"map": [
			["强化合金锭", null, "强化合金锭"],
			["强化合金锭", "强化合金锭", "强化合金锭"],
			["强化合金锭", "强化合金锭", "强化合金锭"]
		],
		"ingredients": [
			["强化合金锭", 8]
		],
		"count": 1
	},
	"强化合金护腿": {
		"type": "盔甲锻造台",
		"map": [
			["强化合金锭", "强化合金锭", "强化合金锭"],
			["强化合金锭", null, "强化合金锭"],
			["强化合金锭", null, "强化合金锭"]
		],
		"ingredients": [
			["强化合金锭", 7]
		],
		"count": 1
	},
	"强化合金靴子": {
		"type": "盔甲锻造台",
		"map": [
			[null, null, null],
			["强化合金锭", null, "强化合金锭"],
			["强化合金锭", null, "强化合金锭"]
		],
		"ingredients": [
			["强化合金锭", 4]
		],
		"count": 1
	},
	"仙人掌头盔": {
		"type": "盔甲锻造台",
		"map": [
			["仙人掌", "仙人掌", "仙人掌"],
			["仙人掌", null, "仙人掌"],
			[null, null, null]
		],
		"ingredients": [
			["仙人掌", 5]
		],
		"count": 1
	},
	"仙人掌胸甲": {
		"type": "盔甲锻造台",
		"map": [
			["仙人掌", null, "仙人掌"],
			["仙人掌", "仙人掌", "仙人掌"],
			["仙人掌", "仙人掌", "仙人掌"]
		],
		"ingredients": [
			["仙人掌", 8]
		],
		"count": 1
	},
	"仙人掌护腿": {
		"type": "盔甲锻造台",
		"map": [
			["仙人掌", "仙人掌", "仙人掌"],
			["仙人掌", null, "仙人掌"],
			["仙人掌", null, "仙人掌"]
		],
		"ingredients": [
			["仙人掌", 7]
		],
		"count": 1
	},
	"仙人掌靴子": {
		"type": "盔甲锻造台",
		"map": [
			[null, null, null],
			["仙人掌", null, "仙人掌"],
			["仙人掌", null, "仙人掌"]
		],
		"ingredients": [
			["仙人掌", 4]
		],
		"count": 1
	},
	"强化合金锭": {
		"type": "冶炼炉",
		"map": [
			["大马士革钢锭", "硬化金属", "科林斯青铜锭"],
			["焊锡锭", "银铜合金锭", "金锭 (24克拉)"],
			[null, null, null]
		],
		"ingredients": [
			["大马士革钢锭", 1],
			["硬化金属", 1],
			["科林斯青铜锭", 1],
			["焊锡锭", 1],
			["银铜合金锭", 1],
			["金锭 (24克拉)", 1]
		],
		"count": 1
	},
	"硬化金属": {
		"type": "冶炼炉",
		"map": [
			["大马士革钢锭", "硬铝锭", "压缩碳"],
			["铝青铜锭", null, null],
			[null, null, null]
		],
		"ingredients": [
			["大马士革钢锭", 1],
			["硬铝锭", 1],
			["压缩碳", 1],
			["铝青铜锭", 1]
		],
		"count": 1
	},
	"大马士革钢锭": {
		"type": "冶炼炉",
		"map": [
			["钢锭", "铁粉", "碳"],
			["铁锭", null, null],
			[null, null, null]
		],
		"ingredients": [
			["钢锭", 1],
			["铁粉", 1],
			["碳", 1],
			["铁锭", 1]
		],
		"count": 1
	},
	"钢锭": {
		"type": "冶炼炉",
		"map": [
			["铁粉", "碳", "铁锭"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["铁粉", 1],
			["碳", 1],
			["铁锭", 1]
		],
		"count": 1
	},
	"青铜锭": {
		"type": "冶炼炉",
		"map": [
			["铜粉", "锡粉", "铜锭"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["铜粉", 1],
			["锡粉", 1],
			["铜锭", 1]
		],
		"count": 1
	},
	"硬铝锭": {
		"type": "冶炼炉",
		"map": [
			["铝粉", "铜粉", "铝锭"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["铝粉", 1],
			["铜粉", 1],
			["铝锭", 1]
		],
		"count": 1
	},
	"银铜合金锭": {
		"type": "冶炼炉",
		"map": [
			["银粉", "铜粉", "银锭"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["银粉", 1],
			["铜粉", 1],
			["银锭", 1]
		],
		"count": 1
	},
	"黄铜锭": {
		"type": "冶炼炉",
		"map": [
			["铜粉", "锌粉", "铜锭"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["铜粉", 1],
			["锌粉", 1],
			["铜锭", 1]
		],
		"count": 1
	},
	"铝黄铜锭": {
		"type": "冶炼炉",
		"map": [
			["铝粉", "黄铜锭", "铝锭"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["铝粉", 1],
			["黄铜锭", 1],
			["铝锭", 1]
		],
		"count": 1
	},
	"铝青铜锭": {
		"type": "冶炼炉",
		"map": [
			["铝粉", "青铜锭", "铝锭"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["铝粉", 1],
			["青铜锭", 1],
			["铝锭", 1]
		],
		"count": 1
	},
	"科林斯青铜锭": {
		"type": "冶炼炉",
		"map": [
			["银粉", "金粉", "铜粉"],
			["青铜锭", null, null],
			[null, null, null]
		],
		"ingredients": [
			["银粉", 1],
			["金粉", 1],
			["铜粉", 1],
			["青铜锭", 1]
		],
		"count": 1
	},
	"焊锡锭": {
		"type": "冶炼炉",
		"map": [
			["铅粉", "锡粉", "铅锭"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["铅粉", 1],
			["锡粉", 1],
			["铅锭", 1]
		],
		"count": 1
	},
	"人造蓝宝石": {
		"type": "冶炼炉",
		"map": [
			["铝粉", "玻璃", "玻璃板"],
			["铝锭", "青金石", null],
			[null, null, null]
		],
		"ingredients": [
			["铝粉", 1],
			["玻璃", 1],
			["玻璃板", 1],
			["铝锭", 1],
			["青金石", 1]
		],
		"count": 1
	},
	"人造钻石": {
		"type": "压力机",
		"map": [
			["碳块", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["碳块", 1]
		],
		"count": 1
	},
	"黑金刚石原矿": {
		"type": "冶炼炉",
		"map": [
			["人造钻石", "碳块", "玻璃板"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["人造钻石", 1],
			["碳块", 1],
			["玻璃板", 1]
		],
		"count": 1
	},
	"镍锭": {
		"type": "冶炼炉",
		"map": [
			["铁粉", "铁锭", "铜粉"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["铁粉", 1],
			["铁锭", 1],
			["铜粉", 1]
		],
		"count": 1
	},
	"钴锭": {
		"type": "冶炼炉",
		"map": [
			["铁粉", "铜粉", "镍锭"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["铁粉", 1],
			["铜粉", 1],
			["镍锭", 1]
		],
		"count": 1
	},
	"黑金刚石": {
		"type": "压力机",
		"map": [
			["黑金刚石原矿", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["黑金刚石原矿", 1]
		],
		"count": 1
	},
	"硅铁": {
		"type": "冶炼炉",
		"map": [
			["铁锭", "铁粉", "硅"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["铁锭", 1],
			["铁粉", 1],
			["硅", 1]
		],
		"count": 1
	},
	"铁粉": {
		"type": "矿石粉碎机",
		"map": [
			["铁矿石", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["铁矿石", 1]
		],
		"count": 2
	},
	"金粉": {
		"type": "矿石粉碎机",
		"map": [
			["金矿石", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["金矿石", 1]
		],
		"count": 2
	},
	"铜粉": {
		"type": "洗矿机",
		"map": [
			["筛矿", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["筛矿", 1]
		],
		"count": 1
	},
	"锡粉": {
		"type": "洗矿机",
		"map": [
			["筛矿", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["筛矿", 1]
		],
		"count": 1
	},
	"铅粉": {
		"type": "洗矿机",
		"map": [
			["筛矿", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["筛矿", 1]
		],
		"count": 1
	},
	"银粉": {
		"type": "洗矿机",
		"map": [
			["筛矿", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["筛矿", 1]
		],
		"count": 1
	},
	"铝粉": {
		"type": "洗矿机",
		"map": [
			["筛矿", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["筛矿", 1]
		],
		"count": 1
	},
	"锌粉": {
		"type": "洗矿机",
		"map": [
			["筛矿", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["筛矿", 1]
		],
		"count": 1
	},
	"镁": {
		"type": "洗矿机",
		"map": [
			["筛矿", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["筛矿", 1]
		],
		"count": 1
	},
	"铜锭": {
		"type": "冶炼炉",
		"map": [
			["铜粉", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["铜粉", 1]
		],
		"count": 1
	},
	"锡锭": {
		"type": "冶炼炉",
		"map": [
			["锡粉", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["锡粉", 1]
		],
		"count": 1
	},
	"银锭": {
		"type": "冶炼炉",
		"map": [
			["银粉", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["银粉", 1]
		],
		"count": 1
	},
	"铅锭": {
		"type": "冶炼炉",
		"map": [
			["铅粉", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["铅粉", 1]
		],
		"count": 1
	},
	"铝锭": {
		"type": "冶炼炉",
		"map": [
			["铝粉", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["铝粉", 1]
		],
		"count": 1
	},
	"锌锭": {
		"type": "冶炼炉",
		"map": [
			["锌粉", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["锌粉", 1]
		],
		"count": 1
	},
	"镁锭": {
		"type": "冶炼炉",
		"map": [
			["镁", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["镁", 1]
		],
		"count": 1
	},
	"硫酸盐": {
		"type": "矿石粉碎机",
		"map": [
			["下界岩", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["下界岩", 1]
		],
		"count": 1
	},
	"碳": {
		"type": "压缩机",
		"map": [
			["煤炭", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["煤炭", 1]
		],
		"count": 1
	},
	"小麦粉": {
		"type": "磨石",
		"map": [
			["小麦", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["小麦", 1]
		],
		"count": 1
	},
	"钢板": {
		"type": "压缩机",
		"map": [
			["钢锭", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["钢锭", 1]
		],
		"count": 1
	},
	"压缩碳": {
		"type": "压缩机",
		"map": [
			["碳", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["碳", 1]
		],
		"count": 1
	},
	"碳块": {
		"type": "增强型工作台",
		"map": [
			["压缩碳", "压缩碳", "压缩碳"],
			["压缩碳", "燧石", "压缩碳"],
			["压缩碳", "压缩碳", "压缩碳"]
		],
		"ingredients": [
			["压缩碳", 8],
			["燧石", 1]
		],
		"count": 1
	},
	"钢推进器": {
		"type": "增强型工作台",
		"map": [
			[null, "红石粉", null],
			["铝青铜锭", "铝青铜锭", "铝青铜锭"],
			["钢板", "火焰弹", "钢板"]
		],
		"ingredients": [
			["红石粉", 1],
			["铝青铜锭", 3],
			["钢板", 2],
			["火焰弹", 1]
		],
		"count": 1
	},
	"能量水晶": {
		"type": "增强型工作台",
		"map": [
			["红石粉", "人造蓝宝石", "红石粉"],
			["人造蓝宝石", "人造钻石", "人造蓝宝石"],
			["红石粉", "人造蓝宝石", "红石粉"]
		],
		"ingredients": [
			["红石粉", 4],
			["人造蓝宝石", 4],
			["人造钻石", 1]
		],
		"count": 1
	},
	"电力喷气背包 - I": {
		"type": "增强型工作台",
		"map": [
			["硬铝锭", null, "硬铝锭"],
			["硬铝锭", "能量水晶", "硬铝锭"],
			["钢推进器", "小型储能电容", "钢推进器"]
		],
		"ingredients": [
			["硬铝锭", 4],
			["能量水晶", 1],
			["钢推进器", 2],
			["小型储能电容", 1]
		],
		"count": 1
	},
	"电力喷气背包 - II": {
		"type": "增强型工作台",
		"map": [
			["焊锡锭", null, "焊锡锭"],
			["焊锡锭", "能量水晶", "焊锡锭"],
			["钢推进器", "小型储能电容", "钢推进器"]
		],
		"ingredients": [
			["焊锡锭", 4],
			["能量水晶", 1],
			["钢推进器", 2],
			["小型储能电容", 1]
		],
		"count": 1
	},
	"电力喷气背包 - III": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", null, "银铜合金锭"],
			["银铜合金锭", "能量水晶", "银铜合金锭"],
			["钢推进器", "小型储能电容", "钢推进器"]
		],
		"ingredients": [
			["银铜合金锭", 4],
			["能量水晶", 1],
			["钢推进器", 2],
			["小型储能电容", 1]
		],
		"count": 1
	},
	"电力喷气背包 - IV": {
		"type": "增强型工作台",
		"map": [
			["钢锭", null, "钢锭"],
			["钢锭", "能量水晶", "钢锭"],
			["钢推进器", "小型储能电容", "钢推进器"]
		],
		"ingredients": [
			["钢锭", 4],
			["能量水晶", 1],
			["钢推进器", 2],
			["小型储能电容", 1]
		],
		"count": 1
	},
	"电力喷气背包 - V": {
		"type": "增强型工作台",
		"map": [
			["大马士革钢锭", null, "大马士革钢锭"],
			["大马士革钢锭", "能量水晶", "大马士革钢锭"],
			["钢推进器", "小型储能电容", "钢推进器"]
		],
		"ingredients": [
			["大马士革钢锭", 4],
			["能量水晶", 1],
			["钢推进器", 2],
			["小型储能电容", 1]
		],
		"count": 1
	},
	"电力喷气背包 - VI": {
		"type": "增强型工作台",
		"map": [
			["强化合金锭", null, "强化合金锭"],
			["强化合金锭", "能量水晶", "强化合金锭"],
			["钢推进器", "中型储能电容", "钢推进器"]
		],
		"ingredients": [
			["强化合金锭", 4],
			["能量水晶", 1],
			["钢推进器", 2],
			["中型储能电容", 1]
		],
		"count": 1
	},
	"电力喷气背包 - VII": {
		"type": "增强型工作台",
		"map": [
			["碳块", null, "碳块"],
			["黑金刚石", "能量水晶", "黑金刚石"],
			["钢推进器", "巨型储能电容", "钢推进器"]
		],
		"ingredients": [
			["碳块", 2],
			["黑金刚石", 2],
			["能量水晶", 1],
			["钢推进器", 2],
			["巨型储能电容", 1]
		],
		"count": 1
	},
	"装甲喷气背包": {
		"type": "增强型工作台",
		"map": [
			["钢板", null, "钢板"],
			["钢板", "能量水晶", "钢板"],
			["钢推进器", "中型储能电容", "钢推进器"]
		],
		"ingredients": [
			["钢板", 4],
			["能量水晶", 1],
			["钢推进器", 2],
			["中型储能电容", 1]
		],
		"count": 1
	},
	"降落伞": {
		"type": "增强型工作台",
		"map": [
			["布", "布", "布"],
			["锁链", null, "锁链"],
			[null, null, null]
		],
		"ingredients": [
			["布", 3],
			["锁链", 2]
		],
		"count": 1
	},
	"全息投影仪": {
		"type": "增强型工作台",
		"map": [
			[null, "能量水晶", null],
			["铝黄铜锭", "电动马达", "铝黄铜锭"],
			[null, "铝黄铜锭", null]
		],
		"ingredients": [
			["能量水晶", 1],
			["铝黄铜锭", 3],
			["电动马达", 1]
		],
		"count": 3
	},
	"锁链": {
		"type": "增强型工作台",
		"map": [
			[null, null, "钢锭"],
			[null, "钢锭", null],
			["钢锭", null, null]
		],
		"ingredients": [
			["钢锭", 3]
		],
		"count": 8
	},
	"钩子": {
		"type": "增强型工作台",
		"map": [
			[null, "钢锭", null],
			["钢锭", null, "钢锭"],
			[null, null, null]
		],
		"ingredients": [
			["钢锭", 3]
		],
		"count": 1
	},
	"抓钩": {
		"type": "增强型工作台",
		"map": [
			[null, null, "钩子"],
			[null, "锁链", null],
			["锁链", null, null]
		],
		"ingredients": [
			["钩子", 1],
			["锁链", 2]
		],
		"count": 1
	},
	"魔法工作台": {
		"type": "多方块结构",
		"map": [
			[null, null, null],
			[null, null, null],
			["书架", "工作台", "发射器"]
		],
		"ingredients": [
			["书架", 1],
			["工作台", 1],
			["发射器", 1]
		],
		"count": 1
	},
	"元素法杖": {
		"type": "魔法工作台",
		"map": [
			[null, "魔法书皮", "魔法结晶 - III"],
			[null, "木棍", "魔法书皮"],
			["魔法结晶 - III", null, null]
		],
		"ingredients": [
			["魔法书皮", 2],
			["魔法结晶 - III", 2],
			["木棍", 1]
		],
		"count": 1
	},
	"元素法杖 - 风": {
		"type": "魔法工作台",
		"map": [
			[null, "羽毛", "末影结晶 - III"],
			[null, "元素法杖", "羽毛"],
			["元素法杖", null, null]
		],
		"ingredients": [
			["羽毛", 2],
			["末影结晶 - III", 1],
			["元素法杖", 2]
		],
		"count": 1
	},
	"元素法杖 - 水": {
		"type": "魔法工作台",
		"map": [
			[null, "睡莲", "魔法结晶 - II"],
			[null, "元素法杖", "睡莲"],
			["元素法杖", null, null]
		],
		"ingredients": [
			["睡莲", 2],
			["魔法结晶 - II", 1],
			["元素法杖", 2]
		],
		"count": 1
	},
	"多功能工具 - I": {
		"type": "增强型工作台",
		"map": [
			["硬铝锭", null, "硬铝锭"],
			["硬铝锭", "小型储能电容", "硬铝锭"],
			[null, "硬铝锭", null]
		],
		"ingredients": [
			["硬铝锭", 5],
			["小型储能电容", 1]
		],
		"count": 1
	},
	"多功能工具 - II": {
		"type": "增强型工作台",
		"map": [
			["焊锡锭", null, "焊锡锭"],
			["焊锡锭", "小型储能电容", "焊锡锭"],
			[null, "焊锡锭", null]
		],
		"ingredients": [
			["焊锡锭", 5],
			["小型储能电容", 1]
		],
		"count": 1
	},
	"多功能工具 - III": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", null, "银铜合金锭"],
			["银铜合金锭", "小型储能电容", "银铜合金锭"],
			[null, "银铜合金锭", null]
		],
		"ingredients": [
			["银铜合金锭", 5],
			["小型储能电容", 1]
		],
		"count": 1
	},
	"多功能工具 - IV": {
		"type": "增强型工作台",
		"map": [
			["钢锭", null, "钢锭"],
			["钢锭", "小型储能电容", "钢锭"],
			[null, "钢锭", null]
		],
		"ingredients": [
			["钢锭", 5],
			["小型储能电容", 1]
		],
		"count": 1
	},
	"多功能工具 - V": {
		"type": "增强型工作台",
		"map": [
			["大马士革钢锭", null, "大马士革钢锭"],
			["大马士革钢锭", "小型储能电容", "大马士革钢锭"],
			[null, "大马士革钢锭", null]
		],
		"ingredients": [
			["大马士革钢锭", 5],
			["小型储能电容", 1]
		],
		"count": 1
	},
	"多功能工具 - VI": {
		"type": "增强型工作台",
		"map": [
			["强化合金锭", null, "强化合金锭"],
			["强化合金锭", "中型储能电容", "强化合金锭"],
			[null, "强化合金锭", null]
		],
		"ingredients": [
			["强化合金锭", 5],
			["中型储能电容", 1]
		],
		"count": 1
	},
	"多功能工具 - VII": {
		"type": "增强型工作台",
		"map": [
			["黑金刚石", null, "黑金刚石"],
			["黑金刚石", "巨型储能电容", "黑金刚石"],
			[null, "黑金刚石", null]
		],
		"ingredients": [
			["黑金刚石", 5],
			["巨型储能电容", 1]
		],
		"count": 1
	},
	"洗矿机": {
		"type": "多方块结构",
		"map": [
			[null, "发射器", null],
			[null, "橡木栅栏", null],
			[null, "炼药锅", null]
		],
		"ingredients": [
			["发射器", 1],
			["橡木栅栏", 1],
			["炼药锅", 1]
		],
		"count": 1
	},
	"金锭 (24克拉)": {
		"type": "冶炼炉",
		"map": [
			["金粉", "金锭 (22克拉)", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["金粉", 1],
			["金锭 (22克拉)", 1]
		],
		"count": 1
	},
	"金锭 (22克拉)": {
		"type": "冶炼炉",
		"map": [
			["金粉", "金锭 (20克拉)", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["金粉", 1],
			["金锭 (20克拉)", 1]
		],
		"count": 1
	},
	"金锭 (20克拉)": {
		"type": "冶炼炉",
		"map": [
			["金粉", "金锭 (18克拉)", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["金粉", 1],
			["金锭 (18克拉)", 1]
		],
		"count": 1
	},
	"金锭 (18克拉)": {
		"type": "冶炼炉",
		"map": [
			["金粉", "金锭 (16克拉)", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["金粉", 1],
			["金锭 (16克拉)", 1]
		],
		"count": 1
	},
	"金锭 (16克拉)": {
		"type": "冶炼炉",
		"map": [
			["金粉", "金锭 (14克拉)", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["金粉", 1],
			["金锭 (14克拉)", 1]
		],
		"count": 1
	},
	"金锭 (14克拉)": {
		"type": "冶炼炉",
		"map": [
			["金粉", "金锭 (12克拉)", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["金粉", 1],
			["金锭 (12克拉)", 1]
		],
		"count": 1
	},
	"金锭 (12克拉)": {
		"type": "冶炼炉",
		"map": [
			["金粉", "金锭 (10克拉)", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["金粉", 1],
			["金锭 (10克拉)", 1]
		],
		"count": 1
	},
	"金锭 (10克拉)": {
		"type": "冶炼炉",
		"map": [
			["金粉", "金锭 (8克拉)", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["金粉", 1],
			["金锭 (8克拉)", 1]
		],
		"count": 1
	},
	"金锭 (8克拉)": {
		"type": "冶炼炉",
		"map": [
			["金粉", "金锭 (6克拉)", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["金粉", 1],
			["金锭 (6克拉)", 1]
		],
		"count": 1
	},
	"金锭 (6克拉)": {
		"type": "冶炼炉",
		"map": [
			["金粉", "金锭 (4克拉)", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["金粉", 1],
			["金锭 (4克拉)", 1]
		],
		"count": 1
	},
	"金锭 (4克拉)": {
		"type": "冶炼炉",
		"map": [
			["金粉", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["金粉", 1]
		],
		"count": 1
	},
	"石块": {
		"type": "洗矿机",
		"map": [
			["筛矿", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["筛矿", 1]
		],
		"count": 1
	},
	"硅": {
		"type": "冶炼炉",
		"map": [
			["石英块", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["石英块", 1]
		],
		"count": 1
	},
	"光伏电池": {
		"type": "增强型工作台",
		"map": [
			["玻璃", "玻璃", "玻璃"],
			["硅", "硅", "硅"],
			["硅铁", "硅铁", "硅铁"]
		],
		"ingredients": [
			["玻璃", 3],
			["硅", 3],
			["硅铁", 3]
		],
		"count": 1
	},
	"太阳能头盔": {
		"type": "增强型工作台",
		"map": [
			["强化合金锭", "光伏电池", "强化合金锭"],
			["强化合金锭", null, "强化合金锭"],
			["中型储能电容", null, "中型储能电容"]
		],
		"ingredients": [
			["强化合金锭", 4],
			["光伏电池", 1],
			["中型储能电容", 2]
		],
		"count": 1
	},
	"岩浆水晶": {
		"type": "增强型工作台",
		"map": [
			["魔法结晶 - I", "烈焰粉", "魔法结晶 - I"],
			["烈焰粉", "古代符文 [火]", "烈焰粉"],
			["魔法结晶 - I", "烈焰粉", "魔法结晶 - I"]
		],
		"ingredients": [
			["魔法结晶 - I", 4],
			["烈焰粉", 4],
			["古代符文 [火]", 1]
		],
		"count": 1
	},
	"元素法杖 - 火": {
		"type": "魔法工作台",
		"map": [
			[null, null, "岩浆水晶"],
			[null, "元素法杖", null],
			["元素法杖", null, null]
		],
		"ingredients": [
			["岩浆水晶", 1],
			["元素法杖", 2]
		],
		"count": 1
	},
	"元素法杖 - 雷": {
		"type": "古代祭坛",
		"map": [
			["古代符文 [雷]", "末影结晶 - III", "古代符文 [雷]"],
			["元素法杖 - 水", "魔法糖", "元素法杖 - 风"],
			["古代符文 [雷]", "末影结晶 - III", "古代符文 [雷]"]
		],
		"ingredients": [
			["古代符文 [雷]", 4],
			["末影结晶 - III", 2],
			["元素法杖 - 水", 1],
			["魔法糖", 1],
			["元素法杖 - 风", 1]
		],
		"count": 1
	},
	"还魂丹": {
		"type": "魔法工作台",
		"map": [
			["金锭", "魔法结晶 - II", "金锭"],
			["苹果", "虚弱药水", "苹果"],
			["金锭", "魔法结晶 - II", "金锭"]
		],
		"ingredients": [
			["金锭", 4],
			["魔法结晶 - II", 2],
			["苹果", 2],
			["虚弱药水", 1]
		],
		"count": 2
	},
	"熔炉镐": {
		"type": "增强型工作台",
		"map": [
			["岩浆水晶", "岩浆水晶", "岩浆水晶"],
			[null, "硅铁", null],
			[null, "硅铁", null]
		],
		"ingredients": [
			["岩浆水晶", 3],
			["硅铁", 2]
		],
		"count": 1
	},
	"普通护身符": {
		"type": "魔法工作台",
		"map": [
			["魔法结晶 - II", "金锭 (8克拉)", "魔法结晶 - II"],
			[null, "绿宝石", null],
			["魔法结晶 - II", "金锭 (8克拉)", "魔法结晶 - II"]
		],
		"ingredients": [
			["魔法结晶 - II", 4],
			["金锭 (8克拉)", 2],
			["绿宝石", 1]
		],
		"count": 1
	},
	"铁砧护身符": {
		"type": "魔法工作台",
		"map": [
			["魔法结晶 - III", null, "魔法结晶 - III"],
			["铁砧", "普通护身符", "铁砧"],
			["魔法结晶 - III", null, "魔法结晶 - III"]
		],
		"ingredients": [
			["魔法结晶 - III", 4],
			["铁砧", 2],
			["普通护身符", 1]
		],
		"count": 4
	},
	"末影铁砧护身符": {
		"type": "魔法工作台",
		"map": [
			["末影结晶 - III", null, "末影结晶 - III"],
			[null, "铁砧护身符", null],
			["末影结晶 - III", null, "末影结晶 - III"]
		],
		"ingredients": [
			["末影结晶 - III", 4],
			["铁砧护身符", 1]
		],
		"count": 4
	},
	"矿工护身符": {
		"type": "魔法工作台",
		"map": [
			["魔法结晶 - III", null, "魔法结晶 - III"],
			["人造蓝宝石", "普通护身符", "筛矿"],
			["魔法结晶 - III", null, "魔法结晶 - III"]
		],
		"ingredients": [
			["魔法结晶 - III", 4],
			["人造蓝宝石", 1],
			["普通护身符", 1],
			["筛矿", 1]
		],
		"count": 1
	},
	"末影矿工护身符": {
		"type": "魔法工作台",
		"map": [
			["末影结晶 - III", null, "末影结晶 - III"],
			[null, "矿工护身符", null],
			["末影结晶 - III", null, "末影结晶 - III"]
		],
		"ingredients": [
			["末影结晶 - III", 4],
			["矿工护身符", 1]
		],
		"count": 1
	},
	"农夫护身符": {
		"type": "魔法工作台",
		"map": [
			["魔法结晶 - III", null, "魔法结晶 - III"],
			["钻石锄", "普通护身符", "钻石锄"],
			["魔法结晶 - III", null, "魔法结晶 - III"]
		],
		"ingredients": [
			["魔法结晶 - III", 4],
			["钻石锄", 2],
			["普通护身符", 1]
		],
		"count": 1
	},
	"末影农夫护身符": {
		"type": "魔法工作台",
		"map": [
			["末影结晶 - III", null, "末影结晶 - III"],
			[null, "农夫护身符", null],
			["末影结晶 - III", null, "末影结晶 - III"]
		],
		"ingredients": [
			["末影结晶 - III", 4],
			["农夫护身符", 1]
		],
		"count": 1
	},
	"猎人护身符": {
		"type": "魔法工作台",
		"map": [
			["魔法结晶 - III", null, "魔法结晶 - III"],
			["人造蓝宝石", "普通护身符", "怪物肉干"],
			["魔法结晶 - III", null, "魔法结晶 - III"]
		],
		"ingredients": [
			["魔法结晶 - III", 4],
			["人造蓝宝石", 1],
			["普通护身符", 1],
			["怪物肉干", 1]
		],
		"count": 1
	},
	"末影猎人护身符": {
		"type": "魔法工作台",
		"map": [
			["末影结晶 - III", null, "末影结晶 - III"],
			[null, "猎人护身符", null],
			["末影结晶 - III", null, "末影结晶 - III"]
		],
		"ingredients": [
			["末影结晶 - III", 4],
			["猎人护身符", 1]
		],
		"count": 1
	},
	"岩浆行者护身符": {
		"type": "魔法工作台",
		"map": [
			["魔法结晶 - III", null, "魔法结晶 - III"],
			["岩浆水晶", "普通护身符", "熔岩桶"],
			["魔法结晶 - III", null, "魔法结晶 - III"]
		],
		"ingredients": [
			["魔法结晶 - III", 4],
			["岩浆水晶", 1],
			["普通护身符", 1],
			["熔岩桶", 1]
		],
		"count": 4
	},
	"末影岩浆行者护身符": {
		"type": "魔法工作台",
		"map": [
			["末影结晶 - III", null, "末影结晶 - III"],
			[null, "岩浆行者护身符", null],
			["末影结晶 - III", null, "末影结晶 - III"]
		],
		"ingredients": [
			["末影结晶 - III", 4],
			["岩浆行者护身符", 1]
		],
		"count": 4
	},
	"潜水者护身符": {
		"type": "魔法工作台",
		"map": [
			["魔法结晶 - III", null, "魔法结晶 - III"],
			["水桶", "普通护身符", "钓鱼竿"],
			["魔法结晶 - III", null, "魔法结晶 - III"]
		],
		"ingredients": [
			["魔法结晶 - III", 4],
			["水桶", 1],
			["普通护身符", 1],
			["钓鱼竿", 1]
		],
		"count": 4
	},
	"末影潜水者护身符": {
		"type": "魔法工作台",
		"map": [
			["末影结晶 - III", null, "末影结晶 - III"],
			[null, "潜水者护身符", null],
			["末影结晶 - III", null, "末影结晶 - III"]
		],
		"ingredients": [
			["末影结晶 - III", 4],
			["潜水者护身符", 1]
		],
		"count": 4
	},
	"天使护身符": {
		"type": "魔法工作台",
		"map": [
			["魔法结晶 - III", null, "魔法结晶 - III"],
			["羽毛", "普通护身符", "羽毛"],
			["魔法结晶 - III", null, "魔法结晶 - III"]
		],
		"ingredients": [
			["魔法结晶 - III", 4],
			["羽毛", 2],
			["普通护身符", 1]
		],
		"count": 1
	},
	"末影天使护身符": {
		"type": "魔法工作台",
		"map": [
			["末影结晶 - III", null, "末影结晶 - III"],
			[null, "天使护身符", null],
			["末影结晶 - III", null, "末影结晶 - III"]
		],
		"ingredients": [
			["末影结晶 - III", 4],
			["天使护身符", 1]
		],
		"count": 1
	},
	"消防员护身符": {
		"type": "魔法工作台",
		"map": [
			["魔法结晶 - III", null, "魔法结晶 - III"],
			["岩浆水晶", "普通护身符", "岩浆水晶"],
			["魔法结晶 - III", null, "魔法结晶 - III"]
		],
		"ingredients": [
			["魔法结晶 - III", 4],
			["岩浆水晶", 2],
			["普通护身符", 1]
		],
		"count": 4
	},
	"末影消防员护身符": {
		"type": "魔法工作台",
		"map": [
			["末影结晶 - III", null, "末影结晶 - III"],
			[null, "消防员护身符", null],
			["末影结晶 - III", null, "末影结晶 - III"]
		],
		"ingredients": [
			["末影结晶 - III", 4],
			["消防员护身符", 1]
		],
		"count": 4
	},
	"魔法师护身符": {
		"type": "魔法工作台",
		"map": [
			["末影结晶 - III", null, "末影结晶 - III"],
			["附魔台", "普通护身符", "附魔台"],
			["末影结晶 - III", null, "末影结晶 - III"]
		],
		"ingredients": [
			["末影结晶 - III", 4],
			["附魔台", 2],
			["普通护身符", 1]
		],
		"count": 1
	},
	"末影魔法师护身符": {
		"type": "魔法工作台",
		"map": [
			["末影结晶 - III", null, "末影结晶 - III"],
			[null, "魔法师护身符", null],
			["末影结晶 - III", null, "末影结晶 - III"]
		],
		"ingredients": [
			["末影结晶 - III", 4],
			["魔法师护身符", 1]
		],
		"count": 1
	},
	"旅行者护身符": {
		"type": "魔法工作台",
		"map": [
			["魔法结晶 - III", null, "魔法结晶 - III"],
			["元素法杖 - 风", "天使护身符", "元素法杖 - 风"],
			["魔法结晶 - III", null, "魔法结晶 - III"]
		],
		"ingredients": [
			["魔法结晶 - III", 4],
			["元素法杖 - 风", 2],
			["天使护身符", 1]
		],
		"count": 1
	},
	"末影旅行者护身符": {
		"type": "魔法工作台",
		"map": [
			["末影结晶 - III", null, "末影结晶 - III"],
			[null, "旅行者护身符", null],
			["末影结晶 - III", null, "末影结晶 - III"]
		],
		"ingredients": [
			["末影结晶 - III", 4],
			["旅行者护身符", 1]
		],
		"count": 1
	},
	"战士护身符": {
		"type": "魔法工作台",
		"map": [
			["魔法结晶 - III", null, "魔法结晶 - III"],
			["强化合金锭", "普通护身符", "强化合金锭"],
			["魔法结晶 - III", null, "魔法结晶 - III"]
		],
		"ingredients": [
			["魔法结晶 - III", 4],
			["强化合金锭", 2],
			["普通护身符", 1]
		],
		"count": 4
	},
	"末影战士护身符": {
		"type": "魔法工作台",
		"map": [
			["末影结晶 - III", null, "末影结晶 - III"],
			[null, "战士护身符", null],
			["末影结晶 - III", null, "末影结晶 - III"]
		],
		"ingredients": [
			["末影结晶 - III", 4],
			["战士护身符", 1]
		],
		"count": 4
	},
	"骑士护身符": {
		"type": "魔法工作台",
		"map": [
			["魔法结晶 - III", null, "魔法结晶 - III"],
			["镀金铁锭", "战士护身符", "镀金铁锭"],
			["魔法结晶 - III", null, "魔法结晶 - III"]
		],
		"ingredients": [
			["魔法结晶 - III", 4],
			["镀金铁锭", 2],
			["战士护身符", 1]
		],
		"count": 4
	},
	"末影骑士护身符": {
		"type": "魔法工作台",
		"map": [
			["末影结晶 - III", null, "末影结晶 - III"],
			[null, "骑士护身符", null],
			["末影结晶 - III", null, "末影结晶 - III"]
		],
		"ingredients": [
			["末影结晶 - III", 4],
			["骑士护身符", 1]
		],
		"count": 4
	},
	"穴居人护身符": {
		"type": "魔法工作台",
		"map": [
			["魔法结晶 - III", null, "魔法结晶 - III"],
			["金镐", "矿工护身符", "古代符文 [地]"],
			["魔法结晶 - III", null, "魔法结晶 - III"]
		],
		"ingredients": [
			["魔法结晶 - III", 4],
			["金镐", 1],
			["矿工护身符", 1],
			["古代符文 [地]", 1]
		],
		"count": 1
	},
	"末影穴居人护身符": {
		"type": "魔法工作台",
		"map": [
			["末影结晶 - III", null, "末影结晶 - III"],
			[null, "穴居人护身符", null],
			["末影结晶 - III", null, "末影结晶 - III"]
		],
		"ingredients": [
			["末影结晶 - III", 4],
			["穴居人护身符", 1]
		],
		"count": 1
	},
	"智者的护身符": {
		"type": "魔法工作台",
		"map": [
			["魔法结晶 - III", "魔法玻璃", "魔法结晶 - III"],
			["学识之瓶", "魔法师护身符", "学识之瓶"],
			["魔法结晶 - III", "魔法玻璃", "魔法结晶 - III"]
		],
		"ingredients": [
			["魔法结晶 - III", 4],
			["魔法玻璃", 2],
			["学识之瓶", 2],
			["魔法师护身符", 1]
		],
		"count": 1
	},
	"末影智者的护身符": {
		"type": "魔法工作台",
		"map": [
			["末影结晶 - III", null, "末影结晶 - III"],
			[null, "智者的护身符", null],
			["末影结晶 - III", null, "末影结晶 - III"]
		],
		"ingredients": [
			["末影结晶 - III", 4],
			["智者的护身符", 1]
		],
		"count": 1
	},
	"镀金铁锭": {
		"type": "冶炼炉",
		"map": [
			["金锭 (24克拉)", "铁粉", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["金锭 (24克拉)", 1],
			["铁粉", 1]
		],
		"count": 1
	},
	"人造绿宝石": {
		"type": "冶炼炉",
		"map": [
			["人造蓝宝石", "铝粉", "铝锭"],
			["玻璃板", null, null],
			[null, null, null]
		],
		"ingredients": [
			["人造蓝宝石", 1],
			["铝粉", 1],
			["铝锭", 1],
			["玻璃板", 1]
		],
		"count": 1
	},
	"锁链头盔": {
		"type": "盔甲锻造台",
		"map": [
			["锁链", "锁链", "锁链"],
			["锁链", null, "锁链"],
			[null, null, null]
		],
		"ingredients": [
			["锁链", 5]
		],
		"count": 1
	},
	"锁链胸甲": {
		"type": "盔甲锻造台",
		"map": [
			["锁链", null, "锁链"],
			["锁链", "锁链", "锁链"],
			["锁链", "锁链", "锁链"]
		],
		"ingredients": [
			["锁链", 8]
		],
		"count": 1
	},
	"锁链护腿": {
		"type": "盔甲锻造台",
		"map": [
			["锁链", "锁链", "锁链"],
			["锁链", null, "锁链"],
			["锁链", null, "锁链"]
		],
		"ingredients": [
			["锁链", 7]
		],
		"count": 1
	},
	"锁链靴子": {
		"type": "盔甲锻造台",
		"map": [
			[null, null, null],
			["锁链", null, "锁链"],
			["锁链", null, "锁链"]
		],
		"ingredients": [
			["锁链", 4]
		],
		"count": 1
	},
	"旋风护身符": {
		"type": "魔法工作台",
		"map": [
			["魔法结晶 - III", null, "魔法结晶 - III"],
			["元素法杖 - 风", "旅行者护身符", "元素法杖 - 风"],
			["魔法结晶 - III", null, "魔法结晶 - III"]
		],
		"ingredients": [
			["魔法结晶 - III", 4],
			["元素法杖 - 风", 2],
			["旅行者护身符", 1]
		],
		"count": 1
	},
	"末影旋风护身符": {
		"type": "魔法工作台",
		"map": [
			["末影结晶 - III", null, "末影结晶 - III"],
			[null, "旋风护身符", null],
			["末影结晶 - III", null, "末影结晶 - III"]
		],
		"ingredients": [
			["末影结晶 - III", 4],
			["旋风护身符", 1]
		],
		"count": 1
	},
	"巫师护身符": {
		"type": "魔法工作台",
		"map": [
			["末影结晶 - III", null, "末影结晶 - III"],
			["魔法末影之眼", "魔法师护身符", "魔法末影之眼"],
			["末影结晶 - III", null, "末影结晶 - III"]
		],
		"ingredients": [
			["末影结晶 - III", 4],
			["魔法末影之眼", 2],
			["魔法师护身符", 1]
		],
		"count": 1
	},
	"末影巫师护身符": {
		"type": "魔法工作台",
		"map": [
			["末影结晶 - III", null, "末影结晶 - III"],
			[null, "巫师护身符", null],
			["末影结晶 - III", null, "末影结晶 - III"]
		],
		"ingredients": [
			["末影结晶 - III", 4],
			["巫师护身符", 1]
		],
		"count": 1
	},
	"伐木斧": {
		"type": "魔法工作台",
		"map": [
			["人造钻石", "人造钻石", null],
			["人造绿宝石", "镀金铁锭", null],
			[null, "镀金铁锭", null]
		],
		"ingredients": [
			["人造钻石", 2],
			["人造绿宝石", 1],
			["镀金铁锭", 2]
		],
		"count": 1
	},
	"盐": {
		"type": "洗矿机",
		"map": [
			["沙子", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["沙子", 1]
		],
		"count": 1
	},
	"浓奶油": {
		"type": "增强型工作台",
		"map": [
			["奶桶", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["奶桶", 1]
		],
		"count": 2
	},
	"黄油": {
		"type": "增强型工作台",
		"map": [
			["奶桶", "盐", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["奶桶", 1],
			["盐", 1]
		],
		"count": 1
	},
	"奶酪": {
		"type": "增强型工作台",
		"map": [
			["浓奶油", "盐", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["浓奶油", 1],
			["盐", 1]
		],
		"count": 1
	},
	"镀金铁头盔": {
		"type": "盔甲锻造台",
		"map": [
			["镀金铁锭", "镀金铁锭", "镀金铁锭"],
			["镀金铁锭", null, "镀金铁锭"],
			[null, null, null]
		],
		"ingredients": [
			["镀金铁锭", 5]
		],
		"count": 1
	},
	"镀金铁胸甲": {
		"type": "盔甲锻造台",
		"map": [
			["镀金铁锭", null, "镀金铁锭"],
			["镀金铁锭", "镀金铁锭", "镀金铁锭"],
			["镀金铁锭", "镀金铁锭", "镀金铁锭"]
		],
		"ingredients": [
			["镀金铁锭", 8]
		],
		"count": 1
	},
	"镀金铁护腿": {
		"type": "盔甲锻造台",
		"map": [
			["镀金铁锭", "镀金铁锭", "镀金铁锭"],
			["镀金铁锭", null, "镀金铁锭"],
			["镀金铁锭", null, "镀金铁锭"]
		],
		"ingredients": [
			["镀金铁锭", 7]
		],
		"count": 1
	},
	"镀金铁靴子": {
		"type": "盔甲锻造台",
		"map": [
			[null, null, null],
			["镀金铁锭", null, "镀金铁锭"],
			["镀金铁锭", null, "镀金铁锭"]
		],
		"ingredients": [
			["镀金铁锭", 4]
		],
		"count": 1
	},
	"强化布料": {
		"type": "增强型工作台",
		"map": [
			[null, "布", null],
			["布", "铅锭", "布"],
			[null, "布", null]
		],
		"ingredients": [
			["布", 4],
			["铅锭", 1]
		],
		"count": 2
	},
	"潜水头盔": {
		"type": "盔甲锻造台",
		"map": [
			["橙色羊毛", "强化布料", "橙色羊毛"],
			["强化布料", "玻璃板", "强化布料"],
			[null, null, null]
		],
		"ingredients": [
			["橙色羊毛", 2],
			["强化布料", 3],
			["玻璃板", 1]
		],
		"count": 1
	},
	"防化服": {
		"type": "盔甲锻造台",
		"map": [
			["橙色羊毛", null, "橙色羊毛"],
			["强化布料", "强化布料", "强化布料"],
			["黑色羊毛", "强化布料", "黑色羊毛"]
		],
		"ingredients": [
			["橙色羊毛", 2],
			["强化布料", 4],
			["黑色羊毛", 2]
		],
		"count": 1
	},
	"防化护腿": {
		"type": "盔甲锻造台",
		"map": [
			["黑色羊毛", "强化布料", "黑色羊毛"],
			["强化布料", null, "强化布料"],
			["强化布料", null, "强化布料"]
		],
		"ingredients": [
			["黑色羊毛", 2],
			["强化布料", 5]
		],
		"count": 1
	},
	"防化靴": {
		"type": "盔甲锻造台",
		"map": [
			["强化布料", null, "强化布料"],
			["强化布料", null, "强化布料"],
			["黑色羊毛", null, "黑色羊毛"]
		],
		"ingredients": [
			["强化布料", 4],
			["黑色羊毛", 2]
		],
		"count": 1
	},
	"已粉碎的矿石": {
		"type": "矿石粉碎机",
		"map": [
			["筛矿", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["筛矿", 1]
		],
		"count": 1
	},
	"粉末状的矿石": {
		"type": "矿石粉碎机",
		"map": [
			["已粉碎的矿石", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["已粉碎的矿石", 1]
		],
		"count": 1
	},
	"纯矿簇": {
		"type": "洗矿机",
		"map": [
			["粉末状的矿石", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["粉末状的矿石", 1]
		],
		"count": 1
	},
	"一小撮铀": {
		"type": "矿石粉碎机",
		"map": [
			["纯矿簇", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["纯矿簇", 1]
		],
		"count": 1
	},
	"一小块铀": {
		"type": "增强型工作台",
		"map": [
			["一小撮铀", "一小撮铀", "一小撮铀"],
			["一小撮铀", "一小撮铀", "一小撮铀"],
			["一小撮铀", "一小撮铀", "一小撮铀"]
		],
		"ingredients": [
			["一小撮铀", 9]
		],
		"count": 1
	},
	"铀": {
		"type": "增强型工作台",
		"map": [
			["一小块铀", "一小块铀", null],
			["一小块铀", "一小块铀", null],
			[null, null, null]
		],
		"ingredients": [
			["一小块铀", 4]
		],
		"count": 1
	},
	"红石合金锭": {
		"type": "冶炼炉",
		"map": [
			["红石粉", "红石块", "硅铁"],
			["硬化金属", null, null],
			[null, null, null]
		],
		"ingredients": [
			["红石粉", 1],
			["红石块", 1],
			["硅铁", 1],
			["硬化金属", 1]
		],
		"count": 1
	},
	"金头盔": {
		"type": "盔甲锻造台",
		"map": [
			["金锭 (12克拉)", "金锭 (12克拉)", "金锭 (12克拉)"],
			["金锭 (12克拉)", null, "金锭 (12克拉)"],
			[null, null, null]
		],
		"ingredients": [
			["金锭 (12克拉)", 5]
		],
		"count": 1
	},
	"金胸甲": {
		"type": "盔甲锻造台",
		"map": [
			["金锭 (12克拉)", null, "金锭 (12克拉)"],
			["金锭 (12克拉)", "金锭 (12克拉)", "金锭 (12克拉)"],
			["金锭 (12克拉)", "金锭 (12克拉)", "金锭 (12克拉)"]
		],
		"ingredients": [
			["金锭 (12克拉)", 8]
		],
		"count": 1
	},
	"金护腿": {
		"type": "盔甲锻造台",
		"map": [
			["金锭 (12克拉)", "金锭 (12克拉)", "金锭 (12克拉)"],
			["金锭 (12克拉)", null, "金锭 (12克拉)"],
			["金锭 (12克拉)", null, "金锭 (12克拉)"]
		],
		"ingredients": [
			["金锭 (12克拉)", 7]
		],
		"count": 1
	},
	"金靴子": {
		"type": "盔甲锻造台",
		"map": [
			[null, null, null],
			["金锭 (12克拉)", null, "金锭 (12克拉)"],
			["金锭 (12克拉)", null, "金锭 (12克拉)"]
		],
		"ingredients": [
			["金锭 (12克拉)", 4]
		],
		"count": 1
	},
	"布": {
		"type": "增强型工作台",
		"map": [
			["白色羊毛", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["白色羊毛", 1]
		],
		"count": 8
	},
	"破布": {
		"type": "增强型工作台",
		"map": [
			["布", "布", "布"],
			["线", null, "线"],
			["布", "布", "布"]
		],
		"ingredients": [
			["布", 6],
			["线", 2]
		],
		"count": 2
	},
	"绷带": {
		"type": "增强型工作台",
		"map": [
			["破布", "线", "破布"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["破布", 2],
			["线", 1]
		],
		"count": 4
	},
	"夹板": {
		"type": "增强型工作台",
		"map": [
			[null, "铁锭", null],
			["木棍", "木棍", "木棍"],
			[null, "铁锭", null]
		],
		"ingredients": [
			["铁锭", 2],
			["木棍", 3]
		],
		"count": 4
	},
	"锡罐": {
		"type": "增强型工作台",
		"map": [
			["锡锭", "锡锭", "锡锭"],
			["锡锭", null, "锡锭"],
			["锡锭", "锡锭", "锡锭"]
		],
		"ingredients": [
			["锡锭", 8]
		],
		"count": 8
	},
	"维他命": {
		"type": "增强型工作台",
		"map": [
			["锡罐", "苹果", "红色蘑菇"],
			["糖", null, null],
			[null, null, null]
		],
		"ingredients": [
			["锡罐", 1],
			["苹果", 1],
			["红色蘑菇", 1],
			["糖", 1]
		],
		"count": 1
	},
	"药物": {
		"type": "增强型工作台",
		"map": [
			["维他命", "玻璃瓶", "浓奶油"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["维他命", 1],
			["玻璃瓶", 1],
			["浓奶油", 1]
		],
		"count": 1
	},
	"夜视眼镜": {
		"type": "盔甲锻造台",
		"map": [
			["煤炭块", "煤炭块", "煤炭块"],
			["黄绿色染色玻璃板", "煤炭块", "黄绿色染色玻璃板"],
			["煤炭块", null, "煤炭块"]
		],
		"ingredients": [
			["煤炭块", 6],
			["黄绿色染色玻璃板", 2]
		],
		"count": 1
	},
	"刷怪笼之镐": {
		"type": "魔法工作台",
		"map": [
			["硅铁", "硅铁", "硅铁"],
			[null, "镀金铁锭", null],
			[null, "镀金铁锭", null]
		],
		"ingredients": [
			["硅铁", 3],
			["镀金铁锭", 2]
		],
		"count": 1
	},
	"赫拉克勒斯之镐": {
		"type": "魔法工作台",
		"map": [
			["硬化金属", "硬化金属", "硬化金属"],
			[null, "硅铁", null],
			[null, "硅铁", null]
		],
		"ingredients": [
			["硬化金属", 3],
			["硅铁", 2]
		],
		"count": 1
	},
	"台锯": {
		"type": "多方块结构",
		"map": [
			[null, null, null],
			["平滑石台阶", "切石机", "平滑石台阶"],
			[null, "铁块", null]
		],
		"ingredients": [
			["平滑石台阶", 2],
			["切石机", 1],
			["铁块", 1]
		],
		"count": 1
	},
	"史莱姆头盔": {
		"type": "盔甲锻造台",
		"map": [
			["黏液球", "钢板", "黏液球"],
			["黏液球", null, "黏液球"],
			[null, null, null]
		],
		"ingredients": [
			["黏液球", 4],
			["钢板", 1]
		],
		"count": 1
	},
	"史莱姆胸甲": {
		"type": "盔甲锻造台",
		"map": [
			["黏液球", null, "黏液球"],
			["黏液球", "钢板", "黏液球"],
			["黏液球", "黏液球", "黏液球"]
		],
		"ingredients": [
			["黏液球", 7],
			["钢板", 1]
		],
		"count": 1
	},
	"史莱姆护腿": {
		"type": "盔甲锻造台",
		"map": [
			["黏液球", "钢板", "黏液球"],
			["黏液球", null, "黏液球"],
			["黏液球", null, "黏液球"]
		],
		"ingredients": [
			["黏液球", 6],
			["钢板", 1]
		],
		"count": 1
	},
	"史莱姆靴子": {
		"type": "盔甲锻造台",
		"map": [
			[null, null, null],
			["黏液球", null, "黏液球"],
			["黏液球", "钢板", "黏液球"]
		],
		"ingredients": [
			["黏液球", 4],
			["钢板", 1]
		],
		"count": 1
	},
	"吸血鬼之刀": {
		"type": "魔法工作台",
		"map": [
			[null, "凋灵骷髅头颅", null],
			[null, "凋灵骷髅头颅", null],
			[null, "烈焰棒", null]
		],
		"ingredients": [
			["凋灵骷髅头颅", 2],
			["烈焰棒", 1]
		],
		"count": 1
	},
	"金块 (24克拉)": {
		"type": "增强型工作台",
		"map": [
			["金锭 (24克拉)", "金锭 (24克拉)", "金锭 (24克拉)"],
			["金锭 (24克拉)", "金锭 (24克拉)", "金锭 (24克拉)"],
			["金锭 (24克拉)", "金锭 (24克拉)", "金锭 (24克拉)"]
		],
		"ingredients": [
			["金锭 (24克拉)", 9]
		],
		"count": 1
	},
	"搅拌机": {
		"type": "增强型工作台",
		"map": [
			["橡木台阶", null, "橡木台阶"],
			["橡木台阶", null, "橡木台阶"],
			["橡木台阶", "炼药锅", "橡木台阶"]
		],
		"ingredients": [
			["橡木台阶", 6],
			["炼药锅", 1]
		],
		"count": 1
	},
	"农夫的靴子": {
		"type": "盔甲锻造台",
		"map": [
			[null, null, null],
			["干草块", null, "干草块"],
			["干草块", null, "干草块"]
		],
		"ingredients": [
			["干草块", 4]
		],
		"count": 1
	},
	"爆炸稿": {
		"type": "魔法工作台",
		"map": [
			["TNT", "人造钻石", "TNT"],
			[null, "硅铁", null],
			[null, "硅铁", null]
		],
		"ingredients": [
			["TNT", 2],
			["人造钻石", 1],
			["硅铁", 2]
		],
		"count": 1
	},
	"爆炸铲": {
		"type": "魔法工作台",
		"map": [
			[null, "人造钻石", null],
			[null, "TNT", null],
			[null, "硅铁", null]
		],
		"ingredients": [
			["人造钻石", 1],
			["TNT", 1],
			["硅铁", 1]
		],
		"count": 1
	},
	"自动淘金机": {
		"type": "多方块结构",
		"map": [
			[null, null, null],
			[null, "橡木活板门", null],
			[null, "炼药锅", null]
		],
		"ingredients": [
			["橡木活板门", 1],
			["炼药锅", 1]
		],
		"count": 1
	},
	"工业矿机": {
		"type": "多方块结构",
		"map": [
			[null, null, null],
			["活塞 (朝上)", "箱子", "活塞 (朝上)"],
			["铁块", "高炉", "铁块"]
		],
		"ingredients": [
			["活塞 (朝上)", 2],
			["箱子", 1],
			["铁块", 2],
			["高炉", 1]
		],
		"count": 1
	},
	"进阶工业矿机": {
		"type": "多方块结构",
		"map": [
			[null, null, null],
			["活塞 (朝上)", "箱子", "活塞 (朝上)"],
			["钻石块", "高炉", "钻石块"]
		],
		"ingredients": [
			["活塞 (朝上)", 2],
			["箱子", 1],
			["钻石块", 2],
			["高炉", 1]
		],
		"count": 1
	},
	"践踏者之靴": {
		"type": "盔甲锻造台",
		"map": [
			[null, null, null],
			["黄色羊毛", null, "黄色羊毛"],
			["活塞", null, "活塞"]
		],
		"ingredients": [
			["黄色羊毛", 2],
			["活塞", 2]
		],
		"count": 1
	},
	"寻矿稿": {
		"type": "魔法工作台",
		"map": [
			["指南针", "人造钻石", "指南针"],
			[null, "硅铁", null],
			[null, "硅铁", null]
		],
		"ingredients": [
			["指南针", 2],
			["人造钻石", 1],
			["硅铁", 2]
		],
		"count": 1
	},
	"小型背包": {
		"type": "增强型工作台",
		"map": [
			["皮革", null, "皮革"],
			["金锭 (6克拉)", "箱子", "金锭 (6克拉)"],
			["皮革", "皮革", "皮革"]
		],
		"ingredients": [
			["皮革", 5],
			["金锭 (6克拉)", 2],
			["箱子", 1]
		],
		"count": 1
	},
	"普通背包": {
		"type": "增强型工作台",
		"map": [
			["皮革", null, "皮革"],
			["金锭 (10克拉)", "小型背包", "金锭 (10克拉)"],
			["皮革", "皮革", "皮革"]
		],
		"ingredients": [
			["皮革", 5],
			["金锭 (10克拉)", 2],
			["小型背包", 1]
		],
		"count": 1
	},
	"中型背包": {
		"type": "增强型工作台",
		"map": [
			["皮革", null, "皮革"],
			["金锭 (14克拉)", "普通背包", "金锭 (14克拉)"],
			["皮革", "皮革", "皮革"]
		],
		"ingredients": [
			["皮革", 5],
			["金锭 (14克拉)", 2],
			["普通背包", 1]
		],
		"count": 1
	},
	"编织背包": {
		"type": "增强型工作台",
		"map": [
			["布", null, "布"],
			["金锭 (16克拉)", "中型背包", "金锭 (16克拉)"],
			["布", "布", "布"]
		],
		"ingredients": [
			["布", 5],
			["金锭 (16克拉)", 2],
			["中型背包", 1]
		],
		"count": 1
	},
	"坩埚": {
		"type": "增强型工作台",
		"map": [
			["陶瓦", null, "陶瓦"],
			["陶瓦", null, "陶瓦"],
			["陶瓦", "打火石", "陶瓦"]
		],
		"ingredients": [
			["陶瓦", 6],
			["打火石", 1]
		],
		"count": 1
	},
	"镀金背包": {
		"type": "增强型工作台",
		"map": [
			["金锭 (22克拉)", null, "金锭 (22克拉)"],
			["皮革", "编织背包", "皮革"],
			["金锭 (22克拉)", null, "金锭 (22克拉)"]
		],
		"ingredients": [
			["金锭 (22克拉)", 4],
			["皮革", 2],
			["编织背包", 1]
		],
		"count": 1
	},
	"金光闪闪的背包": {
		"type": "增强型工作台",
		"map": [
			["金锭 (24克拉)", null, "金锭 (24克拉)"],
			["皮革", "镀金背包", "皮革"],
			["金锭 (24克拉)", null, "金锭 (24克拉)"]
		],
		"ingredients": [
			["金锭 (24克拉)", 4],
			["皮革", 2],
			["镀金背包", 1]
		],
		"count": 1
	},
	"背包恢复器": {
		"type": "空配方",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"磁铁": {
		"type": "冶炼炉",
		"map": [
			["镍锭", "铝粉", "铁粉"],
			["钴锭", null, null],
			[null, null, null]
		],
		"ingredients": [
			["镍锭", 1],
			["铝粉", 1],
			["铁粉", 1],
			["钴锭", 1]
		],
		"count": 1
	},
	"吸入磁铁": {
		"type": "魔法工作台",
		"map": [
			["魔法结晶 - III", null, "魔法结晶 - III"],
			["末影结晶 - II", "磁铁", "末影结晶 - II"],
			["魔法结晶 - III", null, "魔法结晶 - III"]
		],
		"ingredients": [
			["魔法结晶 - III", 4],
			["末影结晶 - II", 2],
			["磁铁", 1]
		],
		"count": 1
	},
	"钴镐": {
		"type": "增强型工作台",
		"map": [
			["钴锭", "钴锭", "钴锭"],
			[null, "镍锭", null],
			[null, "镍锭", null]
		],
		"ingredients": [
			["钴锭", 3],
			["镍锭", 2]
		],
		"count": 1
	},
	"坏死颅骨": {
		"type": "魔法工作台",
		"map": [
			["魔法结晶 - III", null, "魔法结晶 - III"],
			[null, "凋灵骷髅头颅", null],
			["魔法结晶 - III", null, "魔法结晶 - III"]
		],
		"ingredients": [
			["魔法结晶 - III", 4],
			["凋灵骷髅头颅", 1]
		],
		"count": 1
	},
	"来世精华": {
		"type": "古代祭坛",
		"map": [
			["末影结晶 - III", "古代符文 [气]", "末影结晶 - III"],
			["古代符文 [地]", "坏死颅骨", "古代符文 [火]"],
			["末影结晶 - III", "古代符文 [水]", "末影结晶 - III"]
		],
		"ingredients": [
			["末影结晶 - III", 4],
			["古代符文 [气]", 1],
			["古代符文 [地]", 1],
			["坏死颅骨", 1],
			["古代符文 [火]", 1],
			["古代符文 [水]", 1]
		],
		"count": 1
	},
	"人造潜影壳": {
		"type": "古代祭坛",
		"map": [
			["末影结晶 - III", "古代符文 [末影]", "末影结晶 - III"],
			["钢筋板", "海龟壳", "钢筋板"],
			["末影结晶 - III", "古代符文 [末影]", "末影结晶 - III"]
		],
		"ingredients": [
			["末影结晶 - III", 4],
			["古代符文 [末影]", 2],
			["钢筋板", 2],
			["海龟壳", 1]
		],
		"count": 1
	},
	"灵魂绑定背包": {
		"type": "魔法工作台",
		"map": [
			["末影结晶 - II", null, "末影结晶 - II"],
			["来世精华", "编织背包", "来世精华"],
			["末影结晶 - II", null, "末影结晶 - II"]
		],
		"ingredients": [
			["末影结晶 - II", 4],
			["来世精华", 2],
			["编织背包", 1]
		],
		"count": 1
	},
	"喷气靴 - I": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			["硬铝锭", "能量水晶", "硬铝锭"],
			["钢推进器", "小型储能电容", "钢推进器"]
		],
		"ingredients": [
			["硬铝锭", 2],
			["能量水晶", 1],
			["钢推进器", 2],
			["小型储能电容", 1]
		],
		"count": 1
	},
	"喷气靴 - II": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			["焊锡锭", "能量水晶", "焊锡锭"],
			["钢推进器", "小型储能电容", "钢推进器"]
		],
		"ingredients": [
			["焊锡锭", 2],
			["能量水晶", 1],
			["钢推进器", 2],
			["小型储能电容", 1]
		],
		"count": 1
	},
	"喷气靴 - III": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			["银铜合金锭", "能量水晶", "银铜合金锭"],
			["钢推进器", "小型储能电容", "钢推进器"]
		],
		"ingredients": [
			["银铜合金锭", 2],
			["能量水晶", 1],
			["钢推进器", 2],
			["小型储能电容", 1]
		],
		"count": 1
	},
	"喷气靴 - IV": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			["钢锭", "能量水晶", "钢锭"],
			["钢推进器", "小型储能电容", "钢推进器"]
		],
		"ingredients": [
			["钢锭", 2],
			["能量水晶", 1],
			["钢推进器", 2],
			["小型储能电容", 1]
		],
		"count": 1
	},
	"喷气靴 - V": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			["大马士革钢锭", "能量水晶", "大马士革钢锭"],
			["钢推进器", "小型储能电容", "钢推进器"]
		],
		"ingredients": [
			["大马士革钢锭", 2],
			["能量水晶", 1],
			["钢推进器", 2],
			["小型储能电容", 1]
		],
		"count": 1
	},
	"喷气靴 - VI": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			["强化合金锭", "能量水晶", "强化合金锭"],
			["钢推进器", "中型储能电容", "钢推进器"]
		],
		"ingredients": [
			["强化合金锭", 2],
			["能量水晶", 1],
			["钢推进器", 2],
			["中型储能电容", 1]
		],
		"count": 1
	},
	"喷气靴 - VII": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			["黑金刚石", "能量水晶", "黑金刚石"],
			["钢推进器", "巨型储能电容", "钢推进器"]
		],
		"ingredients": [
			["黑金刚石", 2],
			["能量水晶", 1],
			["钢推进器", 2],
			["巨型储能电容", 1]
		],
		"count": 1
	},
	"装甲喷气靴": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			["钢板", "能量水晶", "钢板"],
			["钢推进器", "中型储能电容", "钢推进器"]
		],
		"ingredients": [
			["钢板", 2],
			["能量水晶", 1],
			["钢推进器", 2],
			["中型储能电容", 1]
		],
		"count": 1
	},
	"地震斧": {
		"type": "魔法工作台",
		"map": [
			["硬化金属", "硬化金属", null],
			["硬化金属", "元素法杖", null],
			[null, "元素法杖", null]
		],
		"ingredients": [
			["硬化金属", 3],
			["元素法杖", 2]
		],
		"count": 1
	},
	"矿脉镐": {
		"type": "魔法工作台",
		"map": [
			["绿宝石矿石", "人造钻石", "绿宝石矿石"],
			[null, "镀金铁锭", null],
			[null, "镀金铁锭", null]
		],
		"ingredients": [
			["绿宝石矿石", 2],
			["人造钻石", 1],
			["镀金铁锭", 2]
		],
		"count": 1
	},
	"攀岩镐": {
		"type": "增强型工作台",
		"map": [
			["钢锭", "硬化金属", "钢锭"],
			[null, "木棍", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["钢锭", 2],
			["硬化金属", 1],
			["木棍", 2]
		],
		"count": 1
	},
	"灵魂绑定剑": {
		"type": "魔法工作台",
		"map": [
			[null, "来世精华", null],
			[null, "钻石剑", null],
			[null, "来世精华", null]
		],
		"ingredients": [
			["来世精华", 2],
			["钻石剑", 1]
		],
		"count": 1
	},
	"灵魂绑定三叉戟": {
		"type": "魔法工作台",
		"map": [
			[null, "来世精华", null],
			[null, "三叉戟", null],
			[null, "来世精华", null]
		],
		"ingredients": [
			["来世精华", 2],
			["三叉戟", 1]
		],
		"count": 1
	},
	"灵魂绑定弓": {
		"type": "魔法工作台",
		"map": [
			[null, "来世精华", null],
			[null, "弓", null],
			[null, "来世精华", null]
		],
		"ingredients": [
			["来世精华", 2],
			["弓", 1]
		],
		"count": 1
	},
	"灵魂绑定镐": {
		"type": "魔法工作台",
		"map": [
			[null, "来世精华", null],
			[null, "钻石镐", null],
			[null, "来世精华", null]
		],
		"ingredients": [
			["来世精华", 2],
			["钻石镐", 1]
		],
		"count": 1
	},
	"灵魂绑定斧": {
		"type": "魔法工作台",
		"map": [
			[null, "来世精华", null],
			[null, "钻石斧", null],
			[null, "来世精华", null]
		],
		"ingredients": [
			["来世精华", 2],
			["钻石斧", 1]
		],
		"count": 1
	},
	"灵魂绑定铲": {
		"type": "魔法工作台",
		"map": [
			[null, "来世精华", null],
			[null, "钻石锹", null],
			[null, "来世精华", null]
		],
		"ingredients": [
			["来世精华", 2],
			["钻石锹", 1]
		],
		"count": 1
	},
	"灵魂绑定锄": {
		"type": "魔法工作台",
		"map": [
			[null, "来世精华", null],
			[null, "钻石锄", null],
			[null, "来世精华", null]
		],
		"ingredients": [
			["来世精华", 2],
			["钻石锄", 1]
		],
		"count": 1
	},
	"灵魂绑定头盔": {
		"type": "魔法工作台",
		"map": [
			[null, "来世精华", null],
			[null, "钻石头盔", null],
			[null, "来世精华", null]
		],
		"ingredients": [
			["来世精华", 2],
			["钻石头盔", 1]
		],
		"count": 1
	},
	"灵魂绑定胸甲": {
		"type": "魔法工作台",
		"map": [
			[null, "来世精华", null],
			[null, "钻石胸甲", null],
			[null, "来世精华", null]
		],
		"ingredients": [
			["来世精华", 2],
			["钻石胸甲", 1]
		],
		"count": 1
	},
	"灵魂绑定护腿": {
		"type": "魔法工作台",
		"map": [
			[null, "来世精华", null],
			[null, "钻石护腿", null],
			[null, "来世精华", null]
		],
		"ingredients": [
			["来世精华", 2],
			["钻石护腿", 1]
		],
		"count": 1
	},
	"灵魂绑定靴子": {
		"type": "魔法工作台",
		"map": [
			[null, "来世精华", null],
			[null, "钻石靴子", null],
			[null, "来世精华", null]
		],
		"ingredients": [
			["来世精华", 2],
			["钻石靴子", 1]
		],
		"count": 1
	},
	"榨汁机": {
		"type": "多方块结构",
		"map": [
			[null, "玻璃", null],
			[null, "下界砖栅栏", null],
			[null, "发射器 (朝上)", null]
		],
		"ingredients": [
			["玻璃", 1],
			["下界砖栅栏", 1],
			["发射器 (朝上)", 1]
		],
		"count": 1
	},
	"苹果汁": {
		"type": "榨汁机",
		"map": [
			["苹果", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["苹果", 1]
		],
		"count": 1
	},
	"胡萝卜汁": {
		"type": "榨汁机",
		"map": [
			["胡萝卜", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["胡萝卜", 1]
		],
		"count": 1
	},
	"西瓜汁": {
		"type": "榨汁机",
		"map": [
			["西瓜片", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["西瓜片", 1]
		],
		"count": 1
	},
	"南瓜汁": {
		"type": "榨汁机",
		"map": [
			["南瓜", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["南瓜", 1]
		],
		"count": 1
	},
	"浆果汁": {
		"type": "榨汁机",
		"map": [
			["甜浆果", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["甜浆果", 1]
		],
		"count": 1
	},
	"金苹果汁": {
		"type": "榨汁机",
		"map": [
			["金苹果", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["金苹果", 1]
		],
		"count": 1
	},
	"已损坏的刷怪笼": {
		"map": [
			[null, null, null],
			[null, "刷怪笼", null],
			[null, null, null]
		],
		"ingredients": [
			["刷怪笼", 1]
		],
		"count": 1
	},
	"已修复的刷怪笼": {
		"type": "古代祭坛",
		"map": [
			["古代符文 [末影]", "学识之瓶", "来世精华"],
			["学识之瓶", "已损坏的刷怪笼", "学识之瓶"],
			["来世精华", "学识之瓶", "古代符文 [末影]"]
		],
		"ingredients": [
			["古代符文 [末影]", 2],
			["学识之瓶", 4],
			["来世精华", 2],
			["已损坏的刷怪笼", 1]
		],
		"count": 1
	},
	"强化熔炉 - I": {
		"type": "增强型工作台",
		"map": [
			[null, "钢锭", null],
			["基础电路板", "熔炉", "加热线圈"],
			[null, "电动马达", null]
		],
		"ingredients": [
			["钢锭", 1],
			["基础电路板", 1],
			["熔炉", 1],
			["加热线圈", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"强化熔炉 - II": {
		"type": "增强型工作台",
		"map": [
			[null, "钢锭", null],
			["基础电路板", "强化熔炉 - I", "加热线圈"],
			[null, "电动马达", null]
		],
		"ingredients": [
			["钢锭", 1],
			["基础电路板", 1],
			["强化熔炉 - I", 1],
			["加热线圈", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"强化熔炉 - III": {
		"type": "增强型工作台",
		"map": [
			[null, "钢锭", null],
			["基础电路板", "强化熔炉 - II", "加热线圈"],
			[null, "电动马达", null]
		],
		"ingredients": [
			["钢锭", 1],
			["基础电路板", 1],
			["强化熔炉 - II", 1],
			["加热线圈", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"强化熔炉 - IV": {
		"type": "增强型工作台",
		"map": [
			[null, "钢锭", null],
			["基础电路板", "强化熔炉 - III", "加热线圈"],
			[null, "电动马达", null]
		],
		"ingredients": [
			["钢锭", 1],
			["基础电路板", 1],
			["强化熔炉 - III", 1],
			["加热线圈", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"强化熔炉 - V": {
		"type": "增强型工作台",
		"map": [
			[null, "钢锭", null],
			["基础电路板", "强化熔炉 - IV", "加热线圈"],
			[null, "电动马达", null]
		],
		"ingredients": [
			["钢锭", 1],
			["基础电路板", 1],
			["强化熔炉 - IV", 1],
			["加热线圈", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"强化熔炉 - VI": {
		"type": "增强型工作台",
		"map": [
			[null, "钢锭", null],
			["基础电路板", "强化熔炉 - V", "加热线圈"],
			[null, "电动马达", null]
		],
		"ingredients": [
			["钢锭", 1],
			["基础电路板", 1],
			["强化熔炉 - V", 1],
			["加热线圈", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"强化熔炉 - VII": {
		"type": "增强型工作台",
		"map": [
			[null, "钢锭", null],
			["基础电路板", "强化熔炉 - VI", "加热线圈"],
			[null, "电动马达", null]
		],
		"ingredients": [
			["钢锭", 1],
			["基础电路板", 1],
			["强化熔炉 - VI", 1],
			["加热线圈", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"强化熔炉 - VIII": {
		"type": "增强型工作台",
		"map": [
			[null, "钢锭", null],
			["基础电路板", "强化熔炉 - VII", "加热线圈"],
			[null, "电动马达", null]
		],
		"ingredients": [
			["钢锭", 1],
			["基础电路板", 1],
			["强化熔炉 - VII", 1],
			["加热线圈", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"强化熔炉 - IX": {
		"type": "增强型工作台",
		"map": [
			[null, "钢锭", null],
			["基础电路板", "强化熔炉 - VIII", "加热线圈"],
			[null, "电动马达", null]
		],
		"ingredients": [
			["钢锭", 1],
			["基础电路板", 1],
			["强化熔炉 - VIII", 1],
			["加热线圈", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"强化熔炉 - X": {
		"type": "增强型工作台",
		"map": [
			[null, "钢锭", null],
			["基础电路板", "强化熔炉 - IX", "加热线圈"],
			[null, "电动马达", null]
		],
		"ingredients": [
			["钢锭", 1],
			["基础电路板", 1],
			["强化熔炉 - IX", 1],
			["加热线圈", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"强化熔炉 - XI": {
		"type": "增强型工作台",
		"map": [
			[null, "钢锭", null],
			["基础电路板", "强化熔炉 - X", "加热线圈"],
			[null, "电动马达", null]
		],
		"ingredients": [
			["钢锭", 1],
			["基础电路板", 1],
			["强化熔炉 - X", 1],
			["加热线圈", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"强化合金熔炉": {
		"type": "增强型工作台",
		"map": [
			["强化合金锭", "基础电路板", "强化合金锭"],
			["加热线圈", "强化熔炉 - XI", "加热线圈"],
			["强化合金锭", "电动马达", "强化合金锭"]
		],
		"ingredients": [
			["强化合金锭", 4],
			["基础电路板", 1],
			["加热线圈", 2],
			["强化熔炉 - XI", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"黑金刚石镶边熔炉": {
		"type": "增强型工作台",
		"map": [
			["黑金刚石", "基础电路板", "黑金刚石"],
			["加热线圈", "强化合金熔炉", "加热线圈"],
			["黑金刚石", "电动马达", "黑金刚石"]
		],
		"ingredients": [
			["黑金刚石", 4],
			["基础电路板", 1],
			["加热线圈", 2],
			["强化合金熔炉", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"电磁铁": {
		"type": "增强型工作台",
		"map": [
			["镍锭", "磁铁", "钴锭"],
			[null, "电池", null],
			[null, null, null]
		],
		"ingredients": [
			["镍锭", 1],
			["磁铁", 1],
			["钴锭", 1],
			["电池", 1]
		],
		"count": 1
	},
	"电动马达": {
		"type": "增强型工作台",
		"map": [
			["铜线", "铜线", "铜线"],
			[null, "电磁铁", null],
			["铜线", "铜线", "铜线"]
		],
		"ingredients": [
			["铜线", 6],
			["电磁铁", 1]
		],
		"count": 1
	},
	"加热线圈": {
		"type": "增强型工作台",
		"map": [
			["铜线", "铜线", "铜线"],
			["铜线", "电动马达", "铜线"],
			["铜线", "铜线", "铜线"]
		],
		"ingredients": [
			["铜线", 8],
			["电动马达", 1]
		],
		"count": 1
	},
	"铜线": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			["铜锭", "铜锭", "铜锭"],
			[null, null, null]
		],
		"ingredients": [
			["铜锭", 3]
		],
		"count": 8
	},
	"方块放置机": {
		"type": "增强型工作台",
		"map": [
			["金锭 (4克拉)", "活塞", "金锭 (4克拉)"],
			["铁锭", "电动马达", "铁锭"],
			["金锭 (4克拉)", "活塞", "金锭 (4克拉)"]
		],
		"ingredients": [
			["金锭 (4克拉)", 4],
			["活塞", 2],
			["铁锭", 2],
			["电动马达", 1]
		],
		"count": 1
	},
	"维度传送卷轴": {
		"type": "魔法工作台",
		"map": [
			[null, "末影结晶 - III", "魔法末影之眼"],
			["末影结晶 - III", "魔法书皮", "末影结晶 - III"],
			["魔法末影之眼", "末影结晶 - III", null]
		],
		"ingredients": [
			["末影结晶 - III", 4],
			["魔法末影之眼", 2],
			["魔法书皮", 1]
		],
		"count": 1
	},
	"爆裂之弓": {
		"type": "魔法工作台",
		"map": [
			[null, "木棍", "火药"],
			["元素法杖 - 火", null, "硫酸盐"],
			[null, "木棍", "火药"]
		],
		"ingredients": [
			["木棍", 2],
			["火药", 2],
			["元素法杖 - 火", 1],
			["硫酸盐", 1]
		],
		"count": 1
	},
	"冰封之弓": {
		"type": "魔法工作台",
		"map": [
			[null, "木棍", "冰"],
			["元素法杖 - 水", null, "浮冰"],
			[null, "木棍", "冰"]
		],
		"ingredients": [
			["木棍", 2],
			["冰", 2],
			["元素法杖 - 水", 1],
			["浮冰", 1]
		],
		"count": 1
	},
	"学识巨著": {
		"type": "魔法工作台",
		"map": [
			[null, "羽毛", null],
			["墨囊", "魔法书皮", "玻璃瓶"],
			[null, "书与笔", null]
		],
		"ingredients": [
			["羽毛", 1],
			["墨囊", 1],
			["魔法书皮", 1],
			["玻璃瓶", 1],
			["书与笔", 1]
		],
		"count": 1
	},
	"学识之瓶": {
		"type": "魔法工作台",
		"map": [
			[null, null, null],
			["魔法结晶 - II", "玻璃板", "魔法结晶 - II"],
			[null, "魔法结晶 - II", null]
		],
		"ingredients": [
			["魔法结晶 - II", 3],
			["玻璃板", 1]
		],
		"count": 8
	},
	"Birthday Cake": {
		"type": "增强型工作台",
		"map": [
			[null, "火把", null],
			["糖", "蛋糕", "糖"],
			[null, null, null]
		],
		"ingredients": [
			["火把", 1],
			["糖", 2],
			["蛋糕", 1]
		],
		"count": 1
	},
	"一杯牛奶": {
		"type": "增强型工作台",
		"map": [
			["奶桶", "玻璃瓶", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["奶桶", 1],
			["玻璃瓶", 1]
		],
		"count": 4
	},
	"巧克力牛奶": {
		"type": "增强型工作台",
		"map": [
			["一杯牛奶", "可可豆", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["一杯牛奶", 1],
			["可可豆", 1]
		],
		"count": 2
	},
	"蛋酒": {
		"type": "增强型工作台",
		"map": [
			["一杯牛奶", "鸡蛋", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["一杯牛奶", 1],
			["鸡蛋", 1]
		],
		"count": 2
	},
	"苹果酒": {
		"type": "增强型工作台",
		"map": [
			["苹果汁", "糖", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["苹果汁", 1],
			["糖", 1]
		],
		"count": 2
	},
	"圣诞曲奇": {
		"type": "增强型工作台",
		"map": [
			["曲奇", "糖", "黄绿色染料"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["曲奇", 1],
			["糖", 1],
			["黄绿色染料", 1]
		],
		"count": 16
	},
	"水果蛋糕": {
		"type": "增强型工作台",
		"map": [
			["鸡蛋", "苹果", "西瓜"],
			["糖", null, null],
			[null, null, null]
		],
		"ingredients": [
			["鸡蛋", 1],
			["苹果", 1],
			["西瓜", 1],
			["糖", 1]
		],
		"count": 4
	},
	"苹果派": {
		"type": "增强型工作台",
		"map": [
			["糖", "苹果", "鸡蛋"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["糖", 1],
			["苹果", 1],
			["鸡蛋", 1]
		],
		"count": 2
	},
	"热可可": {
		"type": "冶炼炉",
		"map": [
			["巧克力牛奶", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["巧克力牛奶", 1]
		],
		"count": 1
	},
	"圣诞蛋糕": {
		"type": "增强型工作台",
		"map": [
			["鸡蛋", "糖", "小麦粉"],
			["奶桶", null, null],
			[null, null, null]
		],
		"ingredients": [
			["鸡蛋", 1],
			["糖", 1],
			["小麦粉", 1],
			["奶桶", 1]
		],
		"count": 4
	},
	"焦糖": {
		"type": "冶炼炉",
		"map": [
			["糖", "糖", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["糖", 2]
		],
		"count": 4
	},
	"焦糖苹果": {
		"type": "增强型工作台",
		"map": [
			[null, "焦糖", null],
			[null, "苹果", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["焦糖", 1],
			["苹果", 1],
			["木棍", 1]
		],
		"count": 2
	},
	"巧克力苹果": {
		"type": "增强型工作台",
		"map": [
			[null, "可可豆", null],
			[null, "苹果", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["可可豆", 1],
			["苹果", 1],
			["木棍", 1]
		],
		"count": 2
	},
	"圣诞礼物": {
		"type": "魔法工作台",
		"map": [
			[null, "命名牌", null],
			["红色羊毛", "绿色羊毛", "红色羊毛"],
			["红色羊毛", "绿色羊毛", "红色羊毛"]
		],
		"ingredients": [
			["命名牌", 1],
			["红色羊毛", 4],
			["绿色羊毛", 2]
		],
		"count": 1
	},
	"胡萝卜派": {
		"type": "增强型工作台",
		"map": [
			["糖", "胡萝卜", "鸡蛋"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["糖", 1],
			["胡萝卜", 1],
			["鸡蛋", 1]
		],
		"count": 2
	},
	"苹果派": {
		"type": "增强型工作台",
		"map": [
			["糖", "苹果", "鸡蛋"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["糖", 1],
			["苹果", 1],
			["鸡蛋", 1]
		],
		"count": 2
	},
	"复活节彩蛋": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			["黄绿色染料", "鸡蛋", "紫色染料"],
			[null, null, null]
		],
		"ingredients": [
			["黄绿色染料", 1],
			["鸡蛋", 1],
			["紫色染料", 1]
		],
		"count": 2
	},
	"钢筋板": {
		"type": "压缩机",
		"map": [
			["强化合金锭", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["强化合金锭", 1]
		],
		"count": 1
	},
	"钢化玻璃": {
		"type": "增强型工作台",
		"map": [
			["玻璃", "玻璃", "玻璃"],
			["玻璃", "钢筋板", "玻璃"],
			["玻璃", "玻璃", "玻璃"]
		],
		"ingredients": [
			["玻璃", 8],
			["钢筋板", 1]
		],
		"count": 16
	},
	"冷却装置": {
		"type": "增强型工作台",
		"map": [
			["冰", "冰", "冰"],
			["铝锭", "电动马达", "铝锭"],
			["冰", "冰", "冰"]
		],
		"ingredients": [
			["冰", 6],
			["铝锭", 2],
			["电动马达", 1]
		],
		"count": 1
	},
	"小冰柜": {
		"type": "增强型工作台",
		"map": [
			["布", "布", "布"],
			["铝锭", "冷却装置", "铝锭"],
			["铝锭", "铝锭", "铝锭"]
		],
		"ingredients": [
			["布", 3],
			["铝锭", 5],
			["冷却装置", 1]
		],
		"count": 1
	},
	"防凋灵黑曜石": {
		"type": "增强型工作台",
		"map": [
			["铅锭", "黑曜石", "铅锭"],
			["黑曜石", "钢化玻璃", "黑曜石"],
			["铅锭", "黑曜石", "铅锭"]
		],
		"ingredients": [
			["铅锭", 4],
			["黑曜石", 4],
			["钢化玻璃", 1]
		],
		"count": 4
	},
	"古代基座": {
		"type": "魔法工作台",
		"map": [
			["黑曜石", "金锭 (8克拉)", "黑曜石"],
			[null, "石头", null],
			["黑曜石", "金锭 (8克拉)", "黑曜石"]
		],
		"ingredients": [
			["黑曜石", 4],
			["金锭 (8克拉)", 2],
			["石头", 1]
		],
		"count": 4
	},
	"古代祭坛": {
		"type": "魔法工作台",
		"map": [
			[null, "附魔台", null],
			["魔法结晶 - III", "金锭 (8克拉)", "魔法结晶 - III"],
			["黑曜石", "金锭 (8克拉)", "黑曜石"]
		],
		"ingredients": [
			["附魔台", 1],
			["魔法结晶 - III", 2],
			["金锭 (8克拉)", 2],
			["黑曜石", 2]
		],
		"count": 1
	},
	"能源调节器": {
		"type": "增强型工作台",
		"map": [
			["银锭", "大马士革钢锭", "银锭"],
			["大马士革钢锭", "电动马达", "大马士革钢锭"],
			["银锭", "大马士革钢锭", "银锭"]
		],
		"ingredients": [
			["银锭", 4],
			["大马士革钢锭", 4],
			["电动马达", 1]
		],
		"count": 1
	},
	"能源连接器": {
		"type": "增强型工作台",
		"map": [
			["碳", "铜线", "碳"],
			["铜线", "红石块", "铜线"],
			["碳", "铜线", "碳"]
		],
		"ingredients": [
			["碳", 4],
			["铜线", 4],
			["红石块", 1]
		],
		"count": 8
	},
	"强力胶布": {
		"type": "增强型工作台",
		"map": [
			["铝粉", "铝粉", "铝粉"],
			["黏液球", "白色羊毛", "黏液球"],
			["纸", "纸", "纸"]
		],
		"ingredients": [
			["铝粉", 3],
			["黏液球", 2],
			["白色羊毛", 1],
			["纸", 3]
		],
		"count": 2
	},
	"小型储能电容": {
		"type": "增强型工作台",
		"map": [
			["硬铝锭", "硫酸盐", "硬铝锭"],
			["红石合金锭", "能源连接器", "红石合金锭"],
			["硬铝锭", "红石粉", "硬铝锭"]
		],
		"ingredients": [
			["硬铝锭", 4],
			["硫酸盐", 1],
			["红石合金锭", 2],
			["能源连接器", 1],
			["红石粉", 1]
		],
		"count": 1
	},
	"中型储能电容": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "红石合金锭", "银铜合金锭"],
			["红石粉", "小型储能电容", "红石粉"],
			["银铜合金锭", "红石合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 4],
			["红石合金锭", 2],
			["红石粉", 2],
			["小型储能电容", 1]
		],
		"count": 1
	},
	"大型储能电容": {
		"type": "增强型工作台",
		"map": [
			["钢锭", "红石合金锭", "钢锭"],
			["红石粉", "中型储能电容", "红石粉"],
			["钢锭", "红石合金锭", "钢锭"]
		],
		"ingredients": [
			["钢锭", 4],
			["红石合金锭", 2],
			["红石粉", 2],
			["中型储能电容", 1]
		],
		"count": 1
	},
	"巨型储能电容": {
		"type": "增强型工作台",
		"map": [
			["强化合金锭", "红石合金锭", "强化合金锭"],
			["红石粉", "大型储能电容", "红石粉"],
			["强化合金锭", "红石合金锭", "强化合金锭"]
		],
		"ingredients": [
			["强化合金锭", 4],
			["红石合金锭", 2],
			["红石粉", 2],
			["大型储能电容", 1]
		],
		"count": 1
	},
	"黑金刚石镶边储能电容": {
		"type": "增强型工作台",
		"map": [
			["黑金刚石", "红石合金锭", "黑金刚石"],
			["红石粉", "巨型储能电容", "红石粉"],
			["黑金刚石", "红石合金锭", "黑金刚石"]
		],
		"ingredients": [
			["黑金刚石", 4],
			["红石合金锭", 2],
			["红石粉", 2],
			["巨型储能电容", 1]
		],
		"count": 1
	},
	"终极储能电容": {
		"type": "增强型工作台",
		"map": [
			["黑金刚石", "红石合金锭", "黑金刚石"],
			["下界之星", "黑金刚石镶边储能电容", "下界之星"],
			["黑金刚石", "红石合金锭", "黑金刚石"]
		],
		"ingredients": [
			["黑金刚石", 4],
			["红石合金锭", 2],
			["下界之星", 2],
			["黑金刚石镶边储能电容", 1]
		],
		"count": 1
	},
	"太阳能发电机": {
		"type": "增强型工作台",
		"map": [
			["光伏电池", "光伏电池", "光伏电池"],
			["铝锭", "电动马达", "铝锭"],
			[null, "铝锭", null]
		],
		"ingredients": [
			["光伏电池", 3],
			["铝锭", 3],
			["电动马达", 1]
		],
		"count": 1
	},
	"高级太阳能发电机": {
		"type": "增强型工作台",
		"map": [
			["太阳能发电机", "铝锭", "太阳能发电机"],
			["铝锭", "红石粉", "铝锭"],
			["太阳能发电机", "铝锭", "太阳能发电机"]
		],
		"ingredients": [
			["太阳能发电机", 4],
			["铝锭", 4],
			["红石粉", 1]
		],
		"count": 1
	},
	"黑金刚石太阳能发电机": {
		"type": "增强型工作台",
		"map": [
			["高级太阳能发电机", "铝锭", "高级太阳能发电机"],
			["铝锭", "黑金刚石", "铝锭"],
			["高级太阳能发电机", "铝锭", "高级太阳能发电机"]
		],
		"ingredients": [
			["高级太阳能发电机", 4],
			["铝锭", 4],
			["黑金刚石", 1]
		],
		"count": 1
	},
	"充能太阳能发电机": {
		"type": "增强型工作台",
		"map": [
			["黑金刚石太阳能发电机", "起泡锭", "黑金刚石太阳能发电机"],
			["起泡锭", "电磁铁", "起泡锭"],
			["黑金刚石太阳能发电机", "起泡锭", "黑金刚石太阳能发电机"]
		],
		"ingredients": [
			["黑金刚石太阳能发电机", 4],
			["起泡锭", 4],
			["电磁铁", 1]
		],
		"count": 1
	},
	"充电台": {
		"type": "增强型工作台",
		"map": [
			[null, "电磁铁", null],
			["电池", "工作台", "电池"],
			[null, "小型储能电容", null]
		],
		"ingredients": [
			["电磁铁", 1],
			["电池", 2],
			["工作台", 1],
			["小型储能电容", 1]
		],
		"count": 1
	},
	"电炉": {
		"type": "增强型工作台",
		"map": [
			[null, "熔炉", null],
			["镀金铁锭", "加热线圈", "镀金铁锭"],
			["镀金铁锭", "电动马达", "镀金铁锭"]
		],
		"ingredients": [
			["熔炉", 1],
			["镀金铁锭", 4],
			["加热线圈", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"电炉 - II": {
		"type": "增强型工作台",
		"map": [
			[null, "电动马达", null],
			["镀金铁锭", "电炉", "镀金铁锭"],
			["镀金铁锭", "加热线圈", "镀金铁锭"]
		],
		"ingredients": [
			["电动马达", 1],
			["镀金铁锭", 4],
			["电炉", 1],
			["加热线圈", 1]
		],
		"count": 1
	},
	"电炉 - III": {
		"type": "增强型工作台",
		"map": [
			[null, "电动马达", null],
			["钢锭", "电炉 - II", "钢锭"],
			["镀金铁锭", "加热线圈", "镀金铁锭"]
		],
		"ingredients": [
			["电动马达", 1],
			["钢锭", 2],
			["电炉 - II", 1],
			["镀金铁锭", 2],
			["加热线圈", 1]
		],
		"count": 1
	},
	"电动淘金机": {
		"type": "增强型工作台",
		"map": [
			[null, "淘金盘", null],
			["燧石", "电动马达", "燧石"],
			["铝锭", "铝锭", "铝锭"]
		],
		"ingredients": [
			["淘金盘", 1],
			["燧石", 2],
			["电动马达", 1],
			["铝锭", 3]
		],
		"count": 1
	},
	"电动淘金机 (II)": {
		"type": "增强型工作台",
		"map": [
			[null, "淘金盘", null],
			["铁锭", "电动淘金机", "铁锭"],
			["硬铝锭", "硬铝锭", "硬铝锭"]
		],
		"ingredients": [
			["淘金盘", 1],
			["铁锭", 2],
			["电动淘金机", 1],
			["硬铝锭", 3]
		],
		"count": 1
	},
	"电动淘金机 (III)": {
		"type": "增强型工作台",
		"map": [
			[null, "淘金盘", null],
			["电动马达", "电动淘金机 (II)", "电动马达"],
			["钴锭", "起泡锭", "钴锭"]
		],
		"ingredients": [
			["淘金盘", 1],
			["电动马达", 2],
			["电动淘金机 (II)", 1],
			["钴锭", 2],
			["起泡锭", 1]
		],
		"count": 1
	},
	"电动洗矿机": {
		"type": "增强型工作台",
		"map": [
			[null, "水桶", null],
			["电磁铁", "电动淘金机", "电磁铁"],
			["铜锭", "铜锭", "铜锭"]
		],
		"ingredients": [
			["水桶", 1],
			["电磁铁", 2],
			["电动淘金机", 1],
			["铜锭", 3]
		],
		"count": 1
	},
	"电动洗矿机 (II)": {
		"type": "增强型工作台",
		"map": [
			[null, "水桶", null],
			["电磁铁", "电动洗矿机", "电磁铁"],
			["大马士革钢锭", "大马士革钢锭", "大马士革钢锭"]
		],
		"ingredients": [
			["水桶", 1],
			["电磁铁", 2],
			["电动洗矿机", 1],
			["大马士革钢锭", 3]
		],
		"count": 1
	},
	"电动洗矿机 (III)": {
		"type": "增强型工作台",
		"map": [
			[null, "水桶", null],
			["电磁铁", "电动洗矿机 (II)", "电磁铁"],
			["科林斯青铜锭", "起泡锭", "科林斯青铜锭"]
		],
		"ingredients": [
			["水桶", 1],
			["电磁铁", 2],
			["电动洗矿机 (II)", 1],
			["科林斯青铜锭", 2],
			["起泡锭", 1]
		],
		"count": 1
	},
	"电动铸锭机": {
		"type": "增强型工作台",
		"map": [
			[null, "打火石", null],
			["加热线圈", "电动洗矿机", "加热线圈"],
			["大马士革钢锭", "电动马达", "大马士革钢锭"]
		],
		"ingredients": [
			["打火石", 1],
			["加热线圈", 2],
			["电动洗矿机", 1],
			["大马士革钢锭", 2],
			["电动马达", 1]
		],
		"count": 1
	},
	"电动铸锭机 (II)": {
		"type": "增强型工作台",
		"map": [
			["镀金铁锭", "打火石", "镀金铁锭"],
			["加热线圈", "电动铸锭机", "加热线圈"],
			["黄铜锭", "电动马达", "黄铜锭"]
		],
		"ingredients": [
			["镀金铁锭", 2],
			["打火石", 1],
			["加热线圈", 2],
			["电动铸锭机", 1],
			["黄铜锭", 2],
			["电动马达", 1]
		],
		"count": 1
	},
	"电动铸锭机 (III)": {
		"type": "增强型工作台",
		"map": [
			["镀金铁锭", "打火石", "镀金铁锭"],
			["加热线圈", "电动铸锭机 (II)", "加热线圈"],
			["黄铜锭", "起泡锭", "黄铜锭"]
		],
		"ingredients": [
			["镀金铁锭", 2],
			["打火石", 1],
			["加热线圈", 2],
			["电动铸锭机 (II)", 1],
			["黄铜锭", 2],
			["起泡锭", 1]
		],
		"count": 1
	},
	"电动坩埚": {
		"type": "增强型工作台",
		"map": [
			["铅锭", "坩埚", "铅锭"],
			["大马士革钢锭", "加热线圈", "大马士革钢锭"],
			["铅锭", "巨型储能电容", "铅锭"]
		],
		"ingredients": [
			["铅锭", 4],
			["坩埚", 1],
			["大马士革钢锭", 2],
			["加热线圈", 1],
			["巨型储能电容", 1]
		],
		"count": 1
	},
	"电动坩埚 - II": {
		"type": "增强型工作台",
		"map": [
			["科林斯青铜锭", "电动坩埚", "科林斯青铜锭"],
			["大马士革钢锭", "电动马达", "大马士革钢锭"],
			["铅锭", "加热线圈", "铅锭"]
		],
		"ingredients": [
			["科林斯青铜锭", 2],
			["电动坩埚", 1],
			["大马士革钢锭", 2],
			["电动马达", 1],
			["铅锭", 2],
			["加热线圈", 1]
		],
		"count": 1
	},
	"电动坩埚 - III": {
		"type": "增强型工作台",
		"map": [
			["科林斯青铜锭", "电动坩埚 - II", "科林斯青铜锭"],
			["钢板", "能量水晶", "钢板"],
			["铅锭", "铅锭", "铅锭"]
		],
		"ingredients": [
			["科林斯青铜锭", 2],
			["电动坩埚 - II", 1],
			["钢板", 2],
			["能量水晶", 1],
			["铅锭", 3]
		],
		"count": 1
	},
	"电力碎矿机": {
		"type": "增强型工作台",
		"map": [
			[null, "钻石镐", null],
			["镀金铁锭", "加热线圈", "镀金铁锭"],
			["镀金铁锭", "电动马达", "镀金铁锭"]
		],
		"ingredients": [
			["钻石镐", 1],
			["镀金铁锭", 4],
			["加热线圈", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"电力碎矿机 (II)": {
		"type": "增强型工作台",
		"map": [
			[null, "钻石镐", null],
			["加热线圈", "电力碎矿机", "加热线圈"],
			["镀金铁锭", "起泡锭", "镀金铁锭"]
		],
		"ingredients": [
			["钻石镐", 1],
			["加热线圈", 2],
			["电力碎矿机", 1],
			["镀金铁锭", 2],
			["起泡锭", 1]
		],
		"count": 1
	},
	"电力碎矿机 (III)": {
		"type": "增强型工作台",
		"map": [
			["钢筋板", "加热线圈", "钢筋板"],
			[null, "电力碎矿机 (II)", null],
			["钢筋板", "起泡锭", "钢筋板"]
		],
		"ingredients": [
			["钢筋板", 4],
			["加热线圈", 1],
			["电力碎矿机 (II)", 1],
			["起泡锭", 1]
		],
		"count": 1
	},
	"加热压力舱": {
		"type": "增强型工作台",
		"map": [
			["铅锭", "电动马达", "铅锭"],
			["铅锭", "玻璃", "铅锭"],
			["铅锭", "加热线圈", "铅锭"]
		],
		"ingredients": [
			["铅锭", 6],
			["电动马达", 1],
			["玻璃", 1],
			["加热线圈", 1]
		],
		"count": 1
	},
	"加热压力舱 - II": {
		"type": "增强型工作台",
		"map": [
			["铅锭", "电动马达", "铅锭"],
			["铅锭", "加热压力舱", "铅锭"],
			["强化合金锭", "加热线圈", "强化合金锭"]
		],
		"ingredients": [
			["铅锭", 4],
			["电动马达", 1],
			["加热压力舱", 1],
			["强化合金锭", 2],
			["加热线圈", 1]
		],
		"count": 1
	},
	"电力打粉机": {
		"type": "增强型工作台",
		"map": [
			[null, "电力碎矿机", null],
			["铅锭", "中型储能电容", "铅锭"],
			["铅锭", "加热线圈", "铅锭"]
		],
		"ingredients": [
			["电力碎矿机", 1],
			["铅锭", 4],
			["中型储能电容", 1],
			["加热线圈", 1]
		],
		"count": 1
	},
	"煤发电机": {
		"type": "增强型工作台",
		"map": [
			["加热线圈", "熔炉", "加热线圈"],
			["镍锭", "电动马达", "镍锭"],
			[null, "镍锭", null]
		],
		"ingredients": [
			["加热线圈", 2],
			["熔炉", 1],
			["镍锭", 3],
			["电动马达", 1]
		],
		"count": 1
	},
	"煤发电机": {
		"type": "增强型工作台",
		"map": [
			["岩浆块", "加热线圈", "岩浆块"],
			["硬化金属", "煤发电机", "硬化金属"],
			[null, "电动马达", null]
		],
		"ingredients": [
			["岩浆块", 2],
			["加热线圈", 1],
			["硬化金属", 2],
			["煤发电机", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"生物发电机": {
		"type": "增强型工作台",
		"map": [
			["加热线圈", "搅拌机", "加热线圈"],
			["铝黄铜锭", "电动马达", "铝黄铜锭"],
			[null, "铝黄铜锭", null]
		],
		"ingredients": [
			["加热线圈", 2],
			["搅拌机", 1],
			["铝黄铜锭", 3],
			["电动马达", 1]
		],
		"count": 1
	},
	"自动烘干机": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			["加热线圈", "烟熏炉", "加热线圈"],
			[null, "营火", null]
		],
		"ingredients": [
			["加热线圈", 2],
			["烟熏炉", 1],
			["营火", 1]
		],
		"count": 1
	},
	"自动酿造机": {
		"type": "增强型工作台",
		"map": [
			[null, "加热线圈", null],
			["钢筋板", "酿造台", "钢筋板"],
			[null, "电动马达", null]
		],
		"ingredients": [
			["加热线圈", 1],
			["钢筋板", 2],
			["酿造台", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"压缩机": {
		"type": "增强型工作台",
		"map": [
			["活塞", "电动马达", "活塞"],
			[null, "中型储能电容", null],
			["大马士革钢锭", "大马士革钢锭", "大马士革钢锭"]
		],
		"ingredients": [
			["活塞", 2],
			["电动马达", 1],
			["中型储能电容", 1],
			["大马士革钢锭", 3]
		],
		"count": 1
	},
	"压缩机 - II": {
		"type": "增强型工作台",
		"map": [
			["黏性活塞", "压缩机", "黏性活塞"],
			["大马士革钢锭", "大型储能电容", "大马士革钢锭"],
			["大马士革钢锭", "大马士革钢锭", "大马士革钢锭"]
		],
		"ingredients": [
			["黏性活塞", 2],
			["压缩机", 1],
			["大马士革钢锭", 5],
			["大型储能电容", 1]
		],
		"count": 1
	},
	"镁盐": {
		"type": "加热压力舱",
		"map": [
			["镁", "盐", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["镁", 1],
			["盐", 1]
		],
		"count": 1
	},
	"镁发电机": {
		"type": "增强型工作台",
		"map": [
			[null, "电动马达", null],
			["压缩碳", "水桶", "压缩碳"],
			["硬铝锭", "硬铝锭", "硬铝锭"]
		],
		"ingredients": [
			["电动马达", 1],
			["压缩碳", 2],
			["水桶", 1],
			["硬铝锭", 3]
		],
		"count": 1
	},
	"自动附魔机": {
		"type": "增强型工作台",
		"map": [
			[null, "附魔台", null],
			["黑金刚石", "电动马达", "黑金刚石"],
			["防凋灵黑曜石", "防凋灵黑曜石", "防凋灵黑曜石"]
		],
		"ingredients": [
			["附魔台", 1],
			["黑金刚石", 2],
			["电动马达", 1],
			["防凋灵黑曜石", 3]
		],
		"count": 1
	},
	"自动附魔机 - II": {
		"type": "增强型工作台",
		"map": [
			["钢筋板", "大型储能电容", "钢筋板"],
			["起泡锭", "自动附魔机", "起泡锭"],
			["防凋灵黑曜石", "人造钻石", "防凋灵黑曜石"]
		],
		"ingredients": [
			["钢筋板", 2],
			["大型储能电容", 1],
			["起泡锭", 2],
			["自动附魔机", 1],
			["防凋灵黑曜石", 2],
			["人造钻石", 1]
		],
		"count": 1
	},
	"自动祛魔机": {
		"type": "增强型工作台",
		"map": [
			["红石粉", "铁砧", "红石粉"],
			["黑金刚石", "自动附魔机", "黑金刚石"],
			["防凋灵黑曜石", "防凋灵黑曜石", "防凋灵黑曜石"]
		],
		"ingredients": [
			["红石粉", 2],
			["铁砧", 1],
			["黑金刚石", 2],
			["自动附魔机", 1],
			["防凋灵黑曜石", 3]
		],
		"count": 1
	},
	"自动祛魔机 - II": {
		"type": "增强型工作台",
		"map": [
			["钢筋板", "铁砧", "钢筋板"],
			["起泡锭", "自动祛魔机", "起泡锭"],
			["防凋灵黑曜石", "大型储能电容", "防凋灵黑曜石"]
		],
		"ingredients": [
			["钢筋板", 2],
			["铁砧", 1],
			["起泡锭", 2],
			["自动祛魔机", 1],
			["防凋灵黑曜石", 2],
			["大型储能电容", 1]
		],
		"count": 1
	},
	"自动铁砧": {
		"type": "增强型工作台",
		"map": [
			[null, "铁砧", null],
			["强化合金锭", "电动马达", "强化合金锭"],
			["铁块", "铁块", "铁块"]
		],
		"ingredients": [
			["铁砧", 1],
			["强化合金锭", 2],
			["电动马达", 1],
			["铁块", 3]
		],
		"count": 1
	},
	"自动铁砧 Mk.II": {
		"type": "增强型工作台",
		"map": [
			[null, "自动铁砧", null],
			["钢板", "加热线圈", "钢板"],
			["铁块", "铁块", "铁块"]
		],
		"ingredients": [
			["自动铁砧", 1],
			["钢板", 2],
			["加热线圈", 1],
			["铁块", 3]
		],
		"count": 1
	},
	"附魔书整合机": {
		"type": "增强型工作台",
		"map": [
			[null, "附魔台", null],
			["书架", "硬化金属", "书架"],
			["人造蓝宝石", "小型储能电容", "人造蓝宝石"]
		],
		"ingredients": [
			["附魔台", 1],
			["书架", 2],
			["硬化金属", 1],
			["人造蓝宝石", 2],
			["小型储能电容", 1]
		],
		"count": 1
	},
	"万用表": {
		"type": "增强型工作台",
		"map": [
			["铜锭", null, "铜锭"],
			[null, "红石合金锭", null],
			[null, "金锭 (6克拉)", null]
		],
		"ingredients": [
			["铜锭", 2],
			["红石合金锭", 1],
			["金锭 (6克拉)", 1]
		],
		"count": 1
	},
	"塑料纸": {
		"type": "加热压力舱",
		"map": [
			[null, null, null],
			[null, "原油桶", null],
			[null, null, null]
		],
		"ingredients": [
			["原油桶", 1]
		],
		"count": 8
	},
	"机器人内存核心": {
		"type": "增强型工作台",
		"map": [
			["黄铜锭", "橙色染色玻璃", "黄铜锭"],
			["能量水晶", "锡粉", "能量水晶"],
			["黄铜锭", "橙色染色玻璃", "黄铜锭"]
		],
		"ingredients": [
			["黄铜锭", 4],
			["橙色染色玻璃", 2],
			["能量水晶", 2],
			["锡粉", 1]
		],
		"count": 1
	},
	"GPS 发射器": {
		"type": "增强型工作台",
		"map": [
			[null, null, "电磁铁"],
			["钢锭", "高级电路板", "钢锭"],
			["钢锭", "电动马达", "钢锭"]
		],
		"ingredients": [
			["电磁铁", 1],
			["钢锭", 4],
			["高级电路板", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"高级 GPS 发射器": {
		"type": "增强型工作台",
		"map": [
			["GPS 发射器", "青铜锭", "GPS 发射器"],
			["青铜锭", "碳", "青铜锭"],
			["GPS 发射器", "青铜锭", "GPS 发射器"]
		],
		"ingredients": [
			["GPS 发射器", 4],
			["青铜锭", 4],
			["碳", 1]
		],
		"count": 1
	},
	"黑金刚石 GPS 发射器": {
		"type": "增强型工作台",
		"map": [
			["高级 GPS 发射器", "科林斯青铜锭", "高级 GPS 发射器"],
			["科林斯青铜锭", "黑金刚石", "科林斯青铜锭"],
			["高级 GPS 发射器", "科林斯青铜锭", "高级 GPS 发射器"]
		],
		"ingredients": [
			["高级 GPS 发射器", 4],
			["科林斯青铜锭", 4],
			["黑金刚石", 1]
		],
		"count": 1
	},
	"充能 GPS 发射器": {
		"type": "增强型工作台",
		"map": [
			["黑金刚石 GPS 发射器", "起泡锭", "黑金刚石 GPS 发射器"],
			["镍锭", "黑金刚石", "镍锭"],
			["黑金刚石 GPS 发射器", "起泡锭", "黑金刚石 GPS 发射器"]
		],
		"ingredients": [
			["黑金刚石 GPS 发射器", 4],
			["起泡锭", 2],
			["镍锭", 2],
			["黑金刚石", 1]
		],
		"count": 1
	},
	"GPS 控制面板": {
		"type": "增强型工作台",
		"map": [
			[null, null, "电磁铁"],
			["钴锭", "高级电路板", "钴锭"],
			["铝黄铜锭", "铝黄铜锭", "铝黄铜锭"]
		],
		"ingredients": [
			["电磁铁", 1],
			["钴锭", 2],
			["高级电路板", 1],
			["铝黄铜锭", 3]
		],
		"count": 1
	},
	"GPS 设置路径点工具": {
		"type": "增强型工作台",
		"map": [
			[null, "电磁铁", null],
			["青金石", "基础电路板", "青金石"],
			["红石粉", "红石合金锭", "红石粉"]
		],
		"ingredients": [
			["电磁铁", 1],
			["青金石", 2],
			["基础电路板", 1],
			["红石粉", 2],
			["红石合金锭", 1]
		],
		"count": 1
	},
	"GPS 应急发射器": {
		"type": "增强型工作台",
		"map": [
			[null, "电磁铁", null],
			[null, "GPS 发射器", null],
			[null, "来世精华", null]
		],
		"ingredients": [
			["电磁铁", 1],
			["GPS 发射器", 1],
			["来世精华", 1]
		],
		"count": 1
	},
	"机器人交互接口 (物品)": {
		"type": "增强型工作台",
		"map": [
			["塑料纸", "钢锭", "塑料纸"],
			["钢锭", "基础电路板", "蓝色染色玻璃"],
			["塑料纸", "钢锭", "塑料纸"]
		],
		"ingredients": [
			["塑料纸", 4],
			["钢锭", 3],
			["基础电路板", 1],
			["蓝色染色玻璃", 1]
		],
		"count": 1
	},
	"机器人交互接口 (燃料)": {
		"type": "增强型工作台",
		"map": [
			["塑料纸", "钢锭", "塑料纸"],
			["红色染色玻璃", "基础电路板", "钢锭"],
			["塑料纸", "钢锭", "塑料纸"]
		],
		"ingredients": [
			["塑料纸", 4],
			["钢锭", 3],
			["红色染色玻璃", 1],
			["基础电路板", 1]
		],
		"count": 1
	},
	"可编程式机器人 (普通)": {
		"type": "增强型工作台",
		"map": [
			["塑料纸", "机器人内存核心", "塑料纸"],
			["煤发电机", "电动马达", "箱子"],
			["塑料纸", "塑料纸", "塑料纸"]
		],
		"ingredients": [
			["塑料纸", 5],
			["机器人内存核心", 1],
			["煤发电机", 1],
			["电动马达", 1],
			["箱子", 1]
		],
		"count": 1
	},
	"可编程式机器人 (矿工)": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			["钻石镐", "可编程式机器人 (普通)", "钻石镐"],
			[null, "电动马达", null]
		],
		"ingredients": [
			["钻石镐", 2],
			["可编程式机器人 (普通)", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"可编程式机器人 (农夫)": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			["钻石锄", "可编程式机器人 (普通)", "钻石锄"],
			[null, "电动马达", null]
		],
		"ingredients": [
			["钻石锄", 2],
			["可编程式机器人 (普通)", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"可编程式机器人 (樵夫)": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			["钻石斧", "可编程式机器人 (普通)", "钻石斧"],
			[null, "电动马达", null]
		],
		"ingredients": [
			["钻石斧", 2],
			["可编程式机器人 (普通)", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"可编程式机器人 (渔夫)": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			["钓鱼竿", "可编程式机器人 (普通)", "钓鱼竿"],
			[null, "电动马达", null]
		],
		"ingredients": [
			["钓鱼竿", 2],
			["可编程式机器人 (普通)", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"可编程式机器人 (屠夫)": {
		"type": "增强型工作台",
		"map": [
			[null, "GPS 发射器", null],
			["钻石剑", "可编程式机器人 (普通)", "钻石剑"],
			[null, "电动马达", null]
		],
		"ingredients": [
			["GPS 发射器", 1],
			["钻石剑", 2],
			["可编程式机器人 (普通)", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"高级可编程式机器人 (普通)": {
		"type": "增强型工作台",
		"map": [
			["塑料纸", "机器人内存核心", "塑料纸"],
			["燃烧反应机", "可编程式机器人 (普通)", "箱子"],
			["塑料纸", "能量水晶", "塑料纸"]
		],
		"ingredients": [
			["塑料纸", 4],
			["机器人内存核心", 1],
			["燃烧反应机", 1],
			["可编程式机器人 (普通)", 1],
			["箱子", 1],
			["能量水晶", 1]
		],
		"count": 1
	},
	"高级可编程式机器人 (渔夫)": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			["钓鱼竿", "高级可编程式机器人 (普通)", "钓鱼竿"],
			[null, "电动马达", null]
		],
		"ingredients": [
			["钓鱼竿", 2],
			["高级可编程式机器人 (普通)", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"高级可编程式机器人 (屠夫)": {
		"type": "增强型工作台",
		"map": [
			[null, "GPS 发射器", null],
			["钻石剑", "高级可编程式机器人 (普通)", "钻石剑"],
			[null, "电动马达", null]
		],
		"ingredients": [
			["GPS 发射器", 1],
			["钻石剑", 2],
			["高级可编程式机器人 (普通)", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"高级可编程式机器人 (农夫)": {
		"type": "增强型工作台",
		"map": [
			[null, "GPS 发射器", null],
			["钻石锄", "高级可编程式机器人 (普通)", "钻石锄"],
			[null, "电动马达", null]
		],
		"ingredients": [
			["GPS 发射器", 1],
			["钻石锄", 2],
			["高级可编程式机器人 (普通)", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"可授权式可编程式机器人 (普通)": {
		"type": "增强型工作台",
		"map": [
			["塑料纸", "机器人内存核心", "塑料纸"],
			["核反应堆", "高级可编程式机器人 (普通)", "箱子"],
			["起泡锭", "能量水晶", "起泡锭"]
		],
		"ingredients": [
			["塑料纸", 2],
			["机器人内存核心", 1],
			["核反应堆", 1],
			["高级可编程式机器人 (普通)", 1],
			["箱子", 1],
			["起泡锭", 2],
			["能量水晶", 1]
		],
		"count": 1
	},
	"可授权式可编程式机器人 (渔夫)": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			["钓鱼竿", "可授权式可编程式机器人 (普通)", "钓鱼竿"],
			[null, "电动马达", null]
		],
		"ingredients": [
			["钓鱼竿", 2],
			["可授权式可编程式机器人 (普通)", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"可授权式可编程式机器人 (屠夫)": {
		"type": "增强型工作台",
		"map": [
			[null, "黑金刚石 GPS 发射器", null],
			["钻石剑", "可授权式可编程式机器人 (普通)", "钻石剑"],
			[null, "电动马达", null]
		],
		"ingredients": [
			["黑金刚石 GPS 发射器", 1],
			["钻石剑", 2],
			["可授权式可编程式机器人 (普通)", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"空白符文": {
		"type": "古代祭坛",
		"map": [
			["石头", "魔法结晶 - I", "石头"],
			["魔法结晶 - I", "黑曜石", "魔法结晶 - I"],
			["石头", "魔法结晶 - I", "石头"]
		],
		"ingredients": [
			["石头", 4],
			["魔法结晶 - I", 4],
			["黑曜石", 1]
		],
		"count": 1
	},
	"古代符文 [气]": {
		"type": "古代祭坛",
		"map": [
			["羽毛", "魔法结晶 - I", "羽毛"],
			["恶魂之泪", "空白符文", "恶魂之泪"],
			["羽毛", "魔法结晶 - I", "羽毛"]
		],
		"ingredients": [
			["羽毛", 4],
			["魔法结晶 - I", 2],
			["恶魂之泪", 2],
			["空白符文", 1]
		],
		"count": 4
	},
	"古代符文 [地]": {
		"type": "古代祭坛",
		"map": [
			["泥土", "魔法结晶 - I", "石头"],
			["黑曜石", "空白符文", "黑曜石"],
			["石头", "魔法结晶 - I", "泥土"]
		],
		"ingredients": [
			["泥土", 2],
			["魔法结晶 - I", 2],
			["石头", 2],
			["黑曜石", 2],
			["空白符文", 1]
		],
		"count": 4
	},
	"古代符文 [火]": {
		"type": "古代祭坛",
		"map": [
			["火焰弹", "魔法结晶 - II", "火焰弹"],
			["烈焰粉", "古代符文 [地]", "打火石"],
			["火焰弹", "魔法结晶 - II", "火焰弹"]
		],
		"ingredients": [
			["火焰弹", 4],
			["魔法结晶 - II", 2],
			["烈焰粉", 1],
			["古代符文 [地]", 1],
			["打火石", 1]
		],
		"count": 4
	},
	"古代符文 [水]": {
		"type": "古代祭坛",
		"map": [
			["生鲑鱼", "魔法结晶 - II", "水桶"],
			["沙子", "空白符文", "沙子"],
			["水桶", "魔法结晶 - II", "生鳕鱼"]
		],
		"ingredients": [
			["生鲑鱼", 1],
			["魔法结晶 - II", 2],
			["水桶", 2],
			["沙子", 2],
			["空白符文", 1],
			["生鳕鱼", 1]
		],
		"count": 4
	},
	"古代符文 [末影]": {
		"type": "古代祭坛",
		"map": [
			["末影珍珠", "末影结晶 - III", "末影珍珠"],
			["末影之眼", "空白符文", "末影之眼"],
			["末影珍珠", "末影结晶 - III", "末影珍珠"]
		],
		"ingredients": [
			["末影珍珠", 4],
			["末影结晶 - III", 2],
			["末影之眼", 2],
			["空白符文", 1]
		],
		"count": 6
	},
	"古代符文 [雷]": {
		"type": "古代祭坛",
		"map": [
			["铁锭", "魔法结晶 - III", "铁锭"],
			["古代符文 [气]", "幻翼膜", "古代符文 [水]"],
			["铁锭", "魔法结晶 - III", "铁锭"]
		],
		"ingredients": [
			["铁锭", 4],
			["魔法结晶 - III", 2],
			["古代符文 [气]", 1],
			["幻翼膜", 1],
			["古代符文 [水]", 1]
		],
		"count": 4
	},
	"古代符文 [虹]": {
		"type": "古代祭坛",
		"map": [
			["红色染料", "魔法结晶 - III", "青色染料"],
			["白色羊毛", "古代符文 [末影]", "白色羊毛"],
			["黄色染料", "末影结晶 - III", "品红色染料"]
		],
		"ingredients": [
			["红色染料", 1],
			["魔法结晶 - III", 1],
			["青色染料", 1],
			["白色羊毛", 2],
			["古代符文 [末影]", 1],
			["黄色染料", 1],
			["末影结晶 - III", 1],
			["品红色染料", 1]
		],
		"count": 1
	},
	"古代符文 [灵魂绑定]": {
		"type": "古代祭坛",
		"map": [
			["魔法结晶 - III", "来世精华", "魔法结晶 - III"],
			["末影结晶 - III", "古代符文 [末影]", "末影结晶 - III"],
			["魔法结晶 - III", "来世精华", "魔法结晶 - III"]
		],
		"ingredients": [
			["魔法结晶 - III", 4],
			["来世精华", 2],
			["末影结晶 - III", 2],
			["古代符文 [末影]", 1]
		],
		"count": 1
	},
	"古代符文 [附魔]": {
		"type": "古代祭坛",
		"map": [
			["魔法结晶 - III", "魔法玻璃", "魔法结晶 - III"],
			["魔法玻璃", "古代符文 [雷]", "魔法玻璃"],
			["魔法结晶 - III", "魔法玻璃", "魔法结晶 - III"]
		],
		"ingredients": [
			["魔法结晶 - III", 4],
			["魔法玻璃", 4],
			["古代符文 [雷]", 1]
		],
		"count": 1
	},
	"地狱骨粉": {
		"type": "古代祭坛",
		"map": [
			["下界疣", "古代符文 [地]", "下界疣"],
			["魔法结晶 - II", "骨粉", "魔法结晶 - II"],
			["下界疣", "烈焰粉", "下界疣"]
		],
		"ingredients": [
			["下界疣", 4],
			["古代符文 [地]", 1],
			["魔法结晶 - II", 2],
			["骨粉", 1],
			["烈焰粉", 1]
		],
		"count": 8
	},
	"鞘翅鳞片": {
		"type": "古代祭坛",
		"map": [
			["末影结晶 - III", "古代符文 [气]", "末影结晶 - III"],
			["幻翼膜", "羽毛", "幻翼膜"],
			["末影结晶 - III", "古代符文 [气]", "末影结晶 - III"]
		],
		"ingredients": [
			["末影结晶 - III", 4],
			["古代符文 [气]", 2],
			["幻翼膜", 2],
			["羽毛", 1]
		],
		"count": 1
	},
	"鞘翅": {
		"type": "古代祭坛",
		"map": [
			["鞘翅鳞片", "古代符文 [气]", "鞘翅鳞片"],
			["古代符文 [气]", "皮革外套", "古代符文 [气]"],
			["鞘翅鳞片", "古代符文 [气]", "鞘翅鳞片"]
		],
		"ingredients": [
			["鞘翅鳞片", 4],
			["古代符文 [气]", 4],
			["皮革外套", 1]
		],
		"count": 1
	},
	"鞘翅 (经验修补)": {
		"type": "古代祭坛",
		"map": [
			["学识之瓶", "鞘翅鳞片", "学识之瓶"],
			["学识之瓶", "鞘翅", "学识之瓶"],
			["学识之瓶", "鞘翅鳞片", "学识之瓶"]
		],
		"ingredients": [
			["学识之瓶", 6],
			["鞘翅鳞片", 2],
			["鞘翅", 1]
		],
		"count": 1
	},
	"鞘翅 (灵魂绑定)": {
		"type": "古代祭坛",
		"map": [
			["学识之瓶", "来世精华", "学识之瓶"],
			["鞘翅鳞片", "鞘翅", "鞘翅鳞片"],
			["学识之瓶", "来世精华", "学识之瓶"]
		],
		"ingredients": [
			["学识之瓶", 4],
			["来世精华", 2],
			["鞘翅鳞片", 2],
			["鞘翅", 1]
		],
		"count": 1
	},
	"三叉戟": {
		"type": "古代祭坛",
		"map": [
			["鹦鹉螺壳", "强化合金锭", "鹦鹉螺壳"],
			["元素法杖 - 水", "钻石剑", "元素法杖 - 水"],
			["魔法结晶 - III", "下界之星", "魔法结晶 - III"]
		],
		"ingredients": [
			["鹦鹉螺壳", 2],
			["强化合金锭", 1],
			["元素法杖 - 水", 2],
			["钻石剑", 1],
			["魔法结晶 - III", 2],
			["下界之星", 1]
		],
		"count": 1
	},
	"不死图腾": {
		"type": "古代祭坛",
		"map": [
			["来世精华", "绿宝石块", "来世精华"],
			["魔法结晶 - III", "普通护身符", "魔法结晶 - III"],
			["来世精华", "绿宝石块", "来世精华"]
		],
		"ingredients": [
			["来世精华", 4],
			["绿宝石块", 2],
			["魔法结晶 - III", 2],
			["普通护身符", 1]
		],
		"count": 1
	},
	"彩虹羊毛": {
		"type": "古代祭坛",
		"map": [
			["白色羊毛", "白色羊毛", "白色羊毛"],
			["白色羊毛", "古代符文 [虹]", "白色羊毛"],
			["白色羊毛", "白色羊毛", "白色羊毛"]
		],
		"ingredients": [
			["白色羊毛", 8],
			["古代符文 [虹]", 1]
		],
		"count": 8
	},
	"彩虹玻璃": {
		"type": "古代祭坛",
		"map": [
			["白色染色玻璃", "白色染色玻璃", "白色染色玻璃"],
			["白色染色玻璃", "古代符文 [虹]", "白色染色玻璃"],
			["白色染色玻璃", "白色染色玻璃", "白色染色玻璃"]
		],
		"ingredients": [
			["白色染色玻璃", 8],
			["古代符文 [虹]", 1]
		],
		"count": 8
	},
	"彩虹玻璃板": {
		"type": "古代祭坛",
		"map": [
			["白色染色玻璃板", "白色染色玻璃板", "白色染色玻璃板"],
			["白色染色玻璃板", "古代符文 [虹]", "白色染色玻璃板"],
			["白色染色玻璃板", "白色染色玻璃板", "白色染色玻璃板"]
		],
		"ingredients": [
			["白色染色玻璃板", 8],
			["古代符文 [虹]", 1]
		],
		"count": 8
	},
	"彩虹粘土块": {
		"type": "古代祭坛",
		"map": [
			["白色陶瓦", "白色陶瓦", "白色陶瓦"],
			["白色陶瓦", "古代符文 [虹]", "白色陶瓦"],
			["白色陶瓦", "白色陶瓦", "白色陶瓦"]
		],
		"ingredients": [
			["白色陶瓦", 8],
			["古代符文 [虹]", 1]
		],
		"count": 8
	},
	"彩虹混凝土": {
		"type": "古代祭坛",
		"map": [
			["白色混凝土", "白色混凝土", "白色混凝土"],
			["白色混凝土", "古代符文 [虹]", "白色混凝土"],
			["白色混凝土", "白色混凝土", "白色混凝土"]
		],
		"ingredients": [
			["白色混凝土", 8],
			["古代符文 [虹]", 1]
		],
		"count": 8
	},
	"彩虹带釉陶瓦": {
		"type": "古代祭坛",
		"map": [
			["白色带釉陶瓦", "白色带釉陶瓦", "白色带釉陶瓦"],
			["白色带釉陶瓦", "古代符文 [虹]", "白色带釉陶瓦"],
			["白色带釉陶瓦", "白色带釉陶瓦", "白色带釉陶瓦"]
		],
		"ingredients": [
			["白色带釉陶瓦", 8],
			["古代符文 [虹]", 1]
		],
		"count": 8
	},
	"彩虹羊毛 (圣诞节版)": {
		"type": "古代祭坛",
		"map": [
			["红色染料", "圣诞曲奇", "绿色染料"],
			["白色羊毛", "古代符文 [虹]", "白色羊毛"],
			["绿色染料", "圣诞曲奇", "红色染料"]
		],
		"ingredients": [
			["红色染料", 2],
			["圣诞曲奇", 2],
			["绿色染料", 2],
			["白色羊毛", 2],
			["古代符文 [虹]", 1]
		],
		"count": 2
	},
	"彩虹玻璃 (圣诞节版)": {
		"type": "古代祭坛",
		"map": [
			["红色染料", "圣诞曲奇", "绿色染料"],
			["白色染色玻璃", "古代符文 [虹]", "白色染色玻璃"],
			["绿色染料", "圣诞曲奇", "红色染料"]
		],
		"ingredients": [
			["红色染料", 2],
			["圣诞曲奇", 2],
			["绿色染料", 2],
			["白色染色玻璃", 2],
			["古代符文 [虹]", 1]
		],
		"count": 2
	},
	"彩虹玻璃板 (圣诞节版)": {
		"type": "古代祭坛",
		"map": [
			["红色染料", "圣诞曲奇", "绿色染料"],
			["白色染色玻璃板", "古代符文 [虹]", "白色染色玻璃板"],
			["绿色染料", "圣诞曲奇", "红色染料"]
		],
		"ingredients": [
			["红色染料", 2],
			["圣诞曲奇", 2],
			["绿色染料", 2],
			["白色染色玻璃板", 2],
			["古代符文 [虹]", 1]
		],
		"count": 2
	},
	"彩虹粘土块 (圣诞节版)": {
		"type": "古代祭坛",
		"map": [
			["红色染料", "圣诞曲奇", "绿色染料"],
			["白色陶瓦", "古代符文 [虹]", "白色陶瓦"],
			["绿色染料", "圣诞曲奇", "红色染料"]
		],
		"ingredients": [
			["红色染料", 2],
			["圣诞曲奇", 2],
			["绿色染料", 2],
			["白色陶瓦", 2],
			["古代符文 [虹]", 1]
		],
		"count": 2
	},
	"彩虹混凝土 (圣诞节版)": {
		"type": "古代祭坛",
		"map": [
			["红色染料", "圣诞曲奇", "绿色染料"],
			["白色混凝土", "古代符文 [虹]", "白色混凝土"],
			["绿色染料", "圣诞曲奇", "红色染料"]
		],
		"ingredients": [
			["红色染料", 2],
			["圣诞曲奇", 2],
			["绿色染料", 2],
			["白色混凝土", 2],
			["古代符文 [虹]", 1]
		],
		"count": 2
	},
	"彩虹带釉陶瓦 (圣诞节版)": {
		"type": "古代祭坛",
		"map": [
			["红色染料", "圣诞曲奇", "绿色染料"],
			["白色带釉陶瓦", "古代符文 [虹]", "白色带釉陶瓦"],
			["绿色染料", "圣诞曲奇", "红色染料"]
		],
		"ingredients": [
			["红色染料", 2],
			["圣诞曲奇", 2],
			["绿色染料", 2],
			["白色带釉陶瓦", 2],
			["古代符文 [虹]", 1]
		],
		"count": 2
	},
	"彩虹羊毛 (情人节版)": {
		"type": "古代祭坛",
		"map": [
			["红色染料", "虞美人", "粉红色染料"],
			["白色羊毛", "古代符文 [虹]", "白色羊毛"],
			["粉红色染料", "虞美人", "红色染料"]
		],
		"ingredients": [
			["红色染料", 2],
			["虞美人", 2],
			["粉红色染料", 2],
			["白色羊毛", 2],
			["古代符文 [虹]", 1]
		],
		"count": 2
	},
	"彩虹玻璃 (情人节版)": {
		"type": "古代祭坛",
		"map": [
			["红色染料", "虞美人", "粉红色染料"],
			["白色染色玻璃", "古代符文 [虹]", "白色染色玻璃"],
			["粉红色染料", "虞美人", "红色染料"]
		],
		"ingredients": [
			["红色染料", 2],
			["虞美人", 2],
			["粉红色染料", 2],
			["白色染色玻璃", 2],
			["古代符文 [虹]", 1]
		],
		"count": 2
	},
	"彩虹玻璃板 (情人节版)": {
		"type": "古代祭坛",
		"map": [
			["红色染料", "虞美人", "粉红色染料"],
			["白色染色玻璃板", "古代符文 [虹]", "白色染色玻璃板"],
			["粉红色染料", "虞美人", "红色染料"]
		],
		"ingredients": [
			["红色染料", 2],
			["虞美人", 2],
			["粉红色染料", 2],
			["白色染色玻璃板", 2],
			["古代符文 [虹]", 1]
		],
		"count": 2
	},
	"彩虹粘土块 (情人节版)": {
		"type": "古代祭坛",
		"map": [
			["红色染料", "虞美人", "粉红色染料"],
			["白色陶瓦", "古代符文 [虹]", "白色陶瓦"],
			["粉红色染料", "虞美人", "红色染料"]
		],
		"ingredients": [
			["红色染料", 2],
			["虞美人", 2],
			["粉红色染料", 2],
			["白色陶瓦", 2],
			["古代符文 [虹]", 1]
		],
		"count": 2
	},
	"彩虹混凝土 (情人节版)": {
		"type": "古代祭坛",
		"map": [
			["红色染料", "虞美人", "粉红色染料"],
			["白色混凝土", "古代符文 [虹]", "白色混凝土"],
			["粉红色染料", "虞美人", "红色染料"]
		],
		"ingredients": [
			["红色染料", 2],
			["虞美人", 2],
			["粉红色染料", 2],
			["白色混凝土", 2],
			["古代符文 [虹]", 1]
		],
		"count": 2
	},
	"彩虹带釉陶瓦 (情人节版)": {
		"type": "古代祭坛",
		"map": [
			["红色染料", "虞美人", "粉红色染料"],
			["白色带釉陶瓦", "古代符文 [虹]", "白色带釉陶瓦"],
			["粉红色染料", "虞美人", "红色染料"]
		],
		"ingredients": [
			["红色染料", 2],
			["虞美人", 2],
			["粉红色染料", 2],
			["白色带釉陶瓦", 2],
			["古代符文 [虹]", 1]
		],
		"count": 2
	},
	"彩虹羊毛 (万圣节版)": {
		"type": "古代祭坛",
		"map": [
			["橙色染料", "南瓜", "黑色染料"],
			["白色羊毛", "古代符文 [虹]", "白色羊毛"],
			["黑色染料", "南瓜", "橙色染料"]
		],
		"ingredients": [
			["橙色染料", 2],
			["南瓜", 2],
			["黑色染料", 2],
			["白色羊毛", 2],
			["古代符文 [虹]", 1]
		],
		"count": 2
	},
	"彩虹玻璃 (万圣节版)": {
		"type": "古代祭坛",
		"map": [
			["橙色染料", "南瓜", "黑色染料"],
			["白色染色玻璃", "古代符文 [虹]", "白色染色玻璃"],
			["黑色染料", "南瓜", "橙色染料"]
		],
		"ingredients": [
			["橙色染料", 2],
			["南瓜", 2],
			["黑色染料", 2],
			["白色染色玻璃", 2],
			["古代符文 [虹]", 1]
		],
		"count": 2
	},
	"彩虹玻璃板 (万圣节版)": {
		"type": "古代祭坛",
		"map": [
			["橙色染料", "南瓜", "黑色染料"],
			["白色染色玻璃板", "古代符文 [虹]", "白色染色玻璃板"],
			["黑色染料", "南瓜", "橙色染料"]
		],
		"ingredients": [
			["橙色染料", 2],
			["南瓜", 2],
			["黑色染料", 2],
			["白色染色玻璃板", 2],
			["古代符文 [虹]", 1]
		],
		"count": 2
	},
	"彩虹粘土块 (万圣节版)": {
		"type": "古代祭坛",
		"map": [
			["橙色染料", "南瓜", "黑色染料"],
			["白色陶瓦", "古代符文 [虹]", "白色陶瓦"],
			["黑色染料", "南瓜", "橙色染料"]
		],
		"ingredients": [
			["橙色染料", 2],
			["南瓜", 2],
			["黑色染料", 2],
			["白色陶瓦", 2],
			["古代符文 [虹]", 1]
		],
		"count": 2
	},
	"彩虹混凝土 (万圣节版)": {
		"type": "古代祭坛",
		"map": [
			["橙色染料", "南瓜", "黑色染料"],
			["白色混凝土", "古代符文 [虹]", "白色混凝土"],
			["黑色染料", "南瓜", "橙色染料"]
		],
		"ingredients": [
			["橙色染料", 2],
			["南瓜", 2],
			["黑色染料", 2],
			["白色混凝土", 2],
			["古代符文 [虹]", 1]
		],
		"count": 2
	},
	"彩虹带釉陶瓦 (万圣节版)": {
		"type": "古代祭坛",
		"map": [
			["橙色染料", "南瓜", "黑色染料"],
			["白色带釉陶瓦", "古代符文 [虹]", "白色带釉陶瓦"],
			["黑色染料", "南瓜", "橙色染料"]
		],
		"ingredients": [
			["橙色染料", 2],
			["南瓜", 2],
			["黑色染料", 2],
			["白色带釉陶瓦", 2],
			["古代符文 [虹]", 1]
		],
		"count": 2
	},
	"防凋灵玻璃": {
		"type": "增强型工作台",
		"map": [
			["铅锭", "防凋灵黑曜石", "铅锭"],
			["防凋灵黑曜石", "钢化玻璃", "防凋灵黑曜石"],
			["铅锭", "防凋灵黑曜石", "铅锭"]
		],
		"ingredients": [
			["铅锭", 4],
			["防凋灵黑曜石", 4],
			["钢化玻璃", 1]
		],
		"count": 4
	},
	"GPS 地形扫描器": {
		"type": "增强型工作台",
		"map": [
			[null, null, "电磁铁"],
			[null, "钢锭", "钢锭"],
			["电磁铁", "电动马达", "电磁铁"]
		],
		"ingredients": [
			["电磁铁", 3],
			["钢锭", 2],
			["电动马达", 1]
		],
		"count": 1
	},
	"便携式资源扫描器": {
		"type": "增强型工作台",
		"map": [
			["电磁铁", "指南针", "电磁铁"],
			["钢锭", "GPS 设置路径点工具", "钢锭"],
			["焊锡锭", "电动马达", "焊锡锭"]
		],
		"ingredients": [
			["电磁铁", 2],
			["指南针", 1],
			["钢锭", 2],
			["GPS 设置路径点工具", 1],
			["焊锡锭", 2],
			["电动马达", 1]
		],
		"count": 1
	},
	"原油泵": {
		"type": "增强型工作台",
		"map": [
			["钢锭", "中型储能电容", "钢锭"],
			["钢锭", "电动马达", "钢锭"],
			[null, "桶", null]
		],
		"ingredients": [
			["钢锭", 4],
			["中型储能电容", 1],
			["电动马达", 1],
			["桶", 1]
		],
		"count": 1
	},
	"自然资源开采机": {
		"type": "增强型工作台",
		"map": [
			["钻石镐", "中型储能电容", "钻石镐"],
			["强化合金锭", "原油泵", "强化合金锭"],
			[null, "电动马达", null]
		],
		"ingredients": [
			["钻石镐", 2],
			["中型储能电容", 1],
			["强化合金锭", 2],
			["原油泵", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"原油桶": {
		"type": "原油泵",
		"map": [
			[null, null, null],
			[null, "桶", null],
			[null, null, null]
		],
		"ingredients": [
			["桶", 1]
		],
		"count": 1
	},
	"燃料桶": {
		"map": [
			[null, null, null],
			[null, "原油桶", null],
			[null, null, null]
		],
		"ingredients": [
			["原油桶", 1]
		],
		"count": 1
	},
	"下界冰": {
		"type": "自然资源开采机",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"炼油机": {
		"type": "增强型工作台",
		"map": [
			["钢化玻璃", "红石合金锭", "钢化玻璃"],
			["钢化玻璃", "红石合金锭", "钢化玻璃"],
			["活塞", "电动马达", "活塞"]
		],
		"ingredients": [
			["钢化玻璃", 4],
			["红石合金锭", 2],
			["活塞", 2],
			["电动马达", 1]
		],
		"count": 1
	},
	"岩浆发电机": {
		"type": "增强型工作台",
		"map": [
			[null, "金锭 (16克拉)", null],
			["大马士革钢锭", "电动马达", "大马士革钢锭"],
			["加热线圈", "大马士革钢锭", "加热线圈"]
		],
		"ingredients": [
			["金锭 (16克拉)", 1],
			["大马士革钢锭", 3],
			["电动马达", 1],
			["加热线圈", 2]
		],
		"count": 1
	},
	"岩浆发电机 (II)": {
		"type": "增强型工作台",
		"map": [
			["科林斯青铜锭", "科林斯青铜锭", "科林斯青铜锭"],
			["压缩碳", "岩浆发电机", "压缩碳"],
			["加热线圈", "压缩碳", "加热线圈"]
		],
		"ingredients": [
			["科林斯青铜锭", 3],
			["压缩碳", 3],
			["岩浆发电机", 1],
			["加热线圈", 2]
		],
		"count": 1
	},
	"燃烧反应机": {
		"type": "增强型工作台",
		"map": [
			[null, "钢锭", null],
			["钢锭", "电动马达", "钢锭"],
			["加热线圈", "钢锭", "加热线圈"]
		],
		"ingredients": [
			["钢锭", 4],
			["电动马达", 1],
			["加热线圈", 2]
		],
		"count": 1
	},
	"GPS 信号塔": {
		"type": "增强型工作台",
		"map": [
			["锌锭", "玻璃", "锌锭"],
			["玻璃", "加热线圈", "玻璃"],
			["锌锭", "玻璃", "锌锭"]
		],
		"ingredients": [
			["锌锭", 4],
			["玻璃", 4],
			["加热线圈", 1]
		],
		"count": 8
	},
	"GPS 传送矩阵": {
		"type": "增强型工作台",
		"map": [
			["GPS 信号塔", "强化合金锭", "GPS 信号塔"],
			["电磁铁", "GPS 控制面板", "电磁铁"],
			["GPS 信号塔", "强化合金锭", "GPS 信号塔"]
		],
		"ingredients": [
			["GPS 信号塔", 4],
			["强化合金锭", 2],
			["电磁铁", 2],
			["GPS 控制面板", 1]
		],
		"count": 1
	},
	"便携式传送器": {
		"type": "增强型工作台",
		"map": [
			["电磁铁", "黑金刚石 GPS 发射器", "电磁铁"],
			["钢筋板", "GPS 传送矩阵", "钢筋板"],
			["起泡锭", "中型储能电容", "起泡锭"]
		],
		"ingredients": [
			["电磁铁", 2],
			["黑金刚石 GPS 发射器", 1],
			["钢筋板", 2],
			["GPS 传送矩阵", 1],
			["起泡锭", 2],
			["中型储能电容", 1]
		],
		"count": 1
	},
	"GPS 激活设备 (公共)": {
		"type": "增强型工作台",
		"map": [
			[null, "石质压力板", null],
			["红石粉", "GPS 发射器", "红石粉"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["石质压力板", 1],
			["红石粉", 2],
			["GPS 发射器", 1],
			["银铜合金锭", 3]
		],
		"count": 1
	},
	"GPS 激活设备 (私人)": {
		"type": "增强型工作台",
		"map": [
			[null, "铅锭", null],
			["钴锭", "GPS 激活设备 (公共)", "钴锭"],
			[null, "铅锭", null]
		],
		"ingredients": [
			["铅锭", 2],
			["钴锭", 2],
			["GPS 激活设备 (公共)", 1]
		],
		"count": 1
	},
	"吸入漏斗": {
		"type": "古代祭坛",
		"map": [
			["黑曜石", "古代符文 [地]", "漏斗"],
			["古代符文 [末影]", "吸入磁铁", "古代符文 [末影]"],
			["漏斗", "古代符文 [地]", "黑曜石"]
		],
		"ingredients": [
			["黑曜石", 2],
			["古代符文 [地]", 2],
			["漏斗", 2],
			["古代符文 [末影]", 2],
			["吸入磁铁", 1]
		],
		"count": 1
	},
	"起泡锭 (33%)": {
		"type": "加热压力舱",
		"map": [
			["金锭 (24克拉)", "铀", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["金锭 (24克拉)", 1],
			["铀", 1]
		],
		"count": 1
	},
	"起泡锭 (66%)": {
		"type": "加热压力舱",
		"map": [
			["起泡锭 (33%)", "黑金刚石", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["起泡锭 (33%)", 1],
			["黑金刚石", 1]
		],
		"count": 1
	},
	"起泡锭": {
		"type": "加热压力舱",
		"map": [
			["起泡锭 (66%)", "下界之星", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["起泡锭 (66%)", 1],
			["下界之星", 1]
		],
		"count": 1
	},
	"浓缩下界冰": {
		"type": "加热压力舱",
		"map": [
			["下界冰", "钚", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["下界冰", 1],
			["钚", 1]
		],
		"count": 4
	},
	"电梯板": {
		"type": "增强型工作台",
		"map": [
			[null, "石质压力板", null],
			["活塞", "电动马达", "活塞"],
			["铝青铜锭", "铝青铜锭", "铝青铜锭"]
		],
		"ingredients": [
			["石质压力板", 1],
			["活塞", 2],
			["电动马达", 1],
			["铝青铜锭", 3]
		],
		"count": 2
	},
	"食品加工机": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银锭", "银铜合金锭"],
			["锡罐", "小型储能电容", "锡罐"],
			[null, "电动马达", null]
		],
		"ingredients": [
			["银铜合金锭", 2],
			["银锭", 1],
			["锡罐", 2],
			["小型储能电容", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"食品加工机 (II)": {
		"type": "增强型工作台",
		"map": [
			["硬化金属", "强化合金锭", "硬化金属"],
			["电动马达", "食品加工机", "电动马达"],
			[null, "电磁铁", null]
		],
		"ingredients": [
			["硬化金属", 2],
			["强化合金锭", 1],
			["电动马达", 2],
			["食品加工机", 1],
			["电磁铁", 1]
		],
		"count": 1
	},
	"有机食物": {
		"map": [
			["锡罐", "小麦", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["锡罐", 1],
			["小麦", 1]
		],
		"count": 2
	},
	"有机食物": {
		"map": [
			["锡罐", "胡萝卜", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["锡罐", 1],
			["胡萝卜", 1]
		],
		"count": 2
	},
	"有机食物": {
		"map": [
			["锡罐", "马铃薯", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["锡罐", 1],
			["马铃薯", 1]
		],
		"count": 2
	},
	"有机食物": {
		"map": [
			["锡罐", "小麦种子", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["锡罐", 1],
			["小麦种子", 1]
		],
		"count": 2
	},
	"有机食物": {
		"map": [
			["锡罐", "甜菜根", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["锡罐", 1],
			["甜菜根", 1]
		],
		"count": 2
	},
	"有机食物": {
		"map": [
			["锡罐", "西瓜片", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["锡罐", 1],
			["西瓜片", 1]
		],
		"count": 2
	},
	"有机食物": {
		"map": [
			["锡罐", "苹果", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["锡罐", 1],
			["苹果", 1]
		],
		"count": 2
	},
	"有机食物": {
		"map": [
			["锡罐", "甜浆果", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["锡罐", 1],
			["甜浆果", 1]
		],
		"count": 2
	},
	"有机食物": {
		"map": [
			["锡罐", "干海带", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["锡罐", 1],
			["干海带", 1]
		],
		"count": 2
	},
	"有机食物": {
		"map": [
			["锡罐", "可可豆", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["锡罐", 1],
			["可可豆", 1]
		],
		"count": 2
	},
	"有机食物": {
		"map": [
			["锡罐", "海草", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["锡罐", 1],
			["海草", 1]
		],
		"count": 2
	},
	"自动喂食机": {
		"type": "增强型工作台",
		"map": [
			["金锭 (18克拉)", "锡罐", "金锭 (18克拉)"],
			["电动马达", "干草块", "电动马达"],
			["铅锭", "食品加工机", "铅锭"]
		],
		"ingredients": [
			["金锭 (18克拉)", 2],
			["锡罐", 1],
			["电动马达", 2],
			["干草块", 1],
			["铅锭", 2],
			["食品加工机", 1]
		],
		"count": 1
	},
	"动物生长加速器": {
		"type": "增强型工作台",
		"map": [
			[null, "起泡锭", null],
			["电动马达", "有机食物", "电动马达"],
			["强化合金锭", "自动喂食机", "强化合金锭"]
		],
		"ingredients": [
			["起泡锭", 1],
			["电动马达", 2],
			["有机食物", 1],
			["强化合金锭", 2],
			["自动喂食机", 1]
		],
		"count": 1
	},
	"树木生长加速器": {
		"type": "增强型工作台",
		"map": [
			[null, "黑金刚石", null],
			["电动马达", "钻石斧", "电动马达"],
			["镁盐", "大型储能电容", "镁盐"]
		],
		"ingredients": [
			["黑金刚石", 1],
			["电动马达", 2],
			["钻石斧", 1],
			["镁盐", 2],
			["大型储能电容", 1]
		],
		"count": 1
	},
	"经验收集器": {
		"type": "增强型工作台",
		"map": [
			[null, "起泡锭", null],
			["防凋灵黑曜石", "自动附魔机", "防凋灵黑曜石"],
			["铝青铜锭", "电动马达", "铝青铜锭"]
		],
		"ingredients": [
			["起泡锭", 1],
			["防凋灵黑曜石", 2],
			["自动附魔机", 1],
			["铝青铜锭", 2],
			["电动马达", 1]
		],
		"count": 1
	},
	"食品堆肥器": {
		"type": "增强型工作台",
		"map": [
			["大马士革钢锭", "食品加工机", "大马士革钢锭"],
			["锡罐", "中型储能电容", "锡罐"],
			[null, "电动马达", null]
		],
		"ingredients": [
			["大马士革钢锭", 2],
			["食品加工机", 1],
			["锡罐", 2],
			["中型储能电容", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"食品堆肥器 (II)": {
		"type": "增强型工作台",
		"map": [
			["硬化金属", "强化合金锭", "硬化金属"],
			["电动马达", "食品堆肥器", "电动马达"],
			[null, "电磁铁", null]
		],
		"ingredients": [
			["硬化金属", 2],
			["强化合金锭", 1],
			["电动马达", 2],
			["食品堆肥器", 1],
			["电磁铁", 1]
		],
		"count": 1
	},
	"有机肥料": {
		"map": [
			["有机食物", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["有机食物", 1]
		],
		"count": 2
	},
	"有机肥料": {
		"map": [
			["有机食物", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["有机食物", 1]
		],
		"count": 2
	},
	"有机肥料": {
		"map": [
			["有机食物", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["有机食物", 1]
		],
		"count": 2
	},
	"有机肥料": {
		"map": [
			["有机食物", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["有机食物", 1]
		],
		"count": 2
	},
	"有机肥料": {
		"map": [
			["有机食物", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["有机食物", 1]
		],
		"count": 2
	},
	"有机肥料": {
		"map": [
			["有机食物", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["有机食物", 1]
		],
		"count": 2
	},
	"有机肥料": {
		"map": [
			["有机食物", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["有机食物", 1]
		],
		"count": 2
	},
	"有机肥料": {
		"map": [
			["有机食物", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["有机食物", 1]
		],
		"count": 2
	},
	"有机肥料": {
		"map": [
			["有机食物", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["有机食物", 1]
		],
		"count": 2
	},
	"有机肥料": {
		"map": [
			["有机食物", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["有机食物", 1]
		],
		"count": 2
	},
	"有机肥料": {
		"map": [
			["有机食物", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["有机食物", 1]
		],
		"count": 2
	},
	"作物生长加速器": {
		"type": "增强型工作台",
		"map": [
			[null, "起泡锭", null],
			["电动马达", "可编程式机器人 (农夫)", "电动马达"],
			["电磁铁", "动物生长加速器", "电磁铁"]
		],
		"ingredients": [
			["起泡锭", 1],
			["电动马达", 2],
			["可编程式机器人 (农夫)", 1],
			["电磁铁", 2],
			["动物生长加速器", 1]
		],
		"count": 1
	},
	"作物生长加速器 (II)": {
		"type": "增强型工作台",
		"map": [
			[null, "起泡锭", null],
			["电动马达", "作物生长加速器", "电动马达"],
			["电磁铁", "高级电路板", "电磁铁"]
		],
		"ingredients": [
			["起泡锭", 1],
			["电动马达", 2],
			["作物生长加速器", 1],
			["电磁铁", 2],
			["高级电路板", 1]
		],
		"count": 1
	},
	"冰箱": {
		"type": "增强型工作台",
		"map": [
			[null, "银锭", null],
			["电动马达", "浮冰", "电动马达"],
			["冷却装置", "中型储能电容", "冷却装置"]
		],
		"ingredients": [
			["银锭", 1],
			["电动马达", 2],
			["浮冰", 1],
			["冷却装置", 2],
			["中型储能电容", 1]
		],
		"count": 1
	},
	"冰箱 (II)": {
		"type": "增强型工作台",
		"map": [
			[null, "银锭", null],
			["电磁铁", "冰箱", "电磁铁"],
			["冷却装置", "铝黄铜锭", "冷却装置"]
		],
		"ingredients": [
			["银锭", 1],
			["电磁铁", 2],
			["冰箱", 1],
			["冷却装置", 2],
			["铝黄铜锭", 1]
		],
		"count": 1
	},
	"反应堆冷却剂": {
		"map": [
			["蓝冰", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["蓝冰", 1]
		],
		"count": 1
	},
	"下界冰冷却剂": {
		"type": "加热压力舱",
		"map": [
			["浓缩下界冰", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["浓缩下界冰", 1]
		],
		"count": 8
	},
	"镎": {
		"type": "核反应堆",
		"map": [
			["铀", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["铀", 1]
		],
		"count": 1
	},
	"钚": {
		"type": "核反应堆",
		"map": [
			["镎", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["镎", 1]
		],
		"count": 1
	},
	"钚铀混合氧化物核燃料": {
		"type": "加热压力舱",
		"map": [
			["钚", "铀", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["钚", 1],
			["铀", 1]
		],
		"count": 1
	},
	"核反应堆": {
		"type": "增强型工作台",
		"map": [
			["起泡锭", "黑金刚石镶边储能电容", "起泡锭"],
			["钢筋板", "冷却装置", "钢筋板"],
			["铅锭", "钢筋板", "铅锭"]
		],
		"ingredients": [
			["起泡锭", 2],
			["黑金刚石镶边储能电容", 1],
			["钢筋板", 3],
			["冷却装置", 1],
			["铅锭", 2]
		],
		"count": 1
	},
	"下界之星反应堆": {
		"type": "增强型工作台",
		"map": [
			["钚铀混合氧化物核燃料", "黑金刚石镶边储能电容", "钚铀混合氧化物核燃料"],
			["钢筋板", "下界之星", "钢筋板"],
			["科林斯青铜锭", "钢筋板", "科林斯青铜锭"]
		],
		"ingredients": [
			["钚铀混合氧化物核燃料", 2],
			["黑金刚石镶边储能电容", 1],
			["钢筋板", 3],
			["下界之星", 1],
			["科林斯青铜锭", 2]
		],
		"count": 1
	},
	"货运马达": {
		"type": "增强型工作台",
		"map": [
			["钢化玻璃", "电磁铁", "钢化玻璃"],
			["银锭", "电动马达", "银锭"],
			["钢化玻璃", "电磁铁", "钢化玻璃"]
		],
		"ingredients": [
			["钢化玻璃", 4],
			["电磁铁", 2],
			["银锭", 2],
			["电动马达", 1]
		],
		"count": 4
	},
	"货运管理器": {
		"type": "增强型工作台",
		"map": [
			[null, "全息投影仪", null],
			["钢筋板", "货运马达", "钢筋板"],
			["铝青铜锭", "机器人内存核心", "铝青铜锭"]
		],
		"ingredients": [
			["全息投影仪", 1],
			["钢筋板", 2],
			["货运马达", 1],
			["铝青铜锭", 2],
			["机器人内存核心", 1]
		],
		"count": 1
	},
	"货运节点 (连接器)": {
		"type": "增强型工作台",
		"map": [
			["青铜锭", "银锭", "青铜锭"],
			["银锭", "货运马达", "银锭"],
			["青铜锭", "银锭", "青铜锭"]
		],
		"ingredients": [
			["青铜锭", 4],
			["银锭", 4],
			["货运马达", 1]
		],
		"count": 4
	},
	"货运节点 (输入)": {
		"type": "增强型工作台",
		"map": [
			[null, "漏斗", null],
			["银铜合金锭", "货运节点 (连接器)", "银铜合金锭"],
			[null, "漏斗", null]
		],
		"ingredients": [
			["漏斗", 2],
			["银铜合金锭", 2],
			["货运节点 (连接器)", 1]
		],
		"count": 2
	},
	"货运节点 (输出)": {
		"type": "增强型工作台",
		"map": [
			[null, "漏斗", null],
			["黄铜锭", "货运节点 (连接器)", "黄铜锭"],
			[null, "漏斗", null]
		],
		"ingredients": [
			["漏斗", 2],
			["黄铜锭", 2],
			["货运节点 (连接器)", 1]
		],
		"count": 2
	},
	"高级货运节点 (输出)": {
		"type": "增强型工作台",
		"map": [
			[null, "货运马达", null],
			["钴锭", "货运节点 (输出)", "钴锭"],
			[null, "货运马达", null]
		],
		"ingredients": [
			["货运马达", 2],
			["钴锭", 2],
			["货运节点 (输出)", 1]
		],
		"count": 1
	},
	"反应堆访问接口": {
		"type": "增强型工作台",
		"map": [
			[null, "起泡锭", null],
			["铅锭", "货运马达", "铅锭"],
			[null, "电动马达", null]
		],
		"ingredients": [
			["起泡锭", 1],
			["铅锭", 2],
			["货运马达", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"流体泵": {
		"type": "增强型工作台",
		"map": [
			[null, "中型储能电容", null],
			["桶", "货运马达", "桶"],
			[null, "原油泵", null]
		],
		"ingredients": [
			["中型储能电容", 1],
			["桶", 2],
			["货运马达", 1],
			["原油泵", 1]
		],
		"count": 1
	},
	"垃圾箱": {
		"type": "增强型工作台",
		"map": [
			[null, "便携垃圾箱", null],
			["铅锭", "货运马达", "铅锭"],
			["铝锭", "铅锭", "铝锭"]
		],
		"ingredients": [
			["便携垃圾箱", 1],
			["铅锭", 3],
			["货运马达", 1],
			["铝锭", 2]
		],
		"count": 1
	},
	"碳压机": {
		"type": "增强型工作台",
		"map": [
			["碳", "电动马达", "碳"],
			["碳", "加热压力舱", "碳"],
			["加热线圈", "黑金刚石", "加热线圈"]
		],
		"ingredients": [
			["碳", 4],
			["电动马达", 1],
			["加热压力舱", 1],
			["加热线圈", 2],
			["黑金刚石", 1]
		],
		"count": 1
	},
	"碳压机 - II": {
		"type": "增强型工作台",
		"map": [
			["黑金刚石", "电动马达", "黑金刚石"],
			["碳", "碳压机", "碳"],
			["加热线圈", "电磁铁", "加热线圈"]
		],
		"ingredients": [
			["黑金刚石", 2],
			["电动马达", 1],
			["碳", 2],
			["碳压机", 1],
			["加热线圈", 2],
			["电磁铁", 1]
		],
		"count": 1
	},
	"碳压机 - III": {
		"type": "增强型工作台",
		"map": [
			["黑金刚石", "电动马达", "黑金刚石"],
			["强化合金锭", "碳压机 - II", "强化合金锭"],
			["加热线圈", "电磁铁", "加热线圈"]
		],
		"ingredients": [
			["黑金刚石", 2],
			["电动马达", 1],
			["强化合金锭", 2],
			["碳压机 - II", 1],
			["加热线圈", 2],
			["电磁铁", 1]
		],
		"count": 1
	},
	"电力冶炼炉": {
		"type": "增强型工作台",
		"map": [
			["下界砖块", "电动马达", "下界砖块"],
			["加热线圈", "电动铸锭机", "加热线圈"],
			["镀金铁锭", "电动马达", "镀金铁锭"]
		],
		"ingredients": [
			["下界砖块", 2],
			["电动马达", 2],
			["加热线圈", 2],
			["电动铸锭机", 1],
			["镀金铁锭", 2]
		],
		"count": 1
	},
	"电力冶炼炉 - II": {
		"type": "增强型工作台",
		"map": [
			["大马士革钢锭", "能量水晶", "大马士革钢锭"],
			["加热线圈", "电力冶炼炉", "加热线圈"],
			["镀金铁锭", "电动马达", "镀金铁锭"]
		],
		"ingredients": [
			["大马士革钢锭", 2],
			["能量水晶", 1],
			["加热线圈", 2],
			["电力冶炼炉", 1],
			["镀金铁锭", 2],
			["电动马达", 1]
		],
		"count": 1
	},
	"铁傀儡装配机": {
		"type": "增强型工作台",
		"map": [
			["起泡锭", "高级电路板", "起泡锭"],
			["铁块", "机器人内存核心", "铁块"],
			["电动马达", "强化合金锭", "黑金刚石镶边储能电容"]
		],
		"ingredients": [
			["起泡锭", 2],
			["高级电路板", 1],
			["铁块", 2],
			["机器人内存核心", 1],
			["电动马达", 1],
			["强化合金锭", 1],
			["黑金刚石镶边储能电容", 1]
		],
		"count": 1
	},
	"凋灵装配机": {
		"type": "增强型工作台",
		"map": [
			["起泡锭", "下界之星", "起泡锭"],
			["防凋灵黑曜石", "机器人内存核心", "防凋灵黑曜石"],
			["电动马达", "强化合金锭", "黑金刚石镶边储能电容"]
		],
		"ingredients": [
			["起泡锭", 2],
			["下界之星", 1],
			["防凋灵黑曜石", 2],
			["机器人内存核心", 1],
			["电动马达", 1],
			["强化合金锭", 1],
			["黑金刚石镶边储能电容", 1]
		],
		"count": 1
	},
	"卷尺": {
		"type": "增强型工作台",
		"map": [
			["硅", "黄色染料", "硅"],
			["黄色染料", "线", "黄色染料"],
			["镀金铁锭", "黄色染料", "硅"]
		],
		"ingredients": [
			["硅", 3],
			["黄色染料", 4],
			["线", 1],
			["镀金铁锭", 1]
		],
		"count": 1
	},
	"蜜蜂头盔": {
		"type": "盔甲锻造台",
		"map": [
			["金锭 (8克拉)", "蜂蜜块", "金锭 (8克拉)"],
			["蜜脾块", null, "蜜脾块"],
			[null, null, null]
		],
		"ingredients": [
			["金锭 (8克拉)", 2],
			["蜂蜜块", 1],
			["蜜脾块", 2]
		],
		"count": 1
	},
	"蜂翅": {
		"type": "盔甲锻造台",
		"map": [
			["金锭 (8克拉)", null, "金锭 (8克拉)"],
			["蜜脾块", "鞘翅", "蜜脾块"],
			["蜂蜜块", "金锭 (8克拉)", "蜂蜜块"]
		],
		"ingredients": [
			["金锭 (8克拉)", 3],
			["蜜脾块", 2],
			["鞘翅", 1],
			["蜂蜜块", 2]
		],
		"count": 1
	},
	"蜜蜂护腿": {
		"type": "盔甲锻造台",
		"map": [
			["金锭 (8克拉)", "蜂蜜块", "金锭 (8克拉)"],
			["蜜脾块", null, "蜜脾块"],
			["蜜脾块", null, "蜜脾块"]
		],
		"ingredients": [
			["金锭 (8克拉)", 2],
			["蜂蜜块", 1],
			["蜜脾块", 4]
		],
		"count": 1
	},
	"蜜蜂护靴": {
		"type": "盔甲锻造台",
		"map": [
			[null, null, null],
			["金锭 (8克拉)", null, "金锭 (8克拉)"],
			["蜂蜜块", null, "蜂蜜块"]
		],
		"ingredients": [
			["金锭 (8克拉)", 2],
			["蜂蜜块", 2]
		],
		"count": 1
	},
	"古代符文 [村民]": {
		"type": "古代祭坛",
		"map": [
			["魔法结晶 - III", "魔法玻璃", "哭泣的黑曜石"],
			["奇怪的下界粘液", "古代符文 [火]", "奇怪的下界粘液"],
			["哭泣的黑曜石", "魔法玻璃", "魔法结晶 - III"]
		],
		"ingredients": [
			["魔法结晶 - III", 2],
			["魔法玻璃", 2],
			["哭泣的黑曜石", 2],
			["奇怪的下界粘液", 2],
			["古代符文 [火]", 1]
		],
		"count": 3
	},
	"奇怪的下界粘液": {
		"type": "交易获得",
		"map": [
			[null, null, null],
			[null, "Piglin", null],
			[null, null, null]
		],
		"ingredients": [
			["Piglin", 1]
		],
		"count": 1
	},
	"鞘翅帽": {
		"type": "盔甲锻造台",
		"map": [
			["黏液球", "黏液球", "黏液球"],
			["鞘翅鳞片", "鞘翅鳞片", "鞘翅鳞片"],
			["黏液球", "皮革帽子", "黏液球"]
		],
		"ingredients": [
			["黏液球", 5],
			["鞘翅鳞片", 3],
			["皮革帽子", 1]
		],
		"count": 1
	},
	"合成机马达": {
		"type": "增强型工作台",
		"map": [
			["工作台", "起泡锭", "工作台"],
			["红石合金锭", "货运马达", "红石合金锭"],
			["工作台", "起泡锭", "工作台"]
		],
		"ingredients": [
			["工作台", 4],
			["起泡锭", 2],
			["红石合金锭", 2],
			["货运马达", 1]
		],
		"count": 2
	},
	"自动合成机 (原版)": {
		"type": "增强型工作台",
		"map": [
			[null, "货运马达", null],
			["工作台", "合成机马达", "工作台"],
			[null, "电动马达", null]
		],
		"ingredients": [
			["货运马达", 1],
			["工作台", 2],
			["合成机马达", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"自动合成机 (高级)": {
		"type": "增强型工作台",
		"map": [
			[null, "合成机马达", null],
			["工作台", "发射器", "工作台"],
			[null, "货运马达", null]
		],
		"ingredients": [
			["合成机马达", 1],
			["工作台", 2],
			["发射器", 1],
			["货运马达", 1]
		],
		"count": 1
	},
	"自动合成机 (盔甲锻造)": {
		"type": "增强型工作台",
		"map": [
			[null, "合成机马达", null],
			["发射器", "铁砧", "发射器"],
			["工作台", "电动马达", "工作台"]
		],
		"ingredients": [
			["合成机马达", 1],
			["发射器", 2],
			["铁砧", 1],
			["工作台", 2],
			["电动马达", 1]
		],
		"count": 1
	},
	"全自动收集机": {
		"type": "增强型工作台",
		"map": [
			[null, "干草块", null],
			["桶", "中型储能电容", "桶"],
			["铝黄铜锭", "电动马达", "铝黄铜锭"]
		],
		"ingredients": [
			["干草块", 1],
			["桶", 2],
			["中型储能电容", 1],
			["铝黄铜锭", 2],
			["电动马达", 1]
		],
		"count": 1
	},
	"合成机智能交互接口": {
		"type": "增强型工作台",
		"map": [
			[null, "货运马达", null],
			["箱子", "合成机马达", "箱子"],
			[null, "电动马达", null]
		],
		"ingredients": [
			["货运马达", 1],
			["箱子", 2],
			["合成机马达", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"钢转子": {
		"type": "增强型工作台",
		"map": [
			[null, "钢锭", null],
			["钢锭", "铁块", "钢锭"],
			[null, "钢锭", null]
		],
		"ingredients": [
			["钢锭", 4],
			["铁块", 1]
		],
		"count": 2
	},
	"简易蒸汽涡轮": {
		"type": "增强型工作台",
		"map": [
			[null, "钢转子", null],
			["钢锭", "电动马达", "钢锭"],
			[null, "铜线", null]
		],
		"ingredients": [
			["钢转子", 1],
			["钢锭", 2],
			["电动马达", 1],
			["铜线", 1]
		],
		"count": 1
	},
	"简易蒸汽涡轮发电机": {
		"type": "多方块结构",
		"map": [
			[null, "简易蒸汽涡轮", null],
			[null, "水 (需含有气泡)", null],
			[null, "岩浆块", null]
		],
		"ingredients": [
			["简易蒸汽涡轮", 1],
			["水 (需含有气泡)", 1],
			["岩浆块", 1]
		],
		"count": 1
	},
	"进阶蒸汽涡轮": {
		"type": "增强型工作台",
		"map": [
			[null, "钢转子", null],
			["黄铜锭", "简易蒸汽涡轮", "黄铜锭"],
			["黄铜锭", "铜线", "黄铜锭"]
		],
		"ingredients": [
			["钢转子", 1],
			["黄铜锭", 4],
			["简易蒸汽涡轮", 1],
			["铜线", 1]
		],
		"count": 1
	},
	"进阶蒸汽涡轮发电机": {
		"type": "多方块结构",
		"map": [
			[null, "进阶蒸汽涡轮", null],
			[null, "水 (需含有气泡)", null],
			[null, "岩浆块", null]
		],
		"ingredients": [
			["进阶蒸汽涡轮", 1],
			["水 (需含有气泡)", 1],
			["岩浆块", 1]
		],
		"count": 1
	},
	"黑金刚石蒸汽涡轮": {
		"type": "增强型工作台",
		"map": [
			[null, "钢转子", null],
			["黑金刚石", "进阶蒸汽涡轮", "黑金刚石"],
			["强化合金锭", "电动马达", "强化合金锭"]
		],
		"ingredients": [
			["钢转子", 1],
			["黑金刚石", 2],
			["进阶蒸汽涡轮", 1],
			["强化合金锭", 2],
			["电动马达", 1]
		],
		"count": 1
	},
	"黑金刚石蒸汽涡轮发电机": {
		"type": "多方块结构",
		"map": [
			[null, "黑金刚石蒸汽涡轮", null],
			[null, "水 (需含有气泡)", null],
			[null, "岩浆块", null]
		],
		"ingredients": [
			["黑金刚石蒸汽涡轮", 1],
			["水 (需含有气泡)", 1],
			["岩浆块", 1]
		],
		"count": 1
	},
	"简易风力发电机": {
		"type": "增强型工作台",
		"map": [
			[null, "钢转子", null],
			["钢推进器", "电动马达", "钢推进器"],
			[null, "铜线", null]
		],
		"ingredients": [
			["钢转子", 1],
			["钢推进器", 2],
			["电动马达", 1],
			["铜线", 1]
		],
		"count": 1
	},
	"简易风力发电机": {
		"type": "多方块结构",
		"map": [
			[null, "简易风力发电机", null],
			[null, "橡木栅栏", null],
			[null, "橡木栅栏", null]
		],
		"ingredients": [
			["简易风力发电机", 1],
			["橡木栅栏", 2]
		],
		"count": 1
	},
	"进阶风力发电机": {
		"type": "增强型工作台",
		"map": [
			[null, "钢转子", null],
			["电磁铁", "简易风力发电机", "电磁铁"],
			["铝黄铜锭", "铜线", "铝黄铜锭"]
		],
		"ingredients": [
			["钢转子", 1],
			["电磁铁", 2],
			["简易风力发电机", 1],
			["铝黄铜锭", 2],
			["铜线", 1]
		],
		"count": 1
	},
	"进阶风力发电机": {
		"type": "多方块结构",
		"map": [
			[null, "进阶风力发电机", null],
			[null, "橡木栅栏", null],
			[null, "橡木栅栏", null]
		],
		"ingredients": [
			["进阶风力发电机", 1],
			["橡木栅栏", 2]
		],
		"count": 1
	},
	"黑金刚石风力发电机": {
		"type": "增强型工作台",
		"map": [
			["硅铁", "钢转子", "硅铁"],
			["电动马达", "进阶风力发电机", "电动马达"],
			["黑金刚石", "硅铁", "黑金刚石"]
		],
		"ingredients": [
			["硅铁", 3],
			["钢转子", 1],
			["电动马达", 2],
			["进阶风力发电机", 1],
			["黑金刚石", 2]
		],
		"count": 1
	},
	"黑金刚石风力发电机": {
		"type": "多方块结构",
		"map": [
			[null, "黑金刚石风力发电机", null],
			[null, "橡木栅栏", null],
			[null, "橡木栅栏", null]
		],
		"ingredients": [
			["黑金刚石风力发电机", 1],
			["橡木栅栏", 2]
		],
		"count": 1
	},
	"闪电接收器": {
		"type": "增强型工作台",
		"map": [
			[null, "末地烛", null],
			["起泡锭", "能量水晶", "起泡锭"],
			["钢筋板", "能源调节器", "钢筋板"]
		],
		"ingredients": [
			["末地烛", 1],
			["起泡锭", 2],
			["能量水晶", 1],
			["钢筋板", 2],
			["能源调节器", 1]
		],
		"count": 1
	},
	"月光发电机": {
		"type": "增强型工作台",
		"map": [
			["幻翼膜", "充能太阳能发电机", "幻翼膜"],
			["大马士革钢锭", "黑金刚石", "大马士革钢锭"],
			["铜线", "起泡锭", "铜线"]
		],
		"ingredients": [
			["幻翼膜", 2],
			["充能太阳能发电机", 1],
			["大马士革钢锭", 2],
			["黑金刚石", 1],
			["铜线", 2],
			["起泡锭", 1]
		],
		"count": 1
	},
	"高能太阳能发电机": {
		"type": "增强型工作台",
		"map": [
			["高级太阳能发电机", "月光发电机", "高级太阳能发电机"],
			["黑金刚石", "能量水晶", "黑金刚石"],
			["起泡锭", "下界之星", "起泡锭"]
		],
		"ingredients": [
			["高级太阳能发电机", 2],
			["月光发电机", 1],
			["黑金刚石", 2],
			["能量水晶", 1],
			["起泡锭", 2],
			["下界之星", 1]
		],
		"count": 1
	},
	"高能太阳能头盔": {
		"type": "增强型工作台",
		"map": [
			[null, "高能太阳能发电机", null],
			["强化合金锭", "强化合金锭", "强化合金锭"],
			["强化合金锭", null, "强化合金锭"]
		],
		"ingredients": [
			["高能太阳能发电机", 1],
			["强化合金锭", 5]
		],
		"count": 1
	},
	"辐射太阳能发电机": {
		"type": "增强型工作台",
		"map": [
			["月光发电机", "高能太阳能发电机", "月光发电机"],
			["起泡锭", "能量水晶", "起泡锭"],
			["钢筋板", "黑金刚石", "钢筋板"]
		],
		"ingredients": [
			["月光发电机", 2],
			["高能太阳能发电机", 1],
			["起泡锭", 2],
			["能量水晶", 1],
			["钢筋板", 2],
			["黑金刚石", 1]
		],
		"count": 1
	},
	"猪 宠物": {
		"type": "增强型工作台",
		"map": [
			["红石粉", "胡萝卜", "红石粉"],
			["生猪排", "钻石", "生猪排"],
			["红石粉", "金锭 (16克拉)", "红石粉"]
		],
		"ingredients": [
			["红石粉", 4],
			["胡萝卜", 1],
			["生猪排", 2],
			["钻石", 1],
			["金锭 (16克拉)", 1]
		],
		"count": 1
	},
	"鸡 宠物": {
		"type": "增强型工作台",
		"map": [
			["红石粉", "羽毛", "红石粉"],
			["熟鸡肉", "钻石", "熟鸡肉"],
			["红石粉", "金锭 (16克拉)", "红石粉"]
		],
		"ingredients": [
			["红石粉", 4],
			["羽毛", 1],
			["熟鸡肉", 2],
			["钻石", 1],
			["金锭 (16克拉)", 1]
		],
		"count": 1
	},
	"哞菇 宠物": {
		"type": "增强型工作台",
		"map": [
			["青金石", "牛排", "青金石"],
			["红色蘑菇", "钻石", "棕色蘑菇"],
			["青金石", "金锭 (16克拉)", "青金石"]
		],
		"ingredients": [
			["青金石", 4],
			["牛排", 1],
			["红色蘑菇", 1],
			["钻石", 1],
			["棕色蘑菇", 1],
			["金锭 (16克拉)", 1]
		],
		"count": 1
	},
	"牛 宠物": {
		"type": "增强型工作台",
		"map": [
			["煤炭", "小麦", "煤炭"],
			["牛排", "钻石", "牛排"],
			["煤炭", "金锭 (16克拉)", "煤炭"]
		],
		"ingredients": [
			["煤炭", 4],
			["小麦", 1],
			["牛排", 2],
			["钻石", 1],
			["金锭 (16克拉)", 1]
		],
		"count": 1
	},
	"金牛 宠物": {
		"type": "增强型工作台",
		"map": [
			["金胡萝卜", "金粒", "金胡萝卜"],
			["金粒", "牛 宠物", "金粒"],
			["金胡萝卜", "金粒", "金胡萝卜"]
		],
		"ingredients": [
			["金胡萝卜", 4],
			["金粒", 4],
			["牛 宠物", 1]
		],
		"count": 1
	},
	"鱼 宠物": {
		"type": "增强型工作台",
		"map": [
			["铁锭", "生鳕鱼", "铁锭"],
			["生鳕鱼", "钻石", "生鳕鱼"],
			["水桶", "金锭 (18克拉)", "水桶"]
		],
		"ingredients": [
			["铁锭", 2],
			["生鳕鱼", 3],
			["钻石", 1],
			["水桶", 2],
			["金锭 (18克拉)", 1]
		],
		"count": 1
	},
	"鱿鱼 宠物": {
		"type": "增强型工作台",
		"map": [
			["煤炭", "生鳕鱼", "煤炭"],
			["水桶", "钻石", "水桶"],
			["生鳕鱼", "金锭 (16克拉)", "生鳕鱼"]
		],
		"ingredients": [
			["煤炭", 2],
			["生鳕鱼", 3],
			["水桶", 2],
			["钻石", 1],
			["金锭 (16克拉)", 1]
		],
		"count": 1
	},
	"兔子 宠物": {
		"type": "增强型工作台",
		"map": [
			["金胡萝卜", "兔子皮", "金胡萝卜"],
			["兔子皮", "钻石", "兔子皮"],
			["金胡萝卜", "兔子脚", "金胡萝卜"]
		],
		"ingredients": [
			["金胡萝卜", 4],
			["兔子皮", 3],
			["钻石", 1],
			["兔子脚", 1]
		],
		"count": 1
	},
	"海豚 宠物": {
		"type": "增强型工作台",
		"map": [
			["青金石", "生鳕鱼", "青金石"],
			["生鲑鱼", "绿宝石", "生鲑鱼"],
			["青金石", "生鳕鱼", "青金石"]
		],
		"ingredients": [
			["青金石", 4],
			["生鳕鱼", 2],
			["生鲑鱼", 2],
			["绿宝石", 1]
		],
		"count": 1
	},
	"熊猫 宠物": {
		"type": "增强型工作台",
		"map": [
			["竹子", "钻石", "竹子"],
			["钻石", "绿宝石", "钻石"],
			["金合欢树叶", "竹子", "金合欢树叶"]
		],
		"ingredients": [
			["竹子", 3],
			["钻石", 3],
			["绿宝石", 1],
			["金合欢树叶", 2]
		],
		"count": 1
	},
	"铁傀儡 宠物": {
		"type": "增强型工作台",
		"map": [
			["铁块", "南瓜", "铁块"],
			["铁锭", "绿宝石", "铁锭"],
			["铁锭", "金锭 (16克拉)", "铁锭"]
		],
		"ingredients": [
			["铁块", 2],
			["南瓜", 1],
			["铁锭", 4],
			["绿宝石", 1],
			["金锭 (16克拉)", 1]
		],
		"count": 1
	},
	"史莱姆 宠物": {
		"type": "增强型工作台",
		"map": [
			["黏液球", "钻石", "黏液球"],
			["黏液球", "绿宝石", "黏液球"],
			["金锭 (20克拉)", "金锭 (20克拉)", "金锭 (20克拉)"]
		],
		"ingredients": [
			["黏液球", 4],
			["钻石", 1],
			["绿宝石", 1],
			["金锭 (20克拉)", 3]
		],
		"count": 1
	},
	"蜘蛛 宠物": {
		"type": "增强型工作台",
		"map": [
			["煤炭", "线", "煤炭"],
			["蜘蛛眼", "绿宝石", "蜘蛛眼"],
			["线", "金锭 (16克拉)", "线"]
		],
		"ingredients": [
			["煤炭", 2],
			["线", 3],
			["蜘蛛眼", 2],
			["绿宝石", 1],
			["金锭 (16克拉)", 1]
		],
		"count": 1
	},
	"恶魂 宠物": {
		"type": "增强型工作台",
		"map": [
			["恶魂之泪", "钻石", "恶魂之泪"],
			["石英块", "烈焰粉", "石英块"],
			["金锭 (24克拉)", "TNT", "金锭 (24克拉)"]
		],
		"ingredients": [
			["恶魂之泪", 2],
			["钻石", 1],
			["石英块", 2],
			["烈焰粉", 1],
			["金锭 (24克拉)", 2],
			["TNT", 1]
		],
		"count": 1
	},
	"潜影贝 宠物": {
		"type": "增强型工作台",
		"map": [
			["下界疣", "潜影壳", "下界疣"],
			["下界石英", "荧石粉", "下界石英"],
			["羽毛", "潜影壳", "羽毛"]
		],
		"ingredients": [
			["下界疣", 2],
			["潜影壳", 2],
			["下界石英", 2],
			["荧石粉", 1],
			["羽毛", 2]
		],
		"count": 1
	},
	"幻翼 宠物": {
		"type": "增强型工作台",
		"map": [
			["幻翼膜", "兔子脚", "幻翼膜"],
			["钻石", "金锭 (6克拉)", "钻石"],
			["幻翼膜", "兔子脚", "幻翼膜"]
		],
		"ingredients": [
			["幻翼膜", 4],
			["兔子脚", 2],
			["钻石", 2],
			["金锭 (6克拉)", 1]
		],
		"count": 1
	},
	"末影人 宠物": {
		"type": "增强型工作台",
		"map": [
			["黑曜石", "末影珍珠", "黑曜石"],
			["末影之眼", "绿宝石", "末影之眼"],
			["末影珍珠", "金锭 (16克拉)", "末影珍珠"]
		],
		"ingredients": [
			["黑曜石", 2],
			["末影珍珠", 3],
			["末影之眼", 2],
			["绿宝石", 1],
			["金锭 (16克拉)", 1]
		],
		"count": 1
	},
	"苦力怕 宠物": {
		"type": "增强型工作台",
		"map": [
			["钻石", "苦力怕的头", "钻石"],
			["火药", "绿宝石", "火药"],
			["钻石", "金锭 (20克拉)", "钻石"]
		],
		"ingredients": [
			["钻石", 4],
			["苦力怕的头", 1],
			["火药", 2],
			["绿宝石", 1],
			["金锭 (20克拉)", 1]
		],
		"count": 1
	},
	"岩浆怪 宠物": {
		"type": "增强型工作台",
		"map": [
			["红石粉", "岩浆膏", "红石粉"],
			["烈焰粉", "绿宝石", "烈焰粉"],
			["下界岩", "金锭 (20克拉)", "下界岩"]
		],
		"ingredients": [
			["红石粉", 2],
			["岩浆膏", 1],
			["烈焰粉", 2],
			["绿宝石", 1],
			["下界岩", 2],
			["金锭 (20克拉)", 1]
		],
		"count": 1
	},
	"烈焰人 宠物": {
		"type": "增强型工作台",
		"map": [
			["荧石粉", "烈焰棒", "荧石粉"],
			["烈焰粉", "绿宝石", "烈焰粉"],
			["金锭 (20克拉)", "金锭 (20克拉)", "金锭 (20克拉)"]
		],
		"ingredients": [
			["荧石粉", 2],
			["烈焰棒", 1],
			["烈焰粉", 2],
			["绿宝石", 1],
			["金锭 (20克拉)", 3]
		],
		"count": 1
	},
	"僵尸 宠物": {
		"type": "增强型工作台",
		"map": [
			["钻石", "僵尸的头", "钻石"],
			["苔石", "绿宝石", "苔石"],
			["腐肉", "坏死颅骨", "腐肉"]
		],
		"ingredients": [
			["钻石", 2],
			["僵尸的头", 1],
			["苔石", 2],
			["绿宝石", 1],
			["腐肉", 2],
			["坏死颅骨", 1]
		],
		"count": 1
	},
	"末影龙 宠物": {
		"type": "增强型工作台",
		"map": [
			["海晶砂粒", "龙息", "海晶砂粒"],
			["末影结晶 - III", "龙首", "末影结晶 - III"],
			["海晶砂粒", "龙息", "海晶砂粒"]
		],
		"ingredients": [
			["海晶砂粒", 4],
			["龙息", 2],
			["末影结晶 - III", 2],
			["龙首", 1]
		],
		"count": 1
	},
	"凋零 宠物": {
		"type": "增强型工作台",
		"map": [
			["煤炭", "凋灵骷髅头颅", "煤炭"],
			["灵魂沙", "下界之星", "灵魂沙"],
			["灵魂沙", "金锭 (24克拉)", "灵魂沙"]
		],
		"ingredients": [
			["煤炭", 2],
			["凋灵骷髅头颅", 1],
			["灵魂沙", 4],
			["下界之星", 1],
			["金锭 (24克拉)", 1]
		],
		"count": 1
	},
	"床 宠物": {
		"type": "增强型工作台",
		"map": [
			["铁锭", "红色床", "铁锭"],
			["白色羊毛", "钻石", "白色羊毛"],
			["橡木木板", "金锭 (14克拉)", "橡木木板"]
		],
		"ingredients": [
			["铁锭", 2],
			["红色床", 1],
			["白色羊毛", 2],
			["钻石", 1],
			["橡木木板", 2],
			["金锭 (14克拉)", 1]
		],
		"count": 1
	},
	"末影箱 宠物": {
		"type": "增强型工作台",
		"map": [
			["黑曜石", "末影之眼", "黑曜石"],
			["末影珍珠", "绿宝石", "末影珍珠"],
			["黑曜石", "金锭 (16克拉)", "黑曜石"]
		],
		"ingredients": [
			["黑曜石", 4],
			["末影之眼", 1],
			["末影珍珠", 2],
			["绿宝石", 1],
			["金锭 (16克拉)", 1]
		],
		"count": 1
	},
	"工作台 宠物": {
		"type": "增强型工作台",
		"map": [
			["橡木木板", "工作台", "橡木木板"],
			["橡木木板", "铁锭", "橡木木板"],
			["橡木木板", "金锭 (16克拉)", "橡木木板"]
		],
		"ingredients": [
			["橡木木板", 6],
			["工作台", 1],
			["铁锭", 1],
			["金锭 (16克拉)", 1]
		],
		"count": 1
	},
	"紫斑牛 宠物": {
		"type": "增强型工作台",
		"map": [
			["牛排", "钻石", "牛排"],
			["钻石", "绿宝石", "钻石"],
			["金锭 (20克拉)", "金锭 (20克拉)", "金锭 (20克拉)"]
		],
		"ingredients": [
			["牛排", 2],
			["钻石", 3],
			["绿宝石", 1],
			["金锭 (20克拉)", 3]
		],
		"count": 1
	},
	"饼干 宠物": {
		"type": "增强型工作台",
		"map": [
			["曲奇", "钻石", "曲奇"],
			["钻石", "绿宝石", "钻石"],
			["金锭 (20克拉)", "金锭 (20克拉)", "金锭 (20克拉)"]
		],
		"ingredients": [
			["曲奇", 2],
			["钻石", 3],
			["绿宝石", 1],
			["金锭 (20克拉)", 3]
		],
		"count": 1
	},
	"爱国者 宠物": {
		"type": "增强型工作台",
		"map": [
			["红石粉", "魔法结晶 - I", "红石粉"],
			["魔法结晶 - I", "黑金刚石原矿", "魔法结晶 - I"],
			["金锭 (4克拉)", "红石粉", "金锭 (4克拉)"]
		],
		"ingredients": [
			["红石粉", 3],
			["魔法结晶 - I", 3],
			["黑金刚石原矿", 1],
			["金锭 (4克拉)", 2]
		],
		"count": 1
	},
	"海象 宠物": {
		"type": "增强型工作台",
		"map": [
			["生鳕鱼", "钻石", "生鳕鱼"],
			["钻石", "绿宝石", "钻石"],
			["金锭 (20克拉)", "金锭 (20克拉)", "金锭 (20克拉)"]
		],
		"ingredients": [
			["生鳕鱼", 2],
			["钻石", 3],
			["绿宝石", 1],
			["金锭 (20克拉)", 3]
		],
		"count": 1
	},
	"灵魂 宠物": {
		"type": "增强型工作台",
		"map": [
			["灵魂沙", "钻石", "灵魂沙"],
			["钻石", "绿宝石", "钻石"],
			["金锭 (20克拉)", "金锭 (20克拉)", "金锭 (20克拉)"]
		],
		"ingredients": [
			["灵魂沙", 2],
			["钻石", 3],
			["绿宝石", 1],
			["金锭 (20克拉)", 3]
		],
		"count": 1
	},
	"幸运方块": {
		"type": "增强型工作台",
		"map": [
			["金锭 (12克拉)", "金锭 (12克拉)", "金锭 (12克拉)"],
			["金锭 (12克拉)", "发射器", "金锭 (12克拉)"],
			["金锭 (12克拉)", "金锭 (12克拉)", "金锭 (12克拉)"]
		],
		"ingredients": [
			["金锭 (12克拉)", 8],
			["发射器", 1]
		],
		"count": 1
	},
	"非常幸运的方块": {
		"type": "增强型工作台",
		"map": [
			[null, "金锭 (12克拉)", null],
			["金锭 (12克拉)", "幸运方块", "金锭 (12克拉)"],
			[null, "金锭 (12克拉)", null]
		],
		"ingredients": [
			["金锭 (12克拉)", 4],
			["幸运方块", 1]
		],
		"count": 1
	},
	"非常不幸的方块": {
		"type": "增强型工作台",
		"map": [
			[null, "蜘蛛眼", null],
			["蜘蛛眼", "幸运方块", "蜘蛛眼"],
			[null, "蜘蛛眼", null]
		],
		"ingredients": [
			["蜘蛛眼", 4],
			["幸运方块", 1]
		],
		"count": 1
	},
	"潘多拉魔盒": {
		"type": "增强型工作台",
		"map": [
			["橡木木板", "青金石块", "橡木木板"],
			["青金石块", "幸运方块", "青金石块"],
			["橡木木板", "青金石块", "橡木木板"]
		],
		"ingredients": [
			["橡木木板", 4],
			["青金石块", 4],
			["幸运方块", 1]
		],
		"count": 1
	},
	"厨房": {
		"type": "多方块结构",
		"map": [
			["砖楼梯 (倒着放)", "砖楼梯 (倒着放)", "砖块"],
			["石质压力板", "铁活板门", "书架"],
			["熔炉", "发射器", "工作台"]
		],
		"ingredients": [
			["砖楼梯 (倒着放)", 2],
			["砖块", 1],
			["石质压力板", 1],
			["铁活板门", 1],
			["书架", 1],
			["熔炉", 1],
			["发射器", 1],
			["工作台", 1]
		],
		"count": 1
	},
	"冰块": {
		"type": "磨石",
		"map": [
			["冰", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["冰", 1]
		],
		"count": 4
	},
	"葡萄灌木丛": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"葡萄": {
		"map": [
			[null, null, null],
			[null, "葡萄灌木丛", null],
			[null, null, null]
		],
		"ingredients": [
			["葡萄灌木丛", 1]
		],
		"count": 1
	},
	"葡萄汁": {
		"type": "榨汁机",
		"map": [
			["葡萄", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["葡萄", 1]
		],
		"count": 1
	},
	"葡萄冰沙": {
		"type": "增强型工作台",
		"map": [
			["葡萄汁", "冰块", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["葡萄汁", 1],
			["冰块", 1]
		],
		"count": 1
	},
	"葡萄果酱三明治": {
		"map": [
			[null, "面包", null],
			[null, "葡萄汁", null],
			[null, "面包", null]
		],
		"ingredients": [
			["面包", 2],
			["葡萄汁", 1]
		],
		"count": 1
	},
	"葡萄派": {
		"map": [
			["葡萄", "鸡蛋", "糖"],
			["奶桶", "小麦粉", null],
			[null, null, null]
		],
		"ingredients": [
			["葡萄", 1],
			["鸡蛋", 1],
			["糖", 1],
			["奶桶", 1],
			["小麦粉", 1]
		],
		"count": 1
	},
	"蓝莓灌木丛": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"蓝莓": {
		"map": [
			[null, null, null],
			[null, "蓝莓灌木丛", null],
			[null, null, null]
		],
		"ingredients": [
			["蓝莓灌木丛", 1]
		],
		"count": 1
	},
	"蓝莓汁": {
		"type": "榨汁机",
		"map": [
			["蓝莓", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["蓝莓", 1]
		],
		"count": 1
	},
	"蓝莓冰沙": {
		"type": "增强型工作台",
		"map": [
			["蓝莓汁", "冰块", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["蓝莓汁", 1],
			["冰块", 1]
		],
		"count": 1
	},
	"蓝莓果酱三明治": {
		"map": [
			[null, "面包", null],
			[null, "蓝莓汁", null],
			[null, "面包", null]
		],
		"ingredients": [
			["面包", 2],
			["蓝莓汁", 1]
		],
		"count": 1
	},
	"蓝莓派": {
		"map": [
			["蓝莓", "鸡蛋", "糖"],
			["奶桶", "小麦粉", null],
			[null, null, null]
		],
		"ingredients": [
			["蓝莓", 1],
			["鸡蛋", 1],
			["糖", 1],
			["奶桶", 1],
			["小麦粉", 1]
		],
		"count": 1
	},
	"接骨木果灌木丛": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"接骨木果": {
		"map": [
			[null, null, null],
			[null, "接骨木果灌木丛", null],
			[null, null, null]
		],
		"ingredients": [
			["接骨木果灌木丛", 1]
		],
		"count": 1
	},
	"接骨木果汁": {
		"type": "榨汁机",
		"map": [
			["接骨木果", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["接骨木果", 1]
		],
		"count": 1
	},
	"接骨木果冰沙": {
		"type": "增强型工作台",
		"map": [
			["接骨木果汁", "冰块", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["接骨木果汁", 1],
			["冰块", 1]
		],
		"count": 1
	},
	"接骨木果果酱三明治": {
		"map": [
			[null, "面包", null],
			[null, "接骨木果汁", null],
			[null, "面包", null]
		],
		"ingredients": [
			["面包", 2],
			["接骨木果汁", 1]
		],
		"count": 1
	},
	"接骨木果派": {
		"map": [
			["接骨木果", "鸡蛋", "糖"],
			["奶桶", "小麦粉", null],
			[null, null, null]
		],
		"ingredients": [
			["接骨木果", 1],
			["鸡蛋", 1],
			["糖", 1],
			["奶桶", 1],
			["小麦粉", 1]
		],
		"count": 1
	},
	"树莓灌木丛": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"树莓": {
		"map": [
			[null, null, null],
			[null, "树莓灌木丛", null],
			[null, null, null]
		],
		"ingredients": [
			["树莓灌木丛", 1]
		],
		"count": 1
	},
	"树莓汁": {
		"type": "榨汁机",
		"map": [
			["树莓", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["树莓", 1]
		],
		"count": 1
	},
	"树莓冰沙": {
		"type": "增强型工作台",
		"map": [
			["树莓汁", "冰块", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["树莓汁", 1],
			["冰块", 1]
		],
		"count": 1
	},
	"树莓果酱三明治": {
		"map": [
			[null, "面包", null],
			[null, "树莓汁", null],
			[null, "面包", null]
		],
		"ingredients": [
			["面包", 2],
			["树莓汁", 1]
		],
		"count": 1
	},
	"树莓派": {
		"map": [
			["树莓", "鸡蛋", "糖"],
			["奶桶", "小麦粉", null],
			[null, null, null]
		],
		"ingredients": [
			["树莓", 1],
			["鸡蛋", 1],
			["糖", 1],
			["奶桶", 1],
			["小麦粉", 1]
		],
		"count": 1
	},
	"黑莓灌木丛": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"黑莓": {
		"map": [
			[null, null, null],
			[null, "黑莓灌木丛", null],
			[null, null, null]
		],
		"ingredients": [
			["黑莓灌木丛", 1]
		],
		"count": 1
	},
	"黑莓汁": {
		"type": "榨汁机",
		"map": [
			["黑莓", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["黑莓", 1]
		],
		"count": 1
	},
	"黑莓冰沙": {
		"type": "增强型工作台",
		"map": [
			["黑莓汁", "冰块", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["黑莓汁", 1],
			["冰块", 1]
		],
		"count": 1
	},
	"黑莓果酱三明治": {
		"map": [
			[null, "面包", null],
			[null, "黑莓汁", null],
			[null, "面包", null]
		],
		"ingredients": [
			["面包", 2],
			["黑莓汁", 1]
		],
		"count": 1
	},
	"黑莓派": {
		"map": [
			["黑莓", "鸡蛋", "糖"],
			["奶桶", "小麦粉", null],
			[null, null, null]
		],
		"ingredients": [
			["黑莓", 1],
			["鸡蛋", 1],
			["糖", 1],
			["奶桶", 1],
			["小麦粉", 1]
		],
		"count": 1
	},
	"蔓越莓灌木丛": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"蔓越莓": {
		"map": [
			[null, null, null],
			[null, "蔓越莓灌木丛", null],
			[null, null, null]
		],
		"ingredients": [
			["蔓越莓灌木丛", 1]
		],
		"count": 1
	},
	"蔓越莓汁": {
		"type": "榨汁机",
		"map": [
			["蔓越莓", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["蔓越莓", 1]
		],
		"count": 1
	},
	"蔓越莓冰沙": {
		"type": "增强型工作台",
		"map": [
			["蔓越莓汁", "冰块", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["蔓越莓汁", 1],
			["冰块", 1]
		],
		"count": 1
	},
	"蔓越莓果酱三明治": {
		"map": [
			[null, "面包", null],
			[null, "蔓越莓汁", null],
			[null, "面包", null]
		],
		"ingredients": [
			["面包", 2],
			["蔓越莓汁", 1]
		],
		"count": 1
	},
	"蔓越莓派": {
		"map": [
			["蔓越莓", "鸡蛋", "糖"],
			["奶桶", "小麦粉", null],
			[null, null, null]
		],
		"ingredients": [
			["蔓越莓", 1],
			["鸡蛋", 1],
			["糖", 1],
			["奶桶", 1],
			["小麦粉", 1]
		],
		"count": 1
	},
	"越橘灌木丛": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"越橘": {
		"map": [
			[null, null, null],
			[null, "越橘灌木丛", null],
			[null, null, null]
		],
		"ingredients": [
			["越橘灌木丛", 1]
		],
		"count": 1
	},
	"越橘汁": {
		"type": "榨汁机",
		"map": [
			["越橘", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["越橘", 1]
		],
		"count": 1
	},
	"越橘冰沙": {
		"type": "增强型工作台",
		"map": [
			["越橘汁", "冰块", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["越橘汁", 1],
			["冰块", 1]
		],
		"count": 1
	},
	"越橘果酱三明治": {
		"map": [
			[null, "面包", null],
			[null, "越橘汁", null],
			[null, "面包", null]
		],
		"ingredients": [
			["面包", 2],
			["越橘汁", 1]
		],
		"count": 1
	},
	"越橘派": {
		"map": [
			["越橘", "鸡蛋", "糖"],
			["奶桶", "小麦粉", null],
			[null, null, null]
		],
		"ingredients": [
			["越橘", 1],
			["鸡蛋", 1],
			["糖", 1],
			["奶桶", 1],
			["小麦粉", 1]
		],
		"count": 1
	},
	"草莓灌木丛": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"草莓": {
		"map": [
			[null, null, null],
			[null, "草莓灌木丛", null],
			[null, null, null]
		],
		"ingredients": [
			["草莓灌木丛", 1]
		],
		"count": 1
	},
	"草莓汁": {
		"type": "榨汁机",
		"map": [
			["草莓", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["草莓", 1]
		],
		"count": 1
	},
	"草莓冰沙": {
		"type": "增强型工作台",
		"map": [
			["草莓汁", "冰块", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["草莓汁", 1],
			["冰块", 1]
		],
		"count": 1
	},
	"草莓果酱三明治": {
		"map": [
			[null, "面包", null],
			[null, "草莓汁", null],
			[null, "面包", null]
		],
		"ingredients": [
			["面包", 2],
			["草莓汁", 1]
		],
		"count": 1
	},
	"草莓派": {
		"map": [
			["草莓", "鸡蛋", "糖"],
			["奶桶", "小麦粉", null],
			[null, null, null]
		],
		"ingredients": [
			["草莓", 1],
			["鸡蛋", 1],
			["糖", 1],
			["奶桶", 1],
			["小麦粉", 1]
		],
		"count": 1
	},
	"番茄植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"番茄": {
		"map": [
			[null, null, null],
			[null, "番茄植物", null],
			[null, null, null]
		],
		"ingredients": [
			["番茄植物", 1]
		],
		"count": 1
	},
	"生菜植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"生菜": {
		"map": [
			[null, null, null],
			[null, "生菜植物", null],
			[null, null, null]
		],
		"ingredients": [
			["生菜植物", 1]
		],
		"count": 1
	},
	"茶叶植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"茶叶": {
		"map": [
			[null, null, null],
			[null, "茶叶植物", null],
			[null, null, null]
		],
		"ingredients": [
			["茶叶植物", 1]
		],
		"count": 1
	},
	"卷心菜植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"卷心菜": {
		"map": [
			[null, null, null],
			[null, "卷心菜植物", null],
			[null, null, null]
		],
		"ingredients": [
			["卷心菜植物", 1]
		],
		"count": 1
	},
	"地瓜植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"地瓜": {
		"map": [
			[null, null, null],
			[null, "地瓜植物", null],
			[null, null, null]
		],
		"ingredients": [
			["地瓜植物", 1]
		],
		"count": 1
	},
	"芥菜籽植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"芥菜籽": {
		"map": [
			[null, null, null],
			[null, "芥菜籽植物", null],
			[null, null, null]
		],
		"ingredients": [
			["芥菜籽植物", 1]
		],
		"count": 1
	},
	"咖喱叶植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"咖喱叶": {
		"map": [
			[null, null, null],
			[null, "咖喱叶植物", null],
			[null, null, null]
		],
		"ingredients": [
			["咖喱叶植物", 1]
		],
		"count": 1
	},
	"洋葱植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"洋葱": {
		"map": [
			[null, null, null],
			[null, "洋葱植物", null],
			[null, null, null]
		],
		"ingredients": [
			["洋葱植物", 1]
		],
		"count": 1
	},
	"大蒜植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"大蒜": {
		"map": [
			[null, null, null],
			[null, "大蒜植物", null],
			[null, null, null]
		],
		"ingredients": [
			["大蒜植物", 1]
		],
		"count": 1
	},
	"香菜植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"香菜": {
		"map": [
			[null, null, null],
			[null, "香菜植物", null],
			[null, null, null]
		],
		"ingredients": [
			["香菜植物", 1]
		],
		"count": 1
	},
	"黑胡椒植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"黑胡椒": {
		"map": [
			[null, null, null],
			[null, "黑胡椒植物", null],
			[null, null, null]
		],
		"ingredients": [
			["黑胡椒植物", 1]
		],
		"count": 1
	},
	"青榴莲植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"青榴莲": {
		"map": [
			[null, null, null],
			[null, "青榴莲植物", null],
			[null, null, null]
		],
		"ingredients": [
			["青榴莲植物", 1]
		],
		"count": 1
	},
	"榴莲植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"榴莲": {
		"map": [
			[null, null, null],
			[null, "榴莲植物", null],
			[null, null, null]
		],
		"ingredients": [
			["榴莲植物", 1]
		],
		"count": 1
	},
	"哈密瓜植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"哈密瓜": {
		"map": [
			[null, null, null],
			[null, "哈密瓜植物", null],
			[null, null, null]
		],
		"ingredients": [
			["哈密瓜植物", 1]
		],
		"count": 1
	},
	"恶魔瓜植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"恶魔瓜": {
		"map": [
			[null, null, null],
			[null, "恶魔瓜植物", null],
			[null, null, null]
		],
		"ingredients": [
			["恶魔瓜植物", 1]
		],
		"count": 1
	},
	"木瓜植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"木瓜": {
		"map": [
			[null, null, null],
			[null, "木瓜植物", null],
			[null, null, null]
		],
		"ingredients": [
			["木瓜植物", 1]
		],
		"count": 1
	},
	"葱植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"葱": {
		"map": [
			[null, null, null],
			[null, "葱植物", null],
			[null, null, null]
		],
		"ingredients": [
			["葱植物", 1]
		],
		"count": 1
	},
	"生姜植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"生姜": {
		"map": [
			[null, null, null],
			[null, "生姜植物", null],
			[null, null, null]
		],
		"ingredients": [
			["生姜植物", 1]
		],
		"count": 1
	},
	"水稻植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"水稻": {
		"map": [
			[null, null, null],
			[null, "水稻植物", null],
			[null, null, null]
		],
		"ingredients": [
			["水稻植物", 1]
		],
		"count": 1
	},
	"人参果娃植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"人参果娃": {
		"map": [
			[null, null, null],
			[null, "人参果娃植物", null],
			[null, null, null]
		],
		"ingredients": [
			["人参果娃植物", 1]
		],
		"count": 1
	},
	"茄子植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"茄子": {
		"map": [
			[null, null, null],
			[null, "茄子植物", null],
			[null, null, null]
		],
		"ingredients": [
			["茄子植物", 1]
		],
		"count": 1
	},
	"红萝卜植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"红萝卜": {
		"map": [
			[null, null, null],
			[null, "红萝卜植物", null],
			[null, null, null]
		],
		"ingredients": [
			["红萝卜植物", 1]
		],
		"count": 1
	},
	"白萝卜植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"白萝卜": {
		"map": [
			[null, null, null],
			[null, "白萝卜植物", null],
			[null, null, null]
		],
		"ingredients": [
			["白萝卜植物", 1]
		],
		"count": 1
	},
	"大头菜植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"大头菜": {
		"map": [
			[null, null, null],
			[null, "大头菜植物", null],
			[null, null, null]
		],
		"ingredients": [
			["大头菜植物", 1]
		],
		"count": 1
	},
	"紫甘蓝植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"紫甘蓝": {
		"map": [
			[null, null, null],
			[null, "紫甘蓝植物", null],
			[null, null, null]
		],
		"ingredients": [
			["紫甘蓝植物", 1]
		],
		"count": 1
	},
	"树菇植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"树菇": {
		"map": [
			[null, null, null],
			[null, "树菇植物", null],
			[null, null, null]
		],
		"ingredients": [
			["树菇植物", 1]
		],
		"count": 1
	},
	"橄榄植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"橄榄": {
		"map": [
			[null, null, null],
			[null, "橄榄植物", null],
			[null, null, null]
		],
		"ingredients": [
			["橄榄植物", 1]
		],
		"count": 1
	},
	"百香果植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"百香果": {
		"map": [
			[null, null, null],
			[null, "百香果植物", null],
			[null, null, null]
		],
		"ingredients": [
			["百香果植物", 1]
		],
		"count": 1
	},
	"风滚草植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"风滚草": {
		"map": [
			[null, null, null],
			[null, "风滚草植物", null],
			[null, null, null]
		],
		"ingredients": [
			["风滚草植物", 1]
		],
		"count": 1
	},
	"日本南瓜植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"日本南瓜": {
		"map": [
			[null, null, null],
			[null, "日本南瓜植物", null],
			[null, null, null]
		],
		"ingredients": [
			["日本南瓜植物", 1]
		],
		"count": 1
	},
	"蓝南瓜植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"蓝南瓜": {
		"map": [
			[null, null, null],
			[null, "蓝南瓜植物", null],
			[null, null, null]
		],
		"ingredients": [
			["蓝南瓜植物", 1]
		],
		"count": 1
	},
	"柿子植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"柿子": {
		"map": [
			[null, null, null],
			[null, "柿子植物", null],
			[null, null, null]
		],
		"ingredients": [
			["柿子植物", 1]
		],
		"count": 1
	},
	"彩虹果植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"彩虹果": {
		"map": [
			[null, null, null],
			[null, "彩虹果植物", null],
			[null, null, null]
		],
		"ingredients": [
			["彩虹果植物", 1]
		],
		"count": 1
	},
	"无花果植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"无花果": {
		"map": [
			[null, null, null],
			[null, "无花果植物", null],
			[null, null, null]
		],
		"ingredients": [
			["无花果植物", 1]
		],
		"count": 1
	},
	"酒香果植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"酒香果": {
		"map": [
			[null, null, null],
			[null, "酒香果植物", null],
			[null, null, null]
		],
		"ingredients": [
			["酒香果植物", 1]
		],
		"count": 1
	},
	"仙馐果植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"仙馐果": {
		"map": [
			[null, null, null],
			[null, "仙馐果植物", null],
			[null, null, null]
		],
		"ingredients": [
			["仙馐果植物", 1]
		],
		"count": 1
	},
	"花生植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"花生": {
		"map": [
			[null, null, null],
			[null, "花生植物", null],
			[null, null, null]
		],
		"ingredients": [
			["花生植物", 1]
		],
		"count": 1
	},
	"榛子植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"榛子": {
		"map": [
			[null, null, null],
			[null, "榛子植物", null],
			[null, null, null]
		],
		"ingredients": [
			["榛子植物", 1]
		],
		"count": 1
	},
	"核桃植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"核桃": {
		"map": [
			[null, null, null],
			[null, "核桃植物", null],
			[null, null, null]
		],
		"ingredients": [
			["核桃植物", 1]
		],
		"count": 1
	},
	"杏仁植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"杏仁": {
		"map": [
			[null, null, null],
			[null, "杏仁植物", null],
			[null, null, null]
		],
		"ingredients": [
			["杏仁植物", 1]
		],
		"count": 1
	},
	"开心果植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"开心果": {
		"map": [
			[null, null, null],
			[null, "开心果植物", null],
			[null, null, null]
		],
		"ingredients": [
			["开心果植物", 1]
		],
		"count": 1
	},
	"红醋栗植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"红醋栗": {
		"map": [
			[null, null, null],
			[null, "红醋栗植物", null],
			[null, null, null]
		],
		"ingredients": [
			["红醋栗植物", 1]
		],
		"count": 1
	},
	"花椰菜植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"花椰菜": {
		"map": [
			[null, null, null],
			[null, "花椰菜植物", null],
			[null, null, null]
		],
		"ingredients": [
			["花椰菜植物", 1]
		],
		"count": 1
	},
	"棉花植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"棉花": {
		"map": [
			[null, null, null],
			[null, "棉花植物", null],
			[null, null, null]
		],
		"ingredients": [
			["棉花植物", 1]
		],
		"count": 1
	},
	"龙舌兰植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"龙舌兰": {
		"map": [
			[null, null, null],
			[null, "龙舌兰植物", null],
			[null, null, null]
		],
		"ingredients": [
			["龙舌兰植物", 1]
		],
		"count": 1
	},
	"豌豆射手植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"豌豆射手": {
		"map": [
			[null, null, null],
			[null, "豌豆射手植物", null],
			[null, null, null]
		],
		"ingredients": [
			["豌豆射手植物", 1]
		],
		"count": 1
	},
	"向日葵植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"向日葵": {
		"map": [
			[null, null, null],
			[null, "向日葵植物", null],
			[null, null, null]
		],
		"ingredients": [
			["向日葵植物", 1]
		],
		"count": 1
	},
	"大嘴花植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"大嘴花": {
		"map": [
			[null, null, null],
			[null, "大嘴花植物", null],
			[null, null, null]
		],
		"ingredients": [
			["大嘴花植物", 1]
		],
		"count": 1
	},
	"玉米植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"玉米": {
		"map": [
			[null, null, null],
			[null, "玉米植物", null],
			[null, null, null]
		],
		"ingredients": [
			["玉米植物", 1]
		],
		"count": 1
	},
	"红玉米植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"红玉米": {
		"map": [
			[null, null, null],
			[null, "红玉米植物", null],
			[null, null, null]
		],
		"ingredients": [
			["红玉米植物", 1]
		],
		"count": 1
	},
	"蓝玉米植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"蓝玉米": {
		"map": [
			[null, null, null],
			[null, "蓝玉米植物", null],
			[null, null, null]
		],
		"ingredients": [
			["蓝玉米植物", 1]
		],
		"count": 1
	},
	"菠萝植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"菠萝": {
		"map": [
			[null, null, null],
			[null, "菠萝植物", null],
			[null, null, null]
		],
		"ingredients": [
			["菠萝植物", 1]
		],
		"count": 1
	},
	"红甜椒植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"红甜椒": {
		"map": [
			[null, null, null],
			[null, "红甜椒植物", null],
			[null, null, null]
		],
		"ingredients": [
			["红甜椒植物", 1]
		],
		"count": 1
	},
	"墨西哥辣椒植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"墨西哥辣椒": {
		"map": [
			[null, null, null],
			[null, "墨西哥辣椒植物", null],
			[null, null, null]
		],
		"ingredients": [
			["墨西哥辣椒植物", 1]
		],
		"count": 1
	},
	"熏辣椒植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"熏辣椒": {
		"map": [
			[null, null, null],
			[null, "熏辣椒植物", null],
			[null, null, null]
		],
		"ingredients": [
			["熏辣椒植物", 1]
		],
		"count": 1
	},
	"哈瓦那辣椒植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"哈瓦那辣椒": {
		"map": [
			[null, null, null],
			[null, "哈瓦那辣椒植物", null],
			[null, null, null]
		],
		"ingredients": [
			["哈瓦那辣椒植物", 1]
		],
		"count": 1
	},
	"卡罗莱纳死神辣椒植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"卡罗莱纳死神辣椒": {
		"map": [
			[null, null, null],
			[null, "卡罗莱纳死神辣椒植物", null],
			[null, null, null]
		],
		"ingredients": [
			["卡罗莱纳死神辣椒植物", 1]
		],
		"count": 1
	},
	"荔枝植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"荔枝": {
		"map": [
			[null, null, null],
			[null, "荔枝植物", null],
			[null, null, null]
		],
		"ingredients": [
			["荔枝植物", 1]
		],
		"count": 1
	},
	"香蕉植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"香蕉": {
		"map": [
			[null, null, null],
			[null, "香蕉植物", null],
			[null, null, null]
		],
		"ingredients": [
			["香蕉植物", 1]
		],
		"count": 1
	},
	"猕猴桃植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"猕猴桃": {
		"map": [
			[null, null, null],
			[null, "猕猴桃植物", null],
			[null, null, null]
		],
		"ingredients": [
			["猕猴桃植物", 1]
		],
		"count": 1
	},
	"鳄梨植物": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"鳄梨": {
		"map": [
			[null, null, null],
			[null, "鳄梨植物", null],
			[null, null, null]
		],
		"ingredients": [
			["鳄梨植物", 1]
		],
		"count": 1
	},
	"橡树苹果树苗": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"橡树苹果": {
		"map": [
			[null, null, null],
			[null, "橡树苹果树苗", null],
			[null, null, null]
		],
		"ingredients": [
			["橡树苹果树苗", 1]
		],
		"count": 1
	},
	"橡树苹果汁": {
		"type": "榨汁机",
		"map": [
			["橡树苹果", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["橡树苹果", 1]
		],
		"count": 1
	},
	"橡树苹果派": {
		"map": [
			["橡树苹果", "鸡蛋", "糖"],
			["奶桶", "小麦粉", null],
			[null, null, null]
		],
		"ingredients": [
			["橡树苹果", 1],
			["鸡蛋", 1],
			["糖", 1],
			["奶桶", 1],
			["小麦粉", 1]
		],
		"count": 1
	},
	"椰子树苗": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"椰子": {
		"map": [
			[null, null, null],
			[null, "椰子树苗", null],
			[null, null, null]
		],
		"ingredients": [
			["椰子树苗", 1]
		],
		"count": 1
	},
	"椰奶": {
		"type": "榨汁机",
		"map": [
			["椰子", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["椰子", 1]
		],
		"count": 1
	},
	"樱桃树苗": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"樱桃": {
		"map": [
			[null, null, null],
			[null, "樱桃树苗", null],
			[null, null, null]
		],
		"ingredients": [
			["樱桃树苗", 1]
		],
		"count": 1
	},
	"樱桃汁": {
		"type": "榨汁机",
		"map": [
			["樱桃", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["樱桃", 1]
		],
		"count": 1
	},
	"樱桃派": {
		"map": [
			["樱桃", "鸡蛋", "糖"],
			["奶桶", "小麦粉", null],
			[null, null, null]
		],
		"ingredients": [
			["樱桃", 1],
			["鸡蛋", 1],
			["糖", 1],
			["奶桶", 1],
			["小麦粉", 1]
		],
		"count": 1
	},
	"石榴树苗": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"石榴": {
		"map": [
			[null, null, null],
			[null, "石榴树苗", null],
			[null, null, null]
		],
		"ingredients": [
			["石榴树苗", 1]
		],
		"count": 1
	},
	"石榴汁": {
		"type": "榨汁机",
		"map": [
			["石榴", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["石榴", 1]
		],
		"count": 1
	},
	"石榴派": {
		"map": [
			["石榴", "鸡蛋", "糖"],
			["奶桶", "小麦粉", null],
			[null, null, null]
		],
		"ingredients": [
			["石榴", 1],
			["鸡蛋", 1],
			["糖", 1],
			["奶桶", 1],
			["小麦粉", 1]
		],
		"count": 1
	},
	"柠檬树苗": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"柠檬": {
		"map": [
			[null, null, null],
			[null, "柠檬树苗", null],
			[null, null, null]
		],
		"ingredients": [
			["柠檬树苗", 1]
		],
		"count": 1
	},
	"柠檬汁": {
		"type": "榨汁机",
		"map": [
			["柠檬", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["柠檬", 1]
		],
		"count": 1
	},
	"柠檬派": {
		"map": [
			["柠檬", "鸡蛋", "糖"],
			["奶桶", "小麦粉", null],
			[null, null, null]
		],
		"ingredients": [
			["柠檬", 1],
			["鸡蛋", 1],
			["糖", 1],
			["奶桶", 1],
			["小麦粉", 1]
		],
		"count": 1
	},
	"梅子树苗": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"梅子": {
		"map": [
			[null, null, null],
			[null, "梅子树苗", null],
			[null, null, null]
		],
		"ingredients": [
			["梅子树苗", 1]
		],
		"count": 1
	},
	"酸梅汤": {
		"type": "榨汁机",
		"map": [
			["梅子", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["梅子", 1]
		],
		"count": 1
	},
	"梅子派": {
		"map": [
			["梅子", "鸡蛋", "糖"],
			["奶桶", "小麦粉", null],
			[null, null, null]
		],
		"ingredients": [
			["梅子", 1],
			["鸡蛋", 1],
			["糖", 1],
			["奶桶", 1],
			["小麦粉", 1]
		],
		"count": 1
	},
	"酸橙树苗": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"酸橙": {
		"map": [
			[null, null, null],
			[null, "酸橙树苗", null],
			[null, null, null]
		],
		"ingredients": [
			["酸橙树苗", 1]
		],
		"count": 1
	},
	"酸橙汁": {
		"type": "榨汁机",
		"map": [
			["酸橙", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["酸橙", 1]
		],
		"count": 1
	},
	"酸橙派": {
		"map": [
			["酸橙", "鸡蛋", "糖"],
			["奶桶", "小麦粉", null],
			[null, null, null]
		],
		"ingredients": [
			["酸橙", 1],
			["鸡蛋", 1],
			["糖", 1],
			["奶桶", 1],
			["小麦粉", 1]
		],
		"count": 1
	},
	"橙子树苗": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"橙子": {
		"map": [
			[null, null, null],
			[null, "橙子树苗", null],
			[null, null, null]
		],
		"ingredients": [
			["橙子树苗", 1]
		],
		"count": 1
	},
	"橙汁": {
		"type": "榨汁机",
		"map": [
			["橙子", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["橙子", 1]
		],
		"count": 1
	},
	"橙子派": {
		"map": [
			["橙子", "鸡蛋", "糖"],
			["奶桶", "小麦粉", null],
			[null, null, null]
		],
		"ingredients": [
			["橙子", 1],
			["鸡蛋", 1],
			["糖", 1],
			["奶桶", 1],
			["小麦粉", 1]
		],
		"count": 1
	},
	"桃子树苗": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"桃子": {
		"map": [
			[null, null, null],
			[null, "桃子树苗", null],
			[null, null, null]
		],
		"ingredients": [
			["桃子树苗", 1]
		],
		"count": 1
	},
	"桃汁": {
		"type": "榨汁机",
		"map": [
			["桃子", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["桃子", 1]
		],
		"count": 1
	},
	"桃子派": {
		"map": [
			["桃子", "鸡蛋", "糖"],
			["奶桶", "小麦粉", null],
			[null, null, null]
		],
		"ingredients": [
			["桃子", 1],
			["鸡蛋", 1],
			["糖", 1],
			["奶桶", 1],
			["小麦粉", 1]
		],
		"count": 1
	},
	"梨子树苗": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"梨子": {
		"map": [
			[null, null, null],
			[null, "梨子树苗", null],
			[null, null, null]
		],
		"ingredients": [
			["梨子树苗", 1]
		],
		"count": 1
	},
	"梨汁": {
		"type": "榨汁机",
		"map": [
			["梨子", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["梨子", 1]
		],
		"count": 1
	},
	"梨子派": {
		"map": [
			["梨子", "鸡蛋", "糖"],
			["奶桶", "小麦粉", null],
			[null, null, null]
		],
		"ingredients": [
			["梨子", 1],
			["鸡蛋", 1],
			["糖", 1],
			["奶桶", 1],
			["小麦粉", 1]
		],
		"count": 1
	},
	"火龙果树苗": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"火龙果": {
		"map": [
			[null, null, null],
			[null, "火龙果树苗", null],
			[null, null, null]
		],
		"ingredients": [
			["火龙果树苗", 1]
		],
		"count": 1
	},
	"火龙果汁": {
		"type": "榨汁机",
		"map": [
			["火龙果", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["火龙果", 1]
		],
		"count": 1
	},
	"火龙果派": {
		"map": [
			["火龙果", "鸡蛋", "糖"],
			["奶桶", "小麦粉", null],
			[null, null, null]
		],
		"ingredients": [
			["火龙果", 1],
			["鸡蛋", 1],
			["糖", 1],
			["奶桶", 1],
			["小麦粉", 1]
		],
		"count": 1
	},
	"酸橙冰沙": {
		"type": "增强型工作台",
		"map": [
			["酸橙汁", "冰块", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["酸橙汁", 1],
			["冰块", 1]
		],
		"count": 1
	},
	"番茄汁": {
		"type": "榨汁机",
		"map": [
			["番茄", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["番茄", 1]
		],
		"count": 1
	},
	"葡萄酒": {
		"type": "增强型工作台",
		"map": [
			["葡萄", "糖", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["葡萄", 1],
			["糖", 1]
		],
		"count": 1
	},
	"冰镇柠檬茶": {
		"type": "增强型工作台",
		"map": [
			["柠檬", "冰块", "茶叶"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["柠檬", 1],
			["冰块", 1],
			["茶叶", 1]
		],
		"count": 1
	},
	"冰镇树莓茶": {
		"type": "增强型工作台",
		"map": [
			["树莓", "冰块", "茶叶"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["树莓", 1],
			["冰块", 1],
			["茶叶", 1]
		],
		"count": 1
	},
	"冰镇蜜桃茶": {
		"type": "增强型工作台",
		"map": [
			["桃子", "冰块", "茶叶"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["桃子", 1],
			["冰块", 1],
			["茶叶", 1]
		],
		"count": 1
	},
	"冰镇草莓茶": {
		"type": "增强型工作台",
		"map": [
			["草莓", "冰块", "茶叶"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["草莓", 1],
			["冰块", 1],
			["茶叶", 1]
		],
		"count": 1
	},
	"冰镇樱桃茶": {
		"type": "增强型工作台",
		"map": [
			["樱桃", "冰块", "茶叶"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["樱桃", 1],
			["冰块", 1],
			["茶叶", 1]
		],
		"count": 1
	},
	"泰式奶茶": {
		"type": "增强型工作台",
		"map": [
			["茶叶", "糖", "浓奶油"],
			["椰奶", null, null],
			[null, null, null]
		],
		"ingredients": [
			["茶叶", 1],
			["糖", 1],
			["浓奶油", 1],
			["椰奶", 1]
		],
		"count": 1
	},
	"南瓜面包": {
		"map": [
			["南瓜", "糖", "小麦粉"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["南瓜", 1],
			["糖", 1],
			["小麦粉", 1]
		],
		"count": 1
	},
	"蛋黄酱": {
		"type": "磨石",
		"map": [
			["鸡蛋", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["鸡蛋", 1]
		],
		"count": 1
	},
	"芥末": {
		"type": "磨石",
		"map": [
			["芥菜籽", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["芥菜籽", 1]
		],
		"count": 1
	},
	"BBQ 烤肉酱": {
		"type": "增强型工作台",
		"map": [
			["番茄", "芥末", "盐"],
			["糖", null, null],
			[null, null, null]
		],
		"ingredients": [
			["番茄", 1],
			["芥末", 1],
			["盐", 1],
			["糖", 1]
		],
		"count": 1
	},
	"植物油": {
		"type": "增强型工作台",
		"map": [
			["甜菜种子", "水桶", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["甜菜种子", 1],
			["水桶", 1]
		],
		"count": 1
	},
	"玉米粉": {
		"type": "磨石",
		"map": [
			["玉米", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["玉米", 1]
		],
		"count": 1
	},
	"酵母": {
		"type": "增强型工作台",
		"map": [
			["糖", "水桶", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["糖", 1],
			["水桶", 1]
		],
		"count": 1
	},
	"糖浆": {
		"type": "增强型工作台",
		"map": [
			["甜菜根", "甘蔗", "水桶"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["甜菜根", 1],
			["甘蔗", 1],
			["水桶", 1]
		],
		"count": 1
	},
	"红糖": {
		"type": "增强型工作台",
		"map": [
			["糖", "糖浆", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["糖", 1],
			["糖浆", 1]
		],
		"count": 1
	},
	"乡村肉汁": {
		"type": "增强型工作台",
		"map": [
			["小麦粉", "糖", "黑胡椒"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["小麦粉", 1],
			["糖", 1],
			["黑胡椒", 1]
		],
		"count": 1
	},
	"可食用铀盐": {
		"type": "增强型工作台",
		"map": [
			["铀", "恶魔瓜", "盐"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["铀", 1],
			["恶魔瓜", 1],
			["盐", 1]
		],
		"count": 1
	},
	"辣椒粉": {
		"type": "增强型工作台",
		"map": [
			["红甜椒", "黑胡椒", "墨西哥辣椒"],
			["熏辣椒", "哈瓦那辣椒", "卡罗莱纳死神辣椒"],
			["盐", "盐", "盐"]
		],
		"ingredients": [
			["红甜椒", 1],
			["黑胡椒", 1],
			["墨西哥辣椒", 1],
			["熏辣椒", 1],
			["哈瓦那辣椒", 1],
			["卡罗莱纳死神辣椒", 1],
			["盐", 3]
		],
		"count": 1
	},
	"大米": {
		"type": "磨石",
		"map": [
			["水稻", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["水稻", 1]
		],
		"count": 1
	},
	"巧克力棒": {
		"map": [
			["可可豆", "浓奶油", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["可可豆", 1],
			["浓奶油", 1]
		],
		"count": 1
	},
	"土豆沙拉": {
		"map": [
			["烤马铃薯", "蛋黄酱", "洋葱"],
			["碗", null, null],
			[null, null, null]
		],
		"ingredients": [
			["烤马铃薯", 1],
			["蛋黄酱", 1],
			["洋葱", 1],
			["碗", 1]
		],
		"count": 1
	},
	"鸡肉三明治": {
		"map": [
			["熟鸡肉", "蛋黄酱", "面包"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["熟鸡肉", 1],
			["蛋黄酱", 1],
			["面包", 1]
		],
		"count": 1
	},
	"鱼肉三明治": {
		"map": [
			["熟鳕鱼", "蛋黄酱", "面包"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["熟鳕鱼", 1],
			["蛋黄酱", 1],
			["面包", 1]
		],
		"count": 1
	},
	"面包圈": {
		"map": [
			["酵母", "小麦粉", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["酵母", 1],
			["小麦粉", 1]
		],
		"count": 1
	},
	"鸡蛋沙拉": {
		"map": [
			["鸡蛋", "蛋黄酱", "碗"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["鸡蛋", 1],
			["蛋黄酱", 1],
			["碗", 1]
		],
		"count": 1
	},
	"番茄汤": {
		"map": [
			["碗", "番茄", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["碗", 1],
			["番茄", 1]
		],
		"count": 1
	},
	"草莓沙拉": {
		"map": [
			["碗", "草莓", "生菜"],
			["番茄", null, null],
			[null, null, null]
		],
		"ingredients": [
			["碗", 1],
			["草莓", 1],
			["生菜", 1],
			["番茄", 1]
		],
		"count": 1
	},
	"葡萄沙拉": {
		"map": [
			["碗", "葡萄", "生菜"],
			["番茄", null, null],
			[null, null, null]
		],
		"ingredients": [
			["碗", 1],
			["葡萄", 1],
			["生菜", 1],
			["番茄", 1]
		],
		"count": 1
	},
	"咖喱鸡": {
		"map": [
			["香菜", "熟鸡肉", "红糖"],
			["咖喱叶", "植物油", "咖喱叶"],
			["洋葱", "碗", "大蒜"]
		],
		"ingredients": [
			["香菜", 1],
			["熟鸡肉", 1],
			["红糖", 1],
			["咖喱叶", 2],
			["植物油", 1],
			["洋葱", 1],
			["碗", 1],
			["大蒜", 1]
		],
		"count": 1
	},
	"椰子咖喱鸡": {
		"map": [
			["椰子", "椰子", "咖喱鸡"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["椰子", 2],
			["咖喱鸡", 1]
		],
		"count": 1
	},
	"小饼干": {
		"map": [
			["小麦粉", "奶酪", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["小麦粉", 1],
			["奶酪", 1]
		],
		"count": 1
	},
	"乡村肉汁饼干": {
		"map": [
			["乡村肉汁", "乡村肉汁", "乡村肉汁"],
			["小饼干", "小饼干", "小饼干"],
			[null, "碗", null]
		],
		"ingredients": [
			["乡村肉汁", 3],
			["小饼干", 3],
			["碗", 1]
		],
		"count": 1
	},
	"奶酪蛋糕": {
		"map": [
			["糖", "小麦粉", "浓奶油"],
			["鸡蛋", null, null],
			[null, null, null]
		],
		"ingredients": [
			["糖", 1],
			["小麦粉", 1],
			["浓奶油", 1],
			["鸡蛋", 1]
		],
		"count": 1
	},
	"樱桃奶酪蛋糕": {
		"map": [
			["奶酪蛋糕", "樱桃", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["奶酪蛋糕", 1],
			["樱桃", 1]
		],
		"count": 1
	},
	"蓝莓奶酪蛋糕": {
		"map": [
			["奶酪蛋糕", "蓝莓", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["奶酪蛋糕", 1],
			["蓝莓", 1]
		],
		"count": 1
	},
	"南瓜奶酪蛋糕": {
		"map": [
			["奶酪蛋糕", "南瓜", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["奶酪蛋糕", 1],
			["南瓜", 1]
		],
		"count": 1
	},
	"蜜梨奶酪蛋糕": {
		"map": [
			["奶酪蛋糕", "糖", "梨子"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["奶酪蛋糕", 1],
			["糖", 1],
			["梨子", 1]
		],
		"count": 1
	},
	"黑莓馅饼": {
		"map": [
			["糖", "黑莓", "小麦粉"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["糖", 1],
			["黑莓", 1],
			["小麦粉", 1]
		],
		"count": 1
	},
	"奶油蛋白甜饼": {
		"map": [
			["柠檬", "草莓", "糖"],
			["鸡蛋", "浓奶油", null],
			[null, null, null]
		],
		"ingredients": [
			["柠檬", 1],
			["草莓", 1],
			["糖", 1],
			["鸡蛋", 1],
			["浓奶油", 1]
		],
		"count": 1
	},
	"玉米棒": {
		"map": [
			["奶酪", "玉米", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["奶酪", 1],
			["玉米", 1]
		],
		"count": 1
	},
	"奶油玉米": {
		"map": [
			["浓奶油", "玉米", "碗"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["浓奶油", 1],
			["玉米", 1],
			["碗", 1]
		],
		"count": 1
	},
	"培根": {
		"map": [
			["熟猪排", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["熟猪排", 1]
		],
		"count": 3
	},
	"三明治": {
		"map": [
			["面包", "蛋黄酱", "牛排"],
			["番茄", "生菜", null],
			[null, null, null]
		],
		"ingredients": [
			["面包", 1],
			["蛋黄酱", 1],
			["牛排", 1],
			["番茄", 1],
			["生菜", 1]
		],
		"count": 1
	},
	"培根生菜番茄三明治": {
		"map": [
			["面包", "熟猪排", "番茄"],
			["生菜", null, null],
			[null, null, null]
		],
		"ingredients": [
			["面包", 1],
			["熟猪排", 1],
			["番茄", 1],
			["生菜", 1]
		],
		"count": 1
	},
	"鸡肉生菜三明治": {
		"map": [
			["鸡肉三明治", "生菜", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["鸡肉三明治", 1],
			["生菜", 1]
		],
		"count": 1
	},
	"鱼肉生菜三明治": {
		"map": [
			["鱼肉三明治", "生菜", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["鱼肉三明治", 1],
			["生菜", 1]
		],
		"count": 1
	},
	"汉堡": {
		"map": [
			["面包", "牛排", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["面包", 1],
			["牛排", 1]
		],
		"count": 1
	},
	"芝士汉堡": {
		"map": [
			["汉堡", "黄油", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["汉堡", 1],
			["黄油", 1]
		],
		"count": 1
	},
	"芝士培根汉堡": {
		"map": [
			["芝士汉堡", "培根", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["芝士汉堡", 1],
			["培根", 1]
		],
		"count": 1
	},
	"巨无霸": {
		"map": [
			["芝士汉堡", "生菜", "番茄"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["芝士汉堡", 1],
			["生菜", 1],
			["番茄", 1]
		],
		"count": 1
	},
	"蒜蓉面包": {
		"map": [
			["大蒜", "面包", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["大蒜", 1],
			["面包", 1]
		],
		"count": 1
	},
	"芝士蒜蓉面包": {
		"map": [
			["黄油", "大蒜", "面包"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["黄油", 1],
			["大蒜", 1],
			["面包", 1]
		],
		"count": 1
	},
	"胡萝卜蛋糕": {
		"map": [
			["胡萝卜", "小麦粉", "糖"],
			["鸡蛋", null, null],
			[null, null, null]
		],
		"ingredients": [
			["胡萝卜", 1],
			["小麦粉", 1],
			["糖", 1],
			["鸡蛋", 1]
		],
		"count": 1
	},
	"鸡肉汉堡": {
		"map": [
			["面包", "熟鸡肉", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["面包", 1],
			["熟鸡肉", 1]
		],
		"count": 1
	},
	"鸡肉芝士汉堡": {
		"map": [
			["鸡肉汉堡", "黄油", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["鸡肉汉堡", 1],
			["黄油", 1]
		],
		"count": 1
	},
	"培根汉堡": {
		"map": [
			["面包", "培根", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["面包", 1],
			["培根", 1]
		],
		"count": 1
	},
	"培根三明治": {
		"map": [
			["面包", "培根", "蛋黄酱"],
			["番茄", "生菜", null],
			[null, null, null]
		],
		"ingredients": [
			["面包", 1],
			["培根", 1],
			["蛋黄酱", 1],
			["番茄", 1],
			["生菜", 1]
		],
		"count": 1
	},
	"墨西哥卷饼": {
		"map": [
			["玉米粉", "牛排", "生菜"],
			["番茄", "黄油", null],
			[null, null, null]
		],
		"ingredients": [
			["玉米粉", 1],
			["牛排", 1],
			["生菜", 1],
			["番茄", 1],
			["黄油", 1]
		],
		"count": 1
	},
	"鱼肉卷饼": {
		"map": [
			["玉米粉", "熟鳕鱼", "生菜"],
			["番茄", "黄油", null],
			[null, null, null]
		],
		"ingredients": [
			["玉米粉", 1],
			["熟鳕鱼", 1],
			["生菜", 1],
			["番茄", 1],
			["黄油", 1]
		],
		"count": 1
	},
	"炸玉米卷": {
		"map": [
			["玉米粉", "牛排", "香菜"],
			["洋葱", null, null],
			[null, null, null]
		],
		"ingredients": [
			["玉米粉", 1],
			["牛排", 1],
			["香菜", 1],
			["洋葱", 1]
		],
		"count": 1
	},
	"树莓汁饼干": {
		"map": [
			[null, "小饼干", null],
			[null, "树莓汁", null],
			[null, "小饼干", null]
		],
		"ingredients": [
			["小饼干", 2],
			["树莓汁", 1]
		],
		"count": 1
	},
	"煎饼": {
		"map": [
			["小麦粉", "糖", "奶酪"],
			["鸡蛋", "鸡蛋", null],
			[null, null, null]
		],
		"ingredients": [
			["小麦粉", 1],
			["糖", 1],
			["奶酪", 1],
			["鸡蛋", 2]
		],
		"count": 1
	},
	"蓝莓煎饼": {
		"map": [
			["煎饼", "蓝莓", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["煎饼", 1],
			["蓝莓", 1]
		],
		"count": 1
	},
	"甜浆果煎饼": {
		"map": [
			["煎饼", "甜浆果", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["煎饼", 1],
			["甜浆果", 1]
		],
		"count": 1
	},
	"薯条": {
		"map": [
			["马铃薯", "盐", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["马铃薯", 1],
			["盐", 1]
		],
		"count": 1
	},
	"爆米花": {
		"map": [
			["玉米", "奶酪", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["玉米", 1],
			["奶酪", 1]
		],
		"count": 1
	},
	"甜爆米花": {
		"map": [
			["玉米", "奶酪", "糖"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["玉米", 1],
			["奶酪", 1],
			["糖", 1]
		],
		"count": 1
	},
	"咸爆米花": {
		"map": [
			["玉米", "奶酪", "盐"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["玉米", 1],
			["奶酪", 1],
			["盐", 1]
		],
		"count": 1
	},
	"牧羊人派": {
		"map": [
			["卷心菜", "胡萝卜", "小麦粉"],
			["牛排", "番茄", null],
			[null, null, null]
		],
		"ingredients": [
			["卷心菜", 1],
			["胡萝卜", 1],
			["小麦粉", 1],
			["牛排", 1],
			["番茄", 1]
		],
		"count": 1
	},
	"鸡肉派": {
		"map": [
			["熟鸡肉", "胡萝卜", "小麦粉"],
			["马铃薯", null, null],
			[null, null, null]
		],
		"ingredients": [
			["熟鸡肉", 1],
			["胡萝卜", 1],
			["小麦粉", 1],
			["马铃薯", 1]
		],
		"count": 1
	},
	"巧克力蛋糕": {
		"map": [
			["巧克力棒", "糖", "小麦粉"],
			["奶酪", "鸡蛋", null],
			[null, null, null]
		],
		"ingredients": [
			["巧克力棒", 1],
			["糖", 1],
			["小麦粉", 1],
			["奶酪", 1],
			["鸡蛋", 1]
		],
		"count": 1
	},
	"奶油曲奇": {
		"map": [
			["巧克力棒", "糖", "小麦粉"],
			["奶酪", "浓奶油", null],
			[null, null, null]
		],
		"ingredients": [
			["巧克力棒", 1],
			["糖", 1],
			["小麦粉", 1],
			["奶酪", 1],
			["浓奶油", 1]
		],
		"count": 1
	},
	"蓝莓松饼": {
		"map": [
			["蓝莓", "糖", "小麦粉"],
			["奶酪", "浓奶油", "鸡蛋"],
			[null, null, null]
		],
		"ingredients": [
			["蓝莓", 1],
			["糖", 1],
			["小麦粉", 1],
			["奶酪", 1],
			["浓奶油", 1],
			["鸡蛋", 1]
		],
		"count": 1
	},
	"南瓜松饼": {
		"map": [
			["南瓜", "糖", "小麦粉"],
			["奶酪", "浓奶油", "鸡蛋"],
			[null, null, null]
		],
		"ingredients": [
			["南瓜", 1],
			["糖", 1],
			["小麦粉", 1],
			["奶酪", 1],
			["浓奶油", 1],
			["鸡蛋", 1]
		],
		"count": 1
	},
	"巧克力片松饼": {
		"map": [
			["巧克力棒", "糖", "小麦粉"],
			["奶酪", "浓奶油", "鸡蛋"],
			[null, null, null]
		],
		"ingredients": [
			["巧克力棒", 1],
			["糖", 1],
			["小麦粉", 1],
			["奶酪", 1],
			["浓奶油", 1],
			["鸡蛋", 1]
		],
		"count": 1
	},
	"波士顿奶油馅饼": {
		"map": [
			[null, "巧克力棒", null],
			[null, "浓奶油", null],
			[null, "小饼干", null]
		],
		"ingredients": [
			["巧克力棒", 1],
			["浓奶油", 1],
			["小饼干", 1]
		],
		"count": 1
	},
	"热狗": {
		"map": [
			[null, null, null],
			[null, "熟猪排", null],
			[null, "面包", null]
		],
		"ingredients": [
			["熟猪排", 1],
			["面包", 1]
		],
		"count": 1
	},
	"培根奶酪热狗": {
		"map": [
			["培根", "热狗", "培根"],
			[null, "黄油", null],
			[null, null, null]
		],
		"ingredients": [
			["培根", 2],
			["热狗", 1],
			["黄油", 1]
		],
		"count": 1
	},
	"烤肉培根热狗": {
		"map": [
			["培根", "热狗", "培根"],
			[null, "BBQ 烤肉酱", null],
			[null, null, null]
		],
		"ingredients": [
			["培根", 2],
			["热狗", 1],
			["BBQ 烤肉酱", 1]
		],
		"count": 1
	},
	"双层烤肉培根裹芝士热狗玉米饼": {
		"map": [
			["培根", "BBQ 烤肉酱", "培根"],
			["培根", "熟猪排", "培根"],
			["玉米粉", "黄油", "玉米粉"]
		],
		"ingredients": [
			["培根", 4],
			["BBQ 烤肉酱", 1],
			["熟猪排", 1],
			["玉米粉", 2],
			["黄油", 1]
		],
		"count": 1
	},
	"甜茶": {
		"map": [
			["茶叶", "糖", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["茶叶", 1],
			["糖", 1]
		],
		"count": 1
	},
	"热可可": {
		"map": [
			["巧克力棒", "浓奶油", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["巧克力棒", 1],
			["浓奶油", 1]
		],
		"count": 1
	},
	"椰林飘香": {
		"map": [
			["菠萝", "冰块", "椰奶"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["菠萝", 1],
			["冰块", 1],
			["椰奶", 1]
		],
		"count": 1
	},
	"草莓巧克力": {
		"map": [
			["巧克力棒", "草莓", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["巧克力棒", 1],
			["草莓", 1]
		],
		"count": 1
	},
	"柠檬水": {
		"type": "增强型工作台",
		"map": [
			["柠檬汁", "糖", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["柠檬汁", 1],
			["糖", 1]
		],
		"count": 1
	},
	"红薯派": {
		"map": [
			["地瓜", "鸡蛋", "浓奶油"],
			["小麦粉", null, null],
			[null, null, null]
		],
		"ingredients": [
			["地瓜", 1],
			["鸡蛋", 1],
			["浓奶油", 1],
			["小麦粉", 1]
		],
		"count": 1
	},
	"巧克力椰丝蛋糕": {
		"map": [
			["巧克力棒", "糖", "小麦粉"],
			["奶酪", "椰子", null],
			[null, null, null]
		],
		"ingredients": [
			["巧克力棒", 1],
			["糖", 1],
			["小麦粉", 1],
			["奶酪", 1],
			["椰子", 1]
		],
		"count": 1
	},
	"华夫饼": {
		"map": [
			["小麦粉", "鸡蛋", "糖"],
			["奶酪", null, null],
			[null, null, null]
		],
		"ingredients": [
			["小麦粉", 1],
			["鸡蛋", 1],
			["糖", 1],
			["奶酪", 1]
		],
		"count": 1
	},
	"总汇三明治": {
		"map": [
			["面包", "蛋黄酱", "培根"],
			["番茄", "生菜", "芥末"],
			[null, null, null]
		],
		"ingredients": [
			["面包", 1],
			["蛋黄酱", 1],
			["培根", 1],
			["番茄", 1],
			["生菜", 1],
			["芥末", 1]
		],
		"count": 1
	},
	"玉米煎饼": {
		"map": [
			["玉米粉", "牛排", "生菜"],
			["番茄", "浓奶油", "黄油"],
			[null, null, null]
		],
		"ingredients": [
			["玉米粉", 1],
			["牛排", 1],
			["生菜", 1],
			["番茄", 1],
			["浓奶油", 1],
			["黄油", 1]
		],
		"count": 1
	},
	"鸡肉玉米煎饼": {
		"map": [
			["玉米粉", "熟鸡肉", "生菜"],
			["番茄", "浓奶油", "黄油"],
			[null, null, null]
		],
		"ingredients": [
			["玉米粉", 1],
			["熟鸡肉", 1],
			["生菜", 1],
			["番茄", 1],
			["浓奶油", 1],
			["黄油", 1]
		],
		"count": 1
	},
	"烤芝士三明治": {
		"map": [
			["面包", "熟猪排", "黄油"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["面包", 1],
			["熟猪排", 1],
			["黄油", 1]
		],
		"count": 1
	},
	"千层面": {
		"map": [
			["番茄", "黄油", "小麦粉"],
			["番茄", "黄油", "牛排"],
			[null, null, null]
		],
		"ingredients": [
			["番茄", 2],
			["黄油", 2],
			["小麦粉", 1],
			["牛排", 1]
		],
		"count": 1
	},
	"冰淇淋": {
		"map": [
			["浓奶油", "冰块", "糖"],
			["可可豆", "草莓", null],
			[null, null, null]
		],
		"ingredients": [
			["浓奶油", 1],
			["冰块", 1],
			["糖", 1],
			["可可豆", 1],
			["草莓", 1]
		],
		"count": 1
	},
	"菠萝汁": {
		"type": "榨汁机",
		"map": [
			["菠萝", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["菠萝", 1]
		],
		"count": 1
	},
	"菠萝冰沙": {
		"type": "增强型工作台",
		"map": [
			["菠萝汁", "冰块", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["菠萝汁", 1],
			["冰块", 1]
		],
		"count": 1
	},
	"提拉米苏": {
		"map": [
			["浓奶油", "鸡蛋", "糖"],
			["可可豆", "鸡蛋", null],
			[null, null, null]
		],
		"ingredients": [
			["浓奶油", 1],
			["鸡蛋", 2],
			["糖", 1],
			["可可豆", 1]
		],
		"count": 1
	},
	"草莓提拉米苏": {
		"map": [
			["提拉米苏", "草莓", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["提拉米苏", 1],
			["草莓", 1]
		],
		"count": 1
	},
	"树莓提拉米苏": {
		"map": [
			["提拉米苏", "树莓", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["提拉米苏", 1],
			["树莓", 1]
		],
		"count": 1
	},
	"黑莓提拉米苏": {
		"map": [
			["提拉米苏", "黑莓", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["提拉米苏", 1],
			["黑莓", 1]
		],
		"count": 1
	},
	"巧克力梨子蛋糕": {
		"map": [
			["巧克力棒", "糖", "小麦粉"],
			["奶酪", "梨子", "鸡蛋"],
			[null, null, null]
		],
		"ingredients": [
			["巧克力棒", 1],
			["糖", 1],
			["小麦粉", 1],
			["奶酪", 1],
			["梨子", 1],
			["鸡蛋", 1]
		],
		"count": 1
	},
	"苹果梨子蛋糕": {
		"map": [
			["橡树苹果", "糖", "小麦粉"],
			["奶酪", "梨子", "鸡蛋"],
			[null, null, null]
		],
		"ingredients": [
			["橡树苹果", 1],
			["糖", 1],
			["小麦粉", 1],
			["奶酪", 1],
			["梨子", 1],
			["鸡蛋", 1]
		],
		"count": 1
	},
	"酿制红甜椒": {
		"map": [
			["红甜椒", "洋葱", "大蒜"],
			["番茄", null, null],
			[null, null, null]
		],
		"ingredients": [
			["红甜椒", 1],
			["洋葱", 1],
			["大蒜", 1],
			["番茄", 1]
		],
		"count": 1
	},
	"冰可乐": {
		"type": "增强型工作台",
		"map": [
			[null, "冰块", null],
			["糖", "可可豆", "糖"],
			[null, "冰块", null]
		],
		"ingredients": [
			["冰块", 2],
			["糖", 2],
			["可可豆", 1]
		],
		"count": 1
	},
	"泥土植物": {
		"type": "增强型工作台",
		"map": [
			[null, "泥土", null],
			["泥土", "小麦种子", "泥土"],
			[null, "泥土", null]
		],
		"ingredients": [
			["泥土", 4],
			["小麦种子", 1]
		],
		"count": 1
	},
	"魔法精华": {
		"type": "增强型工作台",
		"map": [
			["魔法精华", "魔法精华", "魔法精华"],
			["魔法精华", null, "魔法精华"],
			["魔法精华", "魔法精华", "魔法精华"]
		],
		"ingredients": [
			["魔法精华", 8]
		],
		"count": 2
	},
	"煤炭植物": {
		"type": "增强型工作台",
		"map": [
			[null, "煤矿石", null],
			["煤矿石", "小麦种子", "煤矿石"],
			[null, "煤矿石", null]
		],
		"ingredients": [
			["煤矿石", 4],
			["小麦种子", 1]
		],
		"count": 1
	},
	"魔法精华": {
		"type": "增强型工作台",
		"map": [
			["魔法精华", "魔法精华", "魔法精华"],
			["魔法精华", null, "魔法精华"],
			["魔法精华", "魔法精华", "魔法精华"]
		],
		"ingredients": [
			["魔法精华", 8]
		],
		"count": 2
	},
	"铁锭植物": {
		"type": "增强型工作台",
		"map": [
			[null, "铁块", null],
			["铁块", "煤炭植物", "铁块"],
			[null, "铁块", null]
		],
		"ingredients": [
			["铁块", 4],
			["煤炭植物", 1]
		],
		"count": 1
	},
	"魔法精华": {
		"type": "增强型工作台",
		"map": [
			["魔法精华", "魔法精华", "魔法精华"],
			["魔法精华", null, "魔法精华"],
			["魔法精华", "魔法精华", "魔法精华"]
		],
		"ingredients": [
			["魔法精华", 8]
		],
		"count": 1
	},
	"金植物": {
		"type": "增强型工作台",
		"map": [
			[null, "金锭 (16克拉)", null],
			["金锭 (16克拉)", "铁锭植物", "金锭 (16克拉)"],
			[null, "金锭 (16克拉)", null]
		],
		"ingredients": [
			["金锭 (16克拉)", 4],
			["铁锭植物", 1]
		],
		"count": 1
	},
	"魔法精华": {
		"type": "增强型工作台",
		"map": [
			["魔法精华", "魔法精华", "魔法精华"],
			["魔法精华", null, "魔法精华"],
			["魔法精华", "魔法精华", "魔法精华"]
		],
		"ingredients": [
			["魔法精华", 8]
		],
		"count": 1
	},
	"铜植物": {
		"type": "增强型工作台",
		"map": [
			[null, "铜粉", null],
			["铜粉", "金植物", "铜粉"],
			[null, "铜粉", null]
		],
		"ingredients": [
			["铜粉", 4],
			["金植物", 1]
		],
		"count": 1
	},
	"魔法精华": {
		"type": "增强型工作台",
		"map": [
			["魔法精华", "魔法精华", "魔法精华"],
			["魔法精华", null, "魔法精华"],
			["魔法精华", "魔法精华", "魔法精华"]
		],
		"ingredients": [
			["魔法精华", 8]
		],
		"count": 8
	},
	"铝植物": {
		"type": "增强型工作台",
		"map": [
			[null, "铝粉", null],
			["铝粉", "铁锭植物", "铝粉"],
			[null, "铝粉", null]
		],
		"ingredients": [
			["铝粉", 4],
			["铁锭植物", 1]
		],
		"count": 1
	},
	"魔法精华": {
		"type": "增强型工作台",
		"map": [
			["魔法精华", "魔法精华", "魔法精华"],
			["魔法精华", null, "魔法精华"],
			["魔法精华", "魔法精华", "魔法精华"]
		],
		"ingredients": [
			["魔法精华", 8]
		],
		"count": 8
	},
	"锡植物": {
		"type": "增强型工作台",
		"map": [
			[null, "锡粉", null],
			["锡粉", "铁锭植物", "锡粉"],
			[null, "锡粉", null]
		],
		"ingredients": [
			["锡粉", 4],
			["铁锭植物", 1]
		],
		"count": 1
	},
	"魔法精华": {
		"type": "增强型工作台",
		"map": [
			["魔法精华", "魔法精华", "魔法精华"],
			["魔法精华", null, "魔法精华"],
			["魔法精华", "魔法精华", "魔法精华"]
		],
		"ingredients": [
			["魔法精华", 8]
		],
		"count": 8
	},
	"银植物": {
		"type": "增强型工作台",
		"map": [
			[null, "银粉", null],
			["银粉", "铁锭植物", "银粉"],
			[null, "银粉", null]
		],
		"ingredients": [
			["银粉", 4],
			["铁锭植物", 1]
		],
		"count": 1
	},
	"魔法精华": {
		"type": "增强型工作台",
		"map": [
			["魔法精华", "魔法精华", "魔法精华"],
			["魔法精华", null, "魔法精华"],
			["魔法精华", "魔法精华", "魔法精华"]
		],
		"ingredients": [
			["魔法精华", 8]
		],
		"count": 8
	},
	"铅植物": {
		"type": "增强型工作台",
		"map": [
			[null, "铅粉", null],
			["铅粉", "铁锭植物", "铅粉"],
			[null, "铅粉", null]
		],
		"ingredients": [
			["铅粉", 4],
			["铁锭植物", 1]
		],
		"count": 1
	},
	"魔法精华": {
		"type": "增强型工作台",
		"map": [
			["魔法精华", "魔法精华", "魔法精华"],
			["魔法精华", null, "魔法精华"],
			["魔法精华", "魔法精华", "魔法精华"]
		],
		"ingredients": [
			["魔法精华", 8]
		],
		"count": 8
	},
	"红石植物": {
		"type": "增强型工作台",
		"map": [
			[null, "红石块", null],
			["红石块", "金植物", "红石块"],
			[null, "红石块", null]
		],
		"ingredients": [
			["红石块", 4],
			["金植物", 1]
		],
		"count": 1
	},
	"魔法精华": {
		"type": "增强型工作台",
		"map": [
			["魔法精华", "魔法精华", "魔法精华"],
			["魔法精华", null, "魔法精华"],
			["魔法精华", "魔法精华", "魔法精华"]
		],
		"ingredients": [
			["魔法精华", 8]
		],
		"count": 8
	},
	"青金石植物": {
		"type": "增强型工作台",
		"map": [
			[null, "青金石矿石", null],
			["青金石矿石", "红石植物", "青金石矿石"],
			[null, "青金石矿石", null]
		],
		"ingredients": [
			["青金石矿石", 4],
			["红石植物", 1]
		],
		"count": 1
	},
	"魔法精华": {
		"type": "增强型工作台",
		"map": [
			["魔法精华", "魔法精华", "魔法精华"],
			["魔法精华", null, "魔法精华"],
			["魔法精华", "魔法精华", "魔法精华"]
		],
		"ingredients": [
			["魔法精华", 8]
		],
		"count": 16
	},
	"末影珍珠植物": {
		"type": "增强型工作台",
		"map": [
			[null, "末影珍珠", null],
			["末影珍珠", "青金石植物", "末影珍珠"],
			[null, "末影珍珠", null]
		],
		"ingredients": [
			["末影珍珠", 4],
			["青金石植物", 1]
		],
		"count": 1
	},
	"魔法精华": {
		"type": "增强型工作台",
		"map": [
			["魔法精华", "魔法精华", "魔法精华"],
			["魔法精华", null, "魔法精华"],
			["魔法精华", "魔法精华", "魔法精华"]
		],
		"ingredients": [
			["魔法精华", 8]
		],
		"count": 4
	},
	"石英植物": {
		"type": "增强型工作台",
		"map": [
			[null, "下界石英矿石", null],
			["下界石英矿石", "末影珍珠植物", "下界石英矿石"],
			[null, "下界石英矿石", null]
		],
		"ingredients": [
			["下界石英矿石", 4],
			["末影珍珠植物", 1]
		],
		"count": 1
	},
	"魔法精华": {
		"type": "增强型工作台",
		"map": [
			["魔法精华", "魔法精华", "魔法精华"],
			["魔法精华", null, "魔法精华"],
			["魔法精华", "魔法精华", "魔法精华"]
		],
		"ingredients": [
			["魔法精华", 8]
		],
		"count": 8
	},
	"钻石植物": {
		"type": "增强型工作台",
		"map": [
			[null, "钻石", null],
			["钻石", "石英植物", "钻石"],
			[null, "钻石", null]
		],
		"ingredients": [
			["钻石", 4],
			["石英植物", 1]
		],
		"count": 1
	},
	"魔法精华": {
		"type": "增强型工作台",
		"map": [
			["魔法精华", "魔法精华", "魔法精华"],
			["魔法精华", null, "魔法精华"],
			["魔法精华", "魔法精华", "魔法精华"]
		],
		"ingredients": [
			["魔法精华", 8]
		],
		"count": 1
	},
	"绿宝石植物": {
		"type": "增强型工作台",
		"map": [
			[null, "绿宝石", null],
			["绿宝石", "钻石植物", "绿宝石"],
			[null, "绿宝石", null]
		],
		"ingredients": [
			["绿宝石", 4],
			["钻石植物", 1]
		],
		"count": 1
	},
	"魔法精华": {
		"type": "增强型工作台",
		"map": [
			["魔法精华", "魔法精华", "魔法精华"],
			["魔法精华", null, "魔法精华"],
			["魔法精华", "魔法精华", "魔法精华"]
		],
		"ingredients": [
			["魔法精华", 8]
		],
		"count": 1
	},
	"下界合金植物": {
		"type": "增强型工作台",
		"map": [
			[null, "下界合金块", null],
			["下界合金块", "绿宝石植物", "下界合金块"],
			[null, "下界合金块", null]
		],
		"ingredients": [
			["下界合金块", 4],
			["绿宝石植物", 1]
		],
		"count": 1
	},
	"魔法精华": {
		"type": "增强型工作台",
		"map": [
			["魔法精华", "魔法精华", "魔法精华"],
			["魔法精华", null, "魔法精华"],
			["魔法精华", "魔法精华", "魔法精华"]
		],
		"ingredients": [
			["魔法精华", 8]
		],
		"count": 1
	},
	"萤石植物": {
		"type": "增强型工作台",
		"map": [
			[null, "荧石", null],
			["荧石", "红石植物", "荧石"],
			[null, "荧石", null]
		],
		"ingredients": [
			["荧石", 4],
			["红石植物", 1]
		],
		"count": 1
	},
	"魔法精华": {
		"type": "增强型工作台",
		"map": [
			["魔法精华", "魔法精华", "魔法精华"],
			["魔法精华", null, "魔法精华"],
			["魔法精华", "魔法精华", "魔法精华"]
		],
		"ingredients": [
			["魔法精华", 8]
		],
		"count": 8
	},
	"黑曜石植物": {
		"type": "增强型工作台",
		"map": [
			[null, "黑曜石", null],
			["黑曜石", "青金石植物", "黑曜石"],
			[null, "黑曜石", null]
		],
		"ingredients": [
			["黑曜石", 4],
			["青金石植物", 1]
		],
		"count": 1
	},
	"魔法精华": {
		"type": "增强型工作台",
		"map": [
			["魔法精华", "魔法精华", "魔法精华"],
			["魔法精华", null, "魔法精华"],
			["魔法精华", "魔法精华", "魔法精华"]
		],
		"ingredients": [
			["魔法精华", 8]
		],
		"count": 2
	},
	"粘液球植物": {
		"type": "增强型工作台",
		"map": [
			[null, "黏液球", null],
			["黏液球", "末影珍珠植物", "黏液球"],
			[null, "黏液球", null]
		],
		"ingredients": [
			["黏液球", 4],
			["末影珍珠植物", 1]
		],
		"count": 1
	},
	"魔法精华": {
		"type": "增强型工作台",
		"map": [
			["魔法精华", "魔法精华", "魔法精华"],
			["魔法精华", null, "魔法精华"],
			["魔法精华", "魔法精华", "魔法精华"]
		],
		"ingredients": [
			["魔法精华", 8]
		],
		"count": 8
	},
	"钩子": {
		"type": "增强型工作台",
		"map": [
			["木棍", "木棍", null],
			[null, "木棍", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["木棍", 4]
		],
		"count": 1
	},
	"草种子": {
		"map": [
			[null, null, null],
			[null, "草", null],
			[null, null, null]
		],
		"ingredients": [
			["草", 1]
		],
		"count": 1
	},
	"无底单元 - 等级 1": {
		"type": "增强型工作台",
		"map": [
			["铁锭", "铁锭", "铁锭"],
			["铁锭", "人造钻石", "铁锭"],
			["铁锭", "铁锭", "铁锭"]
		],
		"ingredients": [
			["铁锭", 8],
			["人造钻石", 1]
		],
		"count": 1
	},
	"无底单元 - 等级 2": {
		"type": "增强型工作台",
		"map": [
			["金锭", "金锭", "金锭"],
			["金锭", "无底单元 - 等级 1", "金锭"],
			["金锭", "金锭", "金锭"]
		],
		"ingredients": [
			["金锭", 8],
			["无底单元 - 等级 1", 1]
		],
		"count": 1
	},
	"无底单元 - 等级 3": {
		"type": "增强型工作台",
		"map": [
			["铁块", "铁块", "铁块"],
			["铁块", "无底单元 - 等级 2", "铁块"],
			["铁块", "铁块", "铁块"]
		],
		"ingredients": [
			["铁块", 8],
			["无底单元 - 等级 2", 1]
		],
		"count": 1
	},
	"无底单元 - 等级 4": {
		"type": "增强型工作台",
		"map": [
			["金块", "金块", "金块"],
			["金块", "无底单元 - 等级 3", "金块"],
			["金块", "金块", "金块"]
		],
		"ingredients": [
			["金块", 8],
			["无底单元 - 等级 3", 1]
		],
		"count": 1
	},
	"无底单元 - 等级 5": {
		"type": "增强型工作台",
		"map": [
			["钻石", "钻石", "钻石"],
			["钻石", "无底单元 - 等级 4", "钻石"],
			["钻石", "钻石", "钻石"]
		],
		"ingredients": [
			["钻石", 8],
			["无底单元 - 等级 4", 1]
		],
		"count": 1
	},
	"无底单元 - 等级 6": {
		"type": "增强型工作台",
		"map": [
			["绿宝石", "绿宝石", "绿宝石"],
			["绿宝石", "无底单元 - 等级 5", "绿宝石"],
			["绿宝石", "绿宝石", "绿宝石"]
		],
		"ingredients": [
			["绿宝石", 8],
			["无底单元 - 等级 5", 1]
		],
		"count": 1
	},
	"无底单元 - 等级 7": {
		"type": "增强型工作台",
		"map": [
			["钻石块", "钻石块", "钻石块"],
			["钻石块", "无底单元 - 等级 6", "钻石块"],
			["钻石块", "钻石块", "钻石块"]
		],
		"ingredients": [
			["钻石块", 8],
			["无底单元 - 等级 6", 1]
		],
		"count": 1
	},
	"无底单元 - 等级 8": {
		"type": "增强型工作台",
		"map": [
			["绿宝石块", "绿宝石块", "绿宝石块"],
			["绿宝石块", "无底单元 - 等级 7", "绿宝石块"],
			["绿宝石块", "绿宝石块", "绿宝石块"]
		],
		"ingredients": [
			["绿宝石块", 8],
			["无底单元 - 等级 7", 1]
		],
		"count": 1
	},
	"无底单元 - 等级 ★": {
		"type": "增强型工作台",
		"map": [
			["下界之星", "下界之星", "下界之星"],
			["下界之星", "无底单元 - 等级 8", "下界之星"],
			["下界之星", "下界之星", "下界之星"]
		],
		"ingredients": [
			["下界之星", 8],
			["无底单元 - 等级 8", 1]
		],
		"count": 1
	},
	"无底背包": {
		"map": [
			["无底单元 - 等级 1", "无底单元 - 等级 1", "无底单元 - 等级 1"],
			["无底单元 - 等级 1", "下界合金块", "无底单元 - 等级 1"],
			["无底单元 - 等级 1", "无底单元 - 等级 1", "无底单元 - 等级 1"]
		],
		"ingredients": [
			["无底单元 - 等级 1", 8],
			["下界合金块", 1]
		],
		"count": 1
	},
	"无底背包": {
		"map": [
			["无底单元 - 等级 2", "无底单元 - 等级 2", "无底单元 - 等级 2"],
			["无底单元 - 等级 2", "无底背包", "无底单元 - 等级 2"],
			["无底单元 - 等级 2", "无底单元 - 等级 2", "无底单元 - 等级 2"]
		],
		"ingredients": [
			["无底单元 - 等级 2", 8],
			["无底背包", 1]
		],
		"count": 1
	},
	"无底背包": {
		"map": [
			["无底单元 - 等级 3", "无底单元 - 等级 3", "无底单元 - 等级 3"],
			["无底单元 - 等级 3", "无底背包", "无底单元 - 等级 3"],
			["无底单元 - 等级 3", "无底单元 - 等级 3", "无底单元 - 等级 3"]
		],
		"ingredients": [
			["无底单元 - 等级 3", 8],
			["无底背包", 1]
		],
		"count": 1
	},
	"无底背包": {
		"map": [
			["无底单元 - 等级 4", "无底单元 - 等级 4", "无底单元 - 等级 4"],
			["无底单元 - 等级 4", "无底背包", "无底单元 - 等级 4"],
			["无底单元 - 等级 4", "无底单元 - 等级 4", "无底单元 - 等级 4"]
		],
		"ingredients": [
			["无底单元 - 等级 4", 8],
			["无底背包", 1]
		],
		"count": 1
	},
	"无底背包": {
		"map": [
			["无底单元 - 等级 5", "无底单元 - 等级 5", "无底单元 - 等级 5"],
			["无底单元 - 等级 5", "无底背包", "无底单元 - 等级 5"],
			["无底单元 - 等级 5", "无底单元 - 等级 5", "无底单元 - 等级 5"]
		],
		"ingredients": [
			["无底单元 - 等级 5", 8],
			["无底背包", 1]
		],
		"count": 1
	},
	"无底背包": {
		"map": [
			["无底单元 - 等级 6", "无底单元 - 等级 6", "无底单元 - 等级 6"],
			["无底单元 - 等级 6", "无底背包", "无底单元 - 等级 6"],
			["无底单元 - 等级 6", "无底单元 - 等级 6", "无底单元 - 等级 6"]
		],
		"ingredients": [
			["无底单元 - 等级 6", 8],
			["无底背包", 1]
		],
		"count": 1
	},
	"无底背包": {
		"map": [
			["无底单元 - 等级 7", "无底单元 - 等级 7", "无底单元 - 等级 7"],
			["无底单元 - 等级 7", "无底背包", "无底单元 - 等级 7"],
			["无底单元 - 等级 7", "无底单元 - 等级 7", "无底单元 - 等级 7"]
		],
		"ingredients": [
			["无底单元 - 等级 7", 8],
			["无底背包", 1]
		],
		"count": 1
	},
	"无底背包": {
		"map": [
			["无底单元 - 等级 8", "无底单元 - 等级 8", "无底单元 - 等级 8"],
			["无底单元 - 等级 8", "无底背包", "无底单元 - 等级 8"],
			["无底单元 - 等级 8", "无底单元 - 等级 8", "无底单元 - 等级 8"]
		],
		"ingredients": [
			["无底单元 - 等级 8", 8],
			["无底背包", 1]
		],
		"count": 1
	},
	"无底背包": {
		"map": [
			["无底单元 - 等级 ★", "无底单元 - 等级 ★", "无底单元 - 等级 ★"],
			["无底单元 - 等级 ★", "无底背包", "无底单元 - 等级 ★"],
			["无底单元 - 等级 ★", "无底单元 - 等级 ★", "无底单元 - 等级 ★"]
		],
		"ingredients": [
			["无底单元 - 等级 ★", 8],
			["无底背包", 1]
		],
		"count": 1
	},
	"无底垃圾桶": {
		"map": [
			["无底单元 - 等级 1", "无底单元 - 等级 1", "无底单元 - 等级 1"],
			["无底单元 - 等级 1", "下界合金锭", "无底单元 - 等级 1"],
			["无底单元 - 等级 1", "无底单元 - 等级 1", "无底单元 - 等级 1"]
		],
		"ingredients": [
			["无底单元 - 等级 1", 8],
			["下界合金锭", 1]
		],
		"count": 1
	},
	"无底垃圾桶": {
		"map": [
			["无底单元 - 等级 2", "无底单元 - 等级 2", "无底单元 - 等级 2"],
			["无底单元 - 等级 2", "无底垃圾桶", "无底单元 - 等级 2"],
			["无底单元 - 等级 2", "无底单元 - 等级 2", "无底单元 - 等级 2"]
		],
		"ingredients": [
			["无底单元 - 等级 2", 8],
			["无底垃圾桶", 1]
		],
		"count": 1
	},
	"无底垃圾桶": {
		"map": [
			["无底单元 - 等级 3", "无底单元 - 等级 3", "无底单元 - 等级 3"],
			["无底单元 - 等级 3", "无底垃圾桶", "无底单元 - 等级 3"],
			["无底单元 - 等级 3", "无底单元 - 等级 3", "无底单元 - 等级 3"]
		],
		"ingredients": [
			["无底单元 - 等级 3", 8],
			["无底垃圾桶", 1]
		],
		"count": 1
	},
	"无底垃圾桶": {
		"map": [
			["无底单元 - 等级 4", "无底单元 - 等级 4", "无底单元 - 等级 4"],
			["无底单元 - 等级 4", "无底垃圾桶", "无底单元 - 等级 4"],
			["无底单元 - 等级 4", "无底单元 - 等级 4", "无底单元 - 等级 4"]
		],
		"ingredients": [
			["无底单元 - 等级 4", 8],
			["无底垃圾桶", 1]
		],
		"count": 1
	},
	"无底垃圾桶": {
		"map": [
			["无底单元 - 等级 5", "无底单元 - 等级 5", "无底单元 - 等级 5"],
			["无底单元 - 等级 5", "无底垃圾桶", "无底单元 - 等级 5"],
			["无底单元 - 等级 5", "无底单元 - 等级 5", "无底单元 - 等级 5"]
		],
		"ingredients": [
			["无底单元 - 等级 5", 8],
			["无底垃圾桶", 1]
		],
		"count": 1
	},
	"无底垃圾桶": {
		"map": [
			["无底单元 - 等级 6", "无底单元 - 等级 6", "无底单元 - 等级 6"],
			["无底单元 - 等级 6", "无底垃圾桶", "无底单元 - 等级 6"],
			["无底单元 - 等级 6", "无底单元 - 等级 6", "无底单元 - 等级 6"]
		],
		"ingredients": [
			["无底单元 - 等级 6", 8],
			["无底垃圾桶", 1]
		],
		"count": 1
	},
	"无底垃圾桶": {
		"map": [
			["无底单元 - 等级 7", "无底单元 - 等级 7", "无底单元 - 等级 7"],
			["无底单元 - 等级 7", "无底垃圾桶", "无底单元 - 等级 7"],
			["无底单元 - 等级 7", "无底单元 - 等级 7", "无底单元 - 等级 7"]
		],
		"ingredients": [
			["无底单元 - 等级 7", 8],
			["无底垃圾桶", 1]
		],
		"count": 1
	},
	"无底垃圾桶": {
		"map": [
			["无底单元 - 等级 8", "无底单元 - 等级 8", "无底单元 - 等级 8"],
			["无底单元 - 等级 8", "无底垃圾桶", "无底单元 - 等级 8"],
			["无底单元 - 等级 8", "无底单元 - 等级 8", "无底单元 - 等级 8"]
		],
		"ingredients": [
			["无底单元 - 等级 8", 8],
			["无底垃圾桶", 1]
		],
		"count": 1
	},
	"无底垃圾桶": {
		"map": [
			["无底单元 - 等级 ★", "无底单元 - 等级 ★", "无底单元 - 等级 ★"],
			["无底单元 - 等级 ★", "无底垃圾桶", "无底单元 - 等级 ★"],
			["无底单元 - 等级 ★", "无底单元 - 等级 ★", "无底单元 - 等级 ★"]
		],
		"ingredients": [
			["无底单元 - 等级 ★", 8],
			["无底垃圾桶", 1]
		],
		"count": 1
	},
	"无底合成机": {
		"type": "增强型工作台",
		"map": [
			["钢筋板", "钢筋板", "钢筋板"],
			["钢筋板", "古代符文 [虹]", "钢筋板"],
			["钢筋板", "钢筋板", "钢筋板"]
		],
		"ingredients": [
			["钢筋板", 8],
			["古代符文 [虹]", 1]
		],
		"count": 1
	},
	"无底卸载器": {
		"type": "增强型工作台",
		"map": [
			["无底单元 - 等级 4", "无底单元 - 等级 4", "无底单元 - 等级 4"],
			["无底单元 - 等级 4", "漏斗", "无底单元 - 等级 4"],
			["无底单元 - 等级 4", "无底单元 - 等级 4", "无底单元 - 等级 4"]
		],
		"ingredients": [
			["无底单元 - 等级 4", 8],
			["漏斗", 1]
		],
		"count": 1
	},
	"水卡": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			[null, "水桶", null],
			[null, null, null]
		],
		"ingredients": [
			["水桶", 1]
		],
		"count": 1
	},
	"岩浆卡": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			[null, "熔岩桶", null],
			[null, null, null]
		],
		"ingredients": [
			["熔岩桶", 1]
		],
		"count": 1
	},
	"牛奶卡": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			[null, "奶桶", null],
			[null, null, null]
		],
		"ingredients": [
			["奶桶", 1]
		],
		"count": 1
	},
	"齿轮": {
		"type": "增强型工作台",
		"map": [
			["花岗岩", "花岗岩", "花岗岩"],
			["闪长岩", "闪长岩", "闪长岩"],
			["安山岩", "安山岩", "安山岩"]
		],
		"ingredients": [
			["花岗岩", 3],
			["闪长岩", 3],
			["安山岩", 3]
		],
		"count": 4
	},
	"无序尘埃": {
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"有序尘埃": {
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"锟斤拷": {
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"熵": {
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"数量组件": {
		"type": "增强型工作台",
		"map": [
			["古代符文 [附魔]", "有序尘埃", "圣诞礼物"],
			["机器人交互接口 (燃料)", "机器人内存核心", "机器人交互接口 (物品)"],
			["浓缩下界冰", "钢推进器", "药物"]
		],
		"ingredients": [
			["古代符文 [附魔]", 1],
			["有序尘埃", 1],
			["圣诞礼物", 1],
			["机器人交互接口 (燃料)", 1],
			["机器人内存核心", 1],
			["机器人交互接口 (物品)", 1],
			["浓缩下界冰", 1],
			["钢推进器", 1],
			["药物", 1]
		],
		"count": 1
	},
	"复制卡": {
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"环 ": {
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"数量组件-无限": {
		"map": [
			["数量组件", "数量组件", "数量组件"],
			["数量组件", "环 ", "数量组件"],
			["数量组件", "数量组件", "数量组件"]
		],
		"ingredients": [
			["数量组件", 8],
			["环 ", 1]
		],
		"count": 1
	},
	"奇点": {
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"螺旋体": {
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"壳 ": {
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"伪物": {
		"type": "增强型工作台",
		"map": [
			["壳 ", "壳 ", "壳 "],
			["壳 ", null, "壳 "],
			["壳 ", "壳 ", "壳 "]
		],
		"ingredients": [
			["壳 ", 8]
		],
		"count": 1
	},
	"充能卡L1": {
		"type": "增强型工作台",
		"map": [
			["无序尘埃", null, "无序尘埃"],
			[null, "齿轮", null],
			["无序尘埃", null, "无序尘埃"]
		],
		"ingredients": [
			["无序尘埃", 4],
			["齿轮", 1]
		],
		"count": 1
	},
	"充能卡L2": {
		"type": "增强型工作台",
		"map": [
			["充能卡L1", "充能卡L1", "充能卡L1"],
			["充能卡L1", "锟斤拷", "充能卡L1"],
			["充能卡L1", "充能卡L1", "充能卡L1"]
		],
		"ingredients": [
			["充能卡L1", 8],
			["锟斤拷", 1]
		],
		"count": 1
	},
	"充能卡L3": {
		"type": "增强型工作台",
		"map": [
			["充能卡L2", "充能卡L2", "充能卡L2"],
			["充能卡L2", "环 ", "充能卡L2"],
			["充能卡L2", "充能卡L2", "充能卡L2"]
		],
		"ingredients": [
			["充能卡L2", 8],
			["环 ", 1]
		],
		"count": 1
	},
	"过载卡L1": {
		"type": "增强型工作台",
		"map": [
			[null, "有序尘埃", null],
			["有序尘埃", "齿轮", "有序尘埃"],
			[null, "有序尘埃", null]
		],
		"ingredients": [
			["有序尘埃", 4],
			["齿轮", 1]
		],
		"count": 1
	},
	"过载卡L2": {
		"type": "增强型工作台",
		"map": [
			["过载卡L1", "过载卡L1", "过载卡L1"],
			["过载卡L1", "锟斤拷", "过载卡L1"],
			["过载卡L1", "过载卡L1", "过载卡L1"]
		],
		"ingredients": [
			["过载卡L1", 8],
			["锟斤拷", 1]
		],
		"count": 1
	},
	"过载卡L3": {
		"type": "增强型工作台",
		"map": [
			["过载卡L2", "过载卡L2", "过载卡L2"],
			["过载卡L2", "环 ", "过载卡L2"],
			["过载卡L2", "过载卡L2", "过载卡L2"]
		],
		"ingredients": [
			["过载卡L2", 8],
			["环 ", 1]
		],
		"count": 1
	},
	"带电超频卡L1": {
		"type": "增强型工作台",
		"map": [
			["无序尘埃", "有序尘埃", "无序尘埃"],
			["有序尘埃", "齿轮", "有序尘埃"],
			["无序尘埃", "有序尘埃", "无序尘埃"]
		],
		"ingredients": [
			["无序尘埃", 4],
			["有序尘埃", 4],
			["齿轮", 1]
		],
		"count": 1
	},
	"带电超频卡L2": {
		"type": "增强型工作台",
		"map": [
			["带电超频卡L1", "带电超频卡L1", "带电超频卡L1"],
			["带电超频卡L1", "锟斤拷", "带电超频卡L1"],
			["带电超频卡L1", "带电超频卡L1", "带电超频卡L1"]
		],
		"ingredients": [
			["带电超频卡L1", 8],
			["锟斤拷", 1]
		],
		"count": 1
	},
	"带电超频卡L3": {
		"type": "增强型工作台",
		"map": [
			["带电超频卡L2", "带电超频卡L2", "带电超频卡L2"],
			["带电超频卡L2", "环 ", "带电超频卡L2"],
			["带电超频卡L2", "带电超频卡L2", "带电超频卡L2"]
		],
		"ingredients": [
			["带电超频卡L2", 8],
			["环 ", 1]
		],
		"count": 1
	},
	"容器透镜": {
		"type": "增强型工作台",
		"map": [
			[null, "齿轮", null],
			[null, "望远镜", null],
			[null, null, null]
		],
		"ingredients": [
			["齿轮", 1],
			["望远镜", 1]
		],
		"count": 1
	},
	"坐标记录器": {
		"type": "增强型工作台",
		"map": [
			[null, "齿轮", null],
			[null, "指南针", null],
			[null, null, null]
		],
		"ingredients": [
			["齿轮", 1],
			["指南针", 1]
		],
		"count": 1
	},
	"基础机器框架": {
		"type": "增强型工作台",
		"map": [
			["石头", "锁链", "石头"],
			["锁链", "有序尘埃", "锁链"],
			["石头", "锁链", "石头"]
		],
		"ingredients": [
			["石头", 4],
			["锁链", 4],
			["有序尘埃", 1]
		],
		"count": 1
	},
	"普通存储单元": {
		"type": "增强型工作台",
		"map": [
			["玻璃", "箱子", "玻璃"],
			["箱子", null, "箱子"],
			["玻璃", "箱子", "玻璃"]
		],
		"ingredients": [
			["玻璃", 4],
			["箱子", 4]
		],
		"count": 1
	},
	"存储单元-分层": {
		"type": "增强型工作台",
		"map": [
			[null, "齿轮", null],
			[null, "普通存储单元", null],
			[null, "齿轮", null]
		],
		"ingredients": [
			["齿轮", 2],
			["普通存储单元", 1]
		],
		"count": 1
	},
	"存储单元-限制": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			["齿轮", "普通存储单元", "齿轮"],
			[null, null, null]
		],
		"ingredients": [
			["齿轮", 2],
			["普通存储单元", 1]
		],
		"count": 1
	},
	"存储单元-堆叠": {
		"type": "增强型工作台",
		"map": [
			["齿轮", null, "齿轮"],
			[null, "普通存储单元", null],
			["齿轮", null, "齿轮"]
		],
		"ingredients": [
			["齿轮", 4],
			["普通存储单元", 1]
		],
		"count": 1
	},
	"存储单元-分层|限制": {
		"type": "增强型工作台",
		"map": [
			[null, "齿轮", null],
			["齿轮", "普通存储单元", "齿轮"],
			[null, "齿轮", null]
		],
		"ingredients": [
			["齿轮", 4],
			["普通存储单元", 1]
		],
		"count": 1
	},
	"存储单元-分层|堆叠": {
		"type": "增强型工作台",
		"map": [
			["齿轮", "齿轮", "齿轮"],
			[null, "普通存储单元", null],
			["齿轮", "齿轮", "齿轮"]
		],
		"ingredients": [
			["齿轮", 6],
			["普通存储单元", 1]
		],
		"count": 1
	},
	"存储单元-限制|堆叠": {
		"type": "增强型工作台",
		"map": [
			["齿轮", null, "齿轮"],
			["齿轮", "普通存储单元", "齿轮"],
			["齿轮", null, "齿轮"]
		],
		"ingredients": [
			["齿轮", 6],
			["普通存储单元", 1]
		],
		"count": 1
	},
	"可充电存储单元": {
		"type": "增强型工作台",
		"map": [
			["玻璃", "箱子", "玻璃"],
			["箱子", "无序尘埃", "箱子"],
			["玻璃", "箱子", "玻璃"]
		],
		"ingredients": [
			["玻璃", 4],
			["箱子", 4],
			["无序尘埃", 1]
		],
		"count": 1
	},
	"随机存入单元": {
		"type": "增强型工作台",
		"map": [
			["无序尘埃", null, "无序尘埃"],
			[null, "普通存储单元", null],
			["无序尘埃", null, "无序尘埃"]
		],
		"ingredients": [
			["无序尘埃", 4],
			["普通存储单元", 1]
		],
		"count": 1
	},
	"随机取出单元": {
		"type": "增强型工作台",
		"map": [
			[null, "无序尘埃", null],
			["无序尘埃", "普通存储单元", "无序尘埃"],
			[null, "无序尘埃", null]
		],
		"ingredients": [
			["无序尘埃", 4],
			["普通存储单元", 1]
		],
		"count": 1
	},
	"随机存储单元": {
		"type": "增强型工作台",
		"map": [
			["无序尘埃", "无序尘埃", "无序尘埃"],
			["无序尘埃", "普通存储单元", "无序尘埃"],
			["无序尘埃", "无序尘埃", "无序尘埃"]
		],
		"ingredients": [
			["无序尘埃", 8],
			["普通存储单元", 1]
		],
		"count": 1
	},
	"左平均存储单元": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			["有序尘埃", "普通存储单元", null],
			[null, null, null]
		],
		"ingredients": [
			["有序尘埃", 1],
			["普通存储单元", 1]
		],
		"count": 1
	},
	"右平均存储单元": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			[null, "普通存储单元", "有序尘埃"],
			[null, null, null]
		],
		"ingredients": [
			["普通存储单元", 1],
			["有序尘埃", 1]
		],
		"count": 1
	},
	"远程访问器": {
		"type": "增强型工作台",
		"map": [
			["齿轮", "齿轮", "齿轮"],
			["齿轮", "侦测器", "齿轮"],
			["齿轮", "齿轮", "齿轮"]
		],
		"ingredients": [
			["齿轮", 8],
			["侦测器", 1]
		],
		"count": 1
	},
	"对点传输器": {
		"type": "增强型工作台",
		"map": [
			["绊线钩", "锁链", "绊线钩"],
			["线", "基础机器框架", "线"],
			["绊线钩", "锁链", "绊线钩"]
		],
		"ingredients": [
			["绊线钩", 4],
			["锁链", 2],
			["线", 2],
			["基础机器框架", 1]
		],
		"count": 1
	},
	"链式传输器": {
		"type": "增强型工作台",
		"map": [
			["线", "绊线钩", "线"],
			["绊线钩", "基础机器框架", "绊线钩"],
			["箱子", "箱子", "箱子"]
		],
		"ingredients": [
			["线", 2],
			["绊线钩", 3],
			["基础机器框架", 1],
			["箱子", 3]
		],
		"count": 1
	},
	"网状传输器": {
		"type": "增强型工作台",
		"map": [
			["漏斗", "绊线钩", "锁链"],
			["漏斗", "基础机器框架", "线"],
			["漏斗", "绊线钩", "锁链"]
		],
		"ingredients": [
			["漏斗", 3],
			["绊线钩", 2],
			["锁链", 2],
			["基础机器框架", 1],
			["线", 1]
		],
		"count": 1
	},
	"坐标传输器": {
		"type": "增强型工作台",
		"map": [
			["锁链", "箱子", "锁链"],
			["绊线钩", "基础机器框架", "绊线钩"],
			["绊线钩", "线", "绊线钩"]
		],
		"ingredients": [
			["锁链", 2],
			["箱子", 1],
			["绊线钩", 4],
			["基础机器框架", 1],
			["线", 1]
		],
		"count": 1
	},
	"存储交互接口": {
		"type": "增强型工作台",
		"map": [
			["石头", "石头", "石头"],
			["齿轮", "齿轮", "齿轮"],
			["石头", "石头", "石头"]
		],
		"ingredients": [
			["石头", 6],
			["齿轮", 3]
		],
		"count": 1
	},
	"高速存入接口": {
		"type": "增强型工作台",
		"map": [
			["齿轮", "齿轮", "齿轮"],
			["石头", "石头", "石头"],
			["石头", "石头", "石头"]
		],
		"ingredients": [
			["齿轮", 3],
			["石头", 6]
		],
		"count": 1
	},
	"高速取出接口": {
		"type": "增强型工作台",
		"map": [
			["石头", "石头", "石头"],
			["石头", "石头", "石头"],
			["齿轮", "齿轮", "齿轮"]
		],
		"ingredients": [
			["石头", 6],
			["齿轮", 3]
		],
		"count": 1
	},
	"存储卡": {
		"type": "增强型工作台",
		"map": [
			["有序尘埃", "箱子", "箱子"],
			["箱子", "箱子", "陷阱箱"],
			["陷阱箱", "陷阱箱", "陷阱箱"]
		],
		"ingredients": [
			["有序尘埃", 1],
			["箱子", 4],
			["陷阱箱", 4]
		],
		"count": 1
	},
	"基础充电增益电容": {
		"type": "增强型工作台",
		"map": [
			["无序尘埃", "锟斤拷", "无序尘埃"],
			["齿轮", "终极储能电容", "齿轮"],
			["无序尘埃", null, "无序尘埃"]
		],
		"ingredients": [
			["无序尘埃", 4],
			["锟斤拷", 1],
			["齿轮", 2],
			["终极储能电容", 1]
		],
		"count": 1
	},
	"基础耗电减免电容": {
		"type": "增强型工作台",
		"map": [
			["无序尘埃", null, "无序尘埃"],
			["齿轮", "终极储能电容", "齿轮"],
			["无序尘埃", "锟斤拷", "无序尘埃"]
		],
		"ingredients": [
			["无序尘埃", 4],
			["齿轮", 2],
			["终极储能电容", 1],
			["锟斤拷", 1]
		],
		"count": 1
	},
	"小型扩展电容": {
		"type": "增强型工作台",
		"map": [
			["硬铝锭", "数量组件", "硬铝锭"],
			["齿轮", "终极储能电容", "齿轮"],
			["硬铝锭", "数量组件", "硬铝锭"]
		],
		"ingredients": [
			["硬铝锭", 4],
			["数量组件", 2],
			["齿轮", 2],
			["终极储能电容", 1]
		],
		"count": 1
	},
	"中型扩展电容": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "数量组件", "银铜合金锭"],
			["齿轮", "小型扩展电容", "齿轮"],
			["银铜合金锭", "数量组件", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 4],
			["数量组件", 2],
			["齿轮", 2],
			["小型扩展电容", 1]
		],
		"count": 1
	},
	"大型扩展电容": {
		"type": "增强型工作台",
		"map": [
			["钢锭", "数量组件", "钢锭"],
			["齿轮", "中型扩展电容", "齿轮"],
			["钢锭", "数量组件", "钢锭"]
		],
		"ingredients": [
			["钢锭", 4],
			["数量组件", 2],
			["齿轮", 2],
			["中型扩展电容", 1]
		],
		"count": 1
	},
	"巨型扩展电容": {
		"type": "增强型工作台",
		"map": [
			["强化合金锭", "数量组件", "强化合金锭"],
			["齿轮", "大型扩展电容", "齿轮"],
			["强化合金锭", "数量组件", "强化合金锭"]
		],
		"ingredients": [
			["强化合金锭", 4],
			["数量组件", 2],
			["齿轮", 2],
			["大型扩展电容", 1]
		],
		"count": 1
	},
	"黑金刚石扩展电容": {
		"type": "增强型工作台",
		"map": [
			["黑金刚石", "数量组件", "黑金刚石"],
			["齿轮", "巨型扩展电容", "齿轮"],
			["黑金刚石", "数量组件", "黑金刚石"]
		],
		"ingredients": [
			["黑金刚石", 4],
			["数量组件", 2],
			["齿轮", 2],
			["巨型扩展电容", 1]
		],
		"count": 1
	},
	"终极扩展电容": {
		"type": "增强型工作台",
		"map": [
			["黑金刚石", "数量组件", "黑金刚石"],
			["环 ", "黑金刚石扩展电容", "环 "],
			["黑金刚石", "数量组件", "黑金刚石"]
		],
		"ingredients": [
			["黑金刚石", 4],
			["数量组件", 2],
			["环 ", 2],
			["黑金刚石扩展电容", 1]
		],
		"count": 1
	},
	"终极扩展电容组": {
		"map": [
			["齿轮", "无序尘埃", "齿轮"],
			["无序尘埃", "终极扩展电容", "无序尘埃"],
			["齿轮", "无序尘埃", "齿轮"]
		],
		"ingredients": [
			["齿轮", 4],
			["无序尘埃", 4],
			["终极扩展电容", 1]
		],
		"count": 1
	},
	"过载扩展电容": {
		"map": [
			["无序尘埃", "齿轮", "无序尘埃"],
			["齿轮", "终极扩展电容", "齿轮"],
			["无序尘埃", "齿轮", "无序尘埃"]
		],
		"ingredients": [
			["无序尘埃", 4],
			["齿轮", 4],
			["终极扩展电容", 1]
		],
		"count": 1
	},
	"高级充电增益电容": {
		"map": [
			[null, "基础充电增益电容", null],
			[null, null, null],
			[null, "终极扩展电容", null]
		],
		"ingredients": [
			["基础充电增益电容", 1],
			["终极扩展电容", 1]
		],
		"count": 1
	},
	"高级耗电减免电容": {
		"map": [
			[null, "终极扩展电容", null],
			[null, null, null],
			[null, "基础耗电减免电容", null]
		],
		"ingredients": [
			["终极扩展电容", 1],
			["基础耗电减免电容", 1]
		],
		"count": 1
	},
	"逸散电容": {
		"type": "增强型工作台",
		"map": [
			["黑金刚石扩展电容", "黑金刚石扩展电容", "黑金刚石扩展电容"],
			["黑金刚石扩展电容", "锟斤拷", "黑金刚石扩展电容"],
			["黑金刚石扩展电容", "黑金刚石扩展电容", "黑金刚石扩展电容"]
		],
		"ingredients": [
			["黑金刚石扩展电容", 8],
			["锟斤拷", 1]
		],
		"count": 1
	},
	"普通射电桩": {
		"type": "增强型工作台",
		"map": [
			["锟斤拷", "锟斤拷", "锟斤拷"],
			["锟斤拷", "能源连接器", "锟斤拷"],
			["锟斤拷", "锟斤拷", "锟斤拷"]
		],
		"ingredients": [
			["锟斤拷", 8],
			["能源连接器", 1]
		],
		"count": 1
	},
	"充能射电桩": {
		"type": "增强型工作台",
		"map": [
			[null, "有序尘埃", null],
			["有序尘埃", "普通射电桩", "有序尘埃"],
			[null, "有序尘埃", null]
		],
		"ingredients": [
			["有序尘埃", 4],
			["普通射电桩", 1]
		],
		"count": 1
	},
	"过载射电桩": {
		"type": "增强型工作台",
		"map": [
			["有序尘埃", null, "有序尘埃"],
			[null, "普通射电桩", null],
			["有序尘埃", null, "有序尘埃"]
		],
		"ingredients": [
			["有序尘埃", 4],
			["普通射电桩", 1]
		],
		"count": 1
	},
	"尘埃发电机": {
		"type": "增强型工作台",
		"map": [
			["无序尘埃", "无序尘埃", "无序尘埃"],
			["无序尘埃", null, "无序尘埃"],
			["无序尘埃", "无序尘埃", "无序尘埃"]
		],
		"ingredients": [
			["无序尘埃", 8]
		],
		"count": 1
	},
	"基础供电机": {
		"type": "增强型工作台",
		"map": [
			["荧石", "荧石", "荧石"],
			["光伏电池", "有序尘埃", "光伏电池"],
			[null, "光伏电池", null]
		],
		"ingredients": [
			["荧石", 3],
			["光伏电池", 3],
			["有序尘埃", 1]
		],
		"count": 1
	},
	"高级供电机": {
		"type": "增强型工作台",
		"map": [
			["基础供电机", "锟斤拷", "基础供电机"],
			["锟斤拷", "红石粉", "锟斤拷"],
			["基础供电机", "锟斤拷", "基础供电机"]
		],
		"ingredients": [
			["基础供电机", 4],
			["锟斤拷", 4],
			["红石粉", 1]
		],
		"count": 1
	},
	"黑金刚石供电机": {
		"type": "增强型工作台",
		"map": [
			["高级供电机", "锟斤拷", "高级供电机"],
			["锟斤拷", "黑金刚石", "锟斤拷"],
			["高级供电机", "锟斤拷", "高级供电机"]
		],
		"ingredients": [
			["高级供电机", 4],
			["锟斤拷", 4],
			["黑金刚石", 1]
		],
		"count": 1
	},
	"充能供电机": {
		"type": "增强型工作台",
		"map": [
			["黑金刚石供电机", "锟斤拷", "黑金刚石供电机"],
			["锟斤拷", "充能太阳能发电机", "锟斤拷"],
			["黑金刚石供电机", "锟斤拷", "黑金刚石供电机"]
		],
		"ingredients": [
			["黑金刚石供电机", 4],
			["锟斤拷", 4],
			["充能太阳能发电机", 1]
		],
		"count": 1
	},
	"充能供电机组": {
		"map": [
			["齿轮", "无序尘埃", "齿轮"],
			["无序尘埃", "充能供电机", "无序尘埃"],
			["齿轮", "无序尘埃", "齿轮"]
		],
		"ingredients": [
			["齿轮", 4],
			["无序尘埃", 4],
			["充能供电机", 1]
		],
		"count": 1
	},
	"过载供电机": {
		"map": [
			["无序尘埃", "齿轮", "无序尘埃"],
			["齿轮", "充能供电机", "齿轮"],
			["无序尘埃", "齿轮", "无序尘埃"]
		],
		"ingredients": [
			["无序尘埃", 4],
			["齿轮", 4],
			["充能供电机", 1]
		],
		"count": 1
	},
	"充能加速器": {
		"map": [
			["充能卡L2", "过载卡L2", "充能卡L2"],
			["过载卡L2", "环 ", "过载卡L2"],
			["充能卡L2", "过载卡L2", "充能卡L2"]
		],
		"ingredients": [
			["充能卡L2", 4],
			["过载卡L2", 4],
			["环 ", 1]
		],
		"count": 1
	},
	"过载加速器": {
		"map": [
			["过载卡L2", "充能卡L2", "过载卡L2"],
			["充能卡L2", "环 ", "充能卡L2"],
			["过载卡L2", "充能卡L2", "过载卡L2"]
		],
		"ingredients": [
			["过载卡L2", 4],
			["充能卡L2", 4],
			["环 ", 1]
		],
		"count": 1
	},
	"尘埃制造机": {
		"type": "增强型工作台",
		"map": [
			["便携垃圾箱", "便携垃圾箱", "便携垃圾箱"],
			["便携垃圾箱", "泥土", "便携垃圾箱"],
			["便携垃圾箱", "便携垃圾箱", "便携垃圾箱"]
		],
		"ingredients": [
			["便携垃圾箱", 8],
			["泥土", 1]
		],
		"count": 1
	},
	"尘埃制造机": {
		"type": "增强型工作台",
		"map": [
			["便携垃圾箱", "便携垃圾箱", "便携垃圾箱"],
			["便携垃圾箱", "圆石", "便携垃圾箱"],
			["便携垃圾箱", "便携垃圾箱", "便携垃圾箱"]
		],
		"ingredients": [
			["便携垃圾箱", 8],
			["圆石", 1]
		],
		"count": 1
	},
	"序列化构造器": {
		"type": "增强型工作台",
		"map": [
			["有序尘埃", "有序尘埃", "有序尘埃"],
			["有序尘埃", "垃圾箱", "有序尘埃"],
			["有序尘埃", "有序尘埃", "有序尘埃"]
		],
		"ingredients": [
			["有序尘埃", 8],
			["垃圾箱", 1]
		],
		"count": 1
	},
	"反序列化解析器": {
		"type": "增强型工作台",
		"map": [
			["有序尘埃", "有序尘埃", "有序尘埃"],
			["有序尘埃", "序列化构造器", "有序尘埃"],
			["有序尘埃", "有序尘埃", "有序尘埃"]
		],
		"ingredients": [
			["有序尘埃", 8],
			["序列化构造器", 1]
		],
		"count": 1
	},
	"矩阵合成台": {
		"type": "增强型工作台",
		"map": [
			["有序尘埃", "有序尘埃", "有序尘埃"],
			["有序尘埃", "海洋之心", "有序尘埃"],
			["有序尘埃", "有序尘埃", "有序尘埃"]
		],
		"ingredients": [
			["有序尘埃", 8],
			["海洋之心", 1]
		],
		"count": 1
	},
	"物品卡操作台": {
		"type": "增强型工作台",
		"map": [
			["齿轮", "齿轮", "齿轮"],
			["齿轮", "工作台", "齿轮"],
			["齿轮", "齿轮", "齿轮"]
		],
		"ingredients": [
			["齿轮", 8],
			["工作台", 1]
		],
		"count": 1
	},
	"反向合成台": {
		"type": "增强型工作台",
		"map": [
			["无序尘埃", "无序尘埃", "无序尘埃"],
			["无序尘埃", "工作台", "无序尘埃"],
			["无序尘埃", "无序尘埃", "无序尘埃"]
		],
		"ingredients": [
			["无序尘埃", 8],
			["工作台", 1]
		],
		"count": 1
	},
	"等价交换台": {
		"type": "增强型工作台",
		"map": [
			["有序尘埃", "有序尘埃", "有序尘埃"],
			["有序尘埃", "工作台", "有序尘埃"],
			["有序尘埃", "有序尘埃", "有序尘埃"]
		],
		"ingredients": [
			["有序尘埃", 8],
			["工作台", 1]
		],
		"count": 1
	},
	"熵化构造器": {
		"map": [
			["锟斤拷", "锟斤拷", "锟斤拷"],
			["锟斤拷", null, "锟斤拷"],
			["锟斤拷", "锟斤拷", "锟斤拷"]
		],
		"ingredients": [
			["锟斤拷", 8]
		],
		"count": 1
	},
	"基础刷石工厂": {
		"type": "增强型工作台",
		"map": [
			["黑曜石", "熔岩桶", "黑曜石"],
			["水桶", "齿轮", "水桶"],
			["钴镐", "活塞", "钴镐"]
		],
		"ingredients": [
			["黑曜石", 2],
			["熔岩桶", 1],
			["水桶", 2],
			["齿轮", 1],
			["钴镐", 2],
			["活塞", 1]
		],
		"count": 1
	},
	"基础矿石工厂": {
		"type": "增强型工作台",
		"map": [
			["铀", "活塞", "铀"],
			["古代符文 [地]", "基础刷石工厂", "古代符文 [地]"],
			["强化熔炉 - I", "投掷器", "强化熔炉 - I"]
		],
		"ingredients": [
			["铀", 2],
			["活塞", 1],
			["古代符文 [地]", 2],
			["基础刷石工厂", 1],
			["强化熔炉 - I", 2],
			["投掷器", 1]
		],
		"count": 1
	},
	"基础矿粉工厂": {
		"type": "增强型工作台",
		"map": [
			["电力碎矿机", "活塞", "电力碎矿机"],
			["电动淘金机", "基础刷石工厂", "电动淘金机"],
			["电动洗矿机", "投掷器", "电动洗矿机"]
		],
		"ingredients": [
			["电力碎矿机", 2],
			["活塞", 1],
			["电动淘金机", 2],
			["基础刷石工厂", 1],
			["电动洗矿机", 2],
			["投掷器", 1]
		],
		"count": 1
	},
	"基础作物工厂": {
		"type": "增强型工作台",
		"map": [
			["食品加工机", "活塞", "食品加工机"],
			["食品堆肥器", "基础刷石工厂", "食品堆肥器"],
			["作物生长加速器", "投掷器", "作物生长加速器"]
		],
		"ingredients": [
			["食品加工机", 2],
			["活塞", 1],
			["食品堆肥器", 2],
			["基础刷石工厂", 1],
			["作物生长加速器", 2],
			["投掷器", 1]
		],
		"count": 1
	},
	"基础流体工厂": {
		"type": "增强型工作台",
		"map": [
			["水桶", "活塞", "水桶"],
			["熔岩桶", "基础刷石工厂", "熔岩桶"],
			["奶桶", "投掷器", "奶桶"]
		],
		"ingredients": [
			["水桶", 2],
			["活塞", 1],
			["熔岩桶", 2],
			["基础刷石工厂", 1],
			["奶桶", 2],
			["投掷器", 1]
		],
		"count": 1
	},
	"快捷原版工作台": {
		"type": "增强型工作台",
		"map": [
			["齿轮", "便携工作台", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["齿轮", 1],
			["便携工作台", 1]
		],
		"count": 1
	},
	"快捷增强型工作台": {
		"type": "增强型工作台",
		"map": [
			[null, "工作台", null],
			[null, "发射器", null],
			[null, "齿轮", null]
		],
		"ingredients": [
			["工作台", 1],
			["发射器", 1],
			["齿轮", 1]
		],
		"count": 1
	},
	"快捷磨石": {
		"type": "增强型工作台",
		"map": [
			[null, "橡木栅栏", null],
			[null, "发射器", null],
			[null, "齿轮", null]
		],
		"ingredients": [
			["橡木栅栏", 1],
			["发射器", 1],
			["齿轮", 1]
		],
		"count": 1
	},
	"快捷盔甲锻造台": {
		"type": "增强型工作台",
		"map": [
			[null, "铁砧", null],
			[null, "发射器", null],
			[null, "齿轮", null]
		],
		"ingredients": [
			["铁砧", 1],
			["发射器", 1],
			["齿轮", 1]
		],
		"count": 1
	},
	"快捷矿石粉碎机": {
		"type": "增强型工作台",
		"map": [
			[null, "下界砖栅栏", null],
			["铁栏杆", "发射器", "铁栏杆"],
			[null, "齿轮", null]
		],
		"ingredients": [
			["下界砖栅栏", 1],
			["铁栏杆", 2],
			["发射器", 1],
			["齿轮", 1]
		],
		"count": 1
	},
	"快捷压缩机": {
		"type": "增强型工作台",
		"map": [
			[null, "下界砖栅栏", null],
			["活塞", "发射器", "活塞"],
			[null, "齿轮", null]
		],
		"ingredients": [
			["下界砖栅栏", 1],
			["活塞", 2],
			["发射器", 1],
			["齿轮", 1]
		],
		"count": 1
	},
	"快捷冶炼炉": {
		"type": "增强型工作台",
		"map": [
			["齿轮", "下界砖栅栏", "齿轮"],
			["下界砖", "发射器", "下界砖"],
			["打火石", "自动点火机", "打火石"]
		],
		"ingredients": [
			["齿轮", 2],
			["下界砖栅栏", 1],
			["下界砖", 2],
			["发射器", 1],
			["打火石", 2],
			["自动点火机", 1]
		],
		"count": 1
	},
	"快捷压力机": {
		"type": "增强型工作台",
		"map": [
			["齿轮", "发射器", "齿轮"],
			["活塞", "玻璃", "活塞"],
			["活塞", "炼药锅", "活塞"]
		],
		"ingredients": [
			["齿轮", 2],
			["发射器", 1],
			["活塞", 4],
			["玻璃", 1],
			["炼药锅", 1]
		],
		"count": 1
	},
	"快捷魔法工作台": {
		"type": "增强型工作台",
		"map": [
			["齿轮", null, "齿轮"],
			["书架", "工作台", "发射器"],
			["齿轮", null, "齿轮"]
		],
		"ingredients": [
			["齿轮", 4],
			["书架", 1],
			["工作台", 1],
			["发射器", 1]
		],
		"count": 1
	},
	"快捷洗矿机": {
		"type": "增强型工作台",
		"map": [
			[null, "发射器", null],
			["齿轮", "橡木栅栏", "齿轮"],
			[null, "炼药锅", null]
		],
		"ingredients": [
			["发射器", 1],
			["齿轮", 2],
			["橡木栅栏", 1],
			["炼药锅", 1]
		],
		"count": 1
	},
	"快捷搅拌机": {
		"type": "增强型工作台",
		"map": [
			["橡木台阶", "齿轮", "橡木台阶"],
			["橡木台阶", "齿轮", "橡木台阶"],
			["橡木台阶", "炼药锅", "橡木台阶"]
		],
		"ingredients": [
			["橡木台阶", 6],
			["齿轮", 2],
			["炼药锅", 1]
		],
		"count": 1
	},
	"快捷淘金机": {
		"type": "增强型工作台",
		"map": [
			[null, "橡木活板门", null],
			[null, "炼药锅", null],
			[null, "齿轮", null]
		],
		"ingredients": [
			["橡木活板门", 1],
			["炼药锅", 1],
			["齿轮", 1]
		],
		"count": 1
	},
	"快捷坩埚": {
		"type": "增强型工作台",
		"map": [
			["陶瓦", "齿轮", "陶瓦"],
			["陶瓦", "齿轮", "陶瓦"],
			["陶瓦", "打火石", "陶瓦"]
		],
		"ingredients": [
			["陶瓦", 6],
			["齿轮", 2],
			["打火石", 1]
		],
		"count": 1
	},
	"快捷榨汁机": {
		"type": "增强型工作台",
		"map": [
			[null, "玻璃", null],
			["齿轮", "下界砖栅栏", "齿轮"],
			[null, "发射器", null]
		],
		"ingredients": [
			["玻璃", 1],
			["齿轮", 2],
			["下界砖栅栏", 1],
			["发射器", 1]
		],
		"count": 1
	},
	"快捷古代祭坛": {
		"type": "增强型工作台",
		"map": [
			["古代基座", "齿轮", "古代基座"],
			["齿轮", "古代祭坛", "齿轮"],
			["古代基座", "齿轮", "古代基座"]
		],
		"ingredients": [
			["古代基座", 4],
			["齿轮", 4],
			["古代祭坛", 1]
		],
		"count": 1
	},
	"快捷加热压力舱": {
		"type": "增强型工作台",
		"map": [
			["齿轮", "齿轮", "齿轮"],
			["齿轮", "加热压力舱", "齿轮"],
			["齿轮", "齿轮", "齿轮"]
		],
		"ingredients": [
			["齿轮", 8],
			["加热压力舱", 1]
		],
		"count": 1
	},
	"高级搅拌机": {
		"type": "增强型工作台",
		"map": [
			["快捷搅拌机", "环 ", "快捷搅拌机"],
			["齿轮", "基础机器框架", "齿轮"],
			["快捷搅拌机", "无序尘埃", "快捷搅拌机"]
		],
		"ingredients": [
			["快捷搅拌机", 4],
			["环 ", 1],
			["齿轮", 2],
			["基础机器框架", 1],
			["无序尘埃", 1]
		],
		"count": 1
	},
	"高级榨汁机": {
		"type": "增强型工作台",
		"map": [
			["快捷榨汁机", "环 ", "快捷榨汁机"],
			["齿轮", "基础机器框架", "齿轮"],
			["快捷榨汁机", "无序尘埃", "快捷榨汁机"]
		],
		"ingredients": [
			["快捷榨汁机", 4],
			["环 ", 1],
			["齿轮", 2],
			["基础机器框架", 1],
			["无序尘埃", 1]
		],
		"count": 1
	},
	"高级电炉": {
		"type": "增强型工作台",
		"map": [
			["电炉", "环 ", "电炉"],
			["齿轮", "基础机器框架", "齿轮"],
			["电炉", "无序尘埃", "电炉"]
		],
		"ingredients": [
			["电炉", 4],
			["环 ", 1],
			["齿轮", 2],
			["基础机器框架", 1],
			["无序尘埃", 1]
		],
		"count": 1
	},
	"高级淘金机": {
		"type": "增强型工作台",
		"map": [
			["电动淘金机", "环 ", "电动淘金机"],
			["齿轮", "基础机器框架", "齿轮"],
			["电动淘金机", "无序尘埃", "电动淘金机"]
		],
		"ingredients": [
			["电动淘金机", 4],
			["环 ", 1],
			["齿轮", 2],
			["基础机器框架", 1],
			["无序尘埃", 1]
		],
		"count": 1
	},
	"高级洗矿机": {
		"type": "增强型工作台",
		"map": [
			["电动洗矿机", "环 ", "电动洗矿机"],
			["齿轮", "基础机器框架", "齿轮"],
			["电动洗矿机", "无序尘埃", "电动洗矿机"]
		],
		"ingredients": [
			["电动洗矿机", 4],
			["环 ", 1],
			["齿轮", 2],
			["基础机器框架", 1],
			["无序尘埃", 1]
		],
		"count": 1
	},
	"高级铸锭机": {
		"type": "增强型工作台",
		"map": [
			["电动铸锭机", "环 ", "电动铸锭机"],
			["齿轮", "基础机器框架", "齿轮"],
			["电动铸锭机", "无序尘埃", "电动铸锭机"]
		],
		"ingredients": [
			["电动铸锭机", 4],
			["环 ", 1],
			["齿轮", 2],
			["基础机器框架", 1],
			["无序尘埃", 1]
		],
		"count": 1
	},
	"高级坩埚": {
		"type": "增强型工作台",
		"map": [
			["电动坩埚", "环 ", "电动坩埚"],
			["齿轮", "基础机器框架", "齿轮"],
			["电动坩埚", "无序尘埃", "电动坩埚"]
		],
		"ingredients": [
			["电动坩埚", 4],
			["环 ", 1],
			["齿轮", 2],
			["基础机器框架", 1],
			["无序尘埃", 1]
		],
		"count": 1
	},
	"高级碎矿机": {
		"type": "增强型工作台",
		"map": [
			["电力碎矿机", "环 ", "电力碎矿机"],
			["齿轮", "基础机器框架", "齿轮"],
			["电力碎矿机", "无序尘埃", "电力碎矿机"]
		],
		"ingredients": [
			["电力碎矿机", 4],
			["环 ", 1],
			["齿轮", 2],
			["基础机器框架", 1],
			["无序尘埃", 1]
		],
		"count": 1
	},
	"高级加热压力仓": {
		"type": "增强型工作台",
		"map": [
			["加热压力舱", "环 ", "加热压力舱"],
			["齿轮", "基础机器框架", "齿轮"],
			["加热压力舱", "无序尘埃", "加热压力舱"]
		],
		"ingredients": [
			["加热压力舱", 4],
			["环 ", 1],
			["齿轮", 2],
			["基础机器框架", 1],
			["无序尘埃", 1]
		],
		"count": 1
	},
	"高级打粉机": {
		"type": "增强型工作台",
		"map": [
			["电力打粉机", "环 ", "电力打粉机"],
			["齿轮", "基础机器框架", "齿轮"],
			["电力打粉机", "无序尘埃", "电力打粉机"]
		],
		"ingredients": [
			["电力打粉机", 4],
			["环 ", 1],
			["齿轮", 2],
			["基础机器框架", 1],
			["无序尘埃", 1]
		],
		"count": 1
	},
	"高级烘干机": {
		"type": "增强型工作台",
		"map": [
			["自动烘干机", "环 ", "自动烘干机"],
			["齿轮", "基础机器框架", "齿轮"],
			["自动烘干机", "无序尘埃", "自动烘干机"]
		],
		"ingredients": [
			["自动烘干机", 4],
			["环 ", 1],
			["齿轮", 2],
			["基础机器框架", 1],
			["无序尘埃", 1]
		],
		"count": 1
	},
	"高级压缩机": {
		"type": "增强型工作台",
		"map": [
			["压缩机", "环 ", "压缩机"],
			["齿轮", "基础机器框架", "齿轮"],
			["压缩机", "无序尘埃", "压缩机"]
		],
		"ingredients": [
			["压缩机", 4],
			["环 ", 1],
			["齿轮", 2],
			["基础机器框架", 1],
			["无序尘埃", 1]
		],
		"count": 1
	},
	"高级作物加工厂": {
		"type": "增强型工作台",
		"map": [
			["食品堆肥器", "环 ", "食品堆肥器"],
			["齿轮", "基础机器框架", "齿轮"],
			["食品加工机", "无序尘埃", "食品加工机"]
		],
		"ingredients": [
			["食品堆肥器", 2],
			["环 ", 1],
			["齿轮", 2],
			["基础机器框架", 1],
			["食品加工机", 2],
			["无序尘埃", 1]
		],
		"count": 1
	},
	"高级冰箱": {
		"type": "增强型工作台",
		"map": [
			["冰箱", "环 ", "冰箱"],
			["齿轮", "基础机器框架", "齿轮"],
			["冰箱", "无序尘埃", "冰箱"]
		],
		"ingredients": [
			["冰箱", 4],
			["环 ", 1],
			["齿轮", 2],
			["基础机器框架", 1],
			["无序尘埃", 1]
		],
		"count": 1
	},
	"高级碳压机": {
		"type": "增强型工作台",
		"map": [
			["碳压机", "环 ", "碳压机"],
			["齿轮", "基础机器框架", "齿轮"],
			["碳压机", "无序尘埃", "碳压机"]
		],
		"ingredients": [
			["碳压机", 4],
			["环 ", 1],
			["齿轮", 2],
			["基础机器框架", 1],
			["无序尘埃", 1]
		],
		"count": 1
	},
	"高级冶炼炉": {
		"type": "增强型工作台",
		"map": [
			["电力冶炼炉", "环 ", "电力冶炼炉"],
			["齿轮", "基础机器框架", "齿轮"],
			["电力冶炼炉", "无序尘埃", "电力冶炼炉"]
		],
		"ingredients": [
			["电力冶炼炉", 4],
			["环 ", 1],
			["齿轮", 2],
			["基础机器框架", 1],
			["无序尘埃", 1]
		],
		"count": 1
	},
	"高级矿石工厂": {
		"type": "增强型工作台",
		"map": [
			["基础矿石工厂", "环 ", "基础矿石工厂"],
			["齿轮", "基础机器框架", "齿轮"],
			["基础矿石工厂", "无序尘埃", "基础矿石工厂"]
		],
		"ingredients": [
			["基础矿石工厂", 4],
			["环 ", 1],
			["齿轮", 2],
			["基础机器框架", 1],
			["无序尘埃", 1]
		],
		"count": 1
	},
	"高级矿粉工厂": {
		"type": "增强型工作台",
		"map": [
			["基础矿粉工厂", "环 ", "基础矿粉工厂"],
			["齿轮", "基础机器框架", "齿轮"],
			["基础矿粉工厂", "无序尘埃", "基础矿粉工厂"]
		],
		"ingredients": [
			["基础矿粉工厂", 4],
			["环 ", 1],
			["齿轮", 2],
			["基础机器框架", 1],
			["无序尘埃", 1]
		],
		"count": 1
	},
	"高级作物工厂": {
		"type": "增强型工作台",
		"map": [
			["基础作物工厂", "环 ", "基础作物工厂"],
			["齿轮", "基础机器框架", "齿轮"],
			["基础作物工厂", "无序尘埃", "基础作物工厂"]
		],
		"ingredients": [
			["基础作物工厂", 4],
			["环 ", 1],
			["齿轮", 2],
			["基础机器框架", 1],
			["无序尘埃", 1]
		],
		"count": 1
	},
	"无限充能卡": {
		"map": [
			["充能卡L3", "充能卡L2", "充能卡L3"],
			["充能卡L2", "伪物", "充能卡L2"],
			["充能卡L3", "充能卡L2", "充能卡L3"]
		],
		"ingredients": [
			["充能卡L3", 4],
			["充能卡L2", 4],
			["伪物", 1]
		],
		"count": 1
	},
	"无限过载卡": {
		"map": [
			["过载卡L3", "过载卡L2", "过载卡L3"],
			["过载卡L2", "伪物", "过载卡L2"],
			["过载卡L3", "过载卡L2", "过载卡L3"]
		],
		"ingredients": [
			["过载卡L3", 4],
			["过载卡L2", 4],
			["伪物", 1]
		],
		"count": 1
	},
	"带电超频卡L4": {
		"map": [
			["无限过载卡", "齿轮", "齿轮"],
			["齿轮", "伪物", "齿轮"],
			["齿轮", "齿轮", "无限充能卡"]
		],
		"ingredients": [
			["无限过载卡", 1],
			["齿轮", 6],
			["伪物", 1],
			["无限充能卡", 1]
		],
		"count": 1
	},
	"高级自动合成机": {
		"map": [
			["齿轮", "齿轮", "齿轮"],
			["齿轮", "伪物", "齿轮"],
			["有序尘埃", "货运管理器", "有序尘埃"]
		],
		"ingredients": [
			["齿轮", 5],
			["伪物", 1],
			["有序尘埃", 2],
			["货运管理器", 1]
		],
		"count": 1
	},
	"矩阵电容": {
		"map": [
			["齿轮", "数量组件", "齿轮"],
			["终极扩展电容", "伪物", "终极扩展电容"],
			["齿轮", "数量组件", "齿轮"]
		],
		"ingredients": [
			["齿轮", 4],
			["数量组件", 2],
			["终极扩展电容", 2],
			["伪物", 1]
		],
		"count": 1
	},
	"矩阵供电机": {
		"map": [
			["充能供电机", "锟斤拷", "充能供电机"],
			["锟斤拷", "伪物", "锟斤拷"],
			["充能供电机", "锟斤拷", "充能供电机"]
		],
		"ingredients": [
			["充能供电机", 4],
			["锟斤拷", 4],
			["伪物", 1]
		],
		"count": 1
	},
	"矩阵加速器": {
		"map": [
			["环 ", "环 ", "环 "],
			["环 ", "伪物", "环 "],
			["环 ", "环 ", "环 "]
		],
		"ingredients": [
			["环 ", 8],
			["伪物", 1]
		],
		"count": 1
	},
	"尘埃反应堆": {
		"map": [
			["锟斤拷", "锟斤拷", "锟斤拷"],
			["锟斤拷", "伪物", "锟斤拷"],
			["锟斤拷", "锟斤拷", "锟斤拷"]
		],
		"ingredients": [
			["锟斤拷", 8],
			["伪物", 1]
		],
		"count": 1
	},
	"节点配置复制器": {
		"type": "增强型工作台",
		"map": [
			["精炼铁", "钢筋板", "精炼铁"],
			["钢筋板", "货运管理器", "钢筋板"],
			["精炼铁", "钢筋板", "精炼铁"]
		],
		"ingredients": [
			["精炼铁", 4],
			["钢筋板", 4],
			["货运管理器", 1]
		],
		"count": 1
	},
	"玻璃刀": {
		"type": "增强型工作台",
		"map": [
			["精炼铁", "精炼铁", "精炼铁"],
			["剪刀", "高级电路", "剪刀"],
			[null, "碳板", null]
		],
		"ingredients": [
			["精炼铁", 3],
			["剪刀", 2],
			["高级电路", 1],
			["碳板", 1]
		],
		"count": 1
	},
	"采矿钻头": {
		"type": "增强型工作台",
		"map": [
			[null, "铁板", null],
			["铁板", "铁板", "铁板"],
			["铁板", "能量单元", "铁板"]
		],
		"ingredients": [
			["铁板", 6],
			["能量单元", 1]
		],
		"count": 1
	},
	"钻石采矿钻头": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			[null, "钻石", null],
			["钻石", "采矿钻头", "钻石"]
		],
		"ingredients": [
			["钻石", 3],
			["采矿钻头", 1]
		],
		"count": 1
	},
	"食物合成器": {
		"type": "增强型工作台",
		"map": [
			["塑料纸", "牛排", "塑料纸"],
			["苹果", "小冰柜", "苹果"],
			["塑料纸", "牛排", "塑料纸"]
		],
		"ingredients": [
			["塑料纸", 4],
			["牛排", 2],
			["苹果", 2],
			["小冰柜", 1]
		],
		"count": 1
	},
	"回收机": {
		"type": "增强型工作台",
		"map": [
			["高级电路板", "钢筋板", "高级电路板"],
			["钢筋板", "机器方块", "钢筋板"],
			["高级电路板", "钢筋板", "高级电路板"]
		],
		"ingredients": [
			["高级电路板", 4],
			["钢筋板", 4],
			["机器方块", 1]
		],
		"count": 1
	},
	"物质生成机": {
		"type": "增强型工作台",
		"map": [
			["钢筋板", "高级电路板", "钢筋板"],
			["高级电路板", "机器方块", "高级电路板"],
			["钢筋板", "高级电路板", "钢筋板"]
		],
		"ingredients": [
			["钢筋板", 4],
			["高级电路板", 4],
			["机器方块", 1]
		],
		"count": 1
	},
	"精炼炉": {
		"type": "多方块结构",
		"map": [
			[null, "石砖墙", null],
			["石砖", "发射器", "石砖"],
			[null, "打火石", null]
		],
		"ingredients": [
			["石砖墙", 1],
			["石砖", 2],
			["发射器", 1],
			["打火石", 1]
		],
		"count": 1
	},
	"金属冶炼炉": {
		"type": "多方块结构",
		"map": [
			["铁砧", "石砖墙", "铁砧"],
			["铁块", "发射器", "铁块"],
			[null, "钻石块", null]
		],
		"ingredients": [
			["铁砧", 2],
			["石砖墙", 1],
			["铁块", 2],
			["发射器", 1],
			["钻石块", 1]
		],
		"count": 1
	},
	"多功能电子储存单元(MFE)": {
		"type": "增强型工作台",
		"map": [
			["绝缘金质导线", "能量水晶", "绝缘金质导线"],
			["能量水晶", "机器方块", "能量水晶"],
			["绝缘金质导线", "能量水晶", "绝缘金质导线"]
		],
		"ingredients": [
			["绝缘金质导线", 4],
			["能量水晶", 4],
			["机器方块", 1]
		],
		"count": 1
	},
	"多功能储存单元(MFSU)": {
		"type": "增强型工作台",
		"map": [
			["兰波顿水晶", "高级电路", "兰波顿水晶"],
			["兰波顿水晶", "多功能电子储存单元(MFE)", "兰波顿水晶"],
			["兰波顿水晶", "高级机器方块", "兰波顿水晶"]
		],
		"ingredients": [
			["兰波顿水晶", 6],
			["高级电路", 1],
			["多功能电子储存单元(MFE)", 1],
			["高级机器方块", 1]
		],
		"count": 1
	},
	"发电机": {
		"type": "增强型工作台",
		"map": [
			[null, "可充电电池", null],
			[null, "机器方块", null],
			[null, "熔炉", null]
		],
		"ingredients": [
			["可充电电池", 1],
			["机器方块", 1],
			["熔炉", 1]
		],
		"count": 1
	},
	"手摇式磨具": {
		"type": "多方块结构",
		"map": [
			["铁砧", "石砖墙", "铁砧"],
			["铁块", "发射器", "铁块"],
			[null, "铁块", null]
		],
		"ingredients": [
			["铁砧", 2],
			["石砖墙", 1],
			["铁块", 3],
			["发射器", 1]
		],
		"count": 1
	},
	"粉碎机": {
		"type": "增强型工作台",
		"map": [
			["燧石", "燧石", "燧石"],
			["圆石", "机器方块", "圆石"],
			[null, "基础电路", null]
		],
		"ingredients": [
			["燧石", 3],
			["圆石", 2],
			["机器方块", 1],
			["基础电路", 1]
		],
		"count": 1
	},
	"UU合成机": {
		"type": "增强型工作台",
		"map": [
			["UU 物质", "工作台", "UU 物质"],
			["节点配置复制器", "高级机器方块", "玻璃刀"],
			["UU 物质", "UU 物质", "UU 物质"]
		],
		"ingredients": [
			["UU 物质", 5],
			["工作台", 1],
			["节点配置复制器", 1],
			["高级机器方块", 1],
			["玻璃刀", 1]
		],
		"count": 1
	},
	"橡胶": {
		"type": "橡胶合成机",
		"map": [
			["原油桶", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["原油桶", 1]
		],
		"count": 1
	},
	"橡胶合成机": {
		"type": "增强型工作台",
		"map": [
			["钢筋板", "中型储能电容", "钢筋板"],
			["活塞", "机器方块", "活塞"],
			["钢筋板", "打火石", "钢筋板"]
		],
		"ingredients": [
			["钢筋板", 4],
			["中型储能电容", 1],
			["活塞", 2],
			["机器方块", 1],
			["打火石", 1]
		],
		"count": 1
	},
	"高级合金": {
		"type": "压缩机",
		"map": [
			["合金锭", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["合金锭", 1]
		],
		"count": 1
	},
	"合金锭": {
		"type": "金属冶炼炉",
		"map": [
			["精炼铁", "精炼铁", "精炼铁"],
			["青铜锭", "青铜锭", "青铜锭"],
			["锡锭", "锡锭", "锡锭"]
		],
		"ingredients": [
			["精炼铁", 3],
			["青铜锭", 3],
			["锡锭", 3]
		],
		"count": 1
	},
	"强化玻璃": {
		"type": "增强型工作台",
		"map": [
			["玻璃", "玻璃", "玻璃"],
			["高级合金", "玻璃", "高级合金"],
			["玻璃", "玻璃", "玻璃"]
		],
		"ingredients": [
			["玻璃", 7],
			["高级合金", 2]
		],
		"count": 1
	},
	"机器方块": {
		"type": "金属冶炼炉",
		"map": [
			["精炼铁", "精炼铁", "精炼铁"],
			["精炼铁", null, "精炼铁"],
			["精炼铁", "精炼铁", "精炼铁"]
		],
		"ingredients": [
			["精炼铁", 8]
		],
		"count": 1
	},
	"高级机器方块": {
		"type": "金属冶炼炉",
		"map": [
			[null, "高级合金", null],
			["碳板", "机器方块", "碳板"],
			[null, "碳板", null]
		],
		"ingredients": [
			["高级合金", 1],
			["碳板", 3],
			["机器方块", 1]
		],
		"count": 1
	},
	"锡板": {
		"type": "金属冶炼炉",
		"map": [
			["锡锭", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["锡锭", 1]
		],
		"count": 1
	},
	"锡质外壳": {
		"map": [
			["锡板", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["锡板", 1]
		],
		"count": 1
	},
	"锡质导线": {
		"map": [
			["锡质外壳", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["锡质外壳", 1]
		],
		"count": 3
	},
	"绝缘锡质导线": {
		"type": "增强型工作台",
		"map": [
			["橡胶", "锡质导线", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["橡胶", 1],
			["锡质导线", 1]
		],
		"count": 1
	},
	"铜板": {
		"map": [
			["铜锭", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["铜锭", 1]
		],
		"count": 1
	},
	"铜质外壳": {
		"map": [
			["铜板", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["铜板", 1]
		],
		"count": 1
	},
	"铜质导线": {
		"map": [
			["铜质外壳", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["铜质外壳", 1]
		],
		"count": 3
	},
	"绝缘铜质导线": {
		"type": "增强型工作台",
		"map": [
			["橡胶", "铜质导线", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["橡胶", 1],
			["铜质导线", 1]
		],
		"count": 1
	},
	"可充电电池": {
		"type": "增强型工作台",
		"map": [
			[null, "绝缘锡质导线", null],
			["锡质外壳", "红石粉", "锡质外壳"],
			["锡质外壳", "红石粉", "锡质外壳"]
		],
		"ingredients": [
			["绝缘锡质导线", 1],
			["锡质外壳", 4],
			["红石粉", 2]
		],
		"count": 1
	},
	"金板": {
		"type": "金属冶炼炉",
		"map": [
			["金锭", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["金锭", 1]
		],
		"count": 1
	},
	"金制外壳": {
		"map": [
			["金板", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["金板", 1]
		],
		"count": 1
	},
	"金质导线": {
		"map": [
			["金制外壳", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["金制外壳", 1]
		],
		"count": 3
	},
	"绝缘金质导线": {
		"type": "增强型工作台",
		"map": [
			["橡胶", "金质导线", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["橡胶", 1],
			["金质导线", 1]
		],
		"count": 1
	},
	"铁板": {
		"type": "金属冶炼炉",
		"map": [
			["铁锭", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["铁锭", 1]
		],
		"count": 1
	},
	"铁质外壳": {
		"map": [
			["铁板", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["铁板", 1]
		],
		"count": 1
	},
	"钻石板": {
		"type": "金属冶炼炉",
		"map": [
			["钻石", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["钻石", 1]
		],
		"count": 1
	},
	"钍板": {
		"type": "金属冶炼炉",
		"map": [
			["钍", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["钍", 1]
		],
		"count": 1
	},
	"基础电路": {
		"type": "增强型工作台",
		"map": [
			["绝缘铜质导线", "绝缘铜质导线", "绝缘铜质导线"],
			["红石粉", "精炼铁", "红石粉"],
			["绝缘铜质导线", "绝缘铜质导线", "绝缘铜质导线"]
		],
		"ingredients": [
			["绝缘铜质导线", 6],
			["红石粉", 2],
			["精炼铁", 1]
		],
		"count": 1
	},
	"高级电路": {
		"type": "增强型工作台",
		"map": [
			["红石粉", "青金石", "红石粉"],
			["荧石粉", "基础电路", "荧石粉"],
			["红石粉", "青金石", "红石粉"]
		],
		"ingredients": [
			["红石粉", 4],
			["青金石", 2],
			["荧石粉", 2],
			["基础电路", 1]
		],
		"count": 1
	},
	"兰波顿水晶": {
		"type": "增强型工作台",
		"map": [
			["青金石", "高级电路", "青金石"],
			["青金石", "能量水晶", "青金石"],
			["青金石", "高级电路", "青金石"]
		],
		"ingredients": [
			["青金石", 6],
			["高级电路", 2],
			["能量水晶", 1]
		],
		"count": 1
	},
	"能量单元": {
		"type": "增强型工作台",
		"map": [
			["可充电电池", "铜质导线", "铁质外壳"],
			["可充电电池", "高级电路板", "电动马达"],
			["可充电电池", "铜质导线", "铁质外壳"]
		],
		"ingredients": [
			["可充电电池", 3],
			["铜质导线", 2],
			["铁质外壳", 2],
			["高级电路板", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"精炼铁": {
		"type": "精炼炉",
		"map": [
			["铁锭", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["铁锭", 1]
		],
		"count": 1
	},
	"镁钍合金": {
		"type": "冶炼炉",
		"map": [
			["强化合金锭", "钍", "镁锭"],
			["锌锭", null, null],
			[null, null, null]
		],
		"ingredients": [
			["强化合金锭", 1],
			["钍", 1],
			["镁锭", 1],
			["锌锭", 1]
		],
		"count": 1
	},
	"钍": {
		"type": "自然资源开采机",
		"map": [
			[null, null, null],
			[null, "提醒!", null],
			[null, null, null]
		],
		"ingredients": [
			["提醒!", 1]
		],
		"count": 1
	},
	"废料": {
		"map": [
			["任何物品!", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["任何物品!", 1]
		],
		"count": 1
	},
	"UU 物质": {
		"type": "物质生成机",
		"map": [
			[null, null, null],
			[null, "废料", null],
			[null, null, null]
		],
		"ingredients": [
			["废料", 1]
		],
		"count": 1
	},
	"铱": {
		"type": "增强型工作台",
		"map": [
			["UU 物质", "UU 物质", "UU 物质"],
			[null, "UU 物质", null],
			["UU 物质", "UU 物质", "UU 物质"]
		],
		"ingredients": [
			["UU 物质", 7]
		],
		"count": 1
	},
	"铱板": {
		"type": "金属冶炼炉",
		"map": [
			["铱", "高级合金", "铱"],
			["高级合金", "钻石", "高级合金"],
			["铱", "高级合金", "铱"]
		],
		"ingredients": [
			["铱", 4],
			["高级合金", 4],
			["钻石", 1]
		],
		"count": 1
	},
	"纳米剑 (关)": {
		"type": "金属冶炼炉",
		"map": [
			["荧石粉", "高级合金", null],
			["荧石粉", "高级合金", null],
			["碳板", "能量水晶", "碳板"]
		],
		"ingredients": [
			["荧石粉", 2],
			["高级合金", 2],
			["碳板", 2],
			["能量水晶", 1]
		],
		"count": 1
	},
	"电动护甲": {
		"type": "金属冶炼炉",
		"map": [
			["镁钍合金", null, "镁钍合金"],
			["镁钍合金", "大型储能电容", "镁钍合金"],
			["镁钍合金", "镁钍合金", "镁钍合金"]
		],
		"ingredients": [
			["镁钍合金", 7],
			["大型储能电容", 1]
		],
		"count": 1
	},
	"碳粉": {
		"type": "矿石粉碎机",
		"map": [
			["煤炭", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["煤炭", 1]
		],
		"count": 1
	},
	"粗制碳网": {
		"type": "增强型工作台",
		"map": [
			["碳粉", "碳粉", null],
			["碳粉", "碳粉", null],
			[null, null, null]
		],
		"ingredients": [
			["碳粉", 4]
		],
		"count": 1
	},
	"粗制碳板": {
		"type": "增强型工作台",
		"map": [
			["粗制碳网", "粗制碳网", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["粗制碳网", 2]
		],
		"count": 1
	},
	"碳板": {
		"type": "压缩机",
		"map": [
			["粗制碳板", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["粗制碳板", 1]
		],
		"count": 1
	},
	"高级太阳能板": {
		"type": "增强型工作台",
		"map": [
			["强化玻璃", "强化玻璃", "强化玻璃"],
			["高级合金", "充能太阳能发电机", "高级合金"],
			["高级电路板", "高级机器方块", "高级电路板"]
		],
		"ingredients": [
			["强化玻璃", 3],
			["高级合金", 2],
			["充能太阳能发电机", 1],
			["高级电路板", 2],
			["高级机器方块", 1]
		],
		"count": 1
	},
	"混合太阳能板": {
		"type": "增强型工作台",
		"map": [
			["碳板", "青金石块", "碳板"],
			["铱板", "高级机器方块", "铱板"],
			["高级电路板", "铱板", "高级电路板"]
		],
		"ingredients": [
			["碳板", 2],
			["青金石块", 1],
			["铱板", 3],
			["高级机器方块", 1],
			["高级电路板", 2]
		],
		"count": 1
	},
	"终极太阳能板": {
		"type": "增强型工作台",
		"map": [
			["混合太阳能板", "混合太阳能板", "混合太阳能板"],
			["混合太阳能板", "高级电路板", "混合太阳能板"],
			["混合太阳能板", "混合太阳能板", "混合太阳能板"]
		],
		"ingredients": [
			["混合太阳能板", 8],
			["高级电路板", 1]
		],
		"count": 1
	},
	"高级太阳能头盔": {
		"type": "增强型工作台",
		"map": [
			[null, "太阳能发电机", null],
			["铁板", "太阳能头盔", "铁板"],
			["铁板", null, "铁板"]
		],
		"ingredients": [
			["太阳能发电机", 1],
			["铁板", 4],
			["太阳能头盔", 1]
		],
		"count": 1
	},
	"黑金刚石太阳能头盔": {
		"type": "增强型工作台",
		"map": [
			[null, "高级太阳能发电机", null],
			["铜板", "高级太阳能头盔", "铜板"],
			["铜板", null, "铜板"]
		],
		"ingredients": [
			["高级太阳能发电机", 1],
			["铜板", 4],
			["高级太阳能头盔", 1]
		],
		"count": 1
	},
	"充能太阳能头盔": {
		"type": "增强型工作台",
		"map": [
			[null, "黑金刚石太阳能发电机", null],
			["金板", "黑金刚石太阳能头盔", "金板"],
			["金板", null, "金板"]
		],
		"ingredients": [
			["黑金刚石太阳能发电机", 1],
			["金板", 4],
			["黑金刚石太阳能头盔", 1]
		],
		"count": 1
	},
	"混合太阳能头盔": {
		"type": "增强型工作台",
		"map": [
			[null, "高级太阳能板", null],
			["钍板", "超级太阳能头盔", "钍板"],
			["钍板", null, "钍板"]
		],
		"ingredients": [
			["高级太阳能板", 1],
			["钍板", 4],
			["超级太阳能头盔", 1]
		],
		"count": 1
	},
	"超级太阳能头盔": {
		"type": "增强型工作台",
		"map": [
			[null, "充能太阳能发电机", null],
			["钻石板", "充能太阳能头盔", "钻石板"],
			["钻石板", null, "钻石板"]
		],
		"ingredients": [
			["充能太阳能发电机", 1],
			["钻石板", 4],
			["充能太阳能头盔", 1]
		],
		"count": 1
	},
	"终极太阳能头盔": {
		"type": "增强型工作台",
		"map": [
			[null, "终极太阳能板", null],
			["铱板", "混合太阳能头盔", "铱板"],
			["铱板", null, "铱板"]
		],
		"ingredients": [
			["终极太阳能板", 1],
			["铱板", 4],
			["混合太阳能头盔", 1]
		],
		"count": 1
	},
	"导弹指南书": {
		"type": "增强型工作台",
		"map": [
			[null, "糖燃料", null],
			["糖燃料", "书", "糖燃料"],
			[null, "糖燃料", null]
		],
		"ingredients": [
			["糖燃料", 4],
			["书", 1]
		],
		"count": 1
	},
	"敌我识别系统配置器": {
		"type": "增强型工作台",
		"map": [
			[null, "超轻铸锭", null],
			["超轻铸锭", "书", "超轻铸锭"],
			[null, "超轻铸锭", null]
		],
		"ingredients": [
			["超轻铸锭", 4],
			["书", 1]
		],
		"count": 1
	},
	"对地导弹发射地井": {
		"type": "增强型工作台",
		"map": [
			["钢筋板", null, "钢筋板"],
			["钢筋板", "电动马达", "钢筋板"],
			["钢筋板", "打火石", "钢筋板"]
		],
		"ingredients": [
			["钢筋板", 6],
			["电动马达", 1],
			["打火石", 1]
		],
		"count": 1
	},
	"反鞘翅导弹发射地井": {
		"type": "增强型工作台",
		"map": [
			["超轻铸板", null, "超轻铸板"],
			["钢筋板", null, "钢筋板"],
			["钢筋板", "电动马达", "钢筋板"]
		],
		"ingredients": [
			["超轻铸板", 2],
			["钢筋板", 4],
			["电动马达", 1]
		],
		"count": 1
	},
	"反弹道导弹发射地井": {
		"type": "增强型工作台",
		"map": [
			["银锭", "基础电路板", "银锭"],
			["银锭", null, "银锭"],
			["铅锭", "红石块", "铅锭"]
		],
		"ingredients": [
			["银锭", 4],
			["基础电路板", 1],
			["铅锭", 2],
			["红石块", 1]
		],
		"count": 1
	},
	"导弹雷达": {
		"type": "增强型工作台",
		"map": [
			["基础飞行计算机", "超轻铸板", "基础飞行计算机"],
			["超轻铸板", "雷达", "超轻铸板"],
			["基础飞行计算机", "超轻铸板", "基础飞行计算机"]
		],
		"ingredients": [
			["基础飞行计算机", 4],
			["超轻铸板", 4],
			["雷达", 1]
		],
		"count": 1
	},
	"地雷": {
		"type": "增强型工作台",
		"map": [
			["银锭", "石质压力板", "银锭"],
			["银锭", "火箭燃料", "银锭"],
			["银锭", "炸药粉", "银锭"]
		],
		"ingredients": [
			["银锭", 6],
			["石质压力板", 1],
			["火箭燃料", 1],
			["炸药粉", 1]
		],
		"count": 1
	},
	"便携式防空导弹": {
		"type": "增强型工作台",
		"map": [
			["铁锭", "铁锭", "铁锭"],
			["炸药粉", "糖燃料", "糖燃料"],
			["铁锭", "铁锭", "铁锭"]
		],
		"ingredients": [
			["铁锭", 6],
			["炸药粉", 1],
			["糖燃料", 2]
		],
		"count": 1
	},
	"糖燃料": {
		"type": "增强型工作台",
		"map": [
			[null, "镁", null],
			["镁", "煤炭", "镁"],
			[null, "镁", null]
		],
		"ingredients": [
			["镁", 4],
			["煤炭", 1]
		],
		"count": 1
	},
	"炸药粉": {
		"type": "增强型工作台",
		"map": [
			["镁", "煤炭", "镁"],
			["煤炭", "火药", "煤炭"],
			["镁", "煤炭", "镁"]
		],
		"ingredients": [
			["镁", 4],
			["煤炭", 4],
			["火药", 1]
		],
		"count": 1
	},
	"固态炸药粉": {
		"type": "增强型工作台",
		"map": [
			[null, "火药", null],
			["炸药粉", "炸药粉", "炸药粉"],
			[null, "火药", null]
		],
		"ingredients": [
			["火药", 2],
			["炸药粉", 3]
		],
		"count": 1
	},
	"超轻铸锭": {
		"type": "冶炼炉",
		"map": [
			["铁粉", "铝锭", "铜粉"],
			["铝青铜锭", null, null],
			[null, null, null]
		],
		"ingredients": [
			["铁粉", 1],
			["铝锭", 1],
			["铜粉", 1],
			["铝青铜锭", 1]
		],
		"count": 1
	},
	"超轻铸板": {
		"type": "增强型工作台",
		"map": [
			["超轻铸锭", null, "超轻铸锭"],
			[null, "煤炭", null],
			["超轻铸锭", null, "超轻铸锭"]
		],
		"ingredients": [
			["超轻铸锭", 4],
			["煤炭", 1]
		],
		"count": 1
	},
	"氯气": {
		"type": "磨石",
		"map": [
			["灵魂沙", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["灵魂沙", 1]
		],
		"count": 1
	},
	"氯气弹": {
		"type": "增强型工作台",
		"map": [
			["氯气", "硫酸盐", "氯气"],
			["硫酸盐", "盐", "硫酸盐"],
			["氯气", "硫酸盐", "氯气"]
		],
		"ingredients": [
			["氯气", 4],
			["硫酸盐", 4],
			["盐", 1]
		],
		"count": 1
	},
	"基础飞行计算机": {
		"type": "增强型工作台",
		"map": [
			["超轻铸锭", "基础电路板", "超轻铸锭"],
			["红石粉", "基础电路板", "红石粉"],
			["超轻铸锭", "基础电路板", "超轻铸锭"]
		],
		"ingredients": [
			["超轻铸锭", 4],
			["基础电路板", 3],
			["红石粉", 2]
		],
		"count": 8
	},
	"雷达": {
		"type": "增强型工作台",
		"map": [
			[null, "超轻铸板", null],
			["超轻铸板", "基础飞行计算机", "超轻铸板"],
			["红石粉", null, "红石粉"]
		],
		"ingredients": [
			["超轻铸板", 3],
			["基础飞行计算机", 1],
			["红石粉", 2]
		],
		"count": 1
	},
	"火箭燃料": {
		"type": "增强型工作台",
		"map": [
			["炸药粉", "火药", "炸药粉"],
			[null, "铝粉", null],
			["炸药粉", "火药", "炸药粉"]
		],
		"ingredients": [
			["炸药粉", 4],
			["火药", 2],
			["铝粉", 1]
		],
		"count": 1
	},
	"小型导弹弹头": {
		"type": "增强型工作台",
		"map": [
			[null, "铝锭", null],
			["铝锭", "炸药粉", "铝锭"],
			[null, null, null]
		],
		"ingredients": [
			["铝锭", 3],
			["炸药粉", 1]
		],
		"count": 1
	},
	"导弹弹头": {
		"type": "增强型工作台",
		"map": [
			[null, "超轻铸锭", null],
			["超轻铸锭", "固态炸药粉", "超轻铸锭"],
			[null, null, null]
		],
		"ingredients": [
			["超轻铸锭", 3],
			["固态炸药粉", 1]
		],
		"count": 1
	},
	"增强型导弹弹头": {
		"type": "增强型工作台",
		"map": [
			[null, "铅锭", null],
			["超轻铸锭", "固态炸药粉", "超轻铸锭"],
			[null, null, null]
		],
		"ingredients": [
			["铅锭", 1],
			["超轻铸锭", 2],
			["固态炸药粉", 1]
		],
		"count": 1
	},
	"小型导弹体": {
		"type": "增强型工作台",
		"map": [
			["铝锭", null, "铝锭"],
			["超轻铸锭", "基础飞行计算机", "超轻铸锭"],
			["铝锭", null, "铝锭"]
		],
		"ingredients": [
			["铝锭", 4],
			["超轻铸锭", 2],
			["基础飞行计算机", 1]
		],
		"count": 1
	},
	"小型导弹鳍": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			[null, "基础飞行计算机", null],
			["铝锭", null, "铝锭"]
		],
		"ingredients": [
			["基础飞行计算机", 1],
			["铝锭", 2]
		],
		"count": 1
	},
	"导弹体": {
		"type": "增强型工作台",
		"map": [
			["超轻铸板", "基础飞行计算机", "超轻铸板"],
			["超轻铸板", "火箭燃料", "超轻铸板"],
			["超轻铸板", "火箭燃料", "超轻铸板"]
		],
		"ingredients": [
			["超轻铸板", 6],
			["基础飞行计算机", 1],
			["火箭燃料", 2]
		],
		"count": 4
	},
	"导弹鳍": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			["超轻铸板", null, "超轻铸板"],
			["超轻铸板", null, "超轻铸板"]
		],
		"ingredients": [
			["超轻铸板", 4]
		],
		"count": 1
	},
	"增强型导弹体": {
		"type": "增强型工作台",
		"map": [
			["火箭燃料", "基础飞行计算机", "火箭燃料"],
			["超轻铸板", "导弹体", "超轻铸板"],
			["火箭燃料", "基础飞行计算机", "火箭燃料"]
		],
		"ingredients": [
			["火箭燃料", 4],
			["基础飞行计算机", 2],
			["超轻铸板", 2],
			["导弹体", 1]
		],
		"count": 1
	},
	"重型导弹弹头": {
		"type": "增强型工作台",
		"map": [
			["固态炸药粉", "导弹弹头", "固态炸药粉"],
			["导弹弹头", "超轻铸板", "导弹弹头"],
			["固态炸药粉", "导弹弹头", "固态炸药粉"]
		],
		"ingredients": [
			["固态炸药粉", 4],
			["导弹弹头", 4],
			["超轻铸板", 1]
		],
		"count": 1
	},
	"洲际弹道导弹体": {
		"type": "增强型工作台",
		"map": [
			["固态炸药粉", "镎", "固态炸药粉"],
			["镎", "增强型导弹体", "镎"],
			["固态炸药粉", "镎", "固态炸药粉"]
		],
		"ingredients": [
			["固态炸药粉", 4],
			["镎", 4],
			["增强型导弹体", 1]
		],
		"count": 1
	},
	"防空导弹": {
		"type": "增强型工作台",
		"map": [
			[null, "雷达", null],
			["炸药粉", "导弹体", "炸药粉"],
			["火箭燃料", "导弹鳍", "火箭燃料"]
		],
		"ingredients": [
			["雷达", 1],
			["炸药粉", 2],
			["导弹体", 1],
			["火箭燃料", 2],
			["导弹鳍", 1]
		],
		"count": 1
	},
	"防空导弹": {
		"type": "增强型工作台",
		"map": [
			["雷达", "小型导弹弹头", "雷达"],
			["炸药粉", "导弹体", "炸药粉"],
			["火箭燃料", "导弹鳍", "火箭燃料"]
		],
		"ingredients": [
			["雷达", 2],
			["小型导弹弹头", 1],
			["炸药粉", 2],
			["导弹体", 1],
			["火箭燃料", 2],
			["导弹鳍", 1]
		],
		"count": 1
	},
	"小型对地导弹": {
		"type": "增强型工作台",
		"map": [
			["炸药粉", "小型导弹弹头", "炸药粉"],
			["糖燃料", "小型导弹体", "糖燃料"],
			["糖燃料", "小型导弹鳍", "糖燃料"]
		],
		"ingredients": [
			["炸药粉", 2],
			["小型导弹弹头", 1],
			["糖燃料", 4],
			["小型导弹体", 1],
			["小型导弹鳍", 1]
		],
		"count": 1
	},
	"小型对地导弹 - 高爆": {
		"type": "增强型工作台",
		"map": [
			["炸药粉", "小型导弹弹头", "炸药粉"],
			["炸药粉", "小型导弹体", "糖燃料"],
			["糖燃料", "小型导弹鳍", "糖燃料"]
		],
		"ingredients": [
			["炸药粉", 3],
			["小型导弹弹头", 1],
			["小型导弹体", 1],
			["糖燃料", 3],
			["小型导弹鳍", 1]
		],
		"count": 1
	},
	"小型对地导弹 - 远距": {
		"type": "增强型工作台",
		"map": [
			["炸药粉", "小型导弹弹头", "炸药粉"],
			["糖燃料", "小型导弹体", "糖燃料"],
			["火箭燃料", "小型导弹鳍", "火箭燃料"]
		],
		"ingredients": [
			["炸药粉", 2],
			["小型导弹弹头", 1],
			["糖燃料", 2],
			["小型导弹体", 1],
			["火箭燃料", 2],
			["小型导弹鳍", 1]
		],
		"count": 1
	},
	"小型对地导弹 - 精准": {
		"type": "增强型工作台",
		"map": [
			["炸药粉", "小型导弹弹头", "炸药粉"],
			["糖燃料", "小型导弹体", "糖燃料"],
			["小型导弹鳍", "火箭燃料", "小型导弹鳍"]
		],
		"ingredients": [
			["炸药粉", 2],
			["小型导弹弹头", 1],
			["糖燃料", 2],
			["小型导弹体", 1],
			["小型导弹鳍", 2],
			["火箭燃料", 1]
		],
		"count": 1
	},
	"对地导弹": {
		"type": "增强型工作台",
		"map": [
			[null, "导弹弹头", null],
			["火箭燃料", "导弹体", "火箭燃料"],
			["火箭燃料", "小型导弹鳍", "火箭燃料"]
		],
		"ingredients": [
			["导弹弹头", 1],
			["火箭燃料", 4],
			["导弹体", 1],
			["小型导弹鳍", 1]
		],
		"count": 1
	},
	"对地导弹 - 高爆": {
		"type": "增强型工作台",
		"map": [
			["固态炸药粉", "导弹弹头", "固态炸药粉"],
			["火箭燃料", "导弹体", "火箭燃料"],
			["火箭燃料", "小型导弹鳍", "火箭燃料"]
		],
		"ingredients": [
			["固态炸药粉", 2],
			["导弹弹头", 1],
			["火箭燃料", 4],
			["导弹体", 1],
			["小型导弹鳍", 1]
		],
		"count": 1
	},
	"对地导弹 - 远距": {
		"type": "增强型工作台",
		"map": [
			["火箭燃料", "导弹弹头", "火箭燃料"],
			["火箭燃料", "导弹体", "火箭燃料"],
			["火箭燃料", "导弹鳍", "火箭燃料"]
		],
		"ingredients": [
			["火箭燃料", 6],
			["导弹弹头", 1],
			["导弹体", 1],
			["导弹鳍", 1]
		],
		"count": 1
	},
	"对地导弹 - 精准": {
		"type": "增强型工作台",
		"map": [
			["固态炸药粉", "导弹弹头", "固态炸药粉"],
			["火箭燃料", "导弹体", "火箭燃料"],
			["导弹鳍", "火箭燃料", "导弹鳍"]
		],
		"ingredients": [
			["固态炸药粉", 2],
			["导弹弹头", 1],
			["火箭燃料", 3],
			["导弹体", 1],
			["导弹鳍", 2]
		],
		"count": 1
	},
	"钻地导弹": {
		"type": "增强型工作台",
		"map": [
			["固态炸药粉", "小型导弹弹头", "固态炸药粉"],
			["火箭燃料", "导弹体", "火箭燃料"],
			["小型导弹鳍", "导弹鳍", "小型导弹鳍"]
		],
		"ingredients": [
			["固态炸药粉", 2],
			["小型导弹弹头", 1],
			["火箭燃料", 2],
			["导弹体", 1],
			["小型导弹鳍", 2],
			["导弹鳍", 1]
		],
		"count": 1
	},
	"钻地导弹": {
		"type": "增强型工作台",
		"map": [
			["超轻铸锭", "超轻铸板", "超轻铸锭"],
			["超轻铸锭", "钻地导弹", "超轻铸锭"],
			["糖燃料", "糖燃料", "糖燃料"]
		],
		"ingredients": [
			["超轻铸锭", 4],
			["超轻铸板", 1],
			["钻地导弹", 1],
			["糖燃料", 3]
		],
		"count": 1
	},
	"钻地导弹": {
		"type": "增强型工作台",
		"map": [
			["超轻铸锭", "超轻铸板", "超轻铸锭"],
			["超轻铸锭", "钻地导弹", "超轻铸锭"],
			["糖燃料", "糖燃料", "糖燃料"]
		],
		"ingredients": [
			["超轻铸锭", 4],
			["超轻铸板", 1],
			["钻地导弹", 1],
			["糖燃料", 3]
		],
		"count": 1
	},
	"芥子气弹": {
		"type": "增强型工作台",
		"map": [
			["氯气弹", "氯气弹", "氯气弹"],
			["火箭燃料", "导弹体", "火箭燃料"],
			["火箭燃料", "导弹鳍", "火箭燃料"]
		],
		"ingredients": [
			["氯气弹", 3],
			["火箭燃料", 4],
			["导弹体", 1],
			["导弹鳍", 1]
		],
		"count": 1
	},
	"开山导弹": {
		"type": "增强型工作台",
		"map": [
			["炸药粉", "导弹弹头", "炸药粉"],
			["导弹弹头", "小型导弹体", "导弹弹头"],
			["糖燃料", "小型导弹鳍", "糖燃料"]
		],
		"ingredients": [
			["炸药粉", 2],
			["导弹弹头", 3],
			["小型导弹体", 1],
			["糖燃料", 2],
			["小型导弹鳍", 1]
		],
		"count": 1
	},
	"粘性导弹": {
		"type": "增强型工作台",
		"map": [
			["线", "线", "线"],
			["糖燃料", "导弹体", "糖燃料"],
			["火箭燃料", "导弹鳍", "火箭燃料"]
		],
		"ingredients": [
			["线", 3],
			["糖燃料", 2],
			["导弹体", 1],
			["火箭燃料", 2],
			["导弹鳍", 1]
		],
		"count": 1
	},
	"洲际弹道导弹": {
		"type": "增强型工作台",
		"map": [
			["火箭燃料", "重型导弹弹头", "火箭燃料"],
			["火箭燃料", "洲际弹道导弹体", "火箭燃料"],
			["火箭燃料", "钢推进器", "火箭燃料"]
		],
		"ingredients": [
			["火箭燃料", 6],
			["重型导弹弹头", 1],
			["洲际弹道导弹体", 1],
			["钢推进器", 1]
		],
		"count": 1
	},
	"集束导弹": {
		"type": "增强型工作台",
		"map": [
			["导弹弹头", "重型导弹弹头", "导弹弹头"],
			["火箭燃料", "增强型导弹体", "火箭燃料"],
			["火箭燃料", "导弹鳍", "火箭燃料"]
		],
		"ingredients": [
			["导弹弹头", 2],
			["重型导弹弹头", 1],
			["火箭燃料", 4],
			["增强型导弹体", 1],
			["导弹鳍", 1]
		],
		"count": 1
	},
	"凝固汽油弹": {
		"type": "增强型工作台",
		"map": [
			["火焰弹", "重型导弹弹头", "火焰弹"],
			["火箭燃料", "增强型导弹体", "火箭燃料"],
			["火箭燃料", "导弹鳍", "火箭燃料"]
		],
		"ingredients": [
			["火焰弹", 2],
			["重型导弹弹头", 1],
			["火箭燃料", 4],
			["增强型导弹体", 1],
			["导弹鳍", 1]
		],
		"count": 1
	},
	"增强型对地导弹": {
		"type": "增强型工作台",
		"map": [
			[null, "导弹弹头", null],
			["火箭燃料", "增强型导弹体", "火箭燃料"],
			["火箭燃料", "导弹鳍", "火箭燃料"]
		],
		"ingredients": [
			["导弹弹头", 1],
			["火箭燃料", 4],
			["增强型导弹体", 1],
			["导弹鳍", 1]
		],
		"count": 1
	},
	"增强型对地导弹 - 高爆": {
		"type": "增强型工作台",
		"map": [
			["固态炸药粉", "重型导弹弹头", "固态炸药粉"],
			["火箭燃料", "增强型导弹体", "火箭燃料"],
			["火箭燃料", "导弹鳍", "火箭燃料"]
		],
		"ingredients": [
			["固态炸药粉", 2],
			["重型导弹弹头", 1],
			["火箭燃料", 4],
			["增强型导弹体", 1],
			["导弹鳍", 1]
		],
		"count": 1
	},
	"增强型对地导弹 - 远距": {
		"type": "增强型工作台",
		"map": [
			["固态炸药粉", "导弹弹头", "固态炸药粉"],
			["火箭燃料", "增强型导弹体", "火箭燃料"],
			["基础电路板", "导弹鳍", "基础电路板"]
		],
		"ingredients": [
			["固态炸药粉", 2],
			["导弹弹头", 1],
			["火箭燃料", 2],
			["增强型导弹体", 1],
			["基础电路板", 2],
			["导弹鳍", 1]
		],
		"count": 1
	},
	"增强型对地导弹 - 专精": {
		"type": "增强型工作台",
		"map": [
			["固态炸药粉", "导弹弹头", "固态炸药粉"],
			["火箭燃料", "增强型导弹体", "火箭燃料"],
			["导弹鳍", "基础电路板", "导弹鳍"]
		],
		"ingredients": [
			["固态炸药粉", 2],
			["导弹弹头", 1],
			["火箭燃料", 2],
			["增强型导弹体", 1],
			["导弹鳍", 2],
			["基础电路板", 1]
		],
		"count": 1
	},
	"铁锤": {
		"type": "魔法工作台",
		"map": [
			["铁锭", "铁锭", "铁锭"],
			["铁锭", "木棍", "铁锭"],
			[null, "木棍", null]
		],
		"ingredients": [
			["铁锭", 5],
			["木棍", 2]
		],
		"count": 1
	},
	"黄金转化器": {
		"type": "增强型工作台",
		"map": [
			[null, "银锭", null],
			["电动马达", "金块 (24克拉)", "电动马达"],
			["金镐", "中型储能电容", "金镐"]
		],
		"ingredients": [
			["银锭", 1],
			["电动马达", 2],
			["金块 (24克拉)", 1],
			["金镐", 2],
			["中型储能电容", 1]
		],
		"count": 1
	},
	"电动堆肥机": {
		"type": "增强型工作台",
		"map": [
			["镀金铁锭", "镁锭", "镀金铁锭"],
			["电动马达", "搅拌机", "电动马达"],
			["铁锄", "中型储能电容", "铁锄"]
		],
		"ingredients": [
			["镀金铁锭", 2],
			["镁锭", 1],
			["电动马达", 2],
			["搅拌机", 1],
			["铁锄", 2],
			["中型储能电容", 1]
		],
		"count": 1
	},
	"电动堆肥机 (II)": {
		"type": "增强型工作台",
		"map": [
			["硬化金属", "起泡锭", "硬化金属"],
			["电动马达", "电动堆肥机", "电动马达"],
			["钻石锄", "巨型储能电容", "钻石锄"]
		],
		"ingredients": [
			["硬化金属", 2],
			["起泡锭", 1],
			["电动马达", 2],
			["电动堆肥机", 1],
			["钻石锄", 2],
			["巨型储能电容", 1]
		],
		"count": 1
	},
	"圆石发生器": {
		"type": "增强型工作台",
		"map": [
			["可编程式机器人 (矿工)", "镁锭", "可编程式机器人 (矿工)"],
			["水桶", "起泡锭", "熔岩桶"],
			["可编程式机器人 (矿工)", "大型储能电容", "可编程式机器人 (矿工)"]
		],
		"ingredients": [
			["可编程式机器人 (矿工)", 4],
			["镁锭", 1],
			["水桶", 1],
			["起泡锭", 1],
			["熔岩桶", 1],
			["大型储能电容", 1]
		],
		"count": 1
	},
	"蒸馏器": {
		"type": "增强型工作台",
		"map": [
			["岩浆块", "电动马达", "岩浆块"],
			["加热线圈", "流体泵", "加热线圈"],
			["岩浆块", "中型储能电容", "岩浆块"]
		],
		"ingredients": [
			["岩浆块", 4],
			["电动马达", 1],
			["加热线圈", 2],
			["流体泵", 1],
			["中型储能电容", 1]
		],
		"count": 1
	},
	"混凝土搅拌机": {
		"type": "增强型工作台",
		"map": [
			["水桶", "镀金铁锭", "水桶"],
			["高级电路板", "电动马达", "高级电路板"],
			["水桶", "小型储能电容", "水桶"]
		],
		"ingredients": [
			["水桶", 4],
			["镀金铁锭", 1],
			["高级电路板", 2],
			["电动马达", 1],
			["小型储能电容", 1]
		],
		"count": 1
	},
	"方块过筛机": {
		"type": "增强型工作台",
		"map": [
			["硅", "硬化金属", "硅"],
			["电动马达", "钢板", "电动马达"],
			["铁镐", "中型储能电容", "铁镐"]
		],
		"ingredients": [
			["硅", 2],
			["硬化金属", 1],
			["电动马达", 2],
			["钢板", 1],
			["铁镐", 2],
			["中型储能电容", 1]
		],
		"count": 1
	},
	"魔法结晶 - IV": {
		"type": "增强型工作台",
		"map": [
			["魔法结晶 - III", "魔法结晶 - III", null],
			["魔法结晶 - III", "魔法结晶 - III", null],
			[null, null, null]
		],
		"ingredients": [
			["魔法结晶 - III", 4]
		],
		"count": 1
	},
	"魔法结晶 - V": {
		"type": "增强型工作台",
		"map": [
			["魔法结晶 - IV", "魔法结晶 - IV", null],
			["魔法结晶 - IV", "魔法结晶 - IV", null],
			[null, null, null]
		],
		"ingredients": [
			["魔法结晶 - IV", 4]
		],
		"count": 1
	},
	"强化线": {
		"type": "增强型工作台",
		"map": [
			["线", "强化合金锭", "线"],
			["强化合金锭", "线", "强化合金锭"],
			["线", "强化合金锭", "线"]
		],
		"ingredients": [
			["线", 5],
			["强化合金锭", 4]
		],
		"count": 1
	},
	"改进核心": {
		"type": "增强型工作台",
		"map": [
			["大马士革钢锭", "强化线", "大马士革钢锭"],
			["强化线", "大马士革钢锭", "强化线"],
			["大马士革钢锭", "强化线", "大马士革钢锭"]
		],
		"ingredients": [
			["大马士革钢锭", 5],
			["强化线", 4]
		],
		"count": 1
	},
	"稳定起泡砖": {
		"type": "增强型工作台",
		"map": [
			["硬化金属", "强化合金锭", "硬化金属"],
			["强化合金锭", "起泡锭", "强化合金锭"],
			["硬化金属", "强化合金锭", "硬化金属"]
		],
		"ingredients": [
			["硬化金属", 4],
			["强化合金锭", 4],
			["起泡锭", 1]
		],
		"count": 1
	},
	"力场引擎": {
		"type": "增强型工作台",
		"map": [
			["水生下界合金锭", "电动马达", "水生下界合金锭"],
			["恶魔板", "稳定起泡砖", "恶魔板"],
			["水生下界合金锭", "电动马达", "水生下界合金锭"]
		],
		"ingredients": [
			["水生下界合金锭", 4],
			["电动马达", 2],
			["恶魔板", 2],
			["稳定起泡砖", 1]
		],
		"count": 1
	},
	"力场稳定器": {
		"type": "增强型工作台",
		"map": [
			["甜蜜锭", "达米恩锭", "甜蜜锭"],
			["达米恩锭", "稳定起泡砖", "达米恩锭"],
			["稳定起泡砖", "稳定起泡砖", "稳定起泡砖"]
		],
		"ingredients": [
			["甜蜜锭", 2],
			["达米恩锭", 3],
			["稳定起泡砖", 4]
		],
		"count": 1
	},
	"无线发射器": {
		"type": "增强型工作台",
		"map": [
			["红石合金锭", "达米恩锭", "红石合金锭"],
			["达米恩锭", "电动马达", "达米恩锭"],
			["达米恩锭", "电池", "达米恩锭"]
		],
		"ingredients": [
			["红石合金锭", 2],
			["达米恩锭", 5],
			["电动马达", 1],
			["电池", 1]
		],
		"count": 1
	},
	"核盐": {
		"type": "增强型工作台",
		"map": [
			[null, "钚铀混合氧化物核燃料", null],
			["钚铀混合氧化物核燃料", "盐", "钚铀混合氧化物核燃料"],
			[null, "钚铀混合氧化物核燃料", null]
		],
		"ingredients": [
			["钚铀混合氧化物核燃料", 4],
			["盐", 1]
		],
		"count": 1
	},
	"压缩海绵": {
		"type": "压缩机",
		"map": [
			["海绵", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["海绵", 1]
		],
		"count": 1
	},
	"恶魔锭": {
		"type": "冶炼炉",
		"map": [
			["岩浆水晶", "起泡锭", "恶魂之泪"],
			["强化合金锭", "坏死颅骨", "奇怪的下界粘液"],
			[null, null, null]
		],
		"ingredients": [
			["岩浆水晶", 1],
			["起泡锭", 1],
			["恶魂之泪", 1],
			["强化合金锭", 1],
			["坏死颅骨", 1],
			["奇怪的下界粘液", 1]
		],
		"count": 1
	},
	"水生下界合金锭": {
		"type": "冶炼炉",
		"map": [
			["大马士革钢锭", "下界合金锭", "海晶碎片"],
			["海晶砂粒", "鹦鹉螺壳", null],
			[null, null, null]
		],
		"ingredients": [
			["大马士革钢锭", 1],
			["下界合金锭", 1],
			["海晶碎片", 1],
			["海晶砂粒", 1],
			["鹦鹉螺壳", 1]
		],
		"count": 1
	},
	"达米恩锭": {
		"type": "冶炼炉",
		"map": [
			["大马士革钢锭", "金锭 (24克拉)", "金锭"],
			["硬化金属", "科林斯青铜锭", null],
			[null, null, null]
		],
		"ingredients": [
			["大马士革钢锭", 1],
			["金锭 (24克拉)", 1],
			["金锭", 1],
			["硬化金属", 1],
			["科林斯青铜锭", 1]
		],
		"count": 1
	},
	"甜蜜锭": {
		"type": "冶炼炉",
		"map": [
			["大马士革钢锭", "钴锭", "银铜合金锭"],
			["蜜脾块", "甜浆果", "蜂蜜块"],
			[null, null, null]
		],
		"ingredients": [
			["大马士革钢锭", 1],
			["钴锭", 1],
			["银铜合金锭", 1],
			["蜜脾块", 1],
			["甜浆果", 1],
			["蜂蜜块", 1]
		],
		"count": 1
	},
	"加糖的甜蜜锭": {
		"type": "冶炼炉",
		"map": [
			["甜蜜锭", "大马士革钢锭", "钴锭"],
			["甜浆果", "糖", "蜂蜜块"],
			[null, null, null]
		],
		"ingredients": [
			["甜蜜锭", 1],
			["大马士革钢锭", 1],
			["钴锭", 1],
			["甜浆果", 1],
			["糖", 1],
			["蜂蜜块", 1]
		],
		"count": 1
	},
	"恶魔板": {
		"type": "压缩机",
		"map": [
			["恶魔锭", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["恶魔锭", 1]
		],
		"count": 1
	},
	"水灵头盔框架": {
		"type": "盔甲锻造台",
		"map": [
			["水生下界合金锭", "水生下界合金锭", "水生下界合金锭"],
			["水生下界合金锭", null, "水生下界合金锭"],
			[null, null, null]
		],
		"ingredients": [
			["水生下界合金锭", 5]
		],
		"count": 1
	},
	"抗性胸甲框架": {
		"type": "盔甲锻造台",
		"map": [
			["达米恩锭", null, "达米恩锭"],
			["恶魔锭", "恶魔锭", "恶魔锭"],
			["恶魔锭", "恶魔锭", "恶魔锭"]
		],
		"ingredients": [
			["达米恩锭", 2],
			["恶魔锭", 6]
		],
		"count": 1
	},
	"火焰护腿框架": {
		"type": "盔甲锻造台",
		"map": [
			["恶魔锭", "达米恩锭", "恶魔锭"],
			["恶魔锭", null, "恶魔锭"],
			["达米恩锭", null, "达米恩锭"]
		],
		"ingredients": [
			["恶魔锭", 4],
			["达米恩锭", 3]
		],
		"count": 1
	},
	"轻盈之靴框架": {
		"type": "盔甲锻造台",
		"map": [
			[null, null, null],
			["加糖的甜蜜锭", null, "加糖的甜蜜锭"],
			["达米恩锭", null, "达米恩锭"]
		],
		"ingredients": [
			["加糖的甜蜜锭", 2],
			["达米恩锭", 2]
		],
		"count": 1
	},
	"波塞冬的祝福": {
		"type": "钓鱼",
		"map": [
			[null, null, null],
			[null, "波塞冬的钓竿", null],
			[null, null, null]
		],
		"ingredients": [
			["波塞冬的钓竿", 1]
		],
		"count": 1
	},
	"鲜血": {
		"type": "献祭祭坛",
		"map": [
			[null, null, null],
			[null, "生物掉落物", null],
			[null, null, null]
		],
		"ingredients": [
			["生物掉落物", 1]
		],
		"count": 1
	},
	"诅咒兔爪": {
		"type": "献祭祭坛",
		"map": [
			[null, null, null],
			[null, "兔子掉落物", null],
			[null, null, null]
		],
		"ingredients": [
			["兔子掉落物", 1]
		],
		"count": 1
	},
	"人类头颅": {
		"type": "献祭祭坛",
		"map": [
			[null, null, null],
			[null, "玩家掉落物", null],
			[null, null, null]
		],
		"ingredients": [
			["玩家掉落物", 1]
		],
		"count": 1
	},
	"热带鱼鳞": {
		"type": "献祭祭坛",
		"map": [
			[null, null, null],
			[null, "热带鱼掉落物", null],
			[null, null, null]
		],
		"ingredients": [
			["热带鱼掉落物", 1]
		],
		"count": 1
	},
	"北极狐皮": {
		"type": "献祭祭坛",
		"map": [
			[null, null, null],
			[null, "北极狐掉落物", null],
			[null, null, null]
		],
		"ingredients": [
			["北极狐掉落物", 1]
		],
		"count": 1
	},
	"岩浆精华": {
		"type": "献祭祭坛",
		"map": [
			[null, null, null],
			[null, "岩浆怪掉落物", null],
			[null, null, null]
		],
		"ingredients": [
			["岩浆怪掉落物", 1]
		],
		"count": 1
	},
	"鹦鹉羽毛": {
		"type": "献祭祭坛",
		"map": [
			[null, null, null],
			[null, "鹦鹉掉落物", null],
			[null, null, null]
		],
		"ingredients": [
			["鹦鹉掉落物", 1]
		],
		"count": 1
	},
	"邪恶凋零骷髅骨": {
		"type": "献祭祭坛",
		"map": [
			[null, null, null],
			[null, "凋零骷髅掉落物", null],
			[null, null, null]
		],
		"ingredients": [
			["凋零骷髅掉落物", 1]
		],
		"count": 1
	},
	"注血头颅": {
		"type": "古代祭坛",
		"map": [
			["魔法结晶 - IV", "鲜血", "魔法结晶 - IV"],
			["鲜血", "人类头颅", "鲜血"],
			["魔法结晶 - IV", "鲜血", "魔法结晶 - IV"]
		],
		"ingredients": [
			["魔法结晶 - IV", 4],
			["鲜血", 4],
			["人类头颅", 1]
		],
		"count": 1
	},
	"纯净骨头": {
		"type": "古代祭坛",
		"map": [
			["兰花", "绒球葱", "滨菊"],
			["虞美人", "邪恶凋零骷髅骨", "红色郁金香"],
			["铃兰", "粉红色郁金香", "矢车菊"]
		],
		"ingredients": [
			["兰花", 1],
			["绒球葱", 1],
			["滨菊", 1],
			["虞美人", 1],
			["邪恶凋零骷髅骨", 1],
			["红色郁金香", 1],
			["铃兰", 1],
			["粉红色郁金香", 1],
			["矢车菊", 1]
		],
		"count": 1
	},
	"纯净骨粉": {
		"type": "压缩机",
		"map": [
			["纯净骨头", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["纯净骨头", 1]
		],
		"count": 1
	},
	"鲜血之桶": {
		"type": "魔法工作台",
		"map": [
			["鲜血", "鲜血", "鲜血"],
			["鲜血", "桶", "鲜血"],
			["鲜血", "鲜血", "鲜血"]
		],
		"ingredients": [
			["鲜血", 8],
			["桶", 1]
		],
		"count": 1
	},
	"精灵之粉": {
		"type": "磨石",
		"map": [
			["精灵女王之心", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["精灵女王之心", 1]
		],
		"count": 8
	},
	"邪恶之种": {
		"type": "磨石",
		"map": [
			["邪恶南瓜", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["邪恶南瓜", 1]
		],
		"count": 6
	},
	"精灵女王之心": {
		"type": "生物掉落物",
		"map": [
			[null, null, null],
			[null, "精灵女王", null],
			[null, null, null]
		],
		"ingredients": [
			["精灵女王", 1]
		],
		"count": 1
	},
	"邪恶南瓜": {
		"type": "生物掉落物",
		"map": [
			[null, null, null],
			[null, "无头骑士", null],
			[null, null, null]
		],
		"ingredients": [
			["无头骑士", 1]
		],
		"count": 1
	},
	"诅咒碎片": {
		"type": "神秘科技任务",
		"map": [
			[null, null, null],
			[null, "诅咒之剑", null],
			[null, null, null]
		],
		"ingredients": [
			["诅咒之剑", 1]
		],
		"count": 1
	},
	"天界碎片": {
		"type": "神秘科技任务",
		"map": [
			[null, null, null],
			[null, "天界之剑", null],
			[null, null, null]
		],
		"ingredients": [
			["天界之剑", 1]
		],
		"count": 1
	},
	"镇静宝石": {
		"type": "古代祭坛",
		"map": [
			["诅咒碎片", "天界碎片", "诅咒碎片"],
			["天界碎片", "绿宝石", "天界碎片"],
			["诅咒碎片", "天界碎片", "诅咒碎片"]
		],
		"ingredients": [
			["诅咒碎片", 4],
			["天界碎片", 4],
			["绿宝石", 1]
		],
		"count": 1
	},
	"献祭黑石砖": {
		"type": "增强型工作台",
		"map": [
			["磨制黑石砖", "磨制黑石砖", "磨制黑石砖"],
			["磨制黑石砖", "钢筋板", "磨制黑石砖"],
			["磨制黑石砖", "磨制黑石砖", "磨制黑石砖"]
		],
		"ingredients": [
			["磨制黑石砖", 8],
			["钢筋板", 1]
		],
		"count": 8
	},
	"献祭黑石砖楼梯": {
		"type": "增强型工作台",
		"map": [
			["献祭黑石砖", null, null],
			["献祭黑石砖", "献祭黑石砖", null],
			["献祭黑石砖", "献祭黑石砖", "献祭黑石砖"]
		],
		"ingredients": [
			["献祭黑石砖", 6]
		],
		"count": 4
	},
	"献祭黑石砖墙": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			["献祭黑石砖", "献祭黑石砖", "献祭黑石砖"],
			["献祭黑石砖", "献祭黑石砖", "献祭黑石砖"]
		],
		"ingredients": [
			["献祭黑石砖", 6]
		],
		"count": 4
	},
	"献祭灵魂火把": {
		"type": "增强型工作台",
		"map": [
			[null, "魔法结晶 - IV", null],
			["魔法结晶 - IV", "奇怪的下界粘液", "魔法结晶 - IV"],
			[null, "烈焰棒", null]
		],
		"ingredients": [
			["魔法结晶 - IV", 3],
			["奇怪的下界粘液", 1],
			["烈焰棒", 1]
		],
		"count": 1
	},
	"献祭席": {
		"type": "增强型工作台",
		"map": [
			["恶魂之泪", "魔法结晶 - III", "恶魂之泪"],
			["魔法结晶 - III", "磨制黑石压力板", "魔法结晶 - III"],
			["恶魂之泪", "魔法结晶 - III", "恶魂之泪"]
		],
		"ingredients": [
			["恶魂之泪", 4],
			["魔法结晶 - III", 4],
			["磨制黑石压力板", 1]
		],
		"count": 1
	},
	"古代符文 [无法破坏]": {
		"type": "古代祭坛",
		"map": [
			["达米恩锭", "魔法结晶 - V", "达米恩锭"],
			["来世精华", "古代符文 [雷]", "来世精华"],
			["达米恩锭", "魔法结晶 - V", "达米恩锭"]
		],
		"ingredients": [
			["达米恩锭", 4],
			["魔法结晶 - V", 2],
			["来世精华", 2],
			["古代符文 [雷]", 1]
		],
		"count": 1
	},
	"波塞冬的钓竿": {
		"type": "增强型工作台",
		"map": [
			[null, null, "水生下界合金锭"],
			[null, "水生下界合金锭", "强化线"],
			["水生下界合金锭", null, "海洋之心"]
		],
		"ingredients": [
			["水生下界合金锭", 3],
			["强化线", 1],
			["海洋之心", 1]
		],
		"count": 1
	},
	"电力元素法杖 - 风": {
		"type": "增强型工作台",
		"map": [
			[null, "能量水晶", null],
			["电动马达", "元素法杖 - 风", "电动马达"],
			[null, "中型储能电容", null]
		],
		"ingredients": [
			["能量水晶", 1],
			["电动马达", 2],
			["元素法杖 - 风", 1],
			["中型储能电容", 1]
		],
		"count": 1
	},
	"电力元素法杖 - 火": {
		"type": "增强型工作台",
		"map": [
			["岩浆水晶", "能量水晶", "岩浆水晶"],
			["加热线圈", "元素法杖 - 火", "加热线圈"],
			["强化合金锭", "中型储能电容", "强化合金锭"]
		],
		"ingredients": [
			["岩浆水晶", 2],
			["能量水晶", 1],
			["加热线圈", 2],
			["元素法杖 - 火", 1],
			["强化合金锭", 2],
			["中型储能电容", 1]
		],
		"count": 1
	},
	"电力元素法杖 - 火 - II": {
		"type": "增强型工作台",
		"map": [
			["黑金刚石", "能量水晶", "黑金刚石"],
			["加热线圈", "电力元素法杖 - 火", "加热线圈"],
			["强化合金锭", "中型储能电容", "强化合金锭"]
		],
		"ingredients": [
			["黑金刚石", 2],
			["能量水晶", 1],
			["加热线圈", 2],
			["电力元素法杖 - 火", 1],
			["强化合金锭", 2],
			["中型储能电容", 1]
		],
		"count": 1
	},
	"治愈之弓": {
		"type": "魔法工作台",
		"map": [
			[null, "人造钻石", "强化线"],
			["人造钻石", "来世精华", "强化线"],
			[null, "人造钻石", "强化线"]
		],
		"ingredients": [
			["人造钻石", 3],
			["强化线", 3],
			["来世精华", 1]
		],
		"count": 1
	},
	"锋利之弓": {
		"type": "古代祭坛",
		"map": [
			["镇静宝石", "弓", "镇静宝石"],
			["鲜血之桶", "邪恶南瓜", "鲜血之桶"],
			["镇静宝石", "弓", "镇静宝石"]
		],
		"ingredients": [
			["镇静宝石", 4],
			["弓", 2],
			["鲜血之桶", 2],
			["邪恶南瓜", 1]
		],
		"count": 1
	},
	"诅咒之剑": {
		"type": "古代祭坛",
		"map": [
			["鲜血", "诅咒兔爪", "鲜血"],
			["魔法结晶 - V", "下界合金剑", "魔法结晶 - V"],
			["鲜血", "注血头颅", "鲜血"]
		],
		"ingredients": [
			["鲜血", 4],
			["诅咒兔爪", 1],
			["魔法结晶 - V", 2],
			["下界合金剑", 1],
			["注血头颅", 1]
		],
		"count": 1
	},
	"天界之剑": {
		"type": "古代祭坛",
		"map": [
			["魔法结晶 - V", "波塞冬的祝福", "魔法结晶 - V"],
			["纯净骨粉", "下界合金剑", "纯净骨粉"],
			["魔法结晶 - V", "波塞冬的祝福", "魔法结晶 - V"]
		],
		"ingredients": [
			["魔法结晶 - V", 4],
			["波塞冬的祝福", 2],
			["纯净骨粉", 2],
			["下界合金剑", 1]
		],
		"count": 1
	},
	"阐释者": {
		"type": "古代祭坛",
		"map": [
			["镇静宝石", "诅咒之剑", "镇静宝石"],
			["鲜血之桶", "精灵女王之心", "鲜血之桶"],
			["镇静宝石", "天界之剑", "镇静宝石"]
		],
		"ingredients": [
			["镇静宝石", 4],
			["诅咒之剑", 1],
			["鲜血之桶", 2],
			["精灵女王之心", 1],
			["天界之剑", 1]
		],
		"count": 1
	},
	"水灵头盔": {
		"type": "古代祭坛",
		"map": [
			["镇静宝石", "魔法结晶 - V", "镇静宝石"],
			["热带鱼鳞", "水灵头盔框架", "热带鱼鳞"],
			["镇静宝石", "魔法结晶 - V", "镇静宝石"]
		],
		"ingredients": [
			["镇静宝石", 4],
			["魔法结晶 - V", 2],
			["热带鱼鳞", 2],
			["水灵头盔框架", 1]
		],
		"count": 1
	},
	"抗性胸甲": {
		"type": "古代祭坛",
		"map": [
			["镇静宝石", "魔法结晶 - V", "镇静宝石"],
			["北极狐皮", "抗性胸甲框架", "北极狐皮"],
			["镇静宝石", "魔法结晶 - V", "镇静宝石"]
		],
		"ingredients": [
			["镇静宝石", 4],
			["魔法结晶 - V", 2],
			["北极狐皮", 2],
			["抗性胸甲框架", 1]
		],
		"count": 1
	},
	"火焰护腿": {
		"type": "古代祭坛",
		"map": [
			["镇静宝石", "魔法结晶 - V", "镇静宝石"],
			["岩浆精华", "火焰护腿框架", "岩浆精华"],
			["镇静宝石", "魔法结晶 - V", "镇静宝石"]
		],
		"ingredients": [
			["镇静宝石", 4],
			["魔法结晶 - V", 2],
			["岩浆精华", 2],
			["火焰护腿框架", 1]
		],
		"count": 1
	},
	"轻盈之靴": {
		"type": "古代祭坛",
		"map": [
			["镇静宝石", "魔法结晶 - V", "镇静宝石"],
			["鹦鹉羽毛", "轻盈之靴框架", "鹦鹉羽毛"],
			["镇静宝石", "魔法结晶 - V", "镇静宝石"]
		],
		"ingredients": [
			["镇静宝石", 4],
			["魔法结晶 - V", 2],
			["鹦鹉羽毛", 2],
			["轻盈之靴框架", 1]
		],
		"count": 1
	},
	"改进锻造台": {
		"type": "增强型工作台",
		"map": [
			["黑金刚石", "起泡锭", "黑金刚石"],
			["电动马达", "自动附魔机", "电动马达"],
			["钢筋板", "起泡锭", "钢筋板"]
		],
		"ingredients": [
			["黑金刚石", 2],
			["起泡锭", 2],
			["电动马达", 2],
			["自动附魔机", 1],
			["钢筋板", 2]
		],
		"count": 1
	},
	"药水混合器": {
		"type": "增强型工作台",
		"map": [
			["黑金刚石", "金锭 (24克拉)", "黑金刚石"],
			["电动马达", "酿造台", "电动马达"],
			["金锭 (24克拉)", "中型储能电容", "金锭 (24克拉)"]
		],
		"ingredients": [
			["黑金刚石", 2],
			["金锭 (24克拉)", 3],
			["电动马达", 2],
			["酿造台", 1],
			["中型储能电容", 1]
		],
		"count": 1
	},
	"电力炼金厂": {
		"type": "增强型工作台",
		"map": [
			["硬化金属", "电动马达", "硬化金属"],
			["加热线圈", "电力冶炼炉", "加热线圈"],
			["硬化金属", "中型储能电容", "硬化金属"]
		],
		"ingredients": [
			["硬化金属", 4],
			["电动马达", 1],
			["加热线圈", 2],
			["电力冶炼炉", 1],
			["中型储能电容", 1]
		],
		"count": 1
	},
	"区块加载器": {
		"type": "增强型工作台",
		"map": [
			["强化线", "稳定起泡砖", "强化线"],
			["浓缩下界冰", "稳定起泡砖", "无线发射器"],
			["强化线", "稳定起泡砖", "强化线"]
		],
		"ingredients": [
			["强化线", 4],
			["稳定起泡砖", 3],
			["浓缩下界冰", 1],
			["无线发射器", 1]
		],
		"count": 1
	},
	"提速铁轨": {
		"type": "增强型工作台",
		"map": [
			["铅锭", "铜线", "铅锭"],
			["铅锭", "木棍", "铅锭"],
			["铅锭", "铜线", "铅锭"]
		],
		"ingredients": [
			["铅锭", 6],
			["铜线", 2],
			["木棍", 1]
		],
		"count": 4
	},
	"提速激活铁轨": {
		"type": "增强型工作台",
		"map": [
			["黄铜锭", "铜线", "黄铜锭"],
			["黄铜锭", "红石中继器", "黄铜锭"],
			["黄铜锭", "铜线", "黄铜锭"]
		],
		"ingredients": [
			["黄铜锭", 6],
			["铜线", 2],
			["红石中继器", 1]
		],
		"count": 4
	},
	"提速探测铁轨": {
		"type": "增强型工作台",
		"map": [
			["黄铜锭", "铜线", "黄铜锭"],
			["黄铜锭", "重质测重压力板", "黄铜锭"],
			["黄铜锭", "铜线", "黄铜锭"]
		],
		"ingredients": [
			["黄铜锭", 6],
			["铜线", 2],
			["重质测重压力板", 1]
		],
		"count": 4
	},
	"提速充能铁轨": {
		"type": "增强型工作台",
		"map": [
			["金锭 (24克拉)", "铜线", "金锭 (24克拉)"],
			["金锭 (24克拉)", "电磁铁", "金锭 (24克拉)"],
			["金锭 (24克拉)", "铜线", "金锭 (24克拉)"]
		],
		"ingredients": [
			["金锭 (24克拉)", 6],
			["铜线", 2],
			["电磁铁", 1]
		],
		"count": 4
	},
	"甜浆果丛修剪器": {
		"type": "增强型工作台",
		"map": [
			[null, "大马士革钢锭", null],
			["大马士革钢锭", null, "大马士革钢锭"],
			["木棍", "大马士革钢锭", null]
		],
		"ingredients": [
			["大马士革钢锭", 4],
			["木棍", 1]
		],
		"count": 1
	},
	"幽灵方块移除器": {
		"type": "增强型工作台",
		"map": [
			["达米恩锭", "达米恩锭", "达米恩锭"],
			["甜蜜锭", "基础电路板", "甜蜜锭"],
			["达米恩锭", "达米恩锭", "达米恩锭"]
		],
		"ingredients": [
			["达米恩锭", 6],
			["甜蜜锭", 2],
			["基础电路板", 1]
		],
		"count": 1
	},
	"穹顶力场": {
		"type": "增强型工作台",
		"map": [
			["加糖的甜蜜锭", "力场稳定器", "加糖的甜蜜锭"],
			["力场稳定器", "力场引擎", "力场稳定器"],
			["加糖的甜蜜锭", "力场稳定器", "加糖的甜蜜锭"]
		],
		"ingredients": [
			["加糖的甜蜜锭", 4],
			["力场稳定器", 4],
			["力场引擎", 1]
		],
		"count": 1
	},
	"远程控制器": {
		"type": "增强型工作台",
		"map": [
			["达米恩锭", "无线发射器", "达米恩锭"],
			["达米恩锭", "无线发射器", "达米恩锭"],
			["达米恩锭", "无线发射器", "达米恩锭"]
		],
		"ingredients": [
			["达米恩锭", 6],
			["无线发射器", 3]
		],
		"count": 1
	},
	"位置选择器": {
		"type": "增强型工作台",
		"map": [
			["甜蜜锭", "无线发射器", "甜蜜锭"],
			["科林斯青铜锭", "大型储能电容", "科林斯青铜锭"],
			["甜蜜锭", "科林斯青铜锭", "甜蜜锭"]
		],
		"ingredients": [
			["甜蜜锭", 4],
			["无线发射器", 1],
			["科林斯青铜锭", 3],
			["大型储能电容", 1]
		],
		"count": 1
	},
	"填充棒": {
		"type": "增强型工作台",
		"map": [
			["水生下界合金锭", "无线发射器", "水生下界合金锭"],
			["恶魔板", "高级可编程式机器人 (普通)", "恶魔板"],
			["加糖的甜蜜锭", "无线发射器", "加糖的甜蜜锭"]
		],
		"ingredients": [
			["水生下界合金锭", 2],
			["无线发射器", 2],
			["恶魔板", 2],
			["高级可编程式机器人 (普通)", 1],
			["加糖的甜蜜锭", 2]
		],
		"count": 1
	},
	"海绵棒": {
		"type": "增强型工作台",
		"map": [
			["核盐", "无线发射器", "核盐"],
			["恶魔板", "高级可编程式机器人 (普通)", "恶魔板"],
			["核盐", "压缩海绵", "核盐"]
		],
		"ingredients": [
			["核盐", 4],
			["无线发射器", 1],
			["恶魔板", 2],
			["高级可编程式机器人 (普通)", 1],
			["压缩海绵", 1]
		],
		"count": 1
	},
	"精灵女王刷怪蛋": {
		"type": "古代祭坛",
		"map": [
			["镇静宝石", "恶魔板", "镇静宝石"],
			["鹦鹉羽毛", "鸡蛋", "鹦鹉羽毛"],
			["镇静宝石", "恶魔板", "镇静宝石"]
		],
		"ingredients": [
			["镇静宝石", 4],
			["恶魔板", 2],
			["鹦鹉羽毛", 2],
			["鸡蛋", 1]
		],
		"count": 1
	},
	"无头骑士刷怪蛋": {
		"type": "古代祭坛",
		"map": [
			["镇静宝石", "恶魔板", "镇静宝石"],
			["诅咒兔爪", "精灵女王之心", "诅咒兔爪"],
			["镇静宝石", "恶魔板", "镇静宝石"]
		],
		"ingredients": [
			["镇静宝石", 4],
			["恶魔板", 2],
			["诅咒兔爪", 2],
			["精灵女王之心", 1]
		],
		"count": 1
	},
	"幽灵方块: 石头": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "石头", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["石头", 1]
		],
		"count": 1
	},
	"幽灵方块: 花岗岩": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "花岗岩", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["花岗岩", 1]
		],
		"count": 1
	},
	"幽灵方块: 磨制花岗岩": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "磨制花岗岩", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["磨制花岗岩", 1]
		],
		"count": 1
	},
	"幽灵方块: 闪长岩": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "闪长岩", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["闪长岩", 1]
		],
		"count": 1
	},
	"幽灵方块: 磨制闪长岩": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "磨制闪长岩", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["磨制闪长岩", 1]
		],
		"count": 1
	},
	"幽灵方块: 安山岩": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "安山岩", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["安山岩", 1]
		],
		"count": 1
	},
	"幽灵方块: 磨制安山岩": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "磨制安山岩", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["磨制安山岩", 1]
		],
		"count": 1
	},
	"幽灵方块: 深板岩": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "深板岩", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["深板岩", 1]
		],
		"count": 1
	},
	"幽灵方块: 深板岩圆石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "深板岩圆石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["深板岩圆石", 1]
		],
		"count": 1
	},
	"幽灵方块: 磨制深板岩": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "磨制深板岩", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["磨制深板岩", 1]
		],
		"count": 1
	},
	"幽灵方块: 方解石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "方解石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["方解石", 1]
		],
		"count": 1
	},
	"幽灵方块: 凝灰岩": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "凝灰岩", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["凝灰岩", 1]
		],
		"count": 1
	},
	"幽灵方块: 滴水石块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "滴水石块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["滴水石块", 1]
		],
		"count": 1
	},
	"幽灵方块: 草方块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "草方块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["草方块", 1]
		],
		"count": 1
	},
	"幽灵方块: 泥土": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "泥土", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["泥土", 1]
		],
		"count": 1
	},
	"幽灵方块: 砂土": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "砂土", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["砂土", 1]
		],
		"count": 1
	},
	"幽灵方块: 灰化土": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "灰化土", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["灰化土", 1]
		],
		"count": 1
	},
	"幽灵方块: 缠根泥土": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "缠根泥土", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["缠根泥土", 1]
		],
		"count": 1
	},
	"幽灵方块: 绯红菌岩": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "绯红菌岩", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["绯红菌岩", 1]
		],
		"count": 1
	},
	"幽灵方块: 诡异菌岩": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "诡异菌岩", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["诡异菌岩", 1]
		],
		"count": 1
	},
	"幽灵方块: 圆石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "圆石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["圆石", 1]
		],
		"count": 1
	},
	"幽灵方块: 橡木木板": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "橡木木板", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["橡木木板", 1]
		],
		"count": 1
	},
	"幽灵方块: 云杉木板": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "云杉木板", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["云杉木板", 1]
		],
		"count": 1
	},
	"幽灵方块: 白桦木板": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "白桦木板", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["白桦木板", 1]
		],
		"count": 1
	},
	"幽灵方块: 丛林木板": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "丛林木板", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["丛林木板", 1]
		],
		"count": 1
	},
	"幽灵方块: 金合欢木板": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "金合欢木板", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["金合欢木板", 1]
		],
		"count": 1
	},
	"幽灵方块: 深色橡木木板": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "深色橡木木板", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["深色橡木木板", 1]
		],
		"count": 1
	},
	"幽灵方块: 绯红木板": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "绯红木板", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["绯红木板", 1]
		],
		"count": 1
	},
	"幽灵方块: 诡异木板": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "诡异木板", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["诡异木板", 1]
		],
		"count": 1
	},
	"幽灵方块: 基岩": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "基岩", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["基岩", 1]
		],
		"count": 1
	},
	"幽灵方块: 沙子": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "沙子", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["沙子", 1]
		],
		"count": 1
	},
	"幽灵方块: 红沙": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "红沙", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["红沙", 1]
		],
		"count": 1
	},
	"幽灵方块: 沙砾": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "沙砾", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["沙砾", 1]
		],
		"count": 1
	},
	"幽灵方块: 煤矿石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "煤矿石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["煤矿石", 1]
		],
		"count": 1
	},
	"幽灵方块: 深层煤矿石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "深层煤矿石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["深层煤矿石", 1]
		],
		"count": 1
	},
	"幽灵方块: 铁矿石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "铁矿石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["铁矿石", 1]
		],
		"count": 1
	},
	"幽灵方块: 深层铁矿石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "深层铁矿石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["深层铁矿石", 1]
		],
		"count": 1
	},
	"幽灵方块: 铜矿石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "铜矿石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["铜矿石", 1]
		],
		"count": 1
	},
	"幽灵方块: 深层铜矿石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "深层铜矿石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["深层铜矿石", 1]
		],
		"count": 1
	},
	"幽灵方块: 金矿石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "金矿石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["金矿石", 1]
		],
		"count": 1
	},
	"幽灵方块: 深层金矿石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "深层金矿石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["深层金矿石", 1]
		],
		"count": 1
	},
	"幽灵方块: 红石矿石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "红石矿石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["红石矿石", 1]
		],
		"count": 1
	},
	"幽灵方块: 深层红石矿石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "深层红石矿石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["深层红石矿石", 1]
		],
		"count": 1
	},
	"幽灵方块: 绿宝石矿石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "绿宝石矿石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["绿宝石矿石", 1]
		],
		"count": 1
	},
	"幽灵方块: 深层绿宝石矿石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "深层绿宝石矿石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["深层绿宝石矿石", 1]
		],
		"count": 1
	},
	"幽灵方块: 青金石矿石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "青金石矿石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["青金石矿石", 1]
		],
		"count": 1
	},
	"幽灵方块: 深层青金石矿石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "深层青金石矿石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["深层青金石矿石", 1]
		],
		"count": 1
	},
	"幽灵方块: 钻石矿石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "钻石矿石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["钻石矿石", 1]
		],
		"count": 1
	},
	"幽灵方块: 深层钻石矿石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "深层钻石矿石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["深层钻石矿石", 1]
		],
		"count": 1
	},
	"幽灵方块: 下界金矿石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "下界金矿石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["下界金矿石", 1]
		],
		"count": 1
	},
	"幽灵方块: 下界石英矿石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "下界石英矿石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["下界石英矿石", 1]
		],
		"count": 1
	},
	"幽灵方块: 远古残骸": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "远古残骸", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["远古残骸", 1]
		],
		"count": 1
	},
	"幽灵方块: 煤炭块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "煤炭块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["煤炭块", 1]
		],
		"count": 1
	},
	"幽灵方块: 粗铁块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "粗铁块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["粗铁块", 1]
		],
		"count": 1
	},
	"幽灵方块: 粗铜块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "粗铜块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["粗铜块", 1]
		],
		"count": 1
	},
	"幽灵方块: 粗金块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "粗金块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["粗金块", 1]
		],
		"count": 1
	},
	"幽灵方块: 紫水晶块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "紫水晶块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["紫水晶块", 1]
		],
		"count": 1
	},
	"幽灵方块: 紫水晶母岩": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "紫水晶母岩", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["紫水晶母岩", 1]
		],
		"count": 1
	},
	"幽灵方块: 铁块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "铁块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["铁块", 1]
		],
		"count": 1
	},
	"幽灵方块: 铜块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "铜块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["铜块", 1]
		],
		"count": 1
	},
	"幽灵方块: 金块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "金块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["金块", 1]
		],
		"count": 1
	},
	"幽灵方块: 钻石块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "钻石块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["钻石块", 1]
		],
		"count": 1
	},
	"幽灵方块: 下界合金块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "下界合金块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["下界合金块", 1]
		],
		"count": 1
	},
	"幽灵方块: 斑驳的铜块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "斑驳的铜块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["斑驳的铜块", 1]
		],
		"count": 1
	},
	"幽灵方块: 锈蚀的铜块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "锈蚀的铜块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["锈蚀的铜块", 1]
		],
		"count": 1
	},
	"幽灵方块: 氧化的铜块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "氧化的铜块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["氧化的铜块", 1]
		],
		"count": 1
	},
	"幽灵方块: 切制铜块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "切制铜块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["切制铜块", 1]
		],
		"count": 1
	},
	"幽灵方块: 斑驳的切制铜块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "斑驳的切制铜块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["斑驳的切制铜块", 1]
		],
		"count": 1
	},
	"幽灵方块: 锈蚀的切制铜块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "锈蚀的切制铜块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["锈蚀的切制铜块", 1]
		],
		"count": 1
	},
	"幽灵方块: 氧化的切制铜块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "氧化的切制铜块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["氧化的切制铜块", 1]
		],
		"count": 1
	},
	"幽灵方块: 涂蜡铜块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "涂蜡铜块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["涂蜡铜块", 1]
		],
		"count": 1
	},
	"幽灵方块: 斑驳的涂蜡铜块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "斑驳的涂蜡铜块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["斑驳的涂蜡铜块", 1]
		],
		"count": 1
	},
	"幽灵方块: 锈蚀的涂蜡铜块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "锈蚀的涂蜡铜块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["锈蚀的涂蜡铜块", 1]
		],
		"count": 1
	},
	"幽灵方块: 氧化的涂蜡铜块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "氧化的涂蜡铜块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["氧化的涂蜡铜块", 1]
		],
		"count": 1
	},
	"幽灵方块: 涂蜡切制铜块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "涂蜡切制铜块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["涂蜡切制铜块", 1]
		],
		"count": 1
	},
	"幽灵方块: 斑驳的涂蜡切制铜块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "斑驳的涂蜡切制铜块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["斑驳的涂蜡切制铜块", 1]
		],
		"count": 1
	},
	"幽灵方块: 锈蚀的涂蜡切制铜块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "锈蚀的涂蜡切制铜块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["锈蚀的涂蜡切制铜块", 1]
		],
		"count": 1
	},
	"幽灵方块: 氧化的涂蜡切制铜块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "氧化的涂蜡切制铜块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["氧化的涂蜡切制铜块", 1]
		],
		"count": 1
	},
	"幽灵方块: 橡木原木": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "橡木原木", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["橡木原木", 1]
		],
		"count": 1
	},
	"幽灵方块: 云杉原木": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "云杉原木", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["云杉原木", 1]
		],
		"count": 1
	},
	"幽灵方块: 白桦原木": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "白桦原木", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["白桦原木", 1]
		],
		"count": 1
	},
	"幽灵方块: 丛林原木": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "丛林原木", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["丛林原木", 1]
		],
		"count": 1
	},
	"幽灵方块: 金合欢原木": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "金合欢原木", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["金合欢原木", 1]
		],
		"count": 1
	},
	"幽灵方块: 深色橡木原木": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "深色橡木原木", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["深色橡木原木", 1]
		],
		"count": 1
	},
	"幽灵方块: 绯红菌柄": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "绯红菌柄", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["绯红菌柄", 1]
		],
		"count": 1
	},
	"幽灵方块: 诡异菌柄": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "诡异菌柄", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["诡异菌柄", 1]
		],
		"count": 1
	},
	"幽灵方块: 去皮橡木原木": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "去皮橡木原木", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["去皮橡木原木", 1]
		],
		"count": 1
	},
	"幽灵方块: 去皮云杉原木": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "去皮云杉原木", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["去皮云杉原木", 1]
		],
		"count": 1
	},
	"幽灵方块: 去皮白桦原木": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "去皮白桦原木", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["去皮白桦原木", 1]
		],
		"count": 1
	},
	"幽灵方块: 去皮丛林原木": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "去皮丛林原木", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["去皮丛林原木", 1]
		],
		"count": 1
	},
	"幽灵方块: 去皮金合欢原木": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "去皮金合欢原木", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["去皮金合欢原木", 1]
		],
		"count": 1
	},
	"幽灵方块: 去皮深色橡木原木": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "去皮深色橡木原木", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["去皮深色橡木原木", 1]
		],
		"count": 1
	},
	"幽灵方块: 去皮绯红菌柄": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "去皮绯红菌柄", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["去皮绯红菌柄", 1]
		],
		"count": 1
	},
	"幽灵方块: 去皮诡异菌柄": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "去皮诡异菌柄", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["去皮诡异菌柄", 1]
		],
		"count": 1
	},
	"幽灵方块: 去皮橡木": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "去皮橡木", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["去皮橡木", 1]
		],
		"count": 1
	},
	"幽灵方块: 去皮云杉木": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "去皮云杉木", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["去皮云杉木", 1]
		],
		"count": 1
	},
	"幽灵方块: 去皮白桦木": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "去皮白桦木", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["去皮白桦木", 1]
		],
		"count": 1
	},
	"幽灵方块: 去皮丛林木": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "去皮丛林木", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["去皮丛林木", 1]
		],
		"count": 1
	},
	"幽灵方块: 去皮金合欢木": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "去皮金合欢木", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["去皮金合欢木", 1]
		],
		"count": 1
	},
	"幽灵方块: 去皮深色橡木": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "去皮深色橡木", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["去皮深色橡木", 1]
		],
		"count": 1
	},
	"幽灵方块: 去皮绯红菌核": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "去皮绯红菌核", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["去皮绯红菌核", 1]
		],
		"count": 1
	},
	"幽灵方块: 去皮诡异菌核": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "去皮诡异菌核", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["去皮诡异菌核", 1]
		],
		"count": 1
	},
	"幽灵方块: 橡木": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "橡木", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["橡木", 1]
		],
		"count": 1
	},
	"幽灵方块: 云杉木": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "云杉木", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["云杉木", 1]
		],
		"count": 1
	},
	"幽灵方块: 白桦木": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "白桦木", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["白桦木", 1]
		],
		"count": 1
	},
	"幽灵方块: 丛林木": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "丛林木", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["丛林木", 1]
		],
		"count": 1
	},
	"幽灵方块: 金合欢木": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "金合欢木", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["金合欢木", 1]
		],
		"count": 1
	},
	"幽灵方块: 深色橡木": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "深色橡木", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["深色橡木", 1]
		],
		"count": 1
	},
	"幽灵方块: 绯红菌核": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "绯红菌核", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["绯红菌核", 1]
		],
		"count": 1
	},
	"幽灵方块: 诡异菌核": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "诡异菌核", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["诡异菌核", 1]
		],
		"count": 1
	},
	"幽灵方块: 海绵": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "海绵", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["海绵", 1]
		],
		"count": 1
	},
	"幽灵方块: 湿海绵": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "湿海绵", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["湿海绵", 1]
		],
		"count": 1
	},
	"幽灵方块: 青金石块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "青金石块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["青金石块", 1]
		],
		"count": 1
	},
	"幽灵方块: 砂岩": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "砂岩", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["砂岩", 1]
		],
		"count": 1
	},
	"幽灵方块: 錾制砂岩": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "錾制砂岩", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["錾制砂岩", 1]
		],
		"count": 1
	},
	"幽灵方块: 切制砂岩": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "切制砂岩", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["切制砂岩", 1]
		],
		"count": 1
	},
	"幽灵方块: 白色羊毛": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "白色羊毛", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["白色羊毛", 1]
		],
		"count": 1
	},
	"幽灵方块: 橙色羊毛": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "橙色羊毛", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["橙色羊毛", 1]
		],
		"count": 1
	},
	"幽灵方块: 品红色羊毛": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "品红色羊毛", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["品红色羊毛", 1]
		],
		"count": 1
	},
	"幽灵方块: 淡蓝色羊毛": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "淡蓝色羊毛", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["淡蓝色羊毛", 1]
		],
		"count": 1
	},
	"幽灵方块: 黄色羊毛": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "黄色羊毛", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["黄色羊毛", 1]
		],
		"count": 1
	},
	"幽灵方块: 黄绿色羊毛": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "黄绿色羊毛", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["黄绿色羊毛", 1]
		],
		"count": 1
	},
	"幽灵方块: 粉红色羊毛": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "粉红色羊毛", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["粉红色羊毛", 1]
		],
		"count": 1
	},
	"幽灵方块: 灰色羊毛": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "灰色羊毛", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["灰色羊毛", 1]
		],
		"count": 1
	},
	"幽灵方块: 淡灰色羊毛": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "淡灰色羊毛", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["淡灰色羊毛", 1]
		],
		"count": 1
	},
	"幽灵方块: 青色羊毛": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "青色羊毛", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["青色羊毛", 1]
		],
		"count": 1
	},
	"幽灵方块: 紫色羊毛": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "紫色羊毛", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["紫色羊毛", 1]
		],
		"count": 1
	},
	"幽灵方块: 蓝色羊毛": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "蓝色羊毛", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["蓝色羊毛", 1]
		],
		"count": 1
	},
	"幽灵方块: 棕色羊毛": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "棕色羊毛", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["棕色羊毛", 1]
		],
		"count": 1
	},
	"幽灵方块: 绿色羊毛": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "绿色羊毛", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["绿色羊毛", 1]
		],
		"count": 1
	},
	"幽灵方块: 红色羊毛": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "红色羊毛", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["红色羊毛", 1]
		],
		"count": 1
	},
	"幽灵方块: 黑色羊毛": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "黑色羊毛", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["黑色羊毛", 1]
		],
		"count": 1
	},
	"幽灵方块: 苔藓块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "苔藓块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["苔藓块", 1]
		],
		"count": 1
	},
	"幽灵方块: 平滑石英块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "平滑石英块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["平滑石英块", 1]
		],
		"count": 1
	},
	"幽灵方块: 平滑红砂岩": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "平滑红砂岩", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["平滑红砂岩", 1]
		],
		"count": 1
	},
	"幽灵方块: 平滑砂岩": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "平滑砂岩", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["平滑砂岩", 1]
		],
		"count": 1
	},
	"幽灵方块: 平滑石头": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "平滑石头", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["平滑石头", 1]
		],
		"count": 1
	},
	"幽灵方块: 砖块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "砖块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["砖块", 1]
		],
		"count": 1
	},
	"幽灵方块: 书架": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "书架", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["书架", 1]
		],
		"count": 1
	},
	"幽灵方块: 苔石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "苔石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["苔石", 1]
		],
		"count": 1
	},
	"幽灵方块: 黑曜石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "黑曜石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["黑曜石", 1]
		],
		"count": 1
	},
	"幽灵方块: 紫珀块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "紫珀块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["紫珀块", 1]
		],
		"count": 1
	},
	"幽灵方块: 紫珀柱": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "紫珀柱", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["紫珀柱", 1]
		],
		"count": 1
	},
	"幽灵方块: 工作台": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "工作台", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["工作台", 1]
		],
		"count": 1
	},
	"幽灵方块: 熔炉": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "熔炉", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["熔炉", 1]
		],
		"count": 1
	},
	"幽灵方块: 雪块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "雪块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["雪块", 1]
		],
		"count": 1
	},
	"幽灵方块: 黏土块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "黏土块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["黏土块", 1]
		],
		"count": 1
	},
	"幽灵方块: 唱片机": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "唱片机", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["唱片机", 1]
		],
		"count": 1
	},
	"幽灵方块: 南瓜": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "南瓜", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["南瓜", 1]
		],
		"count": 1
	},
	"幽灵方块: 雕刻过的南瓜": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "雕刻过的南瓜", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["雕刻过的南瓜", 1]
		],
		"count": 1
	},
	"幽灵方块: 南瓜灯": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "南瓜灯", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["南瓜灯", 1]
		],
		"count": 1
	},
	"幽灵方块: 下界岩": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "下界岩", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["下界岩", 1]
		],
		"count": 1
	},
	"幽灵方块: 灵魂沙": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "灵魂沙", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["灵魂沙", 1]
		],
		"count": 1
	},
	"幽灵方块: 灵魂土": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "灵魂土", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["灵魂土", 1]
		],
		"count": 1
	},
	"幽灵方块: 玄武岩": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "玄武岩", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["玄武岩", 1]
		],
		"count": 1
	},
	"幽灵方块: 磨制玄武岩": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "磨制玄武岩", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["磨制玄武岩", 1]
		],
		"count": 1
	},
	"幽灵方块: 平滑玄武岩": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "平滑玄武岩", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["平滑玄武岩", 1]
		],
		"count": 1
	},
	"幽灵方块: 被虫蚀的石头": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "被虫蚀的石头", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["被虫蚀的石头", 1]
		],
		"count": 1
	},
	"幽灵方块: 被虫蚀的圆石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "被虫蚀的圆石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["被虫蚀的圆石", 1]
		],
		"count": 1
	},
	"幽灵方块: 被虫蚀的石砖": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "被虫蚀的石砖", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["被虫蚀的石砖", 1]
		],
		"count": 1
	},
	"幽灵方块: 被虫蚀的苔石砖": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "被虫蚀的苔石砖", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["被虫蚀的苔石砖", 1]
		],
		"count": 1
	},
	"幽灵方块: 被虫蚀的裂纹石砖": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "被虫蚀的裂纹石砖", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["被虫蚀的裂纹石砖", 1]
		],
		"count": 1
	},
	"幽灵方块: 被虫蚀的錾制石砖": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "被虫蚀的錾制石砖", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["被虫蚀的錾制石砖", 1]
		],
		"count": 1
	},
	"幽灵方块: 被虫蚀的深板岩": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "被虫蚀的深板岩", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["被虫蚀的深板岩", 1]
		],
		"count": 1
	},
	"幽灵方块: 石砖": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "石砖", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["石砖", 1]
		],
		"count": 1
	},
	"幽灵方块: 苔石砖": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "苔石砖", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["苔石砖", 1]
		],
		"count": 1
	},
	"幽灵方块: 裂纹石砖": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "裂纹石砖", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["裂纹石砖", 1]
		],
		"count": 1
	},
	"幽灵方块: 錾制石砖": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "錾制石砖", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["錾制石砖", 1]
		],
		"count": 1
	},
	"幽灵方块: 深板岩砖": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "深板岩砖", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["深板岩砖", 1]
		],
		"count": 1
	},
	"幽灵方块: 裂纹深板岩砖": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "裂纹深板岩砖", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["裂纹深板岩砖", 1]
		],
		"count": 1
	},
	"幽灵方块: 深板岩瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "深板岩瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["深板岩瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 裂纹深板岩瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "裂纹深板岩瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["裂纹深板岩瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 錾制深板岩": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "錾制深板岩", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["錾制深板岩", 1]
		],
		"count": 1
	},
	"幽灵方块: 棕色蘑菇方块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "棕色蘑菇方块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["棕色蘑菇方块", 1]
		],
		"count": 1
	},
	"幽灵方块: 红色蘑菇方块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "红色蘑菇方块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["红色蘑菇方块", 1]
		],
		"count": 1
	},
	"幽灵方块: 蘑菇柄": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "蘑菇柄", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["蘑菇柄", 1]
		],
		"count": 1
	},
	"幽灵方块: 西瓜": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "西瓜", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["西瓜", 1]
		],
		"count": 1
	},
	"幽灵方块: 菌丝": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "菌丝", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["菌丝", 1]
		],
		"count": 1
	},
	"幽灵方块: 下界砖块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "下界砖块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["下界砖块", 1]
		],
		"count": 1
	},
	"幽灵方块: 裂纹下界砖块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "裂纹下界砖块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["裂纹下界砖块", 1]
		],
		"count": 1
	},
	"幽灵方块: 錾制下界砖块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "錾制下界砖块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["錾制下界砖块", 1]
		],
		"count": 1
	},
	"幽灵方块: 末地石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "末地石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["末地石", 1]
		],
		"count": 1
	},
	"幽灵方块: 末地石砖": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "末地石砖", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["末地石砖", 1]
		],
		"count": 1
	},
	"幽灵方块: 绿宝石块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "绿宝石块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["绿宝石块", 1]
		],
		"count": 1
	},
	"幽灵方块: 錾制石英块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "錾制石英块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["錾制石英块", 1]
		],
		"count": 1
	},
	"幽灵方块: 石英块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "石英块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["石英块", 1]
		],
		"count": 1
	},
	"幽灵方块: 石英砖": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "石英砖", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["石英砖", 1]
		],
		"count": 1
	},
	"幽灵方块: 石英柱": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "石英柱", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["石英柱", 1]
		],
		"count": 1
	},
	"幽灵方块: 白色陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "白色陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["白色陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 橙色陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "橙色陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["橙色陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 品红色陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "品红色陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["品红色陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 淡蓝色陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "淡蓝色陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["淡蓝色陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 黄色陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "黄色陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["黄色陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 黄绿色陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "黄绿色陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["黄绿色陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 粉红色陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "粉红色陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["粉红色陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 灰色陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "灰色陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["灰色陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 淡灰色陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "淡灰色陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["淡灰色陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 青色陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "青色陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["青色陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 紫色陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "紫色陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["紫色陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 蓝色陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "蓝色陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["蓝色陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 棕色陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "棕色陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["棕色陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 绿色陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "绿色陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["绿色陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 红色陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "红色陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["红色陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 黑色陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "黑色陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["黑色陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 干草块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "干草块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["干草块", 1]
		],
		"count": 1
	},
	"幽灵方块: 陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 浮冰": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "浮冰", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["浮冰", 1]
		],
		"count": 1
	},
	"幽灵方块: 海晶石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "海晶石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["海晶石", 1]
		],
		"count": 1
	},
	"幽灵方块: 海晶石砖": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "海晶石砖", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["海晶石砖", 1]
		],
		"count": 1
	},
	"幽灵方块: 暗海晶石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "暗海晶石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["暗海晶石", 1]
		],
		"count": 1
	},
	"幽灵方块: 红砂岩": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "红砂岩", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["红砂岩", 1]
		],
		"count": 1
	},
	"幽灵方块: 錾制红砂岩": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "錾制红砂岩", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["錾制红砂岩", 1]
		],
		"count": 1
	},
	"幽灵方块: 切制红砂岩": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "切制红砂岩", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["切制红砂岩", 1]
		],
		"count": 1
	},
	"幽灵方块: 岩浆块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "岩浆块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["岩浆块", 1]
		],
		"count": 1
	},
	"幽灵方块: 下界疣块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "下界疣块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["下界疣块", 1]
		],
		"count": 1
	},
	"幽灵方块: 诡异疣块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "诡异疣块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["诡异疣块", 1]
		],
		"count": 1
	},
	"幽灵方块: 红色下界砖块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "红色下界砖块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["红色下界砖块", 1]
		],
		"count": 1
	},
	"幽灵方块: 骨块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "骨块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["骨块", 1]
		],
		"count": 1
	},
	"幽灵方块: 潜影盒": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "潜影盒", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["潜影盒", 1]
		],
		"count": 1
	},
	"幽灵方块: 白色潜影盒": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "白色潜影盒", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["白色潜影盒", 1]
		],
		"count": 1
	},
	"幽灵方块: 橙色潜影盒": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "橙色潜影盒", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["橙色潜影盒", 1]
		],
		"count": 1
	},
	"幽灵方块: 品红色潜影盒": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "品红色潜影盒", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["品红色潜影盒", 1]
		],
		"count": 1
	},
	"幽灵方块: 淡蓝色潜影盒": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "淡蓝色潜影盒", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["淡蓝色潜影盒", 1]
		],
		"count": 1
	},
	"幽灵方块: 黄色潜影盒": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "黄色潜影盒", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["黄色潜影盒", 1]
		],
		"count": 1
	},
	"幽灵方块: 黄绿色潜影盒": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "黄绿色潜影盒", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["黄绿色潜影盒", 1]
		],
		"count": 1
	},
	"幽灵方块: 粉红色潜影盒": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "粉红色潜影盒", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["粉红色潜影盒", 1]
		],
		"count": 1
	},
	"幽灵方块: 灰色潜影盒": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "灰色潜影盒", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["灰色潜影盒", 1]
		],
		"count": 1
	},
	"幽灵方块: 淡灰色潜影盒": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "淡灰色潜影盒", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["淡灰色潜影盒", 1]
		],
		"count": 1
	},
	"幽灵方块: 青色潜影盒": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "青色潜影盒", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["青色潜影盒", 1]
		],
		"count": 1
	},
	"幽灵方块: 紫色潜影盒": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "紫色潜影盒", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["紫色潜影盒", 1]
		],
		"count": 1
	},
	"幽灵方块: 蓝色潜影盒": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "蓝色潜影盒", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["蓝色潜影盒", 1]
		],
		"count": 1
	},
	"幽灵方块: 棕色潜影盒": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "棕色潜影盒", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["棕色潜影盒", 1]
		],
		"count": 1
	},
	"幽灵方块: 绿色潜影盒": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "绿色潜影盒", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["绿色潜影盒", 1]
		],
		"count": 1
	},
	"幽灵方块: 红色潜影盒": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "红色潜影盒", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["红色潜影盒", 1]
		],
		"count": 1
	},
	"幽灵方块: 黑色潜影盒": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "黑色潜影盒", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["黑色潜影盒", 1]
		],
		"count": 1
	},
	"幽灵方块: 白色带釉陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "白色带釉陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["白色带釉陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 橙色带釉陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "橙色带釉陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["橙色带釉陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 品红色带釉陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "品红色带釉陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["品红色带釉陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 淡蓝色带釉陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "淡蓝色带釉陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["淡蓝色带釉陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 黄色带釉陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "黄色带釉陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["黄色带釉陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 黄绿色带釉陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "黄绿色带釉陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["黄绿色带釉陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 粉红色带釉陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "粉红色带釉陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["粉红色带釉陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 灰色带釉陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "灰色带釉陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["灰色带釉陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 淡灰色带釉陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "淡灰色带釉陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["淡灰色带釉陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 青色带釉陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "青色带釉陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["青色带釉陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 紫色带釉陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "紫色带釉陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["紫色带釉陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 蓝色带釉陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "蓝色带釉陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["蓝色带釉陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 棕色带釉陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "棕色带釉陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["棕色带釉陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 绿色带釉陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "绿色带釉陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["绿色带釉陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 红色带釉陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "红色带釉陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["红色带釉陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 黑色带釉陶瓦": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "黑色带釉陶瓦", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["黑色带釉陶瓦", 1]
		],
		"count": 1
	},
	"幽灵方块: 白色混凝土": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "白色混凝土", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["白色混凝土", 1]
		],
		"count": 1
	},
	"幽灵方块: 橙色混凝土": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "橙色混凝土", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["橙色混凝土", 1]
		],
		"count": 1
	},
	"幽灵方块: 品红色混凝土": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "品红色混凝土", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["品红色混凝土", 1]
		],
		"count": 1
	},
	"幽灵方块: 淡蓝色混凝土": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "淡蓝色混凝土", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["淡蓝色混凝土", 1]
		],
		"count": 1
	},
	"幽灵方块: 黄色混凝土": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "黄色混凝土", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["黄色混凝土", 1]
		],
		"count": 1
	},
	"幽灵方块: 黄绿色混凝土": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "黄绿色混凝土", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["黄绿色混凝土", 1]
		],
		"count": 1
	},
	"幽灵方块: 粉红色混凝土": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "粉红色混凝土", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["粉红色混凝土", 1]
		],
		"count": 1
	},
	"幽灵方块: 灰色混凝土": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "灰色混凝土", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["灰色混凝土", 1]
		],
		"count": 1
	},
	"幽灵方块: 淡灰色混凝土": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "淡灰色混凝土", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["淡灰色混凝土", 1]
		],
		"count": 1
	},
	"幽灵方块: 青色混凝土": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "青色混凝土", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["青色混凝土", 1]
		],
		"count": 1
	},
	"幽灵方块: 紫色混凝土": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "紫色混凝土", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["紫色混凝土", 1]
		],
		"count": 1
	},
	"幽灵方块: 蓝色混凝土": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "蓝色混凝土", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["蓝色混凝土", 1]
		],
		"count": 1
	},
	"幽灵方块: 棕色混凝土": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "棕色混凝土", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["棕色混凝土", 1]
		],
		"count": 1
	},
	"幽灵方块: 绿色混凝土": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "绿色混凝土", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["绿色混凝土", 1]
		],
		"count": 1
	},
	"幽灵方块: 红色混凝土": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "红色混凝土", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["红色混凝土", 1]
		],
		"count": 1
	},
	"幽灵方块: 黑色混凝土": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "黑色混凝土", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["黑色混凝土", 1]
		],
		"count": 1
	},
	"幽灵方块: 白色混凝土粉末": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "白色混凝土粉末", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["白色混凝土粉末", 1]
		],
		"count": 1
	},
	"幽灵方块: 橙色混凝土粉末": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "橙色混凝土粉末", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["橙色混凝土粉末", 1]
		],
		"count": 1
	},
	"幽灵方块: 品红色混凝土粉末": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "品红色混凝土粉末", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["品红色混凝土粉末", 1]
		],
		"count": 1
	},
	"幽灵方块: 淡蓝色混凝土粉末": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "淡蓝色混凝土粉末", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["淡蓝色混凝土粉末", 1]
		],
		"count": 1
	},
	"幽灵方块: 黄色混凝土粉末": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "黄色混凝土粉末", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["黄色混凝土粉末", 1]
		],
		"count": 1
	},
	"幽灵方块: 黄绿色混凝土粉末": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "黄绿色混凝土粉末", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["黄绿色混凝土粉末", 1]
		],
		"count": 1
	},
	"幽灵方块: 粉红色混凝土粉末": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "粉红色混凝土粉末", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["粉红色混凝土粉末", 1]
		],
		"count": 1
	},
	"幽灵方块: 灰色混凝土粉末": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "灰色混凝土粉末", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["灰色混凝土粉末", 1]
		],
		"count": 1
	},
	"幽灵方块: 淡灰色混凝土粉末": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "淡灰色混凝土粉末", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["淡灰色混凝土粉末", 1]
		],
		"count": 1
	},
	"幽灵方块: 青色混凝土粉末": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "青色混凝土粉末", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["青色混凝土粉末", 1]
		],
		"count": 1
	},
	"幽灵方块: 紫色混凝土粉末": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "紫色混凝土粉末", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["紫色混凝土粉末", 1]
		],
		"count": 1
	},
	"幽灵方块: 蓝色混凝土粉末": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "蓝色混凝土粉末", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["蓝色混凝土粉末", 1]
		],
		"count": 1
	},
	"幽灵方块: 棕色混凝土粉末": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "棕色混凝土粉末", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["棕色混凝土粉末", 1]
		],
		"count": 1
	},
	"幽灵方块: 绿色混凝土粉末": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "绿色混凝土粉末", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["绿色混凝土粉末", 1]
		],
		"count": 1
	},
	"幽灵方块: 红色混凝土粉末": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "红色混凝土粉末", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["红色混凝土粉末", 1]
		],
		"count": 1
	},
	"幽灵方块: 黑色混凝土粉末": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "黑色混凝土粉末", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["黑色混凝土粉末", 1]
		],
		"count": 1
	},
	"幽灵方块: 失活的管珊瑚块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "失活的管珊瑚块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["失活的管珊瑚块", 1]
		],
		"count": 1
	},
	"幽灵方块: 失活的脑纹珊瑚块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "失活的脑纹珊瑚块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["失活的脑纹珊瑚块", 1]
		],
		"count": 1
	},
	"幽灵方块: 失活的气泡珊瑚块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "失活的气泡珊瑚块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["失活的气泡珊瑚块", 1]
		],
		"count": 1
	},
	"幽灵方块: 失活的火珊瑚块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "失活的火珊瑚块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["失活的火珊瑚块", 1]
		],
		"count": 1
	},
	"幽灵方块: 失活的鹿角珊瑚块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "失活的鹿角珊瑚块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["失活的鹿角珊瑚块", 1]
		],
		"count": 1
	},
	"幽灵方块: 管珊瑚块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "管珊瑚块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["管珊瑚块", 1]
		],
		"count": 1
	},
	"幽灵方块: 脑纹珊瑚块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "脑纹珊瑚块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["脑纹珊瑚块", 1]
		],
		"count": 1
	},
	"幽灵方块: 气泡珊瑚块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "气泡珊瑚块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["气泡珊瑚块", 1]
		],
		"count": 1
	},
	"幽灵方块: 火珊瑚块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "火珊瑚块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["火珊瑚块", 1]
		],
		"count": 1
	},
	"幽灵方块: 鹿角珊瑚块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "鹿角珊瑚块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["鹿角珊瑚块", 1]
		],
		"count": 1
	},
	"幽灵方块: 蓝冰": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "蓝冰", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["蓝冰", 1]
		],
		"count": 1
	},
	"幽灵方块: 黏液块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "黏液块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["黏液块", 1]
		],
		"count": 1
	},
	"幽灵方块: 发射器": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "发射器", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["发射器", 1]
		],
		"count": 1
	},
	"幽灵方块: 投掷器": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "投掷器", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["投掷器", 1]
		],
		"count": 1
	},
	"幽灵方块: 标靶": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "标靶", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["标靶", 1]
		],
		"count": 1
	},
	"幽灵方块: 红石灯": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "红石灯", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["红石灯", 1]
		],
		"count": 1
	},
	"幽灵方块: 音符盒": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "音符盒", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["音符盒", 1]
		],
		"count": 1
	},
	"幽灵方块: 干海带块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "干海带块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["干海带块", 1]
		],
		"count": 1
	},
	"幽灵方块: 织布机": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "织布机", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["织布机", 1]
		],
		"count": 1
	},
	"幽灵方块: 木桶": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "木桶", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["木桶", 1]
		],
		"count": 1
	},
	"幽灵方块: 烟熏炉": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "烟熏炉", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["烟熏炉", 1]
		],
		"count": 1
	},
	"幽灵方块: 高炉": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "高炉", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["高炉", 1]
		],
		"count": 1
	},
	"幽灵方块: 制图台": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "制图台", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["制图台", 1]
		],
		"count": 1
	},
	"幽灵方块: 制箭台": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "制箭台", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["制箭台", 1]
		],
		"count": 1
	},
	"幽灵方块: 锻造台": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "锻造台", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["锻造台", 1]
		],
		"count": 1
	},
	"幽灵方块: 菌光体": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "菌光体", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["菌光体", 1]
		],
		"count": 1
	},
	"幽灵方块: 蜂巢": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "蜂巢", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["蜂巢", 1]
		],
		"count": 1
	},
	"幽灵方块: 蜂箱": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "蜂箱", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["蜂箱", 1]
		],
		"count": 1
	},
	"幽灵方块: 蜜脾块": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "蜜脾块", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["蜜脾块", 1]
		],
		"count": 1
	},
	"幽灵方块: 磁石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "磁石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["磁石", 1]
		],
		"count": 1
	},
	"幽灵方块: 哭泣的黑曜石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "哭泣的黑曜石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["哭泣的黑曜石", 1]
		],
		"count": 1
	},
	"幽灵方块: 黑石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "黑石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["黑石", 1]
		],
		"count": 1
	},
	"幽灵方块: 镶金黑石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "镶金黑石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["镶金黑石", 1]
		],
		"count": 1
	},
	"幽灵方块: 磨制黑石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "磨制黑石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["磨制黑石", 1]
		],
		"count": 1
	},
	"幽灵方块: 錾制磨制黑石": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "錾制磨制黑石", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["錾制磨制黑石", 1]
		],
		"count": 1
	},
	"幽灵方块: 磨制黑石砖": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "磨制黑石砖", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["磨制黑石砖", 1]
		],
		"count": 1
	},
	"幽灵方块: 裂纹磨制黑石砖": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "裂纹磨制黑石砖", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["裂纹磨制黑石砖", 1]
		],
		"count": 1
	},
	"幽灵方块: 重生锚": {
		"type": "增强型工作台",
		"map": [
			["银铜合金锭", "银铜合金锭", "银铜合金锭"],
			["魔法玻璃", "重生锚", "魔法玻璃"],
			["银铜合金锭", "银铜合金锭", "银铜合金锭"]
		],
		"ingredients": [
			["银铜合金锭", 6],
			["魔法玻璃", 2],
			["重生锚", 1]
		],
		"count": 1
	},
	"铁矿石块": {
		"type": "自然资源开采机",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"金矿石块": {
		"type": "自然资源开采机",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"铜矿石块": {
		"type": "自然资源开采机",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"锡矿石块": {
		"type": "自然资源开采机",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"银矿石块": {
		"type": "自然资源开采机",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"铝矿石块": {
		"type": "自然资源开采机",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"铅矿石块": {
		"type": "自然资源开采机",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"锌矿石块": {
		"type": "自然资源开采机",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"镁矿石块": {
		"type": "自然资源开采机",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"镍矿石块": {
		"type": "自然资源开采机",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"钴矿石块": {
		"type": "自然资源开采机",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"随机头盔": {
		"type": "增强型工作台",
		"map": [
			["破损的的金币", null, "破损的的金币"],
			["破损的的金币", "计算机工艺核心", "破损的的金币"],
			["破损的的金币", "升级核心", "破损的的金币"]
		],
		"ingredients": [
			["破损的的金币", 6],
			["计算机工艺核心", 1],
			["升级核心", 1]
		],
		"count": 1
	},
	"随机马铠": {
		"type": "增强型工作台",
		"map": [
			["破损的的金币", null, "破损的的金币"],
			["破损的的金币", "钻石马铠", "破损的的金币"],
			["破损的的金币", "升级核心", "破损的的金币"]
		],
		"ingredients": [
			["破损的的金币", 6],
			["钻石马铠", 1],
			["升级核心", 1]
		],
		"count": 1
	},
	"雪碧": {
		"type": "魔法工作台",
		"map": [
			["汽水糖", "水桶", "汽水糖"],
			["水桶", "汽水糖", "水桶"],
			["汽水糖", "水桶", "汽水糖"]
		],
		"ingredients": [
			["汽水糖", 5],
			["水桶", 4]
		],
		"count": 1
	},
	"可乐": {
		"type": "魔法工作台",
		"map": [
			["汽水糖", "水桶", "汽水糖"],
			["水桶", "魔法糖", "水桶"],
			["汽水糖", "水桶", "汽水糖"]
		],
		"ingredients": [
			["汽水糖", 4],
			["水桶", 4],
			["魔法糖", 1]
		],
		"count": 1
	},
	"康师傅方便面": {
		"type": "魔法工作台",
		"map": [
			["水桶", "水桶", "水桶"],
			["方便面调料", "方便面调料", "方便面调料"],
			["小麦粉", "小麦粉", "小麦粉"]
		],
		"ingredients": [
			["水桶", 3],
			["方便面调料", 3],
			["小麦粉", 3]
		],
		"count": 1
	},
	"辣条": {
		"type": "压缩机",
		"map": [
			["小麦粉", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["小麦粉", 1]
		],
		"count": 1
	},
	"口香糖": {
		"type": "压缩机",
		"map": [
			["魔法糖", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["魔法糖", 1]
		],
		"count": 1
	},
	"粽子": {
		"type": "魔法工作台",
		"map": [
			["睡莲", "金合欢树叶", "睡莲"],
			["金合欢树叶", "小麦", "金合欢树叶"],
			["睡莲", "金合欢树叶", "睡莲"]
		],
		"ingredients": [
			["睡莲", 4],
			["金合欢树叶", 4],
			["小麦", 1]
		],
		"count": 1
	},
	"鉴定仪": {
		"type": "增强型工作台",
		"map": [
			["电池", "电磁铁", "电池"],
			["机械齿轮", "CPU", "机械齿轮"],
			["高级电路板", "冷却装置", "高级电路板"]
		],
		"ingredients": [
			["电池", 2],
			["电磁铁", 1],
			["机械齿轮", 2],
			["CPU", 1],
			["高级电路板", 2],
			["冷却装置", 1]
		],
		"count": 1
	},
	"属性砂轮": {
		"type": "增强型工作台",
		"map": [
			["电磁铁", "鉴定仪", "电磁铁"],
			["机械齿轮", "CPU", "机械齿轮"],
			["升级核心", "粽子", "升级核心"]
		],
		"ingredients": [
			["电磁铁", 2],
			["鉴定仪", 1],
			["机械齿轮", 2],
			["CPU", 1],
			["升级核心", 2],
			["粽子", 1]
		],
		"count": 1
	},
	"光合能量": {
		"type": "魔法工作台",
		"map": [
			["紫颂花", "向日葵", "紫颂花"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["紫颂花", 2],
			["向日葵", 1]
		],
		"count": 1
	},
	"机械齿轮": {
		"type": "增强型工作台",
		"map": [
			["高级电路板", "高级电路板", "高级电路板"],
			["铜线", "高级电路板", "高级电路板"],
			["高级电路板", null, null]
		],
		"ingredients": [
			["高级电路板", 6],
			["铜线", 1]
		],
		"count": 1
	},
	"破损的的金币": {
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"计算机工艺核心": {
		"type": "增强型工作台",
		"map": [
			["电池", "电池", "电池"],
			["冷却装置", "能量水晶", "冷却装置"],
			["高级电路板", "高级电路板", "高级电路板"]
		],
		"ingredients": [
			["电池", 3],
			["冷却装置", 2],
			["能量水晶", 1],
			["高级电路板", 3]
		],
		"count": 1
	},
	"破损的CPU": {
		"type": "增强型工作台",
		"map": [
			["铜线", "铜线", "铜线"],
			["铜线", "计算机工艺核心", "铜线"],
			["铜线", "铜线", "铜线"]
		],
		"ingredients": [
			["铜线", 8],
			["计算机工艺核心", 1]
		],
		"count": 1
	},
	"CPU": {
		"type": "压缩机",
		"map": [
			["破损的CPU", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["破损的CPU", 1]
		],
		"count": 1
	},
	"灵魂之符": {
		"type": "古代祭坛",
		"map": [
			["魔法结晶 - I", "来世精华", "魔法结晶 - I"],
			["古代符文 [灵魂绑定]", "古代符文 [灵魂绑定]", "古代符文 [灵魂绑定]"],
			["魔法结晶 - I", "来世精华", "魔法结晶 - I"]
		],
		"ingredients": [
			["魔法结晶 - I", 4],
			["来世精华", 2],
			["古代符文 [灵魂绑定]", 3]
		],
		"count": 1
	},
	"方便面调料": {
		"type": "增强型工作台",
		"map": [
			["盐", "盐", "盐"],
			["有机肥料", "有机肥料", "有机肥料"],
			["盐", "盐", "盐"]
		],
		"ingredients": [
			["盐", 6],
			["有机肥料", 3]
		],
		"count": 1
	},
	"汽水糖": {
		"type": "压力机",
		"map": [
			["魔法糖", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["魔法糖", 1]
		],
		"count": 1
	},
	"桃木": {
		"type": "增强型工作台",
		"map": [
			["金合欢木", "白桦木", "深色橡木"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["金合欢木", 1],
			["白桦木", 1],
			["深色橡木", 1]
		],
		"count": 1
	},
	"升级核心": {
		"type": "魔法工作台",
		"map": [
			["能量水晶", "岩浆水晶", "能量水晶"],
			["岩浆水晶", "CPU", "岩浆水晶"],
			["金锭 (24克拉)", "金锭 (24克拉)", "金锭 (24克拉)"]
		],
		"ingredients": [
			["能量水晶", 2],
			["岩浆水晶", 3],
			["CPU", 1],
			["金锭 (24克拉)", 3]
		],
		"count": 1
	},
	"摸金铲": {
		"type": "增强型工作台",
		"map": [
			[null, "金锭 (24克拉)", null],
			[null, "木棍", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["金锭 (24克拉)", 1],
			["木棍", 2]
		],
		"count": 1
	},
	"护甲品质鉴定符": {
		"type": "冶炼炉",
		"map": [
			["随机头盔", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["随机头盔", 1]
		],
		"count": 1
	},
	"武器品质鉴定符": {
		"type": "冶炼炉",
		"map": [
			["随机短刃", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["随机短刃", 1]
		],
		"count": 1
	},
	"马铠品质鉴定符": {
		"type": "冶炼炉",
		"map": [
			["随机马铠", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["随机马铠", 1]
		],
		"count": 1
	},
	"神罚之弓": {
		"type": "盔甲锻造台",
		"map": [
			["古代符文 [雷]", "元素法杖 - 雷", "古代符文 [雷]"],
			["能量水晶", "元素法杖 - 雷", "古代符文 [雷]"],
			["元素法杖 - 雷", null, null]
		],
		"ingredients": [
			["古代符文 [雷]", 3],
			["元素法杖 - 雷", 3],
			["能量水晶", 1]
		],
		"count": 1
	},
	"凋零弓": {
		"type": "盔甲锻造台",
		"map": [
			["坏死颅骨", "桃木", "坏死颅骨"],
			["能量水晶", "桃木", "坏死颅骨"],
			["桃木", null, null]
		],
		"ingredients": [
			["坏死颅骨", 3],
			["桃木", 3],
			["能量水晶", 1]
		],
		"count": 1
	},
	"绿宝石之剑": {
		"type": "增强型工作台",
		"map": [
			[null, "绿宝石", null],
			[null, "绿宝石", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["绿宝石", 2],
			["木棍", 1]
		],
		"count": 1
	},
	"骨剑": {
		"type": "增强型工作台",
		"map": [
			[null, "骨块", null],
			[null, "骨块", null],
			[null, "奶奶的拐杖", null]
		],
		"ingredients": [
			["骨块", 2],
			["奶奶的拐杖", 1]
		],
		"count": 1
	},
	"随机短刃": {
		"type": "增强型工作台",
		"map": [
			[null, "升级核心", null],
			[null, "计算机工艺核心", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["升级核心", 1],
			["计算机工艺核心", 1],
			["木棍", 1]
		],
		"count": 1
	},
	"守护之剑": {
		"type": "盔甲锻造台",
		"map": [
			[null, "光合能量", null],
			[null, "光合能量", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["光合能量", 2],
			["木棍", 1]
		],
		"count": 1
	},
	"桃木剑": {
		"type": "盔甲锻造台",
		"map": [
			[null, "桃木", null],
			[null, "桃木", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["桃木", 2],
			["木棍", 1]
		],
		"count": 1
	},
	"灵魂之剑": {
		"type": "盔甲锻造台",
		"map": [
			[null, null, null],
			["灵魂之符", "钻石剑", "灵魂之符"],
			[null, null, null]
		],
		"ingredients": [
			["灵魂之符", 2],
			["钻石剑", 1]
		],
		"count": 1
	},
	"破天剑": {
		"type": "盔甲锻造台",
		"map": [
			["魔法结晶 - II", "古代符文 [气]", "魔法结晶 - II"],
			["古代符文 [虹]", "古代符文 [虹]", "魔法结晶 - II"],
			["古代符文 [气]", "魔法结晶 - II", null]
		],
		"ingredients": [
			["魔法结晶 - II", 4],
			["古代符文 [气]", 2],
			["古代符文 [虹]", 2]
		],
		"count": 1
	},
	"斩魔剑": {
		"type": "盔甲锻造台",
		"map": [
			["魔法结晶 - II", "古代符文 [末影]", "魔法结晶 - II"],
			["古代符文 [火]", "古代符文 [火]", "魔法结晶 - II"],
			["古代符文 [末影]", "魔法结晶 - II", null]
		],
		"ingredients": [
			["魔法结晶 - II", 4],
			["古代符文 [末影]", 2],
			["古代符文 [火]", 2]
		],
		"count": 1
	},
	"破天斩魔剑": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			["破天剑", "升级核心", "斩魔剑"],
			[null, null, null]
		],
		"ingredients": [
			["破天剑", 1],
			["升级核心", 1],
			["斩魔剑", 1]
		],
		"count": 1
	},
	"材料生成器 - 多方块结构": {
		"type": "多方块结构",
		"map": [
			[null, null, null],
			[null, "箱子", null],
			[null, "任何材料生成器", null]
		],
		"ingredients": [
			["箱子", 1],
			["任何材料生成器", 1]
		],
		"count": 1
	},
	"圆石生成器": {
		"type": "增强型工作台",
		"map": [
			["平滑石头", "平滑石头", "平滑石头"],
			["熔岩桶", "铁镐", "水桶"],
			["平滑石头", "平滑石头", "平滑石头"]
		],
		"ingredients": [
			["平滑石头", 6],
			["熔岩桶", 1],
			["铁镐", 1],
			["水桶", 1]
		],
		"count": 1
	},
	"圆石生成器 (已损坏)": {
		"type": "冶炼炉",
		"map": [
			["圆石生成器", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["圆石生成器", 1]
		],
		"count": 1
	},
	"石头生成器": {
		"type": "增强型工作台",
		"map": [
			["石头", "焊锡锭", "石头"],
			["焊锡锭", "圆石生成器 (已损坏)", "焊锡锭"],
			["石头", "焊锡锭", "石头"]
		],
		"ingredients": [
			["石头", 4],
			["焊锡锭", 4],
			["圆石生成器 (已损坏)", 1]
		],
		"count": 1
	},
	"平滑石头生成器 (已损坏)": {
		"type": "冶炼炉",
		"map": [
			["石头生成器", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["石头生成器", 1]
		],
		"count": 1
	},
	"平滑石头生成器": {
		"type": "冶炼炉",
		"map": [
			["平滑石头", "钢锭", "平滑石头"],
			["铁栏杆", "平滑石头生成器 (已损坏)", "铁栏杆"],
			["平滑石头", "钢锭", "平滑石头"]
		],
		"ingredients": [
			["平滑石头", 4],
			["钢锭", 2],
			["铁栏杆", 2],
			["平滑石头生成器 (已损坏)", 1]
		],
		"count": 1
	},
	"沙砾生成器 (已损坏)": {
		"type": "磨石",
		"map": [
			["圆石生成器", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["圆石生成器", 1]
		],
		"count": 1
	},
	"沙砾生成器": {
		"type": "增强型工作台",
		"map": [
			["石砖", "银铜合金锭", "石砖"],
			["银铜合金锭", "沙砾生成器 (已损坏)", "银铜合金锭"],
			["石砖", "银铜合金锭", "石砖"]
		],
		"ingredients": [
			["石砖", 4],
			["银铜合金锭", 4],
			["沙砾生成器 (已损坏)", 1]
		],
		"count": 1
	},
	"沙子生成器 (已损坏)": {
		"type": "矿石粉碎机",
		"map": [
			["沙砾生成器", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["沙砾生成器", 1]
		],
		"count": 1
	},
	"沙子生成器": {
		"type": "增强型工作台",
		"map": [
			["砂岩", "硬铝锭", "砂岩"],
			["硬铝锭", "沙子生成器 (已损坏)", "硬铝锭"],
			["砂岩", "硬铝锭", "砂岩"]
		],
		"ingredients": [
			["砂岩", 4],
			["硬铝锭", 4],
			["沙子生成器 (已损坏)", 1]
		],
		"count": 1
	},
	"玻璃生成器": {
		"type": "冶炼炉",
		"map": [
			["青铜锭", "金锭 (8克拉)", "青铜锭"],
			["黄铜锭", "沙子生成器", "黄铜锭"],
			[null, null, null]
		],
		"ingredients": [
			["青铜锭", 2],
			["金锭 (8克拉)", 1],
			["黄铜锭", 2],
			["沙子生成器", 1]
		],
		"count": 1
	},
	"远古残骸生成器": {
		"type": "增强型工作台",
		"map": [
			["焊锡锭", "焊锡锭", "焊锡锭"],
			["石头生成器", "熔岩桶", "石头生成器"],
			["石头生成器", "搅拌机", "石头生成器"]
		],
		"ingredients": [
			["焊锡锭", 3],
			["石头生成器", 4],
			["熔岩桶", 1],
			["搅拌机", 1]
		],
		"count": 1
	},
	"灵魂沙生成器": {
		"type": "增强型工作台",
		"map": [
			["钢锭", "蜘蛛眼", "钢锭"],
			["腐肉", "水桶", "骨头"],
			["沙子生成器", "搅拌机", "沙子生成器"]
		],
		"ingredients": [
			["钢锭", 2],
			["蜘蛛眼", 1],
			["腐肉", 1],
			["水桶", 1],
			["骨头", 1],
			["沙子生成器", 2],
			["搅拌机", 1]
		],
		"count": 1
	},
	"红石生成器 (错误形式)": {
		"type": "增强型工作台",
		"map": [
			["沙子生成器", null, "沙砾生成器"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["沙子生成器", 1],
			["沙砾生成器", 1]
		],
		"count": 1
	},
	"红石生成器 (已损坏)": {
		"type": "矿石粉碎机",
		"map": [
			["红石生成器 (错误形式)", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["红石生成器 (错误形式)", 1]
		],
		"count": 1
	},
	"红石生成器": {
		"type": "增强型工作台",
		"map": [
			["红石生成器 (已损坏)", "红石矿石", "红石生成器 (已损坏)"],
			["红石生成器 (已损坏)", "沙砾生成器", "红石生成器 (已损坏)"],
			["大马士革钢锭", "硬铝锭", "大马士革钢锭"]
		],
		"ingredients": [
			["红石生成器 (已损坏)", 4],
			["红石矿石", 1],
			["沙砾生成器", 1],
			["大马士革钢锭", 2],
			["硬铝锭", 1]
		],
		"count": 1
	},
	"黑曜石生成器 (错误形式)": {
		"type": "增强型工作台",
		"map": [
			["圆石生成器", null, "石头生成器"],
			[null, "钴镐", null],
			["平滑石头生成器", null, "远古残骸生成器"]
		],
		"ingredients": [
			["圆石生成器", 1],
			["石头生成器", 1],
			["钴镐", 1],
			["平滑石头生成器", 1],
			["远古残骸生成器", 1]
		],
		"count": 1
	},
	"黑曜石生成器 (已损坏)": {
		"type": "矿石粉碎机",
		"map": [
			["黑曜石生成器 (错误形式)", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["黑曜石生成器 (错误形式)", 1]
		],
		"count": 1
	},
	"黑曜石生成器": {
		"type": "增强型工作台",
		"map": [
			["强化合金锭", "水桶", "强化合金锭"],
			["黑曜石生成器 (已损坏)", "石头生成器", "黑曜石生成器 (已损坏)"],
			["黑曜石生成器 (已损坏)", "熔岩桶", "黑曜石生成器 (已损坏)"]
		],
		"ingredients": [
			["强化合金锭", 2],
			["水桶", 1],
			["黑曜石生成器 (已损坏)", 4],
			["石头生成器", 1],
			["熔岩桶", 1]
		],
		"count": 1
	},
	"铜剑": {
		"type": "增强型工作台",
		"map": [
			[null, "铜锭", null],
			[null, "铜锭", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["铜锭", 2],
			["木棍", 1]
		],
		"count": 1
	},
	"铜头盔": {
		"type": "盔甲锻造台",
		"map": [
			["铜锭", "铜锭", "铜锭"],
			["铜锭", null, "铜锭"],
			[null, null, null]
		],
		"ingredients": [
			["铜锭", 5]
		],
		"count": 1
	},
	"铜胸甲": {
		"type": "盔甲锻造台",
		"map": [
			["铜锭", null, "铜锭"],
			["铜锭", "铜锭", "铜锭"],
			["铜锭", "铜锭", "铜锭"]
		],
		"ingredients": [
			["铜锭", 8]
		],
		"count": 1
	},
	"铜护腿": {
		"type": "盔甲锻造台",
		"map": [
			["铜锭", "铜锭", "铜锭"],
			["铜锭", null, "铜锭"],
			["铜锭", null, "铜锭"]
		],
		"ingredients": [
			["铜锭", 7]
		],
		"count": 1
	},
	"铜靴子": {
		"type": "盔甲锻造台",
		"map": [
			[null, null, null],
			["铜锭", null, "铜锭"],
			["铜锭", null, "铜锭"]
		],
		"ingredients": [
			["铜锭", 4]
		],
		"count": 1
	},
	"锡剑": {
		"type": "增强型工作台",
		"map": [
			[null, "锡锭", null],
			[null, "锡锭", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["锡锭", 2],
			["木棍", 1]
		],
		"count": 1
	},
	"锡头盔": {
		"type": "盔甲锻造台",
		"map": [
			["锡锭", "锡锭", "锡锭"],
			["锡锭", null, "锡锭"],
			[null, null, null]
		],
		"ingredients": [
			["锡锭", 5]
		],
		"count": 1
	},
	"锡胸甲": {
		"type": "盔甲锻造台",
		"map": [
			["锡锭", null, "锡锭"],
			["锡锭", "锡锭", "锡锭"],
			["锡锭", "锡锭", "锡锭"]
		],
		"ingredients": [
			["锡锭", 8]
		],
		"count": 1
	},
	"锡护腿": {
		"type": "盔甲锻造台",
		"map": [
			["锡锭", "锡锭", "锡锭"],
			["锡锭", null, "锡锭"],
			["锡锭", null, "锡锭"]
		],
		"ingredients": [
			["锡锭", 7]
		],
		"count": 1
	},
	"锡靴子": {
		"type": "盔甲锻造台",
		"map": [
			[null, null, null],
			["锡锭", null, "锡锭"],
			["锡锭", null, "锡锭"]
		],
		"ingredients": [
			["锡锭", 4]
		],
		"count": 1
	},
	"银剑": {
		"type": "增强型工作台",
		"map": [
			[null, "银锭", null],
			[null, "银锭", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["银锭", 2],
			["木棍", 1]
		],
		"count": 1
	},
	"银头盔": {
		"type": "盔甲锻造台",
		"map": [
			["银锭", "银锭", "银锭"],
			["银锭", null, "银锭"],
			[null, null, null]
		],
		"ingredients": [
			["银锭", 5]
		],
		"count": 1
	},
	"银胸甲": {
		"type": "盔甲锻造台",
		"map": [
			["银锭", null, "银锭"],
			["银锭", "银锭", "银锭"],
			["银锭", "银锭", "银锭"]
		],
		"ingredients": [
			["银锭", 8]
		],
		"count": 1
	},
	"银护腿": {
		"type": "盔甲锻造台",
		"map": [
			["银锭", "银锭", "银锭"],
			["银锭", null, "银锭"],
			["银锭", null, "银锭"]
		],
		"ingredients": [
			["银锭", 7]
		],
		"count": 1
	},
	"银靴子": {
		"type": "盔甲锻造台",
		"map": [
			[null, null, null],
			["银锭", null, "银锭"],
			["银锭", null, "银锭"]
		],
		"ingredients": [
			["银锭", 4]
		],
		"count": 1
	},
	"铝剑": {
		"type": "增强型工作台",
		"map": [
			[null, "铝锭", null],
			[null, "铝锭", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["铝锭", 2],
			["木棍", 1]
		],
		"count": 1
	},
	"铝头盔": {
		"type": "盔甲锻造台",
		"map": [
			["铝锭", "铝锭", "铝锭"],
			["铝锭", null, "铝锭"],
			[null, null, null]
		],
		"ingredients": [
			["铝锭", 5]
		],
		"count": 1
	},
	"铝胸甲": {
		"type": "盔甲锻造台",
		"map": [
			["铝锭", null, "铝锭"],
			["铝锭", "铝锭", "铝锭"],
			["铝锭", "铝锭", "铝锭"]
		],
		"ingredients": [
			["铝锭", 8]
		],
		"count": 1
	},
	"铝护腿": {
		"type": "盔甲锻造台",
		"map": [
			["铝锭", "铝锭", "铝锭"],
			["铝锭", null, "铝锭"],
			["铝锭", null, "铝锭"]
		],
		"ingredients": [
			["铝锭", 7]
		],
		"count": 1
	},
	"铝靴子": {
		"type": "盔甲锻造台",
		"map": [
			[null, null, null],
			["铝锭", null, "铝锭"],
			["铝锭", null, "铝锭"]
		],
		"ingredients": [
			["铝锭", 4]
		],
		"count": 1
	},
	"铅剑": {
		"type": "增强型工作台",
		"map": [
			[null, "铅锭", null],
			[null, "铅锭", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["铅锭", 2],
			["木棍", 1]
		],
		"count": 1
	},
	"铅头盔": {
		"type": "盔甲锻造台",
		"map": [
			["铅锭", "铅锭", "铅锭"],
			["铅锭", null, "铅锭"],
			[null, null, null]
		],
		"ingredients": [
			["铅锭", 5]
		],
		"count": 1
	},
	"铅胸甲": {
		"type": "盔甲锻造台",
		"map": [
			["铅锭", null, "铅锭"],
			["铅锭", "铅锭", "铅锭"],
			["铅锭", "铅锭", "铅锭"]
		],
		"ingredients": [
			["铅锭", 8]
		],
		"count": 1
	},
	"铅护腿": {
		"type": "盔甲锻造台",
		"map": [
			["铅锭", "铅锭", "铅锭"],
			["铅锭", null, "铅锭"],
			["铅锭", null, "铅锭"]
		],
		"ingredients": [
			["铅锭", 7]
		],
		"count": 1
	},
	"铅靴子": {
		"type": "盔甲锻造台",
		"map": [
			[null, null, null],
			["铅锭", null, "铅锭"],
			["铅锭", null, "铅锭"]
		],
		"ingredients": [
			["铅锭", 4]
		],
		"count": 1
	},
	"锌剑": {
		"type": "增强型工作台",
		"map": [
			[null, "锌锭", null],
			[null, "锌锭", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["锌锭", 2],
			["木棍", 1]
		],
		"count": 1
	},
	"锌头盔": {
		"type": "盔甲锻造台",
		"map": [
			["锌锭", "锌锭", "锌锭"],
			["锌锭", null, "锌锭"],
			[null, null, null]
		],
		"ingredients": [
			["锌锭", 5]
		],
		"count": 1
	},
	"锌胸甲": {
		"type": "盔甲锻造台",
		"map": [
			["锌锭", null, "锌锭"],
			["锌锭", "锌锭", "锌锭"],
			["锌锭", "锌锭", "锌锭"]
		],
		"ingredients": [
			["锌锭", 8]
		],
		"count": 1
	},
	"锌护腿": {
		"type": "盔甲锻造台",
		"map": [
			["锌锭", "锌锭", "锌锭"],
			["锌锭", null, "锌锭"],
			["锌锭", null, "锌锭"]
		],
		"ingredients": [
			["锌锭", 7]
		],
		"count": 1
	},
	"锌靴子": {
		"type": "盔甲锻造台",
		"map": [
			[null, null, null],
			["锌锭", null, "锌锭"],
			["锌锭", null, "锌锭"]
		],
		"ingredients": [
			["锌锭", 4]
		],
		"count": 1
	},
	"镁剑": {
		"type": "增强型工作台",
		"map": [
			[null, "镁锭", null],
			[null, "镁锭", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["镁锭", 2],
			["木棍", 1]
		],
		"count": 1
	},
	"镁头盔": {
		"type": "盔甲锻造台",
		"map": [
			["镁锭", "镁锭", "镁锭"],
			["镁锭", null, "镁锭"],
			[null, null, null]
		],
		"ingredients": [
			["镁锭", 5]
		],
		"count": 1
	},
	"镁胸甲": {
		"type": "盔甲锻造台",
		"map": [
			["镁锭", null, "镁锭"],
			["镁锭", "镁锭", "镁锭"],
			["镁锭", "镁锭", "镁锭"]
		],
		"ingredients": [
			["镁锭", 8]
		],
		"count": 1
	},
	"镁护腿": {
		"type": "盔甲锻造台",
		"map": [
			["镁锭", "镁锭", "镁锭"],
			["镁锭", null, "镁锭"],
			["镁锭", null, "镁锭"]
		],
		"ingredients": [
			["镁锭", 7]
		],
		"count": 1
	},
	"镁靴子": {
		"type": "盔甲锻造台",
		"map": [
			[null, null, null],
			["镁锭", null, "镁锭"],
			["镁锭", null, "镁锭"]
		],
		"ingredients": [
			["镁锭", 4]
		],
		"count": 1
	},
	"钢剑": {
		"type": "增强型工作台",
		"map": [
			[null, "钢锭", null],
			[null, "钢锭", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["钢锭", 2],
			["木棍", 1]
		],
		"count": 1
	},
	"钢头盔": {
		"type": "盔甲锻造台",
		"map": [
			["钢锭", "钢锭", "钢锭"],
			["钢锭", null, "钢锭"],
			[null, null, null]
		],
		"ingredients": [
			["钢锭", 5]
		],
		"count": 1
	},
	"钢胸甲": {
		"type": "盔甲锻造台",
		"map": [
			["钢锭", null, "钢锭"],
			["钢锭", "钢锭", "钢锭"],
			["钢锭", "钢锭", "钢锭"]
		],
		"ingredients": [
			["钢锭", 8]
		],
		"count": 1
	},
	"钢护腿": {
		"type": "盔甲锻造台",
		"map": [
			["钢锭", "钢锭", "钢锭"],
			["钢锭", null, "钢锭"],
			["钢锭", null, "钢锭"]
		],
		"ingredients": [
			["钢锭", 7]
		],
		"count": 1
	},
	"钢靴子": {
		"type": "盔甲锻造台",
		"map": [
			[null, null, null],
			["钢锭", null, "钢锭"],
			["钢锭", null, "钢锭"]
		],
		"ingredients": [
			["钢锭", 4]
		],
		"count": 1
	},
	"青铜剑": {
		"type": "增强型工作台",
		"map": [
			[null, "青铜锭", null],
			[null, "青铜锭", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["青铜锭", 2],
			["木棍", 1]
		],
		"count": 1
	},
	"硬铝剑": {
		"type": "增强型工作台",
		"map": [
			[null, "硬铝锭", null],
			[null, "硬铝锭", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["硬铝锭", 2],
			["木棍", 1]
		],
		"count": 1
	},
	"银铜合金剑": {
		"type": "增强型工作台",
		"map": [
			[null, "银铜合金锭", null],
			[null, "银铜合金锭", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["银铜合金锭", 2],
			["木棍", 1]
		],
		"count": 1
	},
	"黄铜剑": {
		"type": "增强型工作台",
		"map": [
			[null, "黄铜锭", null],
			[null, "黄铜锭", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["黄铜锭", 2],
			["木棍", 1]
		],
		"count": 1
	},
	"铝黄铜剑": {
		"type": "增强型工作台",
		"map": [
			[null, "铝黄铜锭", null],
			[null, "铝黄铜锭", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["铝黄铜锭", 2],
			["木棍", 1]
		],
		"count": 1
	},
	"铝青铜剑": {
		"type": "增强型工作台",
		"map": [
			[null, "铝青铜锭", null],
			[null, "铝青铜锭", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["铝青铜锭", 2],
			["木棍", 1]
		],
		"count": 1
	},
	"科林斯青铜剑": {
		"type": "增强型工作台",
		"map": [
			[null, "科林斯青铜锭", null],
			[null, "科林斯青铜锭", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["科林斯青铜锭", 2],
			["木棍", 1]
		],
		"count": 1
	},
	"焊锡剑": {
		"type": "增强型工作台",
		"map": [
			[null, "焊锡锭", null],
			[null, "焊锡锭", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["焊锡锭", 2],
			["木棍", 1]
		],
		"count": 1
	},
	"大马士革钢剑": {
		"type": "增强型工作台",
		"map": [
			[null, "大马士革钢锭", null],
			[null, "大马士革钢锭", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["大马士革钢锭", 2],
			["木棍", 1]
		],
		"count": 1
	},
	"硬化金属剑": {
		"type": "增强型工作台",
		"map": [
			[null, "硬化金属", null],
			[null, "硬化金属", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["硬化金属", 2],
			["木棍", 1]
		],
		"count": 1
	},
	"强化合金剑": {
		"type": "增强型工作台",
		"map": [
			[null, "强化合金锭", null],
			[null, "强化合金锭", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["强化合金锭", 2],
			["木棍", 1]
		],
		"count": 1
	},
	"硅铁剑": {
		"type": "增强型工作台",
		"map": [
			[null, "硅铁", null],
			[null, "硅铁", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["硅铁", 2],
			["木棍", 1]
		],
		"count": 1
	},
	"镀金铁剑": {
		"type": "增强型工作台",
		"map": [
			[null, "镀金铁锭", null],
			[null, "镀金铁锭", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["镀金铁锭", 2],
			["木棍", 1]
		],
		"count": 1
	},
	"镍剑": {
		"type": "增强型工作台",
		"map": [
			[null, "镍锭", null],
			[null, "镍锭", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["镍锭", 2],
			["木棍", 1]
		],
		"count": 1
	},
	"钴剑": {
		"type": "增强型工作台",
		"map": [
			[null, "钴锭", null],
			[null, "钴锭", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["钴锭", 2],
			["木棍", 1]
		],
		"count": 1
	},
	"钴头盔": {
		"type": "盔甲锻造台",
		"map": [
			["钴锭", "钴锭", "钴锭"],
			["钴锭", null, "钴锭"],
			[null, null, null]
		],
		"ingredients": [
			["钴锭", 5]
		],
		"count": 1
	},
	"钴胸甲": {
		"type": "盔甲锻造台",
		"map": [
			["钴锭", null, "钴锭"],
			["钴锭", "钴锭", "钴锭"],
			["钴锭", "钴锭", "钴锭"]
		],
		"ingredients": [
			["钴锭", 8]
		],
		"count": 1
	},
	"钴护腿": {
		"type": "盔甲锻造台",
		"map": [
			["钴锭", "钴锭", "钴锭"],
			["钴锭", null, "钴锭"],
			["钴锭", null, "钴锭"]
		],
		"ingredients": [
			["钴锭", 7]
		],
		"count": 1
	},
	"钴靴子": {
		"type": "盔甲锻造台",
		"map": [
			[null, null, null],
			["钴锭", null, "钴锭"],
			["钴锭", null, "钴锭"]
		],
		"ingredients": [
			["钴锭", 4]
		],
		"count": 1
	},
	"生物模拟室": {
		"type": "增强型工作台",
		"map": [
			["磁钢板", "机器板块", "磁钢板"],
			["机器电路", "可编程式机器人 (屠夫)", "机器电路"],
			["磁钢板", "机器板块", "磁钢板"]
		],
		"ingredients": [
			["磁钢板", 4],
			["机器板块", 2],
			["机器电路", 2],
			["可编程式机器人 (屠夫)", 1]
		],
		"count": 1
	},
	"生物芯片注入器": {
		"type": "增强型工作台",
		"map": [
			["机器电路", "强化合金锭", "机器电路"],
			["强化合金锭", "机器核心", "强化合金锭"],
			["机器电路", "强化合金锭", "机器电路"]
		],
		"ingredients": [
			["机器电路", 4],
			["强化合金锭", 4],
			["机器核心", 1]
		],
		"count": 1
	},
	"空生物芯片": {
		"type": "增强型工作台",
		"map": [
			["镁锭", "机器电路", "镁锭"],
			["人造蓝宝石", "人造钻石", "人造绿宝石"],
			["镁锭", "机器电路", "镁锭"]
		],
		"ingredients": [
			["镁锭", 4],
			["机器电路", 2],
			["人造蓝宝石", 1],
			["人造钻石", 1],
			["人造绿宝石", 1]
		],
		"count": 1
	},
	"僵尸生物芯片": {
		"type": "模拟器合成机",
		"map": [
			["铁剑", "腐肉", "铁锹"],
			["铁锭", "空生物芯片", "铁锭"],
			["胡萝卜", "腐肉", "马铃薯"]
		],
		"ingredients": [
			["铁剑", 1],
			["腐肉", 2],
			["铁锹", 1],
			["铁锭", 2],
			["空生物芯片", 1],
			["胡萝卜", 1],
			["马铃薯", 1]
		],
		"count": 1
	},
	"史莱姆生物芯片": {
		"type": "模拟器合成机",
		"map": [
			["黏液块", "黄绿色染料", "黏液块"],
			["黄绿色染料", "空生物芯片", "黄绿色染料"],
			["黏液块", "黄绿色染料", "黏液块"]
		],
		"ingredients": [
			["黏液块", 4],
			["黄绿色染料", 4],
			["空生物芯片", 1]
		],
		"count": 1
	},
	"岩浆怪生物芯片": {
		"type": "模拟器合成机",
		"map": [
			["岩浆块", "岩浆膏", "岩浆块"],
			["黏液块", "空生物芯片", "黏液块"],
			["岩浆块", "岩浆膏", "岩浆块"]
		],
		"ingredients": [
			["岩浆块", 4],
			["岩浆膏", 2],
			["黏液块", 2],
			["空生物芯片", 1]
		],
		"count": 1
	},
	"牛生物芯片": {
		"type": "模拟器合成机",
		"map": [
			["皮革", "生牛肉", "皮革"],
			["牛排", "空生物芯片", "牛排"],
			["皮革", "生牛肉", "皮革"]
		],
		"ingredients": [
			["皮革", 4],
			["生牛肉", 2],
			["牛排", 2],
			["空生物芯片", 1]
		],
		"count": 1
	},
	"绵羊生物芯片": {
		"type": "模拟器合成机",
		"map": [
			["白色羊毛", "生羊肉", "白色羊毛"],
			["熟羊肉", "空生物芯片", "熟羊肉"],
			["白色羊毛", "生羊肉", "白色羊毛"]
		],
		"ingredients": [
			["白色羊毛", 4],
			["生羊肉", 2],
			["熟羊肉", 2],
			["空生物芯片", 1]
		],
		"count": 1
	},
	"蜘蛛生物芯片": {
		"type": "模拟器合成机",
		"map": [
			["蜘蛛网", "线", "蜘蛛网"],
			["蜘蛛眼", "空生物芯片", "蜘蛛眼"],
			["蜘蛛网", "线", "蜘蛛网"]
		],
		"ingredients": [
			["蜘蛛网", 4],
			["线", 2],
			["蜘蛛眼", 2],
			["空生物芯片", 1]
		],
		"count": 1
	},
	"骷髅生物芯片": {
		"type": "模拟器合成机",
		"map": [
			["皮革帽子", "骨头", "皮革帽子"],
			["箭", "空生物芯片", "箭"],
			["弓", "骨头", "弓"]
		],
		"ingredients": [
			["皮革帽子", 2],
			["骨头", 2],
			["箭", 2],
			["空生物芯片", 1],
			["弓", 2]
		],
		"count": 1
	},
	"凋灵骷髅生物芯片": {
		"type": "模拟器合成机",
		"map": [
			["凋灵骷髅头颅", "骨头", "凋灵骷髅头颅"],
			["煤炭块", "空生物芯片", "煤炭块"],
			["石剑", "骨头", "石剑"]
		],
		"ingredients": [
			["凋灵骷髅头颅", 2],
			["骨头", 2],
			["煤炭块", 2],
			["空生物芯片", 1],
			["石剑", 2]
		],
		"count": 1
	},
	"末影人生物芯片": {
		"type": "模拟器合成机",
		"map": [
			["末影之眼", "黑曜石", "末影之眼"],
			["末影珍珠", "空生物芯片", "末影珍珠"],
			["末影之眼", "黑曜石", "末影之眼"]
		],
		"ingredients": [
			["末影之眼", 4],
			["黑曜石", 2],
			["末影珍珠", 2],
			["空生物芯片", 1]
		],
		"count": 1
	},
	"苦力怕生物芯片": {
		"type": "模拟器合成机",
		"map": [
			["TNT", "绿色染料", "TNT"],
			["火药", "空生物芯片", "火药"],
			["TNT", "绿色染料", "TNT"]
		],
		"ingredients": [
			["TNT", 4],
			["绿色染料", 2],
			["火药", 2],
			["空生物芯片", 1]
		],
		"count": 1
	},
	"守卫者生物芯片": {
		"type": "模拟器合成机",
		"map": [
			["生鳕鱼", "海晶碎片", "海晶砂粒"],
			["海绵", "空生物芯片", "河豚"],
			["海晶砂粒", "海晶碎片", "熟鳕鱼"]
		],
		"ingredients": [
			["生鳕鱼", 1],
			["海晶碎片", 2],
			["海晶砂粒", 2],
			["海绵", 1],
			["空生物芯片", 1],
			["河豚", 1],
			["熟鳕鱼", 1]
		],
		"count": 1
	},
	"鸡生物芯片": {
		"type": "模拟器合成机",
		"map": [
			["生鸡肉", "羽毛", "熟鸡肉"],
			["鸡蛋", "空生物芯片", "鸡蛋"],
			["熟鸡肉", "羽毛", "生鸡肉"]
		],
		"ingredients": [
			["生鸡肉", 2],
			["羽毛", 2],
			["熟鸡肉", 2],
			["鸡蛋", 2],
			["空生物芯片", 1]
		],
		"count": 1
	},
	"铁傀儡生物芯片": {
		"type": "模拟器合成机",
		"map": [
			["铁块", "南瓜", "铁块"],
			["虞美人", "空生物芯片", "虞美人"],
			["铁块", "南瓜", "铁块"]
		],
		"ingredients": [
			["铁块", 4],
			["南瓜", 2],
			["虞美人", 2],
			["空生物芯片", 1]
		],
		"count": 1
	},
	"烈焰人生物芯片": {
		"type": "模拟器合成机",
		"map": [
			["岩浆块", "烈焰棒", "岩浆块"],
			["烈焰棒", "空生物芯片", "烈焰棒"],
			["岩浆块", "烈焰棒", "岩浆块"]
		],
		"ingredients": [
			["岩浆块", 4],
			["烈焰棒", 4],
			["空生物芯片", 1]
		],
		"count": 1
	},
	"凋灵生物芯片": {
		"type": "模拟器合成机",
		"map": [
			["凋灵骷髅头颅", "凋灵骷髅头颅", "凋灵骷髅头颅"],
			["防凋灵黑曜石", "空生物芯片", "防凋灵黑曜石"],
			["虚空锭", "凋灵装配机", "虚空锭"]
		],
		"ingredients": [
			["凋灵骷髅头颅", 3],
			["防凋灵黑曜石", 2],
			["空生物芯片", 1],
			["虚空锭", 2],
			["凋灵装配机", 1]
		],
		"count": 1
	},
	"末影龙生物芯片": {
		"type": "模拟器合成机",
		"map": [
			["末影水晶", "虚空锭", "紫颂花"],
			["鞘翅 (经验修补)", "空生物芯片", "龙首"],
			["末影结晶 - III", "虚空锭", "龙息"]
		],
		"ingredients": [
			["末影水晶", 1],
			["虚空锭", 2],
			["紫颂花", 1],
			["鞘翅 (经验修补)", 1],
			["空生物芯片", 1],
			["龙首", 1],
			["末影结晶 - III", 1],
			["龙息", 1]
		],
		"count": 1
	},
	"蜜蜂生物芯片": {
		"type": "模拟器合成机",
		"map": [
			["蜜脾块", "蜂蜜块", "蜜脾块"],
			["蜂蜜块", "空生物芯片", "蜂蜜块"],
			["蜜脾块", "蜂蜜块", "蜜脾块"]
		],
		"ingredients": [
			["蜜脾块", 4],
			["蜂蜜块", 4],
			["空生物芯片", 1]
		],
		"count": 1
	},
	"村民生物芯片": {
		"type": "模拟器合成机",
		"map": [
			["绿宝石", "马铃薯", "绿宝石"],
			["胡萝卜", "空生物芯片", "小麦"],
			["绿宝石", "南瓜", "绿宝石"]
		],
		"ingredients": [
			["绿宝石", 4],
			["马铃薯", 1],
			["胡萝卜", 1],
			["空生物芯片", 1],
			["小麦", 1],
			["南瓜", 1]
		],
		"count": 1
	},
	"女巫生物芯片": {
		"type": "模拟器合成机",
		"map": [
			["红石块", "玻璃", "糖"],
			["荧石", "空生物芯片", "荧石"],
			["糖", "玻璃", "红石块"]
		],
		"ingredients": [
			["红石块", 2],
			["玻璃", 2],
			["糖", 2],
			["荧石", 2],
			["空生物芯片", 1]
		],
		"count": 1
	},
	"末地精华": {
		"type": "自然资源开采机",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"一重压缩圆石": {
		"type": "增强型工作台",
		"map": [
			["圆石", "圆石", "圆石"],
			["圆石", "圆石", "圆石"],
			["圆石", "圆石", "圆石"]
		],
		"ingredients": [
			["圆石", 9]
		],
		"count": 1
	},
	"双重压缩圆石": {
		"type": "增强型工作台",
		"map": [
			["一重压缩圆石", "一重压缩圆石", "一重压缩圆石"],
			["一重压缩圆石", "一重压缩圆石", "一重压缩圆石"],
			["一重压缩圆石", "一重压缩圆石", "一重压缩圆石"]
		],
		"ingredients": [
			["一重压缩圆石", 9]
		],
		"count": 1
	},
	"三重压缩圆石": {
		"type": "增强型工作台",
		"map": [
			["双重压缩圆石", "双重压缩圆石", "双重压缩圆石"],
			["双重压缩圆石", "双重压缩圆石", "双重压缩圆石"],
			["双重压缩圆石", "双重压缩圆石", "双重压缩圆石"]
		],
		"ingredients": [
			["双重压缩圆石", 9]
		],
		"count": 1
	},
	"四重压缩圆石": {
		"type": "增强型工作台",
		"map": [
			["三重压缩圆石", "三重压缩圆石", "三重压缩圆石"],
			["三重压缩圆石", "三重压缩圆石", "三重压缩圆石"],
			["三重压缩圆石", "三重压缩圆石", "三重压缩圆石"]
		],
		"ingredients": [
			["三重压缩圆石", 9]
		],
		"count": 1
	},
	"五重压缩圆石": {
		"type": "增强型工作台",
		"map": [
			["四重压缩圆石", "四重压缩圆石", "四重压缩圆石"],
			["四重压缩圆石", "四重压缩圆石", "四重压缩圆石"],
			["四重压缩圆石", "四重压缩圆石", "四重压缩圆石"]
		],
		"ingredients": [
			["四重压缩圆石", 9]
		],
		"count": 1
	},
	"虚空粉尘": {
		"type": "增强型工作台",
		"map": [
			["虚空粒", "虚空粒", "虚空粒"],
			["虚空粒", "虚空粒", "虚空粒"],
			["虚空粒", "虚空粒", "虚空粒"]
		],
		"ingredients": [
			["虚空粒", 9]
		],
		"count": 1
	},
	"虚空锭": {
		"type": "增强型工作台",
		"map": [
			["虚空粉尘", "虚空粉尘", "虚空粉尘"],
			["虚空粉尘", "虚空粉尘", "虚空粉尘"],
			["虚空粉尘", "虚空粉尘", "虚空粉尘"]
		],
		"ingredients": [
			["虚空粉尘", 9]
		],
		"count": 1
	},
	"无尽锭": {
		"type": "冶炼炉",
		"map": [
			["地球奇点", "秘银", "时运奇点"],
			["魔法奇点", "虚空锭", "金属奇点"],
			[null, null, null]
		],
		"ingredients": [
			["地球奇点", 1],
			["秘银", 1],
			["时运奇点", 1],
			["魔法奇点", 1],
			["虚空锭", 1],
			["金属奇点", 1]
		],
		"count": 1
	},
	"时运奇点": {
		"type": "冶炼炉",
		"map": [
			["金奇点", "钻石奇点", "绿宝石奇点"],
			["下界合金奇点", "精金", null],
			[null, null, null]
		],
		"ingredients": [
			["金奇点", 1],
			["钻石奇点", 1],
			["绿宝石奇点", 1],
			["下界合金奇点", 1],
			["精金", 1]
		],
		"count": 1
	},
	"魔法奇点": {
		"type": "冶炼炉",
		"map": [
			["红石奇点", "青金石奇点", "石英奇点"],
			["镁奇点", "磁金", null],
			[null, null, null]
		],
		"ingredients": [
			["红石奇点", 1],
			["青金石奇点", 1],
			["石英奇点", 1],
			["镁奇点", 1],
			["磁金", 1]
		],
		"count": 1
	},
	"地球奇点": {
		"type": "冶炼炉",
		"map": [
			["四重压缩圆石", "煤炭奇点", "铁奇点"],
			["铜奇点", "铅奇点", null],
			[null, null, null]
		],
		"ingredients": [
			["四重压缩圆石", 1],
			["煤炭奇点", 1],
			["铁奇点", 1],
			["铜奇点", 1],
			["铅奇点", 1]
		],
		"count": 1
	},
	"金属奇点": {
		"type": "冶炼炉",
		"map": [
			["银奇点", "铝奇点", "锡奇点"],
			["锌奇点", "钛", null],
			[null, null, null]
		],
		"ingredients": [
			["银奇点", 1],
			["铝奇点", 1],
			["锡奇点", 1],
			["锌奇点", 1],
			["钛", 1]
		],
		"count": 1
	},
	"磁钢": {
		"type": "冶炼炉",
		"map": [
			["镁锭", "钢锭", "镁"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["镁锭", 1],
			["钢锭", 1],
			["镁", 1]
		],
		"count": 1
	},
	"钛": {
		"type": "冶炼炉",
		"map": [
			["强化合金锭", "大马士革钢锭", "硬化金属"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["强化合金锭", 1],
			["大马士革钢锭", 1],
			["硬化金属", 1]
		],
		"count": 1
	},
	"秘银": {
		"type": "冶炼炉",
		"map": [
			["强化合金锭", "铁奇点", "硬化金属"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["强化合金锭", 1],
			["铁奇点", 1],
			["硬化金属", 1]
		],
		"count": 1
	},
	"精金": {
		"type": "冶炼炉",
		"map": [
			["红石合金锭", "钻石奇点", "磁钢"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["红石合金锭", 1],
			["钻石奇点", 1],
			["磁钢", 1]
		],
		"count": 1
	},
	"磁金": {
		"type": "冶炼炉",
		"map": [
			["磁钢", "镁奇点", "末地精华"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["磁钢", 1],
			["镁奇点", 1],
			["末地精华", 1]
		],
		"count": 1
	},
	"虚空粒": {
		"type": "虚空微粒发生器",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"磁钢板": {
		"type": "增强型工作台",
		"map": [
			["磁钢", "磁钢", "磁钢"],
			["磁钢", "硬化金属", "磁钢"],
			["磁钢", "磁钢", "磁钢"]
		],
		"ingredients": [
			["磁钢", 8],
			["硬化金属", 1]
		],
		"count": 1
	},
	"机器电路": {
		"type": "增强型工作台",
		"map": [
			["铜锭", "电磁铁", "铜锭"],
			["铜锭", "硅", "铜锭"],
			["铜锭", "电磁铁", "铜锭"]
		],
		"ingredients": [
			["铜锭", 6],
			["电磁铁", 2],
			["硅", 1]
		],
		"count": 1
	},
	"基础滤网": {
		"type": "增强型工作台",
		"map": [
			["木棍", "线", "木棍"],
			["线", "木棍", "线"],
			["木棍", "线", "木棍"]
		],
		"ingredients": [
			["木棍", 5],
			["线", 4]
		],
		"count": 1
	},
	"高级滤网": {
		"type": "增强型工作台",
		"map": [
			["磁钢", "线", "磁钢"],
			["线", "基础滤网", "线"],
			["磁钢", "线", "磁钢"]
		],
		"ingredients": [
			["磁钢", 4],
			["线", 4],
			["基础滤网", 1]
		],
		"count": 1
	},
	"强化合金滤网": {
		"type": "增强型工作台",
		"map": [
			["强化合金锭", "线", "强化合金锭"],
			["线", "高级滤网", "线"],
			["强化合金锭", "线", "强化合金锭"]
		],
		"ingredients": [
			["强化合金锭", 4],
			["线", 4],
			["高级滤网", 1]
		],
		"count": 1
	},
	"机器核心": {
		"type": "增强型工作台",
		"map": [
			["钛", "机器电路", "钛"],
			["机器电路", "机器板块", "机器电路"],
			["钛", "机器电路", "钛"]
		],
		"ingredients": [
			["钛", 4],
			["机器电路", 4],
			["机器板块", 1]
		],
		"count": 1
	},
	"机器板块": {
		"type": "增强型工作台",
		"map": [
			["强化合金锭", "钢筋板", "强化合金锭"],
			["磁钢板", "钛", "磁钢板"],
			["强化合金锭", "钢筋板", "强化合金锭"]
		],
		"ingredients": [
			["强化合金锭", 4],
			["钢筋板", 2],
			["磁钢板", 2],
			["钛", 1]
		],
		"count": 1
	},
	"无尽晶格": {
		"type": "无尽工作台",
		"map": [
			["机器电路", "无尽锭", "机器电路"],
			["机器电路", "无尽锭", "机器电路"],
			["虚空锭", "机器电路", "虚空锭"]
		],
		"ingredients": [
			["机器电路", 5],
			["无尽锭", 2],
			["虚空锭", 2]
		],
		"count": 1
	},
	"无尽机械核心": {
		"type": "无尽工作台",
		"map": [
			["机器板块", "机器核心", "无尽锭"],
			["无尽锭", "机器核心", "机器板块"],
			["机器核心", "机器板块", "机器电路"]
		],
		"ingredients": [
			["机器板块", 3],
			["机器核心", 3],
			["无尽锭", 2],
			["机器电路", 1]
		],
		"count": 1
	},
	"铜奇点": {
		"type": "奇点构造机",
		"map": [
			["铜锭", "铜锭", "铜锭"],
			["铜锭", "铜锭", "铜锭"],
			["铜锭", "铜锭", "铜锭"]
		],
		"ingredients": [
			["铜锭", 9]
		],
		"count": 1
	},
	"锌奇点": {
		"type": "奇点构造机",
		"map": [
			["锌锭", "锌锭", "锌锭"],
			["锌锭", "锌锭", "锌锭"],
			["锌锭", "锌锭", "锌锭"]
		],
		"ingredients": [
			["锌锭", 9]
		],
		"count": 1
	},
	"锡奇点": {
		"type": "奇点构造机",
		"map": [
			["锡锭", "锡锭", "锡锭"],
			["锡锭", "锡锭", "锡锭"],
			["锡锭", "锡锭", "锡锭"]
		],
		"ingredients": [
			["锡锭", 9]
		],
		"count": 1
	},
	"铝奇点": {
		"type": "奇点构造机",
		"map": [
			["铝锭", "铝锭", "铝锭"],
			["铝锭", "铝锭", "铝锭"],
			["铝锭", "铝锭", "铝锭"]
		],
		"ingredients": [
			["铝锭", 9]
		],
		"count": 1
	},
	"银奇点": {
		"type": "奇点构造机",
		"map": [
			["银锭", "银锭", "银锭"],
			["银锭", "银锭", "银锭"],
			["银锭", "银锭", "银锭"]
		],
		"ingredients": [
			["银锭", 9]
		],
		"count": 1
	},
	"镁奇点": {
		"type": "奇点构造机",
		"map": [
			["镁锭", "镁锭", "镁锭"],
			["镁锭", "镁锭", "镁锭"],
			["镁锭", "镁锭", "镁锭"]
		],
		"ingredients": [
			["镁锭", 9]
		],
		"count": 1
	},
	"铅奇点": {
		"type": "奇点构造机",
		"map": [
			["铅锭", "铅锭", "铅锭"],
			["铅锭", "铅锭", "铅锭"],
			["铅锭", "铅锭", "铅锭"]
		],
		"ingredients": [
			["铅锭", 9]
		],
		"count": 1
	},
	"金奇点": {
		"type": "奇点构造机",
		"map": [
			["金锭", "金锭", "金锭"],
			["金锭", "金锭", "金锭"],
			["金锭", "金锭", "金锭"]
		],
		"ingredients": [
			["金锭", 9]
		],
		"count": 1
	},
	"铁奇点": {
		"type": "奇点构造机",
		"map": [
			["铁锭", "铁锭", "铁锭"],
			["铁锭", "铁锭", "铁锭"],
			["铁锭", "铁锭", "铁锭"]
		],
		"ingredients": [
			["铁锭", 9]
		],
		"count": 1
	},
	"钻石奇点": {
		"type": "奇点构造机",
		"map": [
			["钻石", "钻石", "钻石"],
			["钻石", "钻石", "钻石"],
			["钻石", "钻石", null]
		],
		"ingredients": [
			["钻石", 8]
		],
		"count": 1
	},
	"绿宝石奇点": {
		"type": "奇点构造机",
		"map": [
			["绿宝石", "绿宝石", "绿宝石"],
			["绿宝石", "绿宝石", "绿宝石"],
			["绿宝石", "绿宝石", null]
		],
		"ingredients": [
			["绿宝石", 8]
		],
		"count": 1
	},
	"下界合金奇点": {
		"type": "奇点构造机",
		"map": [
			["下界合金锭", "下界合金锭", "下界合金锭"],
			["下界合金锭", null, null],
			[null, null, null]
		],
		"ingredients": [
			["下界合金锭", 4]
		],
		"count": 1
	},
	"煤炭奇点": {
		"type": "奇点构造机",
		"map": [
			["煤炭", "煤炭", "煤炭"],
			["煤炭", "煤炭", "煤炭"],
			["煤炭", "煤炭", "煤炭"]
		],
		"ingredients": [
			["煤炭", 9]
		],
		"count": 1
	},
	"红石奇点": {
		"type": "奇点构造机",
		"map": [
			["红石粉", "红石粉", "红石粉"],
			["红石粉", "红石粉", "红石粉"],
			["红石粉", "红石粉", "红石粉"]
		],
		"ingredients": [
			["红石粉", 9]
		],
		"count": 1
	},
	"青金石奇点": {
		"type": "奇点构造机",
		"map": [
			["青金石", "青金石", "青金石"],
			["青金石", "青金石", "青金石"],
			["青金石", "青金石", "青金石"]
		],
		"ingredients": [
			["青金石", 9]
		],
		"count": 1
	},
	"石英奇点": {
		"type": "奇点构造机",
		"map": [
			["下界石英", "下界石英", "下界石英"],
			["下界石英", "下界石英", "下界石英"],
			["下界石英", "下界石英", "下界石英"]
		],
		"ingredients": [
			["下界石英", 9]
		],
		"count": 1
	},
	"无尽奇点": {
		"type": "奇点构造机",
		"map": [
			["无尽锭", "无尽锭", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["无尽锭", 2]
		],
		"count": 1
	},
	"虚空收集者": {
		"type": "增强型工作台",
		"map": [
			["钛", "钛", "钛"],
			["机器板块", "自然资源开采机", "机器板块"],
			["机器电路", "机器核心", "机器电路"]
		],
		"ingredients": [
			["钛", 3],
			["机器板块", 2],
			["自然资源开采机", 1],
			["机器电路", 2],
			["机器核心", 1]
		],
		"count": 1
	},
	"无尽虚空收集者": {
		"type": "无尽工作台",
		"map": [
			["机器板块", "机器板块", "机器板块"],
			["机器板块", "机器板块", "机器板块"],
			["磁金", "虚空锭", "虚空锭"]
		],
		"ingredients": [
			["机器板块", 6],
			["磁金", 1],
			["虚空锭", 2]
		],
		"count": 1
	},
	"石材厂": {
		"type": "增强型工作台",
		"map": [
			["磁钢板", "基础圆石生成器", "磁钢板"],
			["电炉 - III", "机器电路", "电力碎矿机"],
			["磁钢板", "压缩机", "磁钢板"]
		],
		"ingredients": [
			["磁钢板", 4],
			["基础圆石生成器", 1],
			["电炉 - III", 1],
			["机器电路", 1],
			["电力碎矿机", 1],
			["压缩机", 1]
		],
		"count": 1
	},
	"奇点构造机": {
		"type": "增强型工作台",
		"map": [
			["磁钢", "磁钢", "磁钢"],
			["机器板块", "碳压机 - III", "机器板块"],
			["机器电路", "机器核心", "机器电路"]
		],
		"ingredients": [
			["磁钢", 3],
			["机器板块", 2],
			["碳压机 - III", 1],
			["机器电路", 2],
			["机器核心", 1]
		],
		"count": 1
	},
	"无尽奇点构造机": {
		"type": "无尽工作台",
		"map": [
			[null, "机器板块", "机器板块"],
			["机器板块", "机器板块", null],
			[null, "虚空锭", "无尽晶格"]
		],
		"ingredients": [
			["机器板块", 4],
			["虚空锭", 1],
			["无尽晶格", 1]
		],
		"count": 1
	},
	"资源合成器": {
		"type": "增强型工作台",
		"map": [
			["精金", "精金", "精金"],
			["机器板块", "强化合金熔炉", "机器板块"],
			["机器板块", "机器核心", "机器板块"]
		],
		"ingredients": [
			["精金", 3],
			["机器板块", 4],
			["强化合金熔炉", 1],
			["机器核心", 1]
		],
		"count": 1
	},
	"充能基岩": {
		"type": "无尽工作台",
		"map": [
			["五重压缩圆石", "五重压缩圆石", "五重压缩圆石"],
			["五重压缩圆石", "五重压缩圆石", "五重压缩圆石"],
			["五重压缩圆石", "机器板块", "虚空锭"]
		],
		"ingredients": [
			["五重压缩圆石", 7],
			["机器板块", 1],
			["虚空锭", 1]
		],
		"count": 1
	},
	"基础圆石生成器": {
		"type": "增强型工作台",
		"map": [
			["磁钢", "钻石镐", "磁钢"],
			["水桶", "双重压缩圆石", "熔岩桶"],
			["磁钢", "机器电路", "磁钢"]
		],
		"ingredients": [
			["磁钢", 4],
			["钻石镐", 1],
			["水桶", 1],
			["双重压缩圆石", 1],
			["熔岩桶", 1],
			["机器电路", 1]
		],
		"count": 1
	},
	"高级圆石生成器": {
		"type": "增强型工作台",
		"map": [
			["磁钢板", "基础圆石生成器", "磁钢板"],
			["水桶", "三重压缩圆石", "熔岩桶"],
			["机器电路", "基础圆石生成器", "机器电路"]
		],
		"ingredients": [
			["磁钢板", 2],
			["基础圆石生成器", 2],
			["水桶", 1],
			["三重压缩圆石", 1],
			["熔岩桶", 1],
			["机器电路", 2]
		],
		"count": 1
	},
	"无尽圆石生成器": {
		"type": "无尽工作台",
		"map": [
			["虚空锭", "虚空锭", "虚空锭"],
			["虚空锭", "虚空锭", "虚空锭"],
			["虚空锭", "高级圆石生成器", "高级圆石生成器"]
		],
		"ingredients": [
			["虚空锭", 7],
			["高级圆石生成器", 2]
		],
		"count": 1
	},
	"黑曜石生成器": {
		"type": "增强型工作台",
		"map": [
			["流体泵", "可编程式机器人 (矿工)", "流体泵"],
			["发射器", "虚空锭", "发射器"],
			["机器电路", "高级圆石生成器", "机器电路"]
		],
		"ingredients": [
			["流体泵", 2],
			["可编程式机器人 (矿工)", 1],
			["发射器", 2],
			["虚空锭", 1],
			["机器电路", 2],
			["高级圆石生成器", 1]
		],
		"count": 1
	},
	"基础自动农场": {
		"type": "增强型工作台",
		"map": [
			["玻璃", "玻璃", "玻璃"],
			["磁钢", "钻石锄", "磁钢"],
			["机器电路", "草方块", "机器电路"]
		],
		"ingredients": [
			["玻璃", 3],
			["磁钢", 2],
			["钻石锄", 1],
			["机器电路", 2],
			["草方块", 1]
		],
		"count": 1
	},
	"高级自动农场": {
		"type": "增强型工作台",
		"map": [
			["钢化玻璃", "钢化玻璃", "钢化玻璃"],
			["磁金", "基础自动农场", "磁金"],
			["机器电路", "机器核心", "机器电路"]
		],
		"ingredients": [
			["钢化玻璃", 3],
			["磁金", 2],
			["基础自动农场", 1],
			["机器电路", 2],
			["机器核心", 1]
		],
		"count": 1
	},
	"无尽自动农场": {
		"type": "无尽工作台",
		"map": [
			["玻璃", "玻璃", "玻璃"],
			["玻璃", "玻璃", "玻璃"],
			["玻璃", null, null]
		],
		"ingredients": [
			["玻璃", 7]
		],
		"count": 1
	},
	"基础自动植树机": {
		"type": "增强型工作台",
		"map": [
			["玻璃", "玻璃", "玻璃"],
			["磁钢", "灰化土", "磁钢"],
			["机器电路", "基础自动农场", "机器电路"]
		],
		"ingredients": [
			["玻璃", 3],
			["磁钢", 2],
			["灰化土", 1],
			["机器电路", 2],
			["基础自动农场", 1]
		],
		"count": 1
	},
	"高级自动植树机": {
		"type": "增强型工作台",
		"map": [
			["钢化玻璃", "钢化玻璃", "钢化玻璃"],
			["磁金", "基础自动植树机", "磁金"],
			["机器电路", "机器核心", "机器电路"]
		],
		"ingredients": [
			["钢化玻璃", 3],
			["磁金", 2],
			["基础自动植树机", 1],
			["机器电路", 2],
			["机器核心", 1]
		],
		"count": 1
	},
	"无尽自动植树机": {
		"type": "无尽工作台",
		"map": [
			["玻璃", "玻璃", "玻璃"],
			["玻璃", "玻璃", "玻璃"],
			["玻璃", "树木生长加速器", null]
		],
		"ingredients": [
			["玻璃", 7],
			["树木生长加速器", 1]
		],
		"count": 1
	},
	"极寒冰柜": {
		"type": "增强型工作台",
		"map": [
			["冰箱 (II)", "冰箱 (II)", "冰箱 (II)"],
			["水桶", "流体泵", "水桶"],
			["机器电路", "机器核心", "机器电路"]
		],
		"ingredients": [
			["冰箱 (II)", 3],
			["水桶", 2],
			["流体泵", 1],
			["机器电路", 2],
			["机器核心", 1]
		],
		"count": 1
	},
	"磨粉机": {
		"type": "增强型工作台",
		"map": [
			["电力碎矿机 (II)", "电动淘金机 (III)", "电动洗矿机 (III)"],
			["电力碎矿机 (II)", "电动淘金机 (III)", "电动洗矿机 (III)"],
			["机器电路", "机器核心", "机器电路"]
		],
		"ingredients": [
			["电力碎矿机 (II)", 2],
			["电动淘金机 (III)", 2],
			["电动洗矿机 (III)", 2],
			["机器电路", 2],
			["机器核心", 1]
		],
		"count": 1
	},
	"无尽磨粉机": {
		"type": "无尽工作台",
		"map": [
			["虚空锭", "虚空锭", "虚空锭"],
			["虚空锭", "虚空锭", "虚空锭"],
			["虚空锭", "无尽锭", "无尽晶格"]
		],
		"ingredients": [
			["虚空锭", 7],
			["无尽锭", 1],
			["无尽晶格", 1]
		],
		"count": 1
	},
	"圆石压缩机": {
		"type": "增强型工作台",
		"map": [
			["机器板块", "三重压缩圆石", "机器板块"],
			["压缩机 - II", "压缩机 - II", "压缩机 - II"],
			["机器板块", "三重压缩圆石", "机器板块"]
		],
		"ingredients": [
			["机器板块", 4],
			["三重压缩圆石", 2],
			["压缩机 - II", 3]
		],
		"count": 1
	},
	"铸锭机": {
		"type": "增强型工作台",
		"map": [
			["电动铸锭机 (II)", "电动铸锭机 (II)", "电动铸锭机 (II)"],
			["电动铸锭机 (II)", "电动铸锭机 (II)", "电动铸锭机 (II)"],
			["机器电路", "机器核心", "机器电路"]
		],
		"ingredients": [
			["电动铸锭机 (II)", 6],
			["机器电路", 2],
			["机器核心", 1]
		],
		"count": 1
	},
	"无尽铸锭机": {
		"type": "无尽工作台",
		"map": [
			["虚空锭", "虚空锭", "虚空锭"],
			["虚空锭", "虚空锭", "虚空锭"],
			["虚空锭", "无尽锭", "无尽晶格"]
		],
		"ingredients": [
			["虚空锭", 7],
			["无尽锭", 1],
			["无尽晶格", 1]
		],
		"count": 1
	},
	"铀提取器": {
		"type": "增强型工作台",
		"map": [
			["电力碎矿机 (II)", "电力碎矿机 (II)", "电力碎矿机 (II)"],
			["电动淘金机 (III)", "电动洗矿机 (III)", "自动合成机 (高级)"],
			["机器电路", "机器核心", "机器电路"]
		],
		"ingredients": [
			["电力碎矿机 (II)", 3],
			["电动淘金机 (III)", 1],
			["电动洗矿机 (III)", 1],
			["自动合成机 (高级)", 1],
			["机器电路", 2],
			["机器核心", 1]
		],
		"count": 1
	},
	"分解机": {
		"type": "增强型工作台",
		"map": [
			["磁钢板", "磁钢板", "磁钢板"],
			["黏性活塞", "压缩机 - II", "黏性活塞"],
			["机器电路", "机器核心", "机器电路"]
		],
		"ingredients": [
			["磁钢板", 3],
			["黏性活塞", 2],
			["压缩机 - II", 1],
			["机器电路", 2],
			["机器核心", 1]
		],
		"count": 1
	},
	"装备材质转换器": {
		"type": "增强型工作台",
		"map": [
			["磁钢板", "机器电路", "磁钢板"],
			["机器电路", "锻造台", "机器电路"],
			["磁钢板", "机器电路", "磁钢板"]
		],
		"ingredients": [
			["磁钢板", 4],
			["机器电路", 4],
			["锻造台", 1]
		],
		"count": 1
	},
	"地理资源矿机": {
		"type": "增强型工作台",
		"map": [
			["机器板块", "虚空锭", "机器板块"],
			["虚空锭", "高级GEO矿机", "虚空锭"],
			["机器板块", "虚空锭", "机器板块"]
		],
		"ingredients": [
			["机器板块", 4],
			["虚空锭", 4],
			["高级GEO矿机", 1]
		],
		"count": 1
	},
	"混凝土浇筑机": {
		"type": "增强型工作台",
		"map": [
			["虚空锭", "虚空粉尘", "虚空锭"],
			["虚空锭", "流体泵", "虚空锭"],
			["自动烘干机", "大型储能电容", "自动烘干机"]
		],
		"ingredients": [
			["虚空锭", 4],
			["虚空粉尘", 1],
			["流体泵", 1],
			["自动烘干机", 2],
			["大型储能电容", 1]
		],
		"count": 1
	},
	"红石粉 生产加速器": {
		"type": "增强型工作台",
		"map": [
			["机器板块", "起泡锭", "机器板块"],
			["起泡锭", "红石粉", "起泡锭"],
			["机器板块", "起泡锭", "机器板块"]
		],
		"ingredients": [
			["机器板块", 4],
			["起泡锭", 4],
			["红石粉", 1]
		],
		"count": 1
	},
	"青金石 生产加速器": {
		"type": "增强型工作台",
		"map": [
			["机器板块", "起泡锭", "机器板块"],
			["起泡锭", "青金石", "起泡锭"],
			["机器板块", "起泡锭", "机器板块"]
		],
		"ingredients": [
			["机器板块", 4],
			["起泡锭", 4],
			["青金石", 1]
		],
		"count": 1
	},
	"绿宝石 生产加速器": {
		"type": "增强型工作台",
		"map": [
			["机器板块", "起泡锭", "机器板块"],
			["起泡锭", "绿宝石", "起泡锭"],
			["机器板块", "起泡锭", "机器板块"]
		],
		"ingredients": [
			["机器板块", 4],
			["起泡锭", 4],
			["绿宝石", 1]
		],
		"count": 1
	},
	"钻石 生产加速器": {
		"type": "增强型工作台",
		"map": [
			["机器板块", "起泡锭", "机器板块"],
			["起泡锭", "钻石", "起泡锭"],
			["机器板块", "起泡锭", "机器板块"]
		],
		"ingredients": [
			["机器板块", 4],
			["起泡锭", 4],
			["钻石", 1]
		],
		"count": 1
	},
	"基础矿机": {
		"type": "增强型工作台",
		"map": [
			["磁钢板", "黑金刚石镶边储能电容", "磁钢板"],
			["铁镐", "自然资源开采机", "铁镐"],
			["机器电路", "机器核心", "机器电路"]
		],
		"ingredients": [
			["磁钢板", 2],
			["黑金刚石镶边储能电容", 1],
			["铁镐", 2],
			["自然资源开采机", 1],
			["机器电路", 2],
			["机器核心", 1]
		],
		"count": 1
	},
	"下界石英 生产加速器": {
		"type": "增强型工作台",
		"map": [
			["机器板块", "起泡锭", "机器板块"],
			["起泡锭", "下界石英", "起泡锭"],
			["机器板块", "起泡锭", "机器板块"]
		],
		"ingredients": [
			["机器板块", 4],
			["起泡锭", 4],
			["下界石英", 1]
		],
		"count": 1
	},
	"高级矿机": {
		"type": "增强型工作台",
		"map": [
			["机器板块", "终极储能电容", "机器板块"],
			["钻石镐", "基础矿机", "钻石镐"],
			["机器电路", "机器核心", "机器电路"]
		],
		"ingredients": [
			["机器板块", 2],
			["终极储能电容", 1],
			["钻石镐", 2],
			["基础矿机", 1],
			["机器电路", 2],
			["机器核心", 1]
		],
		"count": 1
	},
	"虚空矿机": {
		"type": "增强型工作台",
		"map": [
			["虚空锭", "虚空电容", "虚空锭"],
			["下界合金镐", "高级矿机", "下界合金镐"],
			["机器电路", "机器核心", "机器电路"]
		],
		"ingredients": [
			["虚空锭", 2],
			["虚空电容", 1],
			["下界合金镐", 2],
			["高级矿机", 1],
			["机器电路", 2],
			["机器核心", 1]
		],
		"count": 1
	},
	"无尽矿机": {
		"type": "无尽工作台",
		"map": [
			[null, "机器板块", "机器板块"],
			["机器板块", "机器板块", null],
			["机器板块", "世界崩解之镐", "无尽晶格"]
		],
		"ingredients": [
			["机器板块", 5],
			["世界崩解之镐", 1],
			["无尽晶格", 1]
		],
		"count": 1
	},
	"末影之焰": {
		"type": "魔法工作台",
		"map": [
			["末地精华", "末地精华", "末地精华"],
			["末地精华", "书", "末地精华"],
			["末地精华", "末地精华", "末地精华"]
		],
		"ingredients": [
			["末地精华", 8],
			["书", 1]
		],
		"count": 1
	},
	"无尽头盔": {
		"type": "无尽工作台",
		"map": [
			[null, "无尽锭", "无尽锭"],
			["无尽锭", "无尽锭", null],
			["无尽锭", "无尽锭", "无尽锭"]
		],
		"ingredients": [
			["无尽锭", 7]
		],
		"count": 1
	},
	"无尽胸甲": {
		"type": "无尽工作台",
		"map": [
			[null, "无尽锭", null],
			[null, "无尽锭", null],
			["无尽锭", "虚空锭", "无尽锭"]
		],
		"ingredients": [
			["无尽锭", 4],
			["虚空锭", 1]
		],
		"count": 1
	},
	"无尽护腿": {
		"type": "无尽工作台",
		"map": [
			[null, "无尽锭", "无尽锭"],
			["无尽锭", "无尽锭", null],
			["无尽锭", "无尽锭", "无尽锭"]
		],
		"ingredients": [
			["无尽锭", 7]
		],
		"count": 1
	},
	"无尽靴子": {
		"type": "无尽工作台",
		"map": [
			[null, null, null],
			[null, null, null],
			["无尽锭", "无尽锭", null]
		],
		"ingredients": [
			["无尽锭", 2]
		],
		"count": 1
	},
	"宇宙神盾": {
		"type": "无尽工作台",
		"map": [
			["无尽锭", "无尽锭", null],
			[null, "无尽锭", "无尽锭"],
			["无尽锭", "虚空锭", "无尽锭"]
		],
		"ingredients": [
			["无尽锭", 6],
			["虚空锭", 1]
		],
		"count": 1
	},
	"天堂陨落长弓": {
		"type": "无尽工作台",
		"map": [
			[null, "无尽锭", "无尽锭"],
			["虚空锭", null, null],
			["无尽锭", null, "无尽锭"]
		],
		"ingredients": [
			["无尽锭", 4],
			["虚空锭", 1]
		],
		"count": 1
	},
	"自然荒芜之斧": {
		"type": "无尽工作台",
		"map": [
			[null, "虚空锭", "无尽锭"],
			["无尽锭", null, null],
			["虚空锭", "无尽锭", "无尽锭"]
		],
		"ingredients": [
			["虚空锭", 2],
			["无尽锭", 4]
		],
		"count": 1
	},
	"寰宇支配之剑": {
		"type": "无尽工作台",
		"map": [
			[null, null, null],
			[null, "无尽锭", "无尽锭"],
			[null, null, null]
		],
		"ingredients": [
			["无尽锭", 2]
		],
		"count": 1
	},
	"星球吞噬之铲": {
		"type": "无尽工作台",
		"map": [
			[null, null, null],
			["无尽锭", "无尽锭", "无尽锭"],
			[null, null, "无尽锭"]
		],
		"ingredients": [
			["无尽锭", 4]
		],
		"count": 1
	},
	"世界崩解之镐": {
		"type": "无尽工作台",
		"map": [
			[null, "虚空锭", "无尽锭"],
			["无尽锭", "无尽锭", null],
			[null, null, null]
		],
		"ingredients": [
			["虚空锭", 1],
			["无尽锭", 3]
		],
		"count": 1
	},
	"无尽飞行器": {
		"type": "无尽工作台",
		"map": [
			["无尽锭", null, "无尽锭"],
			["无尽锭", null, "无尽锭"],
			["无尽锭", "虚空锭", "虚空锭"]
		],
		"ingredients": [
			["无尽锭", 5],
			["虚空锭", 2]
		],
		"count": 1
	},
	"矿脉符文": {
		"type": "魔法工作台",
		"map": [
			["磁钢板", "矿脉镐", "磁钢板"],
			["末地精华", "空白符文", "末地精华"],
			["磁钢板", "矿脉镐", "磁钢板"]
		],
		"ingredients": [
			["磁钢板", 4],
			["矿脉镐", 2],
			["末地精华", 2],
			["空白符文", 1]
		],
		"count": 1
	},
	"滤网底座": {
		"type": "增强型工作台",
		"map": [
			["木棍", "线", "木棍"],
			["木棍", "线", "木棍"],
			["磁钢", "磁钢", "磁钢"]
		],
		"ingredients": [
			["木棍", 4],
			["线", 2],
			["磁钢", 3]
		],
		"count": 1
	},
	"高级铁砧": {
		"type": "增强型工作台",
		"map": [
			["机器板块", "机器板块", "机器板块"],
			["机器板块", "铁砧", "机器板块"],
			["机器电路", "机器核心", "机器电路"]
		],
		"ingredients": [
			["机器板块", 5],
			["铁砧", 1],
			["机器电路", 2],
			["机器核心", 1]
		],
		"count": 1
	},
	"无尽工作台": {
		"type": "增强型工作台",
		"map": [
			["虚空锭", "机器板块", "虚空锭"],
			["终极储能电容", "工作台", "终极储能电容"],
			["虚空锭", "机器板块", "虚空锭"]
		],
		"ingredients": [
			["虚空锭", 4],
			["机器板块", 2],
			["终极储能电容", 2],
			["工作台", 1]
		],
		"count": 1
	},
	"存储单元工作台": {
		"type": "增强型工作台",
		"map": [
			["磁钢", "铁砧", "磁钢"],
			["磁钢", "工作台", "磁钢"],
			["磁钢", "木桶", "磁钢"]
		],
		"ingredients": [
			["磁钢", 6],
			["铁砧", 1],
			["工作台", 1],
			["木桶", 1]
		],
		"count": 1
	},
	"基础存储单元": {
		"type": "存储单元工作台",
		"map": [
			["橡木原木", "磁钢", "橡木原木"],
			["橡木原木", "木桶", "橡木原木"],
			["橡木原木", "磁钢", "橡木原木"]
		],
		"ingredients": [
			["橡木原木", 6],
			["磁钢", 2],
			["木桶", 1]
		],
		"count": 1
	},
	"高级存储单元": {
		"type": "存储单元工作台",
		"map": [
			["磁钢", "机器电路", "磁钢"],
			["磁钢", "基础存储单元", "磁钢"],
			["磁钢", "机器电路", "磁钢"]
		],
		"ingredients": [
			["磁钢", 6],
			["机器电路", 2],
			["基础存储单元", 1]
		],
		"count": 1
	},
	"超级存储单元": {
		"type": "存储单元工作台",
		"map": [
			["磁钢板", "机器电路", "磁钢板"],
			["磁钢板", "高级存储单元", "磁钢板"],
			["磁钢板", "机器板块", "磁钢板"]
		],
		"ingredients": [
			["磁钢板", 6],
			["机器电路", 1],
			["高级存储单元", 1],
			["机器板块", 1]
		],
		"count": 1
	},
	"虚空存储单元": {
		"type": "存储单元工作台",
		"map": [
			["虚空锭", "机器板块", "虚空锭"],
			["磁金", "超级存储单元", "磁金"],
			["虚空锭", "机器核心", "虚空锭"]
		],
		"ingredients": [
			["虚空锭", 4],
			["机器板块", 1],
			["磁金", 2],
			["超级存储单元", 1],
			["机器核心", 1]
		],
		"count": 1
	},
	"无尽存储单元": {
		"type": "存储单元工作台",
		"map": [
			["无尽锭", "虚空锭", "无尽锭"],
			["无尽锭", "虚空存储单元", "无尽锭"],
			["无尽锭", "虚空锭", "无尽锭"]
		],
		"ingredients": [
			["无尽锭", 6],
			["虚空锭", 2],
			["虚空存储单元", 1]
		],
		"count": 1
	},
	"无尽反应堆": {
		"type": "无尽工作台",
		"map": [
			[null, "无尽锭", "无尽锭"],
			["无尽锭", "无尽锭", null],
			["无尽锭", "无尽锭", "虚空锭"]
		],
		"ingredients": [
			["无尽锭", 6],
			["虚空锭", 1]
		],
		"count": 1
	},
	"水力发电机": {
		"type": "增强型工作台",
		"map": [
			["磁钢", "机器电路", "磁钢"],
			["桶", "电磁铁", "桶"],
			["磁钢", "机器电路", "磁钢"]
		],
		"ingredients": [
			["磁钢", 4],
			["机器电路", 2],
			["桶", 2],
			["电磁铁", 1]
		],
		"count": 1
	},
	"高级水力发电机": {
		"type": "增强型工作台",
		"map": [
			["水力发电机", "机器电路", "水力发电机"],
			["磁钢板", "机器核心", "磁钢板"],
			["水力发电机", "机器电路", "水力发电机"]
		],
		"ingredients": [
			["水力发电机", 4],
			["机器电路", 2],
			["磁钢板", 2],
			["机器核心", 1]
		],
		"count": 1
	},
	"地热发电机": {
		"type": "增强型工作台",
		"map": [
			["磁钢板", "磁钢板", "磁钢板"],
			["岩浆发电机 (II)", "岩浆发电机 (II)", "岩浆发电机 (II)"],
			["机器电路", "机器核心", "机器电路"]
		],
		"ingredients": [
			["磁钢板", 3],
			["岩浆发电机 (II)", 3],
			["机器电路", 2],
			["机器核心", 1]
		],
		"count": 1
	},
	"高级地热发电机": {
		"type": "增强型工作台",
		"map": [
			["地热发电机", "机器电路", "地热发电机"],
			["机器板块", "机器核心", "机器板块"],
			["地热发电机", "机器电路", "地热发电机"]
		],
		"ingredients": [
			["地热发电机", 4],
			["机器电路", 2],
			["机器板块", 2],
			["机器核心", 1]
		],
		"count": 1
	},
	"基础太阳能发电机": {
		"type": "增强型工作台",
		"map": [
			["磁钢", "磁钢板", "磁钢"],
			["光伏电池", "光伏电池", "光伏电池"],
			["机器电路", "机器电路", "机器电路"]
		],
		"ingredients": [
			["磁钢", 2],
			["磁钢板", 1],
			["光伏电池", 3],
			["机器电路", 3]
		],
		"count": 1
	},
	"高级太阳能发电机": {
		"type": "增强型工作台",
		"map": [
			["基础太阳能发电机", "基础太阳能发电机", "基础太阳能发电机"],
			["钛", "充能太阳能发电机", "钛"],
			["机器电路", "机器电路", "机器电路"]
		],
		"ingredients": [
			["基础太阳能发电机", 3],
			["钛", 2],
			["充能太阳能发电机", 1],
			["机器电路", 3]
		],
		"count": 1
	},
	"超级太阳能发电机": {
		"type": "增强型工作台",
		"map": [
			["机器板块", "机器板块", "机器板块"],
			["高级太阳能发电机", "高级太阳能发电机", "高级太阳能发电机"],
			["机器电路", "机器核心", "机器电路"]
		],
		"ingredients": [
			["机器板块", 3],
			["高级太阳能发电机", 3],
			["机器电路", 2],
			["机器核心", 1]
		],
		"count": 1
	},
	"虚空发电机": {
		"type": "增强型工作台",
		"map": [
			["虚空锭", "虚空锭", "虚空锭"],
			["超级太阳能发电机", "超级太阳能发电机", "超级太阳能发电机"],
			["磁金", "磁金", "磁金"]
		],
		"ingredients": [
			["虚空锭", 3],
			["超级太阳能发电机", 3],
			["磁金", 3]
		],
		"count": 1
	},
	"无尽发电机": {
		"type": "无尽工作台",
		"map": [
			["超级太阳能发电机", "超级太阳能发电机", "超级太阳能发电机"],
			["超级太阳能发电机", "超级太阳能发电机", "超级太阳能发电机"],
			["超级太阳能发电机", "超级太阳能发电机", "超级太阳能发电机"]
		],
		"ingredients": [
			["超级太阳能发电机", 9]
		],
		"count": 1
	},
	"无尽电容": {
		"type": "无尽工作台",
		"map": [
			[null, "无尽锭", "虚空锭"],
			["虚空锭", "无尽锭", null],
			[null, "无尽锭", "无尽晶格"]
		],
		"ingredients": [
			["无尽锭", 3],
			["虚空锭", 2],
			["无尽晶格", 1]
		],
		"count": 1
	},
	"虚空电容": {
		"type": "增强型工作台",
		"map": [
			["虚空锭", "红石奇点", "虚空锭"],
			["虚空锭", "终极储能电容", "虚空锭"],
			["虚空锭", "红石奇点", "虚空锭"]
		],
		"ingredients": [
			["虚空锭", 6],
			["红石奇点", 2],
			["终极储能电容", 1]
		],
		"count": 1
	},
	"高级自动附魔机": {
		"type": "增强型工作台",
		"map": [
			["磁钢", "磁钢", "磁钢"],
			["磁钢板", "自动附魔机", "磁钢板"],
			["机器电路", "机器核心", "机器电路"]
		],
		"ingredients": [
			["磁钢", 3],
			["磁钢板", 2],
			["自动附魔机", 1],
			["机器电路", 2],
			["机器核心", 1]
		],
		"count": 1
	},
	"高级自动祛魔机": {
		"type": "增强型工作台",
		"map": [
			["磁钢", "磁钢", "磁钢"],
			["磁钢板", "自动祛魔机", "磁钢板"],
			["机器电路", "机器核心", "机器电路"]
		],
		"ingredients": [
			["磁钢", 3],
			["磁钢板", 2],
			["自动祛魔机", 1],
			["机器电路", 2],
			["机器核心", 1]
		],
		"count": 1
	},
	"无尽自动附魔机": {
		"type": "无尽工作台",
		"map": [
			[null, null, null],
			[null, null, null],
			["虚空锭", null, null]
		],
		"ingredients": [
			["虚空锭", 1]
		],
		"count": 1
	},
	"无尽自动祛魔机": {
		"type": "无尽工作台",
		"map": [
			[null, null, null],
			[null, null, null],
			["虚空锭", null, null]
		],
		"ingredients": [
			["虚空锭", 1]
		],
		"count": 1
	},
	"高级充电台": {
		"type": "增强型工作台",
		"map": [
			["磁钢板", "机器电路", "磁钢板"],
			["机器电路", "充电台", "机器电路"],
			["磁钢板", "机器核心", "磁钢板"]
		],
		"ingredients": [
			["磁钢板", 4],
			["机器电路", 3],
			["充电台", 1],
			["机器核心", 1]
		],
		"count": 1
	},
	"无尽充电台": {
		"type": "无尽工作台",
		"map": [
			[null, null, null],
			[null, null, null],
			["虚空锭", "机器电路", "机器电路"]
		],
		"ingredients": [
			["虚空锭", 1],
			["机器电路", 2]
		],
		"count": 1
	},
	"高级GEO矿机": {
		"type": "增强型工作台",
		"map": [
			["磁钢板", "磁钢板", "磁钢板"],
			["钴镐", "自然资源开采机", "钴镐"],
			["机器电路", "机器核心", "机器电路"]
		],
		"ingredients": [
			["磁钢板", 3],
			["钴镐", 2],
			["自然资源开采机", 1],
			["机器电路", 2],
			["机器核心", 1]
		],
		"count": 1
	},
	"高级下界之星反应堆": {
		"type": "增强型工作台",
		"map": [
			["防凋灵玻璃", "防凋灵玻璃", "防凋灵玻璃"],
			["机器电路", "下界之星反应堆", "机器电路"],
			["防凋灵黑曜石", "防凋灵黑曜石", "防凋灵黑曜石"]
		],
		"ingredients": [
			["防凋灵玻璃", 3],
			["机器电路", 2],
			["下界之星反应堆", 1],
			["防凋灵黑曜石", 3]
		],
		"count": 1
	},
	"高级冶炼炉": {
		"type": "增强型工作台",
		"map": [
			["电力冶炼炉 - II", "电力冶炼炉 - II", "电力冶炼炉 - II"],
			["电力冶炼炉 - II", "电力冶炼炉 - II", "电力冶炼炉 - II"],
			["机器电路", "机器核心", "机器电路"]
		],
		"ingredients": [
			["电力冶炼炉 - II", 6],
			["机器电路", 2],
			["机器核心", 1]
		],
		"count": 1
	},
	"蝙蝠头颅": {
		"map": [
			[null, null, null],
			[null, "击杀蝙蝠", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀蝙蝠", 1]
		],
		"count": 1
	},
	"烈焰人头颅": {
		"map": [
			[null, null, null],
			[null, "击杀烈焰人", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀烈焰人", 1]
		],
		"count": 1
	},
	"洞穴蜘蛛头颅": {
		"map": [
			[null, null, null],
			[null, "击杀洞穴蜘蛛", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀洞穴蜘蛛", 1]
		],
		"count": 1
	},
	"鸡头颅": {
		"map": [
			[null, null, null],
			[null, "击杀鸡", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀鸡", 1]
		],
		"count": 1
	},
	"牛头颅": {
		"map": [
			[null, null, null],
			[null, "击杀牛", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀牛", 1]
		],
		"count": 1
	},
	"海豚头颅": {
		"map": [
			[null, null, null],
			[null, "击杀海豚", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀海豚", 1]
		],
		"count": 1
	},
	"溺尸头颅": {
		"map": [
			[null, null, null],
			[null, "击杀溺尸", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀溺尸", 1]
		],
		"count": 1
	},
	"远古守卫者头颅": {
		"map": [
			[null, null, null],
			[null, "击杀远古守卫者", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀远古守卫者", 1]
		],
		"count": 1
	},
	"末影人头颅": {
		"map": [
			[null, null, null],
			[null, "击杀末影人", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀末影人", 1]
		],
		"count": 1
	},
	"唤魔者头颅": {
		"map": [
			[null, null, null],
			[null, "击杀唤魔者", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀唤魔者", 1]
		],
		"count": 1
	},
	"恶魂头颅": {
		"map": [
			[null, null, null],
			[null, "击杀恶魂", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀恶魂", 1]
		],
		"count": 1
	},
	"守卫者头颅": {
		"map": [
			[null, null, null],
			[null, "击杀守卫者", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀守卫者", 1]
		],
		"count": 1
	},
	"马头颅": {
		"map": [
			[null, null, null],
			[null, "击杀马", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀马", 1]
		],
		"count": 1
	},
	"尸壳头颅": {
		"map": [
			[null, null, null],
			[null, "击杀尸壳", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀尸壳", 1]
		],
		"count": 1
	},
	"幻术师头颅": {
		"map": [
			[null, null, null],
			[null, "击杀幻术师", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀幻术师", 1]
		],
		"count": 1
	},
	"铁傀儡头颅": {
		"map": [
			[null, null, null],
			[null, "击杀铁傀儡", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀铁傀儡", 1]
		],
		"count": 1
	},
	"羊驼头颅": {
		"map": [
			[null, null, null],
			[null, "击杀羊驼", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀羊驼", 1]
		],
		"count": 1
	},
	"岩浆怪头颅": {
		"map": [
			[null, null, null],
			[null, "击杀岩浆怪", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀岩浆怪", 1]
		],
		"count": 1
	},
	"哞菇头颅": {
		"map": [
			[null, null, null],
			[null, "击杀哞菇", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀哞菇", 1]
		],
		"count": 1
	},
	"豹猫头颅": {
		"map": [
			[null, null, null],
			[null, "击杀豹猫", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀豹猫", 1]
		],
		"count": 1
	},
	"鹦鹉头颅": {
		"map": [
			[null, null, null],
			[null, "击杀鹦鹉", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀鹦鹉", 1]
		],
		"count": 1
	},
	"猪头颅": {
		"map": [
			[null, null, null],
			[null, "击杀猪", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀猪", 1]
		],
		"count": 1
	},
	"北极熊头颅": {
		"map": [
			[null, null, null],
			[null, "击杀北极熊", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀北极熊", 1]
		],
		"count": 1
	},
	"兔子头颅": {
		"map": [
			[null, null, null],
			[null, "击杀兔子", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀兔子", 1]
		],
		"count": 1
	},
	"绵羊头颅": {
		"map": [
			[null, null, null],
			[null, "击杀绵羊", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀绵羊", 1]
		],
		"count": 1
	},
	"潜影贝头颅": {
		"map": [
			[null, null, null],
			[null, "击杀潜影贝", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀潜影贝", 1]
		],
		"count": 1
	},
	"史莱姆头颅": {
		"map": [
			[null, null, null],
			[null, "击杀史莱姆", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀史莱姆", 1]
		],
		"count": 1
	},
	"蜘蛛头颅": {
		"map": [
			[null, null, null],
			[null, "击杀蜘蛛", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀蜘蛛", 1]
		],
		"count": 1
	},
	"鱿鱼头颅": {
		"map": [
			[null, null, null],
			[null, "击杀鱿鱼", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀鱿鱼", 1]
		],
		"count": 1
	},
	"流浪者头颅": {
		"map": [
			[null, null, null],
			[null, "击杀流浪者", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀流浪者", 1]
		],
		"count": 1
	},
	"海龟头颅": {
		"map": [
			[null, null, null],
			[null, "击杀海龟", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀海龟", 1]
		],
		"count": 1
	},
	"恼鬼头颅": {
		"map": [
			[null, null, null],
			[null, "击杀恼鬼", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀恼鬼", 1]
		],
		"count": 1
	},
	"村民头颅": {
		"map": [
			[null, null, null],
			[null, "击杀村民", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀村民", 1]
		],
		"count": 1
	},
	"卫道士头颅": {
		"map": [
			[null, null, null],
			[null, "击杀卫道士", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀卫道士", 1]
		],
		"count": 1
	},
	"女巫头颅": {
		"map": [
			[null, null, null],
			[null, "击杀女巫", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀女巫", 1]
		],
		"count": 1
	},
	"凋灵头颅": {
		"map": [
			[null, null, null],
			[null, "击杀凋灵", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀凋灵", 1]
		],
		"count": 1
	},
	"僵尸村民头颅": {
		"map": [
			[null, null, null],
			[null, "击杀僵尸村民", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀僵尸村民", 1]
		],
		"count": 1
	},
	"巨人头颅": {
		"map": [
			[null, null, null],
			[null, "击杀巨人", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀巨人", 1]
		],
		"count": 1
	},
	"劫掠兽头颅": {
		"map": [
			[null, null, null],
			[null, "击杀劫掠兽", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀劫掠兽", 1]
		],
		"count": 1
	},
	"掠夺者头颅": {
		"map": [
			[null, null, null],
			[null, "击杀掠夺者", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀掠夺者", 1]
		],
		"count": 1
	},
	"狐狸头颅": {
		"map": [
			[null, null, null],
			[null, "击杀狐狸", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀狐狸", 1]
		],
		"count": 1
	},
	"熊猫头颅": {
		"map": [
			[null, null, null],
			[null, "击杀熊猫", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀熊猫", 1]
		],
		"count": 1
	},
	"流浪商人头颅": {
		"map": [
			[null, null, null],
			[null, "击杀流浪商人", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀流浪商人", 1]
		],
		"count": 1
	},
	"猪灵头颅": {
		"map": [
			[null, null, null],
			[null, "击杀猪灵", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀猪灵", 1]
		],
		"count": 1
	},
	"僵尸猪灵头颅": {
		"map": [
			[null, null, null],
			[null, "击杀僵尸猪灵", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀僵尸猪灵", 1]
		],
		"count": 1
	},
	"炽足兽头颅": {
		"map": [
			[null, null, null],
			[null, "击杀炽足兽", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀炽足兽", 1]
		],
		"count": 1
	},
	"美西螈头颅": {
		"map": [
			[null, null, null],
			[null, "击杀美西螈", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀美西螈", 1]
		],
		"count": 1
	},
	"发光鱿鱼头颅": {
		"map": [
			[null, null, null],
			[null, "击杀发光鱿鱼", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀发光鱿鱼", 1]
		],
		"count": 1
	},
	"山羊头颅": {
		"map": [
			[null, null, null],
			[null, "击杀山羊", null],
			[null, null, null]
		],
		"ingredients": [
			["击杀山羊", 1]
		],
		"count": 1
	},
	"村民精华": {
		"type": "古代祭坛",
		"map": [
			["魔法结晶 - II", "玻璃板", "末影结晶 - II"],
			["绿宝石", "古代符文 [村民]", "学识之瓶"],
			["末影结晶 - II", "玻璃板", "魔法结晶 - II"]
		],
		"ingredients": [
			["魔法结晶 - II", 2],
			["玻璃板", 2],
			["末影结晶 - II", 2],
			["绿宝石", 1],
			["古代符文 [村民]", 1],
			["学识之瓶", 1]
		],
		"count": 16
	},
	"村民令牌": {
		"type": "增强型工作台",
		"map": [
			["村民精华", "奇怪的下界粘液", "绿宝石"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["村民精华", 1],
			["奇怪的下界粘液", 1],
			["绿宝石", 1]
		],
		"count": 2
	},
	"村民信标": {
		"map": [
			[null, null, null],
			[null, "Villager", null],
			[null, null, null]
		],
		"ingredients": [
			["Villager", 1]
		],
		"count": 1
	},
	"村民治愈棒": {
		"type": "古代祭坛",
		"map": [
			["古代符文 [村民]", "还魂丹", "村民令牌"],
			["还魂丹", "末地烛", "金苹果"],
			["村民令牌", "虚弱药水", "元素法杖"]
		],
		"ingredients": [
			["古代符文 [村民]", 1],
			["还魂丹", 2],
			["村民令牌", 2],
			["末地烛", 1],
			["金苹果", 1],
			["虚弱药水", 1],
			["元素法杖", 1]
		],
		"count": 1
	},
	"村民去盲棒": {
		"type": "古代祭坛",
		"map": [
			["古代符文 [村民]", "高级电路板", "村民令牌"],
			["高级电路板", "末地烛", "人造钻石"],
			["村民令牌", "人造绿宝石", "元素法杖"]
		],
		"ingredients": [
			["古代符文 [村民]", 1],
			["高级电路板", 2],
			["村民令牌", 2],
			["末地烛", 1],
			["人造钻石", 1],
			["人造绿宝石", 1],
			["元素法杖", 1]
		],
		"count": 1
	},
	"村民交易棒": {
		"type": "古代祭坛",
		"map": [
			["古代符文 [村民]", "奇怪的下界粘液", "村民令牌"],
			["学识之瓶", "末地烛", "绿宝石块"],
			["村民令牌", "绿宝石块", "元素法杖"]
		],
		"ingredients": [
			["古代符文 [村民]", 1],
			["奇怪的下界粘液", 1],
			["村民令牌", 2],
			["学识之瓶", 1],
			["末地烛", 1],
			["绿宝石块", 2],
			["元素法杖", 1]
		],
		"count": 1
	},
	"村民传送棒": {
		"type": "古代祭坛",
		"map": [
			["古代符文 [村民]", "矿车", "村民令牌"],
			["矿车", "末地烛", "绿宝石块"],
			["村民令牌", "绿宝石块", "元素法杖"]
		],
		"ingredients": [
			["古代符文 [村民]", 1],
			["矿车", 2],
			["村民令牌", 2],
			["末地烛", 1],
			["绿宝石块", 2],
			["元素法杖", 1]
		],
		"count": 1
	},
	"Oxygen气体": {
		"type": "空配方",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"Nitrogen气体": {
		"type": "空配方",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"Carbon Dioxide气体": {
		"type": "空配方",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"Water气体": {
		"type": "空配方",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"Helium气体": {
		"type": "空配方",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"Argon气体": {
		"type": "空配方",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"Methane气体": {
		"type": "空配方",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"Hydrocarbons气体": {
		"type": "空配方",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"Hydrogen气体": {
		"type": "空配方",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"Sulfur气体": {
		"type": "空配方",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"Ammonia气体": {
		"type": "空配方",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"月球尘埃": {
		"map": [
			["The Moon", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["The Moon", 1]
		],
		"count": 1
	},
	"月岩": {
		"map": [
			["The Moon", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["The Moon", 1]
		],
		"count": 1
	},
	"火星尘埃": {
		"map": [
			["Mars", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["Mars", 1]
		],
		"count": 1
	},
	"火星岩": {
		"map": [
			["Mars", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["Mars", 1]
		],
		"count": 1
	},
	"陨星": {
		"map": [
			["Mars", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["Mars", 1]
		],
		"count": 1
	},
	"干冰": {
		"map": [
			["Mars", "Titan", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["Mars", 1],
			["Titan", 1]
		],
		"count": 1
	},
	"甲烷冰": {
		"map": [
			["Titan", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["Titan", 1]
		],
		"count": 1
	},
	"硫磺块": {
		"map": [
			["Venus", "Io", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["Venus", 1],
			["Io", 1]
		],
		"count": 1
	},
	"透气石": {
		"map": [
			["Venus", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["Venus", 1]
		],
		"count": 1
	},
	"激光矿石": {
		"map": [
			["Titan", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["Titan", 1]
		],
		"count": 1
	},
	"火山锭": {
		"type": "冶炼炉",
		"map": [
			["透气石", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["透气石", 1]
		],
		"count": 1
	},
	"铝复合材料": {
		"type": "冶炼炉",
		"map": [
			["铝锭", "镁", "锌粉"],
			["锡粉", "铝粉", null],
			[null, null, null]
		],
		"ingredients": [
			["铝锭", 1],
			["镁", 1],
			["锌粉", 1],
			["锡粉", 1],
			["铝粉", 1]
		],
		"count": 1
	},
	"钨锭": {
		"type": "冶炼炉",
		"map": [
			["陨星", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["陨星", 1]
		],
		"count": 1
	},
	"铝复合板": {
		"type": "压缩机",
		"map": [
			["铝复合材料", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["铝复合材料", 1]
		],
		"count": 1
	},
	"重负荷板": {
		"type": "压缩机",
		"map": [
			["铝复合板", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["铝复合板", 1]
		],
		"count": 1
	},
	"空间等级板": {
		"type": "加热压力舱",
		"map": [
			["重负荷板", "碳化钨", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["重负荷板", 1],
			["碳化钨", 1]
		],
		"count": 1
	},
	"超负荷板": {
		"type": "压缩机",
		"map": [
			["空间等级板", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["空间等级板", 1]
		],
		"count": 1
	},
	"金箔": {
		"type": "压缩机",
		"map": [
			["金块 (24克拉)", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["金块 (24克拉)", 1]
		],
		"count": 4
	},
	"加强管道": {
		"type": "增强型工作台",
		"map": [
			["铝复合板", null, "铝复合板"],
			["铝复合板", null, "铝复合板"],
			["铝复合板", null, "铝复合板"]
		],
		"ingredients": [
			["铝复合板", 6]
		],
		"count": 8
	},
	"鼓风机叶片": {
		"type": "增强型工作台",
		"map": [
			[null, "钢锭", null],
			["钢锭", "钢锭", "钢锭"],
			[null, "钢锭", null]
		],
		"ingredients": [
			["钢锭", 5]
		],
		"count": 1
	},
	"管口": {
		"type": "增强型工作台",
		"map": [
			["钢锭", null, "钢锭"],
			["钢锭", null, "钢锭"],
			[null, "铁活板门", null]
		],
		"ingredients": [
			["钢锭", 4],
			["铁活板门", 1]
		],
		"count": 2
	},
	"滤器": {
		"type": "增强型工作台",
		"map": [
			["布", "木炭", "布"],
			["布", "木炭", "布"],
			["布", "木炭", "布"]
		],
		"ingredients": [
			["布", 6],
			["木炭", 3]
		],
		"count": 1
	},
	"氧气再生器": {
		"type": "增强型工作台",
		"map": [
			["电磁铁", "加强管道", "滤器"],
			["管口", "金箔", "滤器"],
			["电磁铁", "加强管道", "滤器"]
		],
		"ingredients": [
			["电磁铁", 2],
			["加强管道", 2],
			["滤器", 3],
			["管口", 1],
			["金箔", 1]
		],
		"count": 1
	},
	"一阶火花塞": {
		"type": "增强型工作台",
		"map": [
			[null, "钢板", "镍锭"],
			["铝锭", null, "芒粉"],
			[null, "钢板", "镍锭"]
		],
		"ingredients": [
			["钢板", 2],
			["镍锭", 2],
			["铝锭", 1],
			["芒粉", 1]
		],
		"count": 1
	},
	"二阶火花塞": {
		"type": "增强型工作台",
		"map": [
			[null, "钢板", "镍锭"],
			["钨锭", null, "芒粉"],
			[null, "钢板", "镍锭"]
		],
		"ingredients": [
			["钢板", 2],
			["镍锭", 2],
			["钨锭", 1],
			["芒粉", 1]
		],
		"count": 1
	},
	"一阶火箭发动机": {
		"map": [
			[null, "加强管道", "加强管道"],
			["加强管道", "加强管道", null],
			[null, null, "加强管道"]
		],
		"ingredients": [
			["加强管道", 5]
		],
		"count": 1
	},
	"二阶火箭发动机": {
		"map": [
			[null, "加强管道", "加强管道"],
			["加强管道", "加强管道", null],
			[null, null, "加强管道"]
		],
		"ingredients": [
			["加强管道", 5]
		],
		"count": 1
	},
	"三阶火箭发动机": {
		"map": [
			[null, "加强管道", "加强管道"],
			["加强管道", "加强管道", null],
			[null, null, "加强管道"]
		],
		"ingredients": [
			["加强管道", 5]
		],
		"count": 1
	},
	"离子发动机": {
		"map": [
			["充能太阳能发电机", "加强管道", "加强管道"],
			["加强管道", "加强管道", "充能太阳能发电机"],
			[null, null, "加强管道"]
		],
		"ingredients": [
			["充能太阳能发电机", 2],
			["加强管道", 5]
		],
		"count": 1
	},
	"高级处理单元": {
		"type": "增强型工作台",
		"map": [
			["红石电路板", "辉石电路板", "红石电路板"],
			["钻石电路板", "高级电路板", "钻石电路板"],
			["红石电路板", "青金石电路板", "红石电路板"]
		],
		"ingredients": [
			["红石电路板", 4],
			["辉石电路板", 1],
			["钻石电路板", 2],
			["高级电路板", 1],
			["青金石电路板", 1]
		],
		"count": 1
	},
	"生命维持模块": {
		"map": [
			["钢锭", "钢锭", "加强管道"],
			["加强管道", "钢锭", "钢锭"],
			["钢锭", "高级处理单元", "加强管道"]
		],
		"ingredients": [
			["钢锭", 5],
			["加强管道", 3],
			["高级处理单元", 1]
		],
		"count": 1
	},
	"鼻锥": {
		"map": [
			[null, null, "红石火把"],
			["红石火把", null, null],
			[null, null, "铝复合材料"]
		],
		"ingredients": [
			["红石火把", 2],
			["铝复合材料", 1]
		],
		"count": 1
	},
	"一阶油箱": {
		"type": "增强型工作台",
		"map": [
			["重负荷板", "重负荷板", "重负荷板"],
			["重负荷板", null, "重负荷板"],
			["重负荷板", "重负荷板", "重负荷板"]
		],
		"ingredients": [
			["重负荷板", 8]
		],
		"count": 1
	},
	"二阶油箱": {
		"type": "增强型工作台",
		"map": [
			["超负荷板", "超负荷板", "超负荷板"],
			["超负荷板", null, "超负荷板"],
			["超负荷板", "超负荷板", "超负荷板"]
		],
		"ingredients": [
			["超负荷板", 8]
		],
		"count": 1
	},
	"钻石电路板": {
		"map": [
			["钻石块", "硅", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["钻石块", 1],
			["硅", 1]
		],
		"count": 1
	},
	"红石电路板": {
		"map": [
			["红石块", "硅", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["红石块", 1],
			["硅", 1]
		],
		"count": 1
	},
	"青金石电路板": {
		"map": [
			["青金石块", "硅", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["青金石块", 1],
			["硅", 1]
		],
		"count": 1
	},
	"辉石电路板": {
		"map": [
			["荧石", "硅", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["荧石", 1],
			["硅", 1]
		],
		"count": 1
	},
	"芒粉": {
		"map": [
			[null, null, null],
			[null, "Mutant Creeper", null],
			[null, null, null]
		],
		"ingredients": [
			["Mutant Creeper", 1]
		],
		"count": 1
	},
	"末地方块": {
		"map": [
			["末影珍珠", "起泡火山锭", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["末影珍珠", 1],
			["起泡火山锭", 1]
		],
		"count": 1
	},
	"月球玻璃": {
		"type": "冶炼炉",
		"map": [
			["沙子", "月球尘埃", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["沙子", 1],
			["月球尘埃", 1]
		],
		"count": 1
	},
	"碳化钨": {
		"type": "冶炼炉",
		"map": [
			["钨锭", "压缩碳", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["钨锭", 1],
			["压缩碳", 1]
		],
		"count": 1
	},
	"钻石砧槽": {
		"map": [
			["碳化钨", "碳化钨", "碳化钨"],
			["碳化钨", "碳化钨", "碳化钨"],
			["人造钻石", "黑金刚石", "黑金刚石"]
		],
		"ingredients": [
			["碳化钨", 6],
			["人造钻石", 1],
			["黑金刚石", 2]
		],
		"count": 1
	},
	"起泡火山锭": {
		"map": [
			["火山锭", "起泡锭", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["火山锭", 1],
			["起泡锭", 1]
		],
		"count": 1
	},
	"聚变弹丸": {
		"map": [
			["起泡火山锭", "月球尘埃", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["起泡火山锭", 1],
			["月球尘埃", 1]
		],
		"count": 8
	},
	"激光石粉": {
		"type": "矿石粉碎机",
		"map": [
			["激光矿石", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["激光矿石", 1]
		],
		"count": 1
	},
	"激光石": {
		"map": [
			["激光石粉", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["激光石粉", 1]
		],
		"count": 1
	},
	"月球芝士": {
		"map": [
			["The Moon", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["The Moon", 1]
		],
		"count": 1
	},
	"氧气填充器": {
		"type": "增强型工作台",
		"map": [
			["铝复合材料", "加强管道", "铝复合材料"],
			["铝复合材料", "鼓风机叶片", "铝复合材料"],
			["铝复合材料", null, "铝复合材料"]
		],
		"ingredients": [
			["铝复合材料", 6],
			["加强管道", 1],
			["鼓风机叶片", 1]
		],
		"count": 1
	},
	"航天服升级模块": {
		"type": "增强型工作台",
		"map": [
			["铝复合材料", "钢化玻璃", "铝复合材料"],
			["铝复合材料", null, "铝复合材料"],
			["铝复合材料", "钢锭", "铝复合材料"]
		],
		"ingredients": [
			["铝复合材料", 6],
			["钢化玻璃", 1],
			["钢锭", 1]
		],
		"count": 1
	},
	"耐热性升级模块": {
		"type": "增强型工作台",
		"map": [
			["冷却装置", "冷却装置", "冷却装置"],
			["冷却装置", "铁块", "冷却装置"],
			["冷却装置", "冷却装置", "冷却装置"]
		],
		"ingredients": [
			["冷却装置", 8],
			["铁块", 1]
		],
		"count": 1
	},
	"抗寒性升级模块": {
		"type": "增强型工作台",
		"map": [
			["加热线圈", "加热线圈", "加热线圈"],
			["加热线圈", "铁块", "加热线圈"],
			["加热线圈", "加热线圈", "加热线圈"]
		],
		"ingredients": [
			["加热线圈", 8],
			["铁块", 1]
		],
		"count": 1
	},
	"抗辐射升级机": {
		"type": "增强型工作台",
		"map": [
			["铅锭", "铅锭", "铅锭"],
			["铅锭", "铁块", "铅锭"],
			["铅锭", "铅锭", "铅锭"]
		],
		"ingredients": [
			["铅锭", 8],
			["铁块", 1]
		],
		"count": 1
	},
	"宇航服头盔": {
		"type": "盔甲锻造台",
		"map": [
			["铝复合板", "金箔", "铝复合板"],
			["强化布料", "潜水头盔", "强化布料"],
			["加强管道", "氧气再生器", "鼓风机叶片"]
		],
		"ingredients": [
			["铝复合板", 2],
			["金箔", 1],
			["强化布料", 2],
			["潜水头盔", 1],
			["加强管道", 1],
			["氧气再生器", 1],
			["鼓风机叶片", 1]
		],
		"count": 1
	},
	"宇航服胸甲": {
		"type": "盔甲锻造台",
		"map": [
			["铝复合板", "强化布料", "加强管道"],
			["鼓风机叶片", "防化服", "鼓风机叶片"],
			["铝复合板", "铝复合板", "铝复合板"]
		],
		"ingredients": [
			["铝复合板", 4],
			["强化布料", 1],
			["加强管道", 1],
			["鼓风机叶片", 2],
			["防化服", 1]
		],
		"count": 1
	},
	"宇航服护腿": {
		"type": "盔甲锻造台",
		"map": [
			["铝复合板", "防化护腿", "铝复合板"],
			["铝复合板", null, "铝复合板"],
			["铝复合板", null, "铝复合板"]
		],
		"ingredients": [
			["铝复合板", 6],
			["防化护腿", 1]
		],
		"count": 1
	},
	"宇航服靴子": {
		"type": "盔甲锻造台",
		"map": [
			[null, null, null],
			["铝复合板", null, "铝复合板"],
			["铝复合板", "防化靴", "铝复合板"]
		],
		"ingredients": [
			["铝复合板", 4],
			["防化靴", 1]
		],
		"count": 1
	},
	"循环压力机": {
		"type": "增强型工作台",
		"map": [
			["加热线圈", "活塞", "加热线圈"],
			["铝复合板", null, "铝复合板"],
			["加热线圈", "活塞", "加热线圈"]
		],
		"ingredients": [
			["加热线圈", 4],
			["活塞", 2],
			["铝复合板", 2]
		],
		"count": 1
	},
	"星系装配台": {
		"type": "增强型工作台",
		"map": [
			["钢板", "自动合成机 (高级)", "钢板"],
			["货运马达", "高级处理单元", "货运马达"],
			["钢筋板", "钢筋板", "钢筋板"]
		],
		"ingredients": [
			["钢板", 2],
			["自动合成机 (高级)", 1],
			["货运马达", 2],
			["高级处理单元", 1],
			["钢筋板", 3]
		],
		"count": 1
	},
	"星门环": {
		"map": [
			["超负荷板", "超负荷板", "超负荷板"],
			["超负荷板", "超负荷板", "超负荷板"],
			["超负荷板", "末地方块", "末地方块"]
		],
		"ingredients": [
			["超负荷板", 7],
			["末地方块", 2]
		],
		"count": 1
	},
	"星门控制器": {
		"type": "增强型工作台",
		"map": [
			["星门环", "辉石电路板", "星门环"],
			["红石电路板", "钻石电路板", "红石电路板"],
			["星门环", "青金石电路板", "星门环"]
		],
		"ingredients": [
			["星门环", 4],
			["辉石电路板", 1],
			["红石电路板", 2],
			["钻石电路板", 1],
			["青金石电路板", 1]
		],
		"count": 1
	},
	"一阶化工火箭": {
		"map": [
			[null, null, "鼻锥"],
			["鼻锥", null, null],
			[null, null, "重负荷板"]
		],
		"ingredients": [
			["鼻锥", 2],
			["重负荷板", 1]
		],
		"count": 1
	},
	"二阶化工火箭": {
		"map": [
			[null, null, "鼻锥"],
			["鼻锥", null, null],
			[null, null, "重负荷板"]
		],
		"ingredients": [
			["鼻锥", 2],
			["重负荷板", 1]
		],
		"count": 1
	},
	"三阶化工火箭": {
		"map": [
			[null, null, "鼻锥"],
			["鼻锥", null, null],
			[null, null, "超负荷板"]
		],
		"ingredients": [
			["鼻锥", 2],
			["超负荷板", 1]
		],
		"count": 1
	},
	"起落舱": {
		"type": "增强型工作台",
		"map": [
			["重负荷板", "铁活板门", "重负荷板"],
			["空间等级板", null, "空间等级板"],
			["空间等级板", null, "空间等级板"]
		],
		"ingredients": [
			["重负荷板", 2],
			["铁活板门", 1],
			["空间等级板", 4]
		],
		"count": 1
	},
	"发射台地板": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			["重负荷板", "重负荷板", "重负荷板"],
			["重负荷板", "重负荷板", "重负荷板"]
		],
		"ingredients": [
			["重负荷板", 6]
		],
		"count": 1
	},
	"发射台核心": {
		"type": "增强型工作台",
		"map": [
			["钢筋板", "管口", "钢筋板"],
			["货运马达", "原油泵", "货运马达"],
			["钢筋板", "高级处理单元", "钢筋板"]
		],
		"ingredients": [
			["钢筋板", 4],
			["管口", 1],
			["货运马达", 2],
			["原油泵", 1],
			["高级处理单元", 1]
		],
		"count": 1
	},
	"空间冷却器 I": {
		"type": "增强型工作台",
		"map": [
			["铝复合板", "冷却装置", "铝复合板"],
			["冷却装置", "鼓风机叶片", "冷却装置"],
			["铝复合板", "冷却装置", "铝复合板"]
		],
		"ingredients": [
			["铝复合板", 4],
			["冷却装置", 4],
			["鼓风机叶片", 1]
		],
		"count": 1
	},
	"空间冷却器 II": {
		"type": "增强型工作台",
		"map": [
			["空间等级板", "干冰", "空间等级板"],
			["干冰", "空间冷却器 I", "干冰"],
			["空间等级板", "干冰", "空间等级板"]
		],
		"ingredients": [
			["空间等级板", 4],
			["干冰", 4],
			["空间冷却器 I", 1]
		],
		"count": 1
	},
	"空间冷却器 III": {
		"type": "增强型工作台",
		"map": [
			["重负荷板", "干冰", "重负荷板"],
			["干冰", "空间冷却器 II", "干冰"],
			["重负荷板", "干冰", "重负荷板"]
		],
		"ingredients": [
			["重负荷板", 4],
			["干冰", 4],
			["空间冷却器 II", 1]
		],
		"count": 1
	},
	"空间加热器 I": {
		"type": "增强型工作台",
		"map": [
			["铝复合板", "加热线圈", "铝复合板"],
			["加热线圈", "鼓风机叶片", "加热线圈"],
			["铝复合板", "加热线圈", "铝复合板"]
		],
		"ingredients": [
			["铝复合板", 4],
			["加热线圈", 4],
			["鼓风机叶片", 1]
		],
		"count": 1
	},
	"空间加热器 II": {
		"type": "增强型工作台",
		"map": [
			["空间等级板", "熔岩桶", "空间等级板"],
			["透气石", "空间加热器 I", "透气石"],
			["空间等级板", "加热线圈", "空间等级板"]
		],
		"ingredients": [
			["空间等级板", 4],
			["熔岩桶", 1],
			["透气石", 2],
			["空间加热器 I", 1],
			["加热线圈", 1]
		],
		"count": 1
	},
	"空间加热器 III": {
		"type": "增强型工作台",
		"map": [
			["重负荷板", "火山锭", "重负荷板"],
			["火山锭", "空间加热器 II", "火山锭"],
			["重负荷板", "起泡火山锭", "重负荷板"]
		],
		"ingredients": [
			["重负荷板", 4],
			["火山锭", 3],
			["空间加热器 II", 1],
			["起泡火山锭", 1]
		],
		"count": 1
	},
	"离子分散器 I": {
		"type": "增强型工作台",
		"map": [
			["铝复合板", "鼓风机叶片", "铝复合板"],
			["海晶砂粒", "硫磺块", "海晶砂粒"],
			["铝复合板", "透气石", "铝复合板"]
		],
		"ingredients": [
			["铝复合板", 4],
			["鼓风机叶片", 1],
			["海晶砂粒", 2],
			["硫磺块", 1],
			["透气石", 1]
		],
		"count": 1
	},
	"离子分散器 II": {
		"type": "增强型工作台",
		"map": [
			["空间等级板", "鼓风机叶片", "空间等级板"],
			["硫磺块", "离子分散器 I", "硫磺块"],
			["空间等级板", "起泡火山锭", "空间等级板"]
		],
		"ingredients": [
			["空间等级板", 4],
			["鼓风机叶片", 1],
			["硫磺块", 2],
			["离子分散器 I", 1],
			["起泡火山锭", 1]
		],
		"count": 1
	},
	"星系天文台": {
		"type": "多方块结构",
		"map": [
			["铁块", "活塞", "铁块"],
			["活塞", "月球玻璃", "活塞"],
			["铁块", "活塞", "铁块"]
		],
		"ingredients": [
			["铁块", 4],
			["活塞", 4],
			["月球玻璃", 1]
		],
		"count": 1
	},
	"行星分析仪": {
		"type": "增强型工作台",
		"map": [
			["钨锭", "充能 GPS 发射器", "钨锭"],
			["空间等级板", "终极储能电容", "空间等级板"],
			["钨锭", "火山锭", "钨锭"]
		],
		"ingredients": [
			["钨锭", 4],
			["充能 GPS 发射器", 1],
			["空间等级板", 2],
			["终极储能电容", 1],
			["火山锭", 1]
		],
		"count": 1
	},
	"钻石砧": {
		"type": "增强型工作台",
		"map": [
			["超负荷板", "玻璃", "超负荷板"],
			["超负荷板", "钻石砧槽", "超负荷板"],
			["超负荷板", "铁砧", "超负荷板"]
		],
		"ingredients": [
			["超负荷板", 6],
			["玻璃", 1],
			["钻石砧槽", 1],
			["铁砧", 1]
		],
		"count": 1
	},
	"氧气散播机": {
		"type": "增强型工作台",
		"map": [
			["铝复合板", "鼓风机叶片", "铝复合板"],
			["铝复合板", "加强管道", "铝复合板"],
			["铝复合板", "氧气再生器", "铝复合板"]
		],
		"ingredients": [
			["铝复合板", 6],
			["鼓风机叶片", 1],
			["加强管道", 1],
			["氧气再生器", 1]
		],
		"count": 1
	},
	"加强鼓风机": {
		"type": "增强型工作台",
		"map": [
			["铝复合板", "铝复合板", "铝复合板"],
			["铝复合板", "鼓风机叶片", "铝复合板"],
			["铝复合板", "透气石", "铝复合板"]
		],
		"ingredients": [
			["铝复合板", 7],
			["鼓风机叶片", 1],
			["透气石", 1]
		],
		"count": 1
	},
	"自动门": {
		"type": "增强型工作台",
		"map": [
			["铝复合板", "侦测器", "铝复合板"],
			["铝复合板", "可编程式机器人 (矿工)", "铝复合板"],
			["铝复合板", "方块放置机", "铝复合板"]
		],
		"ingredients": [
			["铝复合板", 6],
			["侦测器", 1],
			["可编程式机器人 (矿工)", 1],
			["方块放置机", 1]
		],
		"count": 1
	},
	"聚变反应堆": {
		"map": [
			["超负荷板", "超负荷板", "高级处理单元"],
			["高级处理单元", "超负荷板", "超负荷板"],
			["超负荷板", "起泡火山锭", "激光石"]
		],
		"ingredients": [
			["超负荷板", 5],
			["高级处理单元", 2],
			["起泡火山锭", 1],
			["激光石", 1]
		],
		"count": 1
	},
	"大气收集机": {
		"type": "增强型工作台",
		"map": [
			["空间等级板", "鼓风机叶片", "空间等级板"],
			["空间等级板", null, "空间等级板"],
			["空间等级板", "空间等级板", "空间等级板"]
		],
		"ingredients": [
			["空间等级板", 7],
			["鼓风机叶片", 1]
		],
		"count": 1
	},
	"离子火箭": {
		"map": [
			[null, null, "鼻锥"],
			["鼻锥", null, null],
			[null, null, "超负荷板"]
		],
		"ingredients": [
			["鼻锥", 2],
			["超负荷板", 1]
		],
		"count": 1
	},
	"化学反应器": {
		"type": "增强型工作台",
		"map": [
			["空间等级板", null, "空间等级板"],
			["超负荷板", "起泡火山锭", "超负荷板"],
			["高级处理单元", "超负荷板", "高级处理单元"]
		],
		"ingredients": [
			["空间等级板", 2],
			["超负荷板", 3],
			["起泡火山锭", 1],
			["高级处理单元", 2]
		],
		"count": 1
	},
	"电解器": {
		"type": "增强型工作台",
		"map": [
			["空间等级板", null, "空间等级板"],
			["银锭", "起泡火山锭", "银锭"],
			["高级处理单元", "超负荷板", "高级处理单元"]
		],
		"ingredients": [
			["空间等级板", 2],
			["银锭", 2],
			["起泡火山锭", 1],
			["高级处理单元", 2],
			["超负荷板", 1]
		],
		"count": 1
	},
	"遗迹: 'Lenap Ayanhcenlos Ayanamolop": {
		"map": [
			["Titan", "Mars", "The Moon"],
			["Earth Orbit", "Venus", "Io"],
			["Enceladus", null, null]
		],
		"ingredients": [
			["Titan", 1],
			["Mars", 1],
			["The Moon", 1],
			["Earth Orbit", 1],
			["Venus", 1],
			["Io", 1],
			["Enceladus", 1]
		],
		"count": 1
	},
	"遗迹: Kintups Yyhsdap": {
		"map": [
			["Titan", "Mars", "The Moon"],
			["Earth Orbit", "Venus", "Io"],
			["Enceladus", null, null]
		],
		"ingredients": [
			["Titan", 1],
			["Mars", 1],
			["The Moon", 1],
			["Earth Orbit", 1],
			["Venus", 1],
			["Io", 1],
			["Enceladus", 1]
		],
		"count": 1
	},
	"遗迹搜查机": {
		"type": "增强型工作台",
		"map": [
			["超负荷板", null, "超负荷板"],
			["高级处理单元", null, "高级处理单元"],
			["超负荷板", "黏性活塞", "超负荷板"]
		],
		"ingredients": [
			["超负荷板", 4],
			["高级处理单元", 2],
			["黏性活塞", 1]
		],
		"count": 1
	},
	"水平粒子 (Up)": {
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"水平粒子 (Down)": {
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"垂直粒子 (Left)": {
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"垂直粒子 (Right)": {
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"冷凝粒子": {
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"不稳定的锭": {
		"map": [
			["起泡锭", "水平粒子 (Up)", "起泡锭"],
			["垂直粒子 (Left)", "钻石块", "垂直粒子 (Right)"],
			["起泡锭", "水平粒子 (Down)", "起泡锭"]
		],
		"ingredients": [
			["起泡锭", 4],
			["水平粒子 (Up)", 1],
			["垂直粒子 (Left)", 1],
			["钻石块", 1],
			["垂直粒子 (Right)", 1],
			["水平粒子 (Down)", 1]
		],
		"count": 1
	},
	"不稳定的锭 (75%)": {
		"map": [
			["不稳定的锭", "冷凝粒子", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["不稳定的锭", 1],
			["冷凝粒子", 1]
		],
		"count": 1
	},
	"不稳定的锭 (50%)": {
		"map": [
			["不稳定的锭 (75%)", "冷凝粒子", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["不稳定的锭 (75%)", 1],
			["冷凝粒子", 1]
		],
		"count": 1
	},
	"不稳定的锭 (25%)": {
		"map": [
			["不稳定的锭 (50%)", "冷凝粒子", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["不稳定的锭 (50%)", 1],
			["冷凝粒子", 1]
		],
		"count": 1
	},
	"未充能的水平粒子 (Up)": {
		"map": [
			["水平粒子 (Up)", "水平粒子 (Up)", "水平粒子 (Up)"],
			["水平粒子 (Up)", "稳定的锭块", "水平粒子 (Up)"],
			["水平粒子 (Up)", "水平粒子 (Up)", "水平粒子 (Up)"]
		],
		"ingredients": [
			["水平粒子 (Up)", 8],
			["稳定的锭块", 1]
		],
		"count": 1
	},
	"未充能的水平粒子 (Down)": {
		"map": [
			["水平粒子 (Down)", "水平粒子 (Down)", "水平粒子 (Down)"],
			["水平粒子 (Down)", "稳定的锭块", "水平粒子 (Down)"],
			["水平粒子 (Down)", "水平粒子 (Down)", "水平粒子 (Down)"]
		],
		"ingredients": [
			["水平粒子 (Down)", 8],
			["稳定的锭块", 1]
		],
		"count": 1
	},
	"未充能的垂直粒子 (Left)": {
		"map": [
			["垂直粒子 (Left)", "垂直粒子 (Left)", "垂直粒子 (Left)"],
			["垂直粒子 (Left)", "稳定的锭块", "垂直粒子 (Left)"],
			["垂直粒子 (Left)", "垂直粒子 (Left)", "垂直粒子 (Left)"]
		],
		"ingredients": [
			["垂直粒子 (Left)", 8],
			["稳定的锭块", 1]
		],
		"count": 1
	},
	"未充能的垂直粒子 (Right)": {
		"map": [
			["垂直粒子 (Right)", "垂直粒子 (Right)", "垂直粒子 (Right)"],
			["垂直粒子 (Right)", "稳定的锭块", "垂直粒子 (Right)"],
			["垂直粒子 (Right)", "垂直粒子 (Right)", "垂直粒子 (Right)"]
		],
		"ingredients": [
			["垂直粒子 (Right)", 8],
			["稳定的锭块", 1]
		],
		"count": 1
	},
	"稳定的锭": {
		"map": [
			["不稳定的锭 (25%)", "冷凝粒子", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["不稳定的锭 (25%)", 1],
			["冷凝粒子", 1]
		],
		"count": 1
	},
	"稳定的锭块": {
		"map": [
			["稳定的锭", "稳定的锭", "稳定的锭"],
			["稳定的锭", "稳定的锭", "稳定的锭"],
			["稳定的锭", "稳定的锭", "稳定的锭"]
		],
		"ingredients": [
			["稳定的锭", 9]
		],
		"count": 1
	},
	"粒子发电机": {
		"map": [
			["冷凝粒子", "水平粒子 (Up)", "冷凝粒子"],
			["垂直粒子 (Left)", "冷凝粒子", "垂直粒子 (Right)"],
			["冷凝粒子", "水平粒子 (Down)", "冷凝粒子"]
		],
		"ingredients": [
			["冷凝粒子", 5],
			["水平粒子 (Up)", 1],
			["垂直粒子 (Left)", 1],
			["垂直粒子 (Right)", 1],
			["水平粒子 (Down)", 1]
		],
		"count": 1
	},
	"纳米工作台": {
		"type": "多方块结构",
		"map": [
			[null, null, null],
			["末地烛", null, null],
			["錾制石砖", "工作台", "发射器"]
		],
		"ingredients": [
			["末地烛", 1],
			["錾制石砖", 1],
			["工作台", 1],
			["发射器", 1]
		],
		"count": 1
	},
	"粒子生产机": {
		"map": [
			["起泡锭", "钢筋板", "起泡锭"],
			["人造绿宝石", "下界之星反应堆", "人造绿宝石"],
			["起泡锭", "钢筋板", "起泡锭"]
		],
		"ingredients": [
			["起泡锭", 4],
			["钢筋板", 2],
			["人造绿宝石", 2],
			["下界之星反应堆", 1]
		],
		"count": 1
	},
	"充能水平粒子 (Up)": {
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"充能水平粒子 (Down)": {
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"充能垂直粒子 (Left)": {
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"充能垂直粒子 (Right)": {
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"超能力核心 (S)": {
		"map": [
			["稳定的锭块", "充能水平粒子 (Up)", "稳定的锭块"],
			["充能水平粒子 (Up)", "稳定的锭", "充能水平粒子 (Up)"],
			["稳定的锭块", "充能水平粒子 (Up)", "稳定的锭块"]
		],
		"ingredients": [
			["稳定的锭块", 4],
			["充能水平粒子 (Up)", 4],
			["稳定的锭", 1]
		],
		"count": 1
	},
	"超能力核心 (A)": {
		"map": [
			["稳定的锭块", "充能水平粒子 (Down)", "稳定的锭块"],
			["充能水平粒子 (Down)", "稳定的锭", "充能水平粒子 (Down)"],
			["稳定的锭块", "充能水平粒子 (Down)", "稳定的锭块"]
		],
		"ingredients": [
			["稳定的锭块", 4],
			["充能水平粒子 (Down)", 4],
			["稳定的锭", 1]
		],
		"count": 1
	},
	"超能力核心 (F)": {
		"map": [
			["稳定的锭块", "充能垂直粒子 (Left)", "稳定的锭块"],
			["充能垂直粒子 (Left)", "稳定的锭", "充能垂直粒子 (Left)"],
			["稳定的锭块", "充能垂直粒子 (Left)", "稳定的锭块"]
		],
		"ingredients": [
			["稳定的锭块", 4],
			["充能垂直粒子 (Left)", 4],
			["稳定的锭", 1]
		],
		"count": 1
	},
	"超能力核心 (H)": {
		"map": [
			["稳定的锭块", "充能垂直粒子 (Right)", "稳定的锭块"],
			["充能垂直粒子 (Right)", "稳定的锭", "充能垂直粒子 (Right)"],
			["稳定的锭块", "充能垂直粒子 (Right)", "稳定的锭块"]
		],
		"ingredients": [
			["稳定的锭块", 4],
			["充能垂直粒子 (Right)", 4],
			["稳定的锭", 1]
		],
		"count": 1
	},
	"超能力核心 (R)": {
		"map": [
			["稳定的锭块", "充能水平粒子 (Up)", "稳定的锭块"],
			["充能垂直粒子 (Left)", "稳定的锭", "充能垂直粒子 (Right)"],
			["稳定的锭块", "充能水平粒子 (Down)", "稳定的锭块"]
		],
		"ingredients": [
			["稳定的锭块", 4],
			["充能水平粒子 (Up)", 1],
			["充能垂直粒子 (Left)", 1],
			["稳定的锭", 1],
			["充能垂直粒子 (Right)", 1],
			["充能水平粒子 (Down)", 1]
		],
		"count": 1
	},
	"垂直偏振器": {
		"map": [
			["水平粒子 (Down)", "水平粒子 (Up)", "水平粒子 (Down)"],
			["水平粒子 (Up)", "末地烛", "水平粒子 (Up)"],
			["水平粒子 (Down)", "水平粒子 (Up)", "水平粒子 (Down)"]
		],
		"ingredients": [
			["水平粒子 (Down)", 4],
			["水平粒子 (Up)", 4],
			["末地烛", 1]
		],
		"count": 1
	},
	"水平偏振器": {
		"map": [
			["垂直粒子 (Right)", "垂直粒子 (Left)", "垂直粒子 (Right)"],
			["垂直粒子 (Left)", "末地烛", "垂直粒子 (Left)"],
			["垂直粒子 (Right)", "垂直粒子 (Left)", "垂直粒子 (Right)"]
		],
		"ingredients": [
			["垂直粒子 (Right)", 4],
			["垂直粒子 (Left)", 4],
			["末地烛", 1]
		],
		"count": 1
	},
	"粒子冷凝机": {
		"map": [
			["高级电路板", "水平粒子 (Up)", "高级电路板"],
			["垂直粒子 (Left)", "加热压力舱 - II", "垂直粒子 (Right)"],
			["钢筋板", "水平粒子 (Down)", "钢筋板"]
		],
		"ingredients": [
			["高级电路板", 2],
			["水平粒子 (Up)", 1],
			["垂直粒子 (Left)", 1],
			["加热压力舱 - II", 1],
			["垂直粒子 (Right)", 1],
			["钢筋板", 2],
			["水平粒子 (Down)", 1]
		],
		"count": 1
	},
	"粒子转向机": {
		"map": [
			["冷凝粒子", "水平粒子 (Up)", "冷凝粒子"],
			["垂直粒子 (Left)", "粒子生产机", "垂直粒子 (Right)"],
			["冷凝粒子", "水平粒子 (Down)", "冷凝粒子"]
		],
		"ingredients": [
			["冷凝粒子", 4],
			["水平粒子 (Up)", 1],
			["垂直粒子 (Left)", 1],
			["粒子生产机", 1],
			["垂直粒子 (Right)", 1],
			["水平粒子 (Down)", 1]
		],
		"count": 1
	},
	"稳定器": {
		"map": [
			["冷凝粒子", "水平粒子 (Up)", "冷凝粒子"],
			["垂直粒子 (Left)", "不稳定的锭", "垂直粒子 (Right)"],
			["冷凝粒子", "水平粒子 (Down)", "冷凝粒子"]
		],
		"ingredients": [
			["冷凝粒子", 4],
			["水平粒子 (Up)", 1],
			["垂直粒子 (Left)", 1],
			["不稳定的锭", 1],
			["垂直粒子 (Right)", 1],
			["水平粒子 (Down)", 1]
		],
		"count": 1
	},
	"粒子过载机": {
		"map": [
			["冷凝粒子", "水平粒子 (Up)", "冷凝粒子"],
			["垂直粒子 (Left)", "稳定的锭块", "垂直粒子 (Right)"],
			["冷凝粒子", "水平粒子 (Down)", "冷凝粒子"]
		],
		"ingredients": [
			["冷凝粒子", 4],
			["水平粒子 (Up)", 1],
			["垂直粒子 (Left)", 1],
			["稳定的锭块", 1],
			["垂直粒子 (Right)", 1],
			["水平粒子 (Down)", 1]
		],
		"count": 1
	},
	"末地科技指南书": {
		"type": "空配方",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"一阶便携充电器": {
		"type": "增强型工作台",
		"map": [
			["钢锭", "铜线", "钢锭"],
			["钢锭", "小型储能电容", "钢锭"],
			["红砖", "钢板", "红砖"]
		],
		"ingredients": [
			["钢锭", 4],
			["铜线", 1],
			["小型储能电容", 1],
			["红砖", 2],
			["钢板", 1]
		],
		"count": 1
	},
	"二阶便携充电器": {
		"type": "增强型工作台",
		"map": [
			["钢锭", "铜线", "钢锭"],
			["钢锭", "中型储能电容", "钢锭"],
			["铁锭", "钢板", "铁锭"]
		],
		"ingredients": [
			["钢锭", 4],
			["铜线", 1],
			["中型储能电容", 1],
			["铁锭", 2],
			["钢板", 1]
		],
		"count": 1
	},
	"三阶便携充电器": {
		"type": "增强型工作台",
		"map": [
			["钢锭", "铜线", "钢锭"],
			["钢锭", "大型储能电容", "钢锭"],
			["金锭", "钢板", "金锭"]
		],
		"ingredients": [
			["钢锭", 4],
			["铜线", 1],
			["大型储能电容", 1],
			["金锭", 2],
			["钢板", 1]
		],
		"count": 1
	},
	"四阶便携充电器": {
		"type": "增强型工作台",
		"map": [
			["钢锭", "铜线", "钢锭"],
			["钢锭", "巨型储能电容", "钢锭"],
			["下界砖", "钢板", "下界砖"]
		],
		"ingredients": [
			["钢锭", 4],
			["铜线", 1],
			["巨型储能电容", 1],
			["下界砖", 2],
			["钢板", 1]
		],
		"count": 1
	},
	"五阶便携充电器": {
		"type": "增强型工作台",
		"map": [
			["钢锭", "铜线", "钢锭"],
			["钢锭", "黑金刚石镶边储能电容", "钢锭"],
			["下界合金锭", "钢板", "下界合金锭"]
		],
		"ingredients": [
			["钢锭", 4],
			["铜线", 1],
			["黑金刚石镶边储能电容", 1],
			["下界合金锭", 2],
			["钢板", 1]
		],
		"count": 1
	},
	"手摇发电机": {
		"type": "多方块结构",
		"map": [
			[null, null, null],
			[null, "拉杆", null],
			[null, "发电机芯", null]
		],
		"ingredients": [
			["拉杆", 1],
			["发电机芯", 1]
		],
		"count": 1
	},
	"铸造厂": {
		"type": "多方块结构",
		"map": [
			["下界合金块", "超热炉", "下界合金块"],
			["下界合金块", "玻璃", "下界合金块"],
			["下界合金块", "炼药锅", "下界合金块"]
		],
		"ingredients": [
			["下界合金块", 6],
			["超热炉", 1],
			["玻璃", 1],
			["炼药锅", 1]
		],
		"count": 1
	},
	"经验收集器": {
		"type": "多方块结构",
		"map": [
			[null, null, null],
			[null, "砂轮", null],
			[null, "发射器", null]
		],
		"ingredients": [
			["砂轮", 1],
			["发射器", 1]
		],
		"count": 1
	},
	"喷壶": {
		"type": "增强型工作台",
		"map": [
			["铁锭", null, "铁锭"],
			["铁锭", "桶", "铁锭"],
			[null, "铁锭", null]
		],
		"ingredients": [
			["铁锭", 5],
			["桶", 1]
		],
		"count": 1
	},
	"镰刀": {
		"type": "增强型工作台",
		"map": [
			[null, "铁锭", "铁锭"],
			[null, "铁锄", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["铁锭", 2],
			["铁锄", 1],
			["木棍", 1]
		],
		"count": 1
	},
	"扳手": {
		"type": "增强型工作台",
		"map": [
			["铜锭", null, "铜锭"],
			["铜锭", "铜锭", "铜锭"],
			[null, "铜锭", null]
		],
		"ingredients": [
			["铜锭", 6]
		],
		"count": 1
	},
	"改进扳手": {
		"type": "增强型工作台",
		"map": [
			["强化合金锭", null, "强化合金锭"],
			["强化合金锭", "扳手", "强化合金锭"],
			[null, "人造钻石", null]
		],
		"ingredients": [
			["强化合金锭", 4],
			["扳手", 1],
			["人造钻石", 1]
		],
		"count": 1
	},
	"精制扳手": {
		"type": "增强型工作台",
		"map": [
			["黑金刚石", null, "黑金刚石"],
			["黑金刚石", "改进扳手", "黑金刚石"],
			[null, "黑金刚石镶边储能电容", null]
		],
		"ingredients": [
			["黑金刚石", 4],
			["改进扳手", 1],
			["黑金刚石镶边储能电容", 1]
		],
		"count": 1
	},
	"改进斧头": {
		"type": "增强型工作台",
		"map": [
			[null, "钻石", "钻石"],
			[null, "伐木斧", null],
			[null, "黑曜石", null]
		],
		"ingredients": [
			["钻石", 2],
			["伐木斧", 1],
			["黑曜石", 1]
		],
		"count": 1
	},
	"改进爆破镐": {
		"type": "增强型工作台",
		"map": [
			["人造绿宝石", "人造绿宝石", "人造绿宝石"],
			["TNT", "爆炸稿", "TNT"],
			[null, "黑曜石", null]
		],
		"ingredients": [
			["人造绿宝石", 3],
			["TNT", 2],
			["爆炸稿", 1],
			["黑曜石", 1]
		],
		"count": 1
	},
	"改进爆破铲": {
		"type": "增强型工作台",
		"map": [
			["人造绿宝石", "人造绿宝石", "人造绿宝石"],
			["TNT", "爆炸铲", "TNT"],
			[null, "黑曜石", null]
		],
		"ingredients": [
			["人造绿宝石", 3],
			["TNT", 2],
			["爆炸铲", 1],
			["黑曜石", 1]
		],
		"count": 1
	},
	"多功能工具": {
		"type": "增强型工作台",
		"map": [
			["人造绿宝石", "钻石镐", "人造绿宝石"],
			["强化合金锭", "钻石斧", "强化合金锭"],
			["人造钻石", "钻石锹", "人造钻石"]
		],
		"ingredients": [
			["人造绿宝石", 2],
			["钻石镐", 1],
			["强化合金锭", 2],
			["钻石斧", 1],
			["人造钻石", 2],
			["钻石锹", 1]
		],
		"count": 1
	},
	"洒水机": {
		"type": "增强型工作台",
		"map": [
			["铁锭", "电动马达", "铁锭"],
			["桶", "发射器", "桶"],
			["铁锭", "小型储能电容", "铁锭"]
		],
		"ingredients": [
			["铁锭", 4],
			["电动马达", 1],
			["桶", 2],
			["发射器", 1],
			["小型储能电容", 1]
		],
		"count": 1
	},
	"全自动工作台(原版)": {
		"type": "增强型工作台",
		"map": [
			["工作台", "基础电路板", "工作台"],
			["货运马达", "起泡锭", "货运马达"],
			["工作台", "电动马达", "工作台"]
		],
		"ingredients": [
			["工作台", 4],
			["基础电路板", 1],
			["货运马达", 2],
			["起泡锭", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"全自动远古祭坛": {
		"type": "增强型工作台",
		"map": [
			["古代基座", "中型储能电容", "古代基座"],
			["古代基座", "古代祭坛", "古代基座"],
			["古代基座", "电动马达", "古代基座"]
		],
		"ingredients": [
			["古代基座", 6],
			["中型储能电容", 1],
			["古代祭坛", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"Auto Enhanced Crafting Table": {
		"type": "增强型工作台",
		"map": [
			["工作台", "高级电路板", "工作台"],
			["货运马达", "起泡锭", "货运马达"],
			["工作台", "电动马达", "工作台"]
		],
		"ingredients": [
			["工作台", 4],
			["高级电路板", 1],
			["货运马达", 2],
			["起泡锭", 1],
			["电动马达", 1]
		],
		"count": 1
	},
	"全自动切石机": {
		"type": "增强型工作台",
		"map": [
			["高级电路板", "中型储能电容", "高级电路板"],
			["平滑石台阶", "切石机", "平滑石台阶"],
			["电动马达", "铁块", "电动马达"]
		],
		"ingredients": [
			["高级电路板", 2],
			["中型储能电容", 1],
			["平滑石台阶", 2],
			["切石机", 1],
			["电动马达", 2],
			["铁块", 1]
		],
		"count": 1
	},
	"自动魔法工作台": {
		"type": "增强型工作台",
		"map": [
			["书架", "高级电路板", "书架"],
			["书架", "工作台", "发射器"],
			["书架", "全自动工作台(原版)", "书架"]
		],
		"ingredients": [
			["书架", 5],
			["高级电路板", 1],
			["工作台", 1],
			["发射器", 1],
			["全自动工作台(原版)", 1]
		],
		"count": 1
	},
	"全自动盔甲锻造机": {
		"type": "增强型工作台",
		"map": [
			["铁砧", "铁砧", "铁砧"],
			["高级电路板", "发射器", "高级电路板"],
			["铁砧", "全自动工作台(原版)", "铁砧"]
		],
		"ingredients": [
			["铁砧", 5],
			["高级电路板", 2],
			["发射器", 1],
			["全自动工作台(原版)", 1]
		],
		"count": 1
	},
	"高级全自动驱魔机": {
		"type": "增强型工作台",
		"map": [
			["红石合金锭", "自动铁砧 Mk.II", "红石合金锭"],
			["起泡锭", "自动祛魔机", "起泡锭"],
			["防凋灵黑曜石", "防凋灵黑曜石", "防凋灵黑曜石"]
		],
		"ingredients": [
			["红石合金锭", 2],
			["自动铁砧 Mk.II", 1],
			["起泡锭", 2],
			["自动祛魔机", 1],
			["防凋灵黑曜石", 3]
		],
		"count": 1
	},
	"背包装载机": {
		"type": "增强型工作台",
		"map": [
			["橙色染色玻璃", "橙色染色玻璃", "橙色染色玻璃"],
			["铁锭", "漏斗", "铁锭"],
			["电动马达", "大型储能电容", "电动马达"]
		],
		"ingredients": [
			["橙色染色玻璃", 3],
			["铁锭", 2],
			["漏斗", 1],
			["电动马达", 2],
			["大型储能电容", 1]
		],
		"count": 1
	},
	"背包卸载机": {
		"type": "增强型工作台",
		"map": [
			["棕色染色玻璃", "棕色染色玻璃", "棕色染色玻璃"],
			["铁锭", "发射器", "铁锭"],
			["电动马达", "大型储能电容", "电动马达"]
		],
		"ingredients": [
			["棕色染色玻璃", 3],
			["铁锭", 2],
			["发射器", 1],
			["电动马达", 2],
			["大型储能电容", 1]
		],
		"count": 1
	},
	"发电机芯": {
		"type": "增强型工作台",
		"map": [
			["铁锭", "铁锭", "铁锭"],
			["铁锭", "电磁铁", "铁锭"],
			["铁锭", "高级电路板", "铁锭"]
		],
		"ingredients": [
			["铁锭", 7],
			["电磁铁", 1],
			["高级电路板", 1]
		],
		"count": 1
	},
	"超热炉": {
		"type": "增强型工作台",
		"map": [
			["黑曜石", "黑曜石", "黑曜石"],
			["熔岩桶", "高炉", "熔岩桶"],
			["黑曜石", "黑曜石", "黑曜石"]
		],
		"ingredients": [
			["黑曜石", 6],
			["熔岩桶", 2],
			["高炉", 1]
		],
		"count": 1
	},
	"直升机帽": {
		"type": "增强型工作台",
		"map": [
			["铁锭", "铁锭", "铁锭"],
			["高级电路板", "皮革帽子", "高级电路板"],
			["压缩碳", "电动马达", "压缩碳"]
		],
		"ingredients": [
			["铁锭", 3],
			["高级电路板", 2],
			["皮革帽子", 1],
			["压缩碳", 2],
			["电动马达", 1]
		],
		"count": 1
	},
	"古代符文[防火]": {
		"type": "增强型工作台",
		"map": [
			["人造绿宝石", "下界合金锭", "人造绿宝石"],
			["黑曜石", "古代符文 [火]", "黑曜石"],
			["人造绿宝石", "黑曜石", "人造绿宝石"]
		],
		"ingredients": [
			["人造绿宝石", 4],
			["下界合金锭", 1],
			["黑曜石", 3],
			["古代符文 [火]", 1]
		],
		"count": 1
	},
	"末影货运节点(输入)": {
		"type": "增强型工作台",
		"map": [
			["末影结晶 - II", "基础电路板", "末影结晶 - II"],
			["发射器", "末影珍珠", "漏斗"],
			["末影结晶 - II", "基础电路板", "末影结晶 - II"]
		],
		"ingredients": [
			["末影结晶 - II", 4],
			["基础电路板", 2],
			["发射器", 1],
			["末影珍珠", 1],
			["漏斗", 1]
		],
		"count": 1
	},
	"末影货运节点(输出)": {
		"type": "增强型工作台",
		"map": [
			["末影结晶 - II", "基础电路板", "末影结晶 - II"],
			["漏斗", "末影珍珠", "发射器"],
			["末影结晶 - II", "基础电路板", "末影结晶 - II"]
		],
		"ingredients": [
			["末影结晶 - II", 4],
			["基础电路板", 2],
			["漏斗", 1],
			["末影珍珠", 1],
			["发射器", 1]
		],
		"count": 1
	},
	"箱子搬运车": {
		"type": "增强型工作台",
		"map": [
			["皮革", "皮革", "皮革"],
			["铁锭", "矿车", "铁锭"],
			["铁锭", "铁锭", "铁锭"]
		],
		"ingredients": [
			["皮革", 3],
			["铁锭", 5],
			["矿车", 1]
		],
		"count": 1
	},
	"远古之书": {
		"type": "古代祭坛",
		"map": [
			["书", "学识之瓶", "书"],
			["学识之瓶", "古代符文 [附魔]", "学识之瓶"],
			["书", "学识之瓶", "书"]
		],
		"ingredients": [
			["书", 4],
			["学识之瓶", 4],
			["古代符文 [附魔]", 1]
		],
		"count": 1
	},
	"传送装置": {
		"type": "增强型工作台",
		"map": [
			["末影之眼", "末影之眼", "末影之眼"],
			["末影之眼", "GPS 信号塔", "末影之眼"],
			["末影之眼", "末影之眼", "末影之眼"]
		],
		"ingredients": [
			["末影之眼", 8],
			["GPS 信号塔", 1]
		],
		"count": 1
	},
	"传送装置配置器": {
		"type": "增强型工作台",
		"map": [
			[null, "末影之眼", null],
			[null, "镁锭", null],
			[null, "镁锭", null]
		],
		"ingredients": [
			["末影之眼", 1],
			["镁锭", 2]
		],
		"count": 1
	},
	"粉尘制造机": {
		"type": "增强型工作台",
		"map": [
			["电力碎矿机 (II)", "电力碎矿机 (II)", "电力碎矿机 (II)"],
			["电动淘金机 (III)", "起泡锭", "电动淘金机 (III)"],
			["电动马达", "电动洗矿机 (III)", "电动马达"]
		],
		"ingredients": [
			["电力碎矿机 (II)", 3],
			["电动淘金机 (III)", 2],
			["起泡锭", 1],
			["电动马达", 2],
			["电动洗矿机 (III)", 1]
		],
		"count": 1
	},
	"粉尘回收机": {
		"type": "增强型工作台",
		"map": [
			["熔岩桶", "活塞", "熔岩桶"],
			["熔岩桶", "电动坩埚 - III", "熔岩桶"],
			["电动马达", "活塞", "电动马达"]
		],
		"ingredients": [
			["熔岩桶", 4],
			["活塞", 2],
			["电动坩埚 - III", 1],
			["电动马达", 2]
		],
		"count": 1
	},
	"备用电梯板": {
		"type": "增强型工作台",
		"map": [
			["石质压力板", "石质压力板", "石质压力板"],
			["活塞", "电动马达", "活塞"],
			["铝青铜锭", "铝青铜锭", "铝青铜锭"]
		],
		"ingredients": [
			["石质压力板", 3],
			["活塞", 2],
			["电动马达", 1],
			["铝青铜锭", 3]
		],
		"count": 2
	},
	"高级充电台": {
		"type": "增强型工作台",
		"map": [
			["科林斯青铜锭", "高级电路板", "科林斯青铜锭"],
			["高级电路板", "充电台", "高级电路板"],
			["电动马达", "小型储能电容", "电动马达"]
		],
		"ingredients": [
			["科林斯青铜锭", 2],
			["高级电路板", 3],
			["充电台", 1],
			["电动马达", 2],
			["小型储能电容", 1]
		],
		"count": 1
	},
	"高级充电台升级卡": {
		"type": "增强型工作台",
		"map": [
			["科林斯青铜锭", "高级电路板", "科林斯青铜锭"],
			["高级电路板", "电动马达", "高级电路板"],
			["金锭 (24克拉)", "小型储能电容", "金锭 (24克拉)"]
		],
		"ingredients": [
			["科林斯青铜锭", 2],
			["高级电路板", 3],
			["电动马达", 1],
			["金锭 (24克拉)", 2],
			["小型储能电容", 1]
		],
		"count": 1
	},
	"货运配置器": {
		"type": "增强型工作台",
		"map": [
			["货运马达", "末影之眼", "电动马达"],
			["末影之眼", "指南针", "末影之眼"],
			["电动马达", "末影之眼", "货运马达"]
		],
		"ingredients": [
			["货运马达", 2],
			["末影之眼", 4],
			["电动马达", 2],
			["指南针", 1]
		],
		"count": 1
	},
	"智能工厂": {
		"type": "增强型工作台",
		"map": [
			["货运马达", "电力冶炼炉 - II", "货运马达"],
			["自动合成机 (高级)", "碳压机 - III", "自动合成机 (原版)"],
			["合成机马达", "电动铸锭机 (III)", "合成机马达"]
		],
		"ingredients": [
			["货运马达", 2],
			["电力冶炼炉 - II", 1],
			["自动合成机 (高级)", 1],
			["碳压机 - III", 1],
			["自动合成机 (原版)", 1],
			["合成机马达", 2],
			["电动铸锭机 (III)", 1]
		],
		"count": 1
	},
	"迷你蓬松箱子": {
		"type": "增强型工作台",
		"map": [
			["橡木台阶", "木桶", "橡木台阶"],
			["橡木台阶", "木桶", "橡木台阶"],
			["钢板", "钢板", "钢板"]
		],
		"ingredients": [
			["橡木台阶", 4],
			["木桶", 2],
			["钢板", 3]
		],
		"count": 1
	},
	"一阶蓬松箱子": {
		"type": "增强型工作台",
		"map": [
			["橡木原木", "木桶", "橡木原木"],
			["橡木原木", "木桶", "橡木原木"],
			["橡木原木", "钢筋板", "橡木原木"]
		],
		"ingredients": [
			["橡木原木", 6],
			["木桶", 2],
			["钢筋板", 1]
		],
		"count": 1
	},
	"二阶蓬松箱子": {
		"type": "增强型工作台",
		"map": [
			["平滑石头", "一阶蓬松箱子", "平滑石头"],
			["平滑石头", "一阶蓬松箱子", "平滑石头"],
			["平滑石头", "钢筋板", "平滑石头"]
		],
		"ingredients": [
			["平滑石头", 6],
			["一阶蓬松箱子", 2],
			["钢筋板", 1]
		],
		"count": 1
	},
	"三阶蓬松箱子": {
		"type": "增强型工作台",
		"map": [
			["砖块", "二阶蓬松箱子", "砖块"],
			["砖块", "二阶蓬松箱子", "砖块"],
			["砖块", "钢筋板", "砖块"]
		],
		"ingredients": [
			["砖块", 6],
			["二阶蓬松箱子", 2],
			["钢筋板", 1]
		],
		"count": 1
	},
	"四阶蓬松箱子": {
		"type": "增强型工作台",
		"map": [
			["铁块", "三阶蓬松箱子", "铁块"],
			["铁块", "三阶蓬松箱子", "铁块"],
			["铁块", "钢筋板", "铁块"]
		],
		"ingredients": [
			["铁块", 6],
			["三阶蓬松箱子", 2],
			["钢筋板", 1]
		],
		"count": 1
	},
	"五阶蓬松箱子": {
		"type": "增强型工作台",
		"map": [
			["黑曜石", "四阶蓬松箱子", "黑曜石"],
			["黑曜石", "四阶蓬松箱子", "黑曜石"],
			["黑曜石", "钢筋板", "黑曜石"]
		],
		"ingredients": [
			["黑曜石", 6],
			["四阶蓬松箱子", 2],
			["钢筋板", 1]
		],
		"count": 1
	},
	"六阶蓬松箱子": {
		"type": "增强型工作台",
		"map": [
			["钢筋板", "五阶蓬松箱子", "钢筋板"],
			["钢筋板", "五阶蓬松箱子", "钢筋板"],
			["钢筋板", "起泡锭", "钢筋板"]
		],
		"ingredients": [
			["钢筋板", 6],
			["五阶蓬松箱子", 2],
			["起泡锭", 1]
		],
		"count": 1
	},
	"鸡笼子": {
		"type": "增强型工作台",
		"map": [
			[null, "线", "线"],
			[null, "木棍", "线"],
			[null, "木棍", null]
		],
		"ingredients": [
			["线", 3],
			["木棍", 2]
		],
		"count": 1
	},
	"基因测序仪": {
		"type": "增强型工作台",
		"map": [
			["橡木木板", null, "橡木木板"],
			["圆石", "侦测器", "圆石"],
			["圆石", "高级电路板", "圆石"]
		],
		"ingredients": [
			["橡木木板", 2],
			["圆石", 4],
			["侦测器", 1],
			["高级电路板", 1]
		],
		"count": 1
	},
	"鸡舍": {
		"type": "增强型工作台",
		"map": [
			["白桦木板", "白桦木板", "白桦木板"],
			["唱片机", "红色床", "虞美人"],
			["白桦木板", "加热线圈", "白桦木板"]
		],
		"ingredients": [
			["白桦木板", 5],
			["唱片机", 1],
			["红色床", 1],
			["虞美人", 1],
			["加热线圈", 1]
		],
		"count": 1
	},
	"鼓舞室": {
		"type": "增强型工作台",
		"map": [
			["黑石", "小型储能电容", "黑石"],
			["锁链", null, "锁链"],
			["石头", "电动马达", "石头"]
		],
		"ingredients": [
			["黑石", 2],
			["小型储能电容", 1],
			["锁链", 2],
			["石头", 2],
			["电动马达", 1]
		],
		"count": 1
	},
	"加强版鼓舞室": {
		"type": "增强型工作台",
		"map": [
			["铅锭", "起泡锭", "铅锭"],
			["起泡锭", "鼓舞室", "起泡锭"],
			["铅锭", "起泡锭", "铅锭"]
		],
		"ingredients": [
			["铅锭", 4],
			["起泡锭", 4],
			["鼓舞室", 1]
		],
		"count": 1
	},
	"终级鼓舞室": {
		"type": "古代祭坛",
		"map": [
			["魔法结晶 - III", "核反应堆", "魔法结晶 - III"],
			["钢筋板", "加强版鼓舞室", "钢筋板"],
			["魔法结晶 - III", "铀", "魔法结晶 - III"]
		],
		"ingredients": [
			["魔法结晶 - III", 4],
			["核反应堆", 1],
			["钢筋板", 2],
			["加强版鼓舞室", 1],
			["铀", 1]
		],
		"count": 1
	},
	"小型背包 (白色)": {
		"type": "增强型工作台",
		"map": [
			["白色羊毛", "白色羊毛", "白色羊毛"],
			["皮革", "小型背包", "皮革"],
			["白色羊毛", "白色羊毛", "白色羊毛"]
		],
		"ingredients": [
			["白色羊毛", 6],
			["皮革", 2],
			["小型背包", 1]
		],
		"count": 1
	},
	"小型背包 (橙色)": {
		"type": "增强型工作台",
		"map": [
			["橙色羊毛", "橙色羊毛", "橙色羊毛"],
			["皮革", "小型背包", "皮革"],
			["橙色羊毛", "橙色羊毛", "橙色羊毛"]
		],
		"ingredients": [
			["橙色羊毛", 6],
			["皮革", 2],
			["小型背包", 1]
		],
		"count": 1
	},
	"小型背包 (品红色)": {
		"type": "增强型工作台",
		"map": [
			["品红色羊毛", "品红色羊毛", "品红色羊毛"],
			["皮革", "小型背包", "皮革"],
			["品红色羊毛", "品红色羊毛", "品红色羊毛"]
		],
		"ingredients": [
			["品红色羊毛", 6],
			["皮革", 2],
			["小型背包", 1]
		],
		"count": 1
	},
	"小型背包 (浅蓝色)": {
		"type": "增强型工作台",
		"map": [
			["淡蓝色羊毛", "淡蓝色羊毛", "淡蓝色羊毛"],
			["皮革", "小型背包", "皮革"],
			["淡蓝色羊毛", "淡蓝色羊毛", "淡蓝色羊毛"]
		],
		"ingredients": [
			["淡蓝色羊毛", 6],
			["皮革", 2],
			["小型背包", 1]
		],
		"count": 1
	},
	"小型背包 (黄色)": {
		"type": "增强型工作台",
		"map": [
			["黄色羊毛", "黄色羊毛", "黄色羊毛"],
			["皮革", "小型背包", "皮革"],
			["黄色羊毛", "黄色羊毛", "黄色羊毛"]
		],
		"ingredients": [
			["黄色羊毛", 6],
			["皮革", 2],
			["小型背包", 1]
		],
		"count": 1
	},
	"小型背包 (浅绿色)": {
		"type": "增强型工作台",
		"map": [
			["黄绿色羊毛", "黄绿色羊毛", "黄绿色羊毛"],
			["皮革", "小型背包", "皮革"],
			["黄绿色羊毛", "黄绿色羊毛", "黄绿色羊毛"]
		],
		"ingredients": [
			["黄绿色羊毛", 6],
			["皮革", 2],
			["小型背包", 1]
		],
		"count": 1
	},
	"小型背包 (粉色)": {
		"type": "增强型工作台",
		"map": [
			["粉红色羊毛", "粉红色羊毛", "粉红色羊毛"],
			["皮革", "小型背包", "皮革"],
			["粉红色羊毛", "粉红色羊毛", "粉红色羊毛"]
		],
		"ingredients": [
			["粉红色羊毛", 6],
			["皮革", 2],
			["小型背包", 1]
		],
		"count": 1
	},
	"小型背包 (深灰色)": {
		"type": "增强型工作台",
		"map": [
			["灰色羊毛", "灰色羊毛", "灰色羊毛"],
			["皮革", "小型背包", "皮革"],
			["灰色羊毛", "灰色羊毛", "灰色羊毛"]
		],
		"ingredients": [
			["灰色羊毛", 6],
			["皮革", 2],
			["小型背包", 1]
		],
		"count": 1
	},
	"小型背包 (浅灰色)": {
		"type": "增强型工作台",
		"map": [
			["淡灰色羊毛", "淡灰色羊毛", "淡灰色羊毛"],
			["皮革", "小型背包", "皮革"],
			["淡灰色羊毛", "淡灰色羊毛", "淡灰色羊毛"]
		],
		"ingredients": [
			["淡灰色羊毛", 6],
			["皮革", 2],
			["小型背包", 1]
		],
		"count": 1
	},
	"小型背包 (青色)": {
		"type": "增强型工作台",
		"map": [
			["青色羊毛", "青色羊毛", "青色羊毛"],
			["皮革", "小型背包", "皮革"],
			["青色羊毛", "青色羊毛", "青色羊毛"]
		],
		"ingredients": [
			["青色羊毛", 6],
			["皮革", 2],
			["小型背包", 1]
		],
		"count": 1
	},
	"小型背包 (紫色)": {
		"type": "增强型工作台",
		"map": [
			["紫色羊毛", "紫色羊毛", "紫色羊毛"],
			["皮革", "小型背包", "皮革"],
			["紫色羊毛", "紫色羊毛", "紫色羊毛"]
		],
		"ingredients": [
			["紫色羊毛", 6],
			["皮革", 2],
			["小型背包", 1]
		],
		"count": 1
	},
	"小型背包 (蓝色)": {
		"type": "增强型工作台",
		"map": [
			["蓝色羊毛", "蓝色羊毛", "蓝色羊毛"],
			["皮革", "小型背包", "皮革"],
			["蓝色羊毛", "蓝色羊毛", "蓝色羊毛"]
		],
		"ingredients": [
			["蓝色羊毛", 6],
			["皮革", 2],
			["小型背包", 1]
		],
		"count": 1
	},
	"小型背包 (棕色)": {
		"type": "增强型工作台",
		"map": [
			["棕色羊毛", "棕色羊毛", "棕色羊毛"],
			["皮革", "小型背包", "皮革"],
			["棕色羊毛", "棕色羊毛", "棕色羊毛"]
		],
		"ingredients": [
			["棕色羊毛", 6],
			["皮革", 2],
			["小型背包", 1]
		],
		"count": 1
	},
	"小型背包 (绿色)": {
		"type": "增强型工作台",
		"map": [
			["绿色羊毛", "绿色羊毛", "绿色羊毛"],
			["皮革", "小型背包", "皮革"],
			["绿色羊毛", "绿色羊毛", "绿色羊毛"]
		],
		"ingredients": [
			["绿色羊毛", 6],
			["皮革", 2],
			["小型背包", 1]
		],
		"count": 1
	},
	"小型背包 (红色)": {
		"type": "增强型工作台",
		"map": [
			["红色羊毛", "红色羊毛", "红色羊毛"],
			["皮革", "小型背包", "皮革"],
			["红色羊毛", "红色羊毛", "红色羊毛"]
		],
		"ingredients": [
			["红色羊毛", 6],
			["皮革", 2],
			["小型背包", 1]
		],
		"count": 1
	},
	"小型背包 (黑色)": {
		"type": "增强型工作台",
		"map": [
			["黑色羊毛", "黑色羊毛", "黑色羊毛"],
			["皮革", "小型背包", "皮革"],
			["黑色羊毛", "黑色羊毛", "黑色羊毛"]
		],
		"ingredients": [
			["黑色羊毛", 6],
			["皮革", 2],
			["小型背包", 1]
		],
		"count": 1
	},
	"小型背包 (迷彩)": {
		"type": "增强型工作台",
		"map": [
			["金合欢树叶", "金合欢树叶", "金合欢树叶"],
			["皮革", "小型背包", "皮革"],
			["金合欢树叶", "金合欢树叶", "金合欢树叶"]
		],
		"ingredients": [
			["金合欢树叶", 6],
			["皮革", 2],
			["小型背包", 1]
		],
		"count": 1
	},
	"小型背包 (摩登)": {
		"type": "增强型工作台",
		"map": [
			["红石粉", "红石粉", "红石粉"],
			["皮革", "小型背包", "皮革"],
			["红石粉", "红石粉", "红石粉"]
		],
		"ingredients": [
			["红石粉", 6],
			["皮革", 2],
			["小型背包", 1]
		],
		"count": 1
	},
	"普通背包 (白色)": {
		"type": "增强型工作台",
		"map": [
			["白色羊毛", "白色羊毛", "白色羊毛"],
			["皮革", "普通背包", "皮革"],
			["白色羊毛", "白色羊毛", "白色羊毛"]
		],
		"ingredients": [
			["白色羊毛", 6],
			["皮革", 2],
			["普通背包", 1]
		],
		"count": 1
	},
	"普通背包 (橙色)": {
		"type": "增强型工作台",
		"map": [
			["橙色羊毛", "橙色羊毛", "橙色羊毛"],
			["皮革", "普通背包", "皮革"],
			["橙色羊毛", "橙色羊毛", "橙色羊毛"]
		],
		"ingredients": [
			["橙色羊毛", 6],
			["皮革", 2],
			["普通背包", 1]
		],
		"count": 1
	},
	"普通背包 (品红色)": {
		"type": "增强型工作台",
		"map": [
			["品红色羊毛", "品红色羊毛", "品红色羊毛"],
			["皮革", "普通背包", "皮革"],
			["品红色羊毛", "品红色羊毛", "品红色羊毛"]
		],
		"ingredients": [
			["品红色羊毛", 6],
			["皮革", 2],
			["普通背包", 1]
		],
		"count": 1
	},
	"普通背包 (浅蓝色)": {
		"type": "增强型工作台",
		"map": [
			["淡蓝色羊毛", "淡蓝色羊毛", "淡蓝色羊毛"],
			["皮革", "普通背包", "皮革"],
			["淡蓝色羊毛", "淡蓝色羊毛", "淡蓝色羊毛"]
		],
		"ingredients": [
			["淡蓝色羊毛", 6],
			["皮革", 2],
			["普通背包", 1]
		],
		"count": 1
	},
	"普通背包 (黄色)": {
		"type": "增强型工作台",
		"map": [
			["黄色羊毛", "黄色羊毛", "黄色羊毛"],
			["皮革", "普通背包", "皮革"],
			["黄色羊毛", "黄色羊毛", "黄色羊毛"]
		],
		"ingredients": [
			["黄色羊毛", 6],
			["皮革", 2],
			["普通背包", 1]
		],
		"count": 1
	},
	"普通背包 (浅绿色)": {
		"type": "增强型工作台",
		"map": [
			["黄绿色羊毛", "黄绿色羊毛", "黄绿色羊毛"],
			["皮革", "普通背包", "皮革"],
			["黄绿色羊毛", "黄绿色羊毛", "黄绿色羊毛"]
		],
		"ingredients": [
			["黄绿色羊毛", 6],
			["皮革", 2],
			["普通背包", 1]
		],
		"count": 1
	},
	"普通背包 (粉色)": {
		"type": "增强型工作台",
		"map": [
			["粉红色羊毛", "粉红色羊毛", "粉红色羊毛"],
			["皮革", "普通背包", "皮革"],
			["粉红色羊毛", "粉红色羊毛", "粉红色羊毛"]
		],
		"ingredients": [
			["粉红色羊毛", 6],
			["皮革", 2],
			["普通背包", 1]
		],
		"count": 1
	},
	"普通背包 (深灰色)": {
		"type": "增强型工作台",
		"map": [
			["灰色羊毛", "灰色羊毛", "灰色羊毛"],
			["皮革", "普通背包", "皮革"],
			["灰色羊毛", "灰色羊毛", "灰色羊毛"]
		],
		"ingredients": [
			["灰色羊毛", 6],
			["皮革", 2],
			["普通背包", 1]
		],
		"count": 1
	},
	"普通背包 (浅灰色)": {
		"type": "增强型工作台",
		"map": [
			["淡灰色羊毛", "淡灰色羊毛", "淡灰色羊毛"],
			["皮革", "普通背包", "皮革"],
			["淡灰色羊毛", "淡灰色羊毛", "淡灰色羊毛"]
		],
		"ingredients": [
			["淡灰色羊毛", 6],
			["皮革", 2],
			["普通背包", 1]
		],
		"count": 1
	},
	"普通背包 (青色)": {
		"type": "增强型工作台",
		"map": [
			["青色羊毛", "青色羊毛", "青色羊毛"],
			["皮革", "普通背包", "皮革"],
			["青色羊毛", "青色羊毛", "青色羊毛"]
		],
		"ingredients": [
			["青色羊毛", 6],
			["皮革", 2],
			["普通背包", 1]
		],
		"count": 1
	},
	"普通背包 (紫色)": {
		"type": "增强型工作台",
		"map": [
			["紫色羊毛", "紫色羊毛", "紫色羊毛"],
			["皮革", "普通背包", "皮革"],
			["紫色羊毛", "紫色羊毛", "紫色羊毛"]
		],
		"ingredients": [
			["紫色羊毛", 6],
			["皮革", 2],
			["普通背包", 1]
		],
		"count": 1
	},
	"普通背包 (蓝色)": {
		"type": "增强型工作台",
		"map": [
			["蓝色羊毛", "蓝色羊毛", "蓝色羊毛"],
			["皮革", "普通背包", "皮革"],
			["蓝色羊毛", "蓝色羊毛", "蓝色羊毛"]
		],
		"ingredients": [
			["蓝色羊毛", 6],
			["皮革", 2],
			["普通背包", 1]
		],
		"count": 1
	},
	"普通背包 (棕色)": {
		"type": "增强型工作台",
		"map": [
			["棕色羊毛", "棕色羊毛", "棕色羊毛"],
			["皮革", "普通背包", "皮革"],
			["棕色羊毛", "棕色羊毛", "棕色羊毛"]
		],
		"ingredients": [
			["棕色羊毛", 6],
			["皮革", 2],
			["普通背包", 1]
		],
		"count": 1
	},
	"普通背包 (绿色)": {
		"type": "增强型工作台",
		"map": [
			["绿色羊毛", "绿色羊毛", "绿色羊毛"],
			["皮革", "普通背包", "皮革"],
			["绿色羊毛", "绿色羊毛", "绿色羊毛"]
		],
		"ingredients": [
			["绿色羊毛", 6],
			["皮革", 2],
			["普通背包", 1]
		],
		"count": 1
	},
	"普通背包 (红色)": {
		"type": "增强型工作台",
		"map": [
			["红色羊毛", "红色羊毛", "红色羊毛"],
			["皮革", "普通背包", "皮革"],
			["红色羊毛", "红色羊毛", "红色羊毛"]
		],
		"ingredients": [
			["红色羊毛", 6],
			["皮革", 2],
			["普通背包", 1]
		],
		"count": 1
	},
	"普通背包 (黑色)": {
		"type": "增强型工作台",
		"map": [
			["黑色羊毛", "黑色羊毛", "黑色羊毛"],
			["皮革", "普通背包", "皮革"],
			["黑色羊毛", "黑色羊毛", "黑色羊毛"]
		],
		"ingredients": [
			["黑色羊毛", 6],
			["皮革", 2],
			["普通背包", 1]
		],
		"count": 1
	},
	"普通背包 (迷彩)": {
		"type": "增强型工作台",
		"map": [
			["金合欢树叶", "金合欢树叶", "金合欢树叶"],
			["皮革", "普通背包", "皮革"],
			["金合欢树叶", "金合欢树叶", "金合欢树叶"]
		],
		"ingredients": [
			["金合欢树叶", 6],
			["皮革", 2],
			["普通背包", 1]
		],
		"count": 1
	},
	"普通背包 (摩登)": {
		"type": "增强型工作台",
		"map": [
			["红石粉", "红石粉", "红石粉"],
			["皮革", "普通背包", "皮革"],
			["红石粉", "红石粉", "红石粉"]
		],
		"ingredients": [
			["红石粉", 6],
			["皮革", 2],
			["普通背包", 1]
		],
		"count": 1
	},
	"中型背包 (白色)": {
		"type": "增强型工作台",
		"map": [
			["白色羊毛", "白色羊毛", "白色羊毛"],
			["皮革", "中型背包", "皮革"],
			["白色羊毛", "白色羊毛", "白色羊毛"]
		],
		"ingredients": [
			["白色羊毛", 6],
			["皮革", 2],
			["中型背包", 1]
		],
		"count": 1
	},
	"中型背包 (橙色)": {
		"type": "增强型工作台",
		"map": [
			["橙色羊毛", "橙色羊毛", "橙色羊毛"],
			["皮革", "中型背包", "皮革"],
			["橙色羊毛", "橙色羊毛", "橙色羊毛"]
		],
		"ingredients": [
			["橙色羊毛", 6],
			["皮革", 2],
			["中型背包", 1]
		],
		"count": 1
	},
	"中型背包 (品红色)": {
		"type": "增强型工作台",
		"map": [
			["品红色羊毛", "品红色羊毛", "品红色羊毛"],
			["皮革", "中型背包", "皮革"],
			["品红色羊毛", "品红色羊毛", "品红色羊毛"]
		],
		"ingredients": [
			["品红色羊毛", 6],
			["皮革", 2],
			["中型背包", 1]
		],
		"count": 1
	},
	"中型背包 (浅蓝色)": {
		"type": "增强型工作台",
		"map": [
			["淡蓝色羊毛", "淡蓝色羊毛", "淡蓝色羊毛"],
			["皮革", "中型背包", "皮革"],
			["淡蓝色羊毛", "淡蓝色羊毛", "淡蓝色羊毛"]
		],
		"ingredients": [
			["淡蓝色羊毛", 6],
			["皮革", 2],
			["中型背包", 1]
		],
		"count": 1
	},
	"中型背包 (黄色)": {
		"type": "增强型工作台",
		"map": [
			["黄色羊毛", "黄色羊毛", "黄色羊毛"],
			["皮革", "中型背包", "皮革"],
			["黄色羊毛", "黄色羊毛", "黄色羊毛"]
		],
		"ingredients": [
			["黄色羊毛", 6],
			["皮革", 2],
			["中型背包", 1]
		],
		"count": 1
	},
	"中型背包 (浅绿色)": {
		"type": "增强型工作台",
		"map": [
			["黄绿色羊毛", "黄绿色羊毛", "黄绿色羊毛"],
			["皮革", "中型背包", "皮革"],
			["黄绿色羊毛", "黄绿色羊毛", "黄绿色羊毛"]
		],
		"ingredients": [
			["黄绿色羊毛", 6],
			["皮革", 2],
			["中型背包", 1]
		],
		"count": 1
	},
	"中型背包 (粉色)": {
		"type": "增强型工作台",
		"map": [
			["粉红色羊毛", "粉红色羊毛", "粉红色羊毛"],
			["皮革", "中型背包", "皮革"],
			["粉红色羊毛", "粉红色羊毛", "粉红色羊毛"]
		],
		"ingredients": [
			["粉红色羊毛", 6],
			["皮革", 2],
			["中型背包", 1]
		],
		"count": 1
	},
	"中型背包 (深灰色)": {
		"type": "增强型工作台",
		"map": [
			["灰色羊毛", "灰色羊毛", "灰色羊毛"],
			["皮革", "中型背包", "皮革"],
			["灰色羊毛", "灰色羊毛", "灰色羊毛"]
		],
		"ingredients": [
			["灰色羊毛", 6],
			["皮革", 2],
			["中型背包", 1]
		],
		"count": 1
	},
	"中型背包 (浅灰色)": {
		"type": "增强型工作台",
		"map": [
			["淡灰色羊毛", "淡灰色羊毛", "淡灰色羊毛"],
			["皮革", "中型背包", "皮革"],
			["淡灰色羊毛", "淡灰色羊毛", "淡灰色羊毛"]
		],
		"ingredients": [
			["淡灰色羊毛", 6],
			["皮革", 2],
			["中型背包", 1]
		],
		"count": 1
	},
	"中型背包 (青色)": {
		"type": "增强型工作台",
		"map": [
			["青色羊毛", "青色羊毛", "青色羊毛"],
			["皮革", "中型背包", "皮革"],
			["青色羊毛", "青色羊毛", "青色羊毛"]
		],
		"ingredients": [
			["青色羊毛", 6],
			["皮革", 2],
			["中型背包", 1]
		],
		"count": 1
	},
	"中型背包 (紫色)": {
		"type": "增强型工作台",
		"map": [
			["紫色羊毛", "紫色羊毛", "紫色羊毛"],
			["皮革", "中型背包", "皮革"],
			["紫色羊毛", "紫色羊毛", "紫色羊毛"]
		],
		"ingredients": [
			["紫色羊毛", 6],
			["皮革", 2],
			["中型背包", 1]
		],
		"count": 1
	},
	"中型背包 (蓝色)": {
		"type": "增强型工作台",
		"map": [
			["蓝色羊毛", "蓝色羊毛", "蓝色羊毛"],
			["皮革", "中型背包", "皮革"],
			["蓝色羊毛", "蓝色羊毛", "蓝色羊毛"]
		],
		"ingredients": [
			["蓝色羊毛", 6],
			["皮革", 2],
			["中型背包", 1]
		],
		"count": 1
	},
	"中型背包 (棕色)": {
		"type": "增强型工作台",
		"map": [
			["棕色羊毛", "棕色羊毛", "棕色羊毛"],
			["皮革", "中型背包", "皮革"],
			["棕色羊毛", "棕色羊毛", "棕色羊毛"]
		],
		"ingredients": [
			["棕色羊毛", 6],
			["皮革", 2],
			["中型背包", 1]
		],
		"count": 1
	},
	"中型背包 (绿色)": {
		"type": "增强型工作台",
		"map": [
			["绿色羊毛", "绿色羊毛", "绿色羊毛"],
			["皮革", "中型背包", "皮革"],
			["绿色羊毛", "绿色羊毛", "绿色羊毛"]
		],
		"ingredients": [
			["绿色羊毛", 6],
			["皮革", 2],
			["中型背包", 1]
		],
		"count": 1
	},
	"中型背包 (红色)": {
		"type": "增强型工作台",
		"map": [
			["红色羊毛", "红色羊毛", "红色羊毛"],
			["皮革", "中型背包", "皮革"],
			["红色羊毛", "红色羊毛", "红色羊毛"]
		],
		"ingredients": [
			["红色羊毛", 6],
			["皮革", 2],
			["中型背包", 1]
		],
		"count": 1
	},
	"中型背包 (黑色)": {
		"type": "增强型工作台",
		"map": [
			["黑色羊毛", "黑色羊毛", "黑色羊毛"],
			["皮革", "中型背包", "皮革"],
			["黑色羊毛", "黑色羊毛", "黑色羊毛"]
		],
		"ingredients": [
			["黑色羊毛", 6],
			["皮革", 2],
			["中型背包", 1]
		],
		"count": 1
	},
	"中型背包 (迷彩)": {
		"type": "增强型工作台",
		"map": [
			["金合欢树叶", "金合欢树叶", "金合欢树叶"],
			["皮革", "中型背包", "皮革"],
			["金合欢树叶", "金合欢树叶", "金合欢树叶"]
		],
		"ingredients": [
			["金合欢树叶", 6],
			["皮革", 2],
			["中型背包", 1]
		],
		"count": 1
	},
	"中型背包 (摩登)": {
		"type": "增强型工作台",
		"map": [
			["红石粉", "红石粉", "红石粉"],
			["皮革", "中型背包", "皮革"],
			["红石粉", "红石粉", "红石粉"]
		],
		"ingredients": [
			["红石粉", 6],
			["皮革", 2],
			["中型背包", 1]
		],
		"count": 1
	},
	"编织背包 (白色)": {
		"type": "增强型工作台",
		"map": [
			["白色羊毛", "白色羊毛", "白色羊毛"],
			["皮革", "编织背包", "皮革"],
			["白色羊毛", "白色羊毛", "白色羊毛"]
		],
		"ingredients": [
			["白色羊毛", 6],
			["皮革", 2],
			["编织背包", 1]
		],
		"count": 1
	},
	"编织背包 (橙色)": {
		"type": "增强型工作台",
		"map": [
			["橙色羊毛", "橙色羊毛", "橙色羊毛"],
			["皮革", "编织背包", "皮革"],
			["橙色羊毛", "橙色羊毛", "橙色羊毛"]
		],
		"ingredients": [
			["橙色羊毛", 6],
			["皮革", 2],
			["编织背包", 1]
		],
		"count": 1
	},
	"编织背包 (品红色)": {
		"type": "增强型工作台",
		"map": [
			["品红色羊毛", "品红色羊毛", "品红色羊毛"],
			["皮革", "编织背包", "皮革"],
			["品红色羊毛", "品红色羊毛", "品红色羊毛"]
		],
		"ingredients": [
			["品红色羊毛", 6],
			["皮革", 2],
			["编织背包", 1]
		],
		"count": 1
	},
	"编织背包 (浅蓝色)": {
		"type": "增强型工作台",
		"map": [
			["淡蓝色羊毛", "淡蓝色羊毛", "淡蓝色羊毛"],
			["皮革", "编织背包", "皮革"],
			["淡蓝色羊毛", "淡蓝色羊毛", "淡蓝色羊毛"]
		],
		"ingredients": [
			["淡蓝色羊毛", 6],
			["皮革", 2],
			["编织背包", 1]
		],
		"count": 1
	},
	"编织背包 (黄色)": {
		"type": "增强型工作台",
		"map": [
			["黄色羊毛", "黄色羊毛", "黄色羊毛"],
			["皮革", "编织背包", "皮革"],
			["黄色羊毛", "黄色羊毛", "黄色羊毛"]
		],
		"ingredients": [
			["黄色羊毛", 6],
			["皮革", 2],
			["编织背包", 1]
		],
		"count": 1
	},
	"编织背包 (浅绿色)": {
		"type": "增强型工作台",
		"map": [
			["黄绿色羊毛", "黄绿色羊毛", "黄绿色羊毛"],
			["皮革", "编织背包", "皮革"],
			["黄绿色羊毛", "黄绿色羊毛", "黄绿色羊毛"]
		],
		"ingredients": [
			["黄绿色羊毛", 6],
			["皮革", 2],
			["编织背包", 1]
		],
		"count": 1
	},
	"编织背包 (粉色)": {
		"type": "增强型工作台",
		"map": [
			["粉红色羊毛", "粉红色羊毛", "粉红色羊毛"],
			["皮革", "编织背包", "皮革"],
			["粉红色羊毛", "粉红色羊毛", "粉红色羊毛"]
		],
		"ingredients": [
			["粉红色羊毛", 6],
			["皮革", 2],
			["编织背包", 1]
		],
		"count": 1
	},
	"编织背包 (深灰色)": {
		"type": "增强型工作台",
		"map": [
			["灰色羊毛", "灰色羊毛", "灰色羊毛"],
			["皮革", "编织背包", "皮革"],
			["灰色羊毛", "灰色羊毛", "灰色羊毛"]
		],
		"ingredients": [
			["灰色羊毛", 6],
			["皮革", 2],
			["编织背包", 1]
		],
		"count": 1
	},
	"编织背包 (浅灰色)": {
		"type": "增强型工作台",
		"map": [
			["淡灰色羊毛", "淡灰色羊毛", "淡灰色羊毛"],
			["皮革", "编织背包", "皮革"],
			["淡灰色羊毛", "淡灰色羊毛", "淡灰色羊毛"]
		],
		"ingredients": [
			["淡灰色羊毛", 6],
			["皮革", 2],
			["编织背包", 1]
		],
		"count": 1
	},
	"编织背包 (青色)": {
		"type": "增强型工作台",
		"map": [
			["青色羊毛", "青色羊毛", "青色羊毛"],
			["皮革", "编织背包", "皮革"],
			["青色羊毛", "青色羊毛", "青色羊毛"]
		],
		"ingredients": [
			["青色羊毛", 6],
			["皮革", 2],
			["编织背包", 1]
		],
		"count": 1
	},
	"编织背包 (紫色)": {
		"type": "增强型工作台",
		"map": [
			["紫色羊毛", "紫色羊毛", "紫色羊毛"],
			["皮革", "编织背包", "皮革"],
			["紫色羊毛", "紫色羊毛", "紫色羊毛"]
		],
		"ingredients": [
			["紫色羊毛", 6],
			["皮革", 2],
			["编织背包", 1]
		],
		"count": 1
	},
	"编织背包 (蓝色)": {
		"type": "增强型工作台",
		"map": [
			["蓝色羊毛", "蓝色羊毛", "蓝色羊毛"],
			["皮革", "编织背包", "皮革"],
			["蓝色羊毛", "蓝色羊毛", "蓝色羊毛"]
		],
		"ingredients": [
			["蓝色羊毛", 6],
			["皮革", 2],
			["编织背包", 1]
		],
		"count": 1
	},
	"编织背包 (棕色)": {
		"type": "增强型工作台",
		"map": [
			["棕色羊毛", "棕色羊毛", "棕色羊毛"],
			["皮革", "编织背包", "皮革"],
			["棕色羊毛", "棕色羊毛", "棕色羊毛"]
		],
		"ingredients": [
			["棕色羊毛", 6],
			["皮革", 2],
			["编织背包", 1]
		],
		"count": 1
	},
	"编织背包 (绿色)": {
		"type": "增强型工作台",
		"map": [
			["绿色羊毛", "绿色羊毛", "绿色羊毛"],
			["皮革", "编织背包", "皮革"],
			["绿色羊毛", "绿色羊毛", "绿色羊毛"]
		],
		"ingredients": [
			["绿色羊毛", 6],
			["皮革", 2],
			["编织背包", 1]
		],
		"count": 1
	},
	"编织背包 (红色)": {
		"type": "增强型工作台",
		"map": [
			["红色羊毛", "红色羊毛", "红色羊毛"],
			["皮革", "编织背包", "皮革"],
			["红色羊毛", "红色羊毛", "红色羊毛"]
		],
		"ingredients": [
			["红色羊毛", 6],
			["皮革", 2],
			["编织背包", 1]
		],
		"count": 1
	},
	"编织背包 (黑色)": {
		"type": "增强型工作台",
		"map": [
			["黑色羊毛", "黑色羊毛", "黑色羊毛"],
			["皮革", "编织背包", "皮革"],
			["黑色羊毛", "黑色羊毛", "黑色羊毛"]
		],
		"ingredients": [
			["黑色羊毛", 6],
			["皮革", 2],
			["编织背包", 1]
		],
		"count": 1
	},
	"编织背包 (迷彩)": {
		"type": "增强型工作台",
		"map": [
			["金合欢树叶", "金合欢树叶", "金合欢树叶"],
			["皮革", "编织背包", "皮革"],
			["金合欢树叶", "金合欢树叶", "金合欢树叶"]
		],
		"ingredients": [
			["金合欢树叶", 6],
			["皮革", 2],
			["编织背包", 1]
		],
		"count": 1
	},
	"编织背包 (摩登)": {
		"type": "增强型工作台",
		"map": [
			["红石粉", "红石粉", "红石粉"],
			["皮革", "编织背包", "皮革"],
			["红石粉", "红石粉", "红石粉"]
		],
		"ingredients": [
			["红石粉", 6],
			["皮革", 2],
			["编织背包", 1]
		],
		"count": 1
	},
	"镀金背包 (白色)": {
		"type": "增强型工作台",
		"map": [
			["白色羊毛", "白色羊毛", "白色羊毛"],
			["皮革", "镀金背包", "皮革"],
			["白色羊毛", "白色羊毛", "白色羊毛"]
		],
		"ingredients": [
			["白色羊毛", 6],
			["皮革", 2],
			["镀金背包", 1]
		],
		"count": 1
	},
	"镀金背包 (橙色)": {
		"type": "增强型工作台",
		"map": [
			["橙色羊毛", "橙色羊毛", "橙色羊毛"],
			["皮革", "镀金背包", "皮革"],
			["橙色羊毛", "橙色羊毛", "橙色羊毛"]
		],
		"ingredients": [
			["橙色羊毛", 6],
			["皮革", 2],
			["镀金背包", 1]
		],
		"count": 1
	},
	"镀金背包 (品红色)": {
		"type": "增强型工作台",
		"map": [
			["品红色羊毛", "品红色羊毛", "品红色羊毛"],
			["皮革", "镀金背包", "皮革"],
			["品红色羊毛", "品红色羊毛", "品红色羊毛"]
		],
		"ingredients": [
			["品红色羊毛", 6],
			["皮革", 2],
			["镀金背包", 1]
		],
		"count": 1
	},
	"镀金背包 (浅蓝色)": {
		"type": "增强型工作台",
		"map": [
			["淡蓝色羊毛", "淡蓝色羊毛", "淡蓝色羊毛"],
			["皮革", "镀金背包", "皮革"],
			["淡蓝色羊毛", "淡蓝色羊毛", "淡蓝色羊毛"]
		],
		"ingredients": [
			["淡蓝色羊毛", 6],
			["皮革", 2],
			["镀金背包", 1]
		],
		"count": 1
	},
	"镀金背包 (黄色)": {
		"type": "增强型工作台",
		"map": [
			["黄色羊毛", "黄色羊毛", "黄色羊毛"],
			["皮革", "镀金背包", "皮革"],
			["黄色羊毛", "黄色羊毛", "黄色羊毛"]
		],
		"ingredients": [
			["黄色羊毛", 6],
			["皮革", 2],
			["镀金背包", 1]
		],
		"count": 1
	},
	"镀金背包 (浅绿色)": {
		"type": "增强型工作台",
		"map": [
			["黄绿色羊毛", "黄绿色羊毛", "黄绿色羊毛"],
			["皮革", "镀金背包", "皮革"],
			["黄绿色羊毛", "黄绿色羊毛", "黄绿色羊毛"]
		],
		"ingredients": [
			["黄绿色羊毛", 6],
			["皮革", 2],
			["镀金背包", 1]
		],
		"count": 1
	},
	"镀金背包 (粉色)": {
		"type": "增强型工作台",
		"map": [
			["粉红色羊毛", "粉红色羊毛", "粉红色羊毛"],
			["皮革", "镀金背包", "皮革"],
			["粉红色羊毛", "粉红色羊毛", "粉红色羊毛"]
		],
		"ingredients": [
			["粉红色羊毛", 6],
			["皮革", 2],
			["镀金背包", 1]
		],
		"count": 1
	},
	"镀金背包 (深灰色)": {
		"type": "增强型工作台",
		"map": [
			["灰色羊毛", "灰色羊毛", "灰色羊毛"],
			["皮革", "镀金背包", "皮革"],
			["灰色羊毛", "灰色羊毛", "灰色羊毛"]
		],
		"ingredients": [
			["灰色羊毛", 6],
			["皮革", 2],
			["镀金背包", 1]
		],
		"count": 1
	},
	"镀金背包 (浅灰色)": {
		"type": "增强型工作台",
		"map": [
			["淡灰色羊毛", "淡灰色羊毛", "淡灰色羊毛"],
			["皮革", "镀金背包", "皮革"],
			["淡灰色羊毛", "淡灰色羊毛", "淡灰色羊毛"]
		],
		"ingredients": [
			["淡灰色羊毛", 6],
			["皮革", 2],
			["镀金背包", 1]
		],
		"count": 1
	},
	"镀金背包 (青色)": {
		"type": "增强型工作台",
		"map": [
			["青色羊毛", "青色羊毛", "青色羊毛"],
			["皮革", "镀金背包", "皮革"],
			["青色羊毛", "青色羊毛", "青色羊毛"]
		],
		"ingredients": [
			["青色羊毛", 6],
			["皮革", 2],
			["镀金背包", 1]
		],
		"count": 1
	},
	"镀金背包 (紫色)": {
		"type": "增强型工作台",
		"map": [
			["紫色羊毛", "紫色羊毛", "紫色羊毛"],
			["皮革", "镀金背包", "皮革"],
			["紫色羊毛", "紫色羊毛", "紫色羊毛"]
		],
		"ingredients": [
			["紫色羊毛", 6],
			["皮革", 2],
			["镀金背包", 1]
		],
		"count": 1
	},
	"镀金背包 (蓝色)": {
		"type": "增强型工作台",
		"map": [
			["蓝色羊毛", "蓝色羊毛", "蓝色羊毛"],
			["皮革", "镀金背包", "皮革"],
			["蓝色羊毛", "蓝色羊毛", "蓝色羊毛"]
		],
		"ingredients": [
			["蓝色羊毛", 6],
			["皮革", 2],
			["镀金背包", 1]
		],
		"count": 1
	},
	"镀金背包 (棕色)": {
		"type": "增强型工作台",
		"map": [
			["棕色羊毛", "棕色羊毛", "棕色羊毛"],
			["皮革", "镀金背包", "皮革"],
			["棕色羊毛", "棕色羊毛", "棕色羊毛"]
		],
		"ingredients": [
			["棕色羊毛", 6],
			["皮革", 2],
			["镀金背包", 1]
		],
		"count": 1
	},
	"镀金背包 (绿色)": {
		"type": "增强型工作台",
		"map": [
			["绿色羊毛", "绿色羊毛", "绿色羊毛"],
			["皮革", "镀金背包", "皮革"],
			["绿色羊毛", "绿色羊毛", "绿色羊毛"]
		],
		"ingredients": [
			["绿色羊毛", 6],
			["皮革", 2],
			["镀金背包", 1]
		],
		"count": 1
	},
	"镀金背包 (红色)": {
		"type": "增强型工作台",
		"map": [
			["红色羊毛", "红色羊毛", "红色羊毛"],
			["皮革", "镀金背包", "皮革"],
			["红色羊毛", "红色羊毛", "红色羊毛"]
		],
		"ingredients": [
			["红色羊毛", 6],
			["皮革", 2],
			["镀金背包", 1]
		],
		"count": 1
	},
	"镀金背包 (黑色)": {
		"type": "增强型工作台",
		"map": [
			["黑色羊毛", "黑色羊毛", "黑色羊毛"],
			["皮革", "镀金背包", "皮革"],
			["黑色羊毛", "黑色羊毛", "黑色羊毛"]
		],
		"ingredients": [
			["黑色羊毛", 6],
			["皮革", 2],
			["镀金背包", 1]
		],
		"count": 1
	},
	"镀金背包 (迷彩)": {
		"type": "增强型工作台",
		"map": [
			["金合欢树叶", "金合欢树叶", "金合欢树叶"],
			["皮革", "镀金背包", "皮革"],
			["金合欢树叶", "金合欢树叶", "金合欢树叶"]
		],
		"ingredients": [
			["金合欢树叶", 6],
			["皮革", 2],
			["镀金背包", 1]
		],
		"count": 1
	},
	"镀金背包 (摩登)": {
		"type": "增强型工作台",
		"map": [
			["红石粉", "红石粉", "红石粉"],
			["皮革", "镀金背包", "皮革"],
			["红石粉", "红石粉", "红石粉"]
		],
		"ingredients": [
			["红石粉", 6],
			["皮革", 2],
			["镀金背包", 1]
		],
		"count": 1
	},
	"金光闪闪的背包 (白色)": {
		"type": "增强型工作台",
		"map": [
			["白色羊毛", "白色羊毛", "白色羊毛"],
			["皮革", "金光闪闪的背包", "皮革"],
			["白色羊毛", "白色羊毛", "白色羊毛"]
		],
		"ingredients": [
			["白色羊毛", 6],
			["皮革", 2],
			["金光闪闪的背包", 1]
		],
		"count": 1
	},
	"金光闪闪的背包 (橙色)": {
		"type": "增强型工作台",
		"map": [
			["橙色羊毛", "橙色羊毛", "橙色羊毛"],
			["皮革", "金光闪闪的背包", "皮革"],
			["橙色羊毛", "橙色羊毛", "橙色羊毛"]
		],
		"ingredients": [
			["橙色羊毛", 6],
			["皮革", 2],
			["金光闪闪的背包", 1]
		],
		"count": 1
	},
	"金光闪闪的背包 (品红色)": {
		"type": "增强型工作台",
		"map": [
			["品红色羊毛", "品红色羊毛", "品红色羊毛"],
			["皮革", "金光闪闪的背包", "皮革"],
			["品红色羊毛", "品红色羊毛", "品红色羊毛"]
		],
		"ingredients": [
			["品红色羊毛", 6],
			["皮革", 2],
			["金光闪闪的背包", 1]
		],
		"count": 1
	},
	"金光闪闪的背包 (浅蓝色)": {
		"type": "增强型工作台",
		"map": [
			["淡蓝色羊毛", "淡蓝色羊毛", "淡蓝色羊毛"],
			["皮革", "金光闪闪的背包", "皮革"],
			["淡蓝色羊毛", "淡蓝色羊毛", "淡蓝色羊毛"]
		],
		"ingredients": [
			["淡蓝色羊毛", 6],
			["皮革", 2],
			["金光闪闪的背包", 1]
		],
		"count": 1
	},
	"金光闪闪的背包 (黄色)": {
		"type": "增强型工作台",
		"map": [
			["黄色羊毛", "黄色羊毛", "黄色羊毛"],
			["皮革", "金光闪闪的背包", "皮革"],
			["黄色羊毛", "黄色羊毛", "黄色羊毛"]
		],
		"ingredients": [
			["黄色羊毛", 6],
			["皮革", 2],
			["金光闪闪的背包", 1]
		],
		"count": 1
	},
	"金光闪闪的背包 (浅绿色)": {
		"type": "增强型工作台",
		"map": [
			["黄绿色羊毛", "黄绿色羊毛", "黄绿色羊毛"],
			["皮革", "金光闪闪的背包", "皮革"],
			["黄绿色羊毛", "黄绿色羊毛", "黄绿色羊毛"]
		],
		"ingredients": [
			["黄绿色羊毛", 6],
			["皮革", 2],
			["金光闪闪的背包", 1]
		],
		"count": 1
	},
	"金光闪闪的背包 (粉色)": {
		"type": "增强型工作台",
		"map": [
			["粉红色羊毛", "粉红色羊毛", "粉红色羊毛"],
			["皮革", "金光闪闪的背包", "皮革"],
			["粉红色羊毛", "粉红色羊毛", "粉红色羊毛"]
		],
		"ingredients": [
			["粉红色羊毛", 6],
			["皮革", 2],
			["金光闪闪的背包", 1]
		],
		"count": 1
	},
	"金光闪闪的背包 (深灰色)": {
		"type": "增强型工作台",
		"map": [
			["灰色羊毛", "灰色羊毛", "灰色羊毛"],
			["皮革", "金光闪闪的背包", "皮革"],
			["灰色羊毛", "灰色羊毛", "灰色羊毛"]
		],
		"ingredients": [
			["灰色羊毛", 6],
			["皮革", 2],
			["金光闪闪的背包", 1]
		],
		"count": 1
	},
	"金光闪闪的背包 (浅灰色)": {
		"type": "增强型工作台",
		"map": [
			["淡灰色羊毛", "淡灰色羊毛", "淡灰色羊毛"],
			["皮革", "金光闪闪的背包", "皮革"],
			["淡灰色羊毛", "淡灰色羊毛", "淡灰色羊毛"]
		],
		"ingredients": [
			["淡灰色羊毛", 6],
			["皮革", 2],
			["金光闪闪的背包", 1]
		],
		"count": 1
	},
	"金光闪闪的背包 (青色)": {
		"type": "增强型工作台",
		"map": [
			["青色羊毛", "青色羊毛", "青色羊毛"],
			["皮革", "金光闪闪的背包", "皮革"],
			["青色羊毛", "青色羊毛", "青色羊毛"]
		],
		"ingredients": [
			["青色羊毛", 6],
			["皮革", 2],
			["金光闪闪的背包", 1]
		],
		"count": 1
	},
	"金光闪闪的背包 (紫色)": {
		"type": "增强型工作台",
		"map": [
			["紫色羊毛", "紫色羊毛", "紫色羊毛"],
			["皮革", "金光闪闪的背包", "皮革"],
			["紫色羊毛", "紫色羊毛", "紫色羊毛"]
		],
		"ingredients": [
			["紫色羊毛", 6],
			["皮革", 2],
			["金光闪闪的背包", 1]
		],
		"count": 1
	},
	"金光闪闪的背包 (蓝色)": {
		"type": "增强型工作台",
		"map": [
			["蓝色羊毛", "蓝色羊毛", "蓝色羊毛"],
			["皮革", "金光闪闪的背包", "皮革"],
			["蓝色羊毛", "蓝色羊毛", "蓝色羊毛"]
		],
		"ingredients": [
			["蓝色羊毛", 6],
			["皮革", 2],
			["金光闪闪的背包", 1]
		],
		"count": 1
	},
	"金光闪闪的背包 (棕色)": {
		"type": "增强型工作台",
		"map": [
			["棕色羊毛", "棕色羊毛", "棕色羊毛"],
			["皮革", "金光闪闪的背包", "皮革"],
			["棕色羊毛", "棕色羊毛", "棕色羊毛"]
		],
		"ingredients": [
			["棕色羊毛", 6],
			["皮革", 2],
			["金光闪闪的背包", 1]
		],
		"count": 1
	},
	"金光闪闪的背包 (绿色)": {
		"type": "增强型工作台",
		"map": [
			["绿色羊毛", "绿色羊毛", "绿色羊毛"],
			["皮革", "金光闪闪的背包", "皮革"],
			["绿色羊毛", "绿色羊毛", "绿色羊毛"]
		],
		"ingredients": [
			["绿色羊毛", 6],
			["皮革", 2],
			["金光闪闪的背包", 1]
		],
		"count": 1
	},
	"金光闪闪的背包 (红色)": {
		"type": "增强型工作台",
		"map": [
			["红色羊毛", "红色羊毛", "红色羊毛"],
			["皮革", "金光闪闪的背包", "皮革"],
			["红色羊毛", "红色羊毛", "红色羊毛"]
		],
		"ingredients": [
			["红色羊毛", 6],
			["皮革", 2],
			["金光闪闪的背包", 1]
		],
		"count": 1
	},
	"金光闪闪的背包 (黑色)": {
		"type": "增强型工作台",
		"map": [
			["黑色羊毛", "黑色羊毛", "黑色羊毛"],
			["皮革", "金光闪闪的背包", "皮革"],
			["黑色羊毛", "黑色羊毛", "黑色羊毛"]
		],
		"ingredients": [
			["黑色羊毛", 6],
			["皮革", 2],
			["金光闪闪的背包", 1]
		],
		"count": 1
	},
	"金光闪闪的背包 (迷彩)": {
		"type": "增强型工作台",
		"map": [
			["金合欢树叶", "金合欢树叶", "金合欢树叶"],
			["皮革", "金光闪闪的背包", "皮革"],
			["金合欢树叶", "金合欢树叶", "金合欢树叶"]
		],
		"ingredients": [
			["金合欢树叶", 6],
			["皮革", 2],
			["金光闪闪的背包", 1]
		],
		"count": 1
	},
	"金光闪闪的背包 (摩登)": {
		"type": "增强型工作台",
		"map": [
			["红石粉", "红石粉", "红石粉"],
			["皮革", "金光闪闪的背包", "皮革"],
			["红石粉", "红石粉", "红石粉"]
		],
		"ingredients": [
			["红石粉", 6],
			["皮革", 2],
			["金光闪闪的背包", 1]
		],
		"count": 1
	},
	"灵魂收割者": {
		"type": "古代祭坛",
		"map": [
			["古代符文 [地]", "人造钻石", "古代符文 [气]"],
			["古代符文 [水]", "坏死颅骨", "古代符文 [火]"],
			["来世精华", "不死图腾", "来世精华"]
		],
		"ingredients": [
			["古代符文 [地]", 1],
			["人造钻石", 1],
			["古代符文 [气]", 1],
			["古代符文 [水]", 1],
			["坏死颅骨", 1],
			["古代符文 [火]", 1],
			["来世精华", 2],
			["不死图腾", 1]
		],
		"count": 1
	},
	"凝魂": {
		"type": "灵魂收集者",
		"map": [
			[null, null, null],
			[null, "任何生物", null],
			[null, null, null]
		],
		"ingredients": [
			["任何生物", 1]
		],
		"count": 1
	},
	"植物注入仓": {
		"type": "古代祭坛",
		"map": [
			["压缩机", "电动马达", "压缩机"],
			["钢化玻璃", "加热压力舱 - II", "钢化玻璃"],
			["加热线圈", "古代祭坛", "加热线圈"]
		],
		"ingredients": [
			["压缩机", 2],
			["电动马达", 1],
			["钢化玻璃", 2],
			["加热压力舱 - II", 1],
			["加热线圈", 2],
			["古代祭坛", 1]
		],
		"count": 1
	},
	"光魔法植物": {
		"map": [
			["橡树树苗", "魔法结晶 - III", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["橡树树苗", 1],
			["魔法结晶 - III", 1]
		],
		"count": 1
	},
	"暗魔法植物": {
		"map": [
			["橡树树苗", "凝魂", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["橡树树苗", 1],
			["凝魂", 1]
		],
		"count": 1
	},
	"光之精华": {
		"type": "磨石",
		"map": [
			["光魔法植物", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["光魔法植物", 1]
		],
		"count": 4
	},
	"暗之精华": {
		"type": "磨石",
		"map": [
			["暗魔法植物", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["暗魔法植物", 1]
		],
		"count": 4
	},
	"经验结晶器": {
		"type": "古代祭坛",
		"map": [
			["智者的护身符", "魔法玻璃", "智者的护身符"],
			["钢化玻璃", "经验收集器", "钢化玻璃"],
			["加热线圈", "古代祭坛", "加热线圈"]
		],
		"ingredients": [
			["智者的护身符", 2],
			["魔法玻璃", 1],
			["钢化玻璃", 2],
			["经验收集器", 1],
			["加热线圈", 2],
			["古代祭坛", 1]
		],
		"count": 1
	},
	"经验晶体": {
		"map": [
			["学识之瓶", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["学识之瓶", 1]
		],
		"count": 2
	},
	"光明锭": {
		"type": "增强型工作台",
		"map": [
			["魔法结晶 - I", "经验晶体", "魔法结晶 - I"],
			["光魔法植物", "钢锭", "光魔法植物"],
			["魔法结晶 - I", "经验晶体", "魔法结晶 - I"]
		],
		"ingredients": [
			["魔法结晶 - I", 4],
			["经验晶体", 2],
			["光魔法植物", 2],
			["钢锭", 1]
		],
		"count": 2
	},
	"暗钢锭": {
		"type": "增强型工作台",
		"map": [
			["末影结晶 - I", "经验晶体", "末影结晶 - I"],
			["暗魔法植物", "钢锭", "暗魔法植物"],
			["末影结晶 - I", "经验晶体", "末影结晶 - I"]
		],
		"ingredients": [
			["末影结晶 - I", 4],
			["经验晶体", 2],
			["暗魔法植物", 2],
			["钢锭", 1]
		],
		"count": 2
	},
	"强化合金锭": {
		"type": "神圣祭坛",
		"map": [
			[null, "大马士革钢锭", null],
			["暗钢锭", "神秘金属锭", "光明锭"],
			[null, "大马士革钢锭", null]
		],
		"ingredients": [
			["大马士革钢锭", 2],
			["暗钢锭", 1],
			["神秘金属锭", 1],
			["光明锭", 1]
		],
		"count": 2
	},
	"钢锭": {
		"type": "神圣祭坛",
		"map": [
			[null, "铁块", null],
			["暗钢锭", "神秘金属锭", "光明锭"],
			[null, "碳", null]
		],
		"ingredients": [
			["铁块", 1],
			["暗钢锭", 1],
			["神秘金属锭", 1],
			["光明锭", 1],
			["碳", 1]
		],
		"count": 8
	},
	"大马士革钢锭": {
		"type": "神圣祭坛",
		"map": [
			[null, "铁块", null],
			["暗钢锭", "神秘金属锭", "光明锭"],
			[null, "压缩碳", null]
		],
		"ingredients": [
			["铁块", 1],
			["暗钢锭", 1],
			["神秘金属锭", 1],
			["光明锭", 1],
			["压缩碳", 1]
		],
		"count": 8
	},
	"压缩碳": {
		"type": "神圣祭坛",
		"map": [
			["煤炭", "牛排", "煤炭"],
			["橡树树叶", "煤炭块", "海带"],
			["煤炭", "腐肉", "煤炭"]
		],
		"ingredients": [
			["煤炭", 4],
			["牛排", 1],
			["橡树树叶", 1],
			["煤炭块", 1],
			["海带", 1],
			["腐肉", 1]
		],
		"count": 1
	},
	"神圣祭坛": {
		"type": "古代祭坛",
		"map": [
			["经验晶体", "电磁铁", "经验晶体"],
			["起泡锭", "古代祭坛", "起泡锭"],
			["古代基座", "加热压力舱", "古代基座"]
		],
		"ingredients": [
			["经验晶体", 2],
			["电磁铁", 1],
			["起泡锭", 2],
			["古代祭坛", 1],
			["古代基座", 2],
			["加热压力舱", 1]
		],
		"count": 1
	},
	"熔融神秘金属": {
		"type": "神圣祭坛",
		"map": [
			["经验晶体", "光明锭", "经验晶体"],
			["暗钢锭", "熔岩桶", "暗钢锭"],
			["经验晶体", "光明锭", "经验晶体"]
		],
		"ingredients": [
			["经验晶体", 4],
			["光明锭", 2],
			["暗钢锭", 2],
			["熔岩桶", 1]
		],
		"count": 1
	},
	"神秘金属锭": {
		"type": "增强型工作台",
		"map": [
			["熔融神秘金属", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["熔融神秘金属", 1]
		],
		"count": 16
	},
	"华丽炼药锅": {
		"type": "神圣祭坛",
		"map": [
			["经验晶体", "自动酿造机", "经验晶体"],
			["暗钢锭", "神圣祭坛", "光明锭"],
			["起泡锭", "流体泵", "起泡锭"]
		],
		"ingredients": [
			["经验晶体", 2],
			["自动酿造机", 1],
			["暗钢锭", 1],
			["神圣祭坛", 1],
			["光明锭", 1],
			["起泡锭", 2],
			["流体泵", 1]
		],
		"count": 1
	},
	"渗透药水": {
		"type": "神圣祭坛",
		"map": [
			["经验晶体", "下界合金块", "经验晶体"],
			["暗之精华", "龙息", "光之精华"],
			["暗钢锭", "熔岩桶", "光明锭"]
		],
		"ingredients": [
			["经验晶体", 2],
			["下界合金块", 1],
			["暗之精华", 1],
			["龙息", 1],
			["光之精华", 1],
			["暗钢锭", 1],
			["熔岩桶", 1],
			["光明锭", 1]
		],
		"count": 1
	},
	"&x&2&d&d&a&e&0仁&x&2&e&e&2&c&6慈&x&2&f&e&9&a&b酿&x&3&0&f&1&9&1造": {
		"type": "华丽炼药锅",
		"map": [
			["经验晶体", "丁香", "矢车菊"],
			["光之精华", "蜂蜜瓶", "不死图腾"],
			["光明锭", "铃兰", "虞美人"]
		],
		"ingredients": [
			["经验晶体", 1],
			["丁香", 1],
			["矢车菊", 1],
			["光之精华", 1],
			["蜂蜜瓶", 1],
			["不死图腾", 1],
			["光明锭", 1],
			["铃兰", 1],
			["虞美人", 1]
		],
		"count": 1
	},
	"&c恶&x&f&f&6&4&4&8毒&x&f&f&7&3&3&a混&x&f&f&8&2&2&d合&x&f&f&9&1&1&f物": {
		"type": "华丽炼药锅",
		"map": [
			["经验晶体", "发酵蛛眼", "骨块"],
			["暗之精华", "龙息", "熔岩桶"],
			["暗钢锭", "凝魂", "腐肉"]
		],
		"ingredients": [
			["经验晶体", 1],
			["发酵蛛眼", 1],
			["骨块", 1],
			["暗之精华", 1],
			["龙息", 1],
			["熔岩桶", 1],
			["暗钢锭", 1],
			["凝魂", 1],
			["腐肉", 1]
		],
		"count": 1
	},
	"毁灭暴击": {
		"type": "注入祭坛",
		"map": [
			["TNT", "爆炸稿", "切石机"],
			["暗钢锭", "一把有效的斧头", "防凋灵黑曜石"],
			["红石块", "防凋灵黑曜石", "TNT"]
		],
		"ingredients": [
			["TNT", 2],
			["爆炸稿", 1],
			["切石机", 1],
			["暗钢锭", 1],
			["一把有效的斧头", 1],
			["防凋灵黑曜石", 2],
			["红石块", 1]
		],
		"count": 1
	},
	"幻影暴击": {
		"type": "注入祭坛",
		"map": [
			["幻翼膜", "魔法玻璃", "幻翼膜"],
			["暗钢锭", "一把有效的斧头", "钢化玻璃"],
			["幻翼膜", "凝魂", "幻翼膜"]
		],
		"ingredients": [
			["幻翼膜", 4],
			["魔法玻璃", 1],
			["暗钢锭", 1],
			["一把有效的斧头", 1],
			["钢化玻璃", 1],
			["凝魂", 1]
		],
		"count": 1
	},
	"自瞄": {
		"type": "注入祭坛",
		"map": [
			["人造潜影壳", "吸入磁铁", "元素法杖 - 风"],
			["暗钢锭", "一把有效的弓", "经验晶体"],
			["潜影盒", "鞘翅 (经验修补)", "钢推进器"]
		],
		"ingredients": [
			["人造潜影壳", 1],
			["吸入磁铁", 1],
			["元素法杖 - 风", 1],
			["暗钢锭", 1],
			["一把有效的弓", 1],
			["经验晶体", 1],
			["潜影盒", 1],
			["鞘翅 (经验修补)", 1],
			["钢推进器", 1]
		],
		"count": 1
	},
	"强力": {
		"type": "注入祭坛",
		"map": [
			["电磁铁", "活塞", "元素法杖 - 风"],
			["吸入磁铁", "一把有效的弓", "钢推进器"],
			["电磁铁", "活塞", "旅行者护身符"]
		],
		"ingredients": [
			["电磁铁", 2],
			["活塞", 2],
			["元素法杖 - 风", 1],
			["吸入磁铁", 1],
			["一把有效的弓", 1],
			["钢推进器", 1],
			["旅行者护身符", 1]
		],
		"count": 1
	},
	"挥发": {
		"type": "注入祭坛",
		"map": [
			["烈焰棒", "元素法杖 - 火", "消防员护身符"],
			["暗钢锭", "一把有效的弓", "岩浆发电机 (II)"],
			["TNT", "人造钻石", "岩浆水晶"]
		],
		"ingredients": [
			["烈焰棒", 1],
			["元素法杖 - 火", 1],
			["消防员护身符", 1],
			["暗钢锭", 1],
			["一把有效的弓", 1],
			["岩浆发电机 (II)", 1],
			["TNT", 1],
			["人造钻石", 1],
			["岩浆水晶", 1]
		],
		"count": 1
	},
	"治疗": {
		"type": "注入祭坛",
		"map": [
			["&x&2&d&d&a&e&0仁&x&2&e&e&2&c&6慈&x&2&f&e&9&a&b酿&x&3&0&f&1&9&1造", "药物", "维他命"],
			["光明锭", "一把有效的弓", "不死图腾"],
			["附魔金苹果", "药物", "魔法糖"]
		],
		"ingredients": [
			["&x&2&d&d&a&e&0仁&x&2&e&e&2&c&6慈&x&2&f&e&9&a&b酿&x&3&0&f&1&9&1造", 1],
			["药物", 2],
			["维他命", 1],
			["光明锭", 1],
			["一把有效的弓", 1],
			["不死图腾", 1],
			["附魔金苹果", 1],
			["魔法糖", 1]
		],
		"count": 1
	},
	"自动补种": {
		"type": "注入祭坛",
		"map": [
			["堆肥桶", "光之精华", "水桶"],
			["光明锭", "一把有效的锄头", "流体泵"],
			["骨块", "光魔法植物", "砂轮"]
		],
		"ingredients": [
			["堆肥桶", 1],
			["光之精华", 1],
			["水桶", 1],
			["光明锭", 1],
			["一把有效的锄头", 1],
			["流体泵", 1],
			["骨块", 1],
			["光魔法植物", 1],
			["砂轮", 1]
		],
		"count": 1
	},
	"图腾电池": {
		"type": "注入祭坛",
		"map": [
			["坏死颅骨", "凝魂", "&x&2&d&d&a&e&0仁&x&2&e&e&2&c&6慈&x&2&f&e&9&a&b酿&x&3&0&f&1&9&1造"],
			["光明锭", "一件有效的胸甲", "经验晶体"],
			["来世精华", "终极储能电容", "来世精华"]
		],
		"ingredients": [
			["坏死颅骨", 1],
			["凝魂", 1],
			["&x&2&d&d&a&e&0仁&x&2&e&e&2&c&6慈&x&2&f&e&9&a&b酿&x&3&0&f&1&9&1造", 1],
			["光明锭", 1],
			["一件有效的胸甲", 1],
			["经验晶体", 1],
			["来世精华", 2],
			["终极储能电容", 1]
		],
		"count": 1
	},
	"击退": {
		"type": "注入祭坛",
		"map": [
			["旋风护身符", "黏性活塞", "经验晶体"],
			["爷爷的拐杖", "一把有效的钓竿", "黏性活塞"],
			["黏液球", "爷爷的拐杖", "旋风护身符"]
		],
		"ingredients": [
			["旋风护身符", 2],
			["黏性活塞", 2],
			["经验晶体", 1],
			["爷爷的拐杖", 2],
			["一把有效的钓竿", 1],
			["黏液球", 1]
		],
		"count": 1
	},
	"注入祭坛": {
		"type": "神圣祭坛",
		"map": [
			["经验晶体", "防凋灵玻璃", "经验晶体"],
			["钢筋板", "信标", "钢筋板"],
			["起泡锭", "神圣祭坛", "起泡锭"]
		],
		"ingredients": [
			["经验晶体", 2],
			["防凋灵玻璃", 1],
			["钢筋板", 2],
			["信标", 1],
			["起泡锭", 2],
			["神圣祭坛", 1]
		],
		"count": 1
	},
	"简易工作台": {
		"type": "增强型工作台",
		"map": [
			["工作台", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["工作台", 1]
		],
		"count": 1
	},
	"简易漏筛": {
		"type": "多方块结构",
		"map": [
			[null, null, null],
			[null, "橡木活板门", null],
			[null, "堆肥桶", null]
		],
		"ingredients": [
			["橡木活板门", 1],
			["堆肥桶", 1]
		],
		"count": 1
	},
	"简易电梯": {
		"type": "增强型工作台",
		"map": [
			["石英块", "石英块", "石英块"],
			["石英块", "末影珍珠", "石英块"],
			["石英块", "石英块", "石英块"]
		],
		"ingredients": [
			["石英块", 8],
			["末影珍珠", 1]
		],
		"count": 1
	},
	"简易扳手": {
		"type": "增强型工作台",
		"map": [
			["铝锭", null, "铝锭"],
			[null, "银锭", null],
			[null, "铝锭", null]
		],
		"ingredients": [
			["铝锭", 3],
			["银锭", 1]
		],
		"count": 1
	},
	"人造绿宝石碎片": {
		"type": "增强型工作台",
		"map": [
			["石块", "人造绿宝石", null],
			["人造绿宝石", null, null],
			[null, null, null]
		],
		"ingredients": [
			["石块", 1],
			["人造绿宝石", 2]
		],
		"count": 3
	},
	"光学玻璃": {
		"type": "增强型工作台",
		"map": [
			["玻璃", "玻璃", "玻璃"],
			["玻璃", "人造绿宝石碎片", "玻璃"],
			["玻璃", "玻璃", "玻璃"]
		],
		"ingredients": [
			["玻璃", 8],
			["人造绿宝石碎片", 1]
		],
		"count": 8
	},
	"光缆": {
		"type": "增强型工作台",
		"map": [
			["光学玻璃", "光学玻璃", "光学玻璃"],
			["铜线", "人造绿宝石碎片", "铜线"],
			["光学玻璃", "光学玻璃", "光学玻璃"]
		],
		"ingredients": [
			["光学玻璃", 6],
			["铜线", 2],
			["人造绿宝石碎片", 1]
		],
		"count": 16
	},
	"光学之星": {
		"type": "增强型工作台",
		"map": [
			["光学玻璃", "光缆", "光学玻璃"],
			["光缆", "下界之星", "光缆"],
			["光学玻璃", "光缆", "光学玻璃"]
		],
		"ingredients": [
			["光学玻璃", 4],
			["光缆", 4],
			["下界之星", 1]
		],
		"count": 1
	},
	"放射性光学之星": {
		"type": "增强型工作台",
		"map": [
			["起泡锭", "起泡锭", "起泡锭"],
			["光缆", "光学之星", "光缆"],
			["起泡锭", "起泡锭", "起泡锭"]
		],
		"ingredients": [
			["起泡锭", 6],
			["光缆", 2],
			["光学之星", 1]
		],
		"count": 1
	},
	"缩小底座": {
		"type": "增强型工作台",
		"map": [
			["科林斯青铜锭", "机器人交互接口 (物品)", "科林斯青铜锭"],
			["光缆", "放射性光学之星", "光缆"],
			["科林斯青铜锭", "机器人内存核心", "科林斯青铜锭"]
		],
		"ingredients": [
			["科林斯青铜锭", 4],
			["机器人交互接口 (物品)", 1],
			["光缆", 2],
			["放射性光学之星", 1],
			["机器人内存核心", 1]
		],
		"count": 1
	},
	"简易纳米机器人": {
		"type": "增强型工作台",
		"map": [
			["缩小底座", "可编程式机器人 (普通)", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["缩小底座", 1],
			["可编程式机器人 (普通)", 1]
		],
		"count": 4
	},
	"高级纳米机器人": {
		"type": "增强型工作台",
		"map": [
			["缩小底座", "可授权式可编程式机器人 (普通)", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["缩小底座", 1],
			["可授权式可编程式机器人 (普通)", 1]
		],
		"count": 4
	},
	"人工智能核心": {
		"type": "增强型工作台",
		"map": [
			["基础电路板", "机器人内存核心", "基础电路板"],
			["基础电路板", "高级纳米机器人", "基础电路板"],
			["基础电路板", "机器人内存核心", "基础电路板"]
		],
		"ingredients": [
			["基础电路板", 6],
			["机器人内存核心", 2],
			["高级纳米机器人", 1]
		],
		"count": 1
	},
	"充能人工智能核心": {
		"type": "增强型工作台",
		"map": [
			["高级电路板", "放射性光学之星", "高级电路板"],
			["高级电路板", "人工智能核心", "高级电路板"],
			["高级电路板", "放射性光学之星", "高级电路板"]
		],
		"ingredients": [
			["高级电路板", 6],
			["放射性光学之星", 2],
			["人工智能核心", 1]
		],
		"count": 1
	},
	"古代人工智能核心": {
		"type": "增强型工作台",
		"map": [
			["镎", "多功能工具 - V", "镎"],
			["镎", "充能人工智能核心", "镎"],
			["镎", "电动坩埚 - III", "镎"]
		],
		"ingredients": [
			["镎", 6],
			["多功能工具 - V", 1],
			["充能人工智能核心", 1],
			["电动坩埚 - III", 1]
		],
		"count": 1
	},
	"跨跃维度的存在": {
		"type": "增强型工作台",
		"map": [
			["钚", "多功能工具 - VI", "钚"],
			["钚", "古代人工智能核心", "钚"],
			["钚", "下界之星反应堆", "钚"]
		],
		"ingredients": [
			["钚", 6],
			["多功能工具 - VI", 1],
			["古代人工智能核心", 1],
			["下界之星反应堆", 1]
		],
		"count": 1
	},
	"网络控制器": {
		"type": "增强型工作台",
		"map": [
			["光学玻璃", "光缆", "光学玻璃"],
			["光缆", "货运管理器", "光缆"],
			["光学玻璃", "光缆", "光学玻璃"]
		],
		"ingredients": [
			["光学玻璃", 4],
			["光缆", 4],
			["货运管理器", 1]
		],
		"count": 1
	},
	"网桥": {
		"type": "增强型工作台",
		"map": [
			["光学玻璃", "光缆", "光学玻璃"],
			["光缆", "货运节点 (连接器)", "光缆"],
			["光学玻璃", "光缆", "光学玻璃"]
		],
		"ingredients": [
			["光学玻璃", 4],
			["光缆", 4],
			["货运节点 (连接器)", 1]
		],
		"count": 8
	},
	"网络监视器": {
		"type": "增强型工作台",
		"map": [
			["网桥", "光缆", "网桥"],
			["光缆", "货运马达", "光缆"],
			["网桥", "光缆", "网桥"]
		],
		"ingredients": [
			["网桥", 4],
			["光缆", 4],
			["货运马达", 1]
		],
		"count": 1
	},
	"网络入口": {
		"type": "增强型工作台",
		"map": [
			["网桥", "光缆", "网桥"],
			["光缆", "货运节点 (输入)", "光缆"],
			["网桥", "光缆", "网桥"]
		],
		"ingredients": [
			["网桥", 4],
			["光缆", 4],
			["货运节点 (输入)", 1]
		],
		"count": 1
	},
	"网络出口": {
		"type": "增强型工作台",
		"map": [
			["网桥", "光缆", "网桥"],
			["光缆", "高级货运节点 (输出)", "光缆"],
			["网桥", "光缆", "网桥"]
		],
		"ingredients": [
			["网桥", 4],
			["光缆", 4],
			["高级货运节点 (输出)", 1]
		],
		"count": 1
	},
	"网络抓取器": {
		"type": "增强型工作台",
		"map": [
			["光学玻璃", "光缆", "光学玻璃"],
			["光缆", "网络入口", "光缆"],
			["光学玻璃", "光缆", "光学玻璃"]
		],
		"ingredients": [
			["光学玻璃", 4],
			["光缆", 4],
			["网络入口", 1]
		],
		"count": 1
	},
	"网络推送器": {
		"type": "增强型工作台",
		"map": [
			["光学玻璃", "光缆", "光学玻璃"],
			["光缆", "网络出口", "光缆"],
			["光学玻璃", "光缆", "光学玻璃"]
		],
		"ingredients": [
			["光学玻璃", 4],
			["光缆", 4],
			["网络出口", 1]
		],
		"count": 1
	},
	"网络清除器": {
		"type": "增强型工作台",
		"map": [
			["光学玻璃", "光缆", "光学玻璃"],
			["光缆", "垃圾箱", "光缆"],
			["光学玻璃", "光缆", "光学玻璃"]
		],
		"ingredients": [
			["光学玻璃", 4],
			["光缆", 4],
			["垃圾箱", 1]
		],
		"count": 1
	},
	"网格": {
		"type": "增强型工作台",
		"map": [
			["网桥", "光缆", "网桥"],
			["光缆", "下界之星", "光缆"],
			["网桥", "光缆", "网桥"]
		],
		"ingredients": [
			["网桥", 4],
			["光缆", 4],
			["下界之星", 1]
		],
		"count": 1
	},
	"网格(带合成)": {
		"type": "增强型工作台",
		"map": [
			["光学之星", "光学之星", "光学之星"],
			["光学之星", "网格", "光学之星"],
			["光学之星", "光学之星", "光学之星"]
		],
		"ingredients": [
			["光学之星", 8],
			["网格", 1]
		],
		"count": 1
	},
	"网络单元": {
		"type": "增强型工作台",
		"map": [
			["网桥", "光缆", "网桥"],
			["光缆", "箱子", "光缆"],
			["网桥", "光缆", "网桥"]
		],
		"ingredients": [
			["网桥", 4],
			["光缆", 4],
			["箱子", 1]
		],
		"count": 1
	},
	"网络读卡器": {
		"type": "空配方",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"网络量子工作台": {
		"type": "增强型工作台",
		"map": [
			["光学玻璃", "高级电路板", "光学玻璃"],
			["光缆", "网桥", "光缆"],
			["光学玻璃", "高级电路板", "光学玻璃"]
		],
		"ingredients": [
			["光学玻璃", 4],
			["高级电路板", 2],
			["光缆", 2],
			["网桥", 1]
		],
		"count": 1
	},
	"网络量子存储 (4K)": {
		"map": [
			["光学玻璃", "光学玻璃", "光学玻璃"],
			["光缆", "货运马达", "光缆"],
			["光学玻璃", "光学玻璃", "光学玻璃"]
		],
		"ingredients": [
			["光学玻璃", 6],
			["光缆", 2],
			["货运马达", 1]
		],
		"count": 1
	},
	"网络量子存储 (32K)": {
		"map": [
			["光学玻璃", "铝黄铜锭", "光学玻璃"],
			["人造蓝宝石", "网络量子存储 (4K)", "人造蓝宝石"],
			["光学玻璃", "铝黄铜锭", "光学玻璃"]
		],
		"ingredients": [
			["光学玻璃", 4],
			["铝黄铜锭", 2],
			["人造蓝宝石", 2],
			["网络量子存储 (4K)", 1]
		],
		"count": 1
	},
	"网络量子存储 (262K)": {
		"map": [
			["光学玻璃", "科林斯青铜锭", "光学玻璃"],
			["人造钻石", "网络量子存储 (32K)", "人造钻石"],
			["光学玻璃", "科林斯青铜锭", "光学玻璃"]
		],
		"ingredients": [
			["光学玻璃", 4],
			["科林斯青铜锭", 2],
			["人造钻石", 2],
			["网络量子存储 (32K)", 1]
		],
		"count": 1
	},
	"网络量子存储 (2M)": {
		"map": [
			["光学玻璃", "硬化金属", "光学玻璃"],
			["人造绿宝石", "网络量子存储 (262K)", "人造绿宝石"],
			["光学玻璃", "硬化金属", "光学玻璃"]
		],
		"ingredients": [
			["光学玻璃", 4],
			["硬化金属", 2],
			["人造绿宝石", 2],
			["网络量子存储 (262K)", 1]
		],
		"count": 1
	},
	"网络量子存储 (16M)": {
		"map": [
			["光学玻璃", "强化合金锭", "光学玻璃"],
			["能量水晶", "网络量子存储 (2M)", "能量水晶"],
			["光学玻璃", "强化合金锭", "光学玻璃"]
		],
		"ingredients": [
			["光学玻璃", 4],
			["强化合金锭", 2],
			["能量水晶", 2],
			["网络量子存储 (2M)", 1]
		],
		"count": 1
	},
	"网络量子存储 (134M)": {
		"map": [
			["钢板", "起泡锭 (33%)", "钢板"],
			["货运马达", "网络量子存储 (16M)", "货运马达"],
			["钢板", "起泡锭 (33%)", "钢板"]
		],
		"ingredients": [
			["钢板", 4],
			["起泡锭 (33%)", 2],
			["货运马达", 2],
			["网络量子存储 (16M)", 1]
		],
		"count": 1
	},
	"网络量子存储 (1B)": {
		"map": [
			["钢筋板", "起泡锭 (66%)", "钢筋板"],
			["货运节点 (连接器)", "网络量子存储 (134M)", "货运节点 (连接器)"],
			["钢筋板", "起泡锭 (66%)", "钢筋板"]
		],
		"ingredients": [
			["钢筋板", 4],
			["起泡锭 (66%)", 2],
			["货运节点 (连接器)", 2],
			["网络量子存储 (134M)", 1]
		],
		"count": 1
	},
	"网络量子存储 (∞)": {
		"map": [
			["光学玻璃", "起泡锭", "光学玻璃"],
			["货运管理器", "网络量子存储 (1B)", "货运管理器"],
			["光学玻璃", "起泡锭", "光学玻璃"]
		],
		"ingredients": [
			["光学玻璃", 4],
			["起泡锭", 2],
			["货运管理器", 2],
			["网络量子存储 (1B)", 1]
		],
		"count": 1
	},
	"网络内存清除器 α": {
		"type": "空配方",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"网络内存清除器 β": {
		"type": "空配方",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"网络内存清除器 γ": {
		"type": "空配方",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"网络内存清除器 δ": {
		"type": "空配方",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"网络电容 (1)": {
		"type": "增强型工作台",
		"map": [
			["光学玻璃", "光缆", "光学玻璃"],
			["光缆", "黑金刚石镶边储能电容", "光缆"],
			["光学玻璃", "光缆", "光学玻璃"]
		],
		"ingredients": [
			["光学玻璃", 4],
			["光缆", 4],
			["黑金刚石镶边储能电容", 1]
		],
		"count": 1
	},
	"网络电容 (2)": {
		"type": "增强型工作台",
		"map": [
			["网络电容 (1)", "网络电容 (1)", "网络电容 (1)"],
			["网络电容 (1)", "终极储能电容", "网络电容 (1)"],
			["网络电容 (1)", "网络电容 (1)", "网络电容 (1)"]
		],
		"ingredients": [
			["网络电容 (1)", 8],
			["终极储能电容", 1]
		],
		"count": 1
	},
	"网络电表": {
		"type": "增强型工作台",
		"map": [
			["光学玻璃", "能源调节器", "光学玻璃"],
			["光缆", "网络电容 (1)", "光缆"],
			["光学玻璃", "能源连接器", "光学玻璃"]
		],
		"ingredients": [
			["光学玻璃", 4],
			["能源调节器", 1],
			["光缆", 2],
			["网络电容 (1)", 1],
			["能源连接器", 1]
		],
		"count": 1
	},
	"网络配方编码器": {
		"type": "增强型工作台",
		"map": [
			["基础电路板", "机器人内存核心", "基础电路板"],
			["基础电路板", "自动合成机 (高级)", "基础电路板"],
			["基础电路板", "货运马达", "基础电路板"]
		],
		"ingredients": [
			["基础电路板", 6],
			["机器人内存核心", 1],
			["自动合成机 (高级)", 1],
			["货运马达", 1]
		],
		"count": 1
	},
	"网络自动合成机": {
		"type": "增强型工作台",
		"map": [
			["光学玻璃", "光缆", "光学玻璃"],
			["光缆", "简易纳米机器人", "光缆"],
			["光学玻璃", "自动合成机 (高级)", "光学玻璃"]
		],
		"ingredients": [
			["光学玻璃", 4],
			["光缆", 3],
			["简易纳米机器人", 1],
			["自动合成机 (高级)", 1]
		],
		"count": 1
	},
	"网络自动合成机 (预留版)": {
		"type": "增强型工作台",
		"map": [
			["光学玻璃", "光缆", "光学玻璃"],
			["光缆", "高级纳米机器人", "光缆"],
			["光学玻璃", "网络自动合成机", "光学玻璃"]
		],
		"ingredients": [
			["光学玻璃", 4],
			["光缆", 3],
			["高级纳米机器人", 1],
			["网络自动合成机", 1]
		],
		"count": 1
	},
	"网络内存卡 (4K)": {
		"type": "空配方",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"网络内存卡 (32K)": {
		"type": "空配方",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"网络内存卡 (262K)": {
		"type": "空配方",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"网络内存卡 (2M)": {
		"type": "空配方",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"网络内存卡 (16M)": {
		"type": "空配方",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"网络内存卡 (134M)": {
		"type": "空配方",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"网络内存卡 (1B)": {
		"type": "空配方",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"网络内存卡 (∞)": {
		"type": "空配方",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"合成蓝图": {
		"type": "增强型工作台",
		"map": [
			["光缆", "光缆", "光缆"],
			["光缆", "纸", "光缆"],
			["光缆", "光缆", "光缆"]
		],
		"ingredients": [
			["光缆", 8],
			["纸", 1]
		],
		"count": 1
	},
	"网络探测器": {
		"type": "增强型工作台",
		"map": [
			[null, "硬铝锭", null],
			[null, "光缆", null],
			[null, "网桥", null]
		],
		"ingredients": [
			["硬铝锭", 1],
			["光缆", 1],
			["网桥", 1]
		],
		"count": 1
	},
	"网络远程访问器": {
		"type": "增强型工作台",
		"map": [
			[null, "网格", null],
			[null, "人工智能核心", null],
			[null, "光学之星", null]
		],
		"ingredients": [
			["网格", 1],
			["人工智能核心", 1],
			["光学之星", 1]
		],
		"count": 1
	},
	"充能网络远程访问器": {
		"type": "增强型工作台",
		"map": [
			[null, "网络远程访问器", null],
			[null, "充能人工智能核心", null],
			[null, "网络远程访问器", null]
		],
		"ingredients": [
			["网络远程访问器", 2],
			["充能人工智能核心", 1]
		],
		"count": 1
	},
	"古代网络远程访问器": {
		"type": "增强型工作台",
		"map": [
			[null, "充能网络远程访问器", null],
			[null, "古代人工智能核心", null],
			[null, "充能网络远程访问器", null]
		],
		"ingredients": [
			["充能网络远程访问器", 2],
			["古代人工智能核心", 1]
		],
		"count": 1
	},
	"终极网络远程访问器": {
		"type": "增强型工作台",
		"map": [
			[null, "古代网络远程访问器", null],
			[null, "跨跃维度的存在", null],
			[null, "古代网络远程访问器", null]
		],
		"ingredients": [
			["古代网络远程访问器", 2],
			["跨跃维度的存在", 1]
		],
		"count": 1
	},
	"网络绘制器": {
		"type": "增强型工作台",
		"map": [
			[null, "光缆", null],
			[null, "蜜脾", null],
			[null, "蜜脾", null]
		],
		"ingredients": [
			["光缆", 1],
			["蜜脾", 2]
		],
		"count": 1
	},
	"网络配置器": {
		"type": "增强型工作台",
		"map": [
			[null, "放射性光学之星", null],
			[null, "网络绘制器", null],
			[null, "人工智能核心", null]
		],
		"ingredients": [
			["放射性光学之星", 1],
			["网络绘制器", 1],
			["人工智能核心", 1]
		],
		"count": 1
	},
	"网络扳手 (1)": {
		"type": "增强型工作台",
		"map": [
			[null, "放射性光学之星", null],
			[null, "钻石剑", null],
			[null, "人造绿宝石碎片", null]
		],
		"ingredients": [
			["放射性光学之星", 1],
			["钻石剑", 1],
			["人造绿宝石碎片", 1]
		],
		"count": 1
	},
	"网络扳手 (2)": {
		"type": "增强型工作台",
		"map": [
			[null, "放射性光学之星", null],
			[null, "网络扳手 (1)", null],
			[null, "人工智能核心", null]
		],
		"ingredients": [
			["放射性光学之星", 1],
			["网络扳手 (1)", 1],
			["人工智能核心", 1]
		],
		"count": 1
	},
	"网络扳手 (3)": {
		"type": "增强型工作台",
		"map": [
			[null, "放射性光学之星", null],
			[null, "网络扳手 (2)", null],
			[null, "充能人工智能核心", null]
		],
		"ingredients": [
			["放射性光学之星", 1],
			["网络扳手 (2)", 1],
			["充能人工智能核心", 1]
		],
		"count": 1
	},
	"机器零件": {
		"type": "增强型工作台",
		"map": [
			["青铜锭", "金锭 (4克拉)", "青铜锭"],
			["高级电路板", "电磁铁", "高级电路板"],
			["铜线", "避雷针", "铜线"]
		],
		"ingredients": [
			["青铜锭", 2],
			["金锭 (4克拉)", 1],
			["高级电路板", 2],
			["电磁铁", 1],
			["铜线", 2],
			["避雷针", 1]
		],
		"count": 1
	},
	"散热器": {
		"type": "增强型工作台",
		"map": [
			["铜锭", "金锭", "铜锭"],
			["基础电路板", "磁铁", "基础电路板"],
			["铜线", "避雷针", "铜线"]
		],
		"ingredients": [
			["铜锭", 2],
			["金锭", 1],
			["基础电路板", 2],
			["磁铁", 1],
			["铜线", 2],
			["避雷针", 1]
		],
		"count": 1
	},
	"马达开关": {
		"type": "增强型工作台",
		"map": [
			["电动马达", "铝黄铜锭", "电动马达"],
			["拉杆", "红石粉", "拉杆"],
			["铜线", "避雷针", "铜线"]
		],
		"ingredients": [
			["电动马达", 2],
			["铝黄铜锭", 1],
			["拉杆", 2],
			["红石粉", 1],
			["铜线", 2],
			["避雷针", 1]
		],
		"count": 1
	},
	"齿轮": {
		"type": "增强型工作台",
		"map": [
			["电动马达", "货运马达", "电动马达"],
			["红石粉", "锁链", "红石粉"],
			["铜线", "马达开关", "铜线"]
		],
		"ingredients": [
			["电动马达", 2],
			["货运马达", 1],
			["红石粉", 2],
			["锁链", 1],
			["铜线", 2],
			["马达开关", 1]
		],
		"count": 1
	},
	"镶件螺纹": {
		"type": "增强型工作台",
		"map": [
			["橡木木板", "木棍", "橡木木板"],
			["铜线", "木棍", "铜线"],
			["铜线", "木棍", "铜线"]
		],
		"ingredients": [
			["橡木木板", 2],
			["木棍", 3],
			["铜线", 4]
		],
		"count": 1
	},
	"压缩零件": {
		"type": "增强型工作台",
		"map": [
			["活塞", "下界砖块", "活塞"],
			["镶件螺纹", "齿轮", "镶件螺纹"],
			["铜线", "下界砖块", "铜线"]
		],
		"ingredients": [
			["活塞", 2],
			["下界砖块", 2],
			["镶件螺纹", 2],
			["齿轮", 1],
			["铜线", 2]
		],
		"count": 1
	},
	"冷凝器": {
		"type": "增强型工作台",
		"map": [
			["活塞", "散热器", "活塞"],
			["压缩零件", "齿轮", "压缩零件"],
			["铜线", "散热器", "铜线"]
		],
		"ingredients": [
			["活塞", 2],
			["散热器", 2],
			["压缩零件", 2],
			["齿轮", 1],
			["铜线", 2]
		],
		"count": 1
	},
	"回收器": {
		"type": "增强型工作台",
		"map": [
			["活塞", "散热器", "活塞"],
			["压缩零件", "齿轮", "压缩零件"],
			["冷凝器", "散热器", "冷凝器"]
		],
		"ingredients": [
			["活塞", 2],
			["散热器", 2],
			["压缩零件", 2],
			["齿轮", 1],
			["冷凝器", 2]
		],
		"count": 1
	},
	"降级器": {
		"type": "增强型工作台",
		"map": [
			["活塞", "镶件螺纹", "活塞"],
			["回收器", "齿轮", "回收器"],
			["冷凝器", "压缩零件", "冷凝器"]
		],
		"ingredients": [
			["活塞", 2],
			["镶件螺纹", 1],
			["回收器", 2],
			["齿轮", 1],
			["冷凝器", 2],
			["压缩零件", 1]
		],
		"count": 1
	},
	"金属漏斗": {
		"type": "增强型工作台",
		"map": [
			["铅锭", "方解石", "铅锭"],
			["镶件螺纹", "木桶", "镶件螺纹"],
			["铜线", "方解石", "铜线"]
		],
		"ingredients": [
			["铅锭", 2],
			["方解石", 2],
			["镶件螺纹", 2],
			["木桶", 1],
			["铜线", 2]
		],
		"count": 1
	},
	"电源组件": {
		"type": "增强型工作台",
		"map": [
			["电动马达", "铜锭", "电动马达"],
			["铜锭", "能量水晶", "铜锭"],
			["铜线", "避雷针", "铜线"]
		],
		"ingredients": [
			["电动马达", 2],
			["铜锭", 3],
			["能量水晶", 1],
			["铜线", 2],
			["避雷针", 1]
		],
		"count": 1
	},
	"黄铜镀膜": {
		"type": "增强型工作台",
		"map": [
			["铜锭", "紫水晶碎片", "铜锭"],
			["黄铜锭", "铜块", "黄铜锭"],
			["青铜锭", "紫水晶碎片", "青铜锭"]
		],
		"ingredients": [
			["铜锭", 2],
			["紫水晶碎片", 2],
			["黄铜锭", 2],
			["铜块", 1],
			["青铜锭", 2]
		],
		"count": 1
	},
	"强化合金镀膜": {
		"type": "增强型工作台",
		"map": [
			["钢筋板", "铜锭", "钢筋板"],
			["强化合金锭", "铁块", "黄铜锭"],
			["青铜锭", "铜锭", "青铜锭"]
		],
		"ingredients": [
			["钢筋板", 2],
			["铜锭", 2],
			["强化合金锭", 1],
			["铁块", 1],
			["黄铜锭", 1],
			["青铜锭", 2]
		],
		"count": 1
	},
	"金刚石镀膜": {
		"type": "增强型工作台",
		"map": [
			["钴锭", "紫水晶簇", "钴锭"],
			["钻石", "钻石块", "钻石"],
			["青铜锭", "紫水晶簇", "青铜锭"]
		],
		"ingredients": [
			["钴锭", 2],
			["紫水晶簇", 2],
			["钻石", 2],
			["钻石块", 1],
			["青铜锭", 2]
		],
		"count": 1
	},
	"铝镀膜": {
		"type": "增强型工作台",
		"map": [
			["硬铝锭", "紫水晶簇", "硬铝锭"],
			["铝锭", "紫水晶簇", "铝锭"],
			["青铜锭", "紫水晶簇", "青铜锭"]
		],
		"ingredients": [
			["硬铝锭", 2],
			["紫水晶簇", 3],
			["铝锭", 2],
			["青铜锭", 2]
		],
		"count": 1
	},
	"黄金镀膜": {
		"type": "增强型工作台",
		"map": [
			["金锭 (8克拉)", "金粒", "金锭 (8克拉)"],
			["铝锭", "金块", "铝锭"],
			["青铜锭", "金粒", "青铜锭"]
		],
		"ingredients": [
			["金锭 (8克拉)", 2],
			["金粒", 2],
			["铝锭", 2],
			["金块", 1],
			["青铜锭", 2]
		],
		"count": 1
	},
	"基础机器核心": {
		"type": "增强型工作台",
		"map": [
			["齿轮", "紫水晶碎片", "齿轮"],
			["黄铜镀膜", "机器零件", "黄铜镀膜"],
			["散热器", "紫水晶碎片", "散热器"]
		],
		"ingredients": [
			["齿轮", 2],
			["紫水晶碎片", 2],
			["黄铜镀膜", 2],
			["机器零件", 1],
			["散热器", 2]
		],
		"count": 1
	},
	"高科技机器核心": {
		"type": "增强型工作台",
		"map": [
			["齿轮", "基础机器核心", "齿轮"],
			["强化合金镀膜", "机器零件", "黄铜镀膜"],
			["散热器", "基础机器核心", "散热器"]
		],
		"ingredients": [
			["齿轮", 2],
			["基础机器核心", 2],
			["强化合金镀膜", 1],
			["机器零件", 1],
			["黄铜镀膜", 1],
			["散热器", 2]
		],
		"count": 1
	},
	"金属废料": {
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"解绑符文": {
		"map": [
			["起泡锭", "烈焰粉", "起泡锭"],
			["魔法结晶 - III", null, "魔法结晶 - III"],
			["空白符文", "腐肉", "空白符文"]
		],
		"ingredients": [
			["起泡锭", 2],
			["烈焰粉", 1],
			["魔法结晶 - III", 2],
			["空白符文", 2],
			["腐肉", 1]
		],
		"count": 1
	},
	"螺旋火符文": {
		"map": [
			["铜锭", "火药", "起泡锭 (33%)"],
			[null, "空白符文", null],
			["铜锭", "打火石", "起泡锭 (33%)"]
		],
		"ingredients": [
			["铜锭", 2],
			["火药", 1],
			["起泡锭 (33%)", 2],
			["空白符文", 1],
			["打火石", 1]
		],
		"count": 1
	},
	"精神符文": {
		"map": [
			["空白符文", "腐肉", "空白符文"],
			["烈焰粉", "魔法糖", "烈焰粉"],
			["空白符文", "凋灵骷髅头颅", "空白符文"]
		],
		"ingredients": [
			["空白符文", 4],
			["腐肉", 1],
			["烈焰粉", 2],
			["魔法糖", 1],
			["凋灵骷髅头颅", 1]
		],
		"count": 1
	},
	"瘟疫符文": {
		"map": [
			["铀", "下界疣", "铀"],
			["腐肉", "空白符文", "腐肉"],
			["铀", "下界石英", "铀"]
		],
		"ingredients": [
			["铀", 4],
			["下界疣", 1],
			["腐肉", 2],
			["空白符文", 1],
			["下界石英", 1]
		],
		"count": 1
	},
	"闪闪发光的符文": {
		"map": [
			["银锭", null, "银锭"],
			["烈焰棒", "空白符文", "烈焰棒"],
			["银锭", null, "银锭"]
		],
		"ingredients": [
			["银锭", 4],
			["烈焰棒", 2],
			["空白符文", 1]
		],
		"count": 1
	},
	"云符文": {
		"map": [
			["魔法结晶 - I", "烈焰粉", "魔法结晶 - I"],
			["魔法结晶 - I", "古代符文 [气]", "魔法结晶 - I"],
			["镁", "魔法糖", "镁"]
		],
		"ingredients": [
			["魔法结晶 - I", 4],
			["烈焰粉", 1],
			["古代符文 [气]", 1],
			["镁", 2],
			["魔法糖", 1]
		],
		"count": 1
	},
	"冰符文": {
		"map": [
			["冰", null, "冰"],
			["魔法结晶 - III", "空白符文", "魔法结晶 - III"],
			["冰", null, "冰"]
		],
		"ingredients": [
			["冰", 4],
			["魔法结晶 - III", 2],
			["空白符文", 1]
		],
		"count": 1
	},
	"能量符文": {
		"map": [
			["红石粉", "起泡锭", "红石粉"],
			["起泡锭", "空白符文", "起泡锭"],
			["下界之星", "起泡锭", "下界之星"]
		],
		"ingredients": [
			["红石粉", 2],
			["起泡锭", 4],
			["空白符文", 1],
			["下界之星", 2]
		],
		"count": 1
	},
	"灵符符文": {
		"map": [
			["下界疣", "锡粉", "下界疣"],
			["荧石粉", "空白符文", "荧石粉"],
			["发酵蛛眼", "锌粉", "发酵蛛眼"]
		],
		"ingredients": [
			["下界疣", 2],
			["锡粉", 1],
			["荧石粉", 2],
			["空白符文", 1],
			["发酵蛛眼", 2],
			["锌粉", 1]
		],
		"count": 1
	},
	"敏捷符文": {
		"map": [
			["糖", "猪肉干", "糖"],
			["下界疣", "空白符文", "下界疣"],
			["糖", "牛肉干", "糖"]
		],
		"ingredients": [
			["糖", 4],
			["猪肉干", 1],
			["下界疣", 2],
			["空白符文", 1],
			["牛肉干", 1]
		],
		"count": 1
	},
	"智力符文": {
		"map": [
			["烈焰粉", null, "烈焰粉"],
			["魔法糖", "空白符文", "魔法糖"],
			["糖", null, "糖"]
		],
		"ingredients": [
			["烈焰粉", 2],
			["魔法糖", 2],
			["空白符文", 1],
			["糖", 2]
		],
		"count": 1
	},
	"心符文": {
		"map": [
			[null, "下界疣", null],
			["魔法糖", "空白符文", "魔法糖"],
			["闪烁的西瓜片", "下界疣", "闪烁的西瓜片"]
		],
		"ingredients": [
			["下界疣", 2],
			["魔法糖", 2],
			["空白符文", 1],
			["闪烁的西瓜片", 2]
		],
		"count": 1
	},
	"优质碧玉宝石": {
		"map": [
			["能量符文", "钻石矿石", "能量符文"],
			[null, "绿宝石矿石", null],
			["智力符文", "金矿石", "智力符文"]
		],
		"ingredients": [
			["能量符文", 2],
			["钻石矿石", 1],
			["绿宝石矿石", 1],
			["智力符文", 2],
			["金矿石", 1]
		],
		"count": 1
	},
	"散热器": {
		"map": [
			["金属废料", null, "金属废料"],
			["金属废料", "金属废料", "金属废料"],
			["金属废料", null, "金属废料"]
		],
		"ingredients": [
			["金属废料", 7]
		],
		"count": 1
	},
	"齿轮": {
		"map": [
			["金属废料", "金属废料", "金属废料"],
			["金属废料", null, "金属废料"],
			["金属废料", "金属废料", "金属废料"]
		],
		"ingredients": [
			["金属废料", 8]
		],
		"count": 1
	},
	"机器零件": {
		"map": [
			["金属废料", "金属废料", "金属废料"],
			["金属废料", "金属废料", "金属废料"],
			["金属废料", null, "金属废料"]
		],
		"ingredients": [
			["金属废料", 8]
		],
		"count": 1
	},
	"马达开关": {
		"map": [
			["金属废料", "金属废料", "金属废料"],
			[null, "金属废料", null],
			["金属废料", "金属废料", "金属废料"]
		],
		"ingredients": [
			["金属废料", 7]
		],
		"count": 1
	},
	"镶件螺纹": {
		"map": [
			["金属废料", null, "金属废料"],
			[null, "金属废料", null],
			["金属废料", null, "金属废料"]
		],
		"ingredients": [
			["金属废料", 5]
		],
		"count": 1
	},
	"电源组件": {
		"map": [
			["金属废料", "金属废料", "金属废料"],
			["金属废料", "金属废料", null],
			["金属废料", null, "金属废料"]
		],
		"ingredients": [
			["金属废料", 7]
		],
		"count": 1
	},
	"金属漏斗": {
		"map": [
			["金属废料", "金属废料", "金属废料"],
			[null, "金属废料", null],
			["金属废料", null, "金属废料"]
		],
		"ingredients": [
			["金属废料", 6]
		],
		"count": 1
	},
	"FN材料生成器": {
		"type": "多方块结构",
		"map": [
			[null, null, null],
			[null, "箱子", null],
			[null, "Any FN Material generator", null]
		],
		"ingredients": [
			["箱子", 1],
			["Any FN Material generator", 1]
		],
		"count": 1
	},
	"FN粘土生成器 (破损)": {
		"map": [
			["碳", "钻石镐", "碳"],
			["碗", "水桶", "碗"],
			["碳", "淘金盘", "碳"]
		],
		"ingredients": [
			["碳", 4],
			["钻石镐", 1],
			["碗", 2],
			["水桶", 1],
			["淘金盘", 1]
		],
		"count": 1
	},
	"FN粘土生成器": {
		"type": "增强型工作台",
		"map": [
			["淘金盘", "黏土块", "淘金盘"],
			["沙砾生成器", "FN粘土生成器 (破损)", "沙砾生成器"],
			["钻石镐", "熔炉", "钻石镐"]
		],
		"ingredients": [
			["淘金盘", 2],
			["黏土块", 1],
			["沙砾生成器", 2],
			["FN粘土生成器 (破损)", 1],
			["钻石镐", 2],
			["熔炉", 1]
		],
		"count": 1
	},
	"FN变形尼龙发生器 (Broken)": {
		"map": [
			["黑金刚石", "钻石锹", "黑金刚石"],
			["下界合金镐", "水桶", "下界合金镐"],
			["黑金刚石", "下界淘金盘", "黑金刚石"]
		],
		"ingredients": [
			["黑金刚石", 4],
			["钻石锹", 1],
			["下界合金镐", 2],
			["水桶", 1],
			["下界淘金盘", 1]
		],
		"count": 1
	},
	"FN变形尼龙发生器": {
		"type": "增强型工作台",
		"map": [
			["下界合金锹", "诡异菌岩", "下界合金锹"],
			["远古残骸生成器", "FN变形尼龙发生器 (Broken)", "远古残骸生成器"],
			["下界合金锹", "高炉", "下界合金锹"]
		],
		"ingredients": [
			["下界合金锹", 4],
			["诡异菌岩", 1],
			["远古残骸生成器", 2],
			["FN变形尼龙发生器 (Broken)", 1],
			["高炉", 1]
		],
		"count": 1
	},
	"FN陶瓦生成器 (破损)": {
		"map": [
			["硅铁", "钻石镐", "硅铁"],
			["钻石锹", "桶", "钻石锹"],
			["硅铁", "煤炭", "硅铁"]
		],
		"ingredients": [
			["硅铁", 4],
			["钻石镐", 1],
			["钻石锹", 2],
			["桶", 1],
			["煤炭", 1]
		],
		"count": 1
	},
	"FN陶瓦生成器": {
		"type": "增强型工作台",
		"map": [
			["圆石生成器", "沙砾生成器", "圆石生成器"],
			["FN粘土生成器", "FN陶瓦生成器 (破损)", "FN粘土生成器"],
			["圆石生成器", "高炉", "圆石生成器"]
		],
		"ingredients": [
			["圆石生成器", 4],
			["沙砾生成器", 1],
			["FN粘土生成器", 2],
			["FN陶瓦生成器 (破损)", 1],
			["高炉", 1]
		],
		"count": 1
	},
	"FN骨头生成器 (破损)": {
		"map": [
			["骨粉", "钻石剑", "骨粉"],
			["骨块", "水桶", "骨块"],
			["起泡锭 (66%)", "煤炭", "起泡锭 (66%)"]
		],
		"ingredients": [
			["骨粉", 2],
			["钻石剑", 1],
			["骨块", 2],
			["水桶", 1],
			["起泡锭 (66%)", 2],
			["煤炭", 1]
		],
		"count": 1
	},
	"FN骨头生成器": {
		"type": "增强型工作台",
		"map": [
			["起泡锭", "灵魂沙生成器", "起泡锭"],
			["骨头", "FN骨头生成器 (破损)", "骨头"],
			["可编程式机器人 (普通)", "高炉", "可编程式机器人 (普通)"]
		],
		"ingredients": [
			["起泡锭", 2],
			["灵魂沙生成器", 1],
			["骨头", 2],
			["FN骨头生成器 (破损)", 1],
			["可编程式机器人 (普通)", 2],
			["高炉", 1]
		],
		"count": 1
	},
	"FN钻石生成器 (破损)": {
		"map": [
			["人造钻石", "圆石生成器", "人造钻石"],
			["钻石块", "水桶", "钻石块"],
			["人造钻石", "钻石镐", "人造钻石"]
		],
		"ingredients": [
			["人造钻石", 4],
			["圆石生成器", 1],
			["钻石块", 2],
			["水桶", 1],
			["钻石镐", 1]
		],
		"count": 1
	},
	"FN钻石生成器": {
		"type": "增强型工作台",
		"map": [
			["可编程式机器人 (矿工)", "钻石", "可编程式机器人 (矿工)"],
			["钻石", "FN钻石生成器 (破损)", "钻石"],
			["可编程式机器人 (普通)", "高炉", "可编程式机器人 (普通)"]
		],
		"ingredients": [
			["可编程式机器人 (矿工)", 2],
			["钻石", 3],
			["FN钻石生成器 (破损)", 1],
			["可编程式机器人 (普通)", 2],
			["高炉", 1]
		],
		"count": 1
	},
	"FN绿宝石生成器 (破损)": {
		"map": [
			["绿宝石", "绿宝石矿石", "绿宝石"],
			["绿宝石块", "水桶", "绿宝石块"],
			["人造绿宝石", "钻石镐", "人造绿宝石"]
		],
		"ingredients": [
			["绿宝石", 2],
			["绿宝石矿石", 1],
			["绿宝石块", 2],
			["水桶", 1],
			["人造绿宝石", 2],
			["钻石镐", 1]
		],
		"count": 1
	},
	"FN绿宝石生成器": {
		"type": "增强型工作台",
		"map": [
			["可编程式机器人 (矿工)", "绿宝石", "可编程式机器人 (矿工)"],
			["绿宝石", "FN绿宝石生成器 (破损)", "绿宝石"],
			["可编程式机器人 (普通)", "高炉", "可编程式机器人 (普通)"]
		],
		"ingredients": [
			["可编程式机器人 (矿工)", 2],
			["绿宝石", 3],
			["FN绿宝石生成器 (破损)", 1],
			["可编程式机器人 (普通)", 2],
			["高炉", 1]
		],
		"count": 1
	},
	"FN泥土生成器 (破损)": {
		"map": [
			["泥土", "钻石锹", "泥土"],
			["钻石锹", "水桶", "铁锹"],
			["焊锡锭", "钻石镐", "焊锡锭"]
		],
		"ingredients": [
			["泥土", 2],
			["钻石锹", 2],
			["水桶", 1],
			["铁锹", 1],
			["焊锡锭", 2],
			["钻石镐", 1]
		],
		"count": 1
	},
	"FN泥土生成器": {
		"type": "增强型工作台",
		"map": [
			["金锹", "泥土", "金锹"],
			["泥土", "FN泥土生成器 (破损)", "泥土"],
			["镁锭", "高炉", "镁锭"]
		],
		"ingredients": [
			["金锹", 2],
			["泥土", 3],
			["FN泥土生成器 (破损)", 1],
			["镁锭", 2],
			["高炉", 1]
		],
		"count": 1
	},
	"FN蜜脾生成器 (破损)": {
		"map": [
			["蜜脾", "蜂蜜瓶", "蜜脾"],
			["钻石锹", "水桶", "铁锹"],
			["钢筋板", "蜂蜜块", "钢筋板"]
		],
		"ingredients": [
			["蜜脾", 2],
			["蜂蜜瓶", 1],
			["钻石锹", 1],
			["水桶", 1],
			["铁锹", 1],
			["钢筋板", 2],
			["蜂蜜块", 1]
		],
		"count": 1
	},
	"FN蜜脾生成器": {
		"type": "增强型工作台",
		"map": [
			["蜜脾块", "FN泥土生成器", "蜜脾块"],
			["蜜脾", "FN蜜脾生成器 (破损)", "蜜脾"],
			["强化合金锭", "高炉", "强化合金锭"]
		],
		"ingredients": [
			["蜜脾块", 2],
			["FN泥土生成器", 1],
			["蜜脾", 2],
			["FN蜜脾生成器 (破损)", 1],
			["强化合金锭", 2],
			["高炉", 1]
		],
		"count": 1
	},
	"FN石英生成器 (破损)": {
		"map": [
			["下界岩", "金锹", "下界岩"],
			["铁锹", "石英块", "铁锹"],
			["钢板", "下界岩", "钢板"]
		],
		"ingredients": [
			["下界岩", 3],
			["金锹", 1],
			["铁锹", 2],
			["石英块", 1],
			["钢板", 2]
		],
		"count": 1
	},
	"FN石英生成器": {
		"type": "增强型工作台",
		"map": [
			["铁镐", "铁镐", "铁镐"],
			["下界石英", "FN石英生成器 (破损)", "下界石英"],
			["圆石生成器", "高炉", "圆石生成器"]
		],
		"ingredients": [
			["铁镐", 3],
			["下界石英", 2],
			["FN石英生成器 (破损)", 1],
			["圆石生成器", 2],
			["高炉", 1]
		],
		"count": 1
	},
	"FN紫水晶生成器 (破损)": {
		"map": [
			["FN石英生成器", "下界合金镐", "FN石英生成器"],
			["下界合金镐", "紫水晶块", "下界合金镐"],
			["强化合金镀膜", "远古残骸生成器", "强化合金镀膜"]
		],
		"ingredients": [
			["FN石英生成器", 2],
			["下界合金镐", 3],
			["紫水晶块", 1],
			["强化合金镀膜", 2],
			["远古残骸生成器", 1]
		],
		"count": 1
	},
	"FN紫水晶生成器": {
		"type": "增强型工作台",
		"map": [
			["钻石镐", "强化合金锭", "钻石镐"],
			["紫水晶簇", "FN紫水晶生成器 (破损)", "紫水晶簇"],
			["紫水晶块", "高炉", "紫水晶块"]
		],
		"ingredients": [
			["钻石镐", 2],
			["强化合金锭", 1],
			["紫水晶簇", 2],
			["FN紫水晶生成器 (破损)", 1],
			["紫水晶块", 2],
			["高炉", 1]
		],
		"count": 1
	},
	"FN 功率扩展 R1": {
		"map": [
			["电源组件", "铱", "电源组件"],
			["基础机器核心", "充能太阳能发电机", "基础机器核心"],
			["基础电路板", "铝镀膜", "基础电路板"]
		],
		"ingredients": [
			["电源组件", 2],
			["铱", 1],
			["基础机器核心", 2],
			["充能太阳能发电机", 1],
			["基础电路板", 2],
			["铝镀膜", 1]
		],
		"count": 1
	},
	"FN 功率扩展 R2": {
		"map": [
			["电源组件", "FN 功率扩展 R1", "电源组件"],
			["基础机器核心", "铱", "基础机器核心"],
			["基础电路板", "铝镀膜", "基础电路板"]
		],
		"ingredients": [
			["电源组件", 2],
			["FN 功率扩展 R1", 1],
			["基础机器核心", 2],
			["铱", 1],
			["基础电路板", 2],
			["铝镀膜", 1]
		],
		"count": 1
	},
	"FN 功率扩展 R3": {
		"map": [
			["电源组件", "FN 功率扩展 R2", "电源组件"],
			["基础机器核心", "铱", "基础机器核心"],
			["基础电路板", "铝镀膜", "基础电路板"]
		],
		"ingredients": [
			["电源组件", 2],
			["FN 功率扩展 R2", 1],
			["基础机器核心", 2],
			["铱", 1],
			["基础电路板", 2],
			["铝镀膜", 1]
		],
		"count": 1
	},
	"FN 功率扩展 R4": {
		"map": [
			["电源组件", "FN 功率扩展 R3", "电源组件"],
			["基础机器核心", "铱", "基础机器核心"],
			["高级电路板", "黄金镀膜", "高级电路板"]
		],
		"ingredients": [
			["电源组件", 2],
			["FN 功率扩展 R3", 1],
			["基础机器核心", 2],
			["铱", 1],
			["高级电路板", 2],
			["黄金镀膜", 1]
		],
		"count": 1
	},
	"FN 功率扩展 R5": {
		"map": [
			["电源组件", "FN 功率扩展 R4", "电源组件"],
			["高科技机器核心", "铱", "高科技机器核心"],
			["FN太阳能发电机组 I", "黄金镀膜", "高级电路板"]
		],
		"ingredients": [
			["电源组件", 2],
			["FN 功率扩展 R4", 1],
			["高科技机器核心", 2],
			["铱", 1],
			["FN太阳能发电机组 I", 1],
			["黄金镀膜", 1],
			["高级电路板", 1]
		],
		"count": 1
	},
	"FN 功率扩展 R6": {
		"map": [
			["电源组件", "FN 功率扩展 R5", "齿轮"],
			["高科技机器核心", "铱", "高科技机器核心"],
			["FN太阳能发电机组 II", "黄金镀膜", "强化合金锭"]
		],
		"ingredients": [
			["电源组件", 1],
			["FN 功率扩展 R5", 1],
			["齿轮", 1],
			["高科技机器核心", 2],
			["铱", 1],
			["FN太阳能发电机组 II", 1],
			["黄金镀膜", 1],
			["强化合金锭", 1]
		],
		"count": 1
	},
	"FN 功率扩展 R7": {
		"map": [
			["电源组件", "FN 功率扩展 R6", "齿轮"],
			["高科技机器核心", "铱", "高科技机器核心"],
			["FN太阳能发电机组 III", "黄铜镀膜", "起泡锭 (33%)"]
		],
		"ingredients": [
			["电源组件", 1],
			["FN 功率扩展 R6", 1],
			["齿轮", 1],
			["高科技机器核心", 2],
			["铱", 1],
			["FN太阳能发电机组 III", 1],
			["黄铜镀膜", 1],
			["起泡锭 (33%)", 1]
		],
		"count": 1
	},
	"FN 功率扩展 R8": {
		"map": [
			["电源组件", "FN 功率扩展 R7", "齿轮"],
			["高科技机器核心", "铱", "高科技机器核心"],
			["起泡锭 (66%)", "FN太阳能发电机组 IV", "起泡锭 (66%)"]
		],
		"ingredients": [
			["电源组件", 1],
			["FN 功率扩展 R7", 1],
			["齿轮", 1],
			["高科技机器核心", 2],
			["铱", 1],
			["起泡锭 (66%)", 2],
			["FN太阳能发电机组 IV", 1]
		],
		"count": 1
	},
	"FN 功率扩展 R9": {
		"map": [
			["电源组件", "FN 功率扩展 R8", "齿轮"],
			["高科技机器核心", "铱", "高科技机器核心"],
			["强化合金锭", "FN太阳能发电机组 V", "强化合金锭"]
		],
		"ingredients": [
			["电源组件", 1],
			["FN 功率扩展 R8", 1],
			["齿轮", 1],
			["高科技机器核心", 2],
			["铱", 1],
			["强化合金锭", 2],
			["FN太阳能发电机组 V", 1]
		],
		"count": 1
	},
	"FN 功率扩展 R10": {
		"map": [
			["电源组件", "FN 功率扩展 R9", "齿轮"],
			["终极储能电容", "铱", "终极储能电容"],
			["铀", "FN太阳能发电机组 VI", "铀"]
		],
		"ingredients": [
			["电源组件", 1],
			["FN 功率扩展 R9", 1],
			["齿轮", 1],
			["终极储能电容", 2],
			["铱", 1],
			["铀", 2],
			["FN太阳能发电机组 VI", 1]
		],
		"count": 1
	},
	"FN 功率扩展 R11": {
		"map": [
			["电源组件", "FN 功率扩展 R10", "齿轮"],
			["终极储能电容", "铱", "终极储能电容"],
			["镎", "FN太阳能发电机组 VII", "镎"]
		],
		"ingredients": [
			["电源组件", 1],
			["FN 功率扩展 R10", 1],
			["齿轮", 1],
			["终极储能电容", 2],
			["铱", 1],
			["镎", 2],
			["FN太阳能发电机组 VII", 1]
		],
		"count": 1
	},
	"FN 功率扩展 R12": {
		"map": [
			["电源组件", "FN 功率扩展 R11", "齿轮"],
			["终极储能电容", "铱", "终极储能电容"],
			["强化合金镀膜", "FN 功率扩展 R5", "钚铀混合氧化物核燃料"]
		],
		"ingredients": [
			["电源组件", 1],
			["FN 功率扩展 R11", 1],
			["齿轮", 1],
			["终极储能电容", 2],
			["铱", 1],
			["强化合金镀膜", 1],
			["FN 功率扩展 R5", 1],
			["钚铀混合氧化物核燃料", 1]
		],
		"count": 1
	},
	"FN太阳能发电机组 I": {
		"type": "增强型工作台",
		"map": [
			["高级太阳能发电机", "太阳能发电机", "高级太阳能发电机"],
			["大型储能电容", "能量水晶", "大型储能电容"],
			["高级太阳能发电机", "黑金刚石太阳能发电机", "高级太阳能发电机"]
		],
		"ingredients": [
			["高级太阳能发电机", 4],
			["太阳能发电机", 1],
			["大型储能电容", 2],
			["能量水晶", 1],
			["黑金刚石太阳能发电机", 1]
		],
		"count": 1
	},
	"FN太阳能发电机组 II": {
		"type": "增强型工作台",
		"map": [
			["中型储能电容", "FN太阳能发电机组 I", "中型储能电容"],
			["大型储能电容", "能量水晶", "大型储能电容"],
			["大型储能电容", "FN太阳能发电机组 I", "大型储能电容"]
		],
		"ingredients": [
			["中型储能电容", 2],
			["FN太阳能发电机组 I", 2],
			["大型储能电容", 4],
			["能量水晶", 1]
		],
		"count": 1
	},
	"FN太阳能发电机组 III": {
		"type": "增强型工作台",
		"map": [
			["大型储能电容", "FN太阳能发电机组 I", "大型储能电容"],
			["FN太阳能发电机组 I", "能量水晶", "FN太阳能发电机组 I"],
			["大型储能电容", "大型储能电容", "大型储能电容"]
		],
		"ingredients": [
			["大型储能电容", 5],
			["FN太阳能发电机组 I", 3],
			["能量水晶", 1]
		],
		"count": 1
	},
	"FN太阳能发电机组 IV": {
		"type": "增强型工作台",
		"map": [
			["高级太阳能发电机", "FN太阳能发电机组 III", "高级太阳能发电机"],
			["硬铝锭", "能量水晶", "硬铝锭"],
			["大型储能电容", "巨型储能电容", "大型储能电容"]
		],
		"ingredients": [
			["高级太阳能发电机", 2],
			["FN太阳能发电机组 III", 1],
			["硬铝锭", 2],
			["能量水晶", 1],
			["大型储能电容", 2],
			["巨型储能电容", 1]
		],
		"count": 1
	},
	"FN太阳能发电机组 V": {
		"type": "增强型工作台",
		"map": [
			["大型储能电容", "大型储能电容", "大型储能电容"],
			["FN太阳能发电机组 I", "FN太阳能发电机组 II", "FN太阳能发电机组 I"],
			["钢锭", "巨型储能电容", "钢锭"]
		],
		"ingredients": [
			["大型储能电容", 3],
			["FN太阳能发电机组 I", 2],
			["FN太阳能发电机组 II", 1],
			["钢锭", 2],
			["巨型储能电容", 1]
		],
		"count": 1
	},
	"FN太阳能发电机组 VI": {
		"type": "增强型工作台",
		"map": [
			["钢锭", "巨型储能电容", "钢锭"],
			["大马士革钢锭", "能量水晶", "大马士革钢锭"],
			["FN太阳能发电机组 II", "FN太阳能发电机组 III", "FN太阳能发电机组 II"]
		],
		"ingredients": [
			["钢锭", 2],
			["巨型储能电容", 1],
			["大马士革钢锭", 2],
			["能量水晶", 1],
			["FN太阳能发电机组 II", 2],
			["FN太阳能发电机组 III", 1]
		],
		"count": 1
	},
	"FN太阳能发电机组 VII": {
		"type": "增强型工作台",
		"map": [
			["硬化金属", "FN太阳能发电机组 V", "硬化金属"],
			["巨型储能电容", "能量水晶", "巨型储能电容"],
			["大马士革钢锭", "FN太阳能发电机组 I", "大马士革钢锭"]
		],
		"ingredients": [
			["硬化金属", 2],
			["FN太阳能发电机组 V", 1],
			["巨型储能电容", 2],
			["能量水晶", 1],
			["大马士革钢锭", 2],
			["FN太阳能发电机组 I", 1]
		],
		"count": 1
	},
	"FN太阳能发电机组 VIII": {
		"type": "增强型工作台",
		"map": [
			["大型储能电容", "FN太阳能发电机组 VI", "大型储能电容"],
			["强化合金锭", "能量水晶", "强化合金锭"],
			["巨型储能电容", "FN太阳能发电机组 I", "巨型储能电容"]
		],
		"ingredients": [
			["大型储能电容", 2],
			["FN太阳能发电机组 VI", 1],
			["强化合金锭", 2],
			["能量水晶", 1],
			["巨型储能电容", 2],
			["FN太阳能发电机组 I", 1]
		],
		"count": 1
	},
	"电动方块挖掘机 I": {
		"map": [
			["齿轮", "散热器", "齿轮"],
			["钻石镐", "基础机器核心", "铁镐"],
			["铝镀膜", "电源组件", "铝镀膜"]
		],
		"ingredients": [
			["齿轮", 2],
			["散热器", 1],
			["钻石镐", 1],
			["基础机器核心", 1],
			["铁镐", 1],
			["铝镀膜", 2],
			["电源组件", 1]
		],
		"count": 1
	},
	"电动方块挖掘机 II": {
		"map": [
			["齿轮", "散热器", "齿轮"],
			["电动方块挖掘机 I", "基础机器核心", "钻石镐"],
			["黄铜镀膜", "电源组件", "黄铜镀膜"]
		],
		"ingredients": [
			["齿轮", 2],
			["散热器", 1],
			["电动方块挖掘机 I", 1],
			["基础机器核心", 1],
			["钻石镐", 1],
			["黄铜镀膜", 2],
			["电源组件", 1]
		],
		"count": 1
	},
	"电动方块挖掘机 III": {
		"map": [
			["齿轮", "散热器", "齿轮"],
			["电动方块挖掘机 I", "高科技机器核心", "电动方块挖掘机 II"],
			["强化合金镀膜", "电源组件", "强化合金镀膜"]
		],
		"ingredients": [
			["齿轮", 2],
			["散热器", 1],
			["电动方块挖掘机 I", 1],
			["高科技机器核心", 1],
			["电动方块挖掘机 II", 1],
			["强化合金镀膜", 2],
			["电源组件", 1]
		],
		"count": 1
	},
	"FN液压机 I": {
		"map": [
			["压缩零件", "镶件螺纹", "马达开关"],
			["齿轮", "基础机器核心", "齿轮"],
			["冷凝器", "铝镀膜", "电源组件"]
		],
		"ingredients": [
			["压缩零件", 1],
			["镶件螺纹", 1],
			["马达开关", 1],
			["齿轮", 2],
			["基础机器核心", 1],
			["冷凝器", 1],
			["铝镀膜", 1],
			["电源组件", 1]
		],
		"count": 1
	},
	"FN液压机 II": {
		"map": [
			["压缩零件", "镶件螺纹", "马达开关"],
			["齿轮", "基础机器核心", "FN液压机 I"],
			["冷凝器", "金刚石镀膜", "电源组件"]
		],
		"ingredients": [
			["压缩零件", 1],
			["镶件螺纹", 1],
			["马达开关", 1],
			["齿轮", 1],
			["基础机器核心", 1],
			["FN液压机 I", 1],
			["冷凝器", 1],
			["金刚石镀膜", 1],
			["电源组件", 1]
		],
		"count": 1
	},
	"FN液压机 III": {
		"map": [
			["压缩零件", "散热器", "马达开关"],
			["FN液压机 II", "高科技机器核心", "FN液压机 II"],
			["冷凝器", "强化合金镀膜", "电源组件"]
		],
		"ingredients": [
			["压缩零件", 1],
			["散热器", 1],
			["马达开关", 1],
			["FN液压机 II", 2],
			["高科技机器核心", 1],
			["冷凝器", 1],
			["强化合金镀膜", 1],
			["电源组件", 1]
		],
		"count": 1
	},
	"FN电锭冷凝机 I": {
		"map": [
			["马达开关", "镶件螺纹", "金属漏斗"],
			["齿轮", "基础机器核心", "电源组件"],
			["压缩零件", "黄金镀膜", "压缩零件"]
		],
		"ingredients": [
			["马达开关", 1],
			["镶件螺纹", 1],
			["金属漏斗", 1],
			["齿轮", 1],
			["基础机器核心", 1],
			["电源组件", 1],
			["压缩零件", 2],
			["黄金镀膜", 1]
		],
		"count": 1
	},
	"FN电锭冷凝机 II": {
		"map": [
			["马达开关", "FN电锭冷凝机 I", "金属漏斗"],
			["齿轮", "基础机器核心", "电源组件"],
			["镶件螺纹", "金刚石镀膜", "散热器"]
		],
		"ingredients": [
			["马达开关", 1],
			["FN电锭冷凝机 I", 1],
			["金属漏斗", 1],
			["齿轮", 1],
			["基础机器核心", 1],
			["电源组件", 1],
			["镶件螺纹", 1],
			["金刚石镀膜", 1],
			["散热器", 1]
		],
		"count": 1
	},
	"FN电锭冷凝机 III": {
		"map": [
			["FN电锭冷凝机 I", "FN电锭冷凝机 I", "FN电锭冷凝机 I"],
			["齿轮", "高科技机器核心", "电源组件"],
			["镶件螺纹", "强化合金镀膜", "散热器"]
		],
		"ingredients": [
			["FN电锭冷凝机 I", 3],
			["齿轮", 1],
			["高科技机器核心", 1],
			["电源组件", 1],
			["镶件螺纹", 1],
			["强化合金镀膜", 1],
			["散热器", 1]
		],
		"count": 1
	},
	"电机降级器": {
		"map": [
			["压缩零件", "降级器", "回收器"],
			["齿轮", "高科技机器核心", "电源组件"],
			["冷凝器", "强化合金镀膜", "马达开关"]
		],
		"ingredients": [
			["压缩零件", 1],
			["降级器", 1],
			["回收器", 1],
			["齿轮", 1],
			["高科技机器核心", 1],
			["电源组件", 1],
			["冷凝器", 1],
			["强化合金镀膜", 1],
			["马达开关", 1]
		],
		"count": 1
	},
	"FN电动回收机 I": {
		"map": [
			["金属漏斗", "回收器", "压缩零件"],
			["镶件螺纹", "基础机器核心", "电源组件"],
			["冷凝器", "黄铜镀膜", "马达开关"]
		],
		"ingredients": [
			["金属漏斗", 1],
			["回收器", 1],
			["压缩零件", 1],
			["镶件螺纹", 1],
			["基础机器核心", 1],
			["电源组件", 1],
			["冷凝器", 1],
			["黄铜镀膜", 1],
			["马达开关", 1]
		],
		"count": 1
	},
	"FN电动回收机 II": {
		"map": [
			["金属漏斗", "回收器", "压缩零件"],
			["镶件螺纹", "基础机器核心", "电源组件"],
			["FN电动回收机 I", "铝镀膜", "马达开关"]
		],
		"ingredients": [
			["金属漏斗", 1],
			["回收器", 1],
			["压缩零件", 1],
			["镶件螺纹", 1],
			["基础机器核心", 1],
			["电源组件", 1],
			["FN电动回收机 I", 1],
			["铝镀膜", 1],
			["马达开关", 1]
		],
		"count": 1
	},
	"FN电动回收机 III": {
		"map": [
			["回收器", "FN电动回收机 I", "压缩零件"],
			["齿轮", "高科技机器核心", "电源组件"],
			["FN电动回收机 I", "强化合金镀膜", "FN电动回收机 I"]
		],
		"ingredients": [
			["回收器", 1],
			["FN电动回收机 I", 3],
			["压缩零件", 1],
			["齿轮", 1],
			["高科技机器核心", 1],
			["电源组件", 1],
			["强化合金镀膜", 1]
		],
		"count": 1
	},
	"FN转换机 I": {
		"map": [
			["金属漏斗", "镶件螺纹", "电源组件"],
			["齿轮", "基础机器核心", "齿轮"],
			["压缩零件", "黄铜镀膜", "冷凝器"]
		],
		"ingredients": [
			["金属漏斗", 1],
			["镶件螺纹", 1],
			["电源组件", 1],
			["齿轮", 2],
			["基础机器核心", 1],
			["压缩零件", 1],
			["黄铜镀膜", 1],
			["冷凝器", 1]
		],
		"count": 1
	},
	"FN转换机 II": {
		"map": [
			["金属漏斗", "FN转换机 I", "电源组件"],
			["齿轮", "基础机器核心", "齿轮"],
			["镶件螺纹", "铝镀膜", "冷凝器"]
		],
		"ingredients": [
			["金属漏斗", 1],
			["FN转换机 I", 1],
			["电源组件", 1],
			["齿轮", 2],
			["基础机器核心", 1],
			["镶件螺纹", 1],
			["铝镀膜", 1],
			["冷凝器", 1]
		],
		"count": 1
	},
	"FN转换器 III": {
		"map": [
			["金属漏斗", "FN转换机 II", "电源组件"],
			["FN转换机 I", "高科技机器核心", "FN转换机 I"],
			["散热器", "强化合金镀膜", "冷凝器"]
		],
		"ingredients": [
			["金属漏斗", 1],
			["FN转换机 II", 1],
			["电源组件", 1],
			["FN转换机 I", 2],
			["高科技机器核心", 1],
			["散热器", 1],
			["强化合金镀膜", 1],
			["冷凝器", 1]
		],
		"count": 1
	},
	"FN点唱机 I": {
		"map": [
			["基础机器核心", "黄铜镀膜", "基础机器核心"],
			["铜锭", "唱片机", "铜锭"],
			["散热器", "黄铜镀膜", "散热器"]
		],
		"ingredients": [
			["基础机器核心", 2],
			["黄铜镀膜", 2],
			["铜锭", 2],
			["唱片机", 1],
			["散热器", 2]
		],
		"count": 1
	},
	"FN点唱机 II": {
		"map": [
			["铝镀膜", "基础机器核心", "铝镀膜"],
			["铝锭", "FN点唱机 I", "铝锭"],
			["散热器", "散热器", "散热器"]
		],
		"ingredients": [
			["铝镀膜", 2],
			["基础机器核心", 1],
			["铝锭", 2],
			["FN点唱机 I", 1],
			["散热器", 3]
		],
		"count": 1
	},
	"FN点唱机 III": {
		"map": [
			["基础机器核心", "散热器", "基础机器核心"],
			["黄铜锭", "FN点唱机 II", "黄铜锭"],
			["散热器", "强化合金镀膜", "散热器"]
		],
		"ingredients": [
			["基础机器核心", 2],
			["散热器", 3],
			["黄铜锭", 2],
			["FN点唱机 II", 1],
			["强化合金镀膜", 1]
		],
		"count": 1
	},
	"神秘棍": {
		"map": [
			["魔法结晶 - I", "末影结晶 - I", "末影结晶 - I"],
			["空白符文", "木棍", "空白符文"],
			["魔法结晶 - I", "魔法结晶 - I", "末影结晶 - I"]
		],
		"ingredients": [
			["魔法结晶 - I", 3],
			["末影结晶 - I", 3],
			["空白符文", 2],
			["木棍", 1]
		],
		"count": 1
	},
	"神秘棍 II": {
		"map": [
			["魔法结晶 - I", "皮革", "末影结晶 - I"],
			["空白符文", "木棍", "空白符文"],
			["末影结晶 - I", "橡木", "魔法结晶 - I"]
		],
		"ingredients": [
			["魔法结晶 - I", 2],
			["皮革", 1],
			["末影结晶 - I", 2],
			["空白符文", 2],
			["木棍", 1],
			["橡木", 1]
		],
		"count": 1
	},
	"神秘棍 III": {
		"map": [
			["空白符文", "皮革", "空白符文"],
			["魔法结晶 - II", "木棍", "魔法结晶 - II"],
			["末影结晶 - I", "拴绳", "末影结晶 - I"]
		],
		"ingredients": [
			["空白符文", 2],
			["皮革", 1],
			["魔法结晶 - II", 2],
			["木棍", 1],
			["末影结晶 - I", 2],
			["拴绳", 1]
		],
		"count": 1
	},
	"神秘棍 IV": {
		"map": [
			["来世精华", "古代符文 [地]", "末影结晶 - III"],
			["古代符文 [火]", "神秘棍", "古代符文 [气]"],
			["末影结晶 - III", "古代符文 [末影]", "来世精华"]
		],
		"ingredients": [
			["来世精华", 2],
			["古代符文 [地]", 1],
			["末影结晶 - III", 2],
			["古代符文 [火]", 1],
			["神秘棍", 1],
			["古代符文 [气]", 1],
			["古代符文 [末影]", 1]
		],
		"count": 1
	},
	"神秘棍 V": {
		"map": [
			["魔法结晶 - III", "来世精华", "末影结晶 - II"],
			["古代符文 [气]", "神秘棍 II", "古代符文 [火]"],
			["末影结晶 - III", "空白符文", "魔法结晶 - II"]
		],
		"ingredients": [
			["魔法结晶 - III", 1],
			["来世精华", 1],
			["末影结晶 - II", 1],
			["古代符文 [气]", 1],
			["神秘棍 II", 1],
			["古代符文 [火]", 1],
			["末影结晶 - III", 1],
			["空白符文", 1],
			["魔法结晶 - II", 1]
		],
		"count": 1
	},
	"神秘棍 VI": {
		"map": [
			["来世精华", "古代符文 [气]", "来世精华"],
			["古代符文 [火]", "神秘棍 III", "古代符文 [地]"],
			["末影结晶 - III", "古代符文 [末影]", "魔法结晶 - III"]
		],
		"ingredients": [
			["来世精华", 2],
			["古代符文 [气]", 1],
			["古代符文 [火]", 1],
			["神秘棍 III", 1],
			["古代符文 [地]", 1],
			["末影结晶 - III", 1],
			["古代符文 [末影]", 1],
			["魔法结晶 - III", 1]
		],
		"count": 1
	},
	"神秘棍 VII": {
		"map": [
			["来世精华", "古代符文 [地]", "来世精华"],
			["古代符文 [火]", "神秘棍 IV", "古代符文 [气]"],
			["古代符文 [雷]", "古代符文 [末影]", "古代符文 [附魔]"]
		],
		"ingredients": [
			["来世精华", 2],
			["古代符文 [地]", 1],
			["古代符文 [火]", 1],
			["神秘棍 IV", 1],
			["古代符文 [气]", 1],
			["古代符文 [雷]", 1],
			["古代符文 [末影]", 1],
			["古代符文 [附魔]", 1]
		],
		"count": 1
	},
	"神秘棍 VIII": {
		"map": [
			["古代符文 [末影]", "来世精华", "古代符文 [火]"],
			["来世精华", "神秘棍 V", "来世精华"],
			["古代符文 [地]", "古代符文 [气]", "古代符文 [气]"]
		],
		"ingredients": [
			["古代符文 [末影]", 1],
			["来世精华", 3],
			["古代符文 [火]", 1],
			["神秘棍 V", 1],
			["古代符文 [地]", 1],
			["古代符文 [气]", 2]
		],
		"count": 1
	},
	"神秘棍 IX": {
		"map": [
			["来世精华", "古代符文 [气]", "来世精华"],
			["古代符文 [火]", "神秘棍 VI", "古代符文 [地]"],
			["来世精华", "古代符文 [末影]", "来世精华"]
		],
		"ingredients": [
			["来世精华", 4],
			["古代符文 [气]", 1],
			["古代符文 [火]", 1],
			["神秘棍 VI", 1],
			["古代符文 [地]", 1],
			["古代符文 [末影]", 1]
		],
		"count": 1
	},
	"神秘棍 X": {
		"map": [
			["来世精华", "神秘棍 IV", "古代符文 [附魔]"],
			["古代符文 [火]", "神秘棍 VII", "古代符文 [气]"],
			["古代符文 [雷]", "神秘棍", "来世精华"]
		],
		"ingredients": [
			["来世精华", 2],
			["神秘棍 IV", 1],
			["古代符文 [附魔]", 1],
			["古代符文 [火]", 1],
			["神秘棍 VII", 1],
			["古代符文 [气]", 1],
			["古代符文 [雷]", 1],
			["神秘棍", 1]
		],
		"count": 1
	},
	"神秘棍 XI": {
		"map": [
			["神秘棍 II", "来世精华", "神秘棍 VIII"],
			["来世精华", "神秘棍 V", "来世精华"],
			["古代符文 [地]", "来世精华", "古代符文 [气]"]
		],
		"ingredients": [
			["神秘棍 II", 1],
			["来世精华", 4],
			["神秘棍 VIII", 1],
			["神秘棍 V", 1],
			["古代符文 [地]", 1],
			["古代符文 [气]", 1]
		],
		"count": 1
	},
	"FN's Expedition Combat Boots": {
		"map": [
			["钢筋板", "铁靴子", "钢筋板"],
			["古代符文 [附魔]", "下界合金锭", "古代符文 [附魔]"],
			["强化合金锭", "钻石靴子", "强化合金锭"]
		],
		"ingredients": [
			["钢筋板", 2],
			["铁靴子", 1],
			["古代符文 [附魔]", 2],
			["下界合金锭", 1],
			["强化合金锭", 2],
			["钻石靴子", 1]
		],
		"count": 1
	},
	"FN's Battle Scarred Chestplate": {
		"map": [
			["钢筋板", "铁胸甲", "钢筋板"],
			["古代符文 [附魔]", "下界合金锭", "古代符文 [附魔]"],
			["强化合金锭", "钻石胸甲", "强化合金锭"]
		],
		"ingredients": [
			["钢筋板", 2],
			["铁胸甲", 1],
			["古代符文 [附魔]", 2],
			["下界合金锭", 1],
			["强化合金锭", 2],
			["钻石胸甲", 1]
		],
		"count": 1
	},
	"FN's Field Tested Helmet": {
		"map": [
			["钢筋板", "铁头盔", "钢筋板"],
			["古代符文 [附魔]", "下界合金锭", "古代符文 [附魔]"],
			["强化合金锭", "钻石头盔", "强化合金锭"]
		],
		"ingredients": [
			["钢筋板", 2],
			["铁头盔", 1],
			["古代符文 [附魔]", 2],
			["下界合金锭", 1],
			["强化合金锭", 2],
			["钻石头盔", 1]
		],
		"count": 1
	},
	"FN's Chausses of Eminence": {
		"map": [
			["钢筋板", "铁护腿", "钢筋板"],
			["古代符文 [附魔]", "下界合金锭", "古代符文 [附魔]"],
			["强化合金锭", "钻石护腿", "强化合金锭"]
		],
		"ingredients": [
			["钢筋板", 2],
			["铁护腿", 1],
			["古代符文 [附魔]", 2],
			["下界合金锭", 1],
			["强化合金锭", 2],
			["钻石护腿", 1]
		],
		"count": 1
	},
	"箭袋 (箭)": {
		"map": [
			["锡锭", "拴绳", "铜锭"],
			["线", "木棍", "线"],
			["锡锭", "皮革", "铜锭"]
		],
		"ingredients": [
			["锡锭", 2],
			["拴绳", 1],
			["铜锭", 2],
			["线", 2],
			["木棍", 1],
			["皮革", 1]
		],
		"count": 1
	},
	"箭袋 (光灵箭)": {
		"map": [
			["金锭 (4克拉)", "拴绳", "钢锭"],
			["线", "木棍", "线"],
			["金锭 (4克拉)", "皮革", "钢锭"]
		],
		"ingredients": [
			["金锭 (4克拉)", 2],
			["拴绳", 1],
			["钢锭", 2],
			["线", 2],
			["木棍", 1],
			["皮革", 1]
		],
		"count": 1
	},
	"强化箭袋 (箭)": {
		"map": [
			["铅锭", "箭袋 (箭)", "青铜锭"],
			["线", "木棍", "线"],
			["铅锭", "皮革", "青铜锭"]
		],
		"ingredients": [
			["铅锭", 2],
			["箭袋 (箭)", 1],
			["青铜锭", 2],
			["线", 2],
			["木棍", 1],
			["皮革", 1]
		],
		"count": 1
	},
	"强化箭袋 (光灵箭)": {
		"map": [
			["金锭 (10克拉)", "箭袋 (光灵箭)", "大马士革钢锭"],
			["线", "木棍", "线"],
			["金锭 (10克拉)", "皮革", "大马士革钢锭"]
		],
		"ingredients": [
			["金锭 (10克拉)", 2],
			["箭袋 (光灵箭)", 1],
			["大马士革钢锭", 2],
			["线", 2],
			["木棍", 1],
			["皮革", 1]
		],
		"count": 1
	},
	"护甲削弱宝石": {
		"map": [
			[null, "烈焰粉", null],
			["解绑符文", "绿宝石", "解绑符文"],
			[null, "烈焰粉", null]
		],
		"ingredients": [
			["烈焰粉", 2],
			["解绑符文", 2],
			["绿宝石", 1]
		],
		"count": 1
	},
	"飞斧宝石": {
		"map": [
			[null, "古代符文 [气]", null],
			["能量符文", "绿宝石", "能量符文"],
			[null, "古代符文 [气]", null]
		],
		"ingredients": [
			["古代符文 [气]", 2],
			["能量符文", 2],
			["绿宝石", 1]
		],
		"count": 1
	},
	"盲标宝石": {
		"map": [
			[null, "瘟疫符文", null],
			["灵符符文", "绿宝石", "灵符符文"],
			[null, "瘟疫符文", null]
		],
		"ingredients": [
			["瘟疫符文", 2],
			["灵符符文", 2],
			["绿宝石", 1]
		],
		"count": 1
	},
	"撕裂宝石": {
		"map": [
			["魔法糖", "智力符文", "魔法糖"],
			["精神符文", "绿宝石", "智力符文"],
			["魔法糖", "智力符文", "魔法糖"]
		],
		"ingredients": [
			["魔法糖", 4],
			["智力符文", 3],
			["精神符文", 1],
			["绿宝石", 1]
		],
		"count": 1
	},
	"急迫宝石": {
		"map": [
			["敏捷符文", "钻石镐", "敏捷符文"],
			[null, "绿宝石", null],
			["敏捷符文", "钻石镐", "敏捷符文"]
		],
		"ingredients": [
			["敏捷符文", 4],
			["钻石镐", 2],
			["绿宝石", 1]
		],
		"count": 1
	},
	"幽灵宝石": {
		"map": [
			[null, "能量符文", null],
			["智力符文", "绿宝石", "智力符文"],
			[null, "能量符文", null]
		],
		"ingredients": [
			["能量符文", 2],
			["智力符文", 2],
			["绿宝石", 1]
		],
		"count": 1
	},
	"地狱宝石": {
		"map": [
			["螺旋火符文", "古代符文 [气]", "螺旋火符文"],
			[null, "绿宝石", null],
			["螺旋火符文", null, "螺旋火符文"]
		],
		"ingredients": [
			["螺旋火符文", 4],
			["古代符文 [气]", 1],
			["绿宝石", 1]
		],
		"count": 1
	},
	"念动力宝石": {
		"map": [
			["智力符文", "古代符文 [末影]", "智力符文"],
			[null, "绿宝石", null],
			["智力符文", "古代符文 [末影]", "智力符文"]
		],
		"ingredients": [
			["智力符文", 4],
			["古代符文 [末影]", 2],
			["绿宝石", 1]
		],
		"count": 1
	},
	"忠诚宝石": {
		"map": [
			[null, "古代符文 [气]", null],
			["智力符文", "绿宝石", "智力符文"],
			[null, "古代符文 [气]", null]
		],
		"ingredients": [
			["古代符文 [气]", 2],
			["智力符文", 2],
			["绿宝石", 1]
		],
		"count": 1
	},
	"心灵感应宝石": {
		"map": [
			["智力符文", "钻石镐", "智力符文"],
			[null, "绿宝石", null],
			["智力符文", "铁镐", "智力符文"]
		],
		"ingredients": [
			["智力符文", 4],
			["钻石镐", 1],
			["绿宝石", 1],
			["铁镐", 1]
		],
		"count": 1
	},
	"抗荆棘宝石": {
		"map": [
			[null, "智力符文", null],
			["烈焰粉", "绿宝石", "烈焰粉"],
			[null, "能量符文", null]
		],
		"ingredients": [
			["智力符文", 1],
			["烈焰粉", 2],
			["绿宝石", 1],
			["能量符文", 1]
		],
		"count": 1
	},
	"霹雳宝石": {
		"map": [
			["闪闪发光的符文", "火焰弹", "闪闪发光的符文"],
			[null, "绿宝石", null],
			["闪闪发光的符文", "火焰弹", "闪闪发光的符文"]
		],
		"ingredients": [
			["闪闪发光的符文", 4],
			["火焰弹", 2],
			["绿宝石", 1]
		],
		"count": 1
	},
	"三剑宝石": {
		"map": [
			[null, "智力符文", null],
			["能量符文", "绿宝石", "能量符文"],
			[null, "智力符文", null]
		],
		"ingredients": [
			["智力符文", 2],
			["能量符文", 2],
			["绿宝石", 1]
		],
		"count": 1
	},
	"守望宝石": {
		"map": [
			[null, "空白符文", null],
			["精神符文", "绿宝石", "精神符文"],
			["魔法糖", "空白符文", "魔法糖"]
		],
		"ingredients": [
			["空白符文", 2],
			["精神符文", 2],
			["绿宝石", 1],
			["魔法糖", 2]
		],
		"count": 1
	},
	"破碎的宝石": {
		"map": [
			[null, "精神符文", null],
			["能量符文", "绿宝石", "能量符文"],
			[null, "精神符文", null]
		],
		"ingredients": [
			["精神符文", 2],
			["能量符文", 2],
			["绿宝石", 1]
		],
		"count": 1
	},
	"箭避宝石": {
		"map": [
			["云符文", "烈焰粉", "云符文"],
			["空白符文", "绿宝石", "空白符文"],
			["云符文", "烈焰粉", "云符文"]
		],
		"ingredients": [
			["云符文", 4],
			["烈焰粉", 2],
			["空白符文", 2],
			["绿宝石", 1]
		],
		"count": 1
	},
	"德塞克宝石": {
		"map": [
			["敏捷符文", "古代符文 [地]", "敏捷符文"],
			["钢锭", "绿宝石", "钢锭"],
			["空白符文", null, "空白符文"]
		],
		"ingredients": [
			["敏捷符文", 2],
			["古代符文 [地]", 1],
			["钢锭", 2],
			["绿宝石", 1],
			["空白符文", 2]
		],
		"count": 1
	},
	"招架宝石": {
		"map": [
			["空白符文", "古代符文 [地]", "空白符文"],
			["硬铝锭", "绿宝石", "硬铝锭"],
			["敏捷符文", "古代符文 [气]", "敏捷符文"]
		],
		"ingredients": [
			["空白符文", 2],
			["古代符文 [地]", 1],
			["硬铝锭", 2],
			["绿宝石", 1],
			["敏捷符文", 2],
			["古代符文 [气]", 1]
		],
		"count": 1
	},
	"粗壮的宝石": {
		"map": [
			["能量符文", null, "心符文"],
			[null, "绿宝石", null],
			["能量符文", "魔法糖", "心符文"]
		],
		"ingredients": [
			["能量符文", 2],
			["心符文", 2],
			["绿宝石", 1],
			["魔法糖", 1]
		],
		"count": 1
	},
	"精金宝石": {
		"map": [
			["能量符文", "烈焰粉", "能量符文"],
			[null, "绿宝石", null],
			["敏捷符文", "烈焰粉", "敏捷符文"]
		],
		"ingredients": [
			["能量符文", 2],
			["烈焰粉", 2],
			["绿宝石", 1],
			["敏捷符文", 2]
		],
		"count": 1
	},
	"觉醒宝石": {
		"map": [
			["心符文", "烈焰粉", "心符文"],
			[null, "绿宝石", null],
			["心符文", "魔法糖", "心符文"]
		],
		"ingredients": [
			["心符文", 4],
			["烈焰粉", 1],
			["绿宝石", 1],
			["魔法糖", 1]
		],
		"count": 1
	},
	"复仇宝石": {
		"map": [
			["瘟疫符文", "腐肉", "瘟疫符文"],
			["腐肉", "绿宝石", "腐肉"],
			["灵符符文", "魔法糖", "灵符符文"]
		],
		"ingredients": [
			["瘟疫符文", 2],
			["腐肉", 3],
			["绿宝石", 1],
			["灵符符文", 2],
			["魔法糖", 1]
		],
		"count": 1
	},
	"阿喀琉斯之踵宝石": {
		"map": [
			["敏捷符文", "羽毛", "敏捷符文"],
			["箭", "绿宝石", "箭"],
			["瘟疫符文", null, "智力符文"]
		],
		"ingredients": [
			["敏捷符文", 2],
			["羽毛", 1],
			["箭", 2],
			["绿宝石", 1],
			["瘟疫符文", 1],
			["智力符文", 1]
		],
		"count": 1
	},
	"卸甲宝石": {
		"map": [
			["智力符文", null, "瘟疫符文"],
			["烈焰粉", "绿宝石", "烈焰粉"],
			["能量符文", null, "智力符文"]
		],
		"ingredients": [
			["智力符文", 2],
			["瘟疫符文", 1],
			["烈焰粉", 2],
			["绿宝石", 1],
			["能量符文", 1]
		],
		"count": 1
	},
	"Disarm Gem": {
		"map": [
			["能量符文", "魔法糖", "灵符符文"],
			["烈焰粉", "绿宝石", "烈焰粉"],
			["瘟疫符文", "魔法糖", "智力符文"]
		],
		"ingredients": [
			["能量符文", 1],
			["魔法糖", 2],
			["灵符符文", 1],
			["烈焰粉", 2],
			["绿宝石", 1],
			["瘟疫符文", 1],
			["智力符文", 1]
		],
		"count": 1
	},
	"烟雾犯罪宝石": {
		"map": [
			["精神符文", null, "云符文"],
			["腐肉", "绿宝石", "烈焰粉"],
			["云符文", null, "能量符文"]
		],
		"ingredients": [
			["精神符文", 1],
			["云符文", 2],
			["腐肉", 1],
			["绿宝石", 1],
			["烈焰粉", 1],
			["能量符文", 1]
		],
		"count": 1
	},
	"吸血宝石": {
		"map": [
			["心符文", "魔法糖", "心符文"],
			["烈焰粉", "绿宝石", "烈焰粉"],
			["灵符符文", "魔法糖", "瘟疫符文"]
		],
		"ingredients": [
			["心符文", 2],
			["魔法糖", 2],
			["烈焰粉", 2],
			["绿宝石", 1],
			["灵符符文", 1],
			["瘟疫符文", 1]
		],
		"count": 1
	},
	"凋零宝石": {
		"map": [
			["灵符符文", "瘟疫符文", "灵符符文"],
			["虚弱药水", "绿宝石", "剧毒药水"],
			["灵符符文", "心符文", "灵符符文"]
		],
		"ingredients": [
			["灵符符文", 4],
			["瘟疫符文", 1],
			["虚弱药水", 1],
			["绿宝石", 1],
			["剧毒药水", 1],
			["心符文", 1]
		],
		"count": 1
	},
	"毒药宝石": {
		"map": [
			["灵符符文", "瘟疫符文", "灵符符文"],
			["剧毒药水", "绿宝石", "剧毒药水"],
			["瘟疫符文", "瘟疫符文", "瘟疫符文"]
		],
		"ingredients": [
			["灵符符文", 2],
			["瘟疫符文", 4],
			["剧毒药水", 2],
			["绿宝石", 1]
		],
		"count": 1
	},
	"减速宝石": {
		"map": [
			["灵符符文", null, "灵符符文"],
			["迟缓药水", "绿宝石", "迟缓药水"],
			["敏捷符文", "灵符符文", "敏捷符文"]
		],
		"ingredients": [
			["灵符符文", 3],
			["迟缓药水", 2],
			["绿宝石", 1],
			["敏捷符文", 2]
		],
		"count": 1
	},
	"虚弱宝石": {
		"map": [
			["灵符符文", null, "灵符符文"],
			["虚弱药水", "绿宝石", "虚弱药水"],
			["灵符符文", null, "灵符符文"]
		],
		"ingredients": [
			["灵符符文", 4],
			["虚弱药水", 2],
			["绿宝石", 1]
		],
		"count": 1
	},
	"失明宝石": {
		"map": [
			["精神符文", null, "精神符文"],
			["粗制的药水", "绿宝石", "粗制的药水"],
			["瘟疫符文", "灵符符文", "瘟疫符文"]
		],
		"ingredients": [
			["精神符文", 2],
			["粗制的药水", 2],
			["绿宝石", 1],
			["瘟疫符文", 2],
			["灵符符文", 1]
		],
		"count": 1
	},
	"迅捷宝石": {
		"map": [
			["敏捷符文", "能量符文", "敏捷符文"],
			["item.minecraft.potion.effect.speed", "绿宝石", "item.minecraft.potion.effect.speed"],
			["敏捷符文", "能量符文", "敏捷符文"]
		],
		"ingredients": [
			["敏捷符文", 4],
			["能量符文", 2],
			["item.minecraft.potion.effect.speed", 2],
			["绿宝石", 1]
		],
		"count": 1
	},
	"Shockwave Gem": {
		"map": [
			["能量符文", "能量符文", "能量符文"],
			[null, "绿宝石", null],
			["能量符文", "能量符文", "能量符文"]
		],
		"ingredients": [
			["能量符文", 6],
			["绿宝石", 1]
		],
		"count": 1
	},
	"无瑕解绑宝石": {
		"map": [
			["魔法结晶 - III", "解绑符文", "末影结晶 - III"],
			["解绑符文", "钻石", "解绑符文"],
			["魔法结晶 - III", "解绑符文", "末影结晶 - III"]
		],
		"ingredients": [
			["魔法结晶 - III", 2],
			["解绑符文", 4],
			["末影结晶 - III", 2],
			["钻石", 1]
		],
		"count": 1
	},
	"珍贵的解开宝石": {
		"map": [
			["魔法结晶 - II", "解绑符文", "末影结晶 - II"],
			["糖", "钻石", "糖"],
			["魔法结晶 - III", "解绑符文", "末影结晶 - III"]
		],
		"ingredients": [
			["魔法结晶 - II", 1],
			["解绑符文", 2],
			["末影结晶 - II", 1],
			["糖", 2],
			["钻石", 1],
			["魔法结晶 - III", 1],
			["末影结晶 - III", 1]
		],
		"count": 1
	},
	"有瑕疵的解开宝石": {
		"map": [
			["魔法结晶 - I", "解绑符文", "末影结晶 - I"],
			[null, "钻石", null],
			["魔法结晶 - II", "解绑符文", "末影结晶 - II"]
		],
		"ingredients": [
			["魔法结晶 - I", 1],
			["解绑符文", 2],
			["末影结晶 - I", 1],
			["钻石", 1],
			["魔法结晶 - II", 1],
			["末影结晶 - II", 1]
		],
		"count": 1
	},
	"损坏的解绑宝石": {
		"map": [
			["魔法结晶 - I", null, "末影结晶 - I"],
			[null, "钻石", null],
			["魔法结晶 - I", "解绑符文", "末影结晶 - I"]
		],
		"ingredients": [
			["魔法结晶 - I", 2],
			["末影结晶 - I", 2],
			["钻石", 1],
			["解绑符文", 1]
		],
		"count": 1
	},
	"宝石等级升级": {
		"map": [
			["Any Upgradeable Gem", null, "Any Upgradeable Gem"],
			[null, "优质碧玉宝石", null],
			["Any Upgradeable Gem", null, "Any Upgradeable Gem"]
		],
		"ingredients": [
			["Any Upgradeable Gem", 4],
			["优质碧玉宝石", 1]
		],
		"count": 1
	},
	"浮空法杖": {
		"map": [
			["云符文", "羽毛", "云符文"],
			["魔法结晶 - III", "烈焰棒", "魔法结晶 - III"],
			["云符文", null, "云符文"]
		],
		"ingredients": [
			["云符文", 4],
			["羽毛", 1],
			["魔法结晶 - III", 2],
			["烈焰棒", 1]
		],
		"count": 1
	},
	"探测法杖": {
		"map": [
			[null, "烈焰粉", null],
			["智力符文", "烈焰棒", "智力符文"],
			[null, "魔法糖", null]
		],
		"ingredients": [
			["烈焰粉", 1],
			["智力符文", 2],
			["烈焰棒", 1],
			["魔法糖", 1]
		],
		"count": 1
	},
	"混乱法杖": {
		"map": [
			["魔法结晶 - III", "灵符符文", "魔法结晶 - III"],
			["瘟疫符文", "烈焰棒", "瘟疫符文"],
			[null, "魔法糖", null]
		],
		"ingredients": [
			["魔法结晶 - III", 2],
			["灵符符文", 1],
			["瘟疫符文", 2],
			["烈焰棒", 1],
			["魔法糖", 1]
		],
		"count": 1
	},
	"北极冰法杖": {
		"map": [
			[null, "灵符符文", null],
			["冰符文", "烈焰棒", "冰符文"],
			[null, "魔法糖", null]
		],
		"ingredients": [
			["灵符符文", 1],
			["冰符文", 2],
			["烈焰棒", 1],
			["魔法糖", 1]
		],
		"count": 1
	},
	"爆裂法杖": {
		"map": [
			["能量符文", "TNT", "能量符文"],
			["魔法糖", "烈焰棒", "魔法糖"],
			[null, "火药", null]
		],
		"ingredients": [
			["能量符文", 2],
			["TNT", 1],
			["魔法糖", 2],
			["烈焰棒", 1],
			["火药", 1]
		],
		"count": 1
	},
	"尖牙法杖": {
		"map": [
			["精神符文", "腐肉", "精神符文"],
			[null, "烈焰棒", null],
			["精神符文", "腐肉", "精神符文"]
		],
		"ingredients": [
			["精神符文", 4],
			["腐肉", 2],
			["烈焰棒", 1]
		],
		"count": 1
	},
	"力量法杖": {
		"map": [
			["魔法结晶 - III", "羽毛", "末影结晶 - III"],
			["敏捷符文", "烈焰棒", "敏捷符文"],
			[null, "云符文", null]
		],
		"ingredients": [
			["魔法结晶 - III", 1],
			["羽毛", 1],
			["末影结晶 - III", 1],
			["敏捷符文", 2],
			["烈焰棒", 1],
			["云符文", 1]
		],
		"count": 1
	},
	"引力法杖": {
		"map": [
			["魔法结晶 - I", "精神符文", "魔法结晶 - I"],
			[null, "烈焰棒", null],
			["智力符文", "魔法糖", "智力符文"]
		],
		"ingredients": [
			["魔法结晶 - I", 2],
			["精神符文", 1],
			["烈焰棒", 1],
			["智力符文", 2],
			["魔法糖", 1]
		],
		"count": 1
	},
	"治愈法杖": {
		"map": [
			["魔法糖", null, "魔法糖"],
			["绷带", "烈焰棒", "绷带"],
			["心符文", null, "心符文"]
		],
		"ingredients": [
			["魔法糖", 2],
			["绷带", 2],
			["烈焰棒", 1],
			["心符文", 2]
		],
		"count": 1
	},
	"地狱火法杖": {
		"map": [
			["魔法结晶 - III", null, "魔法结晶 - III"],
			["螺旋火符文", "烈焰棒", "螺旋火符文"],
			[null, "魔法糖", null]
		],
		"ingredients": [
			["魔法结晶 - III", 2],
			["螺旋火符文", 2],
			["烈焰棒", 1],
			["魔法糖", 1]
		],
		"count": 1
	},
	"隐身法杖": {
		"map": [
			[null, "智力符文", null],
			["能量符文", "烈焰棒", "能量符文"],
			[null, "智力符文", null]
		],
		"ingredients": [
			["智力符文", 2],
			["能量符文", 2],
			["烈焰棒", 1]
		],
		"count": 1
	},
	"辉月": {
		"map": [
			["能量符文", "金苹果", "能量符文"],
			[null, "烈焰棒", null],
			["魔法结晶 - I", null, "魔法结晶 - I"]
		],
		"ingredients": [
			["能量符文", 2],
			["金苹果", 1],
			["烈焰棒", 1],
			["魔法结晶 - I", 2]
		],
		"count": 1
	},
	"机动法杖": {
		"map": [
			["智力符文", "末影珍珠", "云符文"],
			[null, "烈焰棒", null],
			["云符文", "末影珍珠", "智力符文"]
		],
		"ingredients": [
			["智力符文", 2],
			["末影珍珠", 2],
			["云符文", 2],
			["烈焰棒", 1]
		],
		"count": 1
	},
	"矿工法杖": {
		"map": [
			["古代符文 [地]", "烈焰粉", "古代符文 [地]"],
			["魔法结晶 - III", "烈焰棒", "魔法结晶 - III"],
			["智力符文", null, "智力符文"]
		],
		"ingredients": [
			["古代符文 [地]", 2],
			["烈焰粉", 1],
			["魔法结晶 - III", 2],
			["烈焰棒", 1],
			["智力符文", 2]
		],
		"count": 1
	},
	"聚集法杖": {
		"map": [
			[null, "末影珍珠", null],
			["精神符文", "烈焰棒", "精神符文"],
			["末影结晶 - III", null, "末影结晶 - III"]
		],
		"ingredients": [
			["末影珍珠", 1],
			["精神符文", 2],
			["烈焰棒", 1],
			["末影结晶 - III", 2]
		],
		"count": 1
	},
	"凋灵法杖": {
		"map": [
			[null, "凋灵骷髅头颅", null],
			["精神符文", "烈焰棒", "精神符文"],
			[null, "烈焰粉", null]
		],
		"ingredients": [
			["凋灵骷髅头颅", 1],
			["精神符文", 2],
			["烈焰棒", 1],
			["烈焰粉", 1]
		],
		"count": 1
	},
	"骷髅马法杖": {
		"map": [
			["精神符文", "鞍", "精神符文"],
			[null, "烈焰棒", null],
			["骨头", null, "骨头"]
		],
		"ingredients": [
			["精神符文", 2],
			["鞍", 1],
			["烈焰棒", 1],
			["骨头", 2]
		],
		"count": 1
	},
	"传送法杖": {
		"map": [
			["末影结晶 - III", "智力符文", "末影结晶 - III"],
			[null, "烈焰棒", null],
			[null, "古代符文 [末影]", null]
		],
		"ingredients": [
			["末影结晶 - III", 2],
			["智力符文", 1],
			["烈焰棒", 1],
			["古代符文 [末影]", 1]
		],
		"count": 1
	},
	"蛛网法杖": {
		"map": [
			["瘟疫符文", null, "瘟疫符文"],
			["蜘蛛网", "烈焰棒", "蜘蛛网"],
			[null, "魔法糖", null]
		],
		"ingredients": [
			["瘟疫符文", 2],
			["蜘蛛网", 2],
			["烈焰棒", 1],
			["魔法糖", 1]
		],
		"count": 1
	},
	"FN万用锄": {
		"map": [
			["普通护身符", "碳", "普通护身符"],
			["古代符文 [地]", "钻石锄", "古代符文 [地]"],
			["强化合金锭", "碳", "强化合金锭"]
		],
		"ingredients": [
			["普通护身符", 2],
			["碳", 2],
			["古代符文 [地]", 2],
			["钻石锄", 1],
			["强化合金锭", 2]
		],
		"count": 1
	},
	"FN全自动万用锄": {
		"map": [
			["普通护身符", "碳", "普通护身符"],
			["古代符文 [地]", "钻石锄", "古代符文 [地]"],
			["强化合金锭", "碳", "强化合金锭"]
		],
		"ingredients": [
			["普通护身符", 2],
			["碳", 2],
			["古代符文 [地]", 2],
			["钻石锄", 1],
			["强化合金锭", 2]
		],
		"count": 1
	},
	"方块换向器": {
		"map": [
			["碳", "铜锭", "碳"],
			["电磁铁", "指南针", "电磁铁"],
			["硬铝锭", "铜锭", "硬铝锭"]
		],
		"ingredients": [
			["碳", 2],
			["铜锭", 2],
			["电磁铁", 2],
			["指南针", 1],
			["硬铝锭", 2]
		],
		"count": 1
	},
	"FN组装台": {
		"type": "多方块结构",
		"map": [
			[null, null, null],
			[null, "金合欢木栅栏", null],
			["工作台", "发射器", "工作台"]
		],
		"ingredients": [
			["金合欢木栅栏", 1],
			["工作台", 2],
			["发射器", 1]
		],
		"count": 1
	},
	"FN废料回收器": {
		"type": "多方块结构",
		"map": [
			[null, null, null],
			[null, "金合欢木栅栏", null],
			["铁砧", "发射器", "工作台"]
		],
		"ingredients": [
			["金合欢木栅栏", 1],
			["铁砧", 1],
			["发射器", 1],
			["工作台", 1]
		],
		"count": 1
	},
	"FN神秘棍祭坛": {
		"type": "多方块结构",
		"map": [
			[null, null, null],
			[null, "金合欢木栅栏", null],
			["附魔台", "发射器", "附魔台"]
		],
		"ingredients": [
			["金合欢木栅栏", 1],
			["附魔台", 2],
			["发射器", 1]
		],
		"count": 1
	},
	"FN 宝石祭坛": {
		"type": "多方块结构",
		"map": [
			[null, null, null],
			[null, "金合欢木栅栏", null],
			["铁砧", "发射器", "锻造台"]
		],
		"ingredients": [
			["金合欢木栅栏", 1],
			["铁砧", 1],
			["发射器", 1],
			["锻造台", 1]
		],
		"count": 1
	},
	"FN Magic Altar": {
		"type": "多方块结构",
		"map": [
			[null, null, null],
			[null, "金合欢木栅栏", null],
			["附魔台", "发射器", "锻造台"]
		],
		"ingredients": [
			["金合欢木栅栏", 1],
			["附魔台", 1],
			["发射器", 1],
			["锻造台", 1]
		],
		"count": 1
	},
	"FN Gem Upgrader": {
		"type": "多方块结构",
		"map": [
			[null, null, null],
			[null, "金合欢木栅栏", null],
			["砂轮", "发射器", "砂轮"]
		],
		"ingredients": [
			["金合欢木栅栏", 1],
			["砂轮", 2],
			["发射器", 1]
		],
		"count": 1
	},
	"不锈钢锭": {
		"type": "冶炼炉",
		"map": [
			["铁锭", "铁粉", "锌粉"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["铁锭", 1],
			["铁粉", 1],
			["锌粉", 1]
		],
		"count": 1
	},
	"不锈钢转子": {
		"type": "增强型工作台",
		"map": [
			[null, "不锈钢锭", null],
			["不锈钢锭", "铁块", "不锈钢锭"],
			[null, "不锈钢锭", null]
		],
		"ingredients": [
			["不锈钢锭", 4],
			["铁块", 1]
		],
		"count": 1
	},
	"古代机器核心": {
		"type": "魔法工作台",
		"map": [
			["铅锭", "魔法结晶 - I", "铅锭"],
			["魔法结晶 - I", "红石块", "魔法结晶 - I"],
			["铅锭", "魔法结晶 - I", "铅锭"]
		],
		"ingredients": [
			["铅锭", 4],
			["魔法结晶 - I", 4],
			["红石块", 1]
		],
		"count": 1
	},
	"机器废料": {
		"type": "磨石",
		"map": [
			["可编程式机器人 (普通)", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["可编程式机器人 (普通)", 1]
		],
		"count": 8
	},
	"高级机器废料": {
		"type": "磨石",
		"map": [
			["高级可编程式机器人 (普通)", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["高级可编程式机器人 (普通)", 1]
		],
		"count": 8
	},
	"恼鬼宝石": {
		"type": "生物掉落",
		"map": [
			[null, null, null],
			[null, "Vex", null],
			[null, null, null]
		],
		"ingredients": [
			["Vex", 1]
		],
		"count": 1
	},
	"星尘": {
		"type": "磨石",
		"map": [
			["星尘流星", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["星尘流星", 1]
		],
		"count": 1
	},
	"星尘流星": {
		"type": "自然资源开采机",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"幽灵精华": {
		"type": "生物掉落",
		"map": [
			[null, null, null],
			[null, "Vex", null],
			[null, null, null]
		],
		"ingredients": [
			["Vex", 1]
		],
		"count": 1
	},
	"光学物品": {
		"type": "古代祭坛",
		"map": [
			["幽灵精华", "古代符文 [末影]", "恼鬼宝石"],
			["古代符文 [末影]", "凋零玫瑰", "古代符文 [末影]"],
			["恼鬼宝石", "古代符文 [末影]", "幽灵精华"]
		],
		"ingredients": [
			["幽灵精华", 2],
			["古代符文 [末影]", 4],
			["恼鬼宝石", 2],
			["凋零玫瑰", 1]
		],
		"count": 1
	},
	"蜜蜂": {
		"map": [
			[null, null, null],
			[null, "任何蜜蜂", null],
			[null, null, null]
		],
		"ingredients": [
			["任何蜜蜂", 1]
		],
		"count": 1
	},
	"机械蜜蜂": {
		"type": "增强型工作台",
		"map": [
			["强化合金锭", "强化合金锭", "强化合金锭"],
			["人造蓝宝石", "机器废料", "人造蓝宝石"],
			["强化合金锭", "古代机器核心", "强化合金锭"]
		],
		"ingredients": [
			["强化合金锭", 5],
			["人造蓝宝石", 2],
			["机器废料", 1],
			["古代机器核心", 1]
		],
		"count": 1
	},
	"高级机械蜜蜂": {
		"type": "增强型工作台",
		"map": [
			["钢筋板", "钢筋板", "钢筋板"],
			["恼鬼宝石", "高级机器废料", "恼鬼宝石"],
			["金块 (24克拉)", "古代机器核心", "金块 (24克拉)"]
		],
		"ingredients": [
			["钢筋板", 3],
			["恼鬼宝石", 2],
			["高级机器废料", 1],
			["金块 (24克拉)", 2],
			["古代机器核心", 1]
		],
		"count": 1
	},
	"野餐篮": {
		"type": "增强型工作台",
		"map": [
			["布", "布", "布"],
			["竹子", "小冰柜", "竹子"],
			["加热线圈", "竹子", "冷却装置"]
		],
		"ingredients": [
			["布", 3],
			["竹子", 3],
			["小冰柜", 1],
			["加热线圈", 1],
			["冷却装置", 1]
		],
		"count": 1
	},
	"灵魂绑定野餐篮": {
		"type": "魔法工作台",
		"map": [
			["哭泣的黑曜石", "古代符文 [末影]", "哭泣的黑曜石"],
			["古代符文 [末影]", "野餐篮", "古代符文 [末影]"],
			["哭泣的黑曜石", "古代符文 [末影]", "哭泣的黑曜石"]
		],
		"ingredients": [
			["哭泣的黑曜石", 4],
			["古代符文 [末影]", 4],
			["野餐篮", 1]
		],
		"count": 1
	},
	"物品栏过滤器": {
		"type": "增强型工作台",
		"map": [
			["强化布料", "铁栏杆", "强化布料"],
			["铁栏杆", null, "铁栏杆"],
			["强化布料", "铁栏杆", "强化布料"]
		],
		"ingredients": [
			["强化布料", 4],
			["铁栏杆", 4]
		],
		"count": 1
	},
	"电力刺激器": {
		"type": "增强型工作台",
		"map": [
			["不锈钢锭", null, "不锈钢锭"],
			["不锈钢锭", "食品加工机", "不锈钢锭"],
			["塑料纸", "塑料纸", "塑料纸"]
		],
		"ingredients": [
			["不锈钢锭", 4],
			["食品加工机", 1],
			["塑料纸", 3]
		],
		"count": 1
	},
	"飞行宝石": {
		"type": "古代祭坛",
		"map": [
			["下界合金锭", "核反应堆", "下界合金锭"],
			["金块 (24克拉)", "恼鬼宝石", "金块 (24克拉)"],
			["起泡锭", "不锈钢转子", "起泡锭"]
		],
		"ingredients": [
			["下界合金锭", 2],
			["核反应堆", 1],
			["金块 (24克拉)", 2],
			["恼鬼宝石", 1],
			["起泡锭", 2],
			["不锈钢转子", 1]
		],
		"count": 1
	},
	"勺子": {
		"type": "增强型工作台",
		"map": [
			["白色羊毛", "白色羊毛", "白色羊毛"],
			["白色羊毛", "电池", "白色羊毛"],
			[null, "木棍", null]
		],
		"ingredients": [
			["白色羊毛", 5],
			["电池", 1],
			["木棍", 1]
		],
		"count": 1
	},
	"异次元之家": {
		"type": "魔法工作台",
		"map": [
			[null, null, "金块 (24克拉)"],
			["青铜锭", "烈焰棒", null],
			["人造蓝宝石", "青铜锭", null]
		],
		"ingredients": [
			["金块 (24克拉)", 1],
			["青铜锭", 2],
			["烈焰棒", 1],
			["人造蓝宝石", 1]
		],
		"count": 1
	},
	"物品模组: 生命提升": {
		"type": "魔法工作台",
		"map": [
			["金胡萝卜", "下界之星", "金胡萝卜"],
			["下界之星", "恼鬼宝石", "下界之星"],
			["金胡萝卜", "下界之星", "金胡萝卜"]
		],
		"ingredients": [
			["金胡萝卜", 4],
			["下界之星", 4],
			["恼鬼宝石", 1]
		],
		"count": 1
	},
	"物品模组: 急迫": {
		"type": "魔法工作台",
		"map": [
			["钴镐", "下界之星", "钴镐"],
			["下界之星", "恼鬼宝石", "下界之星"],
			["钴镐", "下界之星", "钴镐"]
		],
		"ingredients": [
			["钴镐", 4],
			["下界之星", 4],
			["恼鬼宝石", 1]
		],
		"count": 1
	},
	"光学绑定仪": {
		"type": "魔法工作台",
		"map": [
			[null, "光学物品", null],
			[null, "不锈钢锭", null],
			[null, "不锈钢锭", null]
		],
		"ingredients": [
			["光学物品", 1],
			["不锈钢锭", 2]
		],
		"count": 1
	},
	"恼鬼生物芯片": {
		"type": "模拟器合成机",
		"map": [
			["恼鬼宝石", "幽灵精华", "恼鬼宝石"],
			["幽灵精华", "空生物芯片", "幽灵精华"],
			["恼鬼宝石", "幽灵精华", "恼鬼宝石"]
		],
		"ingredients": [
			["恼鬼宝石", 4],
			["幽灵精华", 4],
			["空生物芯片", 1]
		],
		"count": 1
	},
	"幻翼生物芯片": {
		"type": "模拟器合成机",
		"map": [
			["幻翼膜", "幻翼膜", "幻翼膜"],
			["幻翼膜", "空生物芯片", "幻翼膜"],
			["幻翼膜", "幻翼膜", "幻翼膜"]
		],
		"ingredients": [
			["幻翼膜", 8],
			["空生物芯片", 1]
		],
		"count": 1
	},
	"多方块结构: 凋零傀儡": {
		"type": "多方块结构",
		"map": [
			[null, "雕刻过的南瓜", null],
			[null, "磨制黑石", null],
			[null, "磨制黑石", null]
		],
		"ingredients": [
			["雕刻过的南瓜", 1],
			["磨制黑石", 2]
		],
		"count": 1
	},
	"自动厨房": {
		"type": "增强型工作台",
		"map": [
			["红砖", "电炉", "红砖"],
			["不锈钢锭", "金块 (24克拉)", "不锈钢锭"],
			["陶瓦", "陶瓦", "陶瓦"]
		],
		"ingredients": [
			["红砖", 2],
			["电炉", 1],
			["不锈钢锭", 2],
			["金块 (24克拉)", 1],
			["陶瓦", 3]
		],
		"count": 1
	},
	"培育仓": {
		"type": "增强型工作台",
		"map": [
			["钢化玻璃", "树木生长加速器", "钢化玻璃"],
			["骨块", "草方块", "骨块"],
			["不锈钢锭", "作物生长加速器 (II)", "不锈钢锭"]
		],
		"ingredients": [
			["钢化玻璃", 2],
			["树木生长加速器", 1],
			["骨块", 2],
			["草方块", 1],
			["不锈钢锭", 2],
			["作物生长加速器 (II)", 1]
		],
		"count": 1
	},
	"培育仓 MK2": {
		"type": "增强型工作台",
		"map": [
			["钢板", "培育仓", "钢板"],
			["草方块", "黄绿色染色玻璃", "沙子"],
			["钢板", "培育仓", "钢板"]
		],
		"ingredients": [
			["钢板", 4],
			["培育仓", 2],
			["草方块", 1],
			["黄绿色染色玻璃", 1],
			["沙子", 1]
		],
		"count": 1
	},
	"末影培育仓": {
		"type": "增强型工作台",
		"map": [
			["钢化玻璃", "品红色染色玻璃", "钢化玻璃"],
			["紫珀块", "紫颂花", "末地石"],
			["不锈钢锭", "培育仓", "不锈钢锭"]
		],
		"ingredients": [
			["钢化玻璃", 2],
			["品红色染色玻璃", 1],
			["紫珀块", 1],
			["紫颂花", 1],
			["末地石", 1],
			["不锈钢锭", 2],
			["培育仓", 1]
		],
		"count": 1
	},
	"末影培育仓 MK2": {
		"type": "增强型工作台",
		"map": [
			["钢板", "末影培育仓", "钢板"],
			["紫珀柱", "紫色染色玻璃", "末地石砖"],
			["钢板", "末影培育仓", "钢板"]
		],
		"ingredients": [
			["钢板", 4],
			["末影培育仓", 2],
			["紫珀柱", 1],
			["紫色染色玻璃", 1],
			["末地石砖", 1]
		],
		"count": 1
	},
	"下界培育仓": {
		"type": "增强型工作台",
		"map": [
			["钢化玻璃", "红色染色玻璃", "钢化玻璃"],
			["绯红菌岩", "灵魂沙", "诡异菌岩"],
			["不锈钢锭", "培育仓", "不锈钢锭"]
		],
		"ingredients": [
			["钢化玻璃", 2],
			["红色染色玻璃", 1],
			["绯红菌岩", 1],
			["灵魂沙", 1],
			["诡异菌岩", 1],
			["不锈钢锭", 2],
			["培育仓", 1]
		],
		"count": 1
	},
	"下界培育仓 MK2": {
		"type": "增强型工作台",
		"map": [
			["钢板", "下界培育仓", "钢板"],
			["绯红菌岩", "灵魂沙", "诡异菌岩"],
			["钢板", "下界培育仓", "钢板"]
		],
		"ingredients": [
			["钢板", 4],
			["下界培育仓", 2],
			["绯红菌岩", 1],
			["灵魂沙", 1],
			["诡异菌岩", 1]
		],
		"count": 1
	},
	"海洋培育仓": {
		"type": "增强型工作台",
		"map": [
			["钢化玻璃", "青色染色玻璃", "钢化玻璃"],
			["水桶", "沙子", "水桶"],
			["不锈钢锭", "培育仓", "不锈钢锭"]
		],
		"ingredients": [
			["钢化玻璃", 2],
			["青色染色玻璃", 1],
			["水桶", 2],
			["沙子", 1],
			["不锈钢锭", 2],
			["培育仓", 1]
		],
		"count": 1
	},
	"海洋培育仓 MK2": {
		"type": "增强型工作台",
		"map": [
			["钢板", "海洋培育仓", "钢板"],
			["沙砾", "淡蓝色染色玻璃", "泥土"],
			["钢板", "海洋培育仓", "钢板"]
		],
		"ingredients": [
			["钢板", 4],
			["海洋培育仓", 2],
			["沙砾", 1],
			["淡蓝色染色玻璃", 1],
			["泥土", 1]
		],
		"count": 1
	},
	"反重力泡泡": {
		"type": "增强型工作台",
		"map": [
			["起泡锭", "钻石块", "起泡锭"],
			["强化合金锭", "大型储能电容", "强化合金锭"],
			["强化合金锭", "不锈钢锭", "强化合金锭"]
		],
		"ingredients": [
			["起泡锭", 2],
			["钻石块", 1],
			["强化合金锭", 4],
			["大型储能电容", 1],
			["不锈钢锭", 1]
		],
		"count": 1
	},
	"天气控制仪": {
		"type": "增强型工作台",
		"map": [
			[null, "硬化金属", null],
			["水桶", "古代机器核心", "熔岩桶"],
			["不锈钢锭", "哭泣的黑曜石", "不锈钢锭"]
		],
		"ingredients": [
			["硬化金属", 1],
			["水桶", 1],
			["古代机器核心", 1],
			["熔岩桶", 1],
			["不锈钢锭", 2],
			["哭泣的黑曜石", 1]
		],
		"count": 1
	},
	"药水喷洒器": {
		"type": "增强型工作台",
		"map": [
			["酿造台", null, "酿造台"],
			["铁栏杆", "古代机器核心", "铁栏杆"],
			["硅铁", "硅铁", "硅铁"]
		],
		"ingredients": [
			["酿造台", 2],
			["铁栏杆", 2],
			["古代机器核心", 1],
			["硅铁", 3]
		],
		"count": 1
	},
	"铁丝网": {
		"type": "增强型工作台",
		"map": [
			["铁剑", "铁剑", "铁剑"],
			["不锈钢锭", "橡木原木", "不锈钢锭"],
			["锌锭", "锌锭", "锌锭"]
		],
		"ingredients": [
			["铁剑", 3],
			["不锈钢锭", 2],
			["橡木原木", 1],
			["锌锭", 3]
		],
		"count": 1
	},
	"材料蜂巢": {
		"type": "增强型工作台",
		"map": [
			["硬化金属", "人造钻石", "硬化金属"],
			["硬化金属", "蜂箱", "硬化金属"],
			["高级机器废料", "机器废料", "高级机器废料"]
		],
		"ingredients": [
			["硬化金属", 4],
			["人造钻石", 1],
			["蜂箱", 1],
			["高级机器废料", 2],
			["机器废料", 1]
		],
		"count": 1
	},
	"无线充电站": {
		"type": "增强型工作台",
		"map": [
			[null, "GPS 发射器", null],
			["金锭 (24克拉)", "充电台", "金锭 (24克拉)"],
			[null, "小型储能电容", null]
		],
		"ingredients": [
			["GPS 发射器", 1],
			["金锭 (24克拉)", 2],
			["充电台", 1],
			["小型储能电容", 1]
		],
		"count": 1
	},
	"种子提取器": {
		"type": "增强型工作台",
		"map": [
			["钢化玻璃", "不锈钢锭", "钢化玻璃"],
			["骨块", null, "骨块"],
			["不锈钢锭", "剪刀", "不锈钢锭"]
		],
		"ingredients": [
			["钢化玻璃", 2],
			["不锈钢锭", 3],
			["骨块", 2],
			["剪刀", 1]
		],
		"count": 1
	},
	"物品模组管理器": {
		"type": "魔法工作台",
		"map": [
			["空白符文", "古代机器核心", "空白符文"],
			["强化布料", "附魔台", "强化布料"],
			[null, "防凋灵黑曜石", null]
		],
		"ingredients": [
			["空白符文", 2],
			["古代机器核心", 1],
			["强化布料", 2],
			["附魔台", 1],
			["防凋灵黑曜石", 1]
		],
		"count": 1
	},
	"矿物花": {
		"type": "魔法工作台",
		"map": [
			["古代符文 [末影]", "古代符文 [末影]", "古代符文 [末影]"],
			["魔法结晶 - III", "凋零玫瑰", "魔法结晶 - III"],
			["硬化金属", "钢筋板", "硬化金属"]
		],
		"ingredients": [
			["古代符文 [末影]", 3],
			["魔法结晶 - III", 2],
			["凋零玫瑰", 1],
			["硬化金属", 2],
			["钢筋板", 1]
		],
		"count": 1
	},
	"无线能源库": {
		"type": "增强型工作台",
		"map": [
			["高级机器废料", "无线充电站", "高级机器废料"],
			["无线充电站", "大型储能电容", "无线充电站"],
			["幽灵精华", "无线充电站", "幽灵精华"]
		],
		"ingredients": [
			["高级机器废料", 2],
			["无线充电站", 4],
			["大型储能电容", 1],
			["幽灵精华", 2]
		],
		"count": 1
	},
	"无线能源节点": {
		"type": "增强型工作台",
		"map": [
			["能源连接器", "幽灵精华", "能源连接器"],
			["幽灵精华", "古代机器核心", "幽灵精华"],
			["能源连接器", "幽灵精华", "能源连接器"]
		],
		"ingredients": [
			["能源连接器", 4],
			["幽灵精华", 4],
			["古代机器核心", 1]
		],
		"count": 1
	},
	"无线物品输入节点": {
		"type": "增强型工作台",
		"map": [
			["货运节点 (输入)", "幽灵精华", "货运节点 (输入)"],
			["幽灵精华", "古代机器核心", "幽灵精华"],
			["货运节点 (输入)", "幽灵精华", "货运节点 (输入)"]
		],
		"ingredients": [
			["货运节点 (输入)", 4],
			["幽灵精华", 4],
			["古代机器核心", 1]
		],
		"count": 1
	},
	"无线物品输出节点": {
		"type": "增强型工作台",
		"map": [
			["高级机器废料", "幽灵精华", "高级机器废料"],
			["幽灵精华", "大型储能电容", "幽灵精华"],
			["高级货运节点 (输出)", "幽灵精华", "高级货运节点 (输出)"]
		],
		"ingredients": [
			["高级机器废料", 2],
			["幽灵精华", 4],
			["大型储能电容", 1],
			["高级货运节点 (输出)", 2]
		],
		"count": 1
	},
	"光学传输器": {
		"type": "魔法工作台",
		"map": [
			["无线能源库", "光学物品", "无线物品输入节点"],
			["光学物品", "幽灵精华", "光学物品"],
			["无线物品输出节点", "光学物品", "无线能源节点"]
		],
		"ingredients": [
			["无线能源库", 1],
			["光学物品", 4],
			["无线物品输入节点", 1],
			["幽灵精华", 1],
			["无线物品输出节点", 1],
			["无线能源节点", 1]
		],
		"count": 1
	},
	"外部加热器": {
		"type": "增强型工作台",
		"map": [
			["不锈钢锭", "硬化金属", "不锈钢锭"],
			["黑曜石", "侦测器", "黑曜石"],
			["黑曜石", "能源调节器", "黑曜石"]
		],
		"ingredients": [
			["不锈钢锭", 2],
			["硬化金属", 1],
			["黑曜石", 4],
			["侦测器", 1],
			["能源调节器", 1]
		],
		"count": 1
	},
	"便携式液体储存罐": {
		"type": "增强型工作台",
		"map": [
			["不锈钢锭", "桶", "不锈钢锭"],
			["桶", "桶", "桶"],
			["不锈钢锭", "桶", "不锈钢锭"]
		],
		"ingredients": [
			["不锈钢锭", 4],
			["桶", 5]
		],
		"count": 1
	},
	"水轮发电机": {
		"type": "增强型工作台",
		"map": [
			["铝锭", "硫酸盐", "铝锭"],
			["铝锭", "能源连接器", "铝锭"],
			["不锈钢转子", null, "不锈钢转子"]
		],
		"ingredients": [
			["铝锭", 4],
			["硫酸盐", 1],
			["能源连接器", 1],
			["不锈钢转子", 2]
		],
		"count": 1
	},
	"水力涡轮发电机": {
		"type": "增强型工作台",
		"map": [
			["水轮发电机", "强化合金锭", "水轮发电机"],
			["强化合金锭", "金锭 (8克拉)", "强化合金锭"],
			["水轮发电机", "强化合金锭", "水轮发电机"]
		],
		"ingredients": [
			["水轮发电机", 4],
			["强化合金锭", 4],
			["金锭 (8克拉)", 1]
		],
		"count": 1
	},
	"龙蛋发电机": {
		"type": "增强型工作台",
		"map": [
			["哭泣的黑曜石", "末地石", "哭泣的黑曜石"],
			["哭泣的黑曜石", "铅锭", "哭泣的黑曜石"],
			["铅锭", "中型储能电容", "铅锭"]
		],
		"ingredients": [
			["哭泣的黑曜石", 4],
			["末地石", 1],
			["铅锭", 3],
			["中型储能电容", 1]
		],
		"count": 1
	},
	"粉碎发电机": {
		"type": "增强型工作台",
		"map": [
			["不锈钢锭", "不锈钢锭", "不锈钢锭"],
			["钻石斧", "古代机器核心", "钻石斧"],
			["不锈钢锭", "不锈钢锭", "不锈钢锭"]
		],
		"ingredients": [
			["不锈钢锭", 6],
			["钻石斧", 2],
			["古代机器核心", 1]
		],
		"count": 1
	},
	"烹饪发电机": {
		"type": "增强型工作台",
		"map": [
			["铝黄铜锭", "铝黄铜锭", "铝黄铜锭"],
			["铅粉", "小型储能电容", "铅粉"],
			["营火", "营火", "营火"]
		],
		"ingredients": [
			["铝黄铜锭", 3],
			["铅粉", 2],
			["小型储能电容", 1],
			["营火", 3]
		],
		"count": 1
	},
	"星尘反应堆": {
		"type": "增强型工作台",
		"map": [
			["火焰弹", "火焰弹", "火焰弹"],
			[null, "核反应堆", null],
			["高级机器废料", "古代机器核心", "高级机器废料"]
		],
		"ingredients": [
			["火焰弹", 3],
			["核反应堆", 1],
			["高级机器废料", 2],
			["古代机器核心", 1]
		],
		"count": 1
	},
	"硼砂": {
		"type": "空配方",
		"map": [
			["石头掉落物", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["石头掉落物", 1]
		],
		"count": 1
	},
	"硼": {
		"type": "冶炼炉",
		"map": [
			["硼砂", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["硼砂", 1]
		],
		"count": 1
	},
	"软钢锭": {
		"type": "冶炼炉",
		"map": [
			["钢锭", "黏液球", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["钢锭", 1],
			["黏液球", 1]
		],
		"count": 1
	},
	"强化软钢锭": {
		"type": "冶炼炉",
		"map": [
			["软钢锭", "黏液块", "大马士革钢锭"],
			["硬化金属", "科林斯青铜锭", "铝青铜锭"],
			[null, null, null]
		],
		"ingredients": [
			["软钢锭", 1],
			["黏液块", 1],
			["大马士革钢锭", 1],
			["硬化金属", 1],
			["科林斯青铜锭", 1],
			["铝青铜锭", 1]
		],
		"count": 1
	},
	"黏液球": {
		"type": "增强型工作台",
		"map": [
			["硼砂", "骨粉", "水桶"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["硼砂", 1],
			["骨粉", 1],
			["水桶", 1]
		],
		"count": 1
	},
	"瞄准镜": {
		"type": "增强型工作台",
		"map": [
			["塑料纸", "万用表", "塑料纸"],
			["钢化玻璃", null, "钢化玻璃"],
			["塑料纸", "塑料纸", "塑料纸"]
		],
		"ingredients": [
			["塑料纸", 5],
			["万用表", 1],
			["钢化玻璃", 2]
		],
		"count": 1
	},
	"枪管": {
		"type": "增强型工作台",
		"map": [
			["软钢锭", "软钢锭", "软钢锭"],
			[null, null, null],
			["软钢锭", "软钢锭", "软钢锭"]
		],
		"ingredients": [
			["软钢锭", 6]
		],
		"count": 1
	},
	"高级枪管": {
		"type": "增强型工作台",
		"map": [
			["强化软钢锭", "强化软钢锭", "强化软钢锭"],
			["枪管", "枪管", "枪管"],
			["强化软钢锭", "强化软钢锭", "强化软钢锭"]
		],
		"ingredients": [
			["强化软钢锭", 6],
			["枪管", 3]
		],
		"count": 1
	},
	"元素锻造台": {
		"type": "多方块结构",
		"map": [
			["下界合金块", "活塞 (朝下)", "下界合金块"],
			["下界砖墙", null, "下界砖墙"],
			["漏斗 (朝下)", "锻造台", "发射器"]
		],
		"ingredients": [
			["下界合金块", 2],
			["活塞 (朝下)", 1],
			["下界砖墙", 2],
			["漏斗 (朝下)", 1],
			["锻造台", 1],
			["发射器", 1]
		],
		"count": 1
	},
	"光纤玻璃": {
		"type": "冶炼炉",
		"map": [
			["铒锭", "硅", "玻璃"],
			["玻璃板", null, null],
			[null, null, null]
		],
		"ingredients": [
			["铒锭", 1],
			["硅", 1],
			["玻璃", 1],
			["玻璃板", 1]
		],
		"count": 1
	},
	"光纤电缆": {
		"type": "增强型工作台",
		"map": [
			["银锭", "银锭", "银锭"],
			["光纤玻璃", "光纤玻璃", "光纤玻璃"],
			["银锭", "银锭", "银锭"]
		],
		"ingredients": [
			["银锭", 6],
			["光纤玻璃", 3]
		],
		"count": 3
	},
	"激光二极管": {
		"type": "冶炼炉",
		"map": [
			["人造蓝宝石", "荧石", "镱锭"],
			["光纤玻璃", null, null],
			[null, null, null]
		],
		"ingredients": [
			["人造蓝宝石", 1],
			["荧石", 1],
			["镱锭", 1],
			["光纤玻璃", 1]
		],
		"count": 1
	},
	"超磁铁": {
		"type": "冶炼炉",
		"map": [
			["磁铁", "钕磁铁合金", "钬锭"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["磁铁", 1],
			["钕磁铁合金", 1],
			["钬锭", 1]
		],
		"count": 1
	},
	"无线电": {
		"type": "增强型工作台",
		"map": [
			["充能 GPS 发射器", "红石火把", "充能 GPS 发射器"],
			["激光二极管", "光纤电缆", "激光二极管"],
			["锇锭", "高级电路板", "锇锭"]
		],
		"ingredients": [
			["充能 GPS 发射器", 2],
			["红石火把", 1],
			["激光二极管", 2],
			["光纤电缆", 1],
			["锇锭", 2],
			["高级电路板", 1]
		],
		"count": 1
	},
	"战斧": {
		"type": "增强型工作台",
		"map": [
			["铁斧", "铁锭", "铁斧"],
			[null, "木棍", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["铁斧", 2],
			["铁锭", 1],
			["木棍", 2]
		],
		"count": 1
	},
	"锇剑": {
		"type": "增强型工作台",
		"map": [
			[null, "锇锭", null],
			[null, "锇锭", null],
			[null, "木棍", null]
		],
		"ingredients": [
			["锇锭", 2],
			["木棍", 1]
		],
		"count": 1
	},
	"锇高温合金": {
		"type": "冶炼炉",
		"map": [
			["锇锭", "强化软钢锭", "强化合金锭"],
			["锇粉", "钆锭", "铽锭"],
			[null, null, null]
		],
		"ingredients": [
			["锇锭", 1],
			["强化软钢锭", 1],
			["强化合金锭", 1],
			["锇粉", 1],
			["钆锭", 1],
			["铽锭", 1]
		],
		"count": 1
	},
	"能量整流器": {
		"type": "增强型工作台",
		"map": [
			["锇高温合金", "黑金刚石镶边储能电容", "锇高温合金"],
			["能量水晶", "能源调节器", "能量水晶"],
			["锇高温合金", "黑金刚石镶边储能电容", "锇高温合金"]
		],
		"ingredients": [
			["锇高温合金", 4],
			["黑金刚石镶边储能电容", 2],
			["能量水晶", 2],
			["能源调节器", 1]
		],
		"count": 1
	},
	"能量之刃": {
		"type": "增强型工作台",
		"map": [
			["塞格尼森", "人造钻石", "塞格尼森"],
			["塞格尼森", "人造钻石", "塞格尼森"],
			["锇高温合金", "能量整流器", "锇高温合金"]
		],
		"ingredients": [
			["塞格尼森", 4],
			["人造钻石", 2],
			["锇高温合金", 2],
			["能量整流器", 1]
		],
		"count": 1
	},
	"假人刷怪蛋": {
		"type": "增强型工作台",
		"map": [
			["皮革外套", null, null],
			["皮革裤子", "盔甲架", null],
			["皮革靴子", null, null]
		],
		"ingredients": [
			["皮革外套", 1],
			["皮革裤子", 1],
			["盔甲架", 1],
			["皮革靴子", 1]
		],
		"count": 1
	},
	"子弹制造机": {
		"type": "增强型工作台",
		"map": [
			["强化合金锭", "活塞", "强化合金锭"],
			["电动马达", null, "电动马达"],
			["强化合金锭", "活塞", "强化合金锭"]
		],
		"ingredients": [
			["强化合金锭", 4],
			["活塞", 2],
			["电动马达", 2]
		],
		"count": 1
	},
	"铁制子弹": {
		"map": [
			["铁锭", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["铁锭", 1]
		],
		"count": 1
	},
	"铅制子弹": {
		"map": [
			["铅锭", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["铅锭", 1]
		],
		"count": 1
	},
	"贫铀弹": {
		"map": [
			["一小块铀", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["一小块铀", 1]
		],
		"count": 1
	},
	"金制子弹": {
		"map": [
			["金锭 (12克拉)", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["金锭 (12克拉)", 1]
		],
		"count": 1
	},
	"三硝基丁烯弹": {
		"map": [
			["火药粉", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["火药粉", 1]
		],
		"count": 1
	},
	"枪套": {
		"type": "增强型工作台",
		"map": [
			["软钢锭", "火药", "软钢锭"],
			["软钢锭", "打火石", "软钢锭"],
			["塑料纸", "弩", "塑料纸"]
		],
		"ingredients": [
			["软钢锭", 4],
			["火药", 1],
			["打火石", 1],
			["塑料纸", 2],
			["弩", 1]
		],
		"count": 1
	},
	"手枪": {
		"type": "增强型工作台",
		"map": [
			[null, "软钢锭", null],
			[null, "枪套", "软钢锭"],
			[null, "软钢锭", "木棍"]
		],
		"ingredients": [
			["软钢锭", 3],
			["枪套", 1],
			["木棍", 1]
		],
		"count": 1
	},
	"左轮手枪": {
		"type": "增强型工作台",
		"map": [
			[null, "软钢锭", null],
			[null, "手枪", "软钢锭"],
			[null, "软钢锭", null]
		],
		"ingredients": [
			["软钢锭", 3],
			["手枪", 1]
		],
		"count": 1
	},
	"机枪": {
		"type": "增强型工作台",
		"map": [
			["软钢锭", "瞄准镜", null],
			["枪管", "左轮手枪", "软钢锭"],
			["软钢锭", "软钢锭", "塑料纸"]
		],
		"ingredients": [
			["软钢锭", 4],
			["瞄准镜", 1],
			["枪管", 1],
			["左轮手枪", 1],
			["塑料纸", 1]
		],
		"count": 1
	},
	"重机枪": {
		"type": "增强型工作台",
		"map": [
			["强化软钢锭", "瞄准镜", "强化软钢锭"],
			["高级枪管", "机枪", "强化软钢锭"],
			["强化软钢锭", "塑料纸", "塑料纸"]
		],
		"ingredients": [
			["强化软钢锭", 4],
			["瞄准镜", 1],
			["高级枪管", 1],
			["机枪", 1],
			["塑料纸", 2]
		],
		"count": 1
	},
	"步枪": {
		"type": "增强型工作台",
		"map": [
			[null, "瞄准镜", null],
			["枪管", "枪套", "软钢锭"],
			[null, "软钢锭", "塑料纸"]
		],
		"ingredients": [
			["瞄准镜", 1],
			["枪管", 1],
			["枪套", 1],
			["软钢锭", 2],
			["塑料纸", 1]
		],
		"count": 1
	},
	"霰弹枪": {
		"type": "增强型工作台",
		"map": [
			["软钢锭", "软钢锭", null],
			["枪管", "枪管", "枪套"],
			["软钢锭", "软钢锭", "塑料纸"]
		],
		"ingredients": [
			["软钢锭", 4],
			["枪管", 2],
			["枪套", 1],
			["塑料纸", 1]
		],
		"count": 1
	},
	"突击步枪": {
		"type": "增强型工作台",
		"map": [
			["软钢锭", "瞄准镜", "橡木木板"],
			["枪管", "步枪", "强化软钢锭"],
			["软钢锭", "软钢锭", "塑料纸"]
		],
		"ingredients": [
			["软钢锭", 3],
			["瞄准镜", 1],
			["橡木木板", 1],
			["枪管", 1],
			["步枪", 1],
			["强化软钢锭", 1],
			["塑料纸", 1]
		],
		"count": 1
	},
	"狙击步枪": {
		"type": "增强型工作台",
		"map": [
			[null, "强化软钢锭", "强化软钢锭"],
			["高级枪管", "高级枪管", "突击步枪"],
			["木棍", "强化软钢锭", "塑料纸"]
		],
		"ingredients": [
			["强化软钢锭", 3],
			["高级枪管", 2],
			["突击步枪", 1],
			["木棍", 1],
			["塑料纸", 1]
		],
		"count": 1
	},
	"能量步枪": {
		"type": "增强型工作台",
		"map": [
			["锇高温合金", "锇高温合金", "塞格尼森"],
			["高级枪管", "高级枪管", "超磁铁"],
			["锇高温合金", "终极储能电容", "能量整流器"]
		],
		"ingredients": [
			["锇高温合金", 3],
			["塞格尼森", 1],
			["高级枪管", 2],
			["超磁铁", 1],
			["终极储能电容", 1],
			["能量整流器", 1]
		],
		"count": 1
	},
	"空气液化器": {
		"type": "增强型工作台",
		"map": [
			["浮冰", "冷却装置", "浮冰"],
			["冷却装置", "冰箱", "冷却装置"],
			["浮冰", "冷却装置", "浮冰"]
		],
		"ingredients": [
			["浮冰", 4],
			["冷却装置", 4],
			["冰箱", 1]
		],
		"count": 1
	},
	"爆炸物合成器": {
		"type": "增强型工作台",
		"map": [
			["强化软钢锭", "钢筋板", "强化软钢锭"],
			["钢筋板", "起泡锭", "钢筋板"],
			["强化软钢锭", "钢筋板", "强化软钢锭"]
		],
		"ingredients": [
			["强化软钢锭", 4],
			["钢筋板", 4],
			["起泡锭", 1]
		],
		"count": 1
	},
	"助泡剂 9000": {
		"type": "增强型工作台",
		"map": [
			["钢筋板", "强化布料", "钢筋板"],
			["碗", "强化软钢锭", "碗"],
			["钢筋板", "强化布料", "钢筋板"]
		],
		"ingredients": [
			["钢筋板", 4],
			["强化布料", 2],
			["碗", 2],
			["强化软钢锭", 1]
		],
		"count": 1
	},
	"钢筋混凝土": {
		"type": "冶炼炉",
		"map": [
			["铁粉", "灰色混凝土粉末", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["铁粉", 1],
			["灰色混凝土粉末", 1]
		],
		"count": 1
	},
	"液化空气": {
		"map": [
			["锡罐", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["锡罐", 1]
		],
		"count": 1
	},
	"液氮": {
		"type": "增强型工作台",
		"map": [
			["液化空气", "液化空气", "液化空气"],
			["液化空气", "液化空气", "液化空气"],
			["液化空气", null, null]
		],
		"ingredients": [
			["液化空气", 7]
		],
		"count": 4
	},
	"纯化液氮": {
		"type": "增强型工作台",
		"map": [
			["液氮", "液氮", "液氮"],
			["液氮", "液氮", "液氮"],
			["液氮", "液氮", "液氮"]
		],
		"ingredients": [
			["液氮", 9]
		],
		"count": 4
	},
	"三碘化氮": {
		"map": [
			["液氮", "干海带", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["液氮", 1],
			["干海带", 1]
		],
		"count": 1
	},
	"叠氮化碳": {
		"map": [
			["纯化液氮", "煤炭", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["纯化液氮", 1],
			["煤炭", 1]
		],
		"count": 1
	},
	"砷": {
		"type": "自然资源开采机",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"硫代丙酮": {
		"map": [
			["原油桶", "硫酸盐", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["原油桶", 1],
			["硫酸盐", 1]
		],
		"count": 1
	},
	"火药": {
		"type": "增强型工作台",
		"map": [
			["硫酸盐", "骨粉", "木炭"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["硫酸盐", 1],
			["骨粉", 1],
			["木炭", 1]
		],
		"count": 1
	},
	"火药粉": {
		"type": "磨石",
		"map": [
			["TNT", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["TNT", 1]
		],
		"count": 4
	},
	"浓缩铀": {
		"map": [
			["钚铀混合氧化物核燃料", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["钚铀混合氧化物核燃料", 1]
		],
		"count": 1
	},
	"化学手榴弹": {
		"type": "增强型工作台",
		"map": [
			["火药粉", "钢锭", "火药粉"],
			["钢锭", "锡罐", "钢锭"],
			["火药粉", "钢锭", "火药粉"]
		],
		"ingredients": [
			["火药粉", 4],
			["钢锭", 4],
			["锡罐", 1]
		],
		"count": 4
	},
	"化学手榴弹": {
		"type": "增强型工作台",
		"map": [
			["化学手榴弹", "三碘化氮", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["化学手榴弹", 1],
			["三碘化氮", 1]
		],
		"count": 1
	},
	"化学手榴弹": {
		"type": "增强型工作台",
		"map": [
			["化学手榴弹", "叠氮化碳", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["化学手榴弹", 1],
			["叠氮化碳", 1]
		],
		"count": 1
	},
	"化学手榴弹": {
		"type": "增强型工作台",
		"map": [
			["化学手榴弹", "砷", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["化学手榴弹", 1],
			["砷", 1]
		],
		"count": 1
	},
	"化学手榴弹": {
		"type": "增强型工作台",
		"map": [
			["化学手榴弹", "火药粉", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["化学手榴弹", 1],
			["火药粉", 1]
		],
		"count": 1
	},
	"化学手榴弹": {
		"type": "增强型工作台",
		"map": [
			["化学手榴弹", "硫代丙酮", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["化学手榴弹", 1],
			["硫代丙酮", 1]
		],
		"count": 1
	},
	"化学手榴弹": {
		"type": "增强型工作台",
		"map": [
			["化学手榴弹", "锇粉", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["化学手榴弹", 1],
			["锇粉", 1]
		],
		"count": 1
	},
	"核弹": {
		"type": "增强型工作台",
		"map": [
			["钢板", "浓缩铀", "钢板"],
			["活塞", "浓缩铀", "活塞"],
			["钢板", "浓缩铀", "钢板"]
		],
		"ingredients": [
			["钢板", 4],
			["浓缩铀", 3],
			["活塞", 2]
		],
		"count": 1
	},
	"锇流星": {
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"塞格尼森流星": {
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"锇粉": {
		"type": "矿石粉碎机",
		"map": [
			["锇流星", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["锇流星", 1]
		],
		"count": 1
	},
	"锇锭": {
		"type": "冶炼炉",
		"map": [
			["锇粉", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["锇粉", 1]
		],
		"count": 1
	},
	"塞格尼森": {
		"type": "矿石粉碎机",
		"map": [
			["塞格尼森流星", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["塞格尼森流星", 1]
		],
		"count": 1
	},
	"离子交换分离器": {
		"type": "增强型工作台",
		"map": [
			["强化软钢锭", "电磁铁", "强化软钢锭"],
			["硫酸盐", null, "硫酸盐"],
			["强化软钢锭", "电磁铁", "强化软钢锭"]
		],
		"ingredients": [
			["强化软钢锭", 4],
			["电磁铁", 2],
			["硫酸盐", 2]
		],
		"count": 1
	},
	"独居石": {
		"type": "自然资源开采机",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"镧锭": {
		"map": [
			["独居石", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["独居石", 1]
		],
		"count": 1
	},
	"钕锭": {
		"map": [
			["独居石", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["独居石", 1]
		],
		"count": 1
	},
	"钆锭": {
		"map": [
			["独居石", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["独居石", 1]
		],
		"count": 1
	},
	"铽锭": {
		"map": [
			["独居石", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["独居石", 1]
		],
		"count": 1
	},
	"镝锭": {
		"map": [
			["独居石", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["独居石", 1]
		],
		"count": 1
	},
	"钬锭": {
		"map": [
			["独居石", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["独居石", 1]
		],
		"count": 1
	},
	"铒锭": {
		"map": [
			["独居石", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["独居石", 1]
		],
		"count": 1
	},
	"镱锭": {
		"map": [
			["独居石", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["独居石", 1]
		],
		"count": 1
	},
	"Terfenol-D": {
		"type": "冶炼炉",
		"map": [
			["铽锭", "钆锭", "铁锭"],
			["钴锭", "镝锭", null],
			[null, null, null]
		],
		"ingredients": [
			["铽锭", 1],
			["钆锭", 1],
			["铁锭", 1],
			["钴锭", 1],
			["镝锭", 1]
		],
		"count": 1
	},
	"Terfenol-D 块": {
		"type": "增强型工作台",
		"map": [
			["Terfenol-D", "Terfenol-D", "Terfenol-D"],
			["Terfenol-D", "Terfenol-D", "Terfenol-D"],
			["Terfenol-D", "Terfenol-D", "Terfenol-D"]
		],
		"ingredients": [
			["Terfenol-D", 9]
		],
		"count": 1
	},
	"钕磁铁合金": {
		"type": "冶炼炉",
		"map": [
			["钕锭", "硼", "铁锭"],
			["镝锭", null, null],
			[null, null, null]
		],
		"ingredients": [
			["钕锭", 1],
			["硼", 1],
			["铁锭", 1],
			["镝锭", 1]
		],
		"count": 1
	},
	"钕磁铁合金块": {
		"type": "增强型工作台",
		"map": [
			["钕磁铁合金", "钕磁铁合金", "钕磁铁合金"],
			["钕磁铁合金", "钕磁铁合金", "钕磁铁合金"],
			["钕磁铁合金", "钕磁铁合金", "钕磁铁合金"]
		],
		"ingredients": [
			["钕磁铁合金", 9]
		],
		"count": 1
	},
	"流星吸引器": {
		"type": "增强型工作台",
		"map": [
			["钕磁铁合金块", null, "钕磁铁合金块"],
			["钕磁铁合金块", null, "钕磁铁合金块"],
			["Terfenol-D 块", "钕磁铁合金块", "Terfenol-D 块"]
		],
		"ingredients": [
			["钕磁铁合金块", 5],
			["Terfenol-D 块", 2]
		],
		"count": 1
	},
	"元素发电机": {
		"type": "增强型工作台",
		"map": [
			["非专利品", "锇高温合金", "非专利品"],
			["锇高温合金", "动力装甲能源核心", "锇高温合金"],
			["非专利品", "锇高温合金", "非专利品"]
		],
		"ingredients": [
			["非专利品", 4],
			["锇高温合金", 4],
			["动力装甲能源核心", 1]
		],
		"count": 1
	},
	"非专利品": {
		"map": [
			["塞格尼森", "砷", "塞格尼森"],
			["锇粉", "锇锭", "锇粉"],
			["塞格尼森", "砷", "塞格尼森"]
		],
		"ingredients": [
			["塞格尼森", 4],
			["砷", 2],
			["锇粉", 2],
			["锇锭", 1]
		],
		"count": 1
	},
	"动力装甲能源核心": {
		"type": "增强型工作台",
		"map": [
			["非专利品", "非专利品", "非专利品"],
			["塞格尼森", "下界之星反应堆", "塞格尼森"],
			["非专利品", "激光二极管", "非专利品"]
		],
		"ingredients": [
			["非专利品", 5],
			["塞格尼森", 2],
			["下界之星反应堆", 1],
			["激光二极管", 1]
		],
		"count": 1
	},
	"模组核心": {
		"type": "增强型工作台",
		"map": [
			[null, "锇锭", null],
			["光纤电缆", "动力装甲能源核心", "光纤电缆"],
			[null, "锇锭", null]
		],
		"ingredients": [
			["锇锭", 2],
			["光纤电缆", 2],
			["动力装甲能源核心", 1]
		],
		"count": 2
	},
	"动力装甲头盔": {
		"type": "盔甲锻造台",
		"map": [
			["高级电路板", "动力装甲能源核心", "高级电路板"],
			["锇高温合金", "潜水头盔", "锇高温合金"],
			["光纤电缆", "锇高温合金", "光纤电缆"]
		],
		"ingredients": [
			["高级电路板", 2],
			["动力装甲能源核心", 1],
			["锇高温合金", 3],
			["潜水头盔", 1],
			["光纤电缆", 2]
		],
		"count": 1
	},
	"动力装甲胸甲": {
		"type": "盔甲锻造台",
		"map": [
			["锇高温合金", "超磁铁", "锇高温合金"],
			["动力装甲能源核心", "防化服", "动力装甲能源核心"],
			["激光二极管", "塞格尼森", "激光二极管"]
		],
		"ingredients": [
			["锇高温合金", 2],
			["超磁铁", 1],
			["动力装甲能源核心", 2],
			["防化服", 1],
			["激光二极管", 2],
			["塞格尼森", 1]
		],
		"count": 1
	},
	"动力装甲护腿": {
		"type": "盔甲锻造台",
		"map": [
			["电动马达", "动力装甲能源核心", "电动马达"],
			["锇高温合金", "防化护腿", "锇高温合金"],
			["光纤电缆", null, "光纤电缆"]
		],
		"ingredients": [
			["电动马达", 2],
			["动力装甲能源核心", 1],
			["锇高温合金", 2],
			["防化护腿", 1],
			["光纤电缆", 2]
		],
		"count": 1
	},
	"动力装甲靴子": {
		"type": "盔甲锻造台",
		"map": [
			[null, null, null],
			["锇高温合金", "防化靴", "锇高温合金"],
			["锇高温合金", "动力装甲能源核心", "锇高温合金"]
		],
		"ingredients": [
			["锇高温合金", 4],
			["防化靴", 1],
			["动力装甲能源核心", 1]
		],
		"count": 1
	},
	"模组控制台": {
		"type": "增强型工作台",
		"map": [
			["光纤电缆", "模组核心", "光纤电缆"],
			["塞格尼森", "工作台", "塞格尼森"],
			["激光二极管", "锇锭", "激光二极管"]
		],
		"ingredients": [
			["光纤电缆", 2],
			["模组核心", 1],
			["塞格尼森", 2],
			["工作台", 1],
			["激光二极管", 2],
			["锇锭", 1]
		],
		"count": 1
	},
	"纳米纤维垫": {
		"type": "增强型工作台",
		"map": [
			["羽毛", "强化软钢锭", "羽毛"],
			["强化软钢锭", "模组核心", "强化软钢锭"],
			["羽毛", "强化软钢锭", "羽毛"]
		],
		"ingredients": [
			["羽毛", 4],
			["强化软钢锭", 4],
			["模组核心", 1]
		],
		"count": 1
	},
	"迷你喷气靴": {
		"type": "增强型工作台",
		"map": [
			["锇高温合金", "强化软钢锭", "锇高温合金"],
			["钢推进器", "模组核心", "钢推进器"],
			["锇高温合金", "强化软钢锭", "锇高温合金"]
		],
		"ingredients": [
			["锇高温合金", 4],
			["强化软钢锭", 2],
			["钢推进器", 2],
			["模组核心", 1]
		],
		"count": 1
	},
	"生命维持系统": {
		"type": "增强型工作台",
		"map": [
			["来世精华", "软钢锭", "来世精华"],
			["软钢锭", "模组核心", "软钢锭"],
			["来世精华", "软钢锭", "来世精华"]
		],
		"ingredients": [
			["来世精华", 4],
			["软钢锭", 4],
			["模组核心", 1]
		],
		"count": 1
	},
	"散热片": {
		"type": "增强型工作台",
		"map": [
			["岩浆膏", "锇锭", "岩浆膏"],
			["锇锭", "模组核心", "锇锭"],
			["岩浆膏", "锇锭", "岩浆膏"]
		],
		"ingredients": [
			["岩浆膏", 4],
			["锇锭", 4],
			["模组核心", 1]
		],
		"count": 1
	},
	"集成液压系统": {
		"type": "增强型工作台",
		"map": [
			["钢筋板", "锇高温合金", "钢筋板"],
			["燃料桶", "模组核心", "燃料桶"],
			["钢筋板", "锇高温合金", "钢筋板"]
		],
		"ingredients": [
			["钢筋板", 4],
			["锇高温合金", 2],
			["燃料桶", 2],
			["模组核心", 1]
		],
		"count": 1
	},
	"反应轮": {
		"type": "增强型工作台",
		"map": [
			["钢板", "锇高温合金", "钢板"],
			["钢锭", "模组核心", "钢锭"],
			["钢板", "锇高温合金", "钢板"]
		],
		"ingredients": [
			["钢板", 4],
			["锇高温合金", 2],
			["钢锭", 2],
			["模组核心", 1]
		],
		"count": 1
	},
	"个人能量罩": {
		"type": "增强型工作台",
		"map": [
			["非专利品", "锇高温合金", "非专利品"],
			["动力装甲能源核心", "模组核心", "动力装甲能源核心"],
			["能量整流器", "塞格尼森", "能量整流器"]
		],
		"ingredients": [
			["非专利品", 2],
			["锇高温合金", 1],
			["动力装甲能源核心", 2],
			["模组核心", 1],
			["能量整流器", 2],
			["塞格尼森", 1]
		],
		"count": 1
	},
	"水下面具™": {
		"type": "增强型工作台",
		"map": [
			["河豚", "布", "河豚"],
			["软钢锭", "模组核心", "软钢锭"],
			["河豚", "布", "河豚"]
		],
		"ingredients": [
			["河豚", 4],
			["布", 2],
			["软钢锭", 2],
			["模组核心", 1]
		],
		"count": 1
	},
	"备用发电机": {
		"type": "增强型工作台",
		"map": [
			["锇高温合金", "动力装甲能源核心", "锇高温合金"],
			["塞格尼森", "模组核心", "塞格尼森"],
			["锇高温合金", "塞格尼森", "锇高温合金"]
		],
		"ingredients": [
			["锇高温合金", 4],
			["动力装甲能源核心", 1],
			["塞格尼森", 3],
			["模组核心", 1]
		],
		"count": 1
	},
	"电力弹簧": {
		"type": "增强型工作台",
		"map": [
			["强化软钢锭", "高级电路板", "强化软钢锭"],
			["强化软钢锭", "模组核心", "强化软钢锭"],
			["强化软钢锭", "基础电路板", "强化软钢锭"]
		],
		"ingredients": [
			["强化软钢锭", 6],
			["高级电路板", 1],
			["模组核心", 1],
			["基础电路板", 1]
		],
		"count": 1
	},
	"小型活塞": {
		"type": "增强型工作台",
		"map": [
			["强化软钢锭", "活塞", "强化软钢锭"],
			["强化软钢锭", "模组核心", "强化软钢锭"],
			["强化软钢锭", "活塞", "强化软钢锭"]
		],
		"ingredients": [
			["强化软钢锭", 6],
			["活塞", 2],
			["模组核心", 1]
		],
		"count": 1
	},
	"水泥": {
		"type": "匠魂合成站",
		"map": [
			["黏土块", "沙子", "沙子"],
			["沙子", "沙子", "沙砾"],
			["沙砾", "沙砾", "沙砾"]
		],
		"ingredients": [
			["黏土块", 1],
			["沙子", 4],
			["沙砾", 4]
		],
		"count": 1
	},
	"焦黑砖": {
		"type": "冶炼炉",
		"map": [
			["水泥", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["水泥", 1]
		],
		"count": 1
	},
	"冶炼炉控制器": {
		"type": "匠魂合成站",
		"map": [
			["焦黑砖", "焦黑砖", "焦黑砖"],
			["焦黑砖", null, "焦黑砖"],
			["焦黑砖", "焦黑砖", "焦黑砖"]
		],
		"ingredients": [
			["焦黑砖", 8]
		],
		"count": 1
	},
	"焦黑液罐": {
		"type": "匠魂合成站",
		"map": [
			["焦黑砖", "玻璃", "焦黑砖"],
			["焦黑砖", "玻璃", "焦黑砖"],
			["焦黑砖", "玻璃", "焦黑砖"]
		],
		"ingredients": [
			["焦黑砖", 6],
			["玻璃", 3]
		],
		"count": 1
	},
	"焦黑浇铸口": {
		"type": "匠魂合成站",
		"map": [
			["焦黑砖", null, "焦黑砖"],
			["焦黑砖", null, "焦黑砖"],
			["焦黑砖", null, "焦黑砖"]
		],
		"ingredients": [
			["焦黑砖", 6]
		],
		"count": 1
	},
	"焦黑石砖": {
		"type": "匠魂合成站",
		"map": [
			["焦黑砖", "焦黑砖", null],
			["焦黑砖", "焦黑砖", null],
			[null, null, null]
		],
		"ingredients": [
			["焦黑砖", 4]
		],
		"count": 1
	},
	"强化合金板": {
		"type": "匠魂合成站",
		"map": [
			["强化合金块", "强化合金块", "强化合金块"],
			["强化合金块", "黑曜石", "强化合金块"],
			["强化合金块", "强化合金块", "强化合金块"]
		],
		"ingredients": [
			["强化合金块", 8],
			["黑曜石", 1]
		],
		"count": 1
	},
	"铜粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"铜块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"铅粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"铅块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"银粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"银块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"铝粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"铝块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"镁粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"镁块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"锌粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"锌块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"锡粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"锡块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"钢粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"钢块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"大马士革钢粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"大马士革钢块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"硬铝粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"硬铝块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"青铜粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"青铜块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"铝青铜粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"铝青铜块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"硬化金属粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"硬化金属块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"科林斯青铜粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"科林斯青铜块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"焊锡粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"焊锡块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"银铜合金粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"银铜合金块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"黄铜粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"黄铜块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"铝黄铜粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"铝黄铜块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"镍粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"镍块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"钴粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"钴块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"强化合金粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"强化合金块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"硅铁粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"硅铁块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"红石合金粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"红石合金块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"Boomer合金粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"Boomer合金锭": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属锭", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属锭", 1]
		],
		"count": 1
	},
	"Boomer合金块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"Sefi合金粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"Sefi合金锭": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属锭", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属锭", 1]
		],
		"count": 1
	},
	"Sefi合金块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"圣诞合金粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"圣诞合金锭": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属锭", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属锭", 1]
		],
		"count": 1
	},
	"圣诞合金块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"喜爱粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"喜爱锭": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属锭", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属锭", 1]
		],
		"count": 1
	},
	"深爱粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"深爱锭": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属锭", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属锭", 1]
		],
		"count": 1
	},
	"热情粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"热情锭": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属锭", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属锭", 1]
		],
		"count": 1
	},
	"爱之粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"爱之锭": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属锭", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属锭", 1]
		],
		"count": 1
	},
	"爱之块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"Nice粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"Nice锭": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属锭", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属锭", 1]
		],
		"count": 1
	},
	"Nice块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"煤粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"虚空块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"无尽粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"无尽块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"磁钢粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"磁钢块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"钛粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"钛块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"秘银粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"秘银块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"精金粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"精金块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"镁合金粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"镁合金块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"软钢粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"软钢块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"强化软钢粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"强化软钢块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"锇粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"锇块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"锇高温合金粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"锇高温合金块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"非专利品粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"非专利品块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"不锈钢粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"不锈钢块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"精炼铁粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"精炼铁块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"合金粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"合金块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"高级合金粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"高级合金块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"镁钍合金粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"镁钍合金块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"废料粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"废料块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"铱粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"铱块": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 块", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 块", 1]
		],
		"count": 1
	},
	"超能力核心(S)粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"超能力核心(S)锭": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属锭", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属锭", 1]
		],
		"count": 1
	},
	"超能力核心(A)粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"超能力核心(A)锭": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属锭", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属锭", 1]
		],
		"count": 1
	},
	"超能力核心(F)粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"超能力核心(F)锭": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属锭", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属锭", 1]
		],
		"count": 1
	},
	"超能力核心(H)粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"超能力核心(H)锭": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属锭", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属锭", 1]
		],
		"count": 1
	},
	"超能力核心(R)粒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属粒", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属粒", 1]
		],
		"count": 1
	},
	"超能力核心(R)锭": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 金属锭", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 金属锭", 1]
		],
		"count": 1
	},
	"模具原型: 石制铲子头": {
		"type": "匠魂合成站",
		"map": [
			[null, "圆石", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["圆石", 1]
		],
		"count": 1
	},
	"模具原型: 石制镐子头": {
		"type": "匠魂合成站",
		"map": [
			["圆石", "圆石", "圆石"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["圆石", 3]
		],
		"count": 1
	},
	"模具原型: 石制斧头": {
		"type": "匠魂合成站",
		"map": [
			["圆石", "圆石", null],
			["圆石", null, null],
			[null, null, null]
		],
		"ingredients": [
			["圆石", 3]
		],
		"count": 1
	},
	"模具原型: 石制锄头": {
		"type": "匠魂合成站",
		"map": [
			["圆石", "圆石", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["圆石", 2]
		],
		"count": 1
	},
	"模具原型: 石制剑身": {
		"type": "匠魂合成站",
		"map": [
			[null, "圆石", null],
			[null, "圆石", null],
			[null, null, null]
		],
		"ingredients": [
			["圆石", 2]
		],
		"count": 1
	},
	"模具原型: 手柄": {
		"type": "匠魂合成站",
		"map": [
			[null, null, null],
			[null, "木棍", null],
			[null, null, null]
		],
		"ingredients": [
			["木棍", 1]
		],
		"count": 1
	},
	"模具原型: 修复工具": {
		"type": "匠魂合成站",
		"map": [
			[null, null, null],
			[null, "黑曜石", null],
			[null, null, null]
		],
		"ingredients": [
			["黑曜石", 1]
		],
		"count": 1
	},
	"模具原型: 石制头盔板": {
		"type": "匠魂合成站",
		"map": [
			["圆石", "圆石", "圆石"],
			["圆石", null, "圆石"],
			[null, null, null]
		],
		"ingredients": [
			["圆石", 5]
		],
		"count": 1
	},
	"模具原型: 石制胸甲板": {
		"type": "匠魂合成站",
		"map": [
			["圆石", null, "圆石"],
			["圆石", "圆石", "圆石"],
			["圆石", "圆石", "圆石"]
		],
		"ingredients": [
			["圆石", 8]
		],
		"count": 1
	},
	"模具原型: 石制护腿板": {
		"type": "匠魂合成站",
		"map": [
			["圆石", "圆石", "圆石"],
			["圆石", null, "圆石"],
			["圆石", null, "圆石"]
		],
		"ingredients": [
			["圆石", 7]
		],
		"count": 1
	},
	"模具原型: 石制靴子板": {
		"type": "匠魂合成站",
		"map": [
			[null, null, null],
			["圆石", null, "圆石"],
			["圆石", null, "圆石"]
		],
		"ingredients": [
			["圆石", 4]
		],
		"count": 1
	},
	"模具原型: 盔甲接合物": {
		"type": "匠魂合成站",
		"map": [
			[null, null, null],
			[null, "锁链", null],
			[null, null, null]
		],
		"ingredients": [
			["锁链", 1]
		],
		"count": 1
	},
	"模具: 金属粒": {
		"type": "匠魂冶炼炉",
		"map": [
			["金锭", "铁粒", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["金锭", 1],
			["铁粒", 1]
		],
		"count": 1
	},
	"模具: 金属锭": {
		"type": "匠魂冶炼炉",
		"map": [
			["金锭", "红砖", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["金锭", 1],
			["红砖", 1]
		],
		"count": 1
	},
	"模具: 块": {
		"type": "匠魂冶炼炉",
		"map": [
			["金锭", "石头", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["金锭", 1],
			["石头", 1]
		],
		"count": 1
	},
	"模具: 宝石": {
		"type": "匠魂冶炼炉",
		"map": [
			["金锭", "钻石", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["金锭", 1],
			["钻石", 1]
		],
		"count": 1
	},
	"模具: 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			["黄铜锭", "模具原型: 石制铲子头", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["黄铜锭", 1],
			["模具原型: 石制铲子头", 1]
		],
		"count": 1
	},
	"模具: 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			["黄铜锭", "模具原型: 石制镐子头", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["黄铜锭", 1],
			["模具原型: 石制镐子头", 1]
		],
		"count": 1
	},
	"模具: 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			["黄铜锭", "模具原型: 石制斧头", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["黄铜锭", 1],
			["模具原型: 石制斧头", 1]
		],
		"count": 1
	},
	"模具: 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			["黄铜锭", "模具原型: 石制锄头", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["黄铜锭", 1],
			["模具原型: 石制锄头", 1]
		],
		"count": 1
	},
	"模具: 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			["黄铜锭", "模具原型: 石制剑身", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["黄铜锭", 1],
			["模具原型: 石制剑身", 1]
		],
		"count": 1
	},
	"模具: 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			["黄铜锭", "模具原型: 手柄", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["黄铜锭", 1],
			["模具原型: 手柄", 1]
		],
		"count": 1
	},
	"模具: 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			["黄铜锭", "模具原型: 石制头盔板", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["黄铜锭", 1],
			["模具原型: 石制头盔板", 1]
		],
		"count": 1
	},
	"模具: 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			["黄铜锭", "模具原型: 石制胸甲板", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["黄铜锭", 1],
			["模具原型: 石制胸甲板", 1]
		],
		"count": 1
	},
	"模具: 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			["黄铜锭", "模具原型: 石制护腿板", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["黄铜锭", 1],
			["模具原型: 石制护腿板", 1]
		],
		"count": 1
	},
	"模具: 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			["黄铜锭", "模具原型: 石制靴子板", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["黄铜锭", 1],
			["模具原型: 石制靴子板", 1]
		],
		"count": 1
	},
	"模具: 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			["黄铜锭", "模具原型: 盔甲接合物", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["黄铜锭", 1],
			["模具原型: 盔甲接合物", 1]
		],
		"count": 1
	},
	"模具: 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			["金锭", "模具原型: 修复工具", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["金锭", 1],
			["模具原型: 修复工具", 1]
		],
		"count": 1
	},
	"部件: 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 铲头", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1]
		],
		"count": 1
	},
	"部件: 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 镐头", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1]
		],
		"count": 1
	},
	"部件: 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 斧刃", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1]
		],
		"count": 1
	},
	"部件: 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 锄头", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1]
		],
		"count": 1
	},
	"部件: 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 剑刃", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1]
		],
		"count": 1
	},
	"部件: 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 手柄", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1]
		],
		"count": 1
	},
	"部件: 绑定结": {
		"type": "匠魂合成站",
		"map": [
			["绑定结材料", null, "绑定结材料"],
			[null, "绑定结材料", null],
			["绑定结材料", null, "绑定结材料"]
		],
		"ingredients": [
			["绑定结材料", 5]
		],
		"count": 1
	},
	"部件: 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 头盔板", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1]
		],
		"count": 1
	},
	"部件: 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 胸甲板", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1]
		],
		"count": 1
	},
	"部件: 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 护腿板", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1]
		],
		"count": 1
	},
	"部件: 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 靴子板", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1]
		],
		"count": 1
	},
	"部件: 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 盔甲接合物", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1]
		],
		"count": 1
	},
	"部件: 护身软甲": {
		"type": "匠魂合成站",
		"map": [
			[null, "护身软甲材料", "绑定结材料"],
			["护身软甲材料", null, "护身软甲材料"],
			["绑定结材料", "护身软甲材料", null]
		],
		"ingredients": [
			["护身软甲材料", 4],
			["绑定结材料", 2]
		],
		"count": 1
	},
	"部件: 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "模具: 修复工具", null],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1]
		],
		"count": 1
	},
	"错误": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"错误": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"错误": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"错误": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"错误": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"错误": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"错误": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"错误": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"错误": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"错误": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"错误": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"匠魂工具信息": {
		"type": "匠魂教程",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"匠魂铲": {
		"type": "匠魂教程",
		"map": [
			[null, null, null],
			["部件: 手柄", "部件: 绑定结", "部件: 铲头"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["部件: 绑定结", 1],
			["部件: 铲头", 1]
		],
		"count": 1
	},
	"匠魂镐": {
		"type": "匠魂教程",
		"map": [
			[null, null, null],
			["部件: 手柄", "部件: 绑定结", "部件: 镐头"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["部件: 绑定结", 1],
			["部件: 镐头", 1]
		],
		"count": 1
	},
	"匠魂斧": {
		"type": "匠魂教程",
		"map": [
			[null, null, null],
			["部件: 手柄", "部件: 绑定结", "部件: 斧刃"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["部件: 绑定结", 1],
			["部件: 斧刃", 1]
		],
		"count": 1
	},
	"匠魂锄": {
		"type": "匠魂教程",
		"map": [
			[null, null, null],
			["部件: 手柄", "部件: 绑定结", "部件: 锄头"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["部件: 绑定结", 1],
			["部件: 锄头", 1]
		],
		"count": 1
	},
	"匠魂剑": {
		"type": "匠魂教程",
		"map": [
			[null, null, null],
			["部件: 手柄", "部件: 绑定结", "部件: 剑刃"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["部件: 绑定结", 1],
			["部件: 剑刃", 1]
		],
		"count": 1
	},
	"匠魂防具信息": {
		"type": "匠魂教程",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"匠魂头盔": {
		"type": "匠魂教程",
		"map": [
			[null, null, null],
			["部件: 头盔板", "部件: 护身软甲", "部件: 盔甲接合物"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头盔板", 1],
			["部件: 护身软甲", 1],
			["部件: 盔甲接合物", 1]
		],
		"count": 1
	},
	"匠魂胸甲": {
		"type": "匠魂教程",
		"map": [
			[null, null, null],
			["部件: 胸甲板", "部件: 护身软甲", "部件: 盔甲接合物"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 胸甲板", 1],
			["部件: 护身软甲", 1],
			["部件: 盔甲接合物", 1]
		],
		"count": 1
	},
	"匠魂护腿": {
		"type": "匠魂教程",
		"map": [
			[null, null, null],
			["部件: 护腿板", "部件: 护身软甲", "部件: 盔甲接合物"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 护腿板", 1],
			["部件: 护身软甲", 1],
			["部件: 盔甲接合物", 1]
		],
		"count": 1
	},
	"匠魂靴子": {
		"type": "匠魂教程",
		"map": [
			[null, null, null],
			["部件: 靴子板", "部件: 护身软甲", "部件: 盔甲接合物"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 靴子板", 1],
			["部件: 护身软甲", 1],
			["部件: 盔甲接合物", 1]
		],
		"count": 1
	},
	"Error": {
		"type": "匠魂教程",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"Error": {
		"type": "匠魂教程",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"Error": {
		"type": "匠魂教程",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"Error": {
		"type": "匠魂教程",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"Error": {
		"type": "匠魂教程",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"Error": {
		"type": "匠魂教程",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"Error": {
		"type": "匠魂教程",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"Error": {
		"type": "匠魂教程",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"Error": {
		"type": "匠魂教程",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"Error": {
		"type": "匠魂教程",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"Error": {
		"type": "匠魂教程",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"Error": {
		"type": "匠魂教程",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"Error": {
		"type": "匠魂教程",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"Error": {
		"type": "匠魂教程",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"模组: 红石": {
		"type": "匠魂教程",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"模组: 青金石": {
		"type": "匠魂教程",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"模组: 石英": {
		"type": "匠魂教程",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"模组: 钻石": {
		"type": "匠魂教程",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"模组: 绿宝石": {
		"type": "匠魂教程",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"模组: 强化合金板": {
		"type": "匠魂教程",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"匠魂合成站": {
		"type": "增强型工作台",
		"map": [
			["铁块", "铁块", "铁块"],
			["橡木木板", "工作台", "橡木木板"],
			["橡木木板", "发射器", "橡木木板"]
		],
		"ingredients": [
			["铁块", 3],
			["橡木木板", 4],
			["工作台", 1],
			["发射器", 1]
		],
		"count": 1
	},
	"匠魂冶炼炉": {
		"type": "多方块结构",
		"map": [
			["焦黑石砖", "焦黑石砖", "焦黑石砖"],
			["焦黑液罐", "冶炼炉控制器", "焦黑浇铸口"],
			["焦黑石砖", "焦黑石砖", "焦黑石砖"]
		],
		"ingredients": [
			["焦黑石砖", 6],
			["焦黑液罐", 1],
			["冶炼炉控制器", 1],
			["焦黑浇铸口", 1]
		],
		"count": 1
	},
	"匠魂工具组装台": {
		"type": "匠魂合成站",
		"map": [
			["钢块", "钢块", "钢块"],
			["橡木木板", "匠魂合成站", "橡木木板"],
			["橡木木板", "能量水晶", "橡木木板"]
		],
		"ingredients": [
			["钢块", 3],
			["橡木木板", 4],
			["匠魂合成站", 1],
			["能量水晶", 1]
		],
		"count": 1
	},
	"匠魂防具组装台": {
		"type": "匠魂合成站",
		"map": [
			["大马士革钢块", "大马士革钢块", "大马士革钢块"],
			["橡木木板", "匠魂合成站", "橡木木板"],
			["橡木木板", "能量水晶", "橡木木板"]
		],
		"ingredients": [
			["大马士革钢块", 3],
			["橡木木板", 4],
			["匠魂合成站", 1],
			["能量水晶", 1]
		],
		"count": 1
	},
	"匠魂修复台": {
		"type": "匠魂合成站",
		"map": [
			["铝块", "铝块", "铝块"],
			["橡木木板", "匠魂合成站", "橡木木板"],
			["橡木木板", "能量水晶", "橡木木板"]
		],
		"ingredients": [
			["铝块", 3],
			["橡木木板", 4],
			["匠魂合成站", 1],
			["能量水晶", 1]
		],
		"count": 1
	},
	"匠魂部件更换台": {
		"type": "匠魂合成站",
		"map": [
			["科林斯青铜块", "科林斯青铜块", "科林斯青铜块"],
			["橡木木板", "匠魂合成站", "橡木木板"],
			["橡木木板", "能量水晶", "橡木木板"]
		],
		"ingredients": [
			["科林斯青铜块", 3],
			["橡木木板", 4],
			["匠魂合成站", 1],
			["能量水晶", 1]
		],
		"count": 1
	},
	"匠魂模组工作站": {
		"type": "匠魂合成站",
		"map": [
			["强化合金块", "强化合金块", "强化合金块"],
			["橡木木板", "匠魂工具组装台", "橡木木板"],
			["橡木木板", "能量水晶", "橡木木板"]
		],
		"ingredients": [
			["强化合金块", 3],
			["橡木木板", 4],
			["匠魂工具组装台", 1],
			["能量水晶", 1]
		],
		"count": 1
	},
	"熔融铁": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "铁粉", null],
			[null, null, null]
		],
		"ingredients": [
			["铁粉", 1]
		],
		"count": 1
	},
	"特性: 稳定": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "铁粉"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["铁粉", 1]
		],
		"count": 1
	},
	"特性: 锋利 1": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "铁粉"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["铁粉", 1]
		],
		"count": 1
	},
	"特性: 坚固": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "铁粉"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["铁粉", 1]
		],
		"count": 1
	},
	"特性: 腐蚀": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "铁粉"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["铁粉", 1]
		],
		"count": 1
	},
	"铁 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融铁", 1]
		],
		"count": 1
	},
	"铁 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融铁", 1]
		],
		"count": 1
	},
	"铁 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融铁", 1]
		],
		"count": 1
	},
	"铁 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融铁", 1]
		],
		"count": 1
	},
	"铁 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融铁", 1]
		],
		"count": 1
	},
	"铁 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融铁", 1]
		],
		"count": 1
	},
	"铁 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融铁", 1]
		],
		"count": 1
	},
	"铁 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融铁", 1]
		],
		"count": 1
	},
	"铁 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融铁", 1]
		],
		"count": 1
	},
	"铁 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融铁", 1]
		],
		"count": 1
	},
	"铁 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融铁", 1]
		],
		"count": 1
	},
	"铁 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融铁", 1]
		],
		"count": 1
	},
	"熔融金": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "金粉", null],
			[null, null, null]
		],
		"ingredients": [
			["金粉", 1]
		],
		"count": 1
	},
	"特性: 闪闪发光": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "金粉"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["金粉", 1]
		],
		"count": 1
	},
	"特性: 繁荣": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "金粉"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["金粉", 1]
		],
		"count": 1
	},
	"特性: 来个交易": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "金粉"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["金粉", 1]
		],
		"count": 1
	},
	"金 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融金", 1]
		],
		"count": 1
	},
	"金 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融金", 1]
		],
		"count": 1
	},
	"金 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融金", 1]
		],
		"count": 1
	},
	"金 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融金", 1]
		],
		"count": 1
	},
	"金 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融金", 1]
		],
		"count": 1
	},
	"金 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融金", 1]
		],
		"count": 1
	},
	"金 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融金", 1]
		],
		"count": 1
	},
	"熔融铜": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "铜粉", null],
			[null, null, null]
		],
		"ingredients": [
			["铜粉", 1]
		],
		"count": 1
	},
	"特性: 这是个脑力活": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "铜粉"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["铜粉", 1]
		],
		"count": 1
	},
	"特性: 经验传导": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "铜粉"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["铜粉", 1]
		],
		"count": 1
	},
	"特性: 新手": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "铜粉"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["铜粉", 1]
		],
		"count": 1
	},
	"特性: 暗淡": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "铜粉"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["铜粉", 1]
		],
		"count": 1
	},
	"铜 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融铜", 1]
		],
		"count": 1
	},
	"铜 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融铜", 1]
		],
		"count": 1
	},
	"铜 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融铜", 1]
		],
		"count": 1
	},
	"铜 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融铜", 1]
		],
		"count": 1
	},
	"铜 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融铜", 1]
		],
		"count": 1
	},
	"铜 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融铜", 1]
		],
		"count": 1
	},
	"铜 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融铜", 1]
		],
		"count": 1
	},
	"铜 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融铜", 1]
		],
		"count": 1
	},
	"铜 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融铜", 1]
		],
		"count": 1
	},
	"铜 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融铜", 1]
		],
		"count": 1
	},
	"铜 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融铜", 1]
		],
		"count": 1
	},
	"铜 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融铜", 1]
		],
		"count": 1
	},
	"熔融铅": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "铅粉", null],
			[null, null, null]
		],
		"ingredients": [
			["铅粉", 1]
		],
		"count": 1
	},
	"特性: 剧毒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "铅粉"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["铅粉", 1]
		],
		"count": 1
	},
	"特性: 蚂蟥": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "铅粉"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["铅粉", 1]
		],
		"count": 1
	},
	"特性: 生病了": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "铅粉"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["铅粉", 1]
		],
		"count": 1
	},
	"特性: 生病了": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "铅粉"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["铅粉", 1]
		],
		"count": 1
	},
	"铅 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融铅"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融铅", 1]
		],
		"count": 1
	},
	"铅 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融铅"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融铅", 1]
		],
		"count": 1
	},
	"铅 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融铅"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融铅", 1]
		],
		"count": 1
	},
	"铅 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融铅"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融铅", 1]
		],
		"count": 1
	},
	"铅 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融铅"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融铅", 1]
		],
		"count": 1
	},
	"铅 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融铅"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融铅", 1]
		],
		"count": 1
	},
	"铅 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融铅"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融铅", 1]
		],
		"count": 1
	},
	"铅 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融铅"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融铅", 1]
		],
		"count": 1
	},
	"铅 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融铅"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融铅", 1]
		],
		"count": 1
	},
	"铅 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融铅"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融铅", 1]
		],
		"count": 1
	},
	"铅 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融铅"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融铅", 1]
		],
		"count": 1
	},
	"铅 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融铅"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融铅", 1]
		],
		"count": 1
	},
	"熔融银": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "银粉", null],
			[null, null, null]
		],
		"ingredients": [
			["银粉", 1]
		],
		"count": 1
	},
	"特性: 附魔": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "银粉"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["银粉", 1]
		],
		"count": 1
	},
	"特性: 轻触": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "银粉"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["银粉", 1]
		],
		"count": 1
	},
	"特性: 导电": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "银粉"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["银粉", 1]
		],
		"count": 1
	},
	"特性: 附魔": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "银粉"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["银粉", 1]
		],
		"count": 1
	},
	"银 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融银"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融银", 1]
		],
		"count": 1
	},
	"银 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融银"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融银", 1]
		],
		"count": 1
	},
	"银 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融银"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融银", 1]
		],
		"count": 1
	},
	"银 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融银"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融银", 1]
		],
		"count": 1
	},
	"银 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融银"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融银", 1]
		],
		"count": 1
	},
	"银 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融银"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融银", 1]
		],
		"count": 1
	},
	"银 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融银"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融银", 1]
		],
		"count": 1
	},
	"银 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融银"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融银", 1]
		],
		"count": 1
	},
	"银 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融银"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融银", 1]
		],
		"count": 1
	},
	"银 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融银"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融银", 1]
		],
		"count": 1
	},
	"银 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融银"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融银", 1]
		],
		"count": 1
	},
	"银 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融银"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融银", 1]
		],
		"count": 1
	},
	"熔融铝": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "铝粉", null],
			[null, null, null]
		],
		"ingredients": [
			["铝粉", 1]
		],
		"count": 1
	},
	"特性: 再生资源": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "铝粉"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["铝粉", 1]
		],
		"count": 1
	},
	"特性: 柔韧": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "铝粉"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["铝粉", 1]
		],
		"count": 1
	},
	"特性: 快跑": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "铝粉"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["铝粉", 1]
		],
		"count": 1
	},
	"特性: 快速修复": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "铝粉"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["铝粉", 1]
		],
		"count": 1
	},
	"铝 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融铝"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融铝", 1]
		],
		"count": 1
	},
	"铝 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融铝"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融铝", 1]
		],
		"count": 1
	},
	"铝 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融铝"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融铝", 1]
		],
		"count": 1
	},
	"铝 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融铝"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融铝", 1]
		],
		"count": 1
	},
	"铝 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融铝"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融铝", 1]
		],
		"count": 1
	},
	"铝 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融铝"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融铝", 1]
		],
		"count": 1
	},
	"铝 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融铝"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融铝", 1]
		],
		"count": 1
	},
	"铝 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融铝"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融铝", 1]
		],
		"count": 1
	},
	"铝 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融铝"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融铝", 1]
		],
		"count": 1
	},
	"铝 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融铝"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融铝", 1]
		],
		"count": 1
	},
	"铝 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融铝"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融铝", 1]
		],
		"count": 1
	},
	"铝 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融铝"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融铝", 1]
		],
		"count": 1
	},
	"熔融锡": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "锡粉", null],
			[null, null, null]
		],
		"ingredients": [
			["锡粉", 1]
		],
		"count": 1
	},
	"特性: 幸运": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "锡粉"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["锡粉", 1]
		],
		"count": 1
	},
	"特性: 罐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "锡粉"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["锡粉", 1]
		],
		"count": 1
	},
	"特性: 抗毒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "锡粉"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["锡粉", 1]
		],
		"count": 1
	},
	"特性: 承伤": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "锡粉"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["锡粉", 1]
		],
		"count": 1
	},
	"锡 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融锡"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融锡", 1]
		],
		"count": 1
	},
	"锡 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融锡"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融锡", 1]
		],
		"count": 1
	},
	"锡 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融锡"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融锡", 1]
		],
		"count": 1
	},
	"锡 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融锡"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融锡", 1]
		],
		"count": 1
	},
	"锡 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融锡"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融锡", 1]
		],
		"count": 1
	},
	"锡 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融锡"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融锡", 1]
		],
		"count": 1
	},
	"锡 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融锡"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融锡", 1]
		],
		"count": 1
	},
	"锡 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融锡"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融锡", 1]
		],
		"count": 1
	},
	"锡 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融锡"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融锡", 1]
		],
		"count": 1
	},
	"锡 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融锡"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融锡", 1]
		],
		"count": 1
	},
	"锡 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融锡"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融锡", 1]
		],
		"count": 1
	},
	"锡 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融锡"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融锡", 1]
		],
		"count": 1
	},
	"熔融锌": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "锌粉", null],
			[null, null, null]
		],
		"ingredients": [
			["锌粉", 1]
		],
		"count": 1
	},
	"特性: 海豚的恩惠": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "锌粉"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["锌粉", 1]
		],
		"count": 1
	},
	"特性: 飘浮": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "锌粉"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["锌粉", 1]
		],
		"count": 1
	},
	"特性: 偷袭": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "锌粉"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["锌粉", 1]
		],
		"count": 1
	},
	"特性: 针灸": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "锌粉"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["锌粉", 1]
		],
		"count": 1
	},
	"锌 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融锌"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融锌", 1]
		],
		"count": 1
	},
	"锌 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融锌"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融锌", 1]
		],
		"count": 1
	},
	"锌 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融锌"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融锌", 1]
		],
		"count": 1
	},
	"锌 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融锌"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融锌", 1]
		],
		"count": 1
	},
	"锌 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融锌"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融锌", 1]
		],
		"count": 1
	},
	"锌 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融锌"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融锌", 1]
		],
		"count": 1
	},
	"锌 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融锌"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融锌", 1]
		],
		"count": 1
	},
	"锌 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融锌"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融锌", 1]
		],
		"count": 1
	},
	"锌 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融锌"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融锌", 1]
		],
		"count": 1
	},
	"锌 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融锌"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融锌", 1]
		],
		"count": 1
	},
	"锌 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融锌"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融锌", 1]
		],
		"count": 1
	},
	"锌 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融锌"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融锌", 1]
		],
		"count": 1
	},
	"熔融镁": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "镁", null],
			[null, null, null]
		],
		"ingredients": [
			["镁", 1]
		],
		"count": 1
	},
	"特性: 燃烧": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "镁"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["镁", 1]
		],
		"count": 1
	},
	"特性: 磁铁": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "镁"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["镁", 1]
		],
		"count": 1
	},
	"特性: 快溜": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "镁"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["镁", 1]
		],
		"count": 1
	},
	"特性: 镁地™夜视": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "镁"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["镁", 1]
		],
		"count": 1
	},
	"镁 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融镁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融镁", 1]
		],
		"count": 1
	},
	"镁 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融镁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融镁", 1]
		],
		"count": 1
	},
	"镁 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融镁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融镁", 1]
		],
		"count": 1
	},
	"镁 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融镁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融镁", 1]
		],
		"count": 1
	},
	"镁 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融镁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融镁", 1]
		],
		"count": 1
	},
	"镁 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融镁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融镁", 1]
		],
		"count": 1
	},
	"镁 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融镁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融镁", 1]
		],
		"count": 1
	},
	"镁 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融镁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融镁", 1]
		],
		"count": 1
	},
	"镁 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融镁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融镁", 1]
		],
		"count": 1
	},
	"镁 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融镁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融镁", 1]
		],
		"count": 1
	},
	"镁 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融镁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融镁", 1]
		],
		"count": 1
	},
	"镁 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融镁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融镁", 1]
		],
		"count": 1
	},
	"熔融煤": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "煤炭", null],
			[null, null, null]
		],
		"ingredients": [
			["煤炭", 1]
		],
		"count": 1
	},
	"熔融钢": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "钢锭", null],
			[null, null, null]
		],
		"ingredients": [
			["钢锭", 1]
		],
		"count": 1
	},
	"熔融钢": {
		"type": "匠魂冶炼炉",
		"map": [
			["熔融铁", "熔融煤", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["熔融铁", 1],
			["熔融煤", 1]
		],
		"count": 1
	},
	"特性: 不锈钢": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "钢锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["钢锭", 1]
		],
		"count": 1
	},
	"特性: 轻量": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "钢锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["钢锭", 1]
		],
		"count": 1
	},
	"特性: 坚硬": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "钢锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["钢锭", 1]
		],
		"count": 1
	},
	"特性: 强壮": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "钢锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["钢锭", 1]
		],
		"count": 1
	},
	"钢 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融钢", 1]
		],
		"count": 1
	},
	"钢 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融钢", 1]
		],
		"count": 1
	},
	"钢 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融钢", 1]
		],
		"count": 1
	},
	"钢 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融钢", 1]
		],
		"count": 1
	},
	"钢 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融钢", 1]
		],
		"count": 1
	},
	"钢 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融钢", 1]
		],
		"count": 1
	},
	"钢 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融钢", 1]
		],
		"count": 1
	},
	"钢 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融钢", 1]
		],
		"count": 1
	},
	"钢 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融钢", 1]
		],
		"count": 1
	},
	"钢 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融钢", 1]
		],
		"count": 1
	},
	"钢 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融钢", 1]
		],
		"count": 1
	},
	"钢 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融钢", 1]
		],
		"count": 1
	},
	"熔融大马士革钢": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "大马士革钢锭", null],
			[null, null, null]
		],
		"ingredients": [
			["大马士革钢锭", 1]
		],
		"count": 1
	},
	"熔融大马士革钢": {
		"type": "匠魂冶炼炉",
		"map": [
			["熔融钢", "熔融铁", "熔融煤"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["熔融钢", 1],
			["熔融铁", 1],
			["熔融煤", 1]
		],
		"count": 1
	},
	"特性: 吸血鬼": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "大马士革钢锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["大马士革钢锭", 1]
		],
		"count": 1
	},
	"特性: 夜行者": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "大马士革钢锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["大马士革钢锭", 1]
		],
		"count": 1
	},
	"特性: 复用": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "大马士革钢锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["大马士革钢锭", 1]
		],
		"count": 1
	},
	"特性: 荆棘": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "大马士革钢锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["大马士革钢锭", 1]
		],
		"count": 1
	},
	"大马士革钢 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融大马士革钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融大马士革钢", 1]
		],
		"count": 1
	},
	"大马士革钢 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融大马士革钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融大马士革钢", 1]
		],
		"count": 1
	},
	"大马士革钢 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融大马士革钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融大马士革钢", 1]
		],
		"count": 1
	},
	"大马士革钢 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融大马士革钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融大马士革钢", 1]
		],
		"count": 1
	},
	"大马士革钢 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融大马士革钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融大马士革钢", 1]
		],
		"count": 1
	},
	"大马士革钢 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融大马士革钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融大马士革钢", 1]
		],
		"count": 1
	},
	"大马士革钢 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融大马士革钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融大马士革钢", 1]
		],
		"count": 1
	},
	"大马士革钢 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融大马士革钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融大马士革钢", 1]
		],
		"count": 1
	},
	"大马士革钢 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融大马士革钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融大马士革钢", 1]
		],
		"count": 1
	},
	"大马士革钢 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融大马士革钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融大马士革钢", 1]
		],
		"count": 1
	},
	"大马士革钢 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融大马士革钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融大马士革钢", 1]
		],
		"count": 1
	},
	"大马士革钢 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融大马士革钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融大马士革钢", 1]
		],
		"count": 1
	},
	"熔融硬铝": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "硬铝锭", null],
			[null, null, null]
		],
		"ingredients": [
			["硬铝锭", 1]
		],
		"count": 1
	},
	"熔融硬铝": {
		"type": "匠魂冶炼炉",
		"map": [
			["熔融铝", "熔融铜", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["熔融铝", 1],
			["熔融铜", 1]
		],
		"count": 1
	},
	"特性: 耐用": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "硬铝锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["硬铝锭", 1]
		],
		"count": 1
	},
	"特性: 完全修复": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "硬铝锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["硬铝锭", 1]
		],
		"count": 1
	},
	"特性: 耐用": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "硬铝锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["硬铝锭", 1]
		],
		"count": 1
	},
	"特性: 减震剂": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "硬铝锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["硬铝锭", 1]
		],
		"count": 1
	},
	"硬铝 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融硬铝"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融硬铝", 1]
		],
		"count": 1
	},
	"硬铝 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融硬铝"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融硬铝", 1]
		],
		"count": 1
	},
	"硬铝 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融硬铝"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融硬铝", 1]
		],
		"count": 1
	},
	"硬铝 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融硬铝"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融硬铝", 1]
		],
		"count": 1
	},
	"硬铝 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融硬铝"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融硬铝", 1]
		],
		"count": 1
	},
	"硬铝 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融硬铝"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融硬铝", 1]
		],
		"count": 1
	},
	"硬铝 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融硬铝"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融硬铝", 1]
		],
		"count": 1
	},
	"硬铝 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融硬铝"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融硬铝", 1]
		],
		"count": 1
	},
	"硬铝 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融硬铝"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融硬铝", 1]
		],
		"count": 1
	},
	"硬铝 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融硬铝"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融硬铝", 1]
		],
		"count": 1
	},
	"硬铝 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融硬铝"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融硬铝", 1]
		],
		"count": 1
	},
	"硬铝 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融硬铝"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融硬铝", 1]
		],
		"count": 1
	},
	"熔融青铜": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "青铜锭", null],
			[null, null, null]
		],
		"ingredients": [
			["青铜锭", 1]
		],
		"count": 1
	},
	"熔融青铜": {
		"type": "匠魂冶炼炉",
		"map": [
			["熔融铜", "熔融锡", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["熔融铜", 1],
			["熔融锡", 1]
		],
		"count": 1
	},
	"特性: 防火": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "青铜锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["青铜锭", 1]
		],
		"count": 1
	},
	"特性: 不对劲": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "青铜锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["青铜锭", 1]
		],
		"count": 1
	},
	"特性: 农民": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "青铜锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["青铜锭", 1]
		],
		"count": 1
	},
	"特性: 脆弱": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "青铜锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["青铜锭", 1]
		],
		"count": 1
	},
	"青铜 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融青铜", 1]
		],
		"count": 1
	},
	"青铜 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融青铜", 1]
		],
		"count": 1
	},
	"青铜 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融青铜", 1]
		],
		"count": 1
	},
	"青铜 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融青铜", 1]
		],
		"count": 1
	},
	"青铜 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融青铜", 1]
		],
		"count": 1
	},
	"青铜 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融青铜", 1]
		],
		"count": 1
	},
	"青铜 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融青铜", 1]
		],
		"count": 1
	},
	"青铜 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融青铜", 1]
		],
		"count": 1
	},
	"青铜 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融青铜", 1]
		],
		"count": 1
	},
	"青铜 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融青铜", 1]
		],
		"count": 1
	},
	"青铜 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融青铜", 1]
		],
		"count": 1
	},
	"青铜 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融青铜", 1]
		],
		"count": 1
	},
	"熔融铝青铜": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "铝青铜锭", null],
			[null, null, null]
		],
		"ingredients": [
			["铝青铜锭", 1]
		],
		"count": 1
	},
	"熔融铝青铜": {
		"type": "匠魂冶炼炉",
		"map": [
			["熔融铝", "熔融青铜", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["熔融铝", 1],
			["熔融青铜", 1]
		],
		"count": 1
	},
	"特性: 锋利 2": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "铝青铜锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["铝青铜锭", 1]
		],
		"count": 1
	},
	"特性: 脆弱": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "铝青铜锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["铝青铜锭", 1]
		],
		"count": 1
	},
	"特性: 鲜花": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "铝青铜锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["铝青铜锭", 1]
		],
		"count": 1
	},
	"特性: 弹射!": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "铝青铜锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["铝青铜锭", 1]
		],
		"count": 1
	},
	"铝青铜 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融铝青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融铝青铜", 1]
		],
		"count": 1
	},
	"铝青铜 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融铝青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融铝青铜", 1]
		],
		"count": 1
	},
	"铝青铜 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融铝青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融铝青铜", 1]
		],
		"count": 1
	},
	"铝青铜 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融铝青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融铝青铜", 1]
		],
		"count": 1
	},
	"铝青铜 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融铝青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融铝青铜", 1]
		],
		"count": 1
	},
	"铝青铜 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融铝青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融铝青铜", 1]
		],
		"count": 1
	},
	"铝青铜 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融铝青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融铝青铜", 1]
		],
		"count": 1
	},
	"铝青铜 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融铝青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融铝青铜", 1]
		],
		"count": 1
	},
	"铝青铜 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融铝青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融铝青铜", 1]
		],
		"count": 1
	},
	"铝青铜 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融铝青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融铝青铜", 1]
		],
		"count": 1
	},
	"铝青铜 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融铝青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融铝青铜", 1]
		],
		"count": 1
	},
	"铝青铜 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融铝青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融铝青铜", 1]
		],
		"count": 1
	},
	"熔融硬化金属": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "硬化金属", null],
			[null, null, null]
		],
		"ingredients": [
			["硬化金属", 1]
		],
		"count": 1
	},
	"熔融硬化金属": {
		"type": "匠魂冶炼炉",
		"map": [
			["熔融铝青铜", "熔融硬铝", "熔融大马士革钢"],
			["熔融煤", null, null],
			[null, null, null]
		],
		"ingredients": [
			["熔融铝青铜", 1],
			["熔融硬铝", 1],
			["熔融大马士革钢", 1],
			["熔融煤", 1]
		],
		"count": 1
	},
	"特性: 击退": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "硬化金属"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["硬化金属", 1]
		],
		"count": 1
	},
	"特性: 坚韧": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "硬化金属"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["硬化金属", 1]
		],
		"count": 1
	},
	"特性: 地精": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "硬化金属"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["硬化金属", 1]
		],
		"count": 1
	},
	"硬化金属 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融硬化金属"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融硬化金属", 1]
		],
		"count": 1
	},
	"硬化金属 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融硬化金属"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融硬化金属", 1]
		],
		"count": 1
	},
	"硬化金属 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融硬化金属"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融硬化金属", 1]
		],
		"count": 1
	},
	"硬化金属 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融硬化金属"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融硬化金属", 1]
		],
		"count": 1
	},
	"硬化金属 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融硬化金属"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融硬化金属", 1]
		],
		"count": 1
	},
	"硬化金属 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融硬化金属"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融硬化金属", 1]
		],
		"count": 1
	},
	"硬化金属 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融硬化金属"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融硬化金属", 1]
		],
		"count": 1
	},
	"硬化金属 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融硬化金属"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融硬化金属", 1]
		],
		"count": 1
	},
	"硬化金属 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融硬化金属"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融硬化金属", 1]
		],
		"count": 1
	},
	"硬化金属 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融硬化金属"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融硬化金属", 1]
		],
		"count": 1
	},
	"硬化金属 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融硬化金属"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融硬化金属", 1]
		],
		"count": 1
	},
	"熔融科林斯青铜": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "科林斯青铜锭", null],
			[null, null, null]
		],
		"ingredients": [
			["科林斯青铜锭", 1]
		],
		"count": 1
	},
	"熔融科林斯青铜": {
		"type": "匠魂冶炼炉",
		"map": [
			["熔融青铜", "熔融金", "熔融银"],
			["熔融铜", null, null],
			[null, null, null]
		],
		"ingredients": [
			["熔融青铜", 1],
			["熔融金", 1],
			["熔融银", 1],
			["熔融铜", 1]
		],
		"count": 1
	},
	"特性: 炽热": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "科林斯青铜锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["科林斯青铜锭", 1]
		],
		"count": 1
	},
	"特性: 烫烫烫": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "科林斯青铜锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["科林斯青铜锭", 1]
		],
		"count": 1
	},
	"特性: 高温": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "科林斯青铜锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["科林斯青铜锭", 1]
		],
		"count": 1
	},
	"特性: 温血": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "科林斯青铜锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["科林斯青铜锭", 1]
		],
		"count": 1
	},
	"科林斯青铜 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融科林斯青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融科林斯青铜", 1]
		],
		"count": 1
	},
	"科林斯青铜 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融科林斯青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融科林斯青铜", 1]
		],
		"count": 1
	},
	"科林斯青铜 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融科林斯青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融科林斯青铜", 1]
		],
		"count": 1
	},
	"科林斯青铜 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融科林斯青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融科林斯青铜", 1]
		],
		"count": 1
	},
	"科林斯青铜 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融科林斯青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融科林斯青铜", 1]
		],
		"count": 1
	},
	"科林斯青铜 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融科林斯青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融科林斯青铜", 1]
		],
		"count": 1
	},
	"科林斯青铜 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融科林斯青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融科林斯青铜", 1]
		],
		"count": 1
	},
	"科林斯青铜 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融科林斯青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融科林斯青铜", 1]
		],
		"count": 1
	},
	"科林斯青铜 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融科林斯青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融科林斯青铜", 1]
		],
		"count": 1
	},
	"科林斯青铜 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融科林斯青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融科林斯青铜", 1]
		],
		"count": 1
	},
	"科林斯青铜 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融科林斯青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融科林斯青铜", 1]
		],
		"count": 1
	},
	"科林斯青铜 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融科林斯青铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融科林斯青铜", 1]
		],
		"count": 1
	},
	"熔融焊锡": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "焊锡锭", null],
			[null, null, null]
		],
		"ingredients": [
			["焊锡锭", 1]
		],
		"count": 1
	},
	"熔融焊锡": {
		"type": "匠魂冶炼炉",
		"map": [
			["熔融铅", "熔融锡", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["熔融铅", 1],
			["熔融锡", 1]
		],
		"count": 1
	},
	"特性: 隐身": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "焊锡锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["焊锡锭", 1]
		],
		"count": 1
	},
	"特性: 绑定": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "焊锡锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["焊锡锭", 1]
		],
		"count": 1
	},
	"特性: 软着陆": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "焊锡锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["焊锡锭", 1]
		],
		"count": 1
	},
	"特性: 绑定": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "焊锡锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["焊锡锭", 1]
		],
		"count": 1
	},
	"焊锡 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融焊锡"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融焊锡", 1]
		],
		"count": 1
	},
	"焊锡 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融焊锡"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融焊锡", 1]
		],
		"count": 1
	},
	"焊锡 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融焊锡"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融焊锡", 1]
		],
		"count": 1
	},
	"焊锡 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融焊锡"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融焊锡", 1]
		],
		"count": 1
	},
	"焊锡 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融焊锡"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融焊锡", 1]
		],
		"count": 1
	},
	"焊锡 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融焊锡"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融焊锡", 1]
		],
		"count": 1
	},
	"焊锡 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融焊锡"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融焊锡", 1]
		],
		"count": 1
	},
	"焊锡 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融焊锡"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融焊锡", 1]
		],
		"count": 1
	},
	"焊锡 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融焊锡"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融焊锡", 1]
		],
		"count": 1
	},
	"焊锡 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融焊锡"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融焊锡", 1]
		],
		"count": 1
	},
	"焊锡 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融焊锡"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融焊锡", 1]
		],
		"count": 1
	},
	"焊锡 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融焊锡"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融焊锡", 1]
		],
		"count": 1
	},
	"熔融银铜合金": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "银铜合金锭", null],
			[null, null, null]
		],
		"ingredients": [
			["银铜合金锭", 1]
		],
		"count": 1
	},
	"熔融银铜合金": {
		"type": "匠魂冶炼炉",
		"map": [
			["熔融银", "熔融铜", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["熔融银", 1],
			["熔融铜", 1]
		],
		"count": 1
	},
	"特性: 速掘": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "银铜合金锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["银铜合金锭", 1]
		],
		"count": 1
	},
	"特性: 弹簧": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "银铜合金锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["银铜合金锭", 1]
		],
		"count": 1
	},
	"特性: 天使降临": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "银铜合金锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["银铜合金锭", 1]
		],
		"count": 1
	},
	"特性: 热导体": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "银铜合金锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["银铜合金锭", 1]
		],
		"count": 1
	},
	"银铜合金 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融银铜合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融银铜合金", 1]
		],
		"count": 1
	},
	"银铜合金 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融银铜合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融银铜合金", 1]
		],
		"count": 1
	},
	"银铜合金 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融银铜合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融银铜合金", 1]
		],
		"count": 1
	},
	"银铜合金 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融银铜合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融银铜合金", 1]
		],
		"count": 1
	},
	"银铜合金 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融银铜合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融银铜合金", 1]
		],
		"count": 1
	},
	"银铜合金 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融银铜合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融银铜合金", 1]
		],
		"count": 1
	},
	"银铜合金 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融银铜合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融银铜合金", 1]
		],
		"count": 1
	},
	"银铜合金 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融银铜合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融银铜合金", 1]
		],
		"count": 1
	},
	"银铜合金 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融银铜合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融银铜合金", 1]
		],
		"count": 1
	},
	"银铜合金 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融银铜合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融银铜合金", 1]
		],
		"count": 1
	},
	"银铜合金 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融银铜合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融银铜合金", 1]
		],
		"count": 1
	},
	"银铜合金 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融银铜合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融银铜合金", 1]
		],
		"count": 1
	},
	"熔融黄铜": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "黄铜锭", null],
			[null, null, null]
		],
		"ingredients": [
			["黄铜锭", 1]
		],
		"count": 1
	},
	"熔融黄铜": {
		"type": "匠魂冶炼炉",
		"map": [
			["熔融铜", "熔融锌", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["熔融铜", 1],
			["熔融锌", 1]
		],
		"count": 1
	},
	"特性: 倒霉鬼": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "黄铜锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["黄铜锭", 1]
		],
		"count": 1
	},
	"特性: 氧气": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "黄铜锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["黄铜锭", 1]
		],
		"count": 1
	},
	"特性: 绑定环": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "黄铜锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["黄铜锭", 1]
		],
		"count": 1
	},
	"特性: 崩!撤!卖!溜!": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "黄铜锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["黄铜锭", 1]
		],
		"count": 1
	},
	"黄铜 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融黄铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融黄铜", 1]
		],
		"count": 1
	},
	"黄铜 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融黄铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融黄铜", 1]
		],
		"count": 1
	},
	"黄铜 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融黄铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融黄铜", 1]
		],
		"count": 1
	},
	"黄铜 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融黄铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融黄铜", 1]
		],
		"count": 1
	},
	"黄铜 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融黄铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融黄铜", 1]
		],
		"count": 1
	},
	"黄铜 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融黄铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融黄铜", 1]
		],
		"count": 1
	},
	"黄铜 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融黄铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融黄铜", 1]
		],
		"count": 1
	},
	"黄铜 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融黄铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融黄铜", 1]
		],
		"count": 1
	},
	"黄铜 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融黄铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融黄铜", 1]
		],
		"count": 1
	},
	"黄铜 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融黄铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融黄铜", 1]
		],
		"count": 1
	},
	"黄铜 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融黄铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融黄铜", 1]
		],
		"count": 1
	},
	"黄铜 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融黄铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融黄铜", 1]
		],
		"count": 1
	},
	"熔融铝黄铜": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "铝黄铜锭", null],
			[null, null, null]
		],
		"ingredients": [
			["铝黄铜锭", 1]
		],
		"count": 1
	},
	"熔融铝黄铜": {
		"type": "匠魂冶炼炉",
		"map": [
			["熔融黄铜", "熔融铝", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["熔融黄铜", 1],
			["熔融铝", 1]
		],
		"count": 1
	},
	"特性: 阿布拉": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "铝黄铜锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["铝黄铜锭", 1]
		],
		"count": 1
	},
	"特性: 好学": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "铝黄铜锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["铝黄铜锭", 1]
		],
		"count": 1
	},
	"特性: 巫师": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "铝黄铜锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["铝黄铜锭", 1]
		],
		"count": 1
	},
	"特性: 逃脱": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "铝黄铜锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["铝黄铜锭", 1]
		],
		"count": 1
	},
	"铝黄铜 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融铝黄铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融铝黄铜", 1]
		],
		"count": 1
	},
	"铝黄铜 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融铝黄铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融铝黄铜", 1]
		],
		"count": 1
	},
	"铝黄铜 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融铝黄铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融铝黄铜", 1]
		],
		"count": 1
	},
	"铝黄铜 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融铝黄铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融铝黄铜", 1]
		],
		"count": 1
	},
	"铝黄铜 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融铝黄铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融铝黄铜", 1]
		],
		"count": 1
	},
	"铝黄铜 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融铝黄铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融铝黄铜", 1]
		],
		"count": 1
	},
	"铝黄铜 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融铝黄铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融铝黄铜", 1]
		],
		"count": 1
	},
	"铝黄铜 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融铝黄铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融铝黄铜", 1]
		],
		"count": 1
	},
	"铝黄铜 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融铝黄铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融铝黄铜", 1]
		],
		"count": 1
	},
	"铝黄铜 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融铝黄铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融铝黄铜", 1]
		],
		"count": 1
	},
	"铝黄铜 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融铝黄铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融铝黄铜", 1]
		],
		"count": 1
	},
	"铝黄铜 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融铝黄铜"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融铝黄铜", 1]
		],
		"count": 1
	},
	"熔融镍": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "镍锭", null],
			[null, null, null]
		],
		"ingredients": [
			["镍锭", 1]
		],
		"count": 1
	},
	"熔融镍": {
		"type": "匠魂冶炼炉",
		"map": [
			["熔融铁", "熔融铜", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["熔融铁", 1],
			["熔融铜", 1]
		],
		"count": 1
	},
	"特性: 带电(负极-)": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "镍锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["镍锭", 1]
		],
		"count": 1
	},
	"特性: 带电(负极-)": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "镍锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["镍锭", 1]
		],
		"count": 1
	},
	"特性: 磁铁(负极-)": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "镍锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["镍锭", 1]
		],
		"count": 1
	},
	"特性: 磁铁(负极-)": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "镍锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["镍锭", 1]
		],
		"count": 1
	},
	"镍 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融镍"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融镍", 1]
		],
		"count": 1
	},
	"镍 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融镍"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融镍", 1]
		],
		"count": 1
	},
	"镍 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融镍"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融镍", 1]
		],
		"count": 1
	},
	"镍 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融镍"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融镍", 1]
		],
		"count": 1
	},
	"镍 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融镍"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融镍", 1]
		],
		"count": 1
	},
	"镍 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融镍"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融镍", 1]
		],
		"count": 1
	},
	"镍 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融镍"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融镍", 1]
		],
		"count": 1
	},
	"镍 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融镍"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融镍", 1]
		],
		"count": 1
	},
	"镍 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融镍"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融镍", 1]
		],
		"count": 1
	},
	"镍 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融镍"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融镍", 1]
		],
		"count": 1
	},
	"镍 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融镍"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融镍", 1]
		],
		"count": 1
	},
	"镍 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融镍"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融镍", 1]
		],
		"count": 1
	},
	"熔融钴": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "钴锭", null],
			[null, null, null]
		],
		"ingredients": [
			["钴锭", 1]
		],
		"count": 1
	},
	"熔融钴": {
		"type": "匠魂冶炼炉",
		"map": [
			["熔融铁", "熔融镍", "熔融铜"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["熔融铁", 1],
			["熔融镍", 1],
			["熔融铜", 1]
		],
		"count": 1
	},
	"特性: 带电(正极+)": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "钴锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["钴锭", 1]
		],
		"count": 1
	},
	"特性: 带电(正极+)": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "钴锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["钴锭", 1]
		],
		"count": 1
	},
	"特性: 磁铁(正极+)": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "钴锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["钴锭", 1]
		],
		"count": 1
	},
	"特性: 磁铁(正极+)": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "钴锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["钴锭", 1]
		],
		"count": 1
	},
	"钴 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融钴"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融钴", 1]
		],
		"count": 1
	},
	"钴 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融钴"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融钴", 1]
		],
		"count": 1
	},
	"钴 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融钴"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融钴", 1]
		],
		"count": 1
	},
	"钴 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融钴"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融钴", 1]
		],
		"count": 1
	},
	"钴 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融钴"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融钴", 1]
		],
		"count": 1
	},
	"钴 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融钴"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融钴", 1]
		],
		"count": 1
	},
	"钴 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融钴"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融钴", 1]
		],
		"count": 1
	},
	"钴 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融钴"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融钴", 1]
		],
		"count": 1
	},
	"钴 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融钴"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融钴", 1]
		],
		"count": 1
	},
	"钴 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融钴"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融钴", 1]
		],
		"count": 1
	},
	"钴 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融钴"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融钴", 1]
		],
		"count": 1
	},
	"钴 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融钴"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融钴", 1]
		],
		"count": 1
	},
	"熔融强化合金": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "强化合金锭", null],
			[null, null, null]
		],
		"ingredients": [
			["强化合金锭", 1]
		],
		"count": 1
	},
	"熔融强化合金": {
		"type": "匠魂冶炼炉",
		"map": [
			["熔融大马士革钢", "熔融硬化金属", "熔融科林斯青铜"],
			["熔融焊锡", "熔融银铜合金", "熔融金"],
			[null, null, null]
		],
		"ingredients": [
			["熔融大马士革钢", 1],
			["熔融硬化金属", 1],
			["熔融科林斯青铜", 1],
			["熔融焊锡", 1],
			["熔融银铜合金", 1],
			["熔融金", 1]
		],
		"count": 1
	},
	"特性: 锤子": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "强化合金锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["强化合金锭", 1]
		],
		"count": 1
	},
	"特性: 双倍强化": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "强化合金锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["强化合金锭", 1]
		],
		"count": 1
	},
	"特性: 双倍强化": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "强化合金锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["强化合金锭", 1]
		],
		"count": 1
	},
	"特性: 防凋零": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "强化合金锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["强化合金锭", 1]
		],
		"count": 1
	},
	"强化合金 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融强化合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融强化合金", 1]
		],
		"count": 1
	},
	"强化合金 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融强化合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融强化合金", 1]
		],
		"count": 1
	},
	"强化合金 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融强化合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融强化合金", 1]
		],
		"count": 1
	},
	"强化合金 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融强化合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融强化合金", 1]
		],
		"count": 1
	},
	"强化合金 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融强化合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融强化合金", 1]
		],
		"count": 1
	},
	"强化合金 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融强化合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融强化合金", 1]
		],
		"count": 1
	},
	"强化合金 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融强化合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融强化合金", 1]
		],
		"count": 1
	},
	"强化合金 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融强化合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融强化合金", 1]
		],
		"count": 1
	},
	"强化合金 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融强化合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融强化合金", 1]
		],
		"count": 1
	},
	"强化合金 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融强化合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融强化合金", 1]
		],
		"count": 1
	},
	"强化合金 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融强化合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融强化合金", 1]
		],
		"count": 1
	},
	"强化合金 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融强化合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融强化合金", 1]
		],
		"count": 1
	},
	"特性: 又不是不能用": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 绑定结", null, "线"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 绑定结", 1],
			["线", 1]
		],
		"count": 1
	},
	"特性: 又不是不能用": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 护身软甲", null, "线"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 护身软甲", 1],
			["线", 1]
		],
		"count": 1
	},
	"线 绑定结": {
		"type": "匠魂合成站",
		"map": [
			["线", null, "线"],
			[null, "线", null],
			["线", null, "线"]
		],
		"ingredients": [
			["线", 5]
		],
		"count": 1
	},
	"线 护身软甲": {
		"type": "匠魂合成站",
		"map": [
			[null, "线", "线"],
			["线", null, "线"],
			["线", "线", null]
		],
		"ingredients": [
			["线", 6]
		],
		"count": 1
	},
	"特性: 生长": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 绑定结", null, "藤蔓"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 绑定结", 1],
			["藤蔓", 1]
		],
		"count": 1
	},
	"特性: 生长": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 护身软甲", null, "藤蔓"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 护身软甲", 1],
			["藤蔓", 1]
		],
		"count": 1
	},
	"藤蔓 绑定结": {
		"type": "匠魂合成站",
		"map": [
			["藤蔓", null, "藤蔓"],
			[null, "藤蔓", null],
			["藤蔓", null, "藤蔓"]
		],
		"ingredients": [
			["藤蔓", 5]
		],
		"count": 1
	},
	"藤蔓 护身软甲": {
		"type": "匠魂合成站",
		"map": [
			[null, "藤蔓", "藤蔓"],
			["藤蔓", null, "藤蔓"],
			["藤蔓", "藤蔓", null]
		],
		"ingredients": [
			["藤蔓", 6]
		],
		"count": 1
	},
	"特性: 腐烂": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 绑定结", null, "绯红菌索"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 绑定结", 1],
			["绯红菌索", 1]
		],
		"count": 1
	},
	"特性: 腐烂": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 护身软甲", null, "绯红菌索"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 护身软甲", 1],
			["绯红菌索", 1]
		],
		"count": 1
	},
	"绯红菌索 绑定结": {
		"type": "匠魂合成站",
		"map": [
			["绯红菌索", null, "绯红菌索"],
			[null, "绯红菌索", null],
			["绯红菌索", null, "绯红菌索"]
		],
		"ingredients": [
			["绯红菌索", 5]
		],
		"count": 1
	},
	"绯红菌索 护身软甲": {
		"type": "匠魂合成站",
		"map": [
			[null, "绯红菌索", "绯红菌索"],
			["绯红菌索", null, "绯红菌索"],
			["绯红菌索", "绯红菌索", null]
		],
		"ingredients": [
			["绯红菌索", 6]
		],
		"count": 1
	},
	"特性: 恢复": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 绑定结", null, "诡异菌索"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 绑定结", 1],
			["诡异菌索", 1]
		],
		"count": 1
	},
	"特性: 恢复": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 护身软甲", null, "诡异菌索"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 护身软甲", 1],
			["诡异菌索", 1]
		],
		"count": 1
	},
	"诡异菌索 绑定结": {
		"type": "匠魂合成站",
		"map": [
			["诡异菌索", null, "诡异菌索"],
			[null, "诡异菌索", null],
			["诡异菌索", null, "诡异菌索"]
		],
		"ingredients": [
			["诡异菌索", 5]
		],
		"count": 1
	},
	"诡异菌索 护身软甲": {
		"type": "匠魂合成站",
		"map": [
			[null, "诡异菌索", "诡异菌索"],
			["诡异菌索", null, "诡异菌索"],
			["诡异菌索", "诡异菌索", null]
		],
		"ingredients": [
			["诡异菌索", 6]
		],
		"count": 1
	},
	"特性: 不祥之兆": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 绑定结", null, "垂泪藤"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 绑定结", 1],
			["垂泪藤", 1]
		],
		"count": 1
	},
	"特性: 不祥之兆": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 护身软甲", null, "垂泪藤"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 护身软甲", 1],
			["垂泪藤", 1]
		],
		"count": 1
	},
	"垂泪藤 绑定结": {
		"type": "匠魂合成站",
		"map": [
			["垂泪藤", null, "垂泪藤"],
			[null, "垂泪藤", null],
			["垂泪藤", null, "垂泪藤"]
		],
		"ingredients": [
			["垂泪藤", 5]
		],
		"count": 1
	},
	"垂泪藤 护身软甲": {
		"type": "匠魂合成站",
		"map": [
			[null, "垂泪藤", "垂泪藤"],
			["垂泪藤", null, "垂泪藤"],
			["垂泪藤", "垂泪藤", null]
		],
		"ingredients": [
			["垂泪藤", 6]
		],
		"count": 1
	},
	"特性: 吸引": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 绑定结", null, "缠怨藤"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 绑定结", 1],
			["缠怨藤", 1]
		],
		"count": 1
	},
	"特性: 吸引": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 护身软甲", null, "缠怨藤"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 护身软甲", 1],
			["缠怨藤", 1]
		],
		"count": 1
	},
	"缠怨藤 绑定结": {
		"type": "匠魂合成站",
		"map": [
			["缠怨藤", null, "缠怨藤"],
			[null, "缠怨藤", null],
			["缠怨藤", null, "缠怨藤"]
		],
		"ingredients": [
			["缠怨藤", 5]
		],
		"count": 1
	},
	"缠怨藤 护身软甲": {
		"type": "匠魂合成站",
		"map": [
			[null, "缠怨藤", "缠怨藤"],
			["缠怨藤", null, "缠怨藤"],
			["缠怨藤", "缠怨藤", null]
		],
		"ingredients": [
			["缠怨藤", 6]
		],
		"count": 1
	},
	"熔融粘液": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "黏液球", null],
			[null, null, null]
		],
		"ingredients": [
			["黏液球", 1]
		],
		"count": 1
	},
	"特性: 弹性": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 绑定结", null, "黏液球"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 绑定结", 1],
			["黏液球", 1]
		],
		"count": 1
	},
	"特性: 弹性": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 护身软甲", null, "黏液球"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 护身软甲", 1],
			["黏液球", 1]
		],
		"count": 1
	},
	"粘液 绑定结": {
		"type": "匠魂合成站",
		"map": [
			["黏液球", null, "黏液球"],
			[null, "黏液球", null],
			["黏液球", null, "黏液球"]
		],
		"ingredients": [
			["黏液球", 5]
		],
		"count": 1
	},
	"粘液 护身软甲": {
		"type": "匠魂合成站",
		"map": [
			[null, "黏液球", "黏液球"],
			["黏液球", null, "黏液球"],
			["黏液球", "黏液球", null]
		],
		"ingredients": [
			["黏液球", 6]
		],
		"count": 1
	},
	"熔融红石": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "红石粉", null],
			[null, null, null]
		],
		"ingredients": [
			["红石粉", 1]
		],
		"count": 1
	},
	"熔融硅": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "硅", null],
			[null, null, null]
		],
		"ingredients": [
			["硅", 1]
		],
		"count": 1
	},
	"特性: 缓慢学习": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 绑定结", null, "硅"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 绑定结", 1],
			["硅", 1]
		],
		"count": 1
	},
	"特性: 缓慢学习": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 护身软甲", null, "硅"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 护身软甲", 1],
			["硅", 1]
		],
		"count": 1
	},
	"硅 绑定结": {
		"type": "匠魂合成站",
		"map": [
			["硅", null, "硅"],
			[null, "硅", null],
			["硅", null, "硅"]
		],
		"ingredients": [
			["硅", 5]
		],
		"count": 1
	},
	"硅 护身软甲": {
		"type": "匠魂合成站",
		"map": [
			[null, "硅", "硅"],
			["硅", null, "硅"],
			["硅", "硅", null]
		],
		"ingredients": [
			["硅", 6]
		],
		"count": 1
	},
	"特性: 厚皮革": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 绑定结", null, "皮革"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 绑定结", 1],
			["皮革", 1]
		],
		"count": 1
	},
	"特性: 厚皮革": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 护身软甲", null, "皮革"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 护身软甲", 1],
			["皮革", 1]
		],
		"count": 1
	},
	"皮革 绑定结": {
		"type": "匠魂合成站",
		"map": [
			["皮革", null, "皮革"],
			[null, "皮革", null],
			["皮革", null, "皮革"]
		],
		"ingredients": [
			["皮革", 5]
		],
		"count": 1
	},
	"皮革 护身软甲": {
		"type": "匠魂合成站",
		"map": [
			[null, "皮革", "皮革"],
			["皮革", null, "皮革"],
			["皮革", "皮革", null]
		],
		"ingredients": [
			["皮革", 6]
		],
		"count": 1
	},
	"熔融硅铁": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "硅铁", null],
			[null, null, null]
		],
		"ingredients": [
			["硅铁", 1]
		],
		"count": 1
	},
	"熔融硅铁": {
		"type": "匠魂冶炼炉",
		"map": [
			["熔融铁", "熔融硅", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["熔融铁", 1],
			["熔融硅", 1]
		],
		"count": 1
	},
	"特性: 氢气": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "硅铁"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["硅铁", 1]
		],
		"count": 1
	},
	"特性: 太阳能": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "硅铁"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["硅铁", 1]
		],
		"count": 1
	},
	"特性: 魔童": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "硅铁"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["硅铁", 1]
		],
		"count": 1
	},
	"硅铁 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融硅铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融硅铁", 1]
		],
		"count": 1
	},
	"硅铁 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融硅铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融硅铁", 1]
		],
		"count": 1
	},
	"硅铁 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融硅铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融硅铁", 1]
		],
		"count": 1
	},
	"硅铁 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融硅铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融硅铁", 1]
		],
		"count": 1
	},
	"硅铁 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融硅铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融硅铁", 1]
		],
		"count": 1
	},
	"硅铁 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融硅铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融硅铁", 1]
		],
		"count": 1
	},
	"硅铁 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融硅铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融硅铁", 1]
		],
		"count": 1
	},
	"硅铁 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融硅铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融硅铁", 1]
		],
		"count": 1
	},
	"硅铁 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融硅铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融硅铁", 1]
		],
		"count": 1
	},
	"硅铁 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融硅铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融硅铁", 1]
		],
		"count": 1
	},
	"硅铁 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融硅铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融硅铁", 1]
		],
		"count": 1
	},
	"熔融红石合金": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "红石合金锭", null],
			[null, null, null]
		],
		"ingredients": [
			["红石合金锭", 1]
		],
		"count": 1
	},
	"熔融红石合金": {
		"type": "匠魂冶炼炉",
		"map": [
			["熔融红石", "熔融硅铁", "熔融硬化金属"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["熔融红石", 1],
			["熔融硅铁", 1],
			["熔融硬化金属", 1]
		],
		"count": 1
	},
	"特性: 电棍": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "红石合金锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["红石合金锭", 1]
		],
		"count": 1
	},
	"特性: 充能": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "红石合金锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["红石合金锭", 1]
		],
		"count": 1
	},
	"特性: 谁还要压力板?": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "红石合金锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["红石合金锭", 1]
		],
		"count": 1
	},
	"红石合金 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融红石合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融红石合金", 1]
		],
		"count": 1
	},
	"红石合金 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融红石合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融红石合金", 1]
		],
		"count": 1
	},
	"红石合金 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融红石合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融红石合金", 1]
		],
		"count": 1
	},
	"红石合金 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融红石合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融红石合金", 1]
		],
		"count": 1
	},
	"红石合金 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融红石合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融红石合金", 1]
		],
		"count": 1
	},
	"红石合金 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融红石合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融红石合金", 1]
		],
		"count": 1
	},
	"红石合金 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融红石合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融红石合金", 1]
		],
		"count": 1
	},
	"熔融钻石": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "钻石", null],
			[null, null, null]
		],
		"ingredients": [
			["钻石", 1]
		],
		"count": 1
	},
	"熔融Boomer合金": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "Boomer合金锭", null],
			[null, null, null]
		],
		"ingredients": [
			["Boomer合金锭", 1]
		],
		"count": 1
	},
	"熔融Boomer合金": {
		"type": "匠魂冶炼炉",
		"map": [
			["熔融强化合金", "熔融科林斯青铜", "熔融硬化金属"],
			["熔融铜", null, null],
			[null, null, null]
		],
		"ingredients": [
			["熔融强化合金", 1],
			["熔融科林斯青铜", 1],
			["熔融硬化金属", 1],
			["熔融铜", 1]
		],
		"count": 1
	},
	"特性: 梯子模拟器™": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "Boomer合金锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["Boomer合金锭", 1]
		],
		"count": 1
	},
	"特性: Go Boomer": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "Boomer合金锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["Boomer合金锭", 1]
		],
		"count": 1
	},
	"Boomer合金 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融Boomer合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融Boomer合金", 1]
		],
		"count": 1
	},
	"Boomer合金 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融Boomer合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融Boomer合金", 1]
		],
		"count": 1
	},
	"Boomer合金 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融Boomer合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融Boomer合金", 1]
		],
		"count": 1
	},
	"Boomer合金 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融Boomer合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融Boomer合金", 1]
		],
		"count": 1
	},
	"Boomer合金 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融Boomer合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融Boomer合金", 1]
		],
		"count": 1
	},
	"Boomer合金 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融Boomer合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融Boomer合金", 1]
		],
		"count": 1
	},
	"Boomer合金 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融Boomer合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融Boomer合金", 1]
		],
		"count": 1
	},
	"Boomer合金 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融Boomer合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融Boomer合金", 1]
		],
		"count": 1
	},
	"Boomer合金 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融Boomer合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融Boomer合金", 1]
		],
		"count": 1
	},
	"Boomer合金 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融Boomer合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融Boomer合金", 1]
		],
		"count": 1
	},
	"熔融Sefi合金": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "Sefi合金锭", null],
			[null, null, null]
		],
		"ingredients": [
			["Sefi合金锭", 1]
		],
		"count": 1
	},
	"特性: 庆祝": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "Sefi合金锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["Sefi合金锭", 1]
		],
		"count": 1
	},
	"Sefi合金 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融Sefi合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融Sefi合金", 1]
		],
		"count": 1
	},
	"Sefi合金 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融Sefi合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融Sefi合金", 1]
		],
		"count": 1
	},
	"Sefi合金 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融Sefi合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融Sefi合金", 1]
		],
		"count": 1
	},
	"Sefi合金 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融Sefi合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融Sefi合金", 1]
		],
		"count": 1
	},
	"Sefi合金 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融Sefi合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融Sefi合金", 1]
		],
		"count": 1
	},
	"熔融圣诞礼物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "圣诞礼物", null],
			[null, null, null]
		],
		"ingredients": [
			["圣诞礼物", 1]
		],
		"count": 1
	},
	"熔融圣诞合金": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "圣诞合金锭", null],
			[null, null, null]
		],
		"ingredients": [
			["圣诞合金锭", 1]
		],
		"count": 1
	},
	"熔融圣诞合金": {
		"type": "匠魂冶炼炉",
		"map": [
			["熔融强化合金", "熔融圣诞礼物", "熔融镁"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["熔融强化合金", 1],
			["熔融圣诞礼物", 1],
			["熔融镁", 1]
		],
		"count": 1
	},
	"特性: 庆祝节日": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "圣诞合金锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["圣诞合金锭", 1]
		],
		"count": 1
	},
	"圣诞合金 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融圣诞合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融圣诞合金", 1]
		],
		"count": 1
	},
	"熔融喜爱": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "彩虹玻璃 (情人节版)", null],
			[null, null, null]
		],
		"ingredients": [
			["彩虹玻璃 (情人节版)", 1]
		],
		"count": 1
	},
	"熔融深爱": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "彩虹混凝土 (情人节版)", null],
			[null, null, null]
		],
		"ingredients": [
			["彩虹混凝土 (情人节版)", 1]
		],
		"count": 1
	},
	"熔融热情": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "彩虹带釉陶瓦 (情人节版)", null],
			[null, null, null]
		],
		"ingredients": [
			["彩虹带釉陶瓦 (情人节版)", 1]
		],
		"count": 1
	},
	"熔融爱": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "爱之锭", null],
			[null, null, null]
		],
		"ingredients": [
			["爱之锭", 1]
		],
		"count": 1
	},
	"熔融爱": {
		"type": "匠魂冶炼炉",
		"map": [
			["熔融喜爱", "熔融深爱", "熔融热情"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["熔融喜爱", 1],
			["熔融深爱", 1],
			["熔融热情", 1]
		],
		"count": 1
	},
	"特性: 这是你要的一切": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "爱之锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["爱之锭", 1]
		],
		"count": 1
	},
	"爱 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融爱"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融爱", 1]
		],
		"count": 1
	},
	"熔融Nice": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "Nice锭", null],
			[null, null, null]
		],
		"ingredients": [
			["Nice锭", 1]
		],
		"count": 1
	},
	"熔融Nice": {
		"type": "匠魂冶炼炉",
		"map": [
			["熔融强化合金", "熔融硬化金属", "熔融红石"],
			["熔融钻石", null, null],
			[null, null, null]
		],
		"ingredients": [
			["熔融强化合金", 1],
			["熔融硬化金属", 1],
			["熔融红石", 1],
			["熔融钻石", 1]
		],
		"count": 1
	},
	"特性: Nice": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "Nice锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["Nice锭", 1]
		],
		"count": 1
	},
	"Nice 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融Nice"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融Nice", 1]
		],
		"count": 1
	},
	"Nice 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融Nice"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融Nice", 1]
		],
		"count": 1
	},
	"Nice 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融Nice"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融Nice", 1]
		],
		"count": 1
	},
	"Nice 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融Nice"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融Nice", 1]
		],
		"count": 1
	},
	"Nice 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融Nice"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融Nice", 1]
		],
		"count": 1
	},
	"Nice 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融Nice"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融Nice", 1]
		],
		"count": 1
	},
	"熔融虚空": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "虚空锭", null],
			[null, null, null]
		],
		"ingredients": [
			["虚空锭", 1]
		],
		"count": 1
	},
	"特性: 虚空矿工": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "虚空锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["虚空锭", 1]
		],
		"count": 1
	},
	"特性: 虚空恐惧": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "虚空锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["虚空锭", 1]
		],
		"count": 1
	},
	"特性: 虚空行者": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "虚空锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["虚空锭", 1]
		],
		"count": 1
	},
	"特性: 末地领主": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "虚空锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["虚空锭", 1]
		],
		"count": 1
	},
	"虚空 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融虚空"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融虚空", 1]
		],
		"count": 1
	},
	"虚空 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融虚空"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融虚空", 1]
		],
		"count": 1
	},
	"虚空 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融虚空"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融虚空", 1]
		],
		"count": 1
	},
	"虚空 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融虚空"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融虚空", 1]
		],
		"count": 1
	},
	"虚空 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融虚空"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融虚空", 1]
		],
		"count": 1
	},
	"虚空 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融虚空"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融虚空", 1]
		],
		"count": 1
	},
	"虚空 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融虚空"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融虚空", 1]
		],
		"count": 1
	},
	"虚空 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融虚空"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融虚空", 1]
		],
		"count": 1
	},
	"虚空 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融虚空"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融虚空", 1]
		],
		"count": 1
	},
	"虚空 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融虚空"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融虚空", 1]
		],
		"count": 1
	},
	"虚空 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融虚空"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融虚空", 1]
		],
		"count": 1
	},
	"虚空 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融虚空"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融虚空", 1]
		],
		"count": 1
	},
	"熔融磁钢": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "磁钢", null],
			[null, null, null]
		],
		"ingredients": [
			["磁钢", 1]
		],
		"count": 1
	},
	"熔融磁钢": {
		"type": "匠魂冶炼炉",
		"map": [
			["熔融镁", "熔融钢", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["熔融镁", 1],
			["熔融钢", 1]
		],
		"count": 1
	},
	"特性: 真的是不锈钢": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "磁钢"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["磁钢", 1]
		],
		"count": 1
	},
	"特性: 燃烧": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "磁钢"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["磁钢", 1]
		],
		"count": 1
	},
	"特性: 暗淡": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "磁钢"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["磁钢", 1]
		],
		"count": 1
	},
	"特性: 防御": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "磁钢"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["磁钢", 1]
		],
		"count": 1
	},
	"磁钢 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融磁钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融磁钢", 1]
		],
		"count": 1
	},
	"磁钢 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融磁钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融磁钢", 1]
		],
		"count": 1
	},
	"磁钢 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融磁钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融磁钢", 1]
		],
		"count": 1
	},
	"磁钢 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融磁钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融磁钢", 1]
		],
		"count": 1
	},
	"磁钢 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融磁钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融磁钢", 1]
		],
		"count": 1
	},
	"磁钢 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融磁钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融磁钢", 1]
		],
		"count": 1
	},
	"磁钢 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融磁钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融磁钢", 1]
		],
		"count": 1
	},
	"磁钢 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融磁钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融磁钢", 1]
		],
		"count": 1
	},
	"磁钢 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融磁钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融磁钢", 1]
		],
		"count": 1
	},
	"磁钢 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融磁钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融磁钢", 1]
		],
		"count": 1
	},
	"磁钢 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融磁钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融磁钢", 1]
		],
		"count": 1
	},
	"磁钢 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融磁钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融磁钢", 1]
		],
		"count": 1
	},
	"熔融钛": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "钛", null],
			[null, null, null]
		],
		"ingredients": [
			["钛", 1]
		],
		"count": 1
	},
	"熔融钛": {
		"type": "匠魂冶炼炉",
		"map": [
			["熔融强化合金", "熔融大马士革钢", "熔融硬化金属"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["熔融强化合金", 1],
			["熔融大马士革钢", 1],
			["熔融硬化金属", 1]
		],
		"count": 1
	},
	"特性: 双倍强化": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "钛"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["钛", 1]
		],
		"count": 1
	},
	"特性: 耐用": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "钛"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["钛", 1]
		],
		"count": 1
	},
	"特性: 地精": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "钛"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["钛", 1]
		],
		"count": 1
	},
	"特性: 防火": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "钛"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["钛", 1]
		],
		"count": 1
	},
	"钛 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融钛"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融钛", 1]
		],
		"count": 1
	},
	"钛 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融钛"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融钛", 1]
		],
		"count": 1
	},
	"钛 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融钛"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融钛", 1]
		],
		"count": 1
	},
	"钛 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融钛"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融钛", 1]
		],
		"count": 1
	},
	"钛 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融钛"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融钛", 1]
		],
		"count": 1
	},
	"钛 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融钛"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融钛", 1]
		],
		"count": 1
	},
	"钛 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融钛"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融钛", 1]
		],
		"count": 1
	},
	"钛 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融钛"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融钛", 1]
		],
		"count": 1
	},
	"钛 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融钛"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融钛", 1]
		],
		"count": 1
	},
	"钛 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融钛"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融钛", 1]
		],
		"count": 1
	},
	"钛 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融钛"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融钛", 1]
		],
		"count": 1
	},
	"钛 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融钛"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融钛", 1]
		],
		"count": 1
	},
	"熔融铁奇点": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "铁奇点", null],
			[null, null, null]
		],
		"ingredients": [
			["铁奇点", 1]
		],
		"count": 1
	},
	"特性: 稳定 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "铁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["铁奇点", 1]
		],
		"count": 1
	},
	"特性: 锋利 1 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "铁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["铁奇点", 1]
		],
		"count": 1
	},
	"特性: 坚固 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "铁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["铁奇点", 1]
		],
		"count": 1
	},
	"特性: 腐蚀 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "铁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["铁奇点", 1]
		],
		"count": 1
	},
	"铁奇点 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融铁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融铁奇点", 1]
		],
		"count": 1
	},
	"铁奇点 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融铁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融铁奇点", 1]
		],
		"count": 1
	},
	"铁奇点 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融铁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融铁奇点", 1]
		],
		"count": 1
	},
	"铁奇点 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融铁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融铁奇点", 1]
		],
		"count": 1
	},
	"铁奇点 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融铁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融铁奇点", 1]
		],
		"count": 1
	},
	"铁奇点 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融铁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融铁奇点", 1]
		],
		"count": 1
	},
	"铁奇点 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融铁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融铁奇点", 1]
		],
		"count": 1
	},
	"铁奇点 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融铁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融铁奇点", 1]
		],
		"count": 1
	},
	"铁奇点 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融铁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融铁奇点", 1]
		],
		"count": 1
	},
	"铁奇点 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融铁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融铁奇点", 1]
		],
		"count": 1
	},
	"铁奇点 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融铁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融铁奇点", 1]
		],
		"count": 1
	},
	"铁奇点 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融铁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融铁奇点", 1]
		],
		"count": 1
	},
	"熔融金奇点": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "金奇点", null],
			[null, null, null]
		],
		"ingredients": [
			["金奇点", 1]
		],
		"count": 1
	},
	"特性: 金色面纱 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "金奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["金奇点", 1]
		],
		"count": 1
	},
	"特性: 闪闪发光 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "金奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["金奇点", 1]
		],
		"count": 1
	},
	"特性: 繁荣 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "金奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["金奇点", 1]
		],
		"count": 1
	},
	"特性: 来个交易 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "金奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["金奇点", 1]
		],
		"count": 1
	},
	"金奇点 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融金奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融金奇点", 1]
		],
		"count": 1
	},
	"金奇点 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融金奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融金奇点", 1]
		],
		"count": 1
	},
	"金奇点 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融金奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融金奇点", 1]
		],
		"count": 1
	},
	"金奇点 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融金奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融金奇点", 1]
		],
		"count": 1
	},
	"金奇点 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融金奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融金奇点", 1]
		],
		"count": 1
	},
	"金奇点 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融金奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融金奇点", 1]
		],
		"count": 1
	},
	"金奇点 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融金奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融金奇点", 1]
		],
		"count": 1
	},
	"金奇点 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融金奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融金奇点", 1]
		],
		"count": 1
	},
	"金奇点 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融金奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融金奇点", 1]
		],
		"count": 1
	},
	"金奇点 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融金奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融金奇点", 1]
		],
		"count": 1
	},
	"金奇点 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融金奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融金奇点", 1]
		],
		"count": 1
	},
	"金奇点 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融金奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融金奇点", 1]
		],
		"count": 1
	},
	"熔融铜奇点": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "铜奇点", null],
			[null, null, null]
		],
		"ingredients": [
			["铜奇点", 1]
		],
		"count": 1
	},
	"特性: 这是个脑力活 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "铜奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["铜奇点", 1]
		],
		"count": 1
	},
	"特性: 经验传导 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "铜奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["铜奇点", 1]
		],
		"count": 1
	},
	"特性: 新手 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "铜奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["铜奇点", 1]
		],
		"count": 1
	},
	"特性: 暗淡 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "铜奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["铜奇点", 1]
		],
		"count": 1
	},
	"铜奇点 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融铜奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融铜奇点", 1]
		],
		"count": 1
	},
	"铜奇点 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融铜奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融铜奇点", 1]
		],
		"count": 1
	},
	"铜奇点 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融铜奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融铜奇点", 1]
		],
		"count": 1
	},
	"铜奇点 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融铜奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融铜奇点", 1]
		],
		"count": 1
	},
	"铜奇点 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融铜奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融铜奇点", 1]
		],
		"count": 1
	},
	"铜奇点 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融铜奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融铜奇点", 1]
		],
		"count": 1
	},
	"铜奇点 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融铜奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融铜奇点", 1]
		],
		"count": 1
	},
	"铜奇点 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融铜奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融铜奇点", 1]
		],
		"count": 1
	},
	"铜奇点 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融铜奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融铜奇点", 1]
		],
		"count": 1
	},
	"铜奇点 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融铜奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融铜奇点", 1]
		],
		"count": 1
	},
	"铜奇点 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融铜奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融铜奇点", 1]
		],
		"count": 1
	},
	"铜奇点 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融铜奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融铜奇点", 1]
		],
		"count": 1
	},
	"熔融铅奇点": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "铅奇点", null],
			[null, null, null]
		],
		"ingredients": [
			["铅奇点", 1]
		],
		"count": 1
	},
	"特性: 剧毒 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "铅奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["铅奇点", 1]
		],
		"count": 1
	},
	"特性: 蚂蟥 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "铅奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["铅奇点", 1]
		],
		"count": 1
	},
	"特性: 生病了 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "铅奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["铅奇点", 1]
		],
		"count": 1
	},
	"特性: 生病了 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "铅奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["铅奇点", 1]
		],
		"count": 1
	},
	"铅奇点 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融铅奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融铅奇点", 1]
		],
		"count": 1
	},
	"铅奇点 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融铅奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融铅奇点", 1]
		],
		"count": 1
	},
	"铅奇点 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融铅奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融铅奇点", 1]
		],
		"count": 1
	},
	"铅奇点 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融铅奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融铅奇点", 1]
		],
		"count": 1
	},
	"铅奇点 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融铅奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融铅奇点", 1]
		],
		"count": 1
	},
	"铅奇点 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融铅奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融铅奇点", 1]
		],
		"count": 1
	},
	"铅奇点 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融铅奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融铅奇点", 1]
		],
		"count": 1
	},
	"铅奇点 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融铅奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融铅奇点", 1]
		],
		"count": 1
	},
	"铅奇点 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融铅奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融铅奇点", 1]
		],
		"count": 1
	},
	"铅奇点 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融铅奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融铅奇点", 1]
		],
		"count": 1
	},
	"铅奇点 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融铅奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融铅奇点", 1]
		],
		"count": 1
	},
	"铅奇点 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融铅奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融铅奇点", 1]
		],
		"count": 1
	},
	"熔融银奇点": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "银奇点", null],
			[null, null, null]
		],
		"ingredients": [
			["银奇点", 1]
		],
		"count": 1
	},
	"特性: 附魔 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "银奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["银奇点", 1]
		],
		"count": 1
	},
	"特性: 轻触 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "银奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["银奇点", 1]
		],
		"count": 1
	},
	"特性: 导电 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "银奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["银奇点", 1]
		],
		"count": 1
	},
	"特性: 附魔 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "银奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["银奇点", 1]
		],
		"count": 1
	},
	"银奇点 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融银奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融银奇点", 1]
		],
		"count": 1
	},
	"银奇点 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融银奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融银奇点", 1]
		],
		"count": 1
	},
	"银奇点 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融银奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融银奇点", 1]
		],
		"count": 1
	},
	"银奇点 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融银奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融银奇点", 1]
		],
		"count": 1
	},
	"银奇点 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融银奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融银奇点", 1]
		],
		"count": 1
	},
	"银奇点 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融银奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融银奇点", 1]
		],
		"count": 1
	},
	"银奇点 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融银奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融银奇点", 1]
		],
		"count": 1
	},
	"银奇点 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融银奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融银奇点", 1]
		],
		"count": 1
	},
	"银奇点 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融银奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融银奇点", 1]
		],
		"count": 1
	},
	"银奇点 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融银奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融银奇点", 1]
		],
		"count": 1
	},
	"银奇点 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融银奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融银奇点", 1]
		],
		"count": 1
	},
	"银奇点 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融银奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融银奇点", 1]
		],
		"count": 1
	},
	"熔融铝奇点": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "铝奇点", null],
			[null, null, null]
		],
		"ingredients": [
			["铝奇点", 1]
		],
		"count": 1
	},
	"特性: 再生资源 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "铝奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["铝奇点", 1]
		],
		"count": 1
	},
	"特性: 柔韧 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "铝奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["铝奇点", 1]
		],
		"count": 1
	},
	"特性: 快跑 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "铝奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["铝奇点", 1]
		],
		"count": 1
	},
	"特性: 快速修复 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "铝奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["铝奇点", 1]
		],
		"count": 1
	},
	"铝奇点 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融铝奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融铝奇点", 1]
		],
		"count": 1
	},
	"铝奇点 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融铝奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融铝奇点", 1]
		],
		"count": 1
	},
	"铝奇点 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融铝奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融铝奇点", 1]
		],
		"count": 1
	},
	"铝奇点 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融铝奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融铝奇点", 1]
		],
		"count": 1
	},
	"铝奇点 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融铝奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融铝奇点", 1]
		],
		"count": 1
	},
	"铝奇点 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融铝奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融铝奇点", 1]
		],
		"count": 1
	},
	"铝奇点 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融铝奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融铝奇点", 1]
		],
		"count": 1
	},
	"铝奇点 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融铝奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融铝奇点", 1]
		],
		"count": 1
	},
	"铝奇点 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融铝奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融铝奇点", 1]
		],
		"count": 1
	},
	"铝奇点 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融铝奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融铝奇点", 1]
		],
		"count": 1
	},
	"铝奇点 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融铝奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融铝奇点", 1]
		],
		"count": 1
	},
	"铝奇点 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融铝奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融铝奇点", 1]
		],
		"count": 1
	},
	"熔融锡奇点": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "锡奇点", null],
			[null, null, null]
		],
		"ingredients": [
			["锡奇点", 1]
		],
		"count": 1
	},
	"特性: 幸运 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "锡奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["锡奇点", 1]
		],
		"count": 1
	},
	"特性: 罐头 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "锡奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["锡奇点", 1]
		],
		"count": 1
	},
	"特性: 抗毒 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "锡奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["锡奇点", 1]
		],
		"count": 1
	},
	"特性: 承伤 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "锡奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["锡奇点", 1]
		],
		"count": 1
	},
	"锡奇点 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融锡奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融锡奇点", 1]
		],
		"count": 1
	},
	"锡奇点 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融锡奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融锡奇点", 1]
		],
		"count": 1
	},
	"锡奇点 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融锡奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融锡奇点", 1]
		],
		"count": 1
	},
	"锡奇点 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融锡奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融锡奇点", 1]
		],
		"count": 1
	},
	"锡奇点 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融锡奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融锡奇点", 1]
		],
		"count": 1
	},
	"锡奇点 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融锡奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融锡奇点", 1]
		],
		"count": 1
	},
	"锡奇点 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融锡奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融锡奇点", 1]
		],
		"count": 1
	},
	"锡奇点 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融锡奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融锡奇点", 1]
		],
		"count": 1
	},
	"锡奇点 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融锡奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融锡奇点", 1]
		],
		"count": 1
	},
	"锡奇点 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融锡奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融锡奇点", 1]
		],
		"count": 1
	},
	"锡奇点 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融锡奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融锡奇点", 1]
		],
		"count": 1
	},
	"锡奇点 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融锡奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融锡奇点", 1]
		],
		"count": 1
	},
	"熔融锌奇点": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "锌奇点", null],
			[null, null, null]
		],
		"ingredients": [
			["锌奇点", 1]
		],
		"count": 1
	},
	"特性: 海豚的恩惠 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "锌奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["锌奇点", 1]
		],
		"count": 1
	},
	"特性: 飘浮 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "锌奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["锌奇点", 1]
		],
		"count": 1
	},
	"特性: 偷袭 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "锌奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["锌奇点", 1]
		],
		"count": 1
	},
	"特性: 针灸 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "锌奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["锌奇点", 1]
		],
		"count": 1
	},
	"锌奇点 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融锌奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融锌奇点", 1]
		],
		"count": 1
	},
	"锌奇点 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融锌奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融锌奇点", 1]
		],
		"count": 1
	},
	"锌奇点 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融锌奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融锌奇点", 1]
		],
		"count": 1
	},
	"锌奇点 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融锌奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融锌奇点", 1]
		],
		"count": 1
	},
	"锌奇点 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融锌奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融锌奇点", 1]
		],
		"count": 1
	},
	"锌奇点 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融锌奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融锌奇点", 1]
		],
		"count": 1
	},
	"锌奇点 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融锌奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融锌奇点", 1]
		],
		"count": 1
	},
	"锌奇点 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融锌奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融锌奇点", 1]
		],
		"count": 1
	},
	"锌奇点 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融锌奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融锌奇点", 1]
		],
		"count": 1
	},
	"锌奇点 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融锌奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融锌奇点", 1]
		],
		"count": 1
	},
	"锌奇点 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融锌奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融锌奇点", 1]
		],
		"count": 1
	},
	"锌奇点 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融锌奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融锌奇点", 1]
		],
		"count": 1
	},
	"熔融镁奇点": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "镁奇点", null],
			[null, null, null]
		],
		"ingredients": [
			["镁奇点", 1]
		],
		"count": 1
	},
	"特性: 燃烧 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "镁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["镁奇点", 1]
		],
		"count": 1
	},
	"特性: 磁铁 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "镁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["镁奇点", 1]
		],
		"count": 1
	},
	"特性: 快溜 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "镁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["镁奇点", 1]
		],
		"count": 1
	},
	"特性: 镁地™夜视 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "镁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["镁奇点", 1]
		],
		"count": 1
	},
	"镁奇点 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融镁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融镁奇点", 1]
		],
		"count": 1
	},
	"镁奇点 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融镁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融镁奇点", 1]
		],
		"count": 1
	},
	"镁奇点 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融镁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融镁奇点", 1]
		],
		"count": 1
	},
	"镁奇点 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融镁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融镁奇点", 1]
		],
		"count": 1
	},
	"镁奇点 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融镁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融镁奇点", 1]
		],
		"count": 1
	},
	"镁奇点 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融镁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融镁奇点", 1]
		],
		"count": 1
	},
	"镁奇点 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融镁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融镁奇点", 1]
		],
		"count": 1
	},
	"镁奇点 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融镁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融镁奇点", 1]
		],
		"count": 1
	},
	"镁奇点 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融镁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融镁奇点", 1]
		],
		"count": 1
	},
	"镁奇点 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融镁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融镁奇点", 1]
		],
		"count": 1
	},
	"镁奇点 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融镁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融镁奇点", 1]
		],
		"count": 1
	},
	"镁奇点 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融镁奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融镁奇点", 1]
		],
		"count": 1
	},
	"熔融钻石奇点": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "钻石奇点", null],
			[null, null, null]
		],
		"ingredients": [
			["钻石奇点", 1]
		],
		"count": 1
	},
	"熔融秘银": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "秘银", null],
			[null, null, null]
		],
		"ingredients": [
			["秘银", 1]
		],
		"count": 1
	},
	"特性: 精灵疾驰": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "秘银"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["秘银", 1]
		],
		"count": 1
	},
	"特性: 贡多林刺针": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "秘银"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["秘银", 1]
		],
		"count": 1
	},
	"特性: 魔童": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "秘银"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["秘银", 1]
		],
		"count": 1
	},
	"特性: 野性的呼唤": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "秘银"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["秘银", 1]
		],
		"count": 1
	},
	"秘银 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融秘银"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融秘银", 1]
		],
		"count": 1
	},
	"秘银 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融秘银"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融秘银", 1]
		],
		"count": 1
	},
	"秘银 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融秘银"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融秘银", 1]
		],
		"count": 1
	},
	"秘银 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融秘银"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融秘银", 1]
		],
		"count": 1
	},
	"秘银 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融秘银"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融秘银", 1]
		],
		"count": 1
	},
	"秘银 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融秘银"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融秘银", 1]
		],
		"count": 1
	},
	"秘银 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融秘银"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融秘银", 1]
		],
		"count": 1
	},
	"秘银 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融秘银"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融秘银", 1]
		],
		"count": 1
	},
	"秘银 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融秘银"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融秘银", 1]
		],
		"count": 1
	},
	"秘银 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融秘银"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融秘银", 1]
		],
		"count": 1
	},
	"秘银 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融秘银"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融秘银", 1]
		],
		"count": 1
	},
	"秘银 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融秘银"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融秘银", 1]
		],
		"count": 1
	},
	"熔融精金": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "精金", null],
			[null, null, null]
		],
		"ingredients": [
			["精金", 1]
		],
		"count": 1
	},
	"特性: 神秘": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "精金"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["精金", 1]
		],
		"count": 1
	},
	"特性: 坚硬": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "精金"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["精金", 1]
		],
		"count": 1
	},
	"特性: 射歪了": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "精金"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["精金", 1]
		],
		"count": 1
	},
	"特性: 有经验的": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "精金"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["精金", 1]
		],
		"count": 1
	},
	"精金 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融精金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融精金", 1]
		],
		"count": 1
	},
	"精金 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融精金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融精金", 1]
		],
		"count": 1
	},
	"精金 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融精金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融精金", 1]
		],
		"count": 1
	},
	"精金 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融精金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融精金", 1]
		],
		"count": 1
	},
	"精金 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融精金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融精金", 1]
		],
		"count": 1
	},
	"精金 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融精金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融精金", 1]
		],
		"count": 1
	},
	"精金 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融精金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融精金", 1]
		],
		"count": 1
	},
	"精金 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融精金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融精金", 1]
		],
		"count": 1
	},
	"精金 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融精金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融精金", 1]
		],
		"count": 1
	},
	"精金 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融精金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融精金", 1]
		],
		"count": 1
	},
	"精金 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融精金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融精金", 1]
		],
		"count": 1
	},
	"精金 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融精金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融精金", 1]
		],
		"count": 1
	},
	"熔融磁金": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "磁金", null],
			[null, null, null]
		],
		"ingredients": [
			["磁金", 1]
		],
		"count": 1
	},
	"特性: 宽宏大量": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "磁金"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["磁金", 1]
		],
		"count": 1
	},
	"特性: 炽热": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "磁金"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["磁金", 1]
		],
		"count": 1
	},
	"特性: 逃脱": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "磁金"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["磁金", 1]
		],
		"count": 1
	},
	"特性: 有氧": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "磁金"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["磁金", 1]
		],
		"count": 1
	},
	"磁金 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融磁金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融磁金", 1]
		],
		"count": 1
	},
	"磁金 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融磁金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融磁金", 1]
		],
		"count": 1
	},
	"磁金 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融磁金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融磁金", 1]
		],
		"count": 1
	},
	"磁金 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融磁金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融磁金", 1]
		],
		"count": 1
	},
	"磁金 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融磁金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融磁金", 1]
		],
		"count": 1
	},
	"磁金 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融磁金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融磁金", 1]
		],
		"count": 1
	},
	"磁金 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融磁金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融磁金", 1]
		],
		"count": 1
	},
	"磁金 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融磁金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融磁金", 1]
		],
		"count": 1
	},
	"磁金 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融磁金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融磁金", 1]
		],
		"count": 1
	},
	"磁金 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融磁金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融磁金", 1]
		],
		"count": 1
	},
	"磁金 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融磁金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融磁金", 1]
		],
		"count": 1
	},
	"磁金 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融磁金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融磁金", 1]
		],
		"count": 1
	},
	"熔融时运奇点": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "时运奇点", null],
			[null, null, null]
		],
		"ingredients": [
			["时运奇点", 1]
		],
		"count": 1
	},
	"特性: 幸运": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "时运奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["时运奇点", 1]
		],
		"count": 1
	},
	"特性: 商人面纱": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "时运奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["时运奇点", 1]
		],
		"count": 1
	},
	"特性: 多么幸运": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "时运奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["时运奇点", 1]
		],
		"count": 1
	},
	"特性: 鲜花": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "时运奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["时运奇点", 1]
		],
		"count": 1
	},
	"时运奇点 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融时运奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融时运奇点", 1]
		],
		"count": 1
	},
	"时运奇点 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融时运奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融时运奇点", 1]
		],
		"count": 1
	},
	"时运奇点 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融时运奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融时运奇点", 1]
		],
		"count": 1
	},
	"时运奇点 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融时运奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融时运奇点", 1]
		],
		"count": 1
	},
	"时运奇点 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融时运奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融时运奇点", 1]
		],
		"count": 1
	},
	"时运奇点 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融时运奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融时运奇点", 1]
		],
		"count": 1
	},
	"时运奇点 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融时运奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融时运奇点", 1]
		],
		"count": 1
	},
	"时运奇点 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融时运奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融时运奇点", 1]
		],
		"count": 1
	},
	"时运奇点 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融时运奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融时运奇点", 1]
		],
		"count": 1
	},
	"时运奇点 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融时运奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融时运奇点", 1]
		],
		"count": 1
	},
	"时运奇点 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融时运奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融时运奇点", 1]
		],
		"count": 1
	},
	"时运奇点 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融时运奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融时运奇点", 1]
		],
		"count": 1
	},
	"熔融魔法奇点": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "魔法奇点", null],
			[null, null, null]
		],
		"ingredients": [
			["魔法奇点", 1]
		],
		"count": 1
	},
	"特性: 魔术戏法": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "魔法奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["魔法奇点", 1]
		],
		"count": 1
	},
	"特性: 揭露秘密": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "魔法奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["魔法奇点", 1]
		],
		"count": 1
	},
	"特性: 巫师袍": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "魔法奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["魔法奇点", 1]
		],
		"count": 1
	},
	"特性: 魔法薄荷": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "魔法奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["魔法奇点", 1]
		],
		"count": 1
	},
	"魔法奇点 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融魔法奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融魔法奇点", 1]
		],
		"count": 1
	},
	"魔法奇点 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融魔法奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融魔法奇点", 1]
		],
		"count": 1
	},
	"魔法奇点 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融魔法奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融魔法奇点", 1]
		],
		"count": 1
	},
	"魔法奇点 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融魔法奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融魔法奇点", 1]
		],
		"count": 1
	},
	"魔法奇点 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融魔法奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融魔法奇点", 1]
		],
		"count": 1
	},
	"魔法奇点 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融魔法奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融魔法奇点", 1]
		],
		"count": 1
	},
	"魔法奇点 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融魔法奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融魔法奇点", 1]
		],
		"count": 1
	},
	"魔法奇点 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融魔法奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融魔法奇点", 1]
		],
		"count": 1
	},
	"魔法奇点 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融魔法奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融魔法奇点", 1]
		],
		"count": 1
	},
	"魔法奇点 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融魔法奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融魔法奇点", 1]
		],
		"count": 1
	},
	"魔法奇点 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融魔法奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融魔法奇点", 1]
		],
		"count": 1
	},
	"魔法奇点 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融魔法奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融魔法奇点", 1]
		],
		"count": 1
	},
	"熔融地球奇点": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "地球奇点", null],
			[null, null, null]
		],
		"ingredients": [
			["地球奇点", 1]
		],
		"count": 1
	},
	"特性: 撼地者": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "地球奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["地球奇点", 1]
		],
		"count": 1
	},
	"特性: 粉碎机": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "地球奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["地球奇点", 1]
		],
		"count": 1
	},
	"特性: 岩浆行者": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "地球奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["地球奇点", 1]
		],
		"count": 1
	},
	"特性: 自然法则": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "地球奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["地球奇点", 1]
		],
		"count": 1
	},
	"地球奇点 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融地球奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融地球奇点", 1]
		],
		"count": 1
	},
	"地球奇点 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融地球奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融地球奇点", 1]
		],
		"count": 1
	},
	"地球奇点 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融地球奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融地球奇点", 1]
		],
		"count": 1
	},
	"地球奇点 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融地球奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融地球奇点", 1]
		],
		"count": 1
	},
	"地球奇点 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融地球奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融地球奇点", 1]
		],
		"count": 1
	},
	"地球奇点 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融地球奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融地球奇点", 1]
		],
		"count": 1
	},
	"地球奇点 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融地球奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融地球奇点", 1]
		],
		"count": 1
	},
	"地球奇点 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融地球奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融地球奇点", 1]
		],
		"count": 1
	},
	"地球奇点 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融地球奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融地球奇点", 1]
		],
		"count": 1
	},
	"地球奇点 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融地球奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融地球奇点", 1]
		],
		"count": 1
	},
	"地球奇点 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融地球奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融地球奇点", 1]
		],
		"count": 1
	},
	"地球奇点 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融地球奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融地球奇点", 1]
		],
		"count": 1
	},
	"熔融金属奇点": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "金属奇点", null],
			[null, null, null]
		],
		"ingredients": [
			["金属奇点", 1]
		],
		"count": 1
	},
	"特性: 干净利落": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "金属奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["金属奇点", 1]
		],
		"count": 1
	},
	"特性: 经验导体": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "金属奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["金属奇点", 1]
		],
		"count": 1
	},
	"特性: 圆桌骑士": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "金属奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["金属奇点", 1]
		],
		"count": 1
	},
	"特性: 闪光弹": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "金属奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["金属奇点", 1]
		],
		"count": 1
	},
	"金属奇点 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融金属奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融金属奇点", 1]
		],
		"count": 1
	},
	"金属奇点 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融金属奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融金属奇点", 1]
		],
		"count": 1
	},
	"金属奇点 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融金属奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融金属奇点", 1]
		],
		"count": 1
	},
	"金属奇点 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融金属奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融金属奇点", 1]
		],
		"count": 1
	},
	"金属奇点 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融金属奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融金属奇点", 1]
		],
		"count": 1
	},
	"金属奇点 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融金属奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融金属奇点", 1]
		],
		"count": 1
	},
	"金属奇点 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融金属奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融金属奇点", 1]
		],
		"count": 1
	},
	"金属奇点 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融金属奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融金属奇点", 1]
		],
		"count": 1
	},
	"金属奇点 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融金属奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融金属奇点", 1]
		],
		"count": 1
	},
	"金属奇点 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融金属奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融金属奇点", 1]
		],
		"count": 1
	},
	"金属奇点 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融金属奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融金属奇点", 1]
		],
		"count": 1
	},
	"金属奇点 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融金属奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融金属奇点", 1]
		],
		"count": 1
	},
	"熔融无尽": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "无尽锭", null],
			[null, null, null]
		],
		"ingredients": [
			["无尽锭", 1]
		],
		"count": 1
	},
	"特性: 无尽": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "无尽锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["无尽锭", 1]
		],
		"count": 1
	},
	"特性: 概念性防御": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "无尽锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["无尽锭", 1]
		],
		"count": 1
	},
	"特性: 无尽反应盔甲": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "无尽锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["无尽锭", 1]
		],
		"count": 1
	},
	"特性: 衔尾蛇": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "无尽锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["无尽锭", 1]
		],
		"count": 1
	},
	"无尽 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融无尽"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融无尽", 1]
		],
		"count": 1
	},
	"无尽 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融无尽"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融无尽", 1]
		],
		"count": 1
	},
	"无尽 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融无尽"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融无尽", 1]
		],
		"count": 1
	},
	"无尽 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融无尽"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融无尽", 1]
		],
		"count": 1
	},
	"无尽 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融无尽"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融无尽", 1]
		],
		"count": 1
	},
	"无尽 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融无尽"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融无尽", 1]
		],
		"count": 1
	},
	"无尽 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融无尽"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融无尽", 1]
		],
		"count": 1
	},
	"无尽 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融无尽"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融无尽", 1]
		],
		"count": 1
	},
	"无尽 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融无尽"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融无尽", 1]
		],
		"count": 1
	},
	"无尽 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融无尽"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融无尽", 1]
		],
		"count": 1
	},
	"无尽 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融无尽"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融无尽", 1]
		],
		"count": 1
	},
	"无尽 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融无尽"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融无尽", 1]
		],
		"count": 1
	},
	"熔融无尽奇点": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "无尽奇点", null],
			[null, null, null]
		],
		"ingredients": [
			["无尽奇点", 1]
		],
		"count": 1
	},
	"特性: 断点": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "无尽奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["无尽奇点", 1]
		],
		"count": 1
	},
	"特性: 无尽力量": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "无尽奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["无尽奇点", 1]
		],
		"count": 1
	},
	"特性: 无尽防御": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "无尽奇点"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["无尽奇点", 1]
		],
		"count": 1
	},
	"无尽奇点 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融无尽奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融无尽奇点", 1]
		],
		"count": 1
	},
	"无尽奇点 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融无尽奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融无尽奇点", 1]
		],
		"count": 1
	},
	"无尽奇点 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融无尽奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融无尽奇点", 1]
		],
		"count": 1
	},
	"无尽奇点 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融无尽奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融无尽奇点", 1]
		],
		"count": 1
	},
	"无尽奇点 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融无尽奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融无尽奇点", 1]
		],
		"count": 1
	},
	"无尽奇点 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融无尽奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融无尽奇点", 1]
		],
		"count": 1
	},
	"无尽奇点 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融无尽奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融无尽奇点", 1]
		],
		"count": 1
	},
	"无尽奇点 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融无尽奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融无尽奇点", 1]
		],
		"count": 1
	},
	"无尽奇点 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融无尽奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融无尽奇点", 1]
		],
		"count": 1
	},
	"无尽奇点 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融无尽奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融无尽奇点", 1]
		],
		"count": 1
	},
	"无尽奇点 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融无尽奇点"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融无尽奇点", 1]
		],
		"count": 1
	},
	"熔融塞格尼森": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "塞格尼森", null],
			[null, null, null]
		],
		"ingredients": [
			["塞格尼森", 1]
		],
		"count": 1
	},
	"特性: 超载": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "塞格尼森"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["塞格尼森", 1]
		],
		"count": 1
	},
	"特性: 失明速度": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "塞格尼森"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["塞格尼森", 1]
		],
		"count": 1
	},
	"特性: 引力": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "塞格尼森"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["塞格尼森", 1]
		],
		"count": 1
	},
	"特性: 灵魂虹吸": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "塞格尼森"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["塞格尼森", 1]
		],
		"count": 1
	},
	"塞格尼森 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融塞格尼森"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融塞格尼森", 1]
		],
		"count": 1
	},
	"塞格尼森 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融塞格尼森"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融塞格尼森", 1]
		],
		"count": 1
	},
	"塞格尼森 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融塞格尼森"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融塞格尼森", 1]
		],
		"count": 1
	},
	"塞格尼森 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融塞格尼森"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融塞格尼森", 1]
		],
		"count": 1
	},
	"塞格尼森 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融塞格尼森"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融塞格尼森", 1]
		],
		"count": 1
	},
	"塞格尼森 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融塞格尼森"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融塞格尼森", 1]
		],
		"count": 1
	},
	"塞格尼森 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融塞格尼森"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融塞格尼森", 1]
		],
		"count": 1
	},
	"塞格尼森 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融塞格尼森"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融塞格尼森", 1]
		],
		"count": 1
	},
	"塞格尼森 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融塞格尼森"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融塞格尼森", 1]
		],
		"count": 1
	},
	"塞格尼森 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融塞格尼森"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融塞格尼森", 1]
		],
		"count": 1
	},
	"塞格尼森 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融塞格尼森"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融塞格尼森", 1]
		],
		"count": 1
	},
	"塞格尼森 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融塞格尼森"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融塞格尼森", 1]
		],
		"count": 1
	},
	"熔融软钢": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "软钢锭", null],
			[null, null, null]
		],
		"ingredients": [
			["软钢锭", 1]
		],
		"count": 1
	},
	"熔融软钢": {
		"type": "匠魂冶炼炉",
		"map": [
			["熔融钢", "熔融粘液", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["熔融钢", 1],
			["熔融粘液", 1]
		],
		"count": 1
	},
	"特性: 弹性 II": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 绑定结", null, "软钢锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 绑定结", 1],
			["软钢锭", 1]
		],
		"count": 1
	},
	"特性: 月面弹跳": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 护身软甲", null, "软钢锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 护身软甲", 1],
			["软钢锭", 1]
		],
		"count": 1
	},
	"软钢 绑定结": {
		"type": "匠魂合成站",
		"map": [
			["软钢锭", null, "软钢锭"],
			[null, "软钢锭", null],
			["软钢锭", null, "软钢锭"]
		],
		"ingredients": [
			["软钢锭", 5]
		],
		"count": 1
	},
	"软钢 护身软甲": {
		"type": "匠魂合成站",
		"map": [
			[null, "软钢锭", "软钢锭"],
			["软钢锭", null, "软钢锭"],
			["软钢锭", "软钢锭", null]
		],
		"ingredients": [
			["软钢锭", 6]
		],
		"count": 1
	},
	"熔融强化软钢": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "强化软钢锭", null],
			[null, null, null]
		],
		"ingredients": [
			["强化软钢锭", 1]
		],
		"count": 1
	},
	"熔融强化软钢": {
		"type": "匠魂冶炼炉",
		"map": [
			["熔融软钢", "熔融粘液", "熔融大马士革钢"],
			["熔融硬化金属", "熔融科林斯青铜", "熔融铝青铜"],
			[null, null, null]
		],
		"ingredients": [
			["熔融软钢", 1],
			["熔融粘液", 1],
			["熔融大马士革钢", 1],
			["熔融硬化金属", 1],
			["熔融科林斯青铜", 1],
			["熔融铝青铜", 1]
		],
		"count": 1
	},
	"特性: 强力粘液": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "强化软钢锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["强化软钢锭", 1]
		],
		"count": 1
	},
	"特性: 灵活": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "强化软钢锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["强化软钢锭", 1]
		],
		"count": 1
	},
	"特性: 刚性与柔性": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "强化软钢锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["强化软钢锭", 1]
		],
		"count": 1
	},
	"特性: 射偏了": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "强化软钢锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["强化软钢锭", 1]
		],
		"count": 1
	},
	"强化软钢 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融强化软钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融强化软钢", 1]
		],
		"count": 1
	},
	"强化软钢 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融强化软钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融强化软钢", 1]
		],
		"count": 1
	},
	"强化软钢 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融强化软钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融强化软钢", 1]
		],
		"count": 1
	},
	"强化软钢 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融强化软钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融强化软钢", 1]
		],
		"count": 1
	},
	"强化软钢 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融强化软钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融强化软钢", 1]
		],
		"count": 1
	},
	"强化软钢 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融强化软钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融强化软钢", 1]
		],
		"count": 1
	},
	"强化软钢 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融强化软钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融强化软钢", 1]
		],
		"count": 1
	},
	"强化软钢 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融强化软钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融强化软钢", 1]
		],
		"count": 1
	},
	"强化软钢 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融强化软钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融强化软钢", 1]
		],
		"count": 1
	},
	"强化软钢 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融强化软钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融强化软钢", 1]
		],
		"count": 1
	},
	"强化软钢 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融强化软钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融强化软钢", 1]
		],
		"count": 1
	},
	"强化软钢 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融强化软钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融强化软钢", 1]
		],
		"count": 1
	},
	"熔融锇": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "锇锭", null],
			[null, null, null]
		],
		"ingredients": [
			["锇锭", 1]
		],
		"count": 1
	},
	"特性: 锤子": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "锇锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["锇锭", 1]
		],
		"count": 1
	},
	"特性: 重型鞍座": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "锇锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["锇锭", 1]
		],
		"count": 1
	},
	"特性: 增重": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "锇锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["锇锭", 1]
		],
		"count": 1
	},
	"特性: 画笔": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "锇锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["锇锭", 1]
		],
		"count": 1
	},
	"锇 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融锇"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融锇", 1]
		],
		"count": 1
	},
	"锇 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融锇"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融锇", 1]
		],
		"count": 1
	},
	"锇 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融锇"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融锇", 1]
		],
		"count": 1
	},
	"锇 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融锇"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融锇", 1]
		],
		"count": 1
	},
	"锇 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融锇"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融锇", 1]
		],
		"count": 1
	},
	"锇 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融锇"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融锇", 1]
		],
		"count": 1
	},
	"锇 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融锇"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融锇", 1]
		],
		"count": 1
	},
	"锇 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融锇"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融锇", 1]
		],
		"count": 1
	},
	"锇 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融锇"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融锇", 1]
		],
		"count": 1
	},
	"锇 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融锇"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融锇", 1]
		],
		"count": 1
	},
	"锇 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融锇"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融锇", 1]
		],
		"count": 1
	},
	"锇 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融锇"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融锇", 1]
		],
		"count": 1
	},
	"熔融锇高温合金": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "锇高温合金", null],
			[null, null, null]
		],
		"ingredients": [
			["锇高温合金", 1]
		],
		"count": 1
	},
	"特性: 野蛮人": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "锇高温合金"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["锇高温合金", 1]
		],
		"count": 1
	},
	"特性: 击退": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "锇高温合金"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["锇高温合金", 1]
		],
		"count": 1
	},
	"特性: 闪电风暴": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "锇高温合金"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["锇高温合金", 1]
		],
		"count": 1
	},
	"特性: 部分衰变": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "锇高温合金"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["锇高温合金", 1]
		],
		"count": 1
	},
	"锇高温合金 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融锇高温合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融锇高温合金", 1]
		],
		"count": 1
	},
	"锇高温合金 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融锇高温合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融锇高温合金", 1]
		],
		"count": 1
	},
	"锇高温合金 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融锇高温合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融锇高温合金", 1]
		],
		"count": 1
	},
	"锇高温合金 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融锇高温合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融锇高温合金", 1]
		],
		"count": 1
	},
	"锇高温合金 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融锇高温合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融锇高温合金", 1]
		],
		"count": 1
	},
	"锇高温合金 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融锇高温合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融锇高温合金", 1]
		],
		"count": 1
	},
	"锇高温合金 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融锇高温合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融锇高温合金", 1]
		],
		"count": 1
	},
	"锇高温合金 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融锇高温合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融锇高温合金", 1]
		],
		"count": 1
	},
	"锇高温合金 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融锇高温合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融锇高温合金", 1]
		],
		"count": 1
	},
	"锇高温合金 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融锇高温合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融锇高温合金", 1]
		],
		"count": 1
	},
	"锇高温合金 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融锇高温合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融锇高温合金", 1]
		],
		"count": 1
	},
	"锇高温合金 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融锇高温合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融锇高温合金", 1]
		],
		"count": 1
	},
	"熔融非专利品": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "非专利品", null],
			[null, null, null]
		],
		"ingredients": [
			["非专利品", 1]
		],
		"count": 1
	},
	"特性: 创新": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "非专利品"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["非专利品", 1]
		],
		"count": 1
	},
	"特性: 无形权利": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "非专利品"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["非专利品", 1]
		],
		"count": 1
	},
	"特性: 强力凝视": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "非专利品"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["非专利品", 1]
		],
		"count": 1
	},
	"特性: 圆桌骑士": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "非专利品"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["非专利品", 1]
		],
		"count": 1
	},
	"非专利品 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融非专利品"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融非专利品", 1]
		],
		"count": 1
	},
	"非专利品 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融非专利品"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融非专利品", 1]
		],
		"count": 1
	},
	"非专利品 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融非专利品"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融非专利品", 1]
		],
		"count": 1
	},
	"非专利品 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融非专利品"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融非专利品", 1]
		],
		"count": 1
	},
	"非专利品 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融非专利品"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融非专利品", 1]
		],
		"count": 1
	},
	"非专利品 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融非专利品"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融非专利品", 1]
		],
		"count": 1
	},
	"非专利品 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融非专利品"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融非专利品", 1]
		],
		"count": 1
	},
	"非专利品 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融非专利品"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融非专利品", 1]
		],
		"count": 1
	},
	"非专利品 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融非专利品"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融非专利品", 1]
		],
		"count": 1
	},
	"非专利品 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融非专利品"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融非专利品", 1]
		],
		"count": 1
	},
	"非专利品 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融非专利品"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融非专利品", 1]
		],
		"count": 1
	},
	"非专利品 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融非专利品"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融非专利品", 1]
		],
		"count": 1
	},
	"熔融不锈钢": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "不锈钢锭", null],
			[null, null, null]
		],
		"ingredients": [
			["不锈钢锭", 1]
		],
		"count": 1
	},
	"熔融不锈钢": {
		"type": "匠魂冶炼炉",
		"map": [
			["熔融铁", "熔融锌", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["熔融铁", 1],
			["熔融锌", 1]
		],
		"count": 1
	},
	"特性: 超级不锈钢": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "不锈钢锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["不锈钢锭", 1]
		],
		"count": 1
	},
	"特性: 餐具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "不锈钢锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["不锈钢锭", 1]
		],
		"count": 1
	},
	"特性: 标准": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "不锈钢锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["不锈钢锭", 1]
		],
		"count": 1
	},
	"特性: 水里是安全的": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "不锈钢锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["不锈钢锭", 1]
		],
		"count": 1
	},
	"不锈钢 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融不锈钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融不锈钢", 1]
		],
		"count": 1
	},
	"不锈钢 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融不锈钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融不锈钢", 1]
		],
		"count": 1
	},
	"不锈钢 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融不锈钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融不锈钢", 1]
		],
		"count": 1
	},
	"不锈钢 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融不锈钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融不锈钢", 1]
		],
		"count": 1
	},
	"不锈钢 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融不锈钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融不锈钢", 1]
		],
		"count": 1
	},
	"不锈钢 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融不锈钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融不锈钢", 1]
		],
		"count": 1
	},
	"不锈钢 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融不锈钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融不锈钢", 1]
		],
		"count": 1
	},
	"不锈钢 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融不锈钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融不锈钢", 1]
		],
		"count": 1
	},
	"不锈钢 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融不锈钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融不锈钢", 1]
		],
		"count": 1
	},
	"不锈钢 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融不锈钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融不锈钢", 1]
		],
		"count": 1
	},
	"不锈钢 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融不锈钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融不锈钢", 1]
		],
		"count": 1
	},
	"不锈钢 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融不锈钢"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融不锈钢", 1]
		],
		"count": 1
	},
	"熔融恼鬼宝石": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "恼鬼宝石", null],
			[null, null, null]
		],
		"ingredients": [
			["恼鬼宝石", 1]
		],
		"count": 1
	},
	"特性: 土遁": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 绑定结", null, "恼鬼宝石"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 绑定结", 1],
			["恼鬼宝石", 1]
		],
		"count": 1
	},
	"特性: 真让人烦恼": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 护身软甲", null, "恼鬼宝石"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 护身软甲", 1],
			["恼鬼宝石", 1]
		],
		"count": 1
	},
	"恼鬼宝石 绑定结": {
		"type": "匠魂合成站",
		"map": [
			["恼鬼宝石", null, "恼鬼宝石"],
			[null, "恼鬼宝石", null],
			["恼鬼宝石", null, "恼鬼宝石"]
		],
		"ingredients": [
			["恼鬼宝石", 5]
		],
		"count": 1
	},
	"恼鬼宝石 护身软甲": {
		"type": "匠魂合成站",
		"map": [
			[null, "恼鬼宝石", "恼鬼宝石"],
			["恼鬼宝石", null, "恼鬼宝石"],
			["恼鬼宝石", "恼鬼宝石", null]
		],
		"ingredients": [
			["恼鬼宝石", 6]
		],
		"count": 1
	},
	"熔融星尘": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "星尘", null],
			[null, null, null]
		],
		"ingredients": [
			["星尘", 1]
		],
		"count": 1
	},
	"特性: 光煞": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "星尘"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["星尘", 1]
		],
		"count": 1
	},
	"特性: 依凡": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "星尘"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["星尘", 1]
		],
		"count": 1
	},
	"特性: 星光": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "星尘"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["星尘", 1]
		],
		"count": 1
	},
	"特性: 魔童": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "星尘"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["星尘", 1]
		],
		"count": 1
	},
	"星尘 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融星尘"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融星尘", 1]
		],
		"count": 1
	},
	"星尘 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融星尘"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融星尘", 1]
		],
		"count": 1
	},
	"星尘 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融星尘"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融星尘", 1]
		],
		"count": 1
	},
	"星尘 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融星尘"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融星尘", 1]
		],
		"count": 1
	},
	"星尘 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融星尘"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融星尘", 1]
		],
		"count": 1
	},
	"星尘 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融星尘"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融星尘", 1]
		],
		"count": 1
	},
	"星尘 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融星尘"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融星尘", 1]
		],
		"count": 1
	},
	"星尘 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融星尘"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融星尘", 1]
		],
		"count": 1
	},
	"星尘 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融星尘"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融星尘", 1]
		],
		"count": 1
	},
	"星尘 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融星尘"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融星尘", 1]
		],
		"count": 1
	},
	"星尘 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融星尘"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融星尘", 1]
		],
		"count": 1
	},
	"星尘 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融星尘"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融星尘", 1]
		],
		"count": 1
	},
	"熔融幽灵精华": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "幽灵精华", null],
			[null, null, null]
		],
		"ingredients": [
			["幽灵精华", 1]
		],
		"count": 1
	},
	"特性: 幽灵形态": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 绑定结", null, "幽灵精华"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 绑定结", 1],
			["幽灵精华", 1]
		],
		"count": 1
	},
	"特性: 超立方体 [B]": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "幽灵精华"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["幽灵精华", 1]
		],
		"count": 1
	},
	"特性: 攻壳机动队": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 护身软甲", null, "幽灵精华"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 护身软甲", 1],
			["幽灵精华", 1]
		],
		"count": 1
	},
	"特性: 幽灵之影": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "幽灵精华"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["幽灵精华", 1]
		],
		"count": 1
	},
	"幽灵精华 绑定结": {
		"type": "匠魂合成站",
		"map": [
			["幽灵精华", null, "幽灵精华"],
			[null, "幽灵精华", null],
			["幽灵精华", null, "幽灵精华"]
		],
		"ingredients": [
			["幽灵精华", 5]
		],
		"count": 1
	},
	"幽灵精华 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融幽灵精华"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融幽灵精华", 1]
		],
		"count": 1
	},
	"幽灵精华 护身软甲": {
		"type": "匠魂合成站",
		"map": [
			[null, "幽灵精华", "幽灵精华"],
			["幽灵精华", null, "幽灵精华"],
			["幽灵精华", "幽灵精华", null]
		],
		"ingredients": [
			["幽灵精华", 6]
		],
		"count": 1
	},
	"幽灵精华 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融幽灵精华"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融幽灵精华", 1]
		],
		"count": 1
	},
	"熔融光学材料": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "光学物品", null],
			[null, null, null]
		],
		"ingredients": [
			["光学物品", 1]
		],
		"count": 1
	},
	"特性: 超立方体 [A]": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "光学物品"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["光学物品", 1]
		],
		"count": 1
	},
	"特性: 光学能量": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "光学物品"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["光学物品", 1]
		],
		"count": 1
	},
	"特性: 光学能量": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "光学物品"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["光学物品", 1]
		],
		"count": 1
	},
	"光学材料 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融光学材料"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融光学材料", 1]
		],
		"count": 1
	},
	"光学材料 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融光学材料"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融光学材料", 1]
		],
		"count": 1
	},
	"光学材料 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融光学材料"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融光学材料", 1]
		],
		"count": 1
	},
	"光学材料 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融光学材料"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融光学材料", 1]
		],
		"count": 1
	},
	"光学材料 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融光学材料"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融光学材料", 1]
		],
		"count": 1
	},
	"光学材料 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融光学材料"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融光学材料", 1]
		],
		"count": 1
	},
	"光学材料 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融光学材料"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融光学材料", 1]
		],
		"count": 1
	},
	"光学材料 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融光学材料"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融光学材料", 1]
		],
		"count": 1
	},
	"光学材料 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融光学材料"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融光学材料", 1]
		],
		"count": 1
	},
	"光学材料 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融光学材料"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融光学材料", 1]
		],
		"count": 1
	},
	"光学材料 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融光学材料"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融光学材料", 1]
		],
		"count": 1
	},
	"特性: 绝缘": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 绑定结", null, "橡胶"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 绑定结", 1],
			["橡胶", 1]
		],
		"count": 1
	},
	"特性: 出汗": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 护身软甲", null, "橡胶"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 护身软甲", 1],
			["橡胶", 1]
		],
		"count": 1
	},
	"橡胶 绑定结": {
		"type": "匠魂合成站",
		"map": [
			["橡胶", null, "橡胶"],
			[null, "橡胶", null],
			["橡胶", null, "橡胶"]
		],
		"ingredients": [
			["橡胶", 5]
		],
		"count": 1
	},
	"橡胶 护身软甲": {
		"type": "匠魂合成站",
		"map": [
			[null, "橡胶", "橡胶"],
			["橡胶", null, "橡胶"],
			["橡胶", "橡胶", null]
		],
		"ingredients": [
			["橡胶", 6]
		],
		"count": 1
	},
	"熔融精炼铁": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "精炼铁", null],
			[null, null, null]
		],
		"ingredients": [
			["精炼铁", 1]
		],
		"count": 1
	},
	"特性: 真的稳定": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "精炼铁"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["精炼铁", 1]
		],
		"count": 1
	},
	"特性: 不知礼，无以立也": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "精炼铁"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["精炼铁", 1]
		],
		"count": 1
	},
	"特性: 王牌特工": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "精炼铁"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["精炼铁", 1]
		],
		"count": 1
	},
	"特性: 看不到我": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "精炼铁"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["精炼铁", 1]
		],
		"count": 1
	},
	"精炼铁 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融精炼铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融精炼铁", 1]
		],
		"count": 1
	},
	"精炼铁 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融精炼铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融精炼铁", 1]
		],
		"count": 1
	},
	"精炼铁 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融精炼铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融精炼铁", 1]
		],
		"count": 1
	},
	"精炼铁 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融精炼铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融精炼铁", 1]
		],
		"count": 1
	},
	"精炼铁 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融精炼铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融精炼铁", 1]
		],
		"count": 1
	},
	"精炼铁 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融精炼铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融精炼铁", 1]
		],
		"count": 1
	},
	"精炼铁 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融精炼铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融精炼铁", 1]
		],
		"count": 1
	},
	"精炼铁 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融精炼铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融精炼铁", 1]
		],
		"count": 1
	},
	"精炼铁 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融精炼铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融精炼铁", 1]
		],
		"count": 1
	},
	"精炼铁 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融精炼铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融精炼铁", 1]
		],
		"count": 1
	},
	"精炼铁 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融精炼铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融精炼铁", 1]
		],
		"count": 1
	},
	"精炼铁 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融精炼铁"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融精炼铁", 1]
		],
		"count": 1
	},
	"熔融合金": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "合金锭", null],
			[null, null, null]
		],
		"ingredients": [
			["合金锭", 1]
		],
		"count": 1
	},
	"熔融合金": {
		"type": "匠魂冶炼炉",
		"map": [
			["熔融精炼铁", "熔融青铜", "熔融锡"],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["熔融精炼铁", 1],
			["熔融青铜", 1],
			["熔融锡", 1]
		],
		"count": 1
	},
	"特性: 合金": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "合金锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["合金锭", 1]
		],
		"count": 1
	},
	"特性: 倒霉鬼": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "合金锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["合金锭", 1]
		],
		"count": 1
	},
	"特性: 有经验的": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "合金锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["合金锭", 1]
		],
		"count": 1
	},
	"特性: 混乱": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "合金锭"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["合金锭", 1]
		],
		"count": 1
	},
	"合金 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融合金", 1]
		],
		"count": 1
	},
	"合金 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融合金", 1]
		],
		"count": 1
	},
	"合金 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融合金", 1]
		],
		"count": 1
	},
	"合金 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融合金", 1]
		],
		"count": 1
	},
	"合金 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融合金", 1]
		],
		"count": 1
	},
	"合金 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融合金", 1]
		],
		"count": 1
	},
	"合金 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融合金", 1]
		],
		"count": 1
	},
	"合金 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融合金", 1]
		],
		"count": 1
	},
	"合金 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融合金", 1]
		],
		"count": 1
	},
	"合金 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融合金", 1]
		],
		"count": 1
	},
	"合金 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融合金", 1]
		],
		"count": 1
	},
	"合金 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融合金", 1]
		],
		"count": 1
	},
	"熔融高级合金": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "高级合金", null],
			[null, null, null]
		],
		"ingredients": [
			["高级合金", 1]
		],
		"count": 1
	},
	"特性: 散射": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "高级合金"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["高级合金", 1]
		],
		"count": 1
	},
	"特性: 高负荷": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "高级合金"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["高级合金", 1]
		],
		"count": 1
	},
	"特性: 更加高级": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "高级合金"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["高级合金", 1]
		],
		"count": 1
	},
	"特性: 高温": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "高级合金"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["高级合金", 1]
		],
		"count": 1
	},
	"高级合金 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融高级合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融高级合金", 1]
		],
		"count": 1
	},
	"高级合金 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融高级合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融高级合金", 1]
		],
		"count": 1
	},
	"高级合金 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融高级合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融高级合金", 1]
		],
		"count": 1
	},
	"高级合金 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融高级合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融高级合金", 1]
		],
		"count": 1
	},
	"高级合金 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融高级合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融高级合金", 1]
		],
		"count": 1
	},
	"高级合金 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融高级合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融高级合金", 1]
		],
		"count": 1
	},
	"高级合金 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融高级合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融高级合金", 1]
		],
		"count": 1
	},
	"高级合金 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融高级合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融高级合金", 1]
		],
		"count": 1
	},
	"高级合金 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融高级合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融高级合金", 1]
		],
		"count": 1
	},
	"高级合金 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融高级合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融高级合金", 1]
		],
		"count": 1
	},
	"高级合金 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融高级合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融高级合金", 1]
		],
		"count": 1
	},
	"高级合金 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融高级合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融高级合金", 1]
		],
		"count": 1
	},
	"熔融钍": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "钍", null],
			[null, null, null]
		],
		"ingredients": [
			["钍", 1]
		],
		"count": 1
	},
	"熔融镁钍合金": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "镁钍合金", null],
			[null, null, null]
		],
		"ingredients": [
			["镁钍合金", 1]
		],
		"count": 1
	},
	"熔融镁钍合金": {
		"type": "匠魂冶炼炉",
		"map": [
			["熔融强化合金", "熔融钍", "熔融镁"],
			["熔融锌", null, null],
			[null, null, null]
		],
		"ingredients": [
			["熔融强化合金", 1],
			["熔融钍", 1],
			["熔融镁", 1],
			["熔融锌", 1]
		],
		"count": 1
	},
	"特性: 耐热": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "镁钍合金"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["镁钍合金", 1]
		],
		"count": 1
	},
	"特性: 吸血鬼": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "镁钍合金"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["镁钍合金", 1]
		],
		"count": 1
	},
	"特性: 放射性盔甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "镁钍合金"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["镁钍合金", 1]
		],
		"count": 1
	},
	"特性: 建筑狂怒": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "镁钍合金"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["镁钍合金", 1]
		],
		"count": 1
	},
	"镁钍合金 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融镁钍合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融镁钍合金", 1]
		],
		"count": 1
	},
	"镁钍合金 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融镁钍合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融镁钍合金", 1]
		],
		"count": 1
	},
	"镁钍合金 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融镁钍合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融镁钍合金", 1]
		],
		"count": 1
	},
	"镁钍合金 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融镁钍合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融镁钍合金", 1]
		],
		"count": 1
	},
	"镁钍合金 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融镁钍合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融镁钍合金", 1]
		],
		"count": 1
	},
	"镁钍合金 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融镁钍合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融镁钍合金", 1]
		],
		"count": 1
	},
	"镁钍合金 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融镁钍合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融镁钍合金", 1]
		],
		"count": 1
	},
	"镁钍合金 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融镁钍合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融镁钍合金", 1]
		],
		"count": 1
	},
	"镁钍合金 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融镁钍合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融镁钍合金", 1]
		],
		"count": 1
	},
	"镁钍合金 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融镁钍合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融镁钍合金", 1]
		],
		"count": 1
	},
	"镁钍合金 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融镁钍合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融镁钍合金", 1]
		],
		"count": 1
	},
	"镁钍合金 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融镁钍合金"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融镁钍合金", 1]
		],
		"count": 1
	},
	"特性: 敏捷": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 绑定结", null, "粗制碳板"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 绑定结", 1],
			["粗制碳板", 1]
		],
		"count": 1
	},
	"特性: 碳纤维": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 护身软甲", null, "粗制碳板"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 护身软甲", 1],
			["粗制碳板", 1]
		],
		"count": 1
	},
	"粗制碳板 绑定结": {
		"type": "匠魂合成站",
		"map": [
			["粗制碳板", null, "粗制碳板"],
			[null, "粗制碳板", null],
			["粗制碳板", null, "粗制碳板"]
		],
		"ingredients": [
			["粗制碳板", 5]
		],
		"count": 1
	},
	"粗制碳板 护身软甲": {
		"type": "匠魂合成站",
		"map": [
			[null, "粗制碳板", "粗制碳板"],
			["粗制碳板", null, "粗制碳板"],
			["粗制碳板", "粗制碳板", null]
		],
		"ingredients": [
			["粗制碳板", 6]
		],
		"count": 1
	},
	"熔融废料": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "废料", null],
			[null, null, null]
		],
		"ingredients": [
			["废料", 1]
		],
		"count": 1
	},
	"特性: 可怕": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "废料"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["废料", 1]
		],
		"count": 1
	},
	"特性: 这是个脑力活": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "废料"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["废料", 1]
		],
		"count": 1
	},
	"特性: 可悲": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "废料"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["废料", 1]
		],
		"count": 1
	},
	"特性: 分崩离析": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "废料"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["废料", 1]
		],
		"count": 1
	},
	"废料 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融废料"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融废料", 1]
		],
		"count": 1
	},
	"废料 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融废料"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融废料", 1]
		],
		"count": 1
	},
	"废料 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融废料"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融废料", 1]
		],
		"count": 1
	},
	"废料 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融废料"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融废料", 1]
		],
		"count": 1
	},
	"废料 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融废料"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融废料", 1]
		],
		"count": 1
	},
	"废料 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融废料"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融废料", 1]
		],
		"count": 1
	},
	"废料 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融废料"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融废料", 1]
		],
		"count": 1
	},
	"废料 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融废料"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融废料", 1]
		],
		"count": 1
	},
	"废料 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融废料"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融废料", 1]
		],
		"count": 1
	},
	"废料 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融废料"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融废料", 1]
		],
		"count": 1
	},
	"废料 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融废料"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融废料", 1]
		],
		"count": 1
	},
	"废料 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融废料"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融废料", 1]
		],
		"count": 1
	},
	"熔融铱": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "铱", null],
			[null, null, null]
		],
		"ingredients": [
			["铱", 1]
		],
		"count": 1
	},
	"特性: 保护": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "铱"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["铱", 1]
		],
		"count": 1
	},
	"特性: 别看我": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 手柄", null, "铱"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 手柄", 1],
			["铱", 1]
		],
		"count": 1
	},
	"特性: 不屈": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "铱"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["铱", 1]
		],
		"count": 1
	},
	"特性: 非常规力量": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "铱"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["铱", 1]
		],
		"count": 1
	},
	"铱 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融铱"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融铱", 1]
		],
		"count": 1
	},
	"铱 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融铱"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融铱", 1]
		],
		"count": 1
	},
	"铱 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融铱"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融铱", 1]
		],
		"count": 1
	},
	"铱 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融铱"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融铱", 1]
		],
		"count": 1
	},
	"铱 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融铱"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融铱", 1]
		],
		"count": 1
	},
	"铱 手柄": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 手柄", null, "熔融铱"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 手柄", 1],
			["熔融铱", 1]
		],
		"count": 1
	},
	"铱 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融铱"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融铱", 1]
		],
		"count": 1
	},
	"铱 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融铱"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融铱", 1]
		],
		"count": 1
	},
	"铱 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融铱"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融铱", 1]
		],
		"count": 1
	},
	"铱 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融铱"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融铱", 1]
		],
		"count": 1
	},
	"铱 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融铱"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融铱", 1]
		],
		"count": 1
	},
	"铱 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融铱"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融铱", 1]
		],
		"count": 1
	},
	"熔融超能力核心(S)": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "超能力核心 (S)", null],
			[null, null, null]
		],
		"ingredients": [
			["超能力核心 (S)", 1]
		],
		"count": 1
	},
	"特性: 超能力": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 头部", null, "超能力核心 (S)"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 头部", 1],
			["超能力核心 (S)", 1]
		],
		"count": 1
	},
	"超能力核心(S) 剑刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 剑刃", null, "熔融超能力核心(S)"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 剑刃", 1],
			["熔融超能力核心(S)", 1]
		],
		"count": 1
	},
	"超能力核心(S) 锄头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 锄头", null, "熔融超能力核心(S)"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 锄头", 1],
			["熔融超能力核心(S)", 1]
		],
		"count": 1
	},
	"超能力核心(S) 斧刃": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 斧刃", null, "熔融超能力核心(S)"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 斧刃", 1],
			["熔融超能力核心(S)", 1]
		],
		"count": 1
	},
	"超能力核心(S) 镐头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 镐头", null, "熔融超能力核心(S)"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 镐头", 1],
			["熔融超能力核心(S)", 1]
		],
		"count": 1
	},
	"超能力核心(S) 铲头": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 铲头", null, "熔融超能力核心(S)"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 铲头", 1],
			["熔融超能力核心(S)", 1]
		],
		"count": 1
	},
	"超能力核心(S) 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融超能力核心(S)"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融超能力核心(S)", 1]
		],
		"count": 1
	},
	"熔融超能力核心(A)": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "超能力核心 (A)", null],
			[null, null, null]
		],
		"ingredients": [
			["超能力核心 (A)", 1]
		],
		"count": 1
	},
	"特性: 超能力联合(A)": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "超能力核心 (A)"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["超能力核心 (A)", 1]
		],
		"count": 1
	},
	"超能力核心(A) 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融超能力核心(A)"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融超能力核心(A)", 1]
		],
		"count": 1
	},
	"超能力核心(A) 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融超能力核心(A)"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融超能力核心(A)", 1]
		],
		"count": 1
	},
	"超能力核心(A) 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融超能力核心(A)"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融超能力核心(A)", 1]
		],
		"count": 1
	},
	"超能力核心(A) 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融超能力核心(A)"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融超能力核心(A)", 1]
		],
		"count": 1
	},
	"超能力核心(A) 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融超能力核心(A)"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融超能力核心(A)", 1]
		],
		"count": 1
	},
	"熔融超能力核心(F)": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "超能力核心 (F)", null],
			[null, null, null]
		],
		"ingredients": [
			["超能力核心 (F)", 1]
		],
		"count": 1
	},
	"特性: 超能力联合(F)": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "超能力核心 (F)"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["超能力核心 (F)", 1]
		],
		"count": 1
	},
	"超能力核心(F) 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融超能力核心(F)"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融超能力核心(F)", 1]
		],
		"count": 1
	},
	"超能力核心(F) 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融超能力核心(F)"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融超能力核心(F)", 1]
		],
		"count": 1
	},
	"超能力核心(F) 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融超能力核心(F)"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融超能力核心(F)", 1]
		],
		"count": 1
	},
	"超能力核心(F) 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融超能力核心(F)"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融超能力核心(F)", 1]
		],
		"count": 1
	},
	"超能力核心(F) 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融超能力核心(F)"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融超能力核心(F)", 1]
		],
		"count": 1
	},
	"熔融超能力核心(H)": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "超能力核心 (H)", null],
			[null, null, null]
		],
		"ingredients": [
			["超能力核心 (H)", 1]
		],
		"count": 1
	},
	"特性: 超能力联合(H)": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "超能力核心 (H)"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["超能力核心 (H)", 1]
		],
		"count": 1
	},
	"超能力核心(H) 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融超能力核心(H)"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融超能力核心(H)", 1]
		],
		"count": 1
	},
	"超能力核心(H) 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融超能力核心(H)"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融超能力核心(H)", 1]
		],
		"count": 1
	},
	"超能力核心(H) 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融超能力核心(H)"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融超能力核心(H)", 1]
		],
		"count": 1
	},
	"超能力核心(H) 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融超能力核心(H)"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融超能力核心(H)", 1]
		],
		"count": 1
	},
	"超能力核心(H) 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融超能力核心(H)"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融超能力核心(H)", 1]
		],
		"count": 1
	},
	"熔融超能力核心(R)": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "超能力核心 (R)", null],
			[null, null, null]
		],
		"ingredients": [
			["超能力核心 (R)", 1]
		],
		"count": 1
	},
	"特性: 超能力联合(R)": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲板", null, "超能力核心 (R)"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲板", 1],
			["超能力核心 (R)", 1]
		],
		"count": 1
	},
	"超能力核心(R) 头盔板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 头盔板", null, "熔融超能力核心(R)"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 头盔板", 1],
			["熔融超能力核心(R)", 1]
		],
		"count": 1
	},
	"超能力核心(R) 胸甲板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 胸甲板", null, "熔融超能力核心(R)"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 胸甲板", 1],
			["熔融超能力核心(R)", 1]
		],
		"count": 1
	},
	"超能力核心(R) 护腿板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 护腿板", null, "熔融超能力核心(R)"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 护腿板", 1],
			["熔融超能力核心(R)", 1]
		],
		"count": 1
	},
	"超能力核心(R) 靴子板": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 靴子板", null, "熔融超能力核心(R)"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 靴子板", 1],
			["熔融超能力核心(R)", 1]
		],
		"count": 1
	},
	"超能力核心(R) 修复工具": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 修复工具", null, "熔融超能力核心(R)"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 修复工具", 1],
			["熔融超能力核心(R)", 1]
		],
		"count": 1
	},
	"熔融跨越维度的存在": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "跨跃维度的存在", null],
			[null, null, null]
		],
		"ingredients": [
			["跨跃维度的存在", 1]
		],
		"count": 1
	},
	"熔融古代远程访问": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "古代网络远程访问器", null],
			[null, null, null]
		],
		"ingredients": [
			["古代网络远程访问器", 1]
		],
		"count": 1
	},
	"熔融终极远程访问": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			[null, "终极网络远程访问器", null],
			[null, null, null]
		],
		"ingredients": [
			["终极网络远程访问器", 1]
		],
		"count": 1
	},
	"熔融终极远程访问": {
		"type": "匠魂冶炼炉",
		"map": [
			["熔融跨越维度的存在", "熔融古代远程访问", null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["熔融跨越维度的存在", 1],
			["熔融古代远程访问", 1]
		],
		"count": 1
	},
	"特性: 接入网络": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["部件: 盔甲接合物", null, "终极网络远程访问器"],
			[null, null, null]
		],
		"ingredients": [
			["部件: 盔甲接合物", 1],
			["终极网络远程访问器", 1]
		],
		"count": 1
	},
	"终极远程访问 盔甲接合物": {
		"type": "匠魂冶炼炉",
		"map": [
			[null, null, null],
			["模具: 盔甲接合物", null, "熔融终极远程访问"],
			[null, null, null]
		],
		"ingredients": [
			["模具: 盔甲接合物", 1],
			["熔融终极远程访问", 1]
		],
		"count": 1
	},
	"指南: 记录者": {
		"type": "指南",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"指南: 现实祭坛": {
		"type": "指南",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"指南: 液化池": {
		"type": "指南",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"指南: 法杖配置器": {
		"type": "指南",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"指南: 制作法术": {
		"type": "指南",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"指南: 充能法术": {
		"type": "指南",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"指南: 下界祛魔": {
		"type": "指南",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"指南: 镀金": {
		"type": "指南",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"元素水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"机械水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"炼金水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"历史水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"人类水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"动物水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"天体水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"虚空水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"哲学水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"普通元素水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"普通机械水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"普通炼金水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"普通历史水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"普通人类水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"普通动物水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"普通天体水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"普通虚空水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"普通哲学水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"罕见元素水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"罕见机械水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"罕见炼金水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"罕见历史水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"罕见人类水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"罕见动物水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"罕见天体水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"罕见虚空水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"罕见哲学水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"稀有元素水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"稀有机械水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"稀有炼金水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"稀有历史水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"稀有人类水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"稀有动物水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"稀有天体水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"稀有虚空水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"稀有哲学水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"史诗元素水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"史诗机械水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"史诗炼金水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"史诗历史水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"史诗人类水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"史诗动物水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"史诗天体水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"史诗虚空水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"史诗哲学水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"神秘元素水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"神秘机械水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"神秘炼金水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"神秘历史水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"神秘人类水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"神秘动物水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"神秘天体水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"神秘虚空水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"神秘哲学水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"独特元素水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"独特机械水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"独特炼金水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"独特历史水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"独特人类水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"独特动物水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"独特天体水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"独特虚空水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"独特哲学水晶": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"空白水晶": {
		"type": "下界祛魔",
		"map": [
			["神秘元素水晶", "神秘机械水晶", "神秘炼金水晶"],
			["神秘历史水晶", "神秘人类水晶", "神秘动物水晶"],
			["神秘天体水晶", "神秘虚空水晶", "神秘哲学水晶"]
		],
		"ingredients": [
			["神秘元素水晶", 1],
			["神秘机械水晶", 1],
			["神秘炼金水晶", 1],
			["神秘历史水晶", 1],
			["神秘人类水晶", 1],
			["神秘动物水晶", 1],
			["神秘天体水晶", 1],
			["神秘虚空水晶", 1],
			["神秘哲学水晶", 1]
		],
		"count": 1
	},
	"多彩水晶": {
		"type": "液化池",
		"map": [
			[null, "空白水晶", null],
			["元素水晶", "机械水晶", "炼金水晶"],
			[null, null, null]
		],
		"ingredients": [
			["空白水晶", 1],
			["元素水晶", 1],
			["机械水晶", 1],
			["炼金水晶", 1]
		],
		"count": 3
	},
	"千变水晶": {
		"type": "液化池",
		"map": [
			[null, "空白水晶", null],
			["历史水晶", "人类水晶", "动物水晶"],
			[null, null, null]
		],
		"ingredients": [
			["空白水晶", 1],
			["历史水晶", 1],
			["人类水晶", 1],
			["动物水晶", 1]
		],
		"count": 3
	},
	"混合水晶": {
		"type": "液化池",
		"map": [
			[null, "空白水晶", null],
			["天体水晶", "虚空水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["空白水晶", 1],
			["天体水晶", 1],
			["虚空水晶", 1],
			["哲学水晶", 1]
		],
		"count": 3
	},
	"棱镜水晶": {
		"type": "魔法工作台",
		"map": [
			[null, null, null],
			["多彩水晶", "千变水晶", "混合水晶"],
			[null, null, null]
		],
		"ingredients": [
			["多彩水晶", 1],
			["千变水晶", 1],
			["混合水晶", 1]
		],
		"count": 1
	},
	"融合粉 (普通)": {
		"type": "魔法工作台",
		"map": [
			["普通元素水晶", "普通机械水晶", "普通炼金水晶"],
			["普通历史水晶", "普通人类水晶", "普通动物水晶"],
			["普通天体水晶", "普通虚空水晶", "普通哲学水晶"]
		],
		"ingredients": [
			["普通元素水晶", 1],
			["普通机械水晶", 1],
			["普通炼金水晶", 1],
			["普通历史水晶", 1],
			["普通人类水晶", 1],
			["普通动物水晶", 1],
			["普通天体水晶", 1],
			["普通虚空水晶", 1],
			["普通哲学水晶", 1]
		],
		"count": 1
	},
	"融合粉 (罕见)": {
		"type": "魔法工作台",
		"map": [
			["罕见元素水晶", "罕见机械水晶", "罕见炼金水晶"],
			["罕见历史水晶", "罕见人类水晶", "罕见动物水晶"],
			["罕见天体水晶", "罕见虚空水晶", "罕见哲学水晶"]
		],
		"ingredients": [
			["罕见元素水晶", 1],
			["罕见机械水晶", 1],
			["罕见炼金水晶", 1],
			["罕见历史水晶", 1],
			["罕见人类水晶", 1],
			["罕见动物水晶", 1],
			["罕见天体水晶", 1],
			["罕见虚空水晶", 1],
			["罕见哲学水晶", 1]
		],
		"count": 1
	},
	"融合粉 (稀有)": {
		"type": "魔法工作台",
		"map": [
			["稀有元素水晶", "稀有机械水晶", "稀有炼金水晶"],
			["稀有历史水晶", "稀有人类水晶", "稀有动物水晶"],
			["稀有天体水晶", "稀有虚空水晶", "稀有哲学水晶"]
		],
		"ingredients": [
			["稀有元素水晶", 1],
			["稀有机械水晶", 1],
			["稀有炼金水晶", 1],
			["稀有历史水晶", 1],
			["稀有人类水晶", 1],
			["稀有动物水晶", 1],
			["稀有天体水晶", 1],
			["稀有虚空水晶", 1],
			["稀有哲学水晶", 1]
		],
		"count": 1
	},
	"融合粉 (史诗)": {
		"type": "魔法工作台",
		"map": [
			["史诗元素水晶", "史诗机械水晶", "史诗炼金水晶"],
			["史诗历史水晶", "史诗人类水晶", "史诗动物水晶"],
			["史诗天体水晶", "史诗虚空水晶", "史诗哲学水晶"]
		],
		"ingredients": [
			["史诗元素水晶", 1],
			["史诗机械水晶", 1],
			["史诗炼金水晶", 1],
			["史诗历史水晶", 1],
			["史诗人类水晶", 1],
			["史诗动物水晶", 1],
			["史诗天体水晶", 1],
			["史诗虚空水晶", 1],
			["史诗哲学水晶", 1]
		],
		"count": 1
	},
	"融合粉 (神秘)": {
		"type": "魔法工作台",
		"map": [
			["神秘元素水晶", "神秘机械水晶", "神秘炼金水晶"],
			["神秘历史水晶", "神秘人类水晶", "神秘动物水晶"],
			["神秘天体水晶", "神秘虚空水晶", "神秘哲学水晶"]
		],
		"ingredients": [
			["神秘元素水晶", 1],
			["神秘机械水晶", 1],
			["神秘炼金水晶", 1],
			["神秘历史水晶", 1],
			["神秘人类水晶", 1],
			["神秘动物水晶", 1],
			["神秘天体水晶", 1],
			["神秘虚空水晶", 1],
			["神秘哲学水晶", 1]
		],
		"count": 1
	},
	"融合粉 (独特)": {
		"type": "魔法工作台",
		"map": [
			["独特元素水晶", "独特机械水晶", "独特炼金水晶"],
			["独特历史水晶", "独特人类水晶", "独特动物水晶"],
			["独特天体水晶", "独特虚空水晶", "独特哲学水晶"]
		],
		"ingredients": [
			["独特元素水晶", 1],
			["独特机械水晶", 1],
			["独特炼金水晶", 1],
			["独特历史水晶", 1],
			["独特人类水晶", 1],
			["独特动物水晶", 1],
			["独特天体水晶", 1],
			["独特虚空水晶", 1],
			["独特哲学水晶", 1]
		],
		"count": 1
	},
	"融合锭 (普通)": {
		"type": "冶炼炉",
		"map": [
			["融合粉 (普通)", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["融合粉 (普通)", 1]
		],
		"count": 1
	},
	"融合锭 (罕见)": {
		"type": "冶炼炉",
		"map": [
			["融合粉 (罕见)", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["融合粉 (罕见)", 1]
		],
		"count": 1
	},
	"融合锭 (稀有)": {
		"type": "冶炼炉",
		"map": [
			["融合粉 (稀有)", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["融合粉 (稀有)", 1]
		],
		"count": 1
	},
	"融合锭 (史诗)": {
		"type": "冶炼炉",
		"map": [
			["融合粉 (史诗)", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["融合粉 (史诗)", 1]
		],
		"count": 1
	},
	"融合锭 (神秘)": {
		"type": "冶炼炉",
		"map": [
			["融合粉 (神秘)", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["融合粉 (神秘)", 1]
		],
		"count": 1
	},
	"融合锭 (独特)": {
		"type": "冶炼炉",
		"map": [
			["融合粉 (独特)", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["融合粉 (独特)", 1]
		],
		"count": 1
	},
	"神秘印记": {
		"type": "现实祭坛",
		"map": [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [],
		"count": 1
	},
	"注魔玻璃": {
		"type": "液化池",
		"map": [
			[null, "玻璃板", null],
			["元素水晶", "人类水晶", "虚空水晶"],
			[null, null, null]
		],
		"ingredients": [
			["玻璃板", 1],
			["元素水晶", 1],
			["人类水晶", 1],
			["虚空水晶", 1]
		],
		"count": 1
	},
	"不可思议的珍珠": {
		"type": "液化池",
		"map": [
			[null, "末影珍珠", null],
			["虚空水晶", "天体水晶", "炼金水晶"],
			[null, null, null]
		],
		"ingredients": [
			["末影珍珠", 1],
			["虚空水晶", 1],
			["天体水晶", 1],
			["炼金水晶", 1]
		],
		"count": 1
	},
	"镀金珍珠": {
		"type": "魔法工作台",
		"map": [
			["镀金铁锭", "镀金铁锭", "镀金铁锭"],
			["镀金铁锭", "不可思议的珍珠", "镀金铁锭"],
			["镀金铁锭", "镀金铁锭", "镀金铁锭"]
		],
		"ingredients": [
			["镀金铁锭", 8],
			["不可思议的珍珠", 1]
		],
		"count": 1
	},
	"基本纤维": {
		"type": "液化池",
		"map": [
			[null, "小麦", null],
			["机械水晶", "历史水晶", "人类水晶"],
			[null, null, null]
		],
		"ingredients": [
			["小麦", 1],
			["机械水晶", 1],
			["历史水晶", 1],
			["人类水晶", 1]
		],
		"count": 1
	},
	"粉状精华": {
		"type": "液化池",
		"map": [
			[null, "骨粉", null],
			["元素水晶", "炼金水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["骨粉", 1],
			["元素水晶", 1],
			["炼金水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"魔法牛奶": {
		"type": "液化池",
		"map": [
			[null, "奶桶", null],
			["炼金水晶", "人类水晶", "动物水晶"],
			[null, null, null]
		],
		"ingredients": [
			["奶桶", 1],
			["炼金水晶", 1],
			["人类水晶", 1],
			["动物水晶", 1]
		],
		"count": 1
	},
	"记录者 (T1)": {
		"type": "增强型工作台",
		"map": [
			["深板岩圆石", "深板岩圆石", "深板岩圆石"],
			["科林斯青铜锭", "紫水晶簇", "科林斯青铜锭"],
			["魔法结晶 - II", "魔法结晶 - II", "魔法结晶 - II"]
		],
		"ingredients": [
			["深板岩圆石", 3],
			["科林斯青铜锭", 2],
			["紫水晶簇", 1],
			["魔法结晶 - II", 3]
		],
		"count": 1
	},
	"记录者 (T2)": {
		"type": "增强型工作台",
		"map": [
			["深板岩砖", "深板岩砖", "深板岩砖"],
			["融合锭 (罕见)", "记录者 (T1)", "融合锭 (罕见)"],
			["魔法结晶 - III", "魔法结晶 - III", "魔法结晶 - III"]
		],
		"ingredients": [
			["深板岩砖", 3],
			["融合锭 (罕见)", 2],
			["记录者 (T1)", 1],
			["魔法结晶 - III", 3]
		],
		"count": 1
	},
	"记录者 (T3)": {
		"type": "液化池",
		"map": [
			[null, "记录者 (T2)", null],
			["元素水晶", "天体水晶", "虚空水晶"],
			[null, null, null]
		],
		"ingredients": [
			["记录者 (T2)", 1],
			["元素水晶", 1],
			["天体水晶", 1],
			["虚空水晶", 1]
		],
		"count": 1
	},
	"记录者 (T4)": {
		"type": "液化池",
		"map": [
			[null, "记录者 (T3)", null],
			["元素水晶", "天体水晶", "虚空水晶"],
			[null, null, null]
		],
		"ingredients": [
			["记录者 (T3)", 1],
			["元素水晶", 1],
			["天体水晶", 1],
			["虚空水晶", 1]
		],
		"count": 1
	},
	"记录者 (T5)": {
		"type": "魔法工作台",
		"map": [
			[null, "黎明符文", null],
			["野性符文", "记录者 (T4)", "八重符文"],
			[null, "夜晚符文", null]
		],
		"ingredients": [
			["黎明符文", 1],
			["野性符文", 1],
			["记录者 (T4)", 1],
			["八重符文", 1],
			["夜晚符文", 1]
		],
		"count": 1
	},
	"现实祭坛 (T1)": {
		"type": "增强型工作台",
		"map": [
			[null, "书", null],
			["科林斯青铜锭", "紫水晶簇", "科林斯青铜锭"],
			["魔法结晶 - II", "普通护身符", "魔法结晶 - II"]
		],
		"ingredients": [
			["书", 1],
			["科林斯青铜锭", 2],
			["紫水晶簇", 1],
			["魔法结晶 - II", 2],
			["普通护身符", 1]
		],
		"count": 1
	},
	"现实祭坛 (T2)": {
		"type": "增强型工作台",
		"map": [
			[null, "书", null],
			["融合锭 (罕见)", "现实祭坛 (T1)", "融合锭 (罕见)"],
			["魔法结晶 - III", "古代符文 [灵魂绑定]", "魔法结晶 - III"]
		],
		"ingredients": [
			["书", 1],
			["融合锭 (罕见)", 2],
			["现实祭坛 (T1)", 1],
			["魔法结晶 - III", 2],
			["古代符文 [灵魂绑定]", 1]
		],
		"count": 1
	},
	"现实祭坛 (T3)": {
		"type": "液化池",
		"map": [
			[null, "现实祭坛 (T2)", null],
			["历史水晶", "人类水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["现实祭坛 (T2)", 1],
			["历史水晶", 1],
			["人类水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"现实祭坛 (T4)": {
		"type": "液化池",
		"map": [
			[null, "现实祭坛 (T3)", null],
			["历史水晶", "人类水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["现实祭坛 (T3)", 1],
			["历史水晶", 1],
			["人类水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"现实祭坛 (T5)": {
		"type": "魔法工作台",
		"map": [
			[null, "真实神圣符文", null],
			["大门符文", "现实祭坛 (T4)", "真实火焰符文"],
			[null, "真实风之符文", null]
		],
		"ingredients": [
			["真实神圣符文", 1],
			["大门符文", 1],
			["现实祭坛 (T4)", 1],
			["真实火焰符文", 1],
			["真实风之符文", 1]
		],
		"count": 1
	},
	"液化池 (T1)": {
		"type": "增强型工作台",
		"map": [
			["强化合金锭", null, "强化合金锭"],
			["强化合金锭", "炼药锅", "强化合金锭"],
			["强化合金锭", "普通护身符", "强化合金锭"]
		],
		"ingredients": [
			["强化合金锭", 6],
			["炼药锅", 1],
			["普通护身符", 1]
		],
		"count": 1
	},
	"液化池 (T2)": {
		"type": "增强型工作台",
		"map": [
			["融合粉 (稀有)", null, "融合粉 (稀有)"],
			["融合粉 (稀有)", "液化池 (T1)", "融合粉 (稀有)"],
			["融合粉 (稀有)", "古代符文 [附魔]", "融合粉 (稀有)"]
		],
		"ingredients": [
			["融合粉 (稀有)", 6],
			["液化池 (T1)", 1],
			["古代符文 [附魔]", 1]
		],
		"count": 1
	},
	"液化池 (T3)": {
		"type": "液化池",
		"map": [
			[null, "液化池 (T2)", null],
			["机械水晶", "炼金水晶", "动物水晶"],
			[null, null, null]
		],
		"ingredients": [
			["液化池 (T2)", 1],
			["机械水晶", 1],
			["炼金水晶", 1],
			["动物水晶", 1]
		],
		"count": 1
	},
	"液化池 (T4)": {
		"type": "液化池",
		"map": [
			[null, "液化池 (T3)", null],
			["机械水晶", "炼金水晶", "动物水晶"],
			[null, null, null]
		],
		"ingredients": [
			["液化池 (T3)", 1],
			["机械水晶", 1],
			["炼金水晶", 1],
			["动物水晶", 1]
		],
		"count": 1
	},
	"液化池 (T5)": {
		"type": "魔法工作台",
		"map": [
			[null, "至高符文", null],
			["转化符文", "液化池 (T4)", "黑色符文"],
			[null, "灵魂吞噬者符文", null]
		],
		"ingredients": [
			["至高符文", 1],
			["转化符文", 1],
			["液化池 (T4)", 1],
			["黑色符文", 1],
			["灵魂吞噬者符文", 1]
		],
		"count": 1
	},
	"法杖配置器": {
		"type": "液化池",
		"map": [
			[null, "铜块", null],
			["元素水晶", "机械水晶", "炼金水晶"],
			[null, null, null]
		],
		"ingredients": [
			["铜块", 1],
			["元素水晶", 1],
			["机械水晶", 1],
			["炼金水晶", 1]
		],
		"count": 1
	},
	"棱镜镀金器": {
		"type": "液化池",
		"map": [
			[null, "液化池 (T3)", null],
			["机械水晶", "虚空水晶", "天体水晶"],
			[null, null, null]
		],
		"ingredients": [
			["液化池 (T3)", 1],
			["机械水晶", 1],
			["虚空水晶", 1],
			["天体水晶", 1]
		],
		"count": 1
	},
	"基础法术板": {
		"type": "液化池",
		"map": [
			[null, null, null],
			[null, "紫水晶簇", null],
			[null, null, null]
		],
		"ingredients": [
			["紫水晶簇", 1]
		],
		"count": 1
	},
	"基础魔法板": {
		"type": "液化池",
		"map": [
			[null, "钢筋板", null],
			["元素水晶", "人类水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["钢筋板", 1],
			["元素水晶", 1],
			["人类水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"基础法杖": {
		"type": "魔法工作台",
		"map": [
			[null, null, "融合锭 (独特)"],
			[null, "木棍", null],
			["木棍", null, null]
		],
		"ingredients": [
			["融合锭 (独特)", 1],
			["木棍", 2]
		],
		"count": 1
	},
	"高级法杖": {
		"type": "魔法工作台",
		"map": [
			["融合锭 (普通)", "融合锭 (普通)", "融合锭 (普通)"],
			["融合锭 (普通)", "基础法杖", "融合锭 (普通)"],
			["融合锭 (普通)", "融合锭 (普通)", "融合锭 (普通)"]
		],
		"ingredients": [
			["融合锭 (普通)", 8],
			["基础法杖", 1]
		],
		"count": 1
	},
	"神秘法杖": {
		"type": "魔法工作台",
		"map": [
			["起源符文", "改变符文", "龙之符文"],
			["太阳符文", "高级法杖", "圆之符文"],
			["真实雷电符文", "魅力符文", "亮盾符文"]
		],
		"ingredients": [
			["起源符文", 1],
			["改变符文", 1],
			["龙之符文", 1],
			["太阳符文", 1],
			["高级法杖", 1],
			["圆之符文", 1],
			["真实雷电符文", 1],
			["魅力符文", 1],
			["亮盾符文", 1]
		],
		"count": 1
	},
	"折射棱镜": {
		"type": "魔法工作台",
		"map": [
			[null, "注魔玻璃", null],
			[null, "望远镜", null],
			[null, "融合锭 (普通)", null]
		],
		"ingredients": [
			["注魔玻璃", 1],
			["望远镜", 1],
			["融合锭 (普通)", 1]
		],
		"count": 1
	},
	"魔法盐": {
		"type": "魔法工作台",
		"map": [
			["融合粉 (普通)", "融合粉 (普通)", "融合粉 (普通)"],
			["融合粉 (普通)", "盐", "融合粉 (普通)"],
			["融合粉 (普通)", "融合粉 (普通)", "融合粉 (普通)"]
		],
		"ingredients": [
			["融合粉 (普通)", 8],
			["盐", 1]
		],
		"count": 1
	},
	"魔法传送网": {
		"type": "魔法工作台",
		"map": [
			["紫水晶碎片", "融合锭 (史诗)", "紫水晶碎片"],
			["融合锭 (史诗)", "下界之星", "融合锭 (史诗)"],
			["紫水晶碎片", "融合锭 (史诗)", "紫水晶碎片"]
		],
		"ingredients": [
			["紫水晶碎片", 4],
			["融合锭 (史诗)", 4],
			["下界之星", 1]
		],
		"count": 1
	},
	"临时工作台": {
		"type": "液化池",
		"map": [
			[null, "工作台", null],
			["人类水晶", "历史水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["工作台", 1],
			["人类水晶", 1],
			["历史水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"临时融合工作台": {
		"type": "液化池",
		"map": [
			[null, "临时工作台", null],
			["人类水晶", "历史水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["临时工作台", 1],
			["人类水晶", 1],
			["历史水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"发光勺 (1)": {
		"type": "液化池",
		"map": [
			[null, "灯笼", null],
			["天体水晶", "炼金水晶", "人类水晶"],
			[null, null, null]
		],
		"ingredients": [
			["灯笼", 1],
			["天体水晶", 1],
			["炼金水晶", 1],
			["人类水晶", 1]
		],
		"count": 1
	},
	"发光勺 (2)": {
		"type": "液化池",
		"map": [
			[null, "发光勺 (1)", null],
			["天体水晶", "炼金水晶", "人类水晶"],
			[null, null, null]
		],
		"ingredients": [
			["发光勺 (1)", 1],
			["天体水晶", 1],
			["炼金水晶", 1],
			["人类水晶", 1]
		],
		"count": 1
	},
	"发光勺 (3)": {
		"type": "液化池",
		"map": [
			[null, "发光勺 (2)", null],
			["天体水晶", "炼金水晶", "人类水晶"],
			[null, null, null]
		],
		"ingredients": [
			["发光勺 (2)", 1],
			["天体水晶", 1],
			["炼金水晶", 1],
			["人类水晶", 1]
		],
		"count": 1
	},
	"发光勺 (4)": {
		"type": "魔法工作台",
		"map": [
			[null, "真实地球符文", null],
			["真实水之符文", "发光勺 (3)", "暮光符文"],
			[null, "魅力符文", null]
		],
		"ingredients": [
			["真实地球符文", 1],
			["真实水之符文", 1],
			["发光勺 (3)", 1],
			["暮光符文", 1],
			["魅力符文", 1]
		],
		"count": 1
	},
	"连接指南针": {
		"type": "液化池",
		"map": [
			[null, "指南针", null],
			["机械水晶", "历史水晶", "人类水晶"],
			[null, null, null]
		],
		"ingredients": [
			["指南针", 1],
			["机械水晶", 1],
			["历史水晶", 1],
			["人类水晶", 1]
		],
		"count": 1
	},
	"强征 (1)": {
		"type": "液化池",
		"map": [
			[null, "骨头", null],
			["机械水晶", "人类水晶", "天体水晶"],
			[null, null, null]
		],
		"ingredients": [
			["骨头", 1],
			["机械水晶", 1],
			["人类水晶", 1],
			["天体水晶", 1]
		],
		"count": 1
	},
	"强征 (2)": {
		"type": "魔法工作台",
		"map": [
			[null, "转化符文", null],
			["真实神圣符文", "强征 (1)", "折跃符文"],
			[null, "真实雷电符文", null]
		],
		"ingredients": [
			["转化符文", 1],
			["真实神圣符文", 1],
			["强征 (1)", 1],
			["折跃符文", 1],
			["真实雷电符文", 1]
		],
		"count": 1
	},
	"简易置换器": {
		"type": "液化池",
		"map": [
			[null, "粉状精华", null],
			["炼金水晶", "动物水晶", "人类水晶"],
			[null, null, null]
		],
		"ingredients": [
			["粉状精华", 1],
			["炼金水晶", 1],
			["动物水晶", 1],
			["人类水晶", 1]
		],
		"count": 1
	},
	"神秘置换器": {
		"type": "液化池",
		"map": [
			[null, "简易置换器", null],
			["炼金水晶", "动物水晶", "人类水晶"],
			[null, null, null]
		],
		"ingredients": [
			["简易置换器", 1],
			["炼金水晶", 1],
			["动物水晶", 1],
			["人类水晶", 1]
		],
		"count": 1
	},
	"温和海绵": {
		"type": "液化池",
		"map": [
			[null, "海绵", null],
			["元素水晶", "炼金水晶", "虚空水晶"],
			[null, null, null]
		],
		"ingredients": [
			["海绵", 1],
			["元素水晶", 1],
			["炼金水晶", 1],
			["虚空水晶", 1]
		],
		"count": 1
	},
	"炽热海绵": {
		"type": "液化池",
		"map": [
			[null, "温和海绵", null],
			["元素水晶", "炼金水晶", "虚空水晶"],
			[null, null, null]
		],
		"ingredients": [
			["温和海绵", 1],
			["元素水晶", 1],
			["炼金水晶", 1],
			["虚空水晶", 1]
		],
		"count": 1
	},
	"超大海绵": {
		"type": "魔法工作台",
		"map": [
			[null, "改变符文", null],
			["太阳符文", "炽热海绵", "圆之符文"],
			[null, "八重符文", null]
		],
		"ingredients": [
			["改变符文", 1],
			["太阳符文", 1],
			["炽热海绵", 1],
			["圆之符文", 1],
			["八重符文", 1]
		],
		"count": 1
	},
	"符文睡袋": {
		"type": "液化池",
		"map": [
			[null, "白色床", null],
			["机械水晶", "历史水晶", "人类水晶"],
			[null, null, null]
		],
		"ingredients": [
			["白色床", 1],
			["机械水晶", 1],
			["历史水晶", 1],
			["人类水晶", 1]
		],
		"count": 1
	},
	"微型虚空裂隙": {
		"type": "魔法工作台",
		"map": [
			[null, "神秘置换器", null],
			[null, "虚空裂隙 (2)", null],
			[null, null, null]
		],
		"ingredients": [
			["神秘置换器", 1],
			["虚空裂隙 (2)", 1]
		],
		"count": 1
	},
	"学徒水晶收纳袋": {
		"type": "液化池",
		"map": [
			[null, "陷阱箱", null],
			["元素水晶", "人类水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["陷阱箱", 1],
			["元素水晶", 1],
			["人类水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"法师水晶收纳袋": {
		"type": "液化池",
		"map": [
			[null, "学徒水晶收纳袋", null],
			["炼金水晶", "动物水晶", "虚空水晶"],
			[null, null, null]
		],
		"ingredients": [
			["学徒水晶收纳袋", 1],
			["炼金水晶", 1],
			["动物水晶", 1],
			["虚空水晶", 1]
		],
		"count": 1
	},
	"巫师水晶收纳袋": {
		"type": "液化池",
		"map": [
			[null, "法师水晶收纳袋", null],
			["机械水晶", "历史水晶", "天体水晶"],
			[null, null, null]
		],
		"ingredients": [
			["法师水晶收纳袋", 1],
			["机械水晶", 1],
			["历史水晶", 1],
			["天体水晶", 1]
		],
		"count": 1
	},
	"咒术师水晶收纳袋": {
		"type": "液化池",
		"map": [
			[null, "巫师水晶收纳袋", null],
			["元素水晶", "人类水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["巫师水晶收纳袋", 1],
			["元素水晶", 1],
			["人类水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"术士水晶收纳袋": {
		"type": "液化池",
		"map": [
			[null, "咒术师水晶收纳袋", null],
			["炼金水晶", "动物水晶", "虚空水晶"],
			[null, null, null]
		],
		"ingredients": [
			["咒术师水晶收纳袋", 1],
			["炼金水晶", 1],
			["动物水晶", 1],
			["虚空水晶", 1]
		],
		"count": 1
	},
	"宗师水晶收纳袋": {
		"type": "液化池",
		"map": [
			[null, "术士水晶收纳袋", null],
			["机械水晶", "历史水晶", "天体水晶"],
			[null, null, null]
		],
		"ingredients": [
			["术士水晶收纳袋", 1],
			["机械水晶", 1],
			["历史水晶", 1],
			["天体水晶", 1]
		],
		"count": 1
	},
	"方块隐藏器 - 货运节点": {
		"type": "液化池",
		"map": [
			[null, "货运节点 (输入)", null],
			["机械水晶", "人类水晶", "虚空水晶"],
			[null, null, null]
		],
		"ingredients": [
			["货运节点 (输入)", 1],
			["机械水晶", 1],
			["人类水晶", 1],
			["虚空水晶", 1]
		],
		"count": 8
	},
	"方块隐藏器 - 能源节点": {
		"type": "液化池",
		"map": [
			[null, "能源连接器", null],
			["机械水晶", "人类水晶", "虚空水晶"],
			[null, null, null]
		],
		"ingredients": [
			["能源连接器", 1],
			["机械水晶", 1],
			["人类水晶", 1],
			["虚空水晶", 1]
		],
		"count": 8
	},
	"驱散之灯 (1)": {
		"type": "液化池",
		"map": [
			[null, "灯笼", null],
			["炼金水晶", "人类水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["灯笼", 1],
			["炼金水晶", 1],
			["人类水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"驱散之灯 (2)": {
		"type": "液化池",
		"map": [
			[null, "驱散之灯 (1)", null],
			["炼金水晶", "人类水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["驱散之灯 (1)", 1],
			["炼金水晶", 1],
			["人类水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"驱散之灯 (3)": {
		"type": "魔法工作台",
		"map": [
			[null, "起源符文", null],
			["夜晚符文", "驱散之灯 (2)", "暮光符文"],
			[null, "亮盾符文", null]
		],
		"ingredients": [
			["起源符文", 1],
			["夜晚符文", 1],
			["驱散之灯 (2)", 1],
			["暮光符文", 1],
			["亮盾符文", 1]
		],
		"count": 1
	},
	"空气炮 (1)": {
		"type": "液化池",
		"map": [
			[null, "驱散之灯 (1)", null],
			["历史水晶", "虚空水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["驱散之灯 (1)", 1],
			["历史水晶", 1],
			["虚空水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"空气炮 (2)": {
		"type": "液化池",
		"map": [
			[null, "驱散之灯 (2)", null],
			["历史水晶", "虚空水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["驱散之灯 (2)", 1],
			["历史水晶", 1],
			["虚空水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"空气炮 (3)": {
		"type": "魔法工作台",
		"map": [
			[null, "大门符文", null],
			["真实神圣符文", "驱散之灯 (2)", "太阳符文"],
			[null, "真实雷电符文", null]
		],
		"ingredients": [
			["大门符文", 1],
			["真实神圣符文", 1],
			["驱散之灯 (2)", 1],
			["太阳符文", 1],
			["真实雷电符文", 1]
		],
		"count": 1
	},
	"诅咒之地 (1)": {
		"type": "魔法工作台",
		"map": [
			["独特虚空水晶", "独特虚空水晶", "独特虚空水晶"],
			["泥土", "泥土", "泥土"],
			["融合粉 (稀有)", "融合粉 (稀有)", "融合粉 (稀有)"]
		],
		"ingredients": [
			["独特虚空水晶", 3],
			["泥土", 3],
			["融合粉 (稀有)", 3]
		],
		"count": 1
	},
	"诅咒之地 (2)": {
		"type": "液化池",
		"map": [
			[null, "诅咒之地 (1)", null],
			["虚空水晶", "动物水晶", "历史水晶"],
			[null, null, null]
		],
		"ingredients": [
			["诅咒之地 (1)", 1],
			["虚空水晶", 1],
			["动物水晶", 1],
			["历史水晶", 1]
		],
		"count": 1
	},
	"灵魂之地": {
		"type": "魔法工作台",
		"map": [
			[null, "真实地球符文", null],
			["真实水之符文", "诅咒之地 (2)", "圆之符文"],
			[null, "灵魂吞噬者符文", null]
		],
		"ingredients": [
			["真实地球符文", 1],
			["真实水之符文", 1],
			["诅咒之地 (2)", 1],
			["圆之符文", 1],
			["灵魂吞噬者符文", 1]
		],
		"count": 1
	},
	"灼烧板 (1)": {
		"type": "液化池",
		"map": [
			[null, "石质压力板", null],
			["炼金水晶", "虚空水晶", "机械水晶"],
			[null, null, null]
		],
		"ingredients": [
			["石质压力板", 1],
			["炼金水晶", 1],
			["虚空水晶", 1],
			["机械水晶", 1]
		],
		"count": 1
	},
	"灼烧板 (2)": {
		"type": "液化池",
		"map": [
			[null, "灼烧板 (1)", null],
			["炼金水晶", "虚空水晶", "机械水晶"],
			[null, null, null]
		],
		"ingredients": [
			["灼烧板 (1)", 1],
			["炼金水晶", 1],
			["虚空水晶", 1],
			["机械水晶", 1]
		],
		"count": 1
	},
	"灼烧板 (3)": {
		"type": "液化池",
		"map": [
			[null, "灼烧板 (2)", null],
			["炼金水晶", "虚空水晶", "机械水晶"],
			[null, null, null]
		],
		"ingredients": [
			["灼烧板 (2)", 1],
			["炼金水晶", 1],
			["虚空水晶", 1],
			["机械水晶", 1]
		],
		"count": 1
	},
	"灼烧板 (4)": {
		"type": "魔法工作台",
		"map": [
			[null, "转化符文", null],
			["至高符文", "灼烧板 (3)", "折跃符文"],
			[null, "魅力符文", null]
		],
		"ingredients": [
			["转化符文", 1],
			["至高符文", 1],
			["灼烧板 (3)", 1],
			["折跃符文", 1],
			["魅力符文", 1]
		],
		"count": 1
	},
	"陷阱板": {
		"type": "液化池",
		"map": [
			[null, "灼烧板 (3)", null],
			["炼金水晶", "天体水晶", "机械水晶"],
			[null, null, null]
		],
		"ingredients": [
			["灼烧板 (3)", 1],
			["炼金水晶", 1],
			["天体水晶", 1],
			["机械水晶", 1]
		],
		"count": 1
	},
	"基础经验收集器": {
		"type": "液化池",
		"map": [
			[null, "经验收集器", null],
			["机械水晶", "人类水晶", "动物水晶"],
			[null, null, null]
		],
		"ingredients": [
			["经验收集器", 1],
			["机械水晶", 1],
			["人类水晶", 1],
			["动物水晶", 1]
		],
		"count": 1
	},
	"注入经验收集器": {
		"type": "液化池",
		"map": [
			[null, "基础经验收集器", null],
			["机械水晶", "人类水晶", "动物水晶"],
			[null, null, null]
		],
		"ingredients": [
			["基础经验收集器", 1],
			["机械水晶", 1],
			["人类水晶", 1],
			["动物水晶", 1]
		],
		"count": 1
	},
	"神秘经验收集器": {
		"type": "魔法工作台",
		"map": [
			[null, "改变符文", null],
			["龙之符文", "注入经验收集器", "真实火焰符文"],
			[null, "真实风之符文", null]
		],
		"ingredients": [
			["改变符文", 1],
			["龙之符文", 1],
			["注入经验收集器", 1],
			["真实火焰符文", 1],
			["真实风之符文", 1]
		],
		"count": 1
	},
	"基础末影人抑制器": {
		"type": "魔法工作台",
		"map": [
			["不可思议的珍珠", "不可思议的珍珠", "不可思议的珍珠"],
			["不可思议的珍珠", "小冰柜", "不可思议的珍珠"],
			["不可思议的珍珠", "不可思议的珍珠", "不可思议的珍珠"]
		],
		"ingredients": [
			["不可思议的珍珠", 8],
			["小冰柜", 1]
		],
		"count": 1
	},
	"进阶末影人抑制器": {
		"type": "魔法工作台",
		"map": [
			["镀金珍珠", "镀金珍珠", "镀金珍珠"],
			["镀金珍珠", "基础末影人抑制器", "镀金珍珠"],
			["镀金珍珠", "镀金珍珠", "镀金珍珠"]
		],
		"ingredients": [
			["镀金珍珠", 8],
			["基础末影人抑制器", 1]
		],
		"count": 1
	},
	"防刷怪蜡烛 (1)": {
		"type": "液化池",
		"map": [
			[null, "黑色蜡烛", null],
			["历史水晶", "天体水晶", "动物水晶"],
			[null, null, null]
		],
		"ingredients": [
			["黑色蜡烛", 1],
			["历史水晶", 1],
			["天体水晶", 1],
			["动物水晶", 1]
		],
		"count": 1
	},
	"防刷怪蜡烛 (2)": {
		"type": "液化池",
		"map": [
			[null, "防刷怪蜡烛 (1)", null],
			["历史水晶", "天体水晶", "动物水晶"],
			[null, null, null]
		],
		"ingredients": [
			["防刷怪蜡烛 (1)", 1],
			["历史水晶", 1],
			["天体水晶", 1],
			["动物水晶", 1]
		],
		"count": 1
	},
	"防刷怪蜡烛 (3)": {
		"type": "液化池",
		"map": [
			[null, "防刷怪蜡烛 (2)", null],
			["历史水晶", "天体水晶", "动物水晶"],
			[null, null, null]
		],
		"ingredients": [
			["防刷怪蜡烛 (2)", 1],
			["历史水晶", 1],
			["天体水晶", 1],
			["动物水晶", 1]
		],
		"count": 1
	},
	"防刷怪蜡烛 (4)": {
		"type": "魔法工作台",
		"map": [
			[null, "野性符文", null],
			["黑色符文", "防刷怪蜡烛 (3)", "黎明符文"],
			[null, "八重符文", null]
		],
		"ingredients": [
			["野性符文", 1],
			["黑色符文", 1],
			["防刷怪蜡烛 (3)", 1],
			["黎明符文", 1],
			["八重符文", 1]
		],
		"count": 1
	},
	"花盆中的神秘植物": {
		"type": "增强型工作台",
		"map": [
			[null, "融合粉 (稀有)", null],
			[null, "花盆", null],
			[null, null, null]
		],
		"ingredients": [
			["融合粉 (稀有)", 1],
			["花盆", 1]
		],
		"count": 1
	},
	"神秘植物": {
		"type": "液化池",
		"map": [
			[null, "花盆中的神秘植物", null],
			["元素水晶", "炼金水晶", "虚空水晶"],
			[null, null, null]
		],
		"ingredients": [
			["花盆中的神秘植物", 1],
			["元素水晶", 1],
			["炼金水晶", 1],
			["虚空水晶", 1]
		],
		"count": 1
	},
	"神秘玻璃": {
		"type": "液化池",
		"map": [
			[null, "玻璃", null],
			["机械水晶", "炼金水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["玻璃", 1],
			["机械水晶", 1],
			["炼金水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"神秘羊毛": {
		"type": "液化池",
		"map": [
			[null, "白色羊毛", null],
			["机械水晶", "炼金水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["白色羊毛", 1],
			["机械水晶", 1],
			["炼金水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"神秘陶瓦": {
		"type": "液化池",
		"map": [
			[null, "陶瓦", null],
			["机械水晶", "炼金水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["陶瓦", 1],
			["机械水晶", 1],
			["炼金水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"神秘带釉陶瓦": {
		"type": "液化池",
		"map": [
			[null, "白色带釉陶瓦", null],
			["机械水晶", "炼金水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["白色带釉陶瓦", 1],
			["机械水晶", 1],
			["炼金水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"神秘混凝土": {
		"type": "液化池",
		"map": [
			[null, "白色混凝土", null],
			["机械水晶", "炼金水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["白色混凝土", 1],
			["机械水晶", 1],
			["炼金水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"温室玻璃": {
		"type": "魔法工作台",
		"map": [
			["融合粉 (史诗)", "玻璃", "融合粉 (史诗)"],
			["玻璃", "能量水晶", "玻璃"],
			["融合粉 (史诗)", "玻璃", "融合粉 (史诗)"]
		],
		"ingredients": [
			["融合粉 (史诗)", 4],
			["玻璃", 4],
			["能量水晶", 1]
		],
		"count": 1
	},
	"高级温室玻璃": {
		"type": "液化池",
		"map": [
			[null, "温室玻璃", null],
			["炼金水晶", "动物水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["温室玻璃", 1],
			["炼金水晶", 1],
			["动物水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"巨型温室玻璃": {
		"type": "魔法工作台",
		"map": [
			[null, "起源符文", null],
			["夜晚符文", "高级温室玻璃", "惩罚符文"],
			[null, "黑剑符文", null]
		],
		"ingredients": [
			["起源符文", 1],
			["夜晚符文", 1],
			["高级温室玻璃", 1],
			["惩罚符文", 1],
			["黑剑符文", 1]
		],
		"count": 1
	},
	"战利品展示": {
		"type": "液化池",
		"map": [
			[null, "磨制黑石砖墙", null],
			["机械水晶", "人类水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["磨制黑石砖墙", 1],
			["机械水晶", 1],
			["人类水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"尊贵展台": {
		"type": "液化池",
		"map": [
			[null, "海晶石墙", null],
			["机械水晶", "人类水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["海晶石墙", 1],
			["机械水晶", 1],
			["人类水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"路标": {
		"type": "液化池",
		"map": [
			[null, "磁石", null],
			["历史水晶", "人类水晶", "天体水晶"],
			[null, null, null]
		],
		"ingredients": [
			["磁石", 1],
			["历史水晶", 1],
			["人类水晶", 1],
			["天体水晶", 1]
		],
		"count": 1
	},
	"天使方块": {
		"type": "增强型工作台",
		"map": [
			["玻璃", "玻璃", "玻璃"],
			["玻璃", "融合锭 (稀有)", "玻璃"],
			["玻璃", "玻璃", "玻璃"]
		],
		"ingredients": [
			["玻璃", 8],
			["融合锭 (稀有)", 1]
		],
		"count": 8
	},
	"哲学家喷雾": {
		"type": "增强型工作台",
		"map": [
			["融合锭 (稀有)", "融合锭 (稀有)", "融合锭 (稀有)"],
			["融合锭 (稀有)", "发射器", "融合锭 (稀有)"],
			["融合锭 (稀有)", "神秘置换器", "融合锭 (稀有)"]
		],
		"ingredients": [
			["融合锭 (稀有)", 7],
			["发射器", 1],
			["神秘置换器", 1]
		],
		"count": 1
	},
	"牛奶玻璃": {
		"type": "增强型工作台",
		"map": [
			["玻璃", null, "玻璃"],
			["玻璃", "牛奶玻璃", "玻璃"],
			["玻璃", "玻璃", "玻璃"]
		],
		"ingredients": [
			["玻璃", 7],
			["牛奶玻璃", 1]
		],
		"count": 1
	},
	"虚空裂隙 (1)": {
		"type": "液化池",
		"map": [
			[null, "吸入漏斗", null],
			["虚空水晶", "机械水晶", "天体水晶"],
			[null, null, null]
		],
		"ingredients": [
			["吸入漏斗", 1],
			["虚空水晶", 1],
			["机械水晶", 1],
			["天体水晶", 1]
		],
		"count": 1
	},
	"虚空裂隙 (2)": {
		"type": "液化池",
		"map": [
			[null, "虚空裂隙 (1)", null],
			["虚空水晶", "机械水晶", "天体水晶"],
			[null, null, null]
		],
		"ingredients": [
			["虚空裂隙 (1)", 1],
			["虚空水晶", 1],
			["机械水晶", 1],
			["天体水晶", 1]
		],
		"count": 1
	},
	"魔法画笔 (黑色)": {
		"type": "增强型工作台",
		"map": [
			["黑色染料", "黑色染料", "黑色染料"],
			["黑色染料", "基本纤维", "黑色染料"],
			["黑色染料", "黑色染料", "黑色染料"]
		],
		"ingredients": [
			["黑色染料", 8],
			["基本纤维", 1]
		],
		"count": 1
	},
	"魔法画笔 (蓝色)": {
		"type": "增强型工作台",
		"map": [
			["蓝色染料", "蓝色染料", "蓝色染料"],
			["蓝色染料", "基本纤维", "蓝色染料"],
			["蓝色染料", "蓝色染料", "蓝色染料"]
		],
		"ingredients": [
			["蓝色染料", 8],
			["基本纤维", 1]
		],
		"count": 1
	},
	"魔法画笔 (棕色)": {
		"type": "增强型工作台",
		"map": [
			["棕色染料", "棕色染料", "棕色染料"],
			["棕色染料", "基本纤维", "棕色染料"],
			["棕色染料", "棕色染料", "棕色染料"]
		],
		"ingredients": [
			["棕色染料", 8],
			["基本纤维", 1]
		],
		"count": 1
	},
	"魔法画笔 (青色)": {
		"type": "增强型工作台",
		"map": [
			["青色染料", "青色染料", "青色染料"],
			["青色染料", "基本纤维", "青色染料"],
			["青色染料", "青色染料", "青色染料"]
		],
		"ingredients": [
			["青色染料", 8],
			["基本纤维", 1]
		],
		"count": 1
	},
	"魔法画笔 (灰色)": {
		"type": "增强型工作台",
		"map": [
			["灰色染料", "灰色染料", "灰色染料"],
			["灰色染料", "基本纤维", "灰色染料"],
			["灰色染料", "灰色染料", "灰色染料"]
		],
		"ingredients": [
			["灰色染料", 8],
			["基本纤维", 1]
		],
		"count": 1
	},
	"魔法画笔 (绿色)": {
		"type": "增强型工作台",
		"map": [
			["绿色染料", "绿色染料", "绿色染料"],
			["绿色染料", "基本纤维", "绿色染料"],
			["绿色染料", "绿色染料", "绿色染料"]
		],
		"ingredients": [
			["绿色染料", 8],
			["基本纤维", 1]
		],
		"count": 1
	},
	"魔法画笔 (淡蓝色)": {
		"type": "增强型工作台",
		"map": [
			["淡蓝色染料", "淡蓝色染料", "淡蓝色染料"],
			["淡蓝色染料", "基本纤维", "淡蓝色染料"],
			["淡蓝色染料", "淡蓝色染料", "淡蓝色染料"]
		],
		"ingredients": [
			["淡蓝色染料", 8],
			["基本纤维", 1]
		],
		"count": 1
	},
	"魔法画笔 (淡灰色)": {
		"type": "增强型工作台",
		"map": [
			["淡灰色染料", "淡灰色染料", "淡灰色染料"],
			["淡灰色染料", "基本纤维", "淡灰色染料"],
			["淡灰色染料", "淡灰色染料", "淡灰色染料"]
		],
		"ingredients": [
			["淡灰色染料", 8],
			["基本纤维", 1]
		],
		"count": 1
	},
	"魔法画笔 (黄绿色)": {
		"type": "增强型工作台",
		"map": [
			["黄绿色染料", "黄绿色染料", "黄绿色染料"],
			["黄绿色染料", "基本纤维", "黄绿色染料"],
			["黄绿色染料", "黄绿色染料", "黄绿色染料"]
		],
		"ingredients": [
			["黄绿色染料", 8],
			["基本纤维", 1]
		],
		"count": 1
	},
	"魔法画笔 (品红色)": {
		"type": "增强型工作台",
		"map": [
			["品红色染料", "品红色染料", "品红色染料"],
			["品红色染料", "基本纤维", "品红色染料"],
			["品红色染料", "品红色染料", "品红色染料"]
		],
		"ingredients": [
			["品红色染料", 8],
			["基本纤维", 1]
		],
		"count": 1
	},
	"魔法画笔 (橙色)": {
		"type": "增强型工作台",
		"map": [
			["橙色染料", "橙色染料", "橙色染料"],
			["橙色染料", "基本纤维", "橙色染料"],
			["橙色染料", "橙色染料", "橙色染料"]
		],
		"ingredients": [
			["橙色染料", 8],
			["基本纤维", 1]
		],
		"count": 1
	},
	"魔法画笔 (粉色)": {
		"type": "增强型工作台",
		"map": [
			["粉红色染料", "粉红色染料", "粉红色染料"],
			["粉红色染料", "基本纤维", "粉红色染料"],
			["粉红色染料", "粉红色染料", "粉红色染料"]
		],
		"ingredients": [
			["粉红色染料", 8],
			["基本纤维", 1]
		],
		"count": 1
	},
	"魔法画笔 (紫色)": {
		"type": "增强型工作台",
		"map": [
			["紫色染料", "紫色染料", "紫色染料"],
			["紫色染料", "基本纤维", "紫色染料"],
			["紫色染料", "紫色染料", "紫色染料"]
		],
		"ingredients": [
			["紫色染料", 8],
			["基本纤维", 1]
		],
		"count": 1
	},
	"魔法画笔 (红色)": {
		"type": "增强型工作台",
		"map": [
			["红色染料", "红色染料", "红色染料"],
			["红色染料", "基本纤维", "红色染料"],
			["红色染料", "红色染料", "红色染料"]
		],
		"ingredients": [
			["红色染料", 8],
			["基本纤维", 1]
		],
		"count": 1
	},
	"魔法画笔 (白色)": {
		"type": "增强型工作台",
		"map": [
			["白色染料", "白色染料", "白色染料"],
			["白色染料", "基本纤维", "白色染料"],
			["白色染料", "白色染料", "白色染料"]
		],
		"ingredients": [
			["白色染料", 8],
			["基本纤维", 1]
		],
		"count": 1
	},
	"魔法画笔 (黄色)": {
		"type": "增强型工作台",
		"map": [
			["黄色染料", "黄色染料", "黄色染料"],
			["黄色染料", "基本纤维", "黄色染料"],
			["黄色染料", "黄色染料", "黄色染料"]
		],
		"ingredients": [
			["黄色染料", 8],
			["基本纤维", 1]
		],
		"count": 1
	},
	"高级魔法画笔 (黑色)": {
		"type": "增强型工作台",
		"map": [
			[null, "魔法画笔 (黑色)", null],
			["历史水晶", "人类水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["魔法画笔 (黑色)", 1],
			["历史水晶", 1],
			["人类水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"高级魔法画笔 (蓝色)": {
		"type": "增强型工作台",
		"map": [
			[null, "魔法画笔 (蓝色)", null],
			["历史水晶", "人类水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["魔法画笔 (蓝色)", 1],
			["历史水晶", 1],
			["人类水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"高级魔法画笔 (棕色)": {
		"type": "增强型工作台",
		"map": [
			[null, "魔法画笔 (棕色)", null],
			["历史水晶", "人类水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["魔法画笔 (棕色)", 1],
			["历史水晶", 1],
			["人类水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"高级魔法画笔 (青色)": {
		"type": "增强型工作台",
		"map": [
			[null, "魔法画笔 (青色)", null],
			["历史水晶", "人类水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["魔法画笔 (青色)", 1],
			["历史水晶", 1],
			["人类水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"高级魔法画笔 (灰色)": {
		"type": "增强型工作台",
		"map": [
			[null, "魔法画笔 (灰色)", null],
			["历史水晶", "人类水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["魔法画笔 (灰色)", 1],
			["历史水晶", 1],
			["人类水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"高级魔法画笔 (绿色)": {
		"type": "增强型工作台",
		"map": [
			[null, "魔法画笔 (绿色)", null],
			["历史水晶", "人类水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["魔法画笔 (绿色)", 1],
			["历史水晶", 1],
			["人类水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"高级魔法画笔 (淡蓝色)": {
		"type": "增强型工作台",
		"map": [
			[null, "魔法画笔 (淡蓝色)", null],
			["历史水晶", "人类水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["魔法画笔 (淡蓝色)", 1],
			["历史水晶", 1],
			["人类水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"高级魔法画笔 (淡灰色)": {
		"type": "增强型工作台",
		"map": [
			[null, "魔法画笔 (淡灰色)", null],
			["历史水晶", "人类水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["魔法画笔 (淡灰色)", 1],
			["历史水晶", 1],
			["人类水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"高级魔法画笔 (黄绿色)": {
		"type": "增强型工作台",
		"map": [
			[null, "魔法画笔 (黄绿色)", null],
			["历史水晶", "人类水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["魔法画笔 (黄绿色)", 1],
			["历史水晶", 1],
			["人类水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"高级魔法画笔 (品红色)": {
		"type": "增强型工作台",
		"map": [
			[null, "魔法画笔 (品红色)", null],
			["历史水晶", "人类水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["魔法画笔 (品红色)", 1],
			["历史水晶", 1],
			["人类水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"高级魔法画笔 (橙色)": {
		"type": "增强型工作台",
		"map": [
			[null, "魔法画笔 (橙色)", null],
			["历史水晶", "人类水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["魔法画笔 (橙色)", 1],
			["历史水晶", 1],
			["人类水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"高级魔法画笔 (粉色)": {
		"type": "增强型工作台",
		"map": [
			[null, "魔法画笔 (粉色)", null],
			["历史水晶", "人类水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["魔法画笔 (粉色)", 1],
			["历史水晶", 1],
			["人类水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"高级魔法画笔 (紫色)": {
		"type": "增强型工作台",
		"map": [
			[null, "魔法画笔 (紫色)", null],
			["历史水晶", "人类水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["魔法画笔 (紫色)", 1],
			["历史水晶", 1],
			["人类水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"高级魔法画笔 (红色)": {
		"type": "增强型工作台",
		"map": [
			[null, "魔法画笔 (红色)", null],
			["历史水晶", "人类水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["魔法画笔 (红色)", 1],
			["历史水晶", 1],
			["人类水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"高级魔法画笔 (白色)": {
		"type": "增强型工作台",
		"map": [
			[null, "魔法画笔 (白色)", null],
			["历史水晶", "人类水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["魔法画笔 (白色)", 1],
			["历史水晶", 1],
			["人类水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"高级魔法画笔 (黄色)": {
		"type": "增强型工作台",
		"map": [
			[null, "魔法画笔 (黄色)", null],
			["历史水晶", "人类水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["魔法画笔 (黄色)", 1],
			["历史水晶", 1],
			["人类水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"神秘色素": {
		"type": "增强型工作台",
		"map": [
			["高级魔法画笔 (黑色)", "高级魔法画笔 (蓝色)", "高级魔法画笔 (棕色)"],
			["高级魔法画笔 (青色)", "融合粉 (史诗)", "高级魔法画笔 (灰色)"],
			["高级魔法画笔 (绿色)", "高级魔法画笔 (淡蓝色)", "高级魔法画笔 (淡灰色)"]
		],
		"ingredients": [
			["高级魔法画笔 (黑色)", 1],
			["高级魔法画笔 (蓝色)", 1],
			["高级魔法画笔 (棕色)", 1],
			["高级魔法画笔 (青色)", 1],
			["融合粉 (史诗)", 1],
			["高级魔法画笔 (灰色)", 1],
			["高级魔法画笔 (绿色)", 1],
			["高级魔法画笔 (淡蓝色)", 1],
			["高级魔法画笔 (淡灰色)", 1]
		],
		"count": 1
	},
	"神秘染料": {
		"type": "增强型工作台",
		"map": [
			["高级魔法画笔 (黄绿色)", "高级魔法画笔 (品红色)", "高级魔法画笔 (橙色)"],
			["高级魔法画笔 (粉色)", "融合粉 (史诗)", "高级魔法画笔 (紫色)"],
			["高级魔法画笔 (红色)", "高级魔法画笔 (白色)", "高级魔法画笔 (黄色)"]
		],
		"ingredients": [
			["高级魔法画笔 (黄绿色)", 1],
			["高级魔法画笔 (品红色)", 1],
			["高级魔法画笔 (橙色)", 1],
			["高级魔法画笔 (粉色)", 1],
			["融合粉 (史诗)", 1],
			["高级魔法画笔 (紫色)", 1],
			["高级魔法画笔 (红色)", 1],
			["高级魔法画笔 (白色)", 1],
			["高级魔法画笔 (黄色)", 1]
		],
		"count": 1
	},
	"神秘画笔": {
		"type": "增强型工作台",
		"map": [
			[null, null, null],
			["神秘染料", "融合锭 (神秘)", "神秘色素"],
			[null, null, null]
		],
		"ingredients": [
			["神秘染料", 1],
			["融合锭 (神秘)", 1],
			["神秘色素", 1]
		],
		"count": 1
	},
	"不完整的盔甲架(身体)": {
		"type": "液化池",
		"map": [
			[null, "盔甲架", null],
			["元素水晶", "炼金水晶", "机械水晶"],
			[null, null, null]
		],
		"ingredients": [
			["盔甲架", 1],
			["元素水晶", 1],
			["炼金水晶", 1],
			["机械水晶", 1]
		],
		"count": 1
	},
	"不完整的盔甲架(思想)": {
		"type": "液化池",
		"map": [
			[null, "盔甲架", null],
			["历史水晶", "人类水晶", "动物水晶"],
			[null, null, null]
		],
		"ingredients": [
			["盔甲架", 1],
			["历史水晶", 1],
			["人类水晶", 1],
			["动物水晶", 1]
		],
		"count": 1
	},
	"不完整的盔甲架(灵魂)": {
		"type": "液化池",
		"map": [
			[null, "盔甲架", null],
			["天体水晶", "虚空水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["盔甲架", 1],
			["天体水晶", 1],
			["虚空水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"神秘姿态": {
		"type": "增强型工作台",
		"map": [
			["基本纤维", "基本纤维", "基本纤维"],
			["不完整的盔甲架(身体)", "不完整的盔甲架(思想)", "不完整的盔甲架(灵魂)"],
			["基本纤维", "基本纤维", "基本纤维"]
		],
		"ingredients": [
			["基本纤维", 6],
			["不完整的盔甲架(身体)", 1],
			["不完整的盔甲架(思想)", 1],
			["不完整的盔甲架(灵魂)", 1]
		],
		"count": 1
	},
	"注入盔甲架": {
		"type": "液化池",
		"map": [
			[null, "盔甲架", null],
			["机械水晶", "人类水晶", "虚空水晶"],
			[null, null, null]
		],
		"ingredients": [
			["盔甲架", 1],
			["机械水晶", 1],
			["人类水晶", 1],
			["虚空水晶", 1]
		],
		"count": 1
	},
	"造型设置器": {
		"type": "增强型工作台",
		"map": [
			["基本纤维", "融合锭 (史诗)", "基本纤维"],
			["融合锭 (史诗)", "神秘姿态", "融合锭 (史诗)"],
			["基本纤维", "融合锭 (史诗)", "基本纤维"]
		],
		"ingredients": [
			["基本纤维", 4],
			["融合锭 (史诗)", 4],
			["神秘姿态", 1]
		],
		"count": 1
	},
	"造型复制器": {
		"type": "增强型工作台",
		"map": [
			["基本纤维", "融合锭 (独特)", "基本纤维"],
			["融合锭 (稀有)", "不完整的盔甲架(身体)", "融合锭 (稀有)"],
			["基本纤维", "融合锭 (独特)", "基本纤维"]
		],
		"ingredients": [
			["基本纤维", 4],
			["融合锭 (独特)", 2],
			["融合锭 (稀有)", 2],
			["不完整的盔甲架(身体)", 1]
		],
		"count": 1
	},
	"尊贵的信标": {
		"type": "液化池",
		"map": [
			[null, "融合锭 (神秘)", null],
			["元素水晶", "人类水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["融合锭 (神秘)", 1],
			["元素水晶", 1],
			["人类水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"尊贵的篝火": {
		"type": "魔法工作台",
		"map": [
			[null, "野性符文", null],
			["真实地球符文", "尊贵的信标", "真实水之符文"],
			[null, "折跃符文", null]
		],
		"ingredients": [
			["野性符文", 1],
			["真实地球符文", 1],
			["尊贵的信标", 1],
			["真实水之符文", 1],
			["折跃符文", 1]
		],
		"count": 1
	},
	"尊贵的喂养机": {
		"type": "液化池",
		"map": [
			[null, "融合锭 (神秘)", null],
			["元素水晶", "动物水晶", "天体水晶"],
			[null, null, null]
		],
		"ingredients": [
			["融合锭 (神秘)", 1],
			["元素水晶", 1],
			["动物水晶", 1],
			["天体水晶", 1]
		],
		"count": 1
	},
	"尊贵的生产图腾": {
		"type": "液化池",
		"map": [
			[null, "转化符文", null],
			["黑色符文", "尊贵的喂养机", "黎明符文"],
			[null, "惩罚符文", null]
		],
		"ingredients": [
			["转化符文", 1],
			["黑色符文", 1],
			["尊贵的喂养机", 1],
			["黎明符文", 1],
			["惩罚符文", 1]
		],
		"count": 1
	},
	"尊贵的收割机": {
		"type": "液化池",
		"map": [
			[null, "融合锭 (神秘)", null],
			["元素水晶", "历史水晶", "虚空水晶"],
			[null, null, null]
		],
		"ingredients": [
			["融合锭 (神秘)", 1],
			["元素水晶", 1],
			["历史水晶", 1],
			["虚空水晶", 1]
		],
		"count": 1
	},
	"尊贵的农学家": {
		"type": "液化池",
		"map": [
			[null, "改变符文", null],
			["龙之符文", "尊贵的收割机", "真实火焰符文"],
			[null, "黑剑符文", null]
		],
		"ingredients": [
			["改变符文", 1],
			["龙之符文", 1],
			["尊贵的收割机", 1],
			["真实火焰符文", 1],
			["黑剑符文", 1]
		],
		"count": 1
	},
	"尊贵的黎明": {
		"type": "液化池",
		"map": [
			[null, "融合粉 (神秘)", null],
			["元素水晶", "历史水晶", "天体水晶"],
			[null, null, null]
		],
		"ingredients": [
			["融合粉 (神秘)", 1],
			["元素水晶", 1],
			["历史水晶", 1],
			["天体水晶", 1]
		],
		"count": 1
	},
	"尊贵的黄昏": {
		"type": "液化池",
		"map": [
			[null, "融合粉 (神秘)", null],
			["元素水晶", "历史水晶", "虚空水晶"],
			[null, null, null]
		],
		"ingredients": [
			["融合粉 (神秘)", 1],
			["元素水晶", 1],
			["历史水晶", 1],
			["虚空水晶", 1]
		],
		"count": 1
	},
	"尊贵的太阳": {
		"type": "液化池",
		"map": [
			[null, "融合粉 (神秘)", null],
			["元素水晶", "炼金水晶", "天体水晶"],
			[null, null, null]
		],
		"ingredients": [
			["融合粉 (神秘)", 1],
			["元素水晶", 1],
			["炼金水晶", 1],
			["天体水晶", 1]
		],
		"count": 1
	},
	"尊贵的风暴": {
		"type": "液化池",
		"map": [
			[null, "融合粉 (神秘)", null],
			["元素水晶", "炼金水晶", "虚空水晶"],
			[null, null, null]
		],
		"ingredients": [
			["融合粉 (神秘)", 1],
			["元素水晶", 1],
			["炼金水晶", 1],
			["虚空水晶", 1]
		],
		"count": 1
	},
	"尊贵的海风": {
		"type": "液化池",
		"map": [
			[null, "海洋之心", null],
			["元素水晶", "炼金水晶", "天体水晶"],
			[null, null, null]
		],
		"ingredients": [
			["海洋之心", 1],
			["元素水晶", 1],
			["炼金水晶", 1],
			["天体水晶", 1]
		],
		"count": 1
	},
	"传说之证: 宗师级魔法师": {
		"type": "液化池",
		"map": [
			[null, "纸", null],
			["元素水晶", "炼金水晶", "虚空水晶"],
			[null, null, null]
		],
		"ingredients": [
			["纸", 1],
			["元素水晶", 1],
			["炼金水晶", 1],
			["虚空水晶", 1]
		],
		"count": 1
	},
	"传说之证: 荣誉教授": {
		"type": "液化池",
		"map": [
			[null, "纸", null],
			["元素水晶", "炼金水晶", "天体水晶"],
			[null, null, null]
		],
		"ingredients": [
			["纸", 1],
			["元素水晶", 1],
			["炼金水晶", 1],
			["天体水晶", 1]
		],
		"count": 1
	},
	"传说之证: 老板": {
		"type": "液化池",
		"map": [
			[null, "太阳符文", null],
			["机械水晶", "人类水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["太阳符文", 1],
			["机械水晶", 1],
			["人类水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"圣诞快乐": {
		"type": "液化池",
		"map": [
			[null, "云杉树苗", null],
			["人类水晶", "哲学水晶", "天体水晶"],
			[null, null, null]
		],
		"ingredients": [
			["云杉树苗", 1],
			["人类水晶", 1],
			["哲学水晶", 1],
			["天体水晶", 1]
		],
		"count": 1
	},
	"情人节快乐": {
		"type": "液化池",
		"map": [
			[null, "彩虹羊毛 (情人节版)", null],
			["人类水晶", "元素水晶", "历史水晶"],
			[null, null, null]
		],
		"ingredients": [
			["彩虹羊毛 (情人节版)", 1],
			["人类水晶", 1],
			["元素水晶", 1],
			["历史水晶", 1]
		],
		"count": 1
	},
	"生日快乐Cheesy!": {
		"type": "液化池",
		"map": [
			[null, "蛋糕", null],
			["人类水晶", "元素水晶", "历史水晶"],
			[null, null, null]
		],
		"ingredients": [
			["蛋糕", 1],
			["人类水晶", 1],
			["元素水晶", 1],
			["历史水晶", 1]
		],
		"count": 1
	},
	"生日快乐BWhite!": {
		"type": "液化池",
		"map": [
			[null, "蛋糕", null],
			["人类水晶", "虚空水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["蛋糕", 1],
			["人类水晶", 1],
			["虚空水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"生日快乐Decoy!": {
		"type": "液化池",
		"map": [
			[null, "蛋糕", null],
			["人类水晶", "天体水晶", "哲学水晶"],
			[null, null, null]
		],
		"ingredients": [
			["蛋糕", 1],
			["人类水晶", 1],
			["天体水晶", 1],
			["哲学水晶", 1]
		],
		"count": 1
	},
	"生日快乐Oddish!": {
		"type": "液化池",
		"map": [
			[null, "蛋糕", null],
			["动物水晶", "元素水晶", "天体水晶"],
			[null, null, null]
		],
		"ingredients": [
			["蛋糕", 1],
			["动物水晶", 1],
			["元素水晶", 1],
			["天体水晶", 1]
		],
		"count": 1
	},
	"野性符文": {
		"type": "古代祭坛",
		"map": [
			["地狱骨粉", "坏死颅骨", "骨头"],
			["拴绳", "神秘印记", "拴绳"],
			["骨头", "坏死颅骨", "地狱骨粉"]
		],
		"ingredients": [
			["地狱骨粉", 2],
			["坏死颅骨", 2],
			["骨头", 2],
			["拴绳", 2],
			["神秘印记", 1]
		],
		"count": 1
	},
	"起源符文": {
		"type": "古代祭坛",
		"map": [
			["镀金珍珠", "潜影壳", "铀"],
			["蓝花美耳草", "神秘印记", "蓝花美耳草"],
			["铀", "潜影壳", "镀金珍珠"]
		],
		"ingredients": [
			["镀金珍珠", 2],
			["潜影壳", 2],
			["铀", 2],
			["蓝花美耳草", 2],
			["神秘印记", 1]
		],
		"count": 1
	},
	"转化符文": {
		"type": "古代祭坛",
		"map": [
			["天使方块", "凋零玫瑰", "能量水晶"],
			["灰色染料", "神秘印记", "灰色染料"],
			["能量水晶", "凋零玫瑰", "天使方块"]
		],
		"ingredients": [
			["天使方块", 2],
			["凋零玫瑰", 2],
			["能量水晶", 2],
			["灰色染料", 2],
			["神秘印记", 1]
		],
		"count": 1
	},
	"大门符文": {
		"type": "古代祭坛",
		"map": [
			["基础法杖", "烈焰棒", "金锭 (24克拉)"],
			["绯红木栅栏门", "神秘印记", "绯红木栅栏门"],
			["金锭 (24克拉)", "烈焰棒", "基础法杖"]
		],
		"ingredients": [
			["基础法杖", 2],
			["烈焰棒", 2],
			["金锭 (24克拉)", 2],
			["绯红木栅栏门", 2],
			["神秘印记", 1]
		],
		"count": 1
	},
	"真实地球符文": {
		"type": "古代祭坛",
		"map": [
			["诅咒之地 (2)", "灰化土", "诅咒之地 (1)"],
			["苔藓块", "神秘印记", "苔藓块"],
			["诅咒之地 (1)", "灰化土", "诅咒之地 (2)"]
		],
		"ingredients": [
			["诅咒之地 (2)", 2],
			["灰化土", 2],
			["诅咒之地 (1)", 2],
			["苔藓块", 2],
			["神秘印记", 1]
		],
		"count": 1
	},
	"改变符文": {
		"type": "古代祭坛",
		"map": [
			["基础末影人抑制器", "拉杆", "可编程式机器人 (普通)"],
			["磨制黑石按钮", "神秘印记", "磨制黑石按钮"],
			["可编程式机器人 (普通)", "拉杆", "基础末影人抑制器"]
		],
		"ingredients": [
			["基础末影人抑制器", 2],
			["拉杆", 2],
			["可编程式机器人 (普通)", 2],
			["磨制黑石按钮", 2],
			["神秘印记", 1]
		],
		"count": 1
	},
	"夜晚符文": {
		"type": "古代祭坛",
		"map": [
			["微型虚空裂隙", "时钟", "镎"],
			["垂泪藤", "神秘印记", "垂泪藤"],
			["镎", "时钟", "微型虚空裂隙"]
		],
		"ingredients": [
			["微型虚空裂隙", 2],
			["时钟", 2],
			["镎", 2],
			["垂泪藤", 2],
			["神秘印记", 1]
		],
		"count": 1
	},
	"黑色符文": {
		"type": "古代祭坛",
		"map": [
			["魔法画笔 (黑色)", "黑色蜡烛", "坏死颅骨"],
			["黑色染色玻璃板", "神秘印记", "黑色染色玻璃板"],
			["坏死颅骨", "黑色蜡烛", "魔法画笔 (黑色)"]
		],
		"ingredients": [
			["魔法画笔 (黑色)", 2],
			["黑色蜡烛", 2],
			["坏死颅骨", 2],
			["黑色染色玻璃板", 2],
			["神秘印记", 1]
		],
		"count": 1
	},
	"真实神圣符文": {
		"type": "古代祭坛",
		"map": [
			["不完整的盔甲架(灵魂)", "白色郁金香", "不完整的盔甲架(身体)"],
			["不完整的盔甲架(思想)", "神秘印记", "不完整的盔甲架(思想)"],
			["不完整的盔甲架(身体)", "白色郁金香", "不完整的盔甲架(灵魂)"]
		],
		"ingredients": [
			["不完整的盔甲架(灵魂)", 2],
			["白色郁金香", 2],
			["不完整的盔甲架(身体)", 2],
			["不完整的盔甲架(思想)", 2],
			["神秘印记", 1]
		],
		"count": 1
	},
	"龙之符文": {
		"type": "古代祭坛",
		"map": [
			["融合粉 (稀有)", "龙首", "龙蛋"],
			["龙息", "神秘印记", "龙息"],
			["龙蛋", "龙首", "融合粉 (稀有)"]
		],
		"ingredients": [
			["融合粉 (稀有)", 2],
			["龙首", 2],
			["龙蛋", 2],
			["龙息", 2],
			["神秘印记", 1]
		],
		"count": 1
	},
	"真实水之符文": {
		"type": "古代祭坛",
		"map": [
			["尊贵的海风", "水桶", "古代符文 [水]"],
			["鹦鹉螺壳", "神秘印记", "鹦鹉螺壳"],
			["古代符文 [水]", "水桶", "尊贵的海风"]
		],
		"ingredients": [
			["尊贵的海风", 2],
			["水桶", 2],
			["古代符文 [水]", 2],
			["鹦鹉螺壳", 2],
			["神秘印记", 1]
		],
		"count": 1
	},
	"至高符文": {
		"type": "古代祭坛",
		"map": [
			["连接指南针", "钟", "黑金刚石"],
			["黑曜石", "神秘印记", "黑曜石"],
			["黑金刚石", "钟", "连接指南针"]
		],
		"ingredients": [
			["连接指南针", 2],
			["钟", 2],
			["黑金刚石", 2],
			["黑曜石", 2],
			["神秘印记", 1]
		],
		"count": 1
	},
	"太阳符文": {
		"type": "古代祭坛",
		"map": [
			["尊贵的太阳", "菌光体", "起泡锭"],
			["荧石", "神秘印记", "荧石"],
			["起泡锭", "菌光体", "尊贵的太阳"]
		],
		"ingredients": [
			["尊贵的太阳", 2],
			["菌光体", 2],
			["起泡锭", 2],
			["荧石", 2],
			["神秘印记", 1]
		],
		"count": 1
	},
	"黎明符文": {
		"type": "古代祭坛",
		"map": [
			["尊贵的黎明", "失活的火珊瑚块", "苹果汁"],
			["橙色郁金香", "神秘印记", "橙色郁金香"],
			["苹果汁", "失活的火珊瑚块", "尊贵的黎明"]
		],
		"ingredients": [
			["尊贵的黎明", 2],
			["失活的火珊瑚块", 2],
			["苹果汁", 2],
			["橙色郁金香", 2],
			["神秘印记", 1]
		],
		"count": 1
	},
	"暮光符文": {
		"type": "古代祭坛",
		"map": [
			["尊贵的黄昏", "火珊瑚块", "南瓜汁"],
			["矢车菊", "神秘印记", "矢车菊"],
			["南瓜汁", "火珊瑚块", "尊贵的黄昏"]
		],
		"ingredients": [
			["尊贵的黄昏", 2],
			["火珊瑚块", 2],
			["南瓜汁", 2],
			["矢车菊", 2],
			["神秘印记", 1]
		],
		"count": 1
	},
	"真实火焰符文": {
		"type": "古代祭坛",
		"map": [
			["灼烧板 (3)", "灵魂营火", "古代符文 [火]"],
			["火焰弹", "神秘印记", "火焰弹"],
			["古代符文 [火]", "灵魂营火", "灼烧板 (3)"]
		],
		"ingredients": [
			["灼烧板 (3)", 2],
			["灵魂营火", 2],
			["古代符文 [火]", 2],
			["火焰弹", 2],
			["神秘印记", 1]
		],
		"count": 1
	},
	"圆之符文": {
		"type": "古代祭坛",
		"map": [
			["尊贵的喂养机", "侦测器", "电动铸锭机 (III)"],
			["标靶", "神秘印记", "标靶"],
			["电动铸锭机 (III)", "侦测器", "尊贵的喂养机"]
		],
		"ingredients": [
			["尊贵的喂养机", 2],
			["侦测器", 2],
			["电动铸锭机 (III)", 2],
			["标靶", 2],
			["神秘印记", 1]
		],
		"count": 1
	},
	"折跃符文": {
		"type": "古代祭坛",
		"map": [
			["路标", "末影之眼", "GPS 应急发射器"],
			["末影珍珠", "神秘印记", "末影珍珠"],
			["GPS 应急发射器", "末影之眼", "路标"]
		],
		"ingredients": [
			["路标", 2],
			["末影之眼", 2],
			["GPS 应急发射器", 2],
			["末影珍珠", 2],
			["神秘印记", 1]
		],
		"count": 1
	},
	"灵魂吞噬者符文": {
		"type": "古代祭坛",
		"map": [
			["不完整的盔甲架(灵魂)", "鞘翅", "古代符文 [灵魂绑定]"],
			["蛋糕", "神秘印记", "蛋糕"],
			["古代符文 [灵魂绑定]", "鞘翅", "不完整的盔甲架(灵魂)"]
		],
		"ingredients": [
			["不完整的盔甲架(灵魂)", 2],
			["鞘翅", 2],
			["古代符文 [灵魂绑定]", 2],
			["蛋糕", 2],
			["神秘印记", 1]
		],
		"count": 1
	},
	"惩罚符文": {
		"type": "古代祭坛",
		"map": [
			["防刷怪蜡烛 (1)", "拴绳", "怪物肉干"],
			["灵魂灯笼", "神秘印记", "灵魂灯笼"],
			["怪物肉干", "拴绳", "防刷怪蜡烛 (1)"]
		],
		"ingredients": [
			["防刷怪蜡烛 (1)", 2],
			["拴绳", 2],
			["怪物肉干", 2],
			["灵魂灯笼", 2],
			["神秘印记", 1]
		],
		"count": 1
	},
	"真实雷电符文": {
		"type": "古代祭坛",
		"map": [
			["发光勺 (1)", "避雷针", "古代符文 [雷]"],
			["锁链", "神秘印记", "锁链"],
			["古代符文 [雷]", "避雷针", "发光勺 (1)"]
		],
		"ingredients": [
			["发光勺 (1)", 2],
			["避雷针", 2],
			["古代符文 [雷]", 2],
			["锁链", 2],
			["神秘印记", 1]
		],
		"count": 1
	},
	"八重符文": {
		"type": "古代祭坛",
		"map": [
			["临时融合工作台", "海绵", "古代符文 [附魔]"],
			["玄武岩", "神秘印记", "玄武岩"],
			["古代符文 [附魔]", "海绵", "临时融合工作台"]
		],
		"ingredients": [
			["临时融合工作台", 2],
			["海绵", 2],
			["古代符文 [附魔]", 2],
			["玄武岩", 2],
			["神秘印记", 1]
		],
		"count": 1
	},
	"魅力符文": {
		"type": "古代祭坛",
		"map": [
			["尊贵的信标", "红色蜡烛", "古代符文 [虹]"],
			["虞美人", "神秘印记", "虞美人"],
			["古代符文 [虹]", "红色蜡烛", "尊贵的信标"]
		],
		"ingredients": [
			["尊贵的信标", 2],
			["红色蜡烛", 2],
			["古代符文 [虹]", 2],
			["虞美人", 2],
			["神秘印记", 1]
		],
		"count": 1
	},
	"真实风之符文": {
		"type": "古代祭坛",
		"map": [
			["强征 (1)", "末地烛", "古代符文 [气]"],
			["羽毛", "神秘印记", "羽毛"],
			["古代符文 [气]", "末地烛", "强征 (1)"]
		],
		"ingredients": [
			["强征 (1)", 2],
			["末地烛", 2],
			["古代符文 [气]", 2],
			["羽毛", 2],
			["神秘印记", 1]
		],
		"count": 1
	},
	"黑剑符文": {
		"type": "古代祭坛",
		"map": [
			["基础魔法板", "下界合金剑", "处决之剑"],
			["金剑", "神秘印记", "金剑"],
			["处决之剑", "下界合金剑", "基础魔法板"]
		],
		"ingredients": [
			["基础魔法板", 2],
			["下界合金剑", 2],
			["处决之剑", 2],
			["金剑", 2],
			["神秘印记", 1]
		],
		"count": 1
	},
	"亮盾符文": {
		"type": "古代祭坛",
		"map": [
			["基础魔法板", "海龟壳", "太阳能头盔"],
			["盾牌", "神秘印记", "盾牌"],
			["太阳能头盔", "海龟壳", "基础魔法板"]
		],
		"ingredients": [
			["基础魔法板", 2],
			["海龟壳", 2],
			["太阳能头盔", 2],
			["盾牌", 2],
			["神秘印记", 1]
		],
		"count": 1
	},
	"奇怪的煤炭": {
		"type": "增强型工作台",
		"map": [
			["煤炭", "煤炭", "煤炭"],
			["煤炭", "煤炭", "煤炭"],
			["煤炭", "煤炭", "煤炭"]
		],
		"ingredients": [
			["煤炭", 9]
		],
		"count": 1
	},
	"奇怪的煤炭粉": {
		"type": "矿石粉碎机",
		"map": [
			["奇怪的煤炭", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["奇怪的煤炭", 1]
		],
		"count": 1
	},
	"奇怪的煤炭粉 (已压缩)": {
		"type": "压缩机",
		"map": [
			["奇怪的煤炭粉", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["奇怪的煤炭粉", 1]
		],
		"count": 1
	},
	"奇怪的煤炭块": {
		"type": "压力机",
		"map": [
			["奇怪的煤炭粉 (已压缩)", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["奇怪的煤炭粉 (已压缩)", 1]
		],
		"count": 1
	},
	"不正常的煤炭": {
		"type": "增强型工作台",
		"map": [
			["奇怪的煤炭块", "奇怪的煤炭块", "奇怪的煤炭块"],
			["奇怪的煤炭块", "奇怪的煤炭块", "奇怪的煤炭块"],
			["奇怪的煤炭块", "奇怪的煤炭块", "奇怪的煤炭块"]
		],
		"ingredients": [
			["奇怪的煤炭块", 9]
		],
		"count": 1
	},
	"不正常的煤炭粉": {
		"type": "矿石粉碎机",
		"map": [
			["不正常的煤炭", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["不正常的煤炭", 1]
		],
		"count": 1
	},
	"不正常的煤炭粉 (已压缩)": {
		"type": "压缩机",
		"map": [
			["不正常的煤炭粉", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["不正常的煤炭粉", 1]
		],
		"count": 1
	},
	"不正常的煤炭块": {
		"type": "压力机",
		"map": [
			["不正常的煤炭粉 (已压缩)", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["不正常的煤炭粉 (已压缩)", 1]
		],
		"count": 1
	},
	"发散的煤炭": {
		"type": "增强型工作台",
		"map": [
			["不正常的煤炭块", "不正常的煤炭块", "不正常的煤炭块"],
			["不正常的煤炭块", "不正常的煤炭块", "不正常的煤炭块"],
			["不正常的煤炭块", "不正常的煤炭块", "不正常的煤炭块"]
		],
		"ingredients": [
			["不正常的煤炭块", 9]
		],
		"count": 1
	},
	"发散的煤炭粉": {
		"type": "矿石粉碎机",
		"map": [
			["发散的煤炭", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["发散的煤炭", 1]
		],
		"count": 1
	},
	"发散的煤炭粉 (已压缩)": {
		"type": "压缩机",
		"map": [
			["发散的煤炭粉", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["发散的煤炭粉", 1]
		],
		"count": 1
	},
	"发散的煤炭块": {
		"type": "压力机",
		"map": [
			["发散的煤炭粉 (已压缩)", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["发散的煤炭粉 (已压缩)", 1]
		],
		"count": 1
	},
	"异常的煤炭": {
		"type": "增强型工作台",
		"map": [
			["发散的煤炭块", "发散的煤炭块", "发散的煤炭块"],
			["发散的煤炭块", "发散的煤炭块", "发散的煤炭块"],
			["发散的煤炭块", "发散的煤炭块", "发散的煤炭块"]
		],
		"ingredients": [
			["发散的煤炭块", 9]
		],
		"count": 1
	},
	"异常的煤炭粉": {
		"type": "矿石粉碎机",
		"map": [
			["异常的煤炭", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["异常的煤炭", 1]
		],
		"count": 1
	},
	"异常的煤炭粉 (已压缩)": {
		"type": "压缩机",
		"map": [
			["异常的煤炭粉", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["异常的煤炭粉", 1]
		],
		"count": 1
	},
	"异常的煤炭块": {
		"type": "压力机",
		"map": [
			["异常的煤炭粉 (已压缩)", null, null],
			[null, null, null],
			[null, null, null]
		],
		"ingredients": [
			["异常的煤炭粉 (已压缩)", 1]
		],
		"count": 1
	},
	"完美的煤炭": {
		"type": "增强型工作台",
		"map": [
			["异常的煤炭块", "异常的煤炭块", "异常的煤炭块"],
			["异常的煤炭块", "异常的煤炭块", "异常的煤炭块"],
			["异常的煤炭块", "异常的煤炭块", "异常的煤炭块"]
		],
		"ingredients": [
			["异常的煤炭块", 9]
		],
		"count": 1
	},
	"奇怪的框架": {
		"type": "增强型工作台",
		"map": [
			["奇怪的煤炭", "奇怪的煤炭", "奇怪的煤炭"],
			["奇怪的煤炭", "金块 (24克拉)", "奇怪的煤炭"],
			["奇怪的煤炭", "奇怪的煤炭", "奇怪的煤炭"]
		],
		"ingredients": [
			["奇怪的煤炭", 8],
			["金块 (24克拉)", 1]
		],
		"count": 1
	},
	"奇怪的机器框架": {
		"type": "增强型工作台",
		"map": [
			["焊锡锭", "古代符文 [末影]", "焊锡锭"],
			["焊锡锭", "奇怪的框架", "焊锡锭"],
			["焊锡锭", "中型储能电容", "焊锡锭"]
		],
		"ingredients": [
			["焊锡锭", 6],
			["古代符文 [末影]", 1],
			["奇怪的框架", 1],
			["中型储能电容", 1]
		],
		"count": 1
	},
	"不正常的框架": {
		"type": "增强型工作台",
		"map": [
			["不正常的煤炭", "不正常的煤炭", "不正常的煤炭"],
			["不正常的煤炭", "奇怪的框架", "不正常的煤炭"],
			["不正常的煤炭", "不正常的煤炭", "不正常的煤炭"]
		],
		"ingredients": [
			["不正常的煤炭", 8],
			["奇怪的框架", 1]
		],
		"count": 1
	},
	"不正常的机器框架": {
		"type": "增强型工作台",
		"map": [
			["硬铝锭", "奇怪的机器框架", "硬铝锭"],
			["硬铝锭", "不正常的框架", "硬铝锭"],
			["硬铝锭", "巨型储能电容", "硬铝锭"]
		],
		"ingredients": [
			["硬铝锭", 6],
			["奇怪的机器框架", 1],
			["不正常的框架", 1],
			["巨型储能电容", 1]
		],
		"count": 1
	},
	"发散的框架": {
		"type": "增强型工作台",
		"map": [
			["发散的煤炭", "发散的煤炭", "发散的煤炭"],
			["发散的煤炭", "不正常的框架", "发散的煤炭"],
			["发散的煤炭", "发散的煤炭", "发散的煤炭"]
		],
		"ingredients": [
			["发散的煤炭", 8],
			["不正常的框架", 1]
		],
		"count": 1
	},
	"发散的机器框架": {
		"type": "增强型工作台",
		"map": [
			["大马士革钢锭", "不正常的机器框架", "大马士革钢锭"],
			["大马士革钢锭", "发散的框架", "大马士革钢锭"],
			["大马士革钢锭", "大型储能电容", "大马士革钢锭"]
		],
		"ingredients": [
			["大马士革钢锭", 6],
			["不正常的机器框架", 1],
			["发散的框架", 1],
			["大型储能电容", 1]
		],
		"count": 1
	},
	"异常的框架": {
		"type": "增强型工作台",
		"map": [
			["异常的煤炭", "异常的煤炭", "异常的煤炭"],
			["异常的煤炭", "发散的框架", "异常的煤炭"],
			["异常的煤炭", "异常的煤炭", "异常的煤炭"]
		],
		"ingredients": [
			["异常的煤炭", 8],
			["发散的框架", 1]
		],
		"count": 1
	},
	"异常的机器框架": {
		"type": "增强型工作台",
		"map": [
			["科林斯青铜锭", "发散的机器框架", "科林斯青铜锭"],
			["科林斯青铜锭", "异常的框架", "科林斯青铜锭"],
			["科林斯青铜锭", "黑金刚石镶边储能电容", "科林斯青铜锭"]
		],
		"ingredients": [
			["科林斯青铜锭", 6],
			["发散的机器框架", 1],
			["异常的框架", 1],
			["黑金刚石镶边储能电容", 1]
		],
		"count": 1
	},
	"完美的框架": {
		"type": "增强型工作台",
		"map": [
			["完美的煤炭", "完美的煤炭", "完美的煤炭"],
			["完美的煤炭", "异常的框架", "完美的煤炭"],
			["完美的煤炭", "完美的煤炭", "完美的煤炭"]
		],
		"ingredients": [
			["完美的煤炭", 8],
			["异常的框架", 1]
		],
		"count": 1
	},
	"完美的机器框架": {
		"type": "增强型工作台",
		"map": [
			["强化合金锭", "异常的机器框架", "强化合金锭"],
			["强化合金锭", "完美的框架", "强化合金锭"],
			["强化合金锭", "终极储能电容", "强化合金锭"]
		],
		"ingredients": [
			["强化合金锭", 6],
			["异常的机器框架", 1],
			["完美的框架", 1],
			["终极储能电容", 1]
		],
		"count": 1
	},
	"解构机 ➊": {
		"type": "增强型工作台",
		"map": [
			["奇怪的煤炭", "可授权式可编程式机器人 (屠夫)", "奇怪的煤炭"],
			["机器人交互接口 (物品)", "奇怪的机器框架", "机器人交互接口 (物品)"],
			["奇怪的煤炭", "能源调节器", "奇怪的煤炭"]
		],
		"ingredients": [
			["奇怪的煤炭", 4],
			["可授权式可编程式机器人 (屠夫)", 1],
			["机器人交互接口 (物品)", 2],
			["奇怪的机器框架", 1],
			["能源调节器", 1]
		],
		"count": 1
	},
	"解构机 ➋": {
		"type": "增强型工作台",
		"map": [
			["不正常的煤炭", "解构机 ➊", "不正常的煤炭"],
			["机器人交互接口 (物品)", "不正常的机器框架", "机器人交互接口 (物品)"],
			["不正常的煤炭", "能源调节器", "不正常的煤炭"]
		],
		"ingredients": [
			["不正常的煤炭", 4],
			["解构机 ➊", 1],
			["机器人交互接口 (物品)", 2],
			["不正常的机器框架", 1],
			["能源调节器", 1]
		],
		"count": 1
	},
	"解构机 ➌": {
		"type": "增强型工作台",
		"map": [
			["发散的煤炭", "解构机 ➋", "发散的煤炭"],
			["机器人交互接口 (物品)", "发散的机器框架", "机器人交互接口 (物品)"],
			["发散的煤炭", "能源调节器", "发散的煤炭"]
		],
		"ingredients": [
			["发散的煤炭", 4],
			["解构机 ➋", 1],
			["机器人交互接口 (物品)", 2],
			["发散的机器框架", 1],
			["能源调节器", 1]
		],
		"count": 1
	},
	"解构机 ➍": {
		"type": "增强型工作台",
		"map": [
			["异常的煤炭", "解构机 ➌", "异常的煤炭"],
			["机器人交互接口 (物品)", "异常的机器框架", "机器人交互接口 (物品)"],
			["异常的煤炭", "能源调节器", "异常的煤炭"]
		],
		"ingredients": [
			["异常的煤炭", 4],
			["解构机 ➌", 1],
			["机器人交互接口 (物品)", 2],
			["异常的机器框架", 1],
			["能源调节器", 1]
		],
		"count": 1
	},
	"解构机 ➎": {
		"type": "增强型工作台",
		"map": [
			["完美的煤炭", "解构机 ➍", "完美的煤炭"],
			["机器人交互接口 (物品)", "完美的机器框架", "机器人交互接口 (物品)"],
			["完美的煤炭", "能源调节器", "完美的煤炭"]
		],
		"ingredients": [
			["完美的煤炭", 4],
			["解构机 ➍", 1],
			["机器人交互接口 (物品)", 2],
			["完美的机器框架", 1],
			["能源调节器", 1]
		],
		"count": 1
	},
	"重构机 ➊": {
		"type": "增强型工作台",
		"map": [
			["奇怪的煤炭块", "可授权式可编程式机器人 (渔夫)", "奇怪的煤炭块"],
			["机器人交互接口 (物品)", "奇怪的机器框架", "机器人交互接口 (物品)"],
			["奇怪的煤炭块", "能量水晶", "奇怪的煤炭块"]
		],
		"ingredients": [
			["奇怪的煤炭块", 4],
			["可授权式可编程式机器人 (渔夫)", 1],
			["机器人交互接口 (物品)", 2],
			["奇怪的机器框架", 1],
			["能量水晶", 1]
		],
		"count": 1
	},
	"重构机 ➋": {
		"type": "增强型工作台",
		"map": [
			["不正常的煤炭块", "重构机 ➊", "不正常的煤炭块"],
			["机器人交互接口 (物品)", "不正常的机器框架", "机器人交互接口 (物品)"],
			["不正常的煤炭块", "能量水晶", "不正常的煤炭块"]
		],
		"ingredients": [
			["不正常的煤炭块", 4],
			["重构机 ➊", 1],
			["机器人交互接口 (物品)", 2],
			["不正常的机器框架", 1],
			["能量水晶", 1]
		],
		"count": 1
	},
	"重构机 ➌": {
		"type": "增强型工作台",
		"map": [
			["发散的煤炭块", "重构机 ➋", "发散的煤炭块"],
			["机器人交互接口 (物品)", "发散的机器框架", "机器人交互接口 (物品)"],
			["发散的煤炭块", "能量水晶", "发散的煤炭块"]
		],
		"ingredients": [
			["发散的煤炭块", 4],
			["重构机 ➋", 1],
			["机器人交互接口 (物品)", 2],
			["发散的机器框架", 1],
			["能量水晶", 1]
		],
		"count": 1
	},
	"重构机 ➍": {
		"type": "增强型工作台",
		"map": [
			["异常的煤炭块", "重构机 ➌", "异常的煤炭块"],
			["机器人交互接口 (物品)", "异常的机器框架", "机器人交互接口 (物品)"],
			["异常的煤炭块", "能量水晶", "异常的煤炭块"]
		],
		"ingredients": [
			["异常的煤炭块", 4],
			["重构机 ➌", 1],
			["机器人交互接口 (物品)", 2],
			["异常的机器框架", 1],
			["能量水晶", 1]
		],
		"count": 1
	},
	"重构机 ➎": {
		"type": "增强型工作台",
		"map": [
			["完美的煤炭", "重构机 ➍", "完美的煤炭"],
			["机器人交互接口 (物品)", "完美的机器框架", "机器人交互接口 (物品)"],
			["完美的煤炭", "能量水晶", "完美的煤炭"]
		],
		"ingredients": [
			["完美的煤炭", 4],
			["重构机 ➍", 1],
			["机器人交互接口 (物品)", 2],
			["完美的机器框架", 1],
			["能量水晶", 1]
		],
		"count": 1
	},
	"网络 EMC 重构机": {
		"type": "增强型工作台",
		"map": [
			["放射性光学之星", "重构机 ➍", "放射性光学之星"],
			["网络监视器", "重构机 ➎", "网络监视器"],
			["放射性光学之星", "充能人工智能核心", "放射性光学之星"]
		],
		"ingredients": [
			["放射性光学之星", 4],
			["重构机 ➍", 1],
			["网络监视器", 2],
			["重构机 ➎", 1],
			["充能人工智能核心", 1]
		],
		"count": 1
	}
}