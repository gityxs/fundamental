/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "[stage] -": "[阶段] -",
    "[true] -": "[真理] -",
    "[date] -": "[日期] -",
    "[time] -": "[时间] -",
    ", by creating an issue": ", 通过创建问题",
    ", if to reset with enough Energy.": "，如果用足够的能量重置。",
    ". Reset current Structures and Energy. Will also boost production by": ". 重置当前结构和能量。 还将提高产量",
    "(10 minutes worth of production)": "（10 分钟的制作价值）",
    "(before Accretion boost)": "（吸积提升前）",
    "Accretion": "吸积",
    "Advanced": "先进的",
    "All OFF": "全部关闭",
    "All ON": "全开",
    "and maybe more": "也许更多",
    "Arrow down and Arrow up -": "向下箭头和向上箭头 -",
    "Arrow left and Arrow right: (None/Shift)": "向左箭头和向右箭头：（无/Shift）",
    "Atoms": "原子",
    "Auto consume offline storage": "自动消耗离线存储",
    "Auto OFF": "自动关闭",
    "Auto ON": "自动开启",
    "Black holes:": "黑洞：",
    "Cancel": "取消",
    "cancel close Alert": "取消关闭警报",
    "Case sentitive": "区分大小写",
    "Change Active Stage": "更改活动阶段",
    "change subtab": "更改子标签",
    "Change tab": "更改选项卡",
    "Check": "查看",
    "Collapse": "坍缩",
    "Collapse when can increase Mass at least": "坍缩时至少可以增加质量",
    "Confirm": "确认",
    "confirm close Alert": "确认关闭警报",
    "Confirmation toggles": "确认切换",
    "Consuming": "消耗",
    "Cosmic dust production hardcap starts at": "宇宙尘埃生产硬帽开始于",
    "Cost:": "成本：",
    "Current Active Stages": "当前活动阶段",
    "Current effect -> after Collapse": "当前效果 -> 坍缩后",
    "Current stage:": "当前阶段：",
    "Current tab is stage tab": "当前选项卡是阶段选项卡",
    "Current tab: Stage tab": "当前选项卡：阶段选项卡",
    "Custom font size (art won't scale)": "自定义字体大小（艺术不会缩放）",
    "Delete save file": "删除存档",
    "Description:": "描述：",
    "Discharge": "释放",
    "Discharge goals:": "释放目标：",
    "Discord": "Discord",
    "Effect:": "效果：",
    "Element:": "元素：",
    "Elements": "元素",
    "Energy": "能量",
    "Enter -": "进入 -",
    "Escape -": "逃脱 -",
    "Export save file": "导出保存文件",
    "false": "错误的",
    "for current active Stage": "当前活动阶段",
    "for current day, month, year": "当前日、月、年",
    "for current hour, minute, second": "当前时、分、秒",
    "for current true Stage": "对于当前的真实阶段",
    "For every reached Milestone, will earn": "对于每个达到的里程碑，将获得",
    "Format type:": "格式类型：",
    "from Offline storage to add": "从离线存储添加",
    "Fundamental.": "基本原理。",
    "Fundamental.txt": "基础.txt",
    "Gain": "获得",
    "Game autosave interval": "游戏自动保存间隔",
    "Game is loading. If it won't load, then can try to report it": "游戏正在加载。 如果它不能正常加载，那么可以尝试更换谷歌浏览器或者给作者反馈，点",
    "here": "这里",
    "Hide": "隐藏",
    "Highest Main-sequence mass:": "最高主序质量：",
    "Highest:": "最高：",
    "Hover to see.": "悬停查看。",
    "If you do not need Screen Reader support, then turn it off in settings": "如果您不需要屏幕阅读器支持，请在设置中将其关闭",
    "Information for Strange quarks": "奇异夸克的信息",
    "Intergalactic": "星际",
    "Interstellar": "星际",
    "Language type hotkeys (English only)": "语言类型热键（仅限英文）",
    "Last time saved:": "上次保存时间：",
    "Less recommended options": "较少推荐的选项",
    "Load": "加载",
    "Lose all progress, but move to the next stage. Each stage has its own unique theme.": "失去所有进展，但进入下一阶段。 每个阶段都有自己独特的主题。",
    "Main-sequence mass gain is limited to": "主序质量增益限于",
    "make a new Structure": "做一个新的结构",
    "Matter": "物质",
    "Max export:": "最大导出：",
    "Max offline:": "最大离线：",
    "Microworld": "微观世界",
    "Missing": "失踪",
    "Mobile device support": "移动设备支持",
    "Molecules": "分子",
    "Most Clouds at once:": "一次最多的云：",
    "Most Energy at once:": "一次最多的能量：",
    "ms": "毫秒",
    "Need:": "需要：",
    "Need: 24 Particles": "需要：24 个粒子",
    "Need: 3 Atoms": "需要：3个原子",
    "Need: Missing": "需要：失踪",
    "Neutron stars:": "中子星：",
    "Next goal is 1 Energy": "下一个目标是 1 能量",
    "Next:": "下一个：",
    "Not in current session": "不在当前会话中",
    "Numbers -": "数字 -",
    "Numbers update and auto speed interval": "数字更新和自动速度间隔",
    "obtain on Stage reset:": "获得阶段重置：",
    "Options": "选项",
    "or any Star reward by": "或任何星级奖励",
    "Particles": "粒子",
    "Pause game": "暂停游戏",
    "Placeholder": "占位符",
    "Please export save file regularly": "请定期导出存档备份",
    "point": "观点",
    "Preons production hardcap starts at": "前子 生产硬上限开始于",
    "Preview": "预览",
    "producing": "生产",
    "Quarks": "夸克",
    "Rank": "段位",
    "Red giants:": "红巨人：",
    "Requirement:": "要求：",
    "Research": "研究",
    "Researches": "研究",
    "Resource.": "资源。",
    "Return back to Microworld if can get at least": "如果至少能得到，就返回微观世界",
    "Reward:": "报酬：",
    "Screen reader support": "屏幕阅读器支持",
    "Select different theme from here": "从这里选择不同的主题",
    "Self-made Stars:": "自制明星：",
    "separator": "分隔器",
    "Special Researches": "专项研究",
    "Stage": "阶段",
    "Stage resets:": "阶段重置：",
    "Stage:": "阶段：",
    "Started playing:": "开始游戏：",
    "Stats": "统计数据",
    "Storaged offline:": "离线存储：",
    "Strange matter": "奇异物质",
    "Strange quark.": "奇异夸克。",
    "Strange quarks": "奇异夸克",
    "Strange quarks for doing it": "这样做的奇怪夸克",
    "Strange quarks:": "奇异夸克：",
    "Strange quarks.": "奇异夸克。",
    "Strangeness": "奇异数",
    "Strict": "精确",
    "Structures": "结构",
    "Submerged": "湮没",
    "Support isn't full, might have mistakes. If there are any mistakes or suggestions, you can contact me trough Discord (link in settings) or": "支持不完整，可能有错误。 如果有任何错误或建议，您可以通过 Discord（设置中的链接）或",
    "This reset:": "此重置：",
    "times": "次",
    "times of a current amount": "当前数量的倍数",
    "to passed time": "过去的时间",
    "To switch Active Stage, press Shift + Left or Right Arrow": "要切换活动阶段，请按 Shift + 向左或向右箭头",
    "Total improvement:": "总体改进：",
    "Total:": "全部的：",
    "Type:": "类型：",
    "Unlock:": "开锁：",
    "Unlocked Ranks:": "解锁等级：",
    "Unlocks:": "解锁：",
    "Upgrades": "升级",
    "Use left or right arrow keys to navigate through tabs. Up or down arrows to navigate through subtabs (when there are any). Can check other hotkeys in settings.": "使用向左或向右箭头键浏览选项卡。 向上或向下箭头在子选项卡中导航（如果有的话）。 可以在设置中查看其他热键。",
    "Vacuum state:": "真空状态：",
    "Vaporization": "汽化",
    "Vaporize when can get at least": "蒸发时至少可以得到",
    "Version": "版本",
    "Visual game update interval": "视觉游戏更新间隔",
    "Visual numbers update interval": "视觉数字更新间隔",
    "Void": "空白",
    "Warp": "扭曲",
    "Welcome back": "欢迎回来",
    "You are not ready": "你还没准备好",
    "You can add any of these for extra information of a save file": "您可以添加其中任何一个以获得保存文件的额外信息",
    "Show": "显示",
    "Ability to reset at any time, and if had enough Energy, then production for all Structures will also be boosted by 4 times.\nTotal boost from reached goals is: 1.": "随时重置的能力，如果有足够的能量，那么所有结构的生产也将增加 4 倍。\n达到目标的总提升是：1。",
    "Atoms produce 5 times more Particles.": "原子产生 5 倍以上的粒子。",
    "Bigger electrons.": "更大的电子。",
    "More neutrons.": "更多的中子。",
    "Particle cost is 10 times cheaper.": "粒子成本便宜 10 倍。",
    "Particle produce 10 times more Quarks.": "粒子产生 10 倍以上的夸克。",
    "Stronger protons.": "更强的质子。",
    "Superposition. Unlock a new reset tier.": "叠加。 解锁一个新的重置层级。",
    "Created.": "已创建。",
    "Current tab is settings tab and its subtab is Settings": "当前选项卡是设置选项卡，其子选项卡是设置",
    "Offline storage": "离线存储",
    "Saved": "已保存",
    "Unknown Structures:": "未知结构：",
    "You have enough Energy to gain boost. Continue?": "你有足够的能量来获得提升。 是否继续？",
    "Ability to reset at any time, and if had enough Energy, then production for all Structures will also be boosted by 4 times.\nTotal boost from reached goals is: 4.": "随时重置的能力，如果有足够的能量，那么所有结构的生产也将增加 4 倍。\n达到目标的总增加量是：4。",
    "Imported": "已导入",
    "Ability to reset at any time, and if had enough Energy, then production for all Structures will also be boosted by 8 times.\nTotal boost from reached goals is: 32768.": "随时重置的能力，如果有足够的能量，那么所有结构的生产也将增加 8 倍。\n达到目标的总增加量是：32768。",
    "Automatization for making Structures.": "制作结构的自动化。",
    "Cost scaling is 0.01 smaller for each level.": "每个级别的成本缩放比例小 0.01。",
    "Cost scaling is decreased by 0.29.": "成本缩放减少了 0.29。",
    "Current tab is research tab": "当前标签是研究标签",
    "Deuterium. Heavy.": "氘。 很重。",
    "Discharge bonus improved.": "释放奖金提高。",
    "Discharge goal requirements decreased.": "释放目标要求降低。",
    "Discharge is now provides 2 times bigger bonus per reached goal.": "放电现在为每个达到的目标提供 2 倍的奖励。",
    "Discharge will boost 'Tritium' upgrade for every reached goal + 1.": "每达到一个目标 + 1，放电将促进“氚”升级。",
    "Each self-made Structure, boost each other by additional 0.01.": "每一个自制结构，相互提升0.01。",
    "Effect of 'Deuterium' upgrade is bigger.": "“氘”升级效果更大。",
    "Effect of 'Protium' upgrade is stronger.": "“氕”升级的效果更强。",
    "Effect of 'Tritium' upgrade is better.": "‘氚’升级效果更好。",
    "Enter next Stage": "进入下一阶段",
    "Maxed.": "最大化。",
    "New toggles.": "新的切换。",
    "Next goal for Discharge bonus scales by -1 less.": "放电奖金的下一个目标减少 -1。",
    "Nuclear fusion.": "核聚变。",
    "Protium. Basic.": "氕。 基础。",
    "Radioactive Discharge.": "放射性放电。",
    "Structures (only self-made one's) boost themselves by 1.05 times.": "结构（仅限自制结构）将自身提升 1.05 倍。",
    "Tritium. Radioactive.": "氚。 放射性。",
    "Unlock ability to make multiple Structures at same time.": "解锁同时制作多个结构的能力。",
    "Unspent Energy boost Molecules production of themselves 1 to 1.": "未消耗的能量以 1 比 1 的比例促进分子自身的生产。",
    "Will automatically make Molecules.\n(Auto will make them, only when have 2 times of the Structure cost)": "会自动制造分子。\n（自动会制造它们，只有当有 2 倍的结构成本时）",
    ". It takes a lot to form more than one.": ". 形成一个以上需要很多。",
    ". Structures, upgrades, will be reset. But in return gain": ". 结构，升级，将被重置。 但换来的是收获",
    "Better Mole production.": "更好的摩尔生产。",
    "Clouds": "云",
    "Condensation.": "缩合。",
    "Drops": "水滴",
    "Drops produce 3 times more Moles.": "水滴产生 3 倍以上的摩尔。",
    "Drops will produce Moles even more for every self-made Drops.": "每次自制 水滴，水滴 都会产生更多的摩尔。",
    "Gain ability to convert Drops into Clouds. (Puddles get a boost equal to Cloud amount)\nCurrent Cloud gain is (Drops / 1e10)^0.6.": "获得将水滴转化为云的能力。 （水坑获得等于云量的提升）\n当前云增益为 (Drops / 1e10)^0.6。",
    "improves": "改善",
    "Increased max offline time.": "增加最长离线时间。",
    "Lakes": "湖泊",
    "Molecules to Moles. Even more Moles.": "分子到摩尔。 甚至更多的摩尔。",
    "Moles": "摩尔",
    "More streams.": "更多流。",
    "Ponds": "池塘",
    "Ponds do not produce Puddles, instead they only improve them.\nThis upgrade will create extra Puddles for every Pond. (3 extra Puddles per Pond)": "池塘不会产生水坑，而只会改善水坑。\n此升级将为每个池塘创建额外的水坑。 （每个池塘 3 个额外水坑）",
    "Puddles": "水坑",
    "Research this to make max offline timer +4 hours longer.": "对此进行研究，使最大离线计时器延长 4 小时。",
    "s": "秒",
    "Seas": "海洋",
    "Stream. Spreads water around.": "溪流。 向四周洒水。",
    "Stronger surface stress.": "更强的表面应力。",
    "Stronger surface tension.": "更强的表面张力。",
    "Surface stress upgrade is now +0.03 stronger.": "表面应力升级现在强 +0.03。",
    "Surface stress. Biggest Puddles.": "表面应力。 最大的水坑。",
    "Surface tension upgrade is now +0.02 stronger.": "表面张力升级现在强+0.02。",
    "Surface tension. Bigger Puddles.": "表面张力。 更大的水坑。",
    "Through condensation bonus to Structure production is now based on total produced, instead of current amount.\nLevel 1 for Drops, level 2 for Moles.": "通过凝结，结构生产的奖励现在基于总生产量，而不是当前数量。\n1 级为 水滴，2 级为 摩尔。",
    "Vaporization. Unlock a new reset tier.": "汽化。 解锁一个新的重置等级。",
    "Will automatically make (unknown).\n(Auto will make them, only when have 2 times of the Structure cost)": "将自动制作（未知）。\n（自动制作它们，仅当结构成本的 2 倍时）",
    "With more streams, can have even more extra Puddles. (+1 extra Puddles per Pond)": "随着更多的流，可以有更多的额外水坑。 （每个池塘 +1 个额外水坑）",
    "Clouds will now use total produced Drops instead, when formed.": "云现在将在形成时使用总产生的水滴。",
    "Distributary channel.": "流通渠道。",
    "Gain ability to convert Drops into Clouds. (Puddles get a boost equal to Cloud amount)\nCurrent Cloud gain is (Drops / 1e10)^0.36. (Softcapped)": "获得将水滴转化为云的能力。 （水坑获得等于云量的提升）\n当前云增益为 (水滴 / 1e10)^0.36。 （软上限）",
    "Lakes now create extra Ponds. (3 extra Ponds per Lake)": "湖泊现在会创造额外的池塘。 （每个湖 3 个额外的池塘）",
    "Natural Vaporization.": "自然汽化。",
    "Rain Clouds.": "雨云。",
    "River. Spreads even more water.": "河。 传播更多的水。",
    "Rivers can split now, that allows even more Ponds per Lake. (+1 per)": "河流现在可以分开，这允许每个湖有更多的池塘。 （+1 每个）",
    "Seas get a boost based on amount of Clouds. (Equal to 5.25)": "海洋根据云的数量得到提升。 （等于 5.25）",
    "Some Clouds will start pouring Drops themselves. (1000 per second)": "一些 云 会开始自己倾倒 水滴。 （每秒 1000 个）",
    "Storm Clouds.": "暴风云。",
    "Will automatically make Seas.\n(Auto will make them, only when have 2 times of the Structure cost)": "会自动制作海洋。\n（自动制作它们，只有当有 2 倍的结构成本时）",
    "px": "px(像素)",
    "- Everything will be lost, but at same time gained. Each of the Stars will produce something unique and special.": "- 一切都会失去，但同时也会得到。 每一颗星星都会产生一些独特而特别的东西。",
    "As fuel runs out, each star will boost production in its own special way.": "随着燃料耗尽，每颗恒星都会以自己特殊的方式提高产量。",
    "Blue hypergiants": "蓝超巨星",
    "Blue hypergiants Stars are now creating something new, upon collapse reset.": "蓝色超巨星恒星现在正在创造新的东西，在坍缩重置。",
    "Brown dwarfs": "褐矮星",
    "Carbon-Nitrogen-Oxygen cycle.": "碳-氮-氧循环。",
    "Clusters": "集群",
    "CNO cycle is now a better source of Helium and Energy. Unlock a new Structure and more of something else.": "CNO 循环现在是更好的氦气和能源来源。 解锁一个新结构和更多其他东西。",
    "Current tab is research tab and its subtab is Researches": "当前选项卡是研究选项卡，其子选项卡是研究",
    "Fuse with Protium instead of Deuterium. Unlock a new Structure and something else.\n(Somewhere in Research tab)": "与 氕 而不是 氘 融合。 解锁新结构和其他东西。\n（研究选项卡中的某处）",
    "Galaxies": "星系",
    "Gravitational collapse.": "引力坍缩。",
    "How many seconds do you wish to Warp forward? Current Offline time is 45 minutes (will be used without any loss, 1 minute at a time)\nBigger number will result in more lag": "您希望向前弯曲多少秒？ 当前离线时间为 45 分钟（将无任何损失地使用，一次 1 分钟）\n更大的数字将导致更多延迟",
    "Improve effect of 'Planetary system', as well increases its max level by +3.": "提高“行星系统”的效果，同时将其最高等级提高+3。",
    "Locked": "锁定",
    "Main sequence": "主序",
    "Mass": "质量",
    "Nebulas": "星云",
    "Nova.": "新星。",
    "Planetary system.": "行星系统。",
    "Proton-proton chain.": "质子-质子链。",
    "Protoplanetary disk.": "原行星盘。",
    "Red supergiants": "红超巨星",
    "Return back to start": "返回开始",
    "Star system.": "星星系统。",
    "Stars": "星星",
    "Will automatically make Blue hypergiants.\n(Auto will make them, only when have 2 times of the Structure cost)": "会自动制造蓝色超巨星。\n（自动会制造它们，只有在结构成本的 2 倍时才会制造）",
    "You will return to first stage. But maybe you will get something in return. Ready?": "您将返回到第一阶段。 但也许你会得到一些回报。 准备好了吗？",
    "'Gas' upgrade is now stronger.": "“气体”升级现在更强。",
    "'Gravitational field' upgrade will boost Protoplanets now as well. (Only half of effect)": "“引力场”升级现在也将提升原行星。 （只有一半的效果）",
    "'Magma Ocean' upgrade is stronger now. (1.5x times)": "'岩浆海洋'升级现在更强。 （1.5 倍）",
    "Accretion speed for 'Pebble accretion' increased again, by 3.": "“卵石堆积”的吸积速度再次提高了 3。",
    "Accretion speed increased again (because of drag and escape velocity), by 2.": "吸积速度再次增加（由于阻力和逃逸速度），增加了 2。",
    "Adhesion.": "附着力。",
    "Aerodynamic drag.": "气动阻力。",
    "Atmosphere.": "气氛。",
    "Bodies are now massive enough to affect each other with gravity. (4x boost to Planetesimals)": "物体现在足够大，可以通过引力相互影响。 （小行星提升 4 倍）",
    "Brownian motion.": "布朗运动。",
    "Contact binary.": "接触二进制。",
    "Cosmic dust": "宇宙尘埃",
    "Current": "当前的",
    "Dust particles cling to each other. (+0.01 to 'Brownian motion')": "灰尘颗粒相互粘附。 （+0.01 到“布朗运动”）",
    "Dust production is increased by 3.": "产尘量增加 3。",
    "Dust production is increased by another 15.86.": "粉尘产量又增加了 15.86。",
    "Efficient growth.": "高效增长。",
    "Gas. New substance for Accretion.": "气体。 吸积的新物质。",
    "Gravitational field. Unlock a new Structure.": "引力场。 解锁一个新结构。",
    "Gravity.": "重力。",
    "Increase it with Mass. (Return back to Dust, but unlock something new)": "用质量增加它。（返回尘埃，但解锁新东西）",
    "Inelastic collisions.": "非弹性碰撞。",
    "is:": "是：",
    "Jovian planet": "类木行星",
    "Just a small meteoroid, but it will be a good base for what to come. (Also 2x boost to Dust)": "只是一颗小流星体，但它将成为未来的良好基地。 （对灰尘也有 2 倍的提升）",
    "Magma ocean.": "岩浆海洋。",
    "Max Rank achieved": "达到最高排名",
    "Micrometeoroid. Unlock a new Structure.": "微流星体。 解锁一个新结构。",
    "More massive bodies.": "更庞大的身体。",
    "Pebble accretion.": "卵石增生。",
    "Planetary differentiation.": "行星分化。",
    "Planetesimals": "小行星",
    "Planetesimals produce more Dust. (3 times more)": "小行星产生更多的尘埃。 （3倍以上）",
    "Protoplanets": "原行星",
    "Rank boost.": "排名提升。",
    "Ready to enter next stage? Next one will be harder than current": "准备好进入下一阶段了吗？ 下一个会比现在更难",
    "Ring system.": "环系统。",
    "Rubble pile.": "瓦砾堆。",
    "Satellite system.": "卫星系统。",
    "Satellites": "卫星",
    "Satellites effect scales better.": "卫星效应规模更好。",
    "Satellites scaling cost is now 2 times smaller.": "卫星缩放成本现在减少了 2 倍。",
    "Shattered pieces fall back together. Mass production is now even bigger. (By 3x)": "破碎的碎片落回一起。 现在质量产量更大。 （3倍）",
    "Slow encounter velocities will result in a more efficient growth, so this research will make bodies lose more energy with each deflection. Mass production increased by 2.": "缓慢的相遇速度将导致更有效的增长，因此这项研究将使身体在每次偏转时损失更多的能量。 质量生产增加了 2。",
    "Small bodies spontaneously concentrate into clumps. (Self-made Planetesimals boost each other by 1.02)": "小物体自发地聚集成团块。 （自制小行星互相提升1.02）",
    "Some Planetesimals instead of shattering form a contact binary or even trinary. Planetesimals production boosted by 5x.": "一些小行星不是破碎，而是形成接触双星甚至三星。 小行星产量提高了 5 倍。",
    "Space weathering.": "空间风化。",
    "Streaming instability.": "流式不稳定。",
    "Tidal force.": "潮汐力。",
    "Unlock yet another Structure.": "解锁另一个结构。",
    "Viscosity.": "粘度。",
    "Weight.": "重量。",
    "Will automatically make Satellites.\n(Auto will make them, only when have 2 times of the Structure cost)": "会自动制作卫星。\n（自动会制作它们，只有当有 2 倍的结构成本时）",
    "A Nebula of Drops.": "水滴星云。",
    "Ability to reset at any time, and if had enough Energy, then production for all Structures will also be boosted by 12 times.\nTotal boost from reached goals is: 20736.": "随时重置的能力，如果有足够的能量，那么所有结构的生产也将增加 12 倍。\n达到目标的总增加量是：20736。",
    "Accretion.": "吸积。",
    "Always have +1 bonus Discharge.": "总是有 +1 奖励放电。",
    "Automatic Discarge.": "自动卸料。",
    "Automatically Discharge upon creating an upgrade or reaching next goal.": "创建升级或达到下一个目标时自动放电。",
    "Base Discharge effect is now +1.": "基础放电效果现在为 +1。",
    "Better 'Tritium' effect.": "更好的“氚”效应。",
    "Biggest of all.": "最大的。",
    "Can't be created outside of Submerged stage.": "无法在 湮没 阶段之外创建。",
    "Cheaper Discharge.": "放电更便宜。",
    "Cluster of Mass.": "质量集群。",
    "Collapse to 100 Black holes or more.": "坍缩到 100 个黑洞或更多。",
    "Collapse to at least 9000 Main-sequence mass.": "坍缩到至少 9000 主序质量。",
    "Current tab is settings tab and its subtab is Stats": "当前选项卡是设置选项卡，其子选项卡是统计信息",
    "Current tab is strangeness tab and its subtab is Matter": "当前标签为陌生标签，其子标签为物质",
    "Current tab is strangeness tab and its subtab is Milestones": "当前标签是陌生标签，它的子标签是里程碑",
    "Discharge goal scales slower. (-1)": "排放目标规模变慢。 (-1)",
    "Discharge with at least 1e220 Quarks at once.": "一次至少释放 1e220 个夸克。",
    "Endless Matter.": "无尽的物质。",
    "Energized.": "充满活力。",
    "First level is for making multiple Structures at same time.\nSecond level is to turn OFF/ON all auto toggles at once.\nThird level is to turn OFF/ON auto consumption of Offline storage.": "第一级用于同时制作多个结构。\n第二级用于一次关闭/打开所有自动切换。\n第三级用于关闭/打开离线存储的自动消耗。",
    "Free Discharge.": "免费放电。",
    "Gain more Energy from creating Particles, +1.": "通过创建粒子获得更多能量，+1。",
    "Have at least 1e30 Mass at once.": "一次至少有 1e30 Mass。",
    "Have at least 3000 Puddles at same time.": "同时拥有至少 3000 个水坑。",
    "Have more Satellites than 25.": "拥有超过 25 颗卫星。",
    "Increase max level of 'New toggles'.Also keep them on Stage reset.": "增加“新切换”的最大级别。同时让它们保持在阶段重置状态。",
    "Increased Energy.": "增加能量。",
    "Infinity": "无限",
    "Interstellar.": "星际。",
    "Just a bigger Puddle.": "只是一个更大的水坑。",
    "Just more Mass.": "只是更多的质量。",
    "Keep auto Structures.": "保留自动结构。",
    "Microworld.": "微观世界。",
    "More toggles.": "更多切换。",
    "none": "没有任何",
    "Research for improved 'Tritium' upgrade is now better. (+0.3)": "改进“氚”升级的研究现在更好了。 (+0.3)",
    "Satellites of Satellites.": "卫星的卫星。",
    "Stars produce 4 times more Elements.": "星星产生 4 倍以上的元素。",
    "Start with auto for Particles.": "从粒子的自动开始。",
    "Stronger Discharge.": "更强的放电。",
    "Submerged.": "湮没。",
    "Vaporize 1e30 Drops at once.": "一次蒸发 1e30 水滴。",
    "You will gain 1 Strange quarks for reaching this milestone.": "达到此里程碑后，您将获得 1 个奇异夸克。",
    "This will reset all of your current Structures and Energy. You will NOT gain production boost. Continue?": "这将重置您当前的所有结构和能量。 您不会获得生产提升。 继续？",
    "This will truly delete your save file and clear local storage!\nType 'delete' to confirm.": "这将真正删除您的保存文件并清除本地存储！\n键入“delete”进行确认。",
    "Game will auto refresh. If not then do it manually": "游戏会自动刷新。 如果没有，请手动执行",
    "Will automatically make Atoms.\n(Auto will make them, only when have 2 times of the Structure cost)": "会自动制作原子。\n（自动会制作它们，只有当有 2 倍的结构成本时）",
    "Ponds do not produce Puddles, instead they only improve them.\nThis upgrade will create extra Puddles for every Pond. (1 extra Puddles per Pond)": "池塘不会产生水坑，而只会改善水坑。\n此升级将为每个池塘创建额外的水坑。 （每个池塘 1 个额外水坑）",
    "Will automatically make Drops.\n(Auto will make them, only when have 2 times of the Structure cost)": "会自动制作水滴。\n（自动会制作它们，只有当有 2 倍的结构成本时）",
    "Some Clouds will start pouring Drops themselves. (1 per second)": "一些 云 会开始自己倾倒 水滴。 （每秒 1 个）",
    "Will automatically make Ponds.\n(Auto will make them, only when have 2 times of the Structure cost)": "会自动制作池塘。\n（自动会制作它们，只有当有 2 倍的结构成本时）",
    "Will automatically make Cosmic dust.\n(Auto will make them, only when have 2 times of the Structure cost)": "会自动制造宇宙尘埃。\n（自动制造它们，只有当有 2 倍的结构成本时）",
    "Can't Warp without any Offline time": "没有任何离线时间就无法扭曲",
    "Current Active Stage is 'Submerged'": "当前活动阶段为“湮没”",
    "For full support please refresh the page. This will add on touch start check upgrade and touch end create an upgrade.\n(For non mobile device this will cause issues)": "如需全面支持，请刷新页面。 这将添加触摸开始检查升级和触摸结束创建升级。\n（对于非移动设备，这会导致问题）",
    "Information for Cosmic dust": "宇宙尘埃 的信息",
    "Information for Satellites": "卫星 的信息",
    "Information for Protoplanets": "原行星 的信息",
    "Information for Planetesimals": "小行星 的信息",
    "Information for Mass": "质量 的信息",
    "Information for Clouds": "云 的信息",
    "Information for Drops": "水滴 的信息",
    "Information for Lakes": "湖泊 的信息",
    "Information for Elements": "元素 的信息",
    "Information for Blue hypergiants": "蓝超巨星 的信息",
    "Information for Brown dwarfs": "褐矮星 的信息",
    "Information for Stars": "星星 的信息",
    "Information for Main sequence": "主序列 的信息",
    "Information for Red supergiants": "红超巨星 的信息",
    "Information for Moles": "摩尔 的信息",
    "Information for Ponds": "池塘 的信息",
    "Information for Seas": "海洋 的信息",
    "Information for Puddles": "水坑 的信息",
    "You will get: focus event on upgrades to get description (Refresh page to get it, also I need feedback on it), special tab to check progress and more.\n(For non screen readers this will cause issues)": "您将获得：关注升级事件以获取描述（刷新页面以获取它，我也需要对此的反馈）、用于检查进度的特殊选项卡等。\n（对于非屏幕阅读器，这会导致问题）",
    "Might need more than just water... You can increase rank with Mass.": "可能需要的不仅仅是水...您可以通过 质量 提高段位。",
    "Ocean world": "海洋世界",
    "Current subtab is Stats, part of settings tab": "当前子选项卡是统计信息，设置选项卡的一部分",
    "'Accretion'": "“吸积”",
    "'Interstellar'": "'星际'",
    "(Unknown) Stars are now creating something new, upon collapse reset.": "（未知）星星现在正在创造新的东西，在坍缩重置时。",
    "Will automatically make Main sequence.\n(Auto will make them, only when have 2 times of the Structure cost)": "将自动制作主序列。\n（自动制作它们，仅当具有结构成本的 2 倍时）",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "Github": "Github",
    "D -": "D -",
    "C -": "C -",
    "R -": "R -",
    "S -": "S -",
    "V -": "V -",
    "W -": "W -",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Welcome to 'Fundamental'.\nThis is a test-project made by awWhy. Should be supported by modern browsers, phones and screen readers (need to turn support ON in settings).\nWas inspired by 'Synergism', 'Antimatter Dimensions' and others.\nCurrent version is ": "欢迎来到“Fundamental”。\n这是 awWhy 制作的测试项目。 应受现代浏览器、手机和屏幕阅读器的支持（需要在设置中打开支持）。\n灵感来自“Synergism”、“Antimatter Dimensions”等。\n当前版本为 ",
    "Make for: ": "成本：",
    "Puddles get boost based on Moles. (Equal to Moles ^ ": "水坑会根据 摩尔 得到提升。 （等于 摩尔 的 ^",
    "Puddles get boost based on Drops. (Equal to Drops ^ ": "水坑会根据 水滴 得到提升。 （等于 水滴 的 ^",
    "Planetesimals attract other bodies with own gravity. Planetesimals get boost to production based on unspent Mass.\n(Total boost: ": "小行星以自身引力吸引其他物体。 小行星根据未使用的质量提高产量。\n（总提升：",
    "Core melted, Accretion speed increased. (Mass production increased by ": "核心融化，吸积速度加快。 （质量生产增加 ",
    "Seas get a boost based on amount of Clouds. (Equal to ": "海洋根据云的数量得到提升。 （等于",
    "Current Active Stage is ": "当前活跃阶段是 ",
    "Each Star boost another Star. (Total to each Star is ": "每颗星提升另一颗星。 （每颗星的总数是 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\[([\d\.,]+)\]$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\-([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Welcome back, you were away for (.+) days.\nGame has been updated to (.+)$/, '欢迎回来，您离开了 $1 天。\n游戏已经更新到了 $2'],
    [/^Welcome back, you were away for (.+) hours.\nGame has been updated to (.+)$/, '欢迎回来，您离开了 $1 小时。\n游戏已经更新到了 $2'],
    [/^Welcome back, you were away for (.+) minutes.\nGame has been updated to (.+)$/, '欢迎回来，您离开了 $1 分钟。\n游戏已经更新到了 $2'],
    [/^Welcome back, you were away for (.+) seconds.\nGame has been updated to (.+)$/, '欢迎回来，您离开了 $1 秒。\n游戏已经更新到了 $2'],
    [/^Welcome back, you were away for (.+) hours.\nGame has been updated to (.+)$/, '欢迎回来，您离开了 $1 小时。\n游戏已经更新到了 $2'],
    [/^Welcome back, you were away for (.+) days.\nCurrent version is (.+)$/, '欢迎回来，您离开了 $1 天。\n当前版本是 $2'],
    [/^Welcome back, you were away for (.+) hours.\nCurrent version is (.+)$/, '欢迎回来，您离开了 $1 小时。\n当前版本是 $2'],
    [/^Welcome back, you were away for (.+) minutes.\nCurrent version is (.+)$/, '欢迎回来，您离开了 $1 分钟。\n当前版本是 $2'],
    [/^Welcome back, you were away for (.+) seconds.\nCurrent version is (.+)$/, '欢迎回来，您离开了 $1 秒。\n当前版本是 $2'],
    [/^Welcome back, you were away for (.+) hours. \(Your offline time storage is full\)\nCurrent version is (.+)$/, '欢迎回来，您离开了 $1 小时。（你的离线存储时间已满）\n当前版本是 $2'],
    [/^This save is (.+) hours old.\nSave file version is (.+)$/, '此存档的导出时间是 $1 小时前。\n保存文件版本为 $2'],
    [/^This save is (.+) seconds old.\nSave file version is (.+)$/, '此存档的导出时间是 $1 秒前。\n保存文件版本为 $2'],
    [/^This save is (.+) minutes old.\nSave file version is (.+)$/, '此存档的导出时间是 $1 分钟前。\n保存文件版本为 $2'],
    [/^Collapse to (.+) Mass$/, '坍缩到 $1 质量'],
    [/^Next Rank is (.+) Mass$/, '下一个段位是 $1 质量'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Reset for (.+) Clouds$/, '重置为 $1 云'],
    [/^Unlocked at (.+) Mass$/, '在 $1 质量时解锁'],
    [/^Molecules now produce themselves 12 times quicker.$/, '分子现在生产自己的速度提高了 $1 倍。'],
    [/^Through random collisions every self-made Dust speeds up Accretion speed. \(By (.+)\)$/, '通过随机碰撞，每一个自制的尘埃都加快了吸积速度。 （$1）'],
    [/^Accretion speed is now quicker based on current Dust amount. \((.+) boost\)$/, '根据当前的灰尘量，吸积速度现在更快。 （$1 提升）'],
    [/^Accretion speed is even quicker. Multiplied by current rank. \(Total boost to Dust: (.+)\)$/, '吸积速度更快。 乘以当前等级。 （对尘埃的总提升：$1）'],
    [/^Accretion speed greatly increased by (.+).$/, '吸积速度大大提高了 $1。'],
    [/^Each Star boost another Star. \(Total to each Star is (.+)x, softcapped\)$/, '每颗星可以提升另一颗星。 （每颗星的总和为 $1x，软上限）'],
    [/^From Planetesimals to Planets, will get (.+) boost to all Stars.$/, '从小行星到行星，所有恒星都将获得 $1 的提升。'],
    [/^Molecules produce Molecules. At a reduced rate. \((.+) per second\)$/, '分子产生分子。 以较低的速度。 （每秒 $1）'],
    [/^This will reset all non automization researches and upgrades. But your total Mass will be now (.+), also you will get (.+) Red giants, (.+) Neutron stars and (.+) Black holes$/, '这将重置所有非自动化研究和升级。 但是你的总质量现在是 $1，你也会得到 $2 个红巨星、$3 个中子星和 $4 个黑洞'],
    [/^Next reward unlocked after (.+) more completions.$/, '再完成 $1 次后解锁下一个奖励。'],
    [/^Ability to reset at any time, and if had enough Energy, then production for all Structures will also be boosted by (.+) times.\nTotal boost from reached goals is: (.+).$/, '随时重置的能力，如果有足够的能量，那么所有结构的生产也将增加 $1 倍。\n达到目标的总增加量是：$2。'],
    [/^You will need enough to form a single Drop of water for next one \- (.+) Molecules$/, '您将需要足够的水来形成下一滴水 - $1 分子'],
    [/^Discharge with at least (.+) Quarks at once.$/, '一次至少释放 $1 个夸克。'],
    [/^Next goal is (.+) Energy$/, '下一个目标是 $1 能量'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) Quarks$/, '$1e$2 夸克'],
    [/^([\d\.]+)e([\d\.,]+) Particles$/, '$1e$2 粒子'],
    [/^([\d\.]+)e([\d\.,]+) Atoms$/, '$1e$2 原子'],
    [/^([\d\.]+)e([\d\.,]+) Elements$/, '$1e$2 元素'],
    [/^([\d\.]+)e([\d\.,]+) Elements.$/, '$1e$2 元素。'],
    [/^([\d\.]+)e([\d\.,]+) Drops.$/, '$1e$2 水滴。'],
    [/^([\d\.]+)e([\d\.,]+) Moles$/, '$1e$2 摩尔'],
    [/^([\d\.]+)e([\d\.,]+) Mass$/, '$1e$2 质量'],
    [/^([\d\.]+)e\-([\d\.,]+) Mass$/, '$1e-$2 质量'],
    [/^([\d\.]+)e\-([\d\.,]+) Mass.$/, '$1e-$2 质量.'],
    [/^([\d\.]+)e([\d\.,]+) Drops$/, '$1e$2 水滴'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) seconds ago$/, '$1 秒前'],
    [/^([\d\.,]+) Quarks$/, '$1 夸克'],
    [/^([\d\.,]+) hours$/, '$1 小时'],
    [/^([\d\.,]+) seconds$/, '$1 秒'],
    [/^\+([\d\.,]+) seconds$/, '+$1 秒'],
    [/^([\d\.,]+) Elements.$/, '$1 元素。'],
    [/^([\d\.,]+) Strange quarks.$/, '$1 奇异夸克。'],
    [/^([\d\.,]+) Energy.$/, '$1 能量。'],
    [/^([\d\.,]+) hours ago$/, '$1 小时前'],
    [/^([\d\.,]+) Particles$/, '$1 粒子'],
    [/^([\d\.,]+) Drops$/, '$1 水滴'],
    [/^([\d\.,]+) Elements$/, '$1 元素'],
    [/^([\d\.,]+) Mass$/, '$1 质量'],
    [/^([\d\.,]+) Moles$/, '$1 摩尔'],
    [/^([\d\.,]+) Atoms$/, '$1 原子'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Need: (.+) Elements$/, '需要：$1 元素'],
    [/^Need: (.+) Mass$/, '需要：$1 质量'],
    [/^Need: (.+) Drops$/, '需要：$1 水滴'],
    [/^Need: (.+) Moles$/, '需要：$1 摩尔'],
    [/^Need: (.+) Particles$/, '需要：$1 粒子'],
    [/^Need: (.+) Atoms$/, '需要：$1 原子'],
    [/^Need: (.+) Quarks$/, '需要：$1 夸克'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);