status = -1;
//刚刚找你 你不在 所以我就给你写这套脚本出来了 我给你解说下 
var itemList = Array(//首先我们要接触到的 就是 Array函数系列的运用
			/*Array(1032027,800, 1, 1), //黑水晶耳环
			如上面一排格式大概就是这样   Array(物品ID,概率,数量,播报),//物品名字
			大概格式就是这样然后我给你解说下 概率和播报这两个
			概率这个值是怎么算高或者怎么算低呢？？ 就是全部所有的物品的暴率都加起来然后用这个数除以总暴率就是 这件物品的暴率了
			播报很简单 0就是抽中奖品后不发公告内容 1就是中奖之后要发一条喇叭说 谁谁谁中奖了*/
			
			
			//Array(2043003,500, 1, 1), //单手剑攻击卷轴(必成)
			//Array(2044003,500, 1, 1), //双手剑攻击卷轴(必成)
			//Array(2044303,500, 1, 1), //枪攻击攻击卷轴(必成)
			//Array(2044403,500, 1, 1), //矛攻击攻击卷轴(必成)
			//Array(2044503,500, 1, 1), //弓攻击攻击卷轴(必成)
			//Array(2044603,500, 1, 1), //弩攻击必成卷
			//Array(2043703,500, 1, 1), //短杖攻击必成卷
			//Array(2043803,500, 1, 1), //长杖攻击诅轴(必成)
			//Array(2043303,500, 1, 1), //短剑攻击必成卷
			//Array(2044703,500, 1, 1), //拳套攻击诅轴(必成)
			//Array(2044908,500, 1, 1), //短枪攻击卷轴(必成)
			//Array(2044815,500, 1, 1), //指节攻击必成卷
			//Array(2040807,500, 1, 1), //手套攻击卷轴(必成)

			Array(2040506,500, 1, 1), //全身铠甲敏捷卷轴(必成)
			//Array(2040303 ,500, 1, 1), //耳环智力必成卷(必成)
			//Array(2040710,500, 1, 1), //鞋子跳跃卷轴(必成)
			//Array(2290096,100,1,1),//勇士20
			//Array(2290125,100,1,1),//勇士30
Array(5520000, 200, 1, 1),//剪刀
Array(5570000, 200, 1, 1),//金锤子%
Array(4250602, 200, 1, 1),//黄晶
			//披风------
			Array(1102382,500, 1, 1), //极真
			Array(1102383,500, 1, 1), //极真
			//Array(1102320,500, 1, 1), //1
			//Array(1102321,500, 1, 1), //2
			Array(1102248,500, 1, 1), //祥龙
			//Array(1102238,500, 1, 1), //尾巴
		    Array(1102041,500, 1, 1), //粉浪 
		    Array(1102042,500, 1, 1), //紫浪 
		    Array(1102163,500, 1, 1), //贵族披风
		    Array(1102207,500, 1, 1), //金魂
		    Array(1102206,500, 1, 1),//黑色野兽
//-------耳环-------
			
			
			//Array(1112424,500, 1, 1), //小鱼
			//Array(1112404,500, 1, 1),  //黑羽毛
			
			Array(1082149,200, 1, 1), //工地手套(褐)
		    Array(1122000,500, 1, 1), //黑龙链
		Array(1092049,200, 1, 1),//热情剑盾
		Array(1092050,500, 1, 1),//冷艳剑盾
		//鞋子
		Array(1072664 ,500, 1, 1),//外星人之靴
		//Array(1072672 ,500, 1, 1),//风暴鞋子
		Array(1072799  ,500, 1, 1),//妖精争执靴
		//脸  
		Array(1012371     ,500, 1, 1),//掌上脸饰
		Array(1012319     ,500, 1, 1),//8周年点点红
		//Array(1012158     ,500, 1, 1),//草莓幕斯
		Array(1012132    ,500, 1, 1),//鸟嘴面饰5G5M
		Array(1012284    ,500, 1, 1),//白色专属符号
		Array(1012285   ,500, 1, 1),//黑色专属符号
		Array(1012259   ,500, 1, 1),//高级封锁灰色徽章 - (无描述)3不能升级不可交易
		Array(1012252   ,500, 1, 1),//闪亮红色特殊徽章 - (无描述)5G不能升级		可交易
		Array(1012411   ,500, 1, 1),//白色专属匠人徽章 - (无描述)5G可升级+1  5G可交易
		Array(1012474   ,200, 1, 1),//10周年大赏枫叶脸饰 - (无描述)10G不可交易   可升级3次 
		Array(1012171   ,100, 1, 1),//恐怖鬼娃20G
		
		//眼镜
		//Array(1022231  ,500, 1, 1),//绚蓝水印脸饰  
		Array(1022182  ,500, 1, 1),//混沌品克缤瞳印   
		Array(1022197  ,500, 1, 1),//进化太阳镜   
		Array(1022117  ,500, 1, 1),//玛瑙龙眼镜3G   不可砸
		Array(1022185  ,500, 1, 1),//瑞贝卡的古典眼镜 - (无描述)3G可交易7次
		Array(1022224  ,500, 1, 1),//独眼巨人之眼Lv.1
		Array(1022225  ,500, 1, 1),//独眼巨人之眼Lv.2
		Array(1022226  ,200, 1, 1),//独眼巨人之眼Lv.3
		
		//套服
		
		Array(1052758      ,500, 1, 1),//11周年衣服
		Array(1052569      ,500, 1, 1),//革命战斗服
		Array(1052460      ,500, 1, 1),//外星人
		Array(1052467      ,500, 1, 1),//高级
		
		//戒指1112597 - 希纳斯的钻石戒指
		
		//Array(1113074      ,200, 1, 1),//低级
		Array(1113075      ,200, 1, 1),//最高级贝勒戒指
		Array(1112597     ,200, 1, 1),//希纳斯的钻石戒指
		Array(1113040      ,500, 1, 1),//瑞贝卡的枫叶戒指
		Array(1113017      ,500, 1, 1),//妖精争执戒指
		Array(1112951      ,200, 1, 1),//麦格纳斯的愤怒
		Array(1112952      ,200, 1, 1),//希拉的愤怒
		
		//Array(1112794      ,500, 1, 1),//终极戒指
		Array(1112745     ,500, 1, 1),//幻影守护戒指
		Array(1112804     ,500, 1, 1),//结婚戒指
		Array(1112738     ,500, 1, 1),//外星人之戒指
                Array(1122197   ,80, 1, 1),//外星人吊坠
                Array(1082432   ,80, 1, 1),//暴君手套

		//耳环
		Array(1032171    ,500, 1, 1),//葡 萄耳环 - (无描述)
		Array(1032241     ,500, 1, 1),//魅惑耳环
		Array(1032234     ,200, 1, 1),//蓝色桃心耳环
		Array(1032108    ,500, 1, 1),//无双耳环 - (无描述)2G		6次
		Array(1032216    ,200, 1, 1),//真红耳环 - (无描述)3G		6次
		Array(1032200    ,200, 1, 1),//巨匠耳环 - (无描述)
		Array(1032232    ,200, 1, 1),//海光耳环 - (无描述)
		//腰带
		
		//Array(1132161    ,500, 1, 1),//风暴腰带 - (无描述)	可交易
		Array(1132105    ,500, 1, 1),//维克特班·雷昂腰带 - (无描述)
		Array(1132106    ,500, 1, 1),//赫克斯班·雷昂腰带 - (无描述)
		Array(1132228    ,200, 1, 1),//10周年黑色腰带 - (无描述)
		//可抽可合
		
		Array(1032174     ,500, 1, 1),//瑞贝卡的酸甜耳环 - (无描述)
		Array(1022168     ,500, 1, 1),// 黑羽眼镜 - (无描述)  -攻击1	可升级3  不可交易
		Array(1012348     ,500, 1, 1),//2013圣诞鹿的鼻子 - (无描述)
		Array(1132013     ,500, 1, 1),//1132013 - 不灭的法老腰带 - (无描述)
		
		
		//帽子
			Array(1003843   ,100, 1, 1),//点券帽子牛
		    Array(1002939,500, 1, 1), //安全帽 1003561 
		    Array(1003621,500, 1, 1), //PB  
		    Array(1003722,500, 1, 1), //进阶贝伦头盔  
		    //Array(1003765,500, 1, 1), //真．紫烏鴉 - (无描述)  
		    //Array(1003766,500, 1, 1), //真．戴碧斯魂 - (无描述) 
		    //Array(1003782,100, 1, 1), //神．紫烏鴉 - (无描述)
		    //Array(1003783,100, 1, 1), //神．戴碧斯魂 - (无描述) 
		    Array(1003768,500, 1, 1), //真．龍魔導士翅膀頭巾  
		    Array(1003785,200, 1, 1), //神．龍魔導士翅膀頭巾 - (无描
		    Array(1003767,500, 1, 1), //真．精靈王之頭冠 - (无描述)  
		    Array(1003784,100, 1, 1), //神．精靈王之頭冠 - (无描述)
		    Array(1003787,500, 1, 1), //妖精大眼青蛙帽子 - (无描述)
		    Array(1003863,500, 1, 1), //10周年黑色 - (无描述)
		    Array(1003973 ,500, 1, 1), //蛛丝  - (无描述)
		    Array(1004040 ,500, 1, 1), //小熊猫耳朵  - (无描述)
		    Array(1004041 ,500, 1, 1), //松鼠耳朵  - (无描述)
		    Array(1004042 ,500, 1, 1), //兔耳朵  - (无描述)
		    Array(1004043 ,500, 1, 1), //狗狗耳朵  - (无描述)
		    Array(1004044 ,500, 1, 1), //熊熊耳朵  - (无描述)
			
			
			
			Array(1122029,500, 1, 1), //苏醒的冒险之心         
			Array(1122030,500, 1, 1), //苏醒的冒险之心         
			Array(1122031,500, 1, 1), //苏醒的冒险之心         
			Array(1122032,500, 1, 1), //苏醒的冒险之心         
			Array(1122033,500, 1, 1), //苏醒的冒险之心         
			Array(1122034,200, 1, 1), //觉醒的冒险之心         
			Array(1122035,200, 1, 1), //觉醒的冒险之心
			Array(1122036,200, 1, 1), //觉醒的冒险之心
			Array(1122037,200, 1, 1), //觉醒的冒险之心
			Array(1122038,200, 1, 1), //觉醒的冒险之心 
			
		Array(1032208      ,100, 1, 1),//神话耳环复原第3阶段 - (无描述)
		Array(1032209     ,100, 1, 1),//神话耳环复原第4阶段 - (无描述)
		Array(1032219      ,50, 1, 1),//遗忘之神话耳环 - (无描述)
			
			
		    Array(1102481 ,100, 1, 1),//暴君披风
		    Array(1102482 ,50, 1, 1),//暴君披风
		    Array(1102483 ,100, 1, 1),//暴君披风
		    Array(1102484 ,100, 1, 1),//暴君披风
		    Array(1102485 ,100, 1, 1),//暴君披风
			
		    Array(1072743  ,100, 1, 1),//暴君鞋
		    Array(1072744  ,50, 1, 1),//暴君鞋
		    Array(1072745  ,100, 1, 1),//暴君鞋
		    Array(1072746  ,100, 1, 1),//暴君鞋
		    Array(1072747  ,100, 1, 1),//暴君鞋
			
		    Array(1132174   ,100, 1, 1),//暴君腰带
		    Array(1132175   ,50, 1, 1),//暴君腰带
		    Array(1132176   ,100, 1, 1),//暴君腰带
		    Array(1132177   ,100, 1, 1),//暴君腰带
		    Array(1132178   ,100, 1, 1),//暴君腰带
			//-------帽子-------
			//Array(1382050,50, 1, 1), //玄武长杖
			//Array(1382052,50, 1, 1), //青龙长杖
			//-------武器------

                        Array(1452304 ,30, 1, 1),  //395弓
			Array(1452301 ,30, 1, 1),  //298弓
                        Array(1402326,30, 1, 1), //1198
			Array(1402905,200, 1, 1),  //斩月
                        Array(1402323 ,30, 1, 1),  //395刀
                        Array(1442181 ,100, 1, 1),  //200
                        Array(1432081 ,50, 1, 1),  //200
                        Array(1452106 ,50, 1, 1),  //200
                        Array(1462091 ,50, 1, 1),  //200
                        Array(1492079 ,50, 1, 1),  //200
                        Array(1482079 ,50, 1, 1),  //200
                        Array(1382099 ,50, 1, 1),  //200
                        Array(1472117 ,50, 1, 1),  //200
                        Array(1302147 ,50, 1, 1),  //200
                        Array(1432303 ,50, 1, 1),  //新枪
			Array(1402307 ,200, 1, 1),  //天锁斩月 
			Array(1402331 ,200, 1, 1),  //黑刀
			Array(1402330 ,200, 1, 1),  //黑刀
			Array(1402327 ,200, 1, 1),  //金の剑  双
			Array(1402325 ,200, 1, 1),  //失败の剑 
			Array(1402321 ,200, 1, 1),  //黑色恶魔
			Array(1402309 ,200, 1, 1),  //血雷の剑 双
			Array(1402308 ,200, 1, 1),  //泪雪の剑
			Array(1432182,100, 1, 1), //红色枪
			//Array(1442088,200, 1, 1), //紫色矛
			Array(1442029,200, 1, 1), //紫色矛
			Array(1382226,100, 1, 1), //红色长杖  
			Array(1452220,200, 1, 1), //红色弓                           
			Array(1462208,100, 1, 1), //红色之弩
			Array(1332242,100, 1, 1), //红色切割者
			Array(1472230,100, 1, 1), //红色拳套 
			Array(1482183,100, 1, 1), //红色拳甲  
			Array(1492194,100, 1, 1), //红色短枪   
			
			Array(1402037,200, 1, 1), //龙背刀
			Array(1332114,500, 1, 1), //黄金枫叶短刀
			//Array(1322084,500, 1, 1), //黄金枫叶锤子
			//Array(1312056,500, 1, 1), //黄金枫叶斧子
			//Array(1422057,500, 1, 1), //黄金枫叶巨锤
			//Array(1442104,500, 1, 1), //黄金枫叶开山斧
			Array(1432075,500, 1, 1), //黄金枫叶枪
			Array(1402085,500, 1, 1), //黄金枫叶双手剑
			Array(1372071,500, 1, 1), //黄金枫叶短杖
			Array(1462085,500, 1, 1), //黄金枫叶弩
			Array(1452100,500, 1, 1), //黄金枫叶弓
			Array(1472111,500, 1, 1), //黄金枫叶拳套
			Array(1482073,500, 1, 1), //黄金枫叶指节
			Array(1492073,500, 1, 1), //黄金枫叶短枪
			//Array(4000463,500, 1, 1),  //货币
			//Array(4001028,500, 1, 1),  //血书
			Array(4031217,500, 1, 1),  //黄金钥匙
			Array(1402047,500, 1, 1),//重生玄冥剑
			Array(1432049,500, 1, 1), //重生显圣枪
			Array(1442067,500, 1, 1), //重生神光戟
			Array(1452059,500, 1, 1), //重生惊电弓
			Array(1462051,500, 1, 1), //重生冥雷弩
			Array(1472071,500, 1, 1), //重生大悲赋
			Array(1482024,500, 1, 1), //重生孔雀翎
			Array(1492025,500, 1, 1), //重生凤凰铳
			Array(1302086,500, 1, 1), //重生破甲剑
			Array(1332075,500, 1, 1), //重生狂鲨锯
			Array(1332076,500, 1, 1), //重生断首刃
			Array(1382059,500,1, 1)//重生蝶翼杖
			
			/*
			
        这里很重要  这里是Array的结束段落 记住最后一排的 Array函数后面是没有逗号的  这个逗号我截图在你QQ上去 
			*/

);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("再见得把油。");
            cm.dispose();
        }
        status--;
    }
		if (status == 0) {//这里就是脚本开始的地方
			if (cm.getPlayer().getNX() >= 2000) {//判断充值币是否为10个 如果有 就进行下面一段
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendYesNo("消耗#b2000#k点券抽取以下物品!\r\n 以下是全部物品:" + str1);
			} else {//如果没有10个充值币就进行下面一段
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendOk("消耗#b2000#k点券抽取以下物品!\r\n\r\n抽奖所有奖品如下:" + str1);
				cm.dispose();
			}//第一次判断结束的标志
		} else if (status == 1){	
        var chance = Math.floor(Math.random() * 500);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = cm.gainGachaponItem(itemId, quantity, "怀旧冒险岛抽奖", notice);
            if (item != -1) {
				cm.gainNX(-2000);
				//cm.setmoneyb(-20);//中奖之后扣除充值币的函数
				if (itemId==1442029){
					cm.gainItem(1442029,-1); //优秀玩家勋章
				    cm.gainItem(1442029,0,0,0,0,0,0,175,0,0,0,0,0,0,0); //优秀玩家勋章
				}
                cm.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
            } else {
                cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("今天的运气可真差，什么都没有拿到。\r\n(获得了安慰奖：白雪人法老的蓝宝石。)");
            cm.gainNX(-1000);//没有中奖扣除的充值币函数
            cm.gainItem(4001322, 1);
            cm.safeDispose();
        }
    }
}
