// https://www.free-api.com/doc/518
import got from 'got'

export async function getWeather(city) {
  let cityId
  for (let i = 0; i < cities.length; i++) {
    if (cities[i].countyname === city) {
      cityId = cities[i].areaid
    }
  }
  if (!cityId) {
    return '未找到该城市'
  }
  const res = await got.get(`http://aider.meizu.com/app/weather/listWeather?cityIds=101240101`).catch(err => {
    console.error(err)
    return '获取天气信息失败'
  })
  const data = JSON.parse(res.body)
  return {
    prompt: `查询到${city}的天气信息` ,
    data: data.value[0].realtime
  }
}

var cities = [
  {
    "areaid": 101010100,
    "countyname": "北京"
  },
  {
    "areaid": 101010200,
    "countyname": "海淀"
  },
  {
    "areaid": 101010300,
    "countyname": "朝阳"
  },
  {
    "areaid": 101010400,
    "countyname": "顺义"
  },
  {
    "areaid": 101010500,
    "countyname": "怀柔"
  },
  {
    "areaid": 101010600,
    "countyname": "通州"
  },
  {
    "areaid": 101010700,
    "countyname": "昌平"
  },
  {
    "areaid": 101010800,
    "countyname": "延庆"
  },
  {
    "areaid": 101010900,
    "countyname": "丰台"
  },
  {
    "areaid": 101011000,
    "countyname": "石景山"
  },
  {
    "areaid": 101011100,
    "countyname": "大兴"
  },
  {
    "areaid": 101011200,
    "countyname": "房山"
  },
  {
    "areaid": 101011300,
    "countyname": "密云"
  },
  {
    "areaid": 101011400,
    "countyname": "门头沟"
  },
  {
    "areaid": 101011500,
    "countyname": "平谷"
  },
  {
    "areaid": 101020100,
    "countyname": "上海"
  },
  {
    "areaid": 101020200,
    "countyname": "闵行"
  },
  {
    "areaid": 101020300,
    "countyname": "宝山"
  },
  {
    "areaid": 101020500,
    "countyname": "嘉定"
  },
  {
    "areaid": 101020600,
    "countyname": "浦东南汇"
  },
  {
    "areaid": 101020700,
    "countyname": "金山"
  },
  {
    "areaid": 101020800,
    "countyname": "青浦"
  },
  {
    "areaid": 101020900,
    "countyname": "松江"
  },
  {
    "areaid": 101021000,
    "countyname": "奉贤"
  },
  {
    "areaid": 101021100,
    "countyname": "崇明"
  },
  {
    "areaid": 101021200,
    "countyname": "徐家汇"
  },
  {
    "areaid": 101021300,
    "countyname": "浦东"
  },
  {
    "areaid": 101030100,
    "countyname": "天津"
  },
  {
    "areaid": 101030200,
    "countyname": "武清"
  },
  {
    "areaid": 101030300,
    "countyname": "宝坻"
  },
  {
    "areaid": 101030400,
    "countyname": "东丽"
  },
  {
    "areaid": 101030500,
    "countyname": "西青"
  },
  {
    "areaid": 101030600,
    "countyname": "北辰"
  },
  {
    "areaid": 101030700,
    "countyname": "宁河"
  },
  {
    "areaid": 101030800,
    "countyname": "汉沽"
  },
  {
    "areaid": 101030900,
    "countyname": "静海"
  },
  {
    "areaid": 101031000,
    "countyname": "津南"
  },
  {
    "areaid": 101031100,
    "countyname": "塘沽"
  },
  {
    "areaid": 101031200,
    "countyname": "大港"
  },
  {
    "areaid": 101031400,
    "countyname": "蓟县"
  },
  {
    "areaid": 101040100,
    "countyname": "重庆"
  },
  {
    "areaid": 101040200,
    "countyname": "永川"
  },
  {
    "areaid": 101040300,
    "countyname": "合川"
  },
  {
    "areaid": 101040400,
    "countyname": "南川"
  },
  {
    "areaid": 101040500,
    "countyname": "江津"
  },
  {
    "areaid": 101040600,
    "countyname": "万盛"
  },
  {
    "areaid": 101040700,
    "countyname": "渝北"
  },
  {
    "areaid": 101040800,
    "countyname": "北碚"
  },
  {
    "areaid": 101040900,
    "countyname": "巴南"
  },
  {
    "areaid": 101041000,
    "countyname": "长寿"
  },
  {
    "areaid": 101041100,
    "countyname": "黔江"
  },
  {
    "areaid": 101041300,
    "countyname": "万州"
  },
  {
    "areaid": 101041400,
    "countyname": "涪陵"
  },
  {
    "areaid": 101041500,
    "countyname": "开县"
  },
  {
    "areaid": 101041600,
    "countyname": "城口"
  },
  {
    "areaid": 101041700,
    "countyname": "云阳"
  },
  {
    "areaid": 101041800,
    "countyname": "巫溪"
  },
  {
    "areaid": 101041900,
    "countyname": "奉节"
  },
  {
    "areaid": 101042000,
    "countyname": "巫山"
  },
  {
    "areaid": 101042100,
    "countyname": "潼南"
  },
  {
    "areaid": 101042200,
    "countyname": "垫江"
  },
  {
    "areaid": 101042300,
    "countyname": "梁平"
  },
  {
    "areaid": 101042400,
    "countyname": "忠县"
  },
  {
    "areaid": 101042500,
    "countyname": "石柱"
  },
  {
    "areaid": 101042600,
    "countyname": "大足"
  },
  {
    "areaid": 101042700,
    "countyname": "荣昌"
  },
  {
    "areaid": 101042800,
    "countyname": "铜梁"
  },
  {
    "areaid": 101042900,
    "countyname": "璧山"
  },
  {
    "areaid": 101043000,
    "countyname": "丰都"
  },
  {
    "areaid": 101043100,
    "countyname": "武隆"
  },
  {
    "areaid": 101043200,
    "countyname": "彭水"
  },
  {
    "areaid": 101043300,
    "countyname": "綦江"
  },
  {
    "areaid": 101043400,
    "countyname": "酉阳"
  },
  {
    "areaid": 101043600,
    "countyname": "秀山"
  },
  {
    "areaid": 101050101,
    "countyname": "哈尔滨"
  },
  {
    "areaid": 101050102,
    "countyname": "双城"
  },
  {
    "areaid": 101050103,
    "countyname": "呼兰"
  },
  {
    "areaid": 101050104,
    "countyname": "阿城"
  },
  {
    "areaid": 101050105,
    "countyname": "宾县"
  },
  {
    "areaid": 101050106,
    "countyname": "依兰"
  },
  {
    "areaid": 101050107,
    "countyname": "巴彦"
  },
  {
    "areaid": 101050108,
    "countyname": "通河"
  },
  {
    "areaid": 101050109,
    "countyname": "方正"
  },
  {
    "areaid": 101050110,
    "countyname": "延寿"
  },
  {
    "areaid": 101050111,
    "countyname": "尚志"
  },
  {
    "areaid": 101050112,
    "countyname": "五常"
  },
  {
    "areaid": 101050113,
    "countyname": "木兰"
  },
  {
    "areaid": 101050201,
    "countyname": "齐齐哈尔"
  },
  {
    "areaid": 101050202,
    "countyname": "讷河"
  },
  {
    "areaid": 101050203,
    "countyname": "龙江"
  },
  {
    "areaid": 101050204,
    "countyname": "甘南"
  },
  {
    "areaid": 101050205,
    "countyname": "富裕"
  },
  {
    "areaid": 101050206,
    "countyname": "依安"
  },
  {
    "areaid": 101050207,
    "countyname": "拜泉"
  },
  {
    "areaid": 101050208,
    "countyname": "克山"
  },
  {
    "areaid": 101050209,
    "countyname": "克东"
  },
  {
    "areaid": 101050210,
    "countyname": "泰来"
  },
  {
    "areaid": 101050301,
    "countyname": "牡丹江"
  },
  {
    "areaid": 101050302,
    "countyname": "海林"
  },
  {
    "areaid": 101050303,
    "countyname": "穆棱"
  },
  {
    "areaid": 101050304,
    "countyname": "林口"
  },
  {
    "areaid": 101050305,
    "countyname": "绥芬河"
  },
  {
    "areaid": 101050306,
    "countyname": "宁安"
  },
  {
    "areaid": 101050307,
    "countyname": "东宁"
  },
  {
    "areaid": 101050401,
    "countyname": "佳木斯"
  },
  {
    "areaid": 101050402,
    "countyname": "汤原"
  },
  {
    "areaid": 101050403,
    "countyname": "抚远"
  },
  {
    "areaid": 101050404,
    "countyname": "桦川"
  },
  {
    "areaid": 101050405,
    "countyname": "桦南"
  },
  {
    "areaid": 101050406,
    "countyname": "同江"
  },
  {
    "areaid": 101050407,
    "countyname": "富锦"
  },
  {
    "areaid": 101050501,
    "countyname": "绥化"
  },
  {
    "areaid": 101050502,
    "countyname": "肇东"
  },
  {
    "areaid": 101050503,
    "countyname": "安达"
  },
  {
    "areaid": 101050504,
    "countyname": "海伦"
  },
  {
    "areaid": 101050505,
    "countyname": "明水"
  },
  {
    "areaid": 101050506,
    "countyname": "望奎"
  },
  {
    "areaid": 101050507,
    "countyname": "兰西"
  },
  {
    "areaid": 101050508,
    "countyname": "青冈"
  },
  {
    "areaid": 101050509,
    "countyname": "庆安"
  },
  {
    "areaid": 101050510,
    "countyname": "绥棱"
  },
  {
    "areaid": 101050601,
    "countyname": "黑河"
  },
  {
    "areaid": 101050602,
    "countyname": "嫩江"
  },
  {
    "areaid": 101050603,
    "countyname": "孙吴"
  },
  {
    "areaid": 101050604,
    "countyname": "逊克"
  },
  {
    "areaid": 101050605,
    "countyname": "五大连池"
  },
  {
    "areaid": 101050606,
    "countyname": "北安"
  },
  {
    "areaid": 101050701,
    "countyname": "大兴安岭"
  },
  {
    "areaid": 101050702,
    "countyname": "塔河"
  },
  {
    "areaid": 101050703,
    "countyname": "漠河"
  },
  {
    "areaid": 101050704,
    "countyname": "呼玛"
  },
  {
    "areaid": 101050705,
    "countyname": "呼中"
  },
  {
    "areaid": 101050706,
    "countyname": "新林"
  },
  {
    "areaid": 101050708,
    "countyname": "加格达奇"
  },
  {
    "areaid": 101050801,
    "countyname": "伊春"
  },
  {
    "areaid": 101050802,
    "countyname": "乌伊岭"
  },
  {
    "areaid": 101050803,
    "countyname": "五营"
  },
  {
    "areaid": 101050804,
    "countyname": "铁力"
  },
  {
    "areaid": 101050805,
    "countyname": "嘉荫"
  },
  {
    "areaid": 101050901,
    "countyname": "大庆"
  },
  {
    "areaid": 101050902,
    "countyname": "林甸"
  },
  {
    "areaid": 101050903,
    "countyname": "肇州"
  },
  {
    "areaid": 101050904,
    "countyname": "肇源"
  },
  {
    "areaid": 101050905,
    "countyname": "杜尔伯特"
  },
  {
    "areaid": 101051002,
    "countyname": "七台河"
  },
  {
    "areaid": 101051003,
    "countyname": "勃利"
  },
  {
    "areaid": 101051101,
    "countyname": "鸡西"
  },
  {
    "areaid": 101051102,
    "countyname": "虎林"
  },
  {
    "areaid": 101051103,
    "countyname": "密山"
  },
  {
    "areaid": 101051104,
    "countyname": "鸡东"
  },
  {
    "areaid": 101051201,
    "countyname": "鹤岗"
  },
  {
    "areaid": 101051202,
    "countyname": "绥滨"
  },
  {
    "areaid": 101051203,
    "countyname": "萝北"
  },
  {
    "areaid": 101051301,
    "countyname": "双鸭山"
  },
  {
    "areaid": 101051302,
    "countyname": "集贤"
  },
  {
    "areaid": 101051303,
    "countyname": "宝清"
  },
  {
    "areaid": 101051304,
    "countyname": "饶河"
  },
  {
    "areaid": 101051305,
    "countyname": "友谊"
  },
  {
    "areaid": 101060101,
    "countyname": "长春"
  },
  {
    "areaid": 101060102,
    "countyname": "农安"
  },
  {
    "areaid": 101060103,
    "countyname": "德惠"
  },
  {
    "areaid": 101060104,
    "countyname": "九台"
  },
  {
    "areaid": 101060105,
    "countyname": "榆树"
  },
  {
    "areaid": 101060106,
    "countyname": "双阳"
  },
  {
    "areaid": 101060201,
    "countyname": "吉林"
  },
  {
    "areaid": 101060202,
    "countyname": "舒兰"
  },
  {
    "areaid": 101060203,
    "countyname": "永吉"
  },
  {
    "areaid": 101060204,
    "countyname": "蛟河"
  },
  {
    "areaid": 101060205,
    "countyname": "磐石"
  },
  {
    "areaid": 101060206,
    "countyname": "桦甸"
  },
  {
    "areaid": 101060301,
    "countyname": "延吉"
  },
  {
    "areaid": 101060302,
    "countyname": "敦化"
  },
  {
    "areaid": 101060303,
    "countyname": "安图"
  },
  {
    "areaid": 101060304,
    "countyname": "汪清"
  },
  {
    "areaid": 101060305,
    "countyname": "和龙"
  },
  {
    "areaid": 101060307,
    "countyname": "龙井"
  },
  {
    "areaid": 101060308,
    "countyname": "珲春"
  },
  {
    "areaid": 101060309,
    "countyname": "图们"
  },
  {
    "areaid": 101060401,
    "countyname": "四平"
  },
  {
    "areaid": 101060402,
    "countyname": "双辽"
  },
  {
    "areaid": 101060403,
    "countyname": "梨树"
  },
  {
    "areaid": 101060404,
    "countyname": "公主岭"
  },
  {
    "areaid": 101060405,
    "countyname": "伊通"
  },
  {
    "areaid": 101060501,
    "countyname": "通化"
  },
  {
    "areaid": 101060502,
    "countyname": "梅河口"
  },
  {
    "areaid": 101060503,
    "countyname": "柳河"
  },
  {
    "areaid": 101060504,
    "countyname": "辉南"
  },
  {
    "areaid": 101060505,
    "countyname": "集安"
  },
  {
    "areaid": 101060506,
    "countyname": "通化县"
  },
  {
    "areaid": 101060601,
    "countyname": "白城"
  },
  {
    "areaid": 101060602,
    "countyname": "洮南"
  },
  {
    "areaid": 101060603,
    "countyname": "大安"
  },
  {
    "areaid": 101060604,
    "countyname": "镇赉"
  },
  {
    "areaid": 101060605,
    "countyname": "通榆"
  },
  {
    "areaid": 101060701,
    "countyname": "辽源"
  },
  {
    "areaid": 101060702,
    "countyname": "东丰"
  },
  {
    "areaid": 101060703,
    "countyname": "东辽"
  },
  {
    "areaid": 101060801,
    "countyname": "松原"
  },
  {
    "areaid": 101060802,
    "countyname": "乾安"
  },
  {
    "areaid": 101060803,
    "countyname": "前郭"
  },
  {
    "areaid": 101060804,
    "countyname": "长岭"
  },
  {
    "areaid": 101060805,
    "countyname": "扶余"
  },
  {
    "areaid": 101060901,
    "countyname": "白山"
  },
  {
    "areaid": 101060902,
    "countyname": "靖宇"
  },
  {
    "areaid": 101060903,
    "countyname": "临江"
  },
  {
    "areaid": 101060904,
    "countyname": "东岗"
  },
  {
    "areaid": 101060905,
    "countyname": "长白"
  },
  {
    "areaid": 101060906,
    "countyname": "抚松"
  },
  {
    "areaid": 101060907,
    "countyname": "江源"
  },
  {
    "areaid": 101070101,
    "countyname": "沈阳"
  },
  {
    "areaid": 101070103,
    "countyname": "辽中"
  },
  {
    "areaid": 101070104,
    "countyname": "康平"
  },
  {
    "areaid": 101070105,
    "countyname": "法库"
  },
  {
    "areaid": 101070106,
    "countyname": "新民"
  },
  {
    "areaid": 101070201,
    "countyname": "大连"
  },
  {
    "areaid": 101070202,
    "countyname": "瓦房店"
  },
  {
    "areaid": 101070203,
    "countyname": "金州"
  },
  {
    "areaid": 101070204,
    "countyname": "普兰店"
  },
  {
    "areaid": 101070205,
    "countyname": "旅顺"
  },
  {
    "areaid": 101070206,
    "countyname": "长海"
  },
  {
    "areaid": 101070207,
    "countyname": "庄河"
  },
  {
    "areaid": 101070301,
    "countyname": "鞍山"
  },
  {
    "areaid": 101070302,
    "countyname": "台安"
  },
  {
    "areaid": 101070303,
    "countyname": "岫岩"
  },
  {
    "areaid": 101070304,
    "countyname": "海城"
  },
  {
    "areaid": 101070401,
    "countyname": "抚顺"
  },
  {
    "areaid": 101070402,
    "countyname": "新宾"
  },
  {
    "areaid": 101070403,
    "countyname": "清原"
  },
  {
    "areaid": 101070404,
    "countyname": "章党"
  },
  {
    "areaid": 101070501,
    "countyname": "本溪"
  },
  {
    "areaid": 101070502,
    "countyname": "本溪县"
  },
  {
    "areaid": 101070504,
    "countyname": "桓仁"
  },
  {
    "areaid": 101070601,
    "countyname": "丹东"
  },
  {
    "areaid": 101070602,
    "countyname": "凤城"
  },
  {
    "areaid": 101070603,
    "countyname": "宽甸"
  },
  {
    "areaid": 101070604,
    "countyname": "东港"
  },
  {
    "areaid": 101070701,
    "countyname": "锦州"
  },
  {
    "areaid": 101070702,
    "countyname": "凌海"
  },
  {
    "areaid": 101070704,
    "countyname": "义县"
  },
  {
    "areaid": 101070705,
    "countyname": "黑山"
  },
  {
    "areaid": 101070706,
    "countyname": "北镇"
  },
  {
    "areaid": 101070801,
    "countyname": "营口"
  },
  {
    "areaid": 101070802,
    "countyname": "大石桥"
  },
  {
    "areaid": 101070803,
    "countyname": "盖州"
  },
  {
    "areaid": 101070901,
    "countyname": "阜新"
  },
  {
    "areaid": 101070902,
    "countyname": "彰武"
  },
  {
    "areaid": 101071001,
    "countyname": "辽阳"
  },
  {
    "areaid": 101071002,
    "countyname": "辽阳县"
  },
  {
    "areaid": 101071003,
    "countyname": "灯塔"
  },
  {
    "areaid": 101071004,
    "countyname": "弓长岭"
  },
  {
    "areaid": 101071101,
    "countyname": "铁岭"
  },
  {
    "areaid": 101071102,
    "countyname": "开原"
  },
  {
    "areaid": 101071103,
    "countyname": "昌图"
  },
  {
    "areaid": 101071104,
    "countyname": "西丰"
  },
  {
    "areaid": 101071105,
    "countyname": "调兵山"
  },
  {
    "areaid": 101071201,
    "countyname": "朝阳"
  },
  {
    "areaid": 101071203,
    "countyname": "凌源"
  },
  {
    "areaid": 101071204,
    "countyname": "喀左"
  },
  {
    "areaid": 101071205,
    "countyname": "北票"
  },
  {
    "areaid": 101071207,
    "countyname": "建平县"
  },
  {
    "areaid": 101071301,
    "countyname": "盘锦"
  },
  {
    "areaid": 101071302,
    "countyname": "大洼"
  },
  {
    "areaid": 101071303,
    "countyname": "盘山"
  },
  {
    "areaid": 101071401,
    "countyname": "葫芦岛"
  },
  {
    "areaid": 101071402,
    "countyname": "建昌"
  },
  {
    "areaid": 101071403,
    "countyname": "绥中"
  },
  {
    "areaid": 101071404,
    "countyname": "兴城"
  },
  {
    "areaid": 101080101,
    "countyname": "呼和浩特"
  },
  {
    "areaid": 101080102,
    "countyname": "土左旗"
  },
  {
    "areaid": 101080103,
    "countyname": "托县"
  },
  {
    "areaid": 101080104,
    "countyname": "和林"
  },
  {
    "areaid": 101080105,
    "countyname": "清水河"
  },
  {
    "areaid": 101080106,
    "countyname": "呼市郊区"
  },
  {
    "areaid": 101080107,
    "countyname": "武川"
  },
  {
    "areaid": 101080201,
    "countyname": "包头"
  },
  {
    "areaid": 101080202,
    "countyname": "白云鄂博"
  },
  {
    "areaid": 101080203,
    "countyname": "满都拉"
  },
  {
    "areaid": 101080204,
    "countyname": "土右旗"
  },
  {
    "areaid": 101080205,
    "countyname": "固阳"
  },
  {
    "areaid": 101080206,
    "countyname": "达茂旗"
  },
  {
    "areaid": 101080207,
    "countyname": "希拉穆仁"
  },
  {
    "areaid": 101080301,
    "countyname": "乌海"
  },
  {
    "areaid": 101080401,
    "countyname": "集宁"
  },
  {
    "areaid": 101080402,
    "countyname": "卓资"
  },
  {
    "areaid": 101080403,
    "countyname": "化德"
  },
  {
    "areaid": 101080404,
    "countyname": "商都"
  },
  {
    "areaid": 101080406,
    "countyname": "兴和"
  },
  {
    "areaid": 101080407,
    "countyname": "凉城"
  },
  {
    "areaid": 101080408,
    "countyname": "察右前旗"
  },
  {
    "areaid": 101080409,
    "countyname": "察右中旗"
  },
  {
    "areaid": 101080410,
    "countyname": "察右后旗"
  },
  {
    "areaid": 101080411,
    "countyname": "四子王旗"
  },
  {
    "areaid": 101080412,
    "countyname": "丰镇"
  },
  {
    "areaid": 101080501,
    "countyname": "通辽"
  },
  {
    "areaid": 101080502,
    "countyname": "舍伯吐"
  },
  {
    "areaid": 101080503,
    "countyname": "科左中旗"
  },
  {
    "areaid": 101080504,
    "countyname": "科左后旗"
  },
  {
    "areaid": 101080505,
    "countyname": "青龙山"
  },
  {
    "areaid": 101080506,
    "countyname": "开鲁"
  },
  {
    "areaid": 101080507,
    "countyname": "库伦"
  },
  {
    "areaid": 101080508,
    "countyname": "奈曼"
  },
  {
    "areaid": 101080509,
    "countyname": "扎鲁特"
  },
  {
    "areaid": 101080510,
    "countyname": "高力板"
  },
  {
    "areaid": 101080511,
    "countyname": "巴雅尔吐胡硕"
  },
  {
    "areaid": 101080601,
    "countyname": "赤峰"
  },
  {
    "areaid": 101080603,
    "countyname": "阿鲁旗"
  },
  {
    "areaid": 101080604,
    "countyname": "浩尔吐"
  },
  {
    "areaid": 101080605,
    "countyname": "巴林左旗"
  },
  {
    "areaid": 101080606,
    "countyname": "巴林右旗"
  },
  {
    "areaid": 101080607,
    "countyname": "林西"
  },
  {
    "areaid": 101080608,
    "countyname": "克什克腾"
  },
  {
    "areaid": 101080609,
    "countyname": "翁牛特"
  },
  {
    "areaid": 101080610,
    "countyname": "岗子"
  },
  {
    "areaid": 101080611,
    "countyname": "喀喇沁"
  },
  {
    "areaid": 101080612,
    "countyname": "八里罕"
  },
  {
    "areaid": 101080613,
    "countyname": "宁城"
  },
  {
    "areaid": 101080614,
    "countyname": "敖汉"
  },
  {
    "areaid": 101080615,
    "countyname": "宝国吐"
  },
  {
    "areaid": 101080701,
    "countyname": "鄂尔多斯"
  },
  {
    "areaid": 101080703,
    "countyname": "达拉特"
  },
  {
    "areaid": 101080704,
    "countyname": "准格尔"
  },
  {
    "areaid": 101080705,
    "countyname": "鄂前旗"
  },
  {
    "areaid": 101080706,
    "countyname": "河南"
  },
  {
    "areaid": 101080707,
    "countyname": "伊克乌素"
  },
  {
    "areaid": 101080708,
    "countyname": "鄂托克"
  },
  {
    "areaid": 101080709,
    "countyname": "杭锦旗"
  },
  {
    "areaid": 101080710,
    "countyname": "乌审旗"
  },
  {
    "areaid": 101080711,
    "countyname": "伊金霍洛"
  },
  {
    "areaid": 101080712,
    "countyname": "乌审召"
  },
  {
    "areaid": 101080713,
    "countyname": "东胜"
  },
  {
    "areaid": 101080801,
    "countyname": "临河"
  },
  {
    "areaid": 101080802,
    "countyname": "五原"
  },
  {
    "areaid": 101080803,
    "countyname": "磴口"
  },
  {
    "areaid": 101080804,
    "countyname": "乌前旗"
  },
  {
    "areaid": 101080805,
    "countyname": "大佘太"
  },
  {
    "areaid": 101080806,
    "countyname": "乌中旗"
  },
  {
    "areaid": 101080807,
    "countyname": "乌后旗"
  },
  {
    "areaid": 101080808,
    "countyname": "海力素"
  },
  {
    "areaid": 101080809,
    "countyname": "那仁宝力格"
  },
  {
    "areaid": 101080810,
    "countyname": "杭锦后旗"
  },
  {
    "areaid": 101080901,
    "countyname": "锡林浩特"
  },
  {
    "areaid": 101080903,
    "countyname": "二连浩特"
  },
  {
    "areaid": 101080904,
    "countyname": "阿巴嘎"
  },
  {
    "areaid": 101080906,
    "countyname": "苏左旗"
  },
  {
    "areaid": 101080907,
    "countyname": "苏右旗"
  },
  {
    "areaid": 101080908,
    "countyname": "朱日和"
  },
  {
    "areaid": 101080909,
    "countyname": "东乌旗"
  },
  {
    "areaid": 101080910,
    "countyname": "西乌旗"
  },
  {
    "areaid": 101080911,
    "countyname": "太仆寺"
  },
  {
    "areaid": 101080912,
    "countyname": "镶黄旗"
  },
  {
    "areaid": 101080913,
    "countyname": "正镶白旗"
  },
  {
    "areaid": 101080914,
    "countyname": "正蓝旗"
  },
  {
    "areaid": 101080915,
    "countyname": "多伦"
  },
  {
    "areaid": 101080916,
    "countyname": "博克图"
  },
  {
    "areaid": 101080917,
    "countyname": "乌拉盖"
  },
  {
    "areaid": 101081001,
    "countyname": "海拉尔"
  },
  {
    "areaid": 101081002,
    "countyname": "小二沟"
  },
  {
    "areaid": 101081003,
    "countyname": "阿荣旗"
  },
  {
    "areaid": 101081004,
    "countyname": "莫力达瓦"
  },
  {
    "areaid": 101081005,
    "countyname": "鄂伦春旗"
  },
  {
    "areaid": 101081006,
    "countyname": "鄂温克旗"
  },
  {
    "areaid": 101081007,
    "countyname": "陈旗"
  },
  {
    "areaid": 101081008,
    "countyname": "新左旗"
  },
  {
    "areaid": 101081009,
    "countyname": "新右旗"
  },
  {
    "areaid": 101081010,
    "countyname": "满洲里"
  },
  {
    "areaid": 101081011,
    "countyname": "牙克石"
  },
  {
    "areaid": 101081012,
    "countyname": "扎兰屯"
  },
  {
    "areaid": 101081014,
    "countyname": "额尔古纳"
  },
  {
    "areaid": 101081015,
    "countyname": "根河"
  },
  {
    "areaid": 101081016,
    "countyname": "图里河"
  },
  {
    "areaid": 101081101,
    "countyname": "乌兰浩特"
  },
  {
    "areaid": 101081102,
    "countyname": "阿尔山"
  },
  {
    "areaid": 101081103,
    "countyname": "科右中旗"
  },
  {
    "areaid": 101081104,
    "countyname": "胡尔勒"
  },
  {
    "areaid": 101081105,
    "countyname": "扎赉特"
  },
  {
    "areaid": 101081106,
    "countyname": "索伦"
  },
  {
    "areaid": 101081107,
    "countyname": "突泉"
  },
  {
    "areaid": 101081108,
    "countyname": "霍林郭勒"
  },
  {
    "areaid": 101081109,
    "countyname": "科右前旗"
  },
  {
    "areaid": 101081201,
    "countyname": "阿左旗"
  },
  {
    "areaid": 101081202,
    "countyname": "阿右旗"
  },
  {
    "areaid": 101081203,
    "countyname": "额济纳"
  },
  {
    "areaid": 101081204,
    "countyname": "拐子湖"
  },
  {
    "areaid": 101081205,
    "countyname": "吉兰太"
  },
  {
    "areaid": 101081206,
    "countyname": "锡林高勒"
  },
  {
    "areaid": 101081207,
    "countyname": "头道湖"
  },
  {
    "areaid": 101081208,
    "countyname": "中泉子"
  },
  {
    "areaid": 101081209,
    "countyname": "诺尔公"
  },
  {
    "areaid": 101081210,
    "countyname": "雅布赖"
  },
  {
    "areaid": 101081211,
    "countyname": "乌斯泰"
  },
  {
    "areaid": 101081212,
    "countyname": "孪井滩"
  },
  {
    "areaid": 101090101,
    "countyname": "石家庄"
  },
  {
    "areaid": 101090102,
    "countyname": "井陉"
  },
  {
    "areaid": 101090103,
    "countyname": "正定"
  },
  {
    "areaid": 101090104,
    "countyname": "栾城"
  },
  {
    "areaid": 101090105,
    "countyname": "行唐"
  },
  {
    "areaid": 101090106,
    "countyname": "灵寿"
  },
  {
    "areaid": 101090107,
    "countyname": "高邑"
  },
  {
    "areaid": 101090108,
    "countyname": "深泽"
  },
  {
    "areaid": 101090109,
    "countyname": "赞皇"
  },
  {
    "areaid": 101090110,
    "countyname": "无极"
  },
  {
    "areaid": 101090111,
    "countyname": "平山"
  },
  {
    "areaid": 101090112,
    "countyname": "元氏"
  },
  {
    "areaid": 101090113,
    "countyname": "赵县"
  },
  {
    "areaid": 101090114,
    "countyname": "辛集"
  },
  {
    "areaid": 101090115,
    "countyname": "藁城"
  },
  {
    "areaid": 101090116,
    "countyname": "晋州"
  },
  {
    "areaid": 101090117,
    "countyname": "新乐"
  },
  {
    "areaid": 101090118,
    "countyname": "鹿泉"
  },
  {
    "areaid": 101090201,
    "countyname": "保定"
  },
  {
    "areaid": 101090202,
    "countyname": "满城"
  },
  {
    "areaid": 101090203,
    "countyname": "阜平"
  },
  {
    "areaid": 101090204,
    "countyname": "徐水"
  },
  {
    "areaid": 101090205,
    "countyname": "唐县"
  },
  {
    "areaid": 101090206,
    "countyname": "高阳"
  },
  {
    "areaid": 101090207,
    "countyname": "容城"
  },
  {
    "areaid": 101090209,
    "countyname": "涞源"
  },
  {
    "areaid": 101090210,
    "countyname": "望都"
  },
  {
    "areaid": 101090211,
    "countyname": "安新"
  },
  {
    "areaid": 101090212,
    "countyname": "易县"
  },
  {
    "areaid": 101090214,
    "countyname": "曲阳"
  },
  {
    "areaid": 101090215,
    "countyname": "蠡县"
  },
  {
    "areaid": 101090216,
    "countyname": "顺平"
  },
  {
    "areaid": 101090217,
    "countyname": "雄县"
  },
  {
    "areaid": 101090218,
    "countyname": "涿州"
  },
  {
    "areaid": 101090219,
    "countyname": "定州"
  },
  {
    "areaid": 101090220,
    "countyname": "安国"
  },
  {
    "areaid": 101090221,
    "countyname": "高碑店"
  },
  {
    "areaid": 101090222,
    "countyname": "涞水"
  },
  {
    "areaid": 101090223,
    "countyname": "定兴"
  },
  {
    "areaid": 101090224,
    "countyname": "清苑"
  },
  {
    "areaid": 101090225,
    "countyname": "博野"
  },
  {
    "areaid": 101090301,
    "countyname": "张家口"
  },
  {
    "areaid": 101090302,
    "countyname": "宣化"
  },
  {
    "areaid": 101090303,
    "countyname": "张北"
  },
  {
    "areaid": 101090304,
    "countyname": "康保"
  },
  {
    "areaid": 101090305,
    "countyname": "沽源"
  },
  {
    "areaid": 101090306,
    "countyname": "尚义"
  },
  {
    "areaid": 101090307,
    "countyname": "蔚县"
  },
  {
    "areaid": 101090308,
    "countyname": "阳原"
  },
  {
    "areaid": 101090309,
    "countyname": "怀安"
  },
  {
    "areaid": 101090310,
    "countyname": "万全"
  },
  {
    "areaid": 101090311,
    "countyname": "怀来"
  },
  {
    "areaid": 101090312,
    "countyname": "涿鹿"
  },
  {
    "areaid": 101090313,
    "countyname": "赤城"
  },
  {
    "areaid": 101090314,
    "countyname": "崇礼"
  },
  {
    "areaid": 101090402,
    "countyname": "承德"
  },
  {
    "areaid": 101090403,
    "countyname": "承德县"
  },
  {
    "areaid": 101090404,
    "countyname": "兴隆"
  },
  {
    "areaid": 101090405,
    "countyname": "平泉"
  },
  {
    "areaid": 101090406,
    "countyname": "滦平"
  },
  {
    "areaid": 101090407,
    "countyname": "隆化"
  },
  {
    "areaid": 101090408,
    "countyname": "丰宁"
  },
  {
    "areaid": 101090409,
    "countyname": "宽城"
  },
  {
    "areaid": 101090410,
    "countyname": "围场"
  },
  {
    "areaid": 101090501,
    "countyname": "唐山"
  },
  {
    "areaid": 101090502,
    "countyname": "丰南"
  },
  {
    "areaid": 101090503,
    "countyname": "丰润"
  },
  {
    "areaid": 101090504,
    "countyname": "滦县"
  },
  {
    "areaid": 101090505,
    "countyname": "滦南"
  },
  {
    "areaid": 101090506,
    "countyname": "乐亭"
  },
  {
    "areaid": 101090507,
    "countyname": "迁西"
  },
  {
    "areaid": 101090508,
    "countyname": "玉田"
  },
  {
    "areaid": 101090509,
    "countyname": "唐海"
  },
  {
    "areaid": 101090510,
    "countyname": "遵化"
  },
  {
    "areaid": 101090511,
    "countyname": "迁安"
  },
  {
    "areaid": 101090512,
    "countyname": "曹妃甸"
  },
  {
    "areaid": 101090601,
    "countyname": "廊坊"
  },
  {
    "areaid": 101090602,
    "countyname": "固安"
  },
  {
    "areaid": 101090603,
    "countyname": "永清"
  },
  {
    "areaid": 101090604,
    "countyname": "香河"
  },
  {
    "areaid": 101090605,
    "countyname": "大城"
  },
  {
    "areaid": 101090606,
    "countyname": "文安"
  },
  {
    "areaid": 101090607,
    "countyname": "大厂"
  },
  {
    "areaid": 101090608,
    "countyname": "霸州"
  },
  {
    "areaid": 101090609,
    "countyname": "三河"
  },
  {
    "areaid": 101090701,
    "countyname": "沧州"
  },
  {
    "areaid": 101090702,
    "countyname": "青县"
  },
  {
    "areaid": 101090703,
    "countyname": "东光"
  },
  {
    "areaid": 101090704,
    "countyname": "海兴"
  },
  {
    "areaid": 101090705,
    "countyname": "盐山"
  },
  {
    "areaid": 101090706,
    "countyname": "肃宁"
  },
  {
    "areaid": 101090707,
    "countyname": "南皮"
  },
  {
    "areaid": 101090708,
    "countyname": "吴桥"
  },
  {
    "areaid": 101090709,
    "countyname": "献县"
  },
  {
    "areaid": 101090710,
    "countyname": "孟村"
  },
  {
    "areaid": 101090711,
    "countyname": "泊头"
  },
  {
    "areaid": 101090712,
    "countyname": "任丘"
  },
  {
    "areaid": 101090713,
    "countyname": "黄骅"
  },
  {
    "areaid": 101090714,
    "countyname": "河间"
  },
  {
    "areaid": 101090716,
    "countyname": "沧县"
  },
  {
    "areaid": 101090801,
    "countyname": "衡水"
  },
  {
    "areaid": 101090802,
    "countyname": "枣强"
  },
  {
    "areaid": 101090803,
    "countyname": "武邑"
  },
  {
    "areaid": 101090804,
    "countyname": "武强"
  },
  {
    "areaid": 101090805,
    "countyname": "饶阳"
  },
  {
    "areaid": 101090806,
    "countyname": "安平"
  },
  {
    "areaid": 101090807,
    "countyname": "故城"
  },
  {
    "areaid": 101090808,
    "countyname": "景县"
  },
  {
    "areaid": 101090809,
    "countyname": "阜城"
  },
  {
    "areaid": 101090810,
    "countyname": "冀州"
  },
  {
    "areaid": 101090811,
    "countyname": "深州"
  },
  {
    "areaid": 101090901,
    "countyname": "邢台"
  },
  {
    "areaid": 101090902,
    "countyname": "临城"
  },
  {
    "areaid": 101090904,
    "countyname": "内丘"
  },
  {
    "areaid": 101090905,
    "countyname": "柏乡"
  },
  {
    "areaid": 101090906,
    "countyname": "隆尧"
  },
  {
    "areaid": 101090907,
    "countyname": "南和"
  },
  {
    "areaid": 101090908,
    "countyname": "宁晋"
  },
  {
    "areaid": 101090909,
    "countyname": "巨鹿"
  },
  {
    "areaid": 101090910,
    "countyname": "新河"
  },
  {
    "areaid": 101090911,
    "countyname": "广宗"
  },
  {
    "areaid": 101090912,
    "countyname": "平乡"
  },
  {
    "areaid": 101090913,
    "countyname": "威县"
  },
  {
    "areaid": 101090914,
    "countyname": "清河"
  },
  {
    "areaid": 101090915,
    "countyname": "临西"
  },
  {
    "areaid": 101090916,
    "countyname": "南宫"
  },
  {
    "areaid": 101090917,
    "countyname": "沙河"
  },
  {
    "areaid": 101090918,
    "countyname": "任县"
  },
  {
    "areaid": 101091001,
    "countyname": "邯郸"
  },
  {
    "areaid": 101091002,
    "countyname": "峰峰"
  },
  {
    "areaid": 101091003,
    "countyname": "临漳"
  },
  {
    "areaid": 101091004,
    "countyname": "成安"
  },
  {
    "areaid": 101091005,
    "countyname": "大名"
  },
  {
    "areaid": 101091006,
    "countyname": "涉县"
  },
  {
    "areaid": 101091007,
    "countyname": "磁县"
  },
  {
    "areaid": 101091008,
    "countyname": "肥乡"
  },
  {
    "areaid": 101091009,
    "countyname": "永年"
  },
  {
    "areaid": 101091010,
    "countyname": "邱县"
  },
  {
    "areaid": 101091011,
    "countyname": "鸡泽"
  },
  {
    "areaid": 101091012,
    "countyname": "广平"
  },
  {
    "areaid": 101091013,
    "countyname": "馆陶"
  },
  {
    "areaid": 101091014,
    "countyname": "魏县"
  },
  {
    "areaid": 101091015,
    "countyname": "曲周"
  },
  {
    "areaid": 101091016,
    "countyname": "武安"
  },
  {
    "areaid": 101091101,
    "countyname": "秦皇岛"
  },
  {
    "areaid": 101091102,
    "countyname": "青龙"
  },
  {
    "areaid": 101091103,
    "countyname": "昌黎"
  },
  {
    "areaid": 101091104,
    "countyname": "抚宁"
  },
  {
    "areaid": 101091105,
    "countyname": "卢龙"
  },
  {
    "areaid": 101091106,
    "countyname": "北戴河"
  },
  {
    "areaid": 101100101,
    "countyname": "太原"
  },
  {
    "areaid": 101100102,
    "countyname": "清徐"
  },
  {
    "areaid": 101100103,
    "countyname": "阳曲"
  },
  {
    "areaid": 101100104,
    "countyname": "娄烦"
  },
  {
    "areaid": 101100105,
    "countyname": "古交"
  },
  {
    "areaid": 101100106,
    "countyname": "尖草坪区"
  },
  {
    "areaid": 101100107,
    "countyname": "小店区"
  },
  {
    "areaid": 101100201,
    "countyname": "大同"
  },
  {
    "areaid": 101100202,
    "countyname": "阳高"
  },
  {
    "areaid": 101100203,
    "countyname": "大同县"
  },
  {
    "areaid": 101100204,
    "countyname": "天镇"
  },
  {
    "areaid": 101100205,
    "countyname": "广灵"
  },
  {
    "areaid": 101100206,
    "countyname": "灵丘"
  },
  {
    "areaid": 101100207,
    "countyname": "浑源"
  },
  {
    "areaid": 101100208,
    "countyname": "左云"
  },
  {
    "areaid": 101100301,
    "countyname": "阳泉"
  },
  {
    "areaid": 101100302,
    "countyname": "盂县"
  },
  {
    "areaid": 101100303,
    "countyname": "平定"
  },
  {
    "areaid": 101100401,
    "countyname": "晋中"
  },
  {
    "areaid": 101100402,
    "countyname": "榆次"
  },
  {
    "areaid": 101100403,
    "countyname": "榆社"
  },
  {
    "areaid": 101100404,
    "countyname": "左权"
  },
  {
    "areaid": 101100405,
    "countyname": "和顺"
  },
  {
    "areaid": 101100406,
    "countyname": "昔阳"
  },
  {
    "areaid": 101100407,
    "countyname": "寿阳"
  },
  {
    "areaid": 101100408,
    "countyname": "太谷"
  },
  {
    "areaid": 101100409,
    "countyname": "祁县"
  },
  {
    "areaid": 101100410,
    "countyname": "平遥"
  },
  {
    "areaid": 101100411,
    "countyname": "灵石"
  },
  {
    "areaid": 101100412,
    "countyname": "介休"
  },
  {
    "areaid": 101100501,
    "countyname": "长治"
  },
  {
    "areaid": 101100502,
    "countyname": "黎城"
  },
  {
    "areaid": 101100503,
    "countyname": "屯留"
  },
  {
    "areaid": 101100504,
    "countyname": "潞城"
  },
  {
    "areaid": 101100505,
    "countyname": "襄垣"
  },
  {
    "areaid": 101100506,
    "countyname": "平顺"
  },
  {
    "areaid": 101100507,
    "countyname": "武乡"
  },
  {
    "areaid": 101100508,
    "countyname": "沁县"
  },
  {
    "areaid": 101100509,
    "countyname": "长子"
  },
  {
    "areaid": 101100510,
    "countyname": "沁源"
  },
  {
    "areaid": 101100511,
    "countyname": "壶关"
  },
  {
    "areaid": 101100601,
    "countyname": "晋城"
  },
  {
    "areaid": 101100602,
    "countyname": "沁水"
  },
  {
    "areaid": 101100603,
    "countyname": "阳城"
  },
  {
    "areaid": 101100604,
    "countyname": "陵川"
  },
  {
    "areaid": 101100605,
    "countyname": "高平"
  },
  {
    "areaid": 101100606,
    "countyname": "泽州"
  },
  {
    "areaid": 101100701,
    "countyname": "临汾"
  },
  {
    "areaid": 101100702,
    "countyname": "曲沃"
  },
  {
    "areaid": 101100703,
    "countyname": "永和"
  },
  {
    "areaid": 101100704,
    "countyname": "隰县"
  },
  {
    "areaid": 101100705,
    "countyname": "大宁"
  },
  {
    "areaid": 101100706,
    "countyname": "吉县"
  },
  {
    "areaid": 101100707,
    "countyname": "襄汾"
  },
  {
    "areaid": 101100708,
    "countyname": "蒲县"
  },
  {
    "areaid": 101100709,
    "countyname": "汾西"
  },
  {
    "areaid": 101100710,
    "countyname": "洪洞"
  },
  {
    "areaid": 101100711,
    "countyname": "霍州"
  },
  {
    "areaid": 101100712,
    "countyname": "乡宁"
  },
  {
    "areaid": 101100713,
    "countyname": "翼城"
  },
  {
    "areaid": 101100714,
    "countyname": "侯马"
  },
  {
    "areaid": 101100715,
    "countyname": "浮山"
  },
  {
    "areaid": 101100716,
    "countyname": "安泽"
  },
  {
    "areaid": 101100717,
    "countyname": "古县"
  },
  {
    "areaid": 101100801,
    "countyname": "运城"
  },
  {
    "areaid": 101100802,
    "countyname": "临猗"
  },
  {
    "areaid": 101100803,
    "countyname": "稷山"
  },
  {
    "areaid": 101100804,
    "countyname": "万荣"
  },
  {
    "areaid": 101100805,
    "countyname": "河津"
  },
  {
    "areaid": 101100806,
    "countyname": "新绛"
  },
  {
    "areaid": 101100807,
    "countyname": "绛县"
  },
  {
    "areaid": 101100808,
    "countyname": "闻喜"
  },
  {
    "areaid": 101100809,
    "countyname": "垣曲"
  },
  {
    "areaid": 101100810,
    "countyname": "永济"
  },
  {
    "areaid": 101100811,
    "countyname": "芮城"
  },
  {
    "areaid": 101100812,
    "countyname": "夏县"
  },
  {
    "areaid": 101100813,
    "countyname": "平陆"
  },
  {
    "areaid": 101100901,
    "countyname": "朔州"
  },
  {
    "areaid": 101100902,
    "countyname": "平鲁"
  },
  {
    "areaid": 101100903,
    "countyname": "山阴"
  },
  {
    "areaid": 101100904,
    "countyname": "右玉"
  },
  {
    "areaid": 101100905,
    "countyname": "应县"
  },
  {
    "areaid": 101100906,
    "countyname": "怀仁"
  },
  {
    "areaid": 101101001,
    "countyname": "忻州"
  },
  {
    "areaid": 101101002,
    "countyname": "定襄"
  },
  {
    "areaid": 101101003,
    "countyname": "五台县"
  },
  {
    "areaid": 101101004,
    "countyname": "河曲"
  },
  {
    "areaid": 101101005,
    "countyname": "偏关"
  },
  {
    "areaid": 101101006,
    "countyname": "神池"
  },
  {
    "areaid": 101101007,
    "countyname": "宁武"
  },
  {
    "areaid": 101101008,
    "countyname": "代县"
  },
  {
    "areaid": 101101009,
    "countyname": "繁峙"
  },
  {
    "areaid": 101101010,
    "countyname": "五台山"
  },
  {
    "areaid": 101101011,
    "countyname": "保德"
  },
  {
    "areaid": 101101012,
    "countyname": "静乐"
  },
  {
    "areaid": 101101013,
    "countyname": "岢岚"
  },
  {
    "areaid": 101101014,
    "countyname": "五寨"
  },
  {
    "areaid": 101101015,
    "countyname": "原平"
  },
  {
    "areaid": 101101100,
    "countyname": "吕梁"
  },
  {
    "areaid": 101101101,
    "countyname": "离石"
  },
  {
    "areaid": 101101102,
    "countyname": "临县"
  },
  {
    "areaid": 101101103,
    "countyname": "兴县"
  },
  {
    "areaid": 101101104,
    "countyname": "岚县"
  },
  {
    "areaid": 101101105,
    "countyname": "柳林"
  },
  {
    "areaid": 101101106,
    "countyname": "石楼"
  },
  {
    "areaid": 101101107,
    "countyname": "方山"
  },
  {
    "areaid": 101101108,
    "countyname": "交口"
  },
  {
    "areaid": 101101109,
    "countyname": "中阳"
  },
  {
    "areaid": 101101110,
    "countyname": "孝义"
  },
  {
    "areaid": 101101111,
    "countyname": "汾阳"
  },
  {
    "areaid": 101101112,
    "countyname": "文水"
  },
  {
    "areaid": 101101113,
    "countyname": "交城"
  },
  {
    "areaid": 101110101,
    "countyname": "西安"
  },
  {
    "areaid": 101110102,
    "countyname": "长安"
  },
  {
    "areaid": 101110103,
    "countyname": "临潼"
  },
  {
    "areaid": 101110104,
    "countyname": "蓝田"
  },
  {
    "areaid": 101110105,
    "countyname": "周至"
  },
  {
    "areaid": 101110106,
    "countyname": "户县"
  },
  {
    "areaid": 101110107,
    "countyname": "高陵"
  },
  {
    "areaid": 101110200,
    "countyname": "咸阳"
  },
  {
    "areaid": 101110201,
    "countyname": "三原"
  },
  {
    "areaid": 101110202,
    "countyname": "礼泉"
  },
  {
    "areaid": 101110203,
    "countyname": "永寿"
  },
  {
    "areaid": 101110204,
    "countyname": "淳化"
  },
  {
    "areaid": 101110205,
    "countyname": "泾阳"
  },
  {
    "areaid": 101110206,
    "countyname": "武功"
  },
  {
    "areaid": 101110207,
    "countyname": "乾县"
  },
  {
    "areaid": 101110208,
    "countyname": "彬县"
  },
  {
    "areaid": 101110209,
    "countyname": "长武"
  },
  {
    "areaid": 101110210,
    "countyname": "旬邑"
  },
  {
    "areaid": 101110211,
    "countyname": "兴平"
  },
  {
    "areaid": 101110300,
    "countyname": "延安"
  },
  {
    "areaid": 101110301,
    "countyname": "延长"
  },
  {
    "areaid": 101110302,
    "countyname": "延川"
  },
  {
    "areaid": 101110303,
    "countyname": "子长"
  },
  {
    "areaid": 101110304,
    "countyname": "宜川"
  },
  {
    "areaid": 101110305,
    "countyname": "富县"
  },
  {
    "areaid": 101110306,
    "countyname": "志丹"
  },
  {
    "areaid": 101110307,
    "countyname": "安塞"
  },
  {
    "areaid": 101110308,
    "countyname": "甘泉"
  },
  {
    "areaid": 101110309,
    "countyname": "洛川"
  },
  {
    "areaid": 101110310,
    "countyname": "黄陵"
  },
  {
    "areaid": 101110311,
    "countyname": "黄龙"
  },
  {
    "areaid": 101110312,
    "countyname": "吴起"
  },
  {
    "areaid": 101110401,
    "countyname": "榆林"
  },
  {
    "areaid": 101110402,
    "countyname": "府谷"
  },
  {
    "areaid": 101110403,
    "countyname": "神木"
  },
  {
    "areaid": 101110404,
    "countyname": "佳县"
  },
  {
    "areaid": 101110405,
    "countyname": "定边"
  },
  {
    "areaid": 101110406,
    "countyname": "靖边"
  },
  {
    "areaid": 101110407,
    "countyname": "横山"
  },
  {
    "areaid": 101110408,
    "countyname": "米脂"
  },
  {
    "areaid": 101110409,
    "countyname": "子洲"
  },
  {
    "areaid": 101110410,
    "countyname": "绥德"
  },
  {
    "areaid": 101110411,
    "countyname": "吴堡"
  },
  {
    "areaid": 101110412,
    "countyname": "清涧"
  },
  {
    "areaid": 101110413,
    "countyname": "榆阳"
  },
  {
    "areaid": 101110501,
    "countyname": "渭南"
  },
  {
    "areaid": 101110502,
    "countyname": "华县"
  },
  {
    "areaid": 101110503,
    "countyname": "潼关"
  },
  {
    "areaid": 101110504,
    "countyname": "大荔"
  },
  {
    "areaid": 101110505,
    "countyname": "白水"
  },
  {
    "areaid": 101110506,
    "countyname": "富平"
  },
  {
    "areaid": 101110507,
    "countyname": "蒲城"
  },
  {
    "areaid": 101110508,
    "countyname": "澄城"
  },
  {
    "areaid": 101110509,
    "countyname": "合阳"
  },
  {
    "areaid": 101110510,
    "countyname": "韩城"
  },
  {
    "areaid": 101110511,
    "countyname": "华阴"
  },
  {
    "areaid": 101110601,
    "countyname": "商洛"
  },
  {
    "areaid": 101110602,
    "countyname": "洛南"
  },
  {
    "areaid": 101110603,
    "countyname": "柞水"
  },
  {
    "areaid": 101110604,
    "countyname": "商州"
  },
  {
    "areaid": 101110605,
    "countyname": "镇安"
  },
  {
    "areaid": 101110606,
    "countyname": "丹凤"
  },
  {
    "areaid": 101110607,
    "countyname": "商南"
  },
  {
    "areaid": 101110608,
    "countyname": "山阳"
  },
  {
    "areaid": 101110701,
    "countyname": "安康"
  },
  {
    "areaid": 101110702,
    "countyname": "紫阳"
  },
  {
    "areaid": 101110703,
    "countyname": "石泉"
  },
  {
    "areaid": 101110704,
    "countyname": "汉阴"
  },
  {
    "areaid": 101110705,
    "countyname": "旬阳"
  },
  {
    "areaid": 101110706,
    "countyname": "岚皋"
  },
  {
    "areaid": 101110707,
    "countyname": "平利"
  },
  {
    "areaid": 101110708,
    "countyname": "白河"
  },
  {
    "areaid": 101110709,
    "countyname": "镇坪"
  },
  {
    "areaid": 101110710,
    "countyname": "宁陕"
  },
  {
    "areaid": 101110801,
    "countyname": "汉中"
  },
  {
    "areaid": 101110802,
    "countyname": "略阳"
  },
  {
    "areaid": 101110803,
    "countyname": "勉县"
  },
  {
    "areaid": 101110804,
    "countyname": "留坝"
  },
  {
    "areaid": 101110805,
    "countyname": "洋县"
  },
  {
    "areaid": 101110806,
    "countyname": "城固"
  },
  {
    "areaid": 101110807,
    "countyname": "西乡"
  },
  {
    "areaid": 101110808,
    "countyname": "佛坪"
  },
  {
    "areaid": 101110809,
    "countyname": "宁强"
  },
  {
    "areaid": 101110810,
    "countyname": "南郑"
  },
  {
    "areaid": 101110811,
    "countyname": "镇巴"
  },
  {
    "areaid": 101110901,
    "countyname": "宝鸡"
  },
  {
    "areaid": 101110903,
    "countyname": "千阳"
  },
  {
    "areaid": 101110904,
    "countyname": "麟游"
  },
  {
    "areaid": 101110905,
    "countyname": "岐山"
  },
  {
    "areaid": 101110906,
    "countyname": "凤翔"
  },
  {
    "areaid": 101110907,
    "countyname": "扶风"
  },
  {
    "areaid": 101110908,
    "countyname": "眉县"
  },
  {
    "areaid": 101110909,
    "countyname": "太白"
  },
  {
    "areaid": 101110910,
    "countyname": "凤县"
  },
  {
    "areaid": 101110911,
    "countyname": "陇县"
  },
  {
    "areaid": 101110912,
    "countyname": "陈仓"
  },
  {
    "areaid": 101111001,
    "countyname": "铜川"
  },
  {
    "areaid": 101111002,
    "countyname": "耀县"
  },
  {
    "areaid": 101111003,
    "countyname": "宜君"
  },
  {
    "areaid": 101111004,
    "countyname": "耀州"
  },
  {
    "areaid": 101111101,
    "countyname": "杨凌"
  },
  {
    "areaid": 101120101,
    "countyname": "济南"
  },
  {
    "areaid": 101120102,
    "countyname": "长清"
  },
  {
    "areaid": 101120103,
    "countyname": "商河"
  },
  {
    "areaid": 101120104,
    "countyname": "章丘"
  },
  {
    "areaid": 101120105,
    "countyname": "平阴"
  },
  {
    "areaid": 101120106,
    "countyname": "济阳"
  },
  {
    "areaid": 101120201,
    "countyname": "青岛"
  },
  {
    "areaid": 101120202,
    "countyname": "崂山"
  },
  {
    "areaid": 101120204,
    "countyname": "即墨"
  },
  {
    "areaid": 101120205,
    "countyname": "胶州"
  },
  {
    "areaid": 101120206,
    "countyname": "黄岛"
  },
  {
    "areaid": 101120207,
    "countyname": "莱西"
  },
  {
    "areaid": 101120208,
    "countyname": "平度"
  },
  {
    "areaid": 101120301,
    "countyname": "淄博"
  },
  {
    "areaid": 101120302,
    "countyname": "淄川"
  },
  {
    "areaid": 101120303,
    "countyname": "博山"
  },
  {
    "areaid": 101120304,
    "countyname": "高青"
  },
  {
    "areaid": 101120305,
    "countyname": "周村"
  },
  {
    "areaid": 101120306,
    "countyname": "沂源"
  },
  {
    "areaid": 101120307,
    "countyname": "桓台"
  },
  {
    "areaid": 101120308,
    "countyname": "临淄"
  },
  {
    "areaid": 101120401,
    "countyname": "德州"
  },
  {
    "areaid": 101120402,
    "countyname": "武城"
  },
  {
    "areaid": 101120403,
    "countyname": "临邑"
  },
  {
    "areaid": 101120404,
    "countyname": "陵县"
  },
  {
    "areaid": 101120405,
    "countyname": "齐河"
  },
  {
    "areaid": 101120406,
    "countyname": "乐陵"
  },
  {
    "areaid": 101120407,
    "countyname": "庆云"
  },
  {
    "areaid": 101120408,
    "countyname": "平原"
  },
  {
    "areaid": 101120409,
    "countyname": "宁津"
  },
  {
    "areaid": 101120410,
    "countyname": "夏津"
  },
  {
    "areaid": 101120411,
    "countyname": "禹城"
  },
  {
    "areaid": 101120501,
    "countyname": "烟台"
  },
  {
    "areaid": 101120502,
    "countyname": "莱州"
  },
  {
    "areaid": 101120503,
    "countyname": "长岛"
  },
  {
    "areaid": 101120504,
    "countyname": "蓬莱"
  },
  {
    "areaid": 101120505,
    "countyname": "龙口"
  },
  {
    "areaid": 101120506,
    "countyname": "招远"
  },
  {
    "areaid": 101120507,
    "countyname": "栖霞"
  },
  {
    "areaid": 101120508,
    "countyname": "福山"
  },
  {
    "areaid": 101120509,
    "countyname": "牟平"
  },
  {
    "areaid": 101120510,
    "countyname": "莱阳"
  },
  {
    "areaid": 101120511,
    "countyname": "海阳"
  },
  {
    "areaid": 101120601,
    "countyname": "潍坊"
  },
  {
    "areaid": 101120602,
    "countyname": "青州"
  },
  {
    "areaid": 101120603,
    "countyname": "寿光"
  },
  {
    "areaid": 101120604,
    "countyname": "临朐"
  },
  {
    "areaid": 101120605,
    "countyname": "昌乐"
  },
  {
    "areaid": 101120606,
    "countyname": "昌邑"
  },
  {
    "areaid": 101120607,
    "countyname": "安丘"
  },
  {
    "areaid": 101120608,
    "countyname": "高密"
  },
  {
    "areaid": 101120609,
    "countyname": "诸城"
  },
  {
    "areaid": 101120701,
    "countyname": "济宁"
  },
  {
    "areaid": 101120702,
    "countyname": "嘉祥"
  },
  {
    "areaid": 101120703,
    "countyname": "微山"
  },
  {
    "areaid": 101120704,
    "countyname": "鱼台"
  },
  {
    "areaid": 101120705,
    "countyname": "兖州"
  },
  {
    "areaid": 101120706,
    "countyname": "金乡"
  },
  {
    "areaid": 101120707,
    "countyname": "汶上"
  },
  {
    "areaid": 101120708,
    "countyname": "泗水"
  },
  {
    "areaid": 101120709,
    "countyname": "梁山"
  },
  {
    "areaid": 101120710,
    "countyname": "曲阜"
  },
  {
    "areaid": 101120711,
    "countyname": "邹城"
  },
  {
    "areaid": 101120801,
    "countyname": "泰安"
  },
  {
    "areaid": 101120802,
    "countyname": "新泰"
  },
  {
    "areaid": 101120804,
    "countyname": "肥城"
  },
  {
    "areaid": 101120805,
    "countyname": "东平"
  },
  {
    "areaid": 101120806,
    "countyname": "宁阳"
  },
  {
    "areaid": 101120901,
    "countyname": "临沂"
  },
  {
    "areaid": 101120902,
    "countyname": "莒南"
  },
  {
    "areaid": 101120903,
    "countyname": "沂南"
  },
  {
    "areaid": 101120904,
    "countyname": "兰陵"
  },
  {
    "areaid": 101120905,
    "countyname": "临沭"
  },
  {
    "areaid": 101120906,
    "countyname": "郯城"
  },
  {
    "areaid": 101120907,
    "countyname": "蒙阴"
  },
  {
    "areaid": 101120908,
    "countyname": "平邑"
  },
  {
    "areaid": 101120909,
    "countyname": "费县"
  },
  {
    "areaid": 101120910,
    "countyname": "沂水"
  },
  {
    "areaid": 101121001,
    "countyname": "菏泽"
  },
  {
    "areaid": 101121002,
    "countyname": "鄄城"
  },
  {
    "areaid": 101121003,
    "countyname": "郓城"
  },
  {
    "areaid": 101121004,
    "countyname": "东明"
  },
  {
    "areaid": 101121005,
    "countyname": "定陶"
  },
  {
    "areaid": 101121006,
    "countyname": "巨野"
  },
  {
    "areaid": 101121007,
    "countyname": "曹县"
  },
  {
    "areaid": 101121008,
    "countyname": "成武"
  },
  {
    "areaid": 101121009,
    "countyname": "单县"
  },
  {
    "areaid": 101121101,
    "countyname": "滨州"
  },
  {
    "areaid": 101121102,
    "countyname": "博兴"
  },
  {
    "areaid": 101121103,
    "countyname": "无棣"
  },
  {
    "areaid": 101121104,
    "countyname": "阳信"
  },
  {
    "areaid": 101121105,
    "countyname": "惠民"
  },
  {
    "areaid": 101121106,
    "countyname": "沾化"
  },
  {
    "areaid": 101121107,
    "countyname": "邹平"
  },
  {
    "areaid": 101121201,
    "countyname": "东营"
  },
  {
    "areaid": 101121202,
    "countyname": "河口"
  },
  {
    "areaid": 101121203,
    "countyname": "垦利"
  },
  {
    "areaid": 101121204,
    "countyname": "利津"
  },
  {
    "areaid": 101121205,
    "countyname": "广饶"
  },
  {
    "areaid": 101121301,
    "countyname": "威海"
  },
  {
    "areaid": 101121302,
    "countyname": "文登"
  },
  {
    "areaid": 101121303,
    "countyname": "荣成"
  },
  {
    "areaid": 101121304,
    "countyname": "乳山"
  },
  {
    "areaid": 101121305,
    "countyname": "成山头"
  },
  {
    "areaid": 101121306,
    "countyname": "石岛"
  },
  {
    "areaid": 101121401,
    "countyname": "枣庄"
  },
  {
    "areaid": 101121402,
    "countyname": "薛城"
  },
  {
    "areaid": 101121403,
    "countyname": "峄城"
  },
  {
    "areaid": 101121404,
    "countyname": "台儿庄"
  },
  {
    "areaid": 101121405,
    "countyname": "滕州"
  },
  {
    "areaid": 101121501,
    "countyname": "日照"
  },
  {
    "areaid": 101121502,
    "countyname": "五莲"
  },
  {
    "areaid": 101121503,
    "countyname": "莒县"
  },
  {
    "areaid": 101121601,
    "countyname": "莱芜"
  },
  {
    "areaid": 101121701,
    "countyname": "聊城"
  },
  {
    "areaid": 101121702,
    "countyname": "冠县"
  },
  {
    "areaid": 101121703,
    "countyname": "阳谷"
  },
  {
    "areaid": 101121704,
    "countyname": "高唐"
  },
  {
    "areaid": 101121705,
    "countyname": "茌平"
  },
  {
    "areaid": 101121706,
    "countyname": "东阿"
  },
  {
    "areaid": 101121707,
    "countyname": "临清"
  },
  {
    "areaid": 101121709,
    "countyname": "莘县"
  },
  {
    "areaid": 101130101,
    "countyname": "乌鲁木齐"
  },
  {
    "areaid": 101130103,
    "countyname": "小渠子"
  },
  {
    "areaid": 101130105,
    "countyname": "达坂城"
  },
  {
    "areaid": 101130108,
    "countyname": "乌鲁木齐牧试站"
  },
  {
    "areaid": 101130109,
    "countyname": "天池"
  },
  {
    "areaid": 101130110,
    "countyname": "白杨沟"
  },
  {
    "areaid": 101130201,
    "countyname": "克拉玛依"
  },
  {
    "areaid": 101130202,
    "countyname": "乌尔禾"
  },
  {
    "areaid": 101130203,
    "countyname": "白碱滩"
  },
  {
    "areaid": 101130301,
    "countyname": "石河子"
  },
  {
    "areaid": 101130302,
    "countyname": "炮台"
  },
  {
    "areaid": 101130303,
    "countyname": "莫索湾"
  },
  {
    "areaid": 101130401,
    "countyname": "昌吉"
  },
  {
    "areaid": 101130402,
    "countyname": "呼图壁"
  },
  {
    "areaid": 101130403,
    "countyname": "米泉"
  },
  {
    "areaid": 101130404,
    "countyname": "阜康"
  },
  {
    "areaid": 101130405,
    "countyname": "吉木萨尔"
  },
  {
    "areaid": 101130406,
    "countyname": "奇台"
  },
  {
    "areaid": 101130407,
    "countyname": "玛纳斯"
  },
  {
    "areaid": 101130408,
    "countyname": "木垒"
  },
  {
    "areaid": 101130409,
    "countyname": "蔡家湖"
  },
  {
    "areaid": 101130501,
    "countyname": "吐鲁番"
  },
  {
    "areaid": 101130502,
    "countyname": "托克逊"
  },
  {
    "areaid": 101130504,
    "countyname": "鄯善"
  },
  {
    "areaid": 101130601,
    "countyname": "库尔勒"
  },
  {
    "areaid": 101130602,
    "countyname": "轮台"
  },
  {
    "areaid": 101130603,
    "countyname": "尉犁"
  },
  {
    "areaid": 101130604,
    "countyname": "若羌"
  },
  {
    "areaid": 101130605,
    "countyname": "且末"
  },
  {
    "areaid": 101130606,
    "countyname": "和静"
  },
  {
    "areaid": 101130607,
    "countyname": "焉耆"
  },
  {
    "areaid": 101130608,
    "countyname": "和硕"
  },
  {
    "areaid": 101130610,
    "countyname": "巴音布鲁克"
  },
  {
    "areaid": 101130611,
    "countyname": "铁干里克"
  },
  {
    "areaid": 101130612,
    "countyname": "博湖"
  },
  {
    "areaid": 101130613,
    "countyname": "塔中"
  },
  {
    "areaid": 101130614,
    "countyname": "巴仑台"
  },
  {
    "areaid": 101130701,
    "countyname": "阿拉尔"
  },
  {
    "areaid": 101130801,
    "countyname": "阿克苏"
  },
  {
    "areaid": 101130802,
    "countyname": "乌什"
  },
  {
    "areaid": 101130803,
    "countyname": "温宿"
  },
  {
    "areaid": 101130804,
    "countyname": "拜城"
  },
  {
    "areaid": 101130805,
    "countyname": "新和"
  },
  {
    "areaid": 101130806,
    "countyname": "沙雅"
  },
  {
    "areaid": 101130807,
    "countyname": "库车"
  },
  {
    "areaid": 101130808,
    "countyname": "柯坪"
  },
  {
    "areaid": 101130809,
    "countyname": "阿瓦提"
  },
  {
    "areaid": 101130901,
    "countyname": "喀什"
  },
  {
    "areaid": 101130902,
    "countyname": "英吉沙"
  },
  {
    "areaid": 101130903,
    "countyname": "塔什库尔干"
  },
  {
    "areaid": 101130904,
    "countyname": "麦盖提"
  },
  {
    "areaid": 101130905,
    "countyname": "莎车"
  },
  {
    "areaid": 101130906,
    "countyname": "叶城"
  },
  {
    "areaid": 101130907,
    "countyname": "泽普"
  },
  {
    "areaid": 101130908,
    "countyname": "巴楚"
  },
  {
    "areaid": 101130909,
    "countyname": "岳普湖"
  },
  {
    "areaid": 101130910,
    "countyname": "伽师"
  },
  {
    "areaid": 101130911,
    "countyname": "疏附"
  },
  {
    "areaid": 101130912,
    "countyname": "疏勒"
  },
  {
    "areaid": 101131001,
    "countyname": "伊宁"
  },
  {
    "areaid": 101131002,
    "countyname": "察布查尔"
  },
  {
    "areaid": 101131003,
    "countyname": "尼勒克"
  },
  {
    "areaid": 101131004,
    "countyname": "伊宁县"
  },
  {
    "areaid": 101131005,
    "countyname": "巩留"
  },
  {
    "areaid": 101131006,
    "countyname": "新源"
  },
  {
    "areaid": 101131007,
    "countyname": "昭苏"
  },
  {
    "areaid": 101131008,
    "countyname": "特克斯"
  },
  {
    "areaid": 101131009,
    "countyname": "霍城"
  },
  {
    "areaid": 101131010,
    "countyname": "霍尔果斯"
  },
  {
    "areaid": 101131011,
    "countyname": "奎屯"
  },
  {
    "areaid": 101131101,
    "countyname": "塔城"
  },
  {
    "areaid": 101131102,
    "countyname": "裕民"
  },
  {
    "areaid": 101131103,
    "countyname": "额敏"
  },
  {
    "areaid": 101131104,
    "countyname": "和布克赛尔"
  },
  {
    "areaid": 101131105,
    "countyname": "托里"
  },
  {
    "areaid": 101131106,
    "countyname": "乌苏"
  },
  {
    "areaid": 101131107,
    "countyname": "沙湾"
  },
  {
    "areaid": 101131201,
    "countyname": "哈密"
  },
  {
    "areaid": 101131203,
    "countyname": "巴里坤"
  },
  {
    "areaid": 101131204,
    "countyname": "伊吾"
  },
  {
    "areaid": 101131301,
    "countyname": "和田"
  },
  {
    "areaid": 101131302,
    "countyname": "皮山"
  },
  {
    "areaid": 101131303,
    "countyname": "策勒"
  },
  {
    "areaid": 101131304,
    "countyname": "墨玉"
  },
  {
    "areaid": 101131305,
    "countyname": "洛浦"
  },
  {
    "areaid": 101131306,
    "countyname": "民丰"
  },
  {
    "areaid": 101131307,
    "countyname": "于田"
  },
  {
    "areaid": 101131401,
    "countyname": "阿勒泰"
  },
  {
    "areaid": 101131402,
    "countyname": "哈巴河"
  },
  {
    "areaid": 101131405,
    "countyname": "吉木乃"
  },
  {
    "areaid": 101131406,
    "countyname": "布尔津"
  },
  {
    "areaid": 101131407,
    "countyname": "福海"
  },
  {
    "areaid": 101131408,
    "countyname": "富蕴"
  },
  {
    "areaid": 101131409,
    "countyname": "青河"
  },
  {
    "areaid": 101131501,
    "countyname": "阿图什"
  },
  {
    "areaid": 101131502,
    "countyname": "乌恰"
  },
  {
    "areaid": 101131503,
    "countyname": "阿克陶"
  },
  {
    "areaid": 101131504,
    "countyname": "阿合奇"
  },
  {
    "areaid": 101131601,
    "countyname": "博乐"
  },
  {
    "areaid": 101131602,
    "countyname": "温泉"
  },
  {
    "areaid": 101131603,
    "countyname": "精河"
  },
  {
    "areaid": 101131606,
    "countyname": "阿拉山口"
  },
  {
    "areaid": 101140101,
    "countyname": "拉萨"
  },
  {
    "areaid": 101140102,
    "countyname": "当雄"
  },
  {
    "areaid": 101140103,
    "countyname": "尼木"
  },
  {
    "areaid": 101140104,
    "countyname": "林周"
  },
  {
    "areaid": 101140105,
    "countyname": "堆龙德庆"
  },
  {
    "areaid": 101140106,
    "countyname": "曲水"
  },
  {
    "areaid": 101140107,
    "countyname": "达孜"
  },
  {
    "areaid": 101140108,
    "countyname": "墨竹工卡"
  },
  {
    "areaid": 101140201,
    "countyname": "日喀则"
  },
  {
    "areaid": 101140202,
    "countyname": "拉孜"
  },
  {
    "areaid": 101140203,
    "countyname": "南木林"
  },
  {
    "areaid": 101140204,
    "countyname": "聂拉木"
  },
  {
    "areaid": 101140205,
    "countyname": "定日"
  },
  {
    "areaid": 101140206,
    "countyname": "江孜"
  },
  {
    "areaid": 101140207,
    "countyname": "帕里"
  },
  {
    "areaid": 101140208,
    "countyname": "仲巴"
  },
  {
    "areaid": 101140209,
    "countyname": "萨嘎"
  },
  {
    "areaid": 101140210,
    "countyname": "吉隆"
  },
  {
    "areaid": 101140211,
    "countyname": "昂仁"
  },
  {
    "areaid": 101140212,
    "countyname": "定结"
  },
  {
    "areaid": 101140213,
    "countyname": "萨迦"
  },
  {
    "areaid": 101140214,
    "countyname": "谢通门"
  },
  {
    "areaid": 101140216,
    "countyname": "岗巴"
  },
  {
    "areaid": 101140217,
    "countyname": "白朗"
  },
  {
    "areaid": 101140218,
    "countyname": "亚东"
  },
  {
    "areaid": 101140219,
    "countyname": "康马"
  },
  {
    "areaid": 101140220,
    "countyname": "仁布"
  },
  {
    "areaid": 101140301,
    "countyname": "山南"
  },
  {
    "areaid": 101140302,
    "countyname": "贡嘎"
  },
  {
    "areaid": 101140303,
    "countyname": "札囊"
  },
  {
    "areaid": 101140304,
    "countyname": "加查"
  },
  {
    "areaid": 101140305,
    "countyname": "浪卡子"
  },
  {
    "areaid": 101140306,
    "countyname": "错那"
  },
  {
    "areaid": 101140307,
    "countyname": "隆子"
  },
  {
    "areaid": 101140308,
    "countyname": "泽当"
  },
  {
    "areaid": 101140309,
    "countyname": "乃东"
  },
  {
    "areaid": 101140310,
    "countyname": "桑日"
  },
  {
    "areaid": 101140311,
    "countyname": "洛扎"
  },
  {
    "areaid": 101140312,
    "countyname": "措美"
  },
  {
    "areaid": 101140313,
    "countyname": "琼结"
  },
  {
    "areaid": 101140314,
    "countyname": "曲松"
  },
  {
    "areaid": 101140401,
    "countyname": "林芝"
  },
  {
    "areaid": 101140402,
    "countyname": "波密"
  },
  {
    "areaid": 101140403,
    "countyname": "米林"
  },
  {
    "areaid": 101140404,
    "countyname": "察隅"
  },
  {
    "areaid": 101140405,
    "countyname": "工布江达"
  },
  {
    "areaid": 101140406,
    "countyname": "朗县"
  },
  {
    "areaid": 101140407,
    "countyname": "墨脱"
  },
  {
    "areaid": 101140501,
    "countyname": "昌都"
  },
  {
    "areaid": 101140502,
    "countyname": "丁青"
  },
  {
    "areaid": 101140503,
    "countyname": "边坝"
  },
  {
    "areaid": 101140504,
    "countyname": "洛隆"
  },
  {
    "areaid": 101140505,
    "countyname": "左贡"
  },
  {
    "areaid": 101140506,
    "countyname": "芒康"
  },
  {
    "areaid": 101140507,
    "countyname": "类乌齐"
  },
  {
    "areaid": 101140508,
    "countyname": "八宿"
  },
  {
    "areaid": 101140509,
    "countyname": "江达"
  },
  {
    "areaid": 101140510,
    "countyname": "察雅"
  },
  {
    "areaid": 101140511,
    "countyname": "贡觉"
  },
  {
    "areaid": 101140601,
    "countyname": "那曲"
  },
  {
    "areaid": 101140602,
    "countyname": "尼玛"
  },
  {
    "areaid": 101140603,
    "countyname": "嘉黎"
  },
  {
    "areaid": 101140604,
    "countyname": "班戈"
  },
  {
    "areaid": 101140605,
    "countyname": "安多"
  },
  {
    "areaid": 101140606,
    "countyname": "索县"
  },
  {
    "areaid": 101140607,
    "countyname": "聂荣"
  },
  {
    "areaid": 101140608,
    "countyname": "巴青"
  },
  {
    "areaid": 101140609,
    "countyname": "比如"
  },
  {
    "areaid": 101140610,
    "countyname": "双湖"
  },
  {
    "areaid": 101140701,
    "countyname": "阿里"
  },
  {
    "areaid": 101140702,
    "countyname": "改则"
  },
  {
    "areaid": 101140703,
    "countyname": "申扎"
  },
  {
    "areaid": 101140704,
    "countyname": "狮泉河"
  },
  {
    "areaid": 101140705,
    "countyname": "普兰"
  },
  {
    "areaid": 101140706,
    "countyname": "札达"
  },
  {
    "areaid": 101140707,
    "countyname": "噶尔"
  },
  {
    "areaid": 101140708,
    "countyname": "日土"
  },
  {
    "areaid": 101140709,
    "countyname": "革吉"
  },
  {
    "areaid": 101140710,
    "countyname": "措勤"
  },
  {
    "areaid": 101150101,
    "countyname": "西宁"
  },
  {
    "areaid": 101150102,
    "countyname": "大通"
  },
  {
    "areaid": 101150103,
    "countyname": "湟源"
  },
  {
    "areaid": 101150104,
    "countyname": "湟中"
  },
  {
    "areaid": 101150201,
    "countyname": "海东"
  },
  {
    "areaid": 101150202,
    "countyname": "乐都"
  },
  {
    "areaid": 101150203,
    "countyname": "民和"
  },
  {
    "areaid": 101150204,
    "countyname": "互助"
  },
  {
    "areaid": 101150205,
    "countyname": "化隆"
  },
  {
    "areaid": 101150206,
    "countyname": "循化"
  },
  {
    "areaid": 101150207,
    "countyname": "冷湖"
  },
  {
    "areaid": 101150208,
    "countyname": "平安"
  },
  {
    "areaid": 101150301,
    "countyname": "黄南"
  },
  {
    "areaid": 101150302,
    "countyname": "尖扎"
  },
  {
    "areaid": 101150303,
    "countyname": "泽库"
  },
  {
    "areaid": 101150304,
    "countyname": "河南"
  },
  {
    "areaid": 101150305,
    "countyname": "同仁"
  },
  {
    "areaid": 101150401,
    "countyname": "海南"
  },
  {
    "areaid": 101150404,
    "countyname": "贵德"
  },
  {
    "areaid": 101150406,
    "countyname": "兴海"
  },
  {
    "areaid": 101150407,
    "countyname": "贵南"
  },
  {
    "areaid": 101150408,
    "countyname": "同德"
  },
  {
    "areaid": 101150409,
    "countyname": "共和"
  },
  {
    "areaid": 101150501,
    "countyname": "果洛"
  },
  {
    "areaid": 101150502,
    "countyname": "班玛"
  },
  {
    "areaid": 101150503,
    "countyname": "甘德"
  },
  {
    "areaid": 101150504,
    "countyname": "达日"
  },
  {
    "areaid": 101150505,
    "countyname": "久治"
  },
  {
    "areaid": 101150506,
    "countyname": "玛多"
  },
  {
    "areaid": 101150507,
    "countyname": "多县"
  },
  {
    "areaid": 101150508,
    "countyname": "玛沁"
  },
  {
    "areaid": 101150601,
    "countyname": "玉树"
  },
  {
    "areaid": 101150602,
    "countyname": "称多"
  },
  {
    "areaid": 101150603,
    "countyname": "治多"
  },
  {
    "areaid": 101150604,
    "countyname": "杂多"
  },
  {
    "areaid": 101150605,
    "countyname": "囊谦"
  },
  {
    "areaid": 101150606,
    "countyname": "曲麻莱"
  },
  {
    "areaid": 101150701,
    "countyname": "海西"
  },
  {
    "areaid": 101150708,
    "countyname": "天峻"
  },
  {
    "areaid": 101150709,
    "countyname": "乌兰"
  },
  {
    "areaid": 101150712,
    "countyname": "茫崖"
  },
  {
    "areaid": 101150713,
    "countyname": "大柴旦"
  },
  {
    "areaid": 101150716,
    "countyname": "德令哈"
  },
  {
    "areaid": 101150801,
    "countyname": "海北"
  },
  {
    "areaid": 101150802,
    "countyname": "门源"
  },
  {
    "areaid": 101150803,
    "countyname": "祁连"
  },
  {
    "areaid": 101150804,
    "countyname": "海晏"
  },
  {
    "areaid": 101150806,
    "countyname": "刚察"
  },
  {
    "areaid": 101150901,
    "countyname": "格尔木"
  },
  {
    "areaid": 101150902,
    "countyname": "都兰"
  },
  {
    "areaid": 101160101,
    "countyname": "兰州"
  },
  {
    "areaid": 101160102,
    "countyname": "皋兰"
  },
  {
    "areaid": 101160103,
    "countyname": "永登"
  },
  {
    "areaid": 101160104,
    "countyname": "榆中"
  },
  {
    "areaid": 101160201,
    "countyname": "定西"
  },
  {
    "areaid": 101160202,
    "countyname": "通渭"
  },
  {
    "areaid": 101160203,
    "countyname": "陇西"
  },
  {
    "areaid": 101160204,
    "countyname": "渭源"
  },
  {
    "areaid": 101160205,
    "countyname": "临洮"
  },
  {
    "areaid": 101160206,
    "countyname": "漳县"
  },
  {
    "areaid": 101160207,
    "countyname": "岷县"
  },
  {
    "areaid": 101160208,
    "countyname": "安定"
  },
  {
    "areaid": 101160301,
    "countyname": "平凉"
  },
  {
    "areaid": 101160302,
    "countyname": "泾川"
  },
  {
    "areaid": 101160303,
    "countyname": "灵台"
  },
  {
    "areaid": 101160304,
    "countyname": "崇信"
  },
  {
    "areaid": 101160305,
    "countyname": "华亭"
  },
  {
    "areaid": 101160306,
    "countyname": "庄浪"
  },
  {
    "areaid": 101160307,
    "countyname": "静宁"
  },
  {
    "areaid": 101160308,
    "countyname": "崆峒"
  },
  {
    "areaid": 101160401,
    "countyname": "庆阳"
  },
  {
    "areaid": 101160403,
    "countyname": "环县"
  },
  {
    "areaid": 101160404,
    "countyname": "华池"
  },
  {
    "areaid": 101160405,
    "countyname": "合水"
  },
  {
    "areaid": 101160406,
    "countyname": "正宁"
  },
  {
    "areaid": 101160407,
    "countyname": "宁县"
  },
  {
    "areaid": 101160408,
    "countyname": "镇原"
  },
  {
    "areaid": 101160409,
    "countyname": "庆城"
  },
  {
    "areaid": 101160501,
    "countyname": "武威"
  },
  {
    "areaid": 101160502,
    "countyname": "民勤"
  },
  {
    "areaid": 101160503,
    "countyname": "古浪"
  },
  {
    "areaid": 101160505,
    "countyname": "天祝"
  },
  {
    "areaid": 101160601,
    "countyname": "金昌"
  },
  {
    "areaid": 101160602,
    "countyname": "永昌"
  },
  {
    "areaid": 101160701,
    "countyname": "张掖"
  },
  {
    "areaid": 101160702,
    "countyname": "肃南"
  },
  {
    "areaid": 101160703,
    "countyname": "民乐"
  },
  {
    "areaid": 101160704,
    "countyname": "临泽"
  },
  {
    "areaid": 101160705,
    "countyname": "高台"
  },
  {
    "areaid": 101160706,
    "countyname": "山丹"
  },
  {
    "areaid": 101160801,
    "countyname": "酒泉"
  },
  {
    "areaid": 101160803,
    "countyname": "金塔"
  },
  {
    "areaid": 101160804,
    "countyname": "阿克塞"
  },
  {
    "areaid": 101160805,
    "countyname": "瓜州"
  },
  {
    "areaid": 101160806,
    "countyname": "肃北"
  },
  {
    "areaid": 101160807,
    "countyname": "玉门"
  },
  {
    "areaid": 101160808,
    "countyname": "敦煌"
  },
  {
    "areaid": 101160901,
    "countyname": "天水"
  },
  {
    "areaid": 101160903,
    "countyname": "清水"
  },
  {
    "areaid": 101160904,
    "countyname": "秦安"
  },
  {
    "areaid": 101160905,
    "countyname": "甘谷"
  },
  {
    "areaid": 101160906,
    "countyname": "武山"
  },
  {
    "areaid": 101160907,
    "countyname": "张家川"
  },
  {
    "areaid": 101160908,
    "countyname": "麦积"
  },
  {
    "areaid": 101161001,
    "countyname": "武都"
  },
  {
    "areaid": 101161002,
    "countyname": "成县"
  },
  {
    "areaid": 101161003,
    "countyname": "文县"
  },
  {
    "areaid": 101161004,
    "countyname": "宕昌"
  },
  {
    "areaid": 101161005,
    "countyname": "康县"
  },
  {
    "areaid": 101161006,
    "countyname": "西和"
  },
  {
    "areaid": 101161007,
    "countyname": "礼县"
  },
  {
    "areaid": 101161008,
    "countyname": "徽县"
  },
  {
    "areaid": 101161009,
    "countyname": "两当"
  },
  {
    "areaid": 101161101,
    "countyname": "临夏"
  },
  {
    "areaid": 101161102,
    "countyname": "康乐"
  },
  {
    "areaid": 101161103,
    "countyname": "永靖"
  },
  {
    "areaid": 101161104,
    "countyname": "广河"
  },
  {
    "areaid": 101161105,
    "countyname": "和政"
  },
  {
    "areaid": 101161106,
    "countyname": "东乡"
  },
  {
    "areaid": 101161107,
    "countyname": "积石山"
  },
  {
    "areaid": 101161201,
    "countyname": "合作"
  },
  {
    "areaid": 101161202,
    "countyname": "临潭"
  },
  {
    "areaid": 101161203,
    "countyname": "卓尼"
  },
  {
    "areaid": 101161204,
    "countyname": "舟曲"
  },
  {
    "areaid": 101161205,
    "countyname": "迭部"
  },
  {
    "areaid": 101161206,
    "countyname": "玛曲"
  },
  {
    "areaid": 101161207,
    "countyname": "碌曲"
  },
  {
    "areaid": 101161208,
    "countyname": "夏河"
  },
  {
    "areaid": 101161301,
    "countyname": "白银"
  },
  {
    "areaid": 101161302,
    "countyname": "靖远"
  },
  {
    "areaid": 101161303,
    "countyname": "会宁"
  },
  {
    "areaid": 101161304,
    "countyname": "平川"
  },
  {
    "areaid": 101161305,
    "countyname": "景泰"
  },
  {
    "areaid": 101161401,
    "countyname": "嘉峪关"
  },
  {
    "areaid": 101170101,
    "countyname": "银川"
  },
  {
    "areaid": 101170102,
    "countyname": "永宁"
  },
  {
    "areaid": 101170103,
    "countyname": "灵武"
  },
  {
    "areaid": 101170104,
    "countyname": "贺兰"
  },
  {
    "areaid": 101170201,
    "countyname": "石嘴山"
  },
  {
    "areaid": 101170202,
    "countyname": "惠农"
  },
  {
    "areaid": 101170203,
    "countyname": "平罗"
  },
  {
    "areaid": 101170204,
    "countyname": "陶乐"
  },
  {
    "areaid": 101170301,
    "countyname": "吴忠"
  },
  {
    "areaid": 101170302,
    "countyname": "同心"
  },
  {
    "areaid": 101170303,
    "countyname": "盐池"
  },
  {
    "areaid": 101170306,
    "countyname": "青铜峡"
  },
  {
    "areaid": 101170401,
    "countyname": "固原"
  },
  {
    "areaid": 101170402,
    "countyname": "西吉"
  },
  {
    "areaid": 101170403,
    "countyname": "隆德"
  },
  {
    "areaid": 101170404,
    "countyname": "泾源"
  },
  {
    "areaid": 101170406,
    "countyname": "彭阳"
  },
  {
    "areaid": 101170501,
    "countyname": "中卫"
  },
  {
    "areaid": 101170502,
    "countyname": "中宁"
  },
  {
    "areaid": 101170504,
    "countyname": "海原"
  },
  {
    "areaid": 101180101,
    "countyname": "郑州"
  },
  {
    "areaid": 101180102,
    "countyname": "巩义"
  },
  {
    "areaid": 101180103,
    "countyname": "荥阳"
  },
  {
    "areaid": 101180104,
    "countyname": "登封"
  },
  {
    "areaid": 101180105,
    "countyname": "新密"
  },
  {
    "areaid": 101180106,
    "countyname": "新郑"
  },
  {
    "areaid": 101180107,
    "countyname": "中牟"
  },
  {
    "areaid": 101180108,
    "countyname": "上街"
  },
  {
    "areaid": 101180201,
    "countyname": "安阳"
  },
  {
    "areaid": 101180202,
    "countyname": "汤阴"
  },
  {
    "areaid": 101180203,
    "countyname": "滑县"
  },
  {
    "areaid": 101180204,
    "countyname": "内黄"
  },
  {
    "areaid": 101180205,
    "countyname": "林州"
  },
  {
    "areaid": 101180301,
    "countyname": "新乡"
  },
  {
    "areaid": 101180302,
    "countyname": "获嘉"
  },
  {
    "areaid": 101180303,
    "countyname": "原阳"
  },
  {
    "areaid": 101180304,
    "countyname": "辉县"
  },
  {
    "areaid": 101180305,
    "countyname": "卫辉"
  },
  {
    "areaid": 101180306,
    "countyname": "延津"
  },
  {
    "areaid": 101180307,
    "countyname": "封丘"
  },
  {
    "areaid": 101180308,
    "countyname": "长垣"
  },
  {
    "areaid": 101180401,
    "countyname": "许昌"
  },
  {
    "areaid": 101180402,
    "countyname": "鄢陵"
  },
  {
    "areaid": 101180403,
    "countyname": "襄城"
  },
  {
    "areaid": 101180404,
    "countyname": "长葛"
  },
  {
    "areaid": 101180405,
    "countyname": "禹州"
  },
  {
    "areaid": 101180501,
    "countyname": "平顶山"
  },
  {
    "areaid": 101180502,
    "countyname": "郏县"
  },
  {
    "areaid": 101180503,
    "countyname": "宝丰"
  },
  {
    "areaid": 101180504,
    "countyname": "汝州"
  },
  {
    "areaid": 101180505,
    "countyname": "叶县"
  },
  {
    "areaid": 101180506,
    "countyname": "舞钢"
  },
  {
    "areaid": 101180507,
    "countyname": "鲁山"
  },
  {
    "areaid": 101180508,
    "countyname": "石龙"
  },
  {
    "areaid": 101180601,
    "countyname": "信阳"
  },
  {
    "areaid": 101180602,
    "countyname": "息县"
  },
  {
    "areaid": 101180603,
    "countyname": "罗山"
  },
  {
    "areaid": 101180604,
    "countyname": "光山"
  },
  {
    "areaid": 101180605,
    "countyname": "新县"
  },
  {
    "areaid": 101180606,
    "countyname": "淮滨"
  },
  {
    "areaid": 101180607,
    "countyname": "潢川"
  },
  {
    "areaid": 101180608,
    "countyname": "固始"
  },
  {
    "areaid": 101180609,
    "countyname": "商城"
  },
  {
    "areaid": 101180701,
    "countyname": "南阳"
  },
  {
    "areaid": 101180702,
    "countyname": "南召"
  },
  {
    "areaid": 101180703,
    "countyname": "方城"
  },
  {
    "areaid": 101180704,
    "countyname": "社旗"
  },
  {
    "areaid": 101180705,
    "countyname": "西峡"
  },
  {
    "areaid": 101180706,
    "countyname": "内乡"
  },
  {
    "areaid": 101180707,
    "countyname": "镇平"
  },
  {
    "areaid": 101180708,
    "countyname": "淅川"
  },
  {
    "areaid": 101180709,
    "countyname": "新野"
  },
  {
    "areaid": 101180710,
    "countyname": "唐河"
  },
  {
    "areaid": 101180711,
    "countyname": "邓州"
  },
  {
    "areaid": 101180712,
    "countyname": "桐柏"
  },
  {
    "areaid": 101180801,
    "countyname": "开封"
  },
  {
    "areaid": 101180802,
    "countyname": "杞县"
  },
  {
    "areaid": 101180803,
    "countyname": "尉氏"
  },
  {
    "areaid": 101180804,
    "countyname": "通许"
  },
  {
    "areaid": 101180805,
    "countyname": "兰考"
  },
  {
    "areaid": 101180901,
    "countyname": "洛阳"
  },
  {
    "areaid": 101180902,
    "countyname": "新安"
  },
  {
    "areaid": 101180903,
    "countyname": "孟津"
  },
  {
    "areaid": 101180904,
    "countyname": "宜阳"
  },
  {
    "areaid": 101180905,
    "countyname": "洛宁"
  },
  {
    "areaid": 101180906,
    "countyname": "伊川"
  },
  {
    "areaid": 101180907,
    "countyname": "嵩县"
  },
  {
    "areaid": 101180908,
    "countyname": "偃师"
  },
  {
    "areaid": 101180909,
    "countyname": "栾川"
  },
  {
    "areaid": 101180910,
    "countyname": "汝阳"
  },
  {
    "areaid": 101180911,
    "countyname": "吉利"
  },
  {
    "areaid": 101181001,
    "countyname": "商丘"
  },
  {
    "areaid": 101181003,
    "countyname": "睢县"
  },
  {
    "areaid": 101181004,
    "countyname": "民权"
  },
  {
    "areaid": 101181005,
    "countyname": "虞城"
  },
  {
    "areaid": 101181006,
    "countyname": "柘城"
  },
  {
    "areaid": 101181007,
    "countyname": "宁陵"
  },
  {
    "areaid": 101181008,
    "countyname": "夏邑"
  },
  {
    "areaid": 101181009,
    "countyname": "永城"
  },
  {
    "areaid": 101181101,
    "countyname": "焦作"
  },
  {
    "areaid": 101181102,
    "countyname": "修武"
  },
  {
    "areaid": 101181103,
    "countyname": "武陟"
  },
  {
    "areaid": 101181104,
    "countyname": "沁阳"
  },
  {
    "areaid": 101181106,
    "countyname": "博爱"
  },
  {
    "areaid": 101181107,
    "countyname": "温县"
  },
  {
    "areaid": 101181108,
    "countyname": "孟州"
  },
  {
    "areaid": 101181201,
    "countyname": "鹤壁"
  },
  {
    "areaid": 101181202,
    "countyname": "浚县"
  },
  {
    "areaid": 101181203,
    "countyname": "淇县"
  },
  {
    "areaid": 101181301,
    "countyname": "濮阳"
  },
  {
    "areaid": 101181302,
    "countyname": "台前"
  },
  {
    "areaid": 101181303,
    "countyname": "南乐"
  },
  {
    "areaid": 101181304,
    "countyname": "清丰"
  },
  {
    "areaid": 101181305,
    "countyname": "范县"
  },
  {
    "areaid": 101181401,
    "countyname": "周口"
  },
  {
    "areaid": 101181402,
    "countyname": "扶沟"
  },
  {
    "areaid": 101181403,
    "countyname": "太康"
  },
  {
    "areaid": 101181404,
    "countyname": "淮阳"
  },
  {
    "areaid": 101181405,
    "countyname": "西华"
  },
  {
    "areaid": 101181406,
    "countyname": "商水"
  },
  {
    "areaid": 101181407,
    "countyname": "项城"
  },
  {
    "areaid": 101181408,
    "countyname": "郸城"
  },
  {
    "areaid": 101181409,
    "countyname": "鹿邑"
  },
  {
    "areaid": 101181410,
    "countyname": "沈丘"
  },
  {
    "areaid": 101181501,
    "countyname": "漯河"
  },
  {
    "areaid": 101181502,
    "countyname": "临颍"
  },
  {
    "areaid": 101181503,
    "countyname": "舞阳"
  },
  {
    "areaid": 101181601,
    "countyname": "驻马店"
  },
  {
    "areaid": 101181602,
    "countyname": "西平"
  },
  {
    "areaid": 101181603,
    "countyname": "遂平"
  },
  {
    "areaid": 101181604,
    "countyname": "上蔡"
  },
  {
    "areaid": 101181605,
    "countyname": "汝南"
  },
  {
    "areaid": 101181606,
    "countyname": "泌阳"
  },
  {
    "areaid": 101181607,
    "countyname": "平舆"
  },
  {
    "areaid": 101181608,
    "countyname": "新蔡"
  },
  {
    "areaid": 101181609,
    "countyname": "确山"
  },
  {
    "areaid": 101181610,
    "countyname": "正阳"
  },
  {
    "areaid": 101181701,
    "countyname": "三门峡"
  },
  {
    "areaid": 101181702,
    "countyname": "灵宝"
  },
  {
    "areaid": 101181703,
    "countyname": "渑池"
  },
  {
    "areaid": 101181704,
    "countyname": "卢氏"
  },
  {
    "areaid": 101181705,
    "countyname": "义马"
  },
  {
    "areaid": 101181706,
    "countyname": "陕县"
  },
  {
    "areaid": 101181801,
    "countyname": "济源"
  },
  {
    "areaid": 101190101,
    "countyname": "南京"
  },
  {
    "areaid": 101190102,
    "countyname": "溧水"
  },
  {
    "areaid": 101190103,
    "countyname": "高淳"
  },
  {
    "areaid": 101190104,
    "countyname": "江宁"
  },
  {
    "areaid": 101190105,
    "countyname": "六合"
  },
  {
    "areaid": 101190106,
    "countyname": "江浦"
  },
  {
    "areaid": 101190107,
    "countyname": "浦口"
  },
  {
    "areaid": 101190201,
    "countyname": "无锡"
  },
  {
    "areaid": 101190202,
    "countyname": "江阴"
  },
  {
    "areaid": 101190203,
    "countyname": "宜兴"
  },
  {
    "areaid": 101190204,
    "countyname": "锡山"
  },
  {
    "areaid": 101190301,
    "countyname": "镇江"
  },
  {
    "areaid": 101190302,
    "countyname": "丹阳"
  },
  {
    "areaid": 101190303,
    "countyname": "扬中"
  },
  {
    "areaid": 101190304,
    "countyname": "句容"
  },
  {
    "areaid": 101190305,
    "countyname": "丹徒"
  },
  {
    "areaid": 101190401,
    "countyname": "苏州"
  },
  {
    "areaid": 101190402,
    "countyname": "常熟"
  },
  {
    "areaid": 101190403,
    "countyname": "张家港"
  },
  {
    "areaid": 101190404,
    "countyname": "昆山"
  },
  {
    "areaid": 101190405,
    "countyname": "吴中"
  },
  {
    "areaid": 101190407,
    "countyname": "吴江"
  },
  {
    "areaid": 101190408,
    "countyname": "太仓"
  },
  {
    "areaid": 101190501,
    "countyname": "南通"
  },
  {
    "areaid": 101190502,
    "countyname": "海安"
  },
  {
    "areaid": 101190503,
    "countyname": "如皋"
  },
  {
    "areaid": 101190504,
    "countyname": "如东"
  },
  {
    "areaid": 101190507,
    "countyname": "启东"
  },
  {
    "areaid": 101190508,
    "countyname": "海门"
  },
  {
    "areaid": 101190509,
    "countyname": "通州"
  },
  {
    "areaid": 101190601,
    "countyname": "扬州"
  },
  {
    "areaid": 101190602,
    "countyname": "宝应"
  },
  {
    "areaid": 101190603,
    "countyname": "仪征"
  },
  {
    "areaid": 101190604,
    "countyname": "高邮"
  },
  {
    "areaid": 101190605,
    "countyname": "江都"
  },
  {
    "areaid": 101190606,
    "countyname": "邗江"
  },
  {
    "areaid": 101190701,
    "countyname": "盐城"
  },
  {
    "areaid": 101190702,
    "countyname": "响水"
  },
  {
    "areaid": 101190703,
    "countyname": "滨海"
  },
  {
    "areaid": 101190704,
    "countyname": "阜宁"
  },
  {
    "areaid": 101190705,
    "countyname": "射阳"
  },
  {
    "areaid": 101190706,
    "countyname": "建湖"
  },
  {
    "areaid": 101190707,
    "countyname": "东台"
  },
  {
    "areaid": 101190708,
    "countyname": "大丰"
  },
  {
    "areaid": 101190709,
    "countyname": "盐都"
  },
  {
    "areaid": 101190801,
    "countyname": "徐州"
  },
  {
    "areaid": 101190802,
    "countyname": "铜山"
  },
  {
    "areaid": 101190803,
    "countyname": "丰县"
  },
  {
    "areaid": 101190804,
    "countyname": "沛县"
  },
  {
    "areaid": 101190805,
    "countyname": "邳州"
  },
  {
    "areaid": 101190806,
    "countyname": "睢宁"
  },
  {
    "areaid": 101190807,
    "countyname": "新沂"
  },
  {
    "areaid": 101190901,
    "countyname": "淮安"
  },
  {
    "areaid": 101190902,
    "countyname": "金湖"
  },
  {
    "areaid": 101190903,
    "countyname": "盱眙"
  },
  {
    "areaid": 101190904,
    "countyname": "洪泽"
  },
  {
    "areaid": 101190905,
    "countyname": "涟水"
  },
  {
    "areaid": 101190906,
    "countyname": "淮阴区"
  },
  {
    "areaid": 101190908,
    "countyname": "淮安区"
  },
  {
    "areaid": 101191001,
    "countyname": "连云港"
  },
  {
    "areaid": 101191002,
    "countyname": "东海"
  },
  {
    "areaid": 101191003,
    "countyname": "赣榆"
  },
  {
    "areaid": 101191004,
    "countyname": "灌云"
  },
  {
    "areaid": 101191005,
    "countyname": "灌南"
  },
  {
    "areaid": 101191101,
    "countyname": "常州"
  },
  {
    "areaid": 101191102,
    "countyname": "溧阳"
  },
  {
    "areaid": 101191103,
    "countyname": "金坛"
  },
  {
    "areaid": 101191104,
    "countyname": "武进"
  },
  {
    "areaid": 101191201,
    "countyname": "泰州"
  },
  {
    "areaid": 101191202,
    "countyname": "兴化"
  },
  {
    "areaid": 101191203,
    "countyname": "泰兴"
  },
  {
    "areaid": 101191204,
    "countyname": "姜堰"
  },
  {
    "areaid": 101191205,
    "countyname": "靖江"
  },
  {
    "areaid": 101191301,
    "countyname": "宿迁"
  },
  {
    "areaid": 101191302,
    "countyname": "沭阳"
  },
  {
    "areaid": 101191303,
    "countyname": "泗阳"
  },
  {
    "areaid": 101191304,
    "countyname": "泗洪"
  },
  {
    "areaid": 101191305,
    "countyname": "宿豫"
  },
  {
    "areaid": 101200101,
    "countyname": "武汉"
  },
  {
    "areaid": 101200102,
    "countyname": "蔡甸"
  },
  {
    "areaid": 101200103,
    "countyname": "黄陂"
  },
  {
    "areaid": 101200104,
    "countyname": "新洲"
  },
  {
    "areaid": 101200105,
    "countyname": "江夏"
  },
  {
    "areaid": 101200106,
    "countyname": "东西湖"
  },
  {
    "areaid": 101200201,
    "countyname": "襄阳"
  },
  {
    "areaid": 101200202,
    "countyname": "襄州"
  },
  {
    "areaid": 101200203,
    "countyname": "保康"
  },
  {
    "areaid": 101200204,
    "countyname": "南漳"
  },
  {
    "areaid": 101200205,
    "countyname": "宜城"
  },
  {
    "areaid": 101200206,
    "countyname": "老河口"
  },
  {
    "areaid": 101200207,
    "countyname": "谷城"
  },
  {
    "areaid": 101200208,
    "countyname": "枣阳"
  },
  {
    "areaid": 101200301,
    "countyname": "鄂州"
  },
  {
    "areaid": 101200302,
    "countyname": "梁子湖"
  },
  {
    "areaid": 101200401,
    "countyname": "孝感"
  },
  {
    "areaid": 101200402,
    "countyname": "安陆"
  },
  {
    "areaid": 101200403,
    "countyname": "云梦"
  },
  {
    "areaid": 101200404,
    "countyname": "大悟"
  },
  {
    "areaid": 101200405,
    "countyname": "应城"
  },
  {
    "areaid": 101200406,
    "countyname": "汉川"
  },
  {
    "areaid": 101200407,
    "countyname": "孝昌"
  },
  {
    "areaid": 101200501,
    "countyname": "黄冈"
  },
  {
    "areaid": 101200502,
    "countyname": "红安"
  },
  {
    "areaid": 101200503,
    "countyname": "麻城"
  },
  {
    "areaid": 101200504,
    "countyname": "罗田"
  },
  {
    "areaid": 101200505,
    "countyname": "英山"
  },
  {
    "areaid": 101200506,
    "countyname": "浠水"
  },
  {
    "areaid": 101200507,
    "countyname": "蕲春"
  },
  {
    "areaid": 101200508,
    "countyname": "黄梅"
  },
  {
    "areaid": 101200509,
    "countyname": "武穴"
  },
  {
    "areaid": 101200510,
    "countyname": "团风"
  },
  {
    "areaid": 101200601,
    "countyname": "黄石"
  },
  {
    "areaid": 101200602,
    "countyname": "大冶"
  },
  {
    "areaid": 101200603,
    "countyname": "阳新"
  },
  {
    "areaid": 101200604,
    "countyname": "铁山"
  },
  {
    "areaid": 101200605,
    "countyname": "下陆"
  },
  {
    "areaid": 101200606,
    "countyname": "西塞山"
  },
  {
    "areaid": 101200701,
    "countyname": "咸宁"
  },
  {
    "areaid": 101200702,
    "countyname": "赤壁"
  },
  {
    "areaid": 101200703,
    "countyname": "嘉鱼"
  },
  {
    "areaid": 101200704,
    "countyname": "崇阳"
  },
  {
    "areaid": 101200705,
    "countyname": "通城"
  },
  {
    "areaid": 101200706,
    "countyname": "通山"
  },
  {
    "areaid": 101200801,
    "countyname": "荆州"
  },
  {
    "areaid": 101200802,
    "countyname": "江陵"
  },
  {
    "areaid": 101200803,
    "countyname": "公安"
  },
  {
    "areaid": 101200804,
    "countyname": "石首"
  },
  {
    "areaid": 101200805,
    "countyname": "监利"
  },
  {
    "areaid": 101200806,
    "countyname": "洪湖"
  },
  {
    "areaid": 101200807,
    "countyname": "松滋"
  },
  {
    "areaid": 101200901,
    "countyname": "宜昌"
  },
  {
    "areaid": 101200902,
    "countyname": "远安"
  },
  {
    "areaid": 101200903,
    "countyname": "秭归"
  },
  {
    "areaid": 101200904,
    "countyname": "兴山"
  },
  {
    "areaid": 101200906,
    "countyname": "五峰"
  },
  {
    "areaid": 101200907,
    "countyname": "当阳"
  },
  {
    "areaid": 101200908,
    "countyname": "长阳"
  },
  {
    "areaid": 101200909,
    "countyname": "宜都"
  },
  {
    "areaid": 101200910,
    "countyname": "枝江"
  },
  {
    "areaid": 101200911,
    "countyname": "三峡"
  },
  {
    "areaid": 101200912,
    "countyname": "夷陵"
  },
  {
    "areaid": 101201001,
    "countyname": "恩施"
  },
  {
    "areaid": 101201002,
    "countyname": "利川"
  },
  {
    "areaid": 101201003,
    "countyname": "建始"
  },
  {
    "areaid": 101201004,
    "countyname": "咸丰"
  },
  {
    "areaid": 101201005,
    "countyname": "宣恩"
  },
  {
    "areaid": 101201006,
    "countyname": "鹤峰"
  },
  {
    "areaid": 101201007,
    "countyname": "来凤"
  },
  {
    "areaid": 101201008,
    "countyname": "巴东"
  },
  {
    "areaid": 101201101,
    "countyname": "十堰"
  },
  {
    "areaid": 101201102,
    "countyname": "竹溪"
  },
  {
    "areaid": 101201103,
    "countyname": "郧西"
  },
  {
    "areaid": 101201104,
    "countyname": "郧县"
  },
  {
    "areaid": 101201105,
    "countyname": "竹山"
  },
  {
    "areaid": 101201106,
    "countyname": "房县"
  },
  {
    "areaid": 101201107,
    "countyname": "丹江口"
  },
  {
    "areaid": 101201108,
    "countyname": "茅箭"
  },
  {
    "areaid": 101201109,
    "countyname": "张湾"
  },
  {
    "areaid": 101201201,
    "countyname": "神农架"
  },
  {
    "areaid": 101201301,
    "countyname": "随州"
  },
  {
    "areaid": 101201302,
    "countyname": "广水"
  },
  {
    "areaid": 101201401,
    "countyname": "荆门"
  },
  {
    "areaid": 101201402,
    "countyname": "钟祥"
  },
  {
    "areaid": 101201403,
    "countyname": "京山"
  },
  {
    "areaid": 101201404,
    "countyname": "掇刀"
  },
  {
    "areaid": 101201405,
    "countyname": "沙洋"
  },
  {
    "areaid": 101201406,
    "countyname": "沙市"
  },
  {
    "areaid": 101201501,
    "countyname": "天门"
  },
  {
    "areaid": 101201601,
    "countyname": "仙桃"
  },
  {
    "areaid": 101201701,
    "countyname": "潜江"
  },
  {
    "areaid": 101210101,
    "countyname": "杭州"
  },
  {
    "areaid": 101210102,
    "countyname": "萧山"
  },
  {
    "areaid": 101210103,
    "countyname": "桐庐"
  },
  {
    "areaid": 101210104,
    "countyname": "淳安"
  },
  {
    "areaid": 101210105,
    "countyname": "建德"
  },
  {
    "areaid": 101210106,
    "countyname": "余杭"
  },
  {
    "areaid": 101210107,
    "countyname": "临安"
  },
  {
    "areaid": 101210108,
    "countyname": "富阳"
  },
  {
    "areaid": 101210201,
    "countyname": "湖州"
  },
  {
    "areaid": 101210202,
    "countyname": "长兴"
  },
  {
    "areaid": 101210203,
    "countyname": "安吉"
  },
  {
    "areaid": 101210204,
    "countyname": "德清"
  },
  {
    "areaid": 101210301,
    "countyname": "嘉兴"
  },
  {
    "areaid": 101210302,
    "countyname": "嘉善"
  },
  {
    "areaid": 101210303,
    "countyname": "海宁"
  },
  {
    "areaid": 101210304,
    "countyname": "桐乡"
  },
  {
    "areaid": 101210305,
    "countyname": "平湖"
  },
  {
    "areaid": 101210306,
    "countyname": "海盐"
  },
  {
    "areaid": 101210401,
    "countyname": "宁波"
  },
  {
    "areaid": 101210403,
    "countyname": "慈溪"
  },
  {
    "areaid": 101210404,
    "countyname": "余姚"
  },
  {
    "areaid": 101210405,
    "countyname": "奉化"
  },
  {
    "areaid": 101210406,
    "countyname": "象山"
  },
  {
    "areaid": 101210408,
    "countyname": "宁海"
  },
  {
    "areaid": 101210410,
    "countyname": "北仑"
  },
  {
    "areaid": 101210411,
    "countyname": "鄞州"
  },
  {
    "areaid": 101210412,
    "countyname": "镇海"
  },
  {
    "areaid": 101210501,
    "countyname": "绍兴"
  },
  {
    "areaid": 101210502,
    "countyname": "诸暨"
  },
  {
    "areaid": 101210503,
    "countyname": "上虞"
  },
  {
    "areaid": 101210504,
    "countyname": "新昌"
  },
  {
    "areaid": 101210505,
    "countyname": "嵊州"
  },
  {
    "areaid": 101210601,
    "countyname": "台州"
  },
  {
    "areaid": 101210603,
    "countyname": "玉环"
  },
  {
    "areaid": 101210604,
    "countyname": "三门"
  },
  {
    "areaid": 101210605,
    "countyname": "天台"
  },
  {
    "areaid": 101210606,
    "countyname": "仙居"
  },
  {
    "areaid": 101210607,
    "countyname": "温岭"
  },
  {
    "areaid": 101210609,
    "countyname": "洪家"
  },
  {
    "areaid": 101210610,
    "countyname": "临海"
  },
  {
    "areaid": 101210611,
    "countyname": "椒江"
  },
  {
    "areaid": 101210612,
    "countyname": "黄岩"
  },
  {
    "areaid": 101210613,
    "countyname": "路桥"
  },
  {
    "areaid": 101210701,
    "countyname": "温州"
  },
  {
    "areaid": 101210702,
    "countyname": "泰顺"
  },
  {
    "areaid": 101210703,
    "countyname": "文成"
  },
  {
    "areaid": 101210704,
    "countyname": "平阳"
  },
  {
    "areaid": 101210705,
    "countyname": "瑞安"
  },
  {
    "areaid": 101210706,
    "countyname": "洞头"
  },
  {
    "areaid": 101210707,
    "countyname": "乐清"
  },
  {
    "areaid": 101210708,
    "countyname": "永嘉"
  },
  {
    "areaid": 101210709,
    "countyname": "苍南"
  },
  {
    "areaid": 101210801,
    "countyname": "丽水"
  },
  {
    "areaid": 101210802,
    "countyname": "遂昌"
  },
  {
    "areaid": 101210803,
    "countyname": "龙泉"
  },
  {
    "areaid": 101210804,
    "countyname": "缙云"
  },
  {
    "areaid": 101210805,
    "countyname": "青田"
  },
  {
    "areaid": 101210806,
    "countyname": "云和"
  },
  {
    "areaid": 101210807,
    "countyname": "庆元"
  },
  {
    "areaid": 101210808,
    "countyname": "松阳"
  },
  {
    "areaid": 101210809,
    "countyname": "景宁"
  },
  {
    "areaid": 101210901,
    "countyname": "金华"
  },
  {
    "areaid": 101210902,
    "countyname": "浦江"
  },
  {
    "areaid": 101210903,
    "countyname": "兰溪"
  },
  {
    "areaid": 101210904,
    "countyname": "义乌"
  },
  {
    "areaid": 101210905,
    "countyname": "东阳"
  },
  {
    "areaid": 101210906,
    "countyname": "武义"
  },
  {
    "areaid": 101210907,
    "countyname": "永康"
  },
  {
    "areaid": 101210908,
    "countyname": "磐安"
  },
  {
    "areaid": 101211001,
    "countyname": "衢州"
  },
  {
    "areaid": 101211002,
    "countyname": "常山"
  },
  {
    "areaid": 101211003,
    "countyname": "开化"
  },
  {
    "areaid": 101211004,
    "countyname": "龙游"
  },
  {
    "areaid": 101211005,
    "countyname": "江山"
  },
  {
    "areaid": 101211006,
    "countyname": "衢江"
  },
  {
    "areaid": 101211101,
    "countyname": "舟山"
  },
  {
    "areaid": 101211102,
    "countyname": "嵊泗"
  },
  {
    "areaid": 101211104,
    "countyname": "岱山"
  },
  {
    "areaid": 101211105,
    "countyname": "普陀"
  },
  {
    "areaid": 101211106,
    "countyname": "定海"
  },
  {
    "areaid": 101220101,
    "countyname": "合肥"
  },
  {
    "areaid": 101220102,
    "countyname": "长丰"
  },
  {
    "areaid": 101220103,
    "countyname": "肥东"
  },
  {
    "areaid": 101220104,
    "countyname": "肥西"
  },
  {
    "areaid": 101220105,
    "countyname": "巢湖"
  },
  {
    "areaid": 101220106,
    "countyname": "庐江"
  },
  {
    "areaid": 101220201,
    "countyname": "蚌埠"
  },
  {
    "areaid": 101220202,
    "countyname": "怀远"
  },
  {
    "areaid": 101220203,
    "countyname": "固镇"
  },
  {
    "areaid": 101220204,
    "countyname": "五河"
  },
  {
    "areaid": 101220301,
    "countyname": "芜湖"
  },
  {
    "areaid": 101220302,
    "countyname": "繁昌"
  },
  {
    "areaid": 101220303,
    "countyname": "芜湖县"
  },
  {
    "areaid": 101220304,
    "countyname": "南陵"
  },
  {
    "areaid": 101220305,
    "countyname": "无为"
  },
  {
    "areaid": 101220401,
    "countyname": "淮南"
  },
  {
    "areaid": 101220402,
    "countyname": "凤台"
  },
  {
    "areaid": 101220403,
    "countyname": "潘集"
  },
  {
    "areaid": 101220501,
    "countyname": "马鞍山"
  },
  {
    "areaid": 101220502,
    "countyname": "当涂"
  },
  {
    "areaid": 101220503,
    "countyname": "含山"
  },
  {
    "areaid": 101220504,
    "countyname": "和县"
  },
  {
    "areaid": 101220601,
    "countyname": "安庆"
  },
  {
    "areaid": 101220602,
    "countyname": "枞阳"
  },
  {
    "areaid": 101220603,
    "countyname": "太湖"
  },
  {
    "areaid": 101220604,
    "countyname": "潜山"
  },
  {
    "areaid": 101220605,
    "countyname": "怀宁"
  },
  {
    "areaid": 101220606,
    "countyname": "宿松"
  },
  {
    "areaid": 101220607,
    "countyname": "望江"
  },
  {
    "areaid": 101220608,
    "countyname": "岳西"
  },
  {
    "areaid": 101220609,
    "countyname": "桐城"
  },
  {
    "areaid": 101220701,
    "countyname": "宿州"
  },
  {
    "areaid": 101220702,
    "countyname": "砀山"
  },
  {
    "areaid": 101220703,
    "countyname": "灵璧"
  },
  {
    "areaid": 101220704,
    "countyname": "泗县"
  },
  {
    "areaid": 101220705,
    "countyname": "萧县"
  },
  {
    "areaid": 101220801,
    "countyname": "阜阳"
  },
  {
    "areaid": 101220802,
    "countyname": "阜南"
  },
  {
    "areaid": 101220803,
    "countyname": "颍上"
  },
  {
    "areaid": 101220804,
    "countyname": "临泉"
  },
  {
    "areaid": 101220805,
    "countyname": "界首"
  },
  {
    "areaid": 101220806,
    "countyname": "太和"
  },
  {
    "areaid": 101220901,
    "countyname": "亳州"
  },
  {
    "areaid": 101220902,
    "countyname": "涡阳"
  },
  {
    "areaid": 101220903,
    "countyname": "利辛"
  },
  {
    "areaid": 101220904,
    "countyname": "蒙城"
  },
  {
    "areaid": 101221001,
    "countyname": "黄山"
  },
  {
    "areaid": 101221002,
    "countyname": "黄山区"
  },
  {
    "areaid": 101221003,
    "countyname": "屯溪"
  },
  {
    "areaid": 101221004,
    "countyname": "祁门"
  },
  {
    "areaid": 101221005,
    "countyname": "黟县"
  },
  {
    "areaid": 101221006,
    "countyname": "歙县"
  },
  {
    "areaid": 101221007,
    "countyname": "休宁"
  },
  {
    "areaid": 101221008,
    "countyname": "黄山风景区"
  },
  {
    "areaid": 101221101,
    "countyname": "滁州"
  },
  {
    "areaid": 101221102,
    "countyname": "凤阳"
  },
  {
    "areaid": 101221103,
    "countyname": "明光"
  },
  {
    "areaid": 101221104,
    "countyname": "定远"
  },
  {
    "areaid": 101221105,
    "countyname": "全椒"
  },
  {
    "areaid": 101221106,
    "countyname": "来安"
  },
  {
    "areaid": 101221107,
    "countyname": "天长"
  },
  {
    "areaid": 101221201,
    "countyname": "淮北"
  },
  {
    "areaid": 101221202,
    "countyname": "濉溪"
  },
  {
    "areaid": 101221301,
    "countyname": "铜陵"
  },
  {
    "areaid": 101221401,
    "countyname": "宣城"
  },
  {
    "areaid": 101221402,
    "countyname": "泾县"
  },
  {
    "areaid": 101221403,
    "countyname": "旌德"
  },
  {
    "areaid": 101221404,
    "countyname": "宁国"
  },
  {
    "areaid": 101221405,
    "countyname": "绩溪"
  },
  {
    "areaid": 101221406,
    "countyname": "广德"
  },
  {
    "areaid": 101221407,
    "countyname": "郎溪"
  },
  {
    "areaid": 101221501,
    "countyname": "六安"
  },
  {
    "areaid": 101221502,
    "countyname": "霍邱"
  },
  {
    "areaid": 101221503,
    "countyname": "寿县"
  },
  {
    "areaid": 101221505,
    "countyname": "金寨"
  },
  {
    "areaid": 101221506,
    "countyname": "霍山"
  },
  {
    "areaid": 101221507,
    "countyname": "舒城"
  },
  {
    "areaid": 101221701,
    "countyname": "池州"
  },
  {
    "areaid": 101221702,
    "countyname": "东至"
  },
  {
    "areaid": 101221703,
    "countyname": "青阳"
  },
  {
    "areaid": 101221704,
    "countyname": "九华山"
  },
  {
    "areaid": 101221705,
    "countyname": "石台"
  },
  {
    "areaid": 101230101,
    "countyname": "福州"
  },
  {
    "areaid": 101230102,
    "countyname": "闽清"
  },
  {
    "areaid": 101230103,
    "countyname": "闽侯"
  },
  {
    "areaid": 101230104,
    "countyname": "罗源"
  },
  {
    "areaid": 101230105,
    "countyname": "连江"
  },
  {
    "areaid": 101230107,
    "countyname": "永泰"
  },
  {
    "areaid": 101230108,
    "countyname": "平潭"
  },
  {
    "areaid": 101230110,
    "countyname": "长乐"
  },
  {
    "areaid": 101230111,
    "countyname": "福清"
  },
  {
    "areaid": 101230201,
    "countyname": "厦门"
  },
  {
    "areaid": 101230202,
    "countyname": "同安"
  },
  {
    "areaid": 101230301,
    "countyname": "宁德"
  },
  {
    "areaid": 101230302,
    "countyname": "古田"
  },
  {
    "areaid": 101230303,
    "countyname": "霞浦"
  },
  {
    "areaid": 101230304,
    "countyname": "寿宁"
  },
  {
    "areaid": 101230305,
    "countyname": "周宁"
  },
  {
    "areaid": 101230306,
    "countyname": "福安"
  },
  {
    "areaid": 101230307,
    "countyname": "柘荣"
  },
  {
    "areaid": 101230308,
    "countyname": "福鼎"
  },
  {
    "areaid": 101230309,
    "countyname": "屏南"
  },
  {
    "areaid": 101230401,
    "countyname": "莆田"
  },
  {
    "areaid": 101230402,
    "countyname": "仙游"
  },
  {
    "areaid": 101230403,
    "countyname": "秀屿港"
  },
  {
    "areaid": 101230404,
    "countyname": "涵江"
  },
  {
    "areaid": 101230405,
    "countyname": "秀屿"
  },
  {
    "areaid": 101230406,
    "countyname": "荔城"
  },
  {
    "areaid": 101230407,
    "countyname": "城厢"
  },
  {
    "areaid": 101230501,
    "countyname": "泉州"
  },
  {
    "areaid": 101230502,
    "countyname": "安溪"
  },
  {
    "areaid": 101230504,
    "countyname": "永春"
  },
  {
    "areaid": 101230505,
    "countyname": "德化"
  },
  {
    "areaid": 101230506,
    "countyname": "南安"
  },
  {
    "areaid": 101230507,
    "countyname": "崇武"
  },
  {
    "areaid": 101230508,
    "countyname": "惠安"
  },
  {
    "areaid": 101230509,
    "countyname": "晋江"
  },
  {
    "areaid": 101230510,
    "countyname": "石狮"
  },
  {
    "areaid": 101230601,
    "countyname": "漳州"
  },
  {
    "areaid": 101230602,
    "countyname": "长泰"
  },
  {
    "areaid": 101230603,
    "countyname": "南靖"
  },
  {
    "areaid": 101230604,
    "countyname": "平和"
  },
  {
    "areaid": 101230605,
    "countyname": "龙海"
  },
  {
    "areaid": 101230606,
    "countyname": "漳浦"
  },
  {
    "areaid": 101230607,
    "countyname": "诏安"
  },
  {
    "areaid": 101230608,
    "countyname": "东山"
  },
  {
    "areaid": 101230609,
    "countyname": "云霄"
  },
  {
    "areaid": 101230610,
    "countyname": "华安"
  },
  {
    "areaid": 101230701,
    "countyname": "龙岩"
  },
  {
    "areaid": 101230702,
    "countyname": "长汀"
  },
  {
    "areaid": 101230703,
    "countyname": "连城"
  },
  {
    "areaid": 101230704,
    "countyname": "武平"
  },
  {
    "areaid": 101230705,
    "countyname": "上杭"
  },
  {
    "areaid": 101230706,
    "countyname": "永定"
  },
  {
    "areaid": 101230707,
    "countyname": "漳平"
  },
  {
    "areaid": 101230801,
    "countyname": "三明"
  },
  {
    "areaid": 101230802,
    "countyname": "宁化"
  },
  {
    "areaid": 101230803,
    "countyname": "清流"
  },
  {
    "areaid": 101230804,
    "countyname": "泰宁"
  },
  {
    "areaid": 101230805,
    "countyname": "将乐"
  },
  {
    "areaid": 101230806,
    "countyname": "建宁"
  },
  {
    "areaid": 101230807,
    "countyname": "明溪"
  },
  {
    "areaid": 101230808,
    "countyname": "沙县"
  },
  {
    "areaid": 101230809,
    "countyname": "尤溪"
  },
  {
    "areaid": 101230810,
    "countyname": "永安"
  },
  {
    "areaid": 101230811,
    "countyname": "大田"
  },
  {
    "areaid": 101230901,
    "countyname": "南平"
  },
  {
    "areaid": 101230902,
    "countyname": "顺昌"
  },
  {
    "areaid": 101230903,
    "countyname": "光泽"
  },
  {
    "areaid": 101230904,
    "countyname": "邵武"
  },
  {
    "areaid": 101230905,
    "countyname": "武夷山"
  },
  {
    "areaid": 101230906,
    "countyname": "浦城"
  },
  {
    "areaid": 101230907,
    "countyname": "建阳"
  },
  {
    "areaid": 101230908,
    "countyname": "松溪"
  },
  {
    "areaid": 101230909,
    "countyname": "政和"
  },
  {
    "areaid": 101230910,
    "countyname": "建瓯"
  },
  {
    "areaid": 101231001,
    "countyname": "钓鱼岛"
  },
  {
    "areaid": 101240101,
    "countyname": "南昌"
  },
  {
    "areaid": 101240102,
    "countyname": "新建"
  },
  {
    "areaid": 101240103,
    "countyname": "南昌县"
  },
  {
    "areaid": 101240104,
    "countyname": "安义"
  },
  {
    "areaid": 101240105,
    "countyname": "进贤"
  },
  {
    "areaid": 101240201,
    "countyname": "九江"
  },
  {
    "areaid": 101240202,
    "countyname": "瑞昌"
  },
  {
    "areaid": 101240203,
    "countyname": "庐山"
  },
  {
    "areaid": 101240204,
    "countyname": "武宁"
  },
  {
    "areaid": 101240205,
    "countyname": "德安"
  },
  {
    "areaid": 101240206,
    "countyname": "永修"
  },
  {
    "areaid": 101240207,
    "countyname": "湖口"
  },
  {
    "areaid": 101240208,
    "countyname": "彭泽"
  },
  {
    "areaid": 101240209,
    "countyname": "星子"
  },
  {
    "areaid": 101240210,
    "countyname": "都昌"
  },
  {
    "areaid": 101240212,
    "countyname": "修水"
  },
  {
    "areaid": 101240301,
    "countyname": "上饶"
  },
  {
    "areaid": 101240302,
    "countyname": "鄱阳"
  },
  {
    "areaid": 101240303,
    "countyname": "婺源"
  },
  {
    "areaid": 101240305,
    "countyname": "余干"
  },
  {
    "areaid": 101240306,
    "countyname": "万年"
  },
  {
    "areaid": 101240307,
    "countyname": "德兴"
  },
  {
    "areaid": 101240308,
    "countyname": "上饶县"
  },
  {
    "areaid": 101240309,
    "countyname": "弋阳"
  },
  {
    "areaid": 101240310,
    "countyname": "横峰"
  },
  {
    "areaid": 101240311,
    "countyname": "铅山"
  },
  {
    "areaid": 101240312,
    "countyname": "玉山"
  },
  {
    "areaid": 101240313,
    "countyname": "广丰"
  },
  {
    "areaid": 101240401,
    "countyname": "抚州"
  },
  {
    "areaid": 101240402,
    "countyname": "广昌"
  },
  {
    "areaid": 101240403,
    "countyname": "乐安"
  },
  {
    "areaid": 101240404,
    "countyname": "崇仁"
  },
  {
    "areaid": 101240405,
    "countyname": "金溪"
  },
  {
    "areaid": 101240406,
    "countyname": "资溪"
  },
  {
    "areaid": 101240407,
    "countyname": "宜黄"
  },
  {
    "areaid": 101240408,
    "countyname": "南城"
  },
  {
    "areaid": 101240409,
    "countyname": "南丰"
  },
  {
    "areaid": 101240410,
    "countyname": "黎川"
  },
  {
    "areaid": 101240411,
    "countyname": "东乡"
  },
  {
    "areaid": 101240501,
    "countyname": "宜春"
  },
  {
    "areaid": 101240502,
    "countyname": "铜鼓"
  },
  {
    "areaid": 101240503,
    "countyname": "宜丰"
  },
  {
    "areaid": 101240504,
    "countyname": "万载"
  },
  {
    "areaid": 101240505,
    "countyname": "上高"
  },
  {
    "areaid": 101240506,
    "countyname": "靖安"
  },
  {
    "areaid": 101240507,
    "countyname": "奉新"
  },
  {
    "areaid": 101240508,
    "countyname": "高安"
  },
  {
    "areaid": 101240509,
    "countyname": "樟树"
  },
  {
    "areaid": 101240510,
    "countyname": "丰城"
  },
  {
    "areaid": 101240601,
    "countyname": "吉安"
  },
  {
    "areaid": 101240602,
    "countyname": "吉安县"
  },
  {
    "areaid": 101240603,
    "countyname": "吉水"
  },
  {
    "areaid": 101240604,
    "countyname": "新干"
  },
  {
    "areaid": 101240605,
    "countyname": "峡江"
  },
  {
    "areaid": 101240606,
    "countyname": "永丰"
  },
  {
    "areaid": 101240607,
    "countyname": "永新"
  },
  {
    "areaid": 101240608,
    "countyname": "井冈山"
  },
  {
    "areaid": 101240609,
    "countyname": "万安"
  },
  {
    "areaid": 101240610,
    "countyname": "遂川"
  },
  {
    "areaid": 101240611,
    "countyname": "泰和"
  },
  {
    "areaid": 101240612,
    "countyname": "安福"
  },
  {
    "areaid": 101240613,
    "countyname": "宁冈"
  },
  {
    "areaid": 101240701,
    "countyname": "赣州"
  },
  {
    "areaid": 101240702,
    "countyname": "崇义"
  },
  {
    "areaid": 101240703,
    "countyname": "上犹"
  },
  {
    "areaid": 101240704,
    "countyname": "南康"
  },
  {
    "areaid": 101240705,
    "countyname": "大余"
  },
  {
    "areaid": 101240706,
    "countyname": "信丰"
  },
  {
    "areaid": 101240707,
    "countyname": "宁都"
  },
  {
    "areaid": 101240708,
    "countyname": "石城"
  },
  {
    "areaid": 101240709,
    "countyname": "瑞金"
  },
  {
    "areaid": 101240710,
    "countyname": "于都"
  },
  {
    "areaid": 101240711,
    "countyname": "会昌"
  },
  {
    "areaid": 101240712,
    "countyname": "安远"
  },
  {
    "areaid": 101240713,
    "countyname": "全南"
  },
  {
    "areaid": 101240714,
    "countyname": "龙南"
  },
  {
    "areaid": 101240715,
    "countyname": "定南"
  },
  {
    "areaid": 101240716,
    "countyname": "寻乌"
  },
  {
    "areaid": 101240717,
    "countyname": "兴国"
  },
  {
    "areaid": 101240718,
    "countyname": "赣县"
  },
  {
    "areaid": 101240801,
    "countyname": "景德镇"
  },
  {
    "areaid": 101240802,
    "countyname": "乐平"
  },
  {
    "areaid": 101240803,
    "countyname": "浮梁"
  },
  {
    "areaid": 101240901,
    "countyname": "萍乡"
  },
  {
    "areaid": 101240902,
    "countyname": "莲花"
  },
  {
    "areaid": 101240903,
    "countyname": "上栗"
  },
  {
    "areaid": 101240904,
    "countyname": "安源"
  },
  {
    "areaid": 101240905,
    "countyname": "芦溪"
  },
  {
    "areaid": 101240906,
    "countyname": "湘东"
  },
  {
    "areaid": 101241001,
    "countyname": "新余"
  },
  {
    "areaid": 101241002,
    "countyname": "分宜"
  },
  {
    "areaid": 101241101,
    "countyname": "鹰潭"
  },
  {
    "areaid": 101241102,
    "countyname": "余江"
  },
  {
    "areaid": 101241103,
    "countyname": "贵溪"
  },
  {
    "areaid": 101250101,
    "countyname": "长沙"
  },
  {
    "areaid": 101250102,
    "countyname": "宁乡"
  },
  {
    "areaid": 101250103,
    "countyname": "浏阳"
  },
  {
    "areaid": 101250104,
    "countyname": "马坡岭"
  },
  {
    "areaid": 101250105,
    "countyname": "望城"
  },
  {
    "areaid": 101250201,
    "countyname": "湘潭"
  },
  {
    "areaid": 101250202,
    "countyname": "韶山"
  },
  {
    "areaid": 101250203,
    "countyname": "湘乡"
  },
  {
    "areaid": 101250301,
    "countyname": "株洲"
  },
  {
    "areaid": 101250302,
    "countyname": "攸县"
  },
  {
    "areaid": 101250303,
    "countyname": "醴陵"
  },
  {
    "areaid": 101250305,
    "countyname": "茶陵"
  },
  {
    "areaid": 101250306,
    "countyname": "炎陵"
  },
  {
    "areaid": 101250401,
    "countyname": "衡阳"
  },
  {
    "areaid": 101250402,
    "countyname": "衡山"
  },
  {
    "areaid": 101250403,
    "countyname": "衡东"
  },
  {
    "areaid": 101250404,
    "countyname": "祁东"
  },
  {
    "areaid": 101250405,
    "countyname": "衡阳县"
  },
  {
    "areaid": 101250406,
    "countyname": "常宁"
  },
  {
    "areaid": 101250407,
    "countyname": "衡南"
  },
  {
    "areaid": 101250408,
    "countyname": "耒阳"
  },
  {
    "areaid": 101250409,
    "countyname": "南岳"
  },
  {
    "areaid": 101250501,
    "countyname": "郴州"
  },
  {
    "areaid": 101250502,
    "countyname": "桂阳"
  },
  {
    "areaid": 101250503,
    "countyname": "嘉禾"
  },
  {
    "areaid": 101250504,
    "countyname": "宜章"
  },
  {
    "areaid": 101250505,
    "countyname": "临武"
  },
  {
    "areaid": 101250507,
    "countyname": "资兴"
  },
  {
    "areaid": 101250508,
    "countyname": "汝城"
  },
  {
    "areaid": 101250509,
    "countyname": "安仁"
  },
  {
    "areaid": 101250510,
    "countyname": "永兴"
  },
  {
    "areaid": 101250511,
    "countyname": "桂东"
  },
  {
    "areaid": 101250512,
    "countyname": "苏仙"
  },
  {
    "areaid": 101250601,
    "countyname": "常德"
  },
  {
    "areaid": 101250602,
    "countyname": "安乡"
  },
  {
    "areaid": 101250603,
    "countyname": "桃源"
  },
  {
    "areaid": 101250604,
    "countyname": "汉寿"
  },
  {
    "areaid": 101250605,
    "countyname": "澧县"
  },
  {
    "areaid": 101250606,
    "countyname": "临澧"
  },
  {
    "areaid": 101250607,
    "countyname": "石门"
  },
  {
    "areaid": 101250608,
    "countyname": "津市"
  },
  {
    "areaid": 101250700,
    "countyname": "益阳"
  },
  {
    "areaid": 101250701,
    "countyname": "赫山区"
  },
  {
    "areaid": 101250702,
    "countyname": "南县"
  },
  {
    "areaid": 101250703,
    "countyname": "桃江"
  },
  {
    "areaid": 101250704,
    "countyname": "安化"
  },
  {
    "areaid": 101250705,
    "countyname": "沅江"
  },
  {
    "areaid": 101250801,
    "countyname": "娄底"
  },
  {
    "areaid": 101250802,
    "countyname": "双峰"
  },
  {
    "areaid": 101250803,
    "countyname": "冷水江"
  },
  {
    "areaid": 101250805,
    "countyname": "新化"
  },
  {
    "areaid": 101250806,
    "countyname": "涟源"
  },
  {
    "areaid": 101250901,
    "countyname": "邵阳"
  },
  {
    "areaid": 101250902,
    "countyname": "隆回"
  },
  {
    "areaid": 101250903,
    "countyname": "洞口"
  },
  {
    "areaid": 101250904,
    "countyname": "新邵"
  },
  {
    "areaid": 101250905,
    "countyname": "邵东"
  },
  {
    "areaid": 101250906,
    "countyname": "绥宁"
  },
  {
    "areaid": 101250907,
    "countyname": "新宁"
  },
  {
    "areaid": 101250908,
    "countyname": "武冈"
  },
  {
    "areaid": 101250909,
    "countyname": "城步"
  },
  {
    "areaid": 101250910,
    "countyname": "邵阳县"
  },
  {
    "areaid": 101251001,
    "countyname": "岳阳"
  },
  {
    "areaid": 101251002,
    "countyname": "华容"
  },
  {
    "areaid": 101251003,
    "countyname": "湘阴"
  },
  {
    "areaid": 101251004,
    "countyname": "汨罗"
  },
  {
    "areaid": 101251005,
    "countyname": "平江"
  },
  {
    "areaid": 101251006,
    "countyname": "临湘"
  },
  {
    "areaid": 101251101,
    "countyname": "张家界"
  },
  {
    "areaid": 101251102,
    "countyname": "桑植"
  },
  {
    "areaid": 101251103,
    "countyname": "慈利"
  },
  {
    "areaid": 101251104,
    "countyname": "武陵源"
  },
  {
    "areaid": 101251201,
    "countyname": "怀化"
  },
  {
    "areaid": 101251203,
    "countyname": "沅陵"
  },
  {
    "areaid": 101251204,
    "countyname": "辰溪"
  },
  {
    "areaid": 101251205,
    "countyname": "靖州"
  },
  {
    "areaid": 101251206,
    "countyname": "会同"
  },
  {
    "areaid": 101251207,
    "countyname": "通道"
  },
  {
    "areaid": 101251208,
    "countyname": "麻阳"
  },
  {
    "areaid": 101251209,
    "countyname": "新晃"
  },
  {
    "areaid": 101251210,
    "countyname": "芷江"
  },
  {
    "areaid": 101251211,
    "countyname": "溆浦"
  },
  {
    "areaid": 101251212,
    "countyname": "中方"
  },
  {
    "areaid": 101251213,
    "countyname": "洪江"
  },
  {
    "areaid": 101251401,
    "countyname": "永州"
  },
  {
    "areaid": 101251402,
    "countyname": "祁阳"
  },
  {
    "areaid": 101251403,
    "countyname": "东安"
  },
  {
    "areaid": 101251404,
    "countyname": "双牌"
  },
  {
    "areaid": 101251405,
    "countyname": "道县"
  },
  {
    "areaid": 101251406,
    "countyname": "宁远"
  },
  {
    "areaid": 101251407,
    "countyname": "江永"
  },
  {
    "areaid": 101251408,
    "countyname": "蓝山"
  },
  {
    "areaid": 101251409,
    "countyname": "新田"
  },
  {
    "areaid": 101251410,
    "countyname": "江华"
  },
  {
    "areaid": 101251411,
    "countyname": "冷水滩"
  },
  {
    "areaid": 101251501,
    "countyname": "吉首"
  },
  {
    "areaid": 101251502,
    "countyname": "保靖"
  },
  {
    "areaid": 101251503,
    "countyname": "永顺"
  },
  {
    "areaid": 101251504,
    "countyname": "古丈"
  },
  {
    "areaid": 101251505,
    "countyname": "凤凰"
  },
  {
    "areaid": 101251506,
    "countyname": "泸溪"
  },
  {
    "areaid": 101251507,
    "countyname": "龙山"
  },
  {
    "areaid": 101251508,
    "countyname": "花垣"
  },
  {
    "areaid": 101260101,
    "countyname": "贵阳"
  },
  {
    "areaid": 101260102,
    "countyname": "白云"
  },
  {
    "areaid": 101260103,
    "countyname": "花溪"
  },
  {
    "areaid": 101260104,
    "countyname": "乌当"
  },
  {
    "areaid": 101260105,
    "countyname": "息烽"
  },
  {
    "areaid": 101260106,
    "countyname": "开阳"
  },
  {
    "areaid": 101260107,
    "countyname": "修文"
  },
  {
    "areaid": 101260108,
    "countyname": "清镇"
  },
  {
    "areaid": 101260109,
    "countyname": "小河"
  },
  {
    "areaid": 101260110,
    "countyname": "云岩"
  },
  {
    "areaid": 101260111,
    "countyname": "南明"
  },
  {
    "areaid": 101260201,
    "countyname": "遵义"
  },
  {
    "areaid": 101260202,
    "countyname": "遵义县"
  },
  {
    "areaid": 101260203,
    "countyname": "仁怀"
  },
  {
    "areaid": 101260204,
    "countyname": "绥阳"
  },
  {
    "areaid": 101260205,
    "countyname": "湄潭"
  },
  {
    "areaid": 101260206,
    "countyname": "凤冈"
  },
  {
    "areaid": 101260207,
    "countyname": "桐梓"
  },
  {
    "areaid": 101260208,
    "countyname": "赤水"
  },
  {
    "areaid": 101260209,
    "countyname": "习水"
  },
  {
    "areaid": 101260210,
    "countyname": "道真"
  },
  {
    "areaid": 101260211,
    "countyname": "正安"
  },
  {
    "areaid": 101260212,
    "countyname": "务川"
  },
  {
    "areaid": 101260213,
    "countyname": "余庆"
  },
  {
    "areaid": 101260214,
    "countyname": "汇川"
  },
  {
    "areaid": 101260215,
    "countyname": "红花岗"
  },
  {
    "areaid": 101260301,
    "countyname": "安顺"
  },
  {
    "areaid": 101260302,
    "countyname": "普定"
  },
  {
    "areaid": 101260303,
    "countyname": "镇宁"
  },
  {
    "areaid": 101260304,
    "countyname": "平坝"
  },
  {
    "areaid": 101260305,
    "countyname": "紫云"
  },
  {
    "areaid": 101260306,
    "countyname": "关岭"
  },
  {
    "areaid": 101260401,
    "countyname": "都匀"
  },
  {
    "areaid": 101260402,
    "countyname": "贵定"
  },
  {
    "areaid": 101260403,
    "countyname": "瓮安"
  },
  {
    "areaid": 101260404,
    "countyname": "长顺"
  },
  {
    "areaid": 101260405,
    "countyname": "福泉"
  },
  {
    "areaid": 101260406,
    "countyname": "惠水"
  },
  {
    "areaid": 101260407,
    "countyname": "龙里"
  },
  {
    "areaid": 101260408,
    "countyname": "罗甸"
  },
  {
    "areaid": 101260409,
    "countyname": "平塘"
  },
  {
    "areaid": 101260410,
    "countyname": "独山"
  },
  {
    "areaid": 101260411,
    "countyname": "三都"
  },
  {
    "areaid": 101260412,
    "countyname": "荔波"
  },
  {
    "areaid": 101260501,
    "countyname": "凯里"
  },
  {
    "areaid": 101260502,
    "countyname": "岑巩"
  },
  {
    "areaid": 101260503,
    "countyname": "施秉"
  },
  {
    "areaid": 101260504,
    "countyname": "镇远"
  },
  {
    "areaid": 101260505,
    "countyname": "黄平"
  },
  {
    "areaid": 101260507,
    "countyname": "麻江"
  },
  {
    "areaid": 101260508,
    "countyname": "丹寨"
  },
  {
    "areaid": 101260509,
    "countyname": "三穗"
  },
  {
    "areaid": 101260510,
    "countyname": "台江"
  },
  {
    "areaid": 101260511,
    "countyname": "剑河"
  },
  {
    "areaid": 101260512,
    "countyname": "雷山"
  },
  {
    "areaid": 101260513,
    "countyname": "黎平"
  },
  {
    "areaid": 101260514,
    "countyname": "天柱"
  },
  {
    "areaid": 101260515,
    "countyname": "锦屏"
  },
  {
    "areaid": 101260516,
    "countyname": "榕江"
  },
  {
    "areaid": 101260517,
    "countyname": "从江"
  },
  {
    "areaid": 101260601,
    "countyname": "铜仁"
  },
  {
    "areaid": 101260602,
    "countyname": "江口"
  },
  {
    "areaid": 101260603,
    "countyname": "玉屏"
  },
  {
    "areaid": 101260604,
    "countyname": "万山"
  },
  {
    "areaid": 101260605,
    "countyname": "思南"
  },
  {
    "areaid": 101260607,
    "countyname": "印江"
  },
  {
    "areaid": 101260608,
    "countyname": "石阡"
  },
  {
    "areaid": 101260609,
    "countyname": "沿河"
  },
  {
    "areaid": 101260610,
    "countyname": "德江"
  },
  {
    "areaid": 101260611,
    "countyname": "松桃"
  },
  {
    "areaid": 101260701,
    "countyname": "毕节"
  },
  {
    "areaid": 101260702,
    "countyname": "赫章"
  },
  {
    "areaid": 101260703,
    "countyname": "金沙"
  },
  {
    "areaid": 101260704,
    "countyname": "威宁"
  },
  {
    "areaid": 101260705,
    "countyname": "大方"
  },
  {
    "areaid": 101260706,
    "countyname": "纳雍"
  },
  {
    "areaid": 101260707,
    "countyname": "织金"
  },
  {
    "areaid": 101260708,
    "countyname": "黔西"
  },
  {
    "areaid": 101260801,
    "countyname": "水城"
  },
  {
    "areaid": 101260802,
    "countyname": "六枝"
  },
  {
    "areaid": 101260804,
    "countyname": "盘县"
  },
  {
    "areaid": 101260901,
    "countyname": "兴义"
  },
  {
    "areaid": 101260902,
    "countyname": "晴隆"
  },
  {
    "areaid": 101260903,
    "countyname": "兴仁"
  },
  {
    "areaid": 101260904,
    "countyname": "贞丰"
  },
  {
    "areaid": 101260905,
    "countyname": "望谟"
  },
  {
    "areaid": 101260907,
    "countyname": "安龙"
  },
  {
    "areaid": 101260908,
    "countyname": "册亨"
  },
  {
    "areaid": 101260909,
    "countyname": "普安"
  },
  {
    "areaid": 101270101,
    "countyname": "成都"
  },
  {
    "areaid": 101270102,
    "countyname": "龙泉驿"
  },
  {
    "areaid": 101270103,
    "countyname": "新都"
  },
  {
    "areaid": 101270104,
    "countyname": "温江"
  },
  {
    "areaid": 101270105,
    "countyname": "金堂"
  },
  {
    "areaid": 101270106,
    "countyname": "双流"
  },
  {
    "areaid": 101270107,
    "countyname": "郫县"
  },
  {
    "areaid": 101270108,
    "countyname": "大邑"
  },
  {
    "areaid": 101270109,
    "countyname": "蒲江"
  },
  {
    "areaid": 101270110,
    "countyname": "新津"
  },
  {
    "areaid": 101270111,
    "countyname": "都江堰"
  },
  {
    "areaid": 101270112,
    "countyname": "彭州"
  },
  {
    "areaid": 101270113,
    "countyname": "邛崃"
  },
  {
    "areaid": 101270114,
    "countyname": "崇州"
  },
  {
    "areaid": 101270115,
    "countyname": "青白江"
  },
  {
    "areaid": 101270201,
    "countyname": "攀枝花"
  },
  {
    "areaid": 101270202,
    "countyname": "仁和"
  },
  {
    "areaid": 101270203,
    "countyname": "米易"
  },
  {
    "areaid": 101270204,
    "countyname": "盐边"
  },
  {
    "areaid": 101270301,
    "countyname": "自贡"
  },
  {
    "areaid": 101270302,
    "countyname": "富顺"
  },
  {
    "areaid": 101270303,
    "countyname": "荣县"
  },
  {
    "areaid": 101270401,
    "countyname": "绵阳"
  },
  {
    "areaid": 101270402,
    "countyname": "三台"
  },
  {
    "areaid": 101270403,
    "countyname": "盐亭"
  },
  {
    "areaid": 101270404,
    "countyname": "安县"
  },
  {
    "areaid": 101270405,
    "countyname": "梓潼"
  },
  {
    "areaid": 101270406,
    "countyname": "北川"
  },
  {
    "areaid": 101270407,
    "countyname": "平武"
  },
  {
    "areaid": 101270408,
    "countyname": "江油"
  },
  {
    "areaid": 101270501,
    "countyname": "南充"
  },
  {
    "areaid": 101270502,
    "countyname": "南部"
  },
  {
    "areaid": 101270503,
    "countyname": "营山"
  },
  {
    "areaid": 101270504,
    "countyname": "蓬安"
  },
  {
    "areaid": 101270505,
    "countyname": "仪陇"
  },
  {
    "areaid": 101270506,
    "countyname": "西充"
  },
  {
    "areaid": 101270507,
    "countyname": "阆中"
  },
  {
    "areaid": 101270601,
    "countyname": "达州"
  },
  {
    "areaid": 101270602,
    "countyname": "宣汉"
  },
  {
    "areaid": 101270603,
    "countyname": "开江"
  },
  {
    "areaid": 101270604,
    "countyname": "大竹"
  },
  {
    "areaid": 101270605,
    "countyname": "渠县"
  },
  {
    "areaid": 101270606,
    "countyname": "万源"
  },
  {
    "areaid": 101270607,
    "countyname": "通川"
  },
  {
    "areaid": 101270608,
    "countyname": "达县"
  },
  {
    "areaid": 101270701,
    "countyname": "遂宁"
  },
  {
    "areaid": 101270702,
    "countyname": "蓬溪"
  },
  {
    "areaid": 101270703,
    "countyname": "射洪"
  },
  {
    "areaid": 101270801,
    "countyname": "广安"
  },
  {
    "areaid": 101270802,
    "countyname": "岳池"
  },
  {
    "areaid": 101270803,
    "countyname": "武胜"
  },
  {
    "areaid": 101270804,
    "countyname": "邻水"
  },
  {
    "areaid": 101270805,
    "countyname": "华蓥"
  },
  {
    "areaid": 101270901,
    "countyname": "巴中"
  },
  {
    "areaid": 101270902,
    "countyname": "通江"
  },
  {
    "areaid": 101270903,
    "countyname": "南江"
  },
  {
    "areaid": 101270904,
    "countyname": "平昌"
  },
  {
    "areaid": 101271001,
    "countyname": "泸州"
  },
  {
    "areaid": 101271003,
    "countyname": "泸县"
  },
  {
    "areaid": 101271004,
    "countyname": "合江"
  },
  {
    "areaid": 101271005,
    "countyname": "叙永"
  },
  {
    "areaid": 101271006,
    "countyname": "古蔺"
  },
  {
    "areaid": 101271007,
    "countyname": "纳溪"
  },
  {
    "areaid": 101271101,
    "countyname": "宜宾"
  },
  {
    "areaid": 101271103,
    "countyname": "宜宾县"
  },
  {
    "areaid": 101271104,
    "countyname": "南溪"
  },
  {
    "areaid": 101271105,
    "countyname": "江安"
  },
  {
    "areaid": 101271106,
    "countyname": "长宁"
  },
  {
    "areaid": 101271107,
    "countyname": "高县"
  },
  {
    "areaid": 101271108,
    "countyname": "珙县"
  },
  {
    "areaid": 101271109,
    "countyname": "筠连"
  },
  {
    "areaid": 101271110,
    "countyname": "兴文"
  },
  {
    "areaid": 101271111,
    "countyname": "屏山"
  },
  {
    "areaid": 101271201,
    "countyname": "内江"
  },
  {
    "areaid": 101271202,
    "countyname": "东兴"
  },
  {
    "areaid": 101271203,
    "countyname": "威远"
  },
  {
    "areaid": 101271204,
    "countyname": "资中"
  },
  {
    "areaid": 101271205,
    "countyname": "隆昌"
  },
  {
    "areaid": 101271301,
    "countyname": "资阳"
  },
  {
    "areaid": 101271302,
    "countyname": "安岳"
  },
  {
    "areaid": 101271303,
    "countyname": "乐至"
  },
  {
    "areaid": 101271304,
    "countyname": "简阳"
  },
  {
    "areaid": 101271401,
    "countyname": "乐山"
  },
  {
    "areaid": 101271402,
    "countyname": "犍为"
  },
  {
    "areaid": 101271403,
    "countyname": "井研"
  },
  {
    "areaid": 101271404,
    "countyname": "夹江"
  },
  {
    "areaid": 101271405,
    "countyname": "沐川"
  },
  {
    "areaid": 101271406,
    "countyname": "峨边"
  },
  {
    "areaid": 101271407,
    "countyname": "马边"
  },
  {
    "areaid": 101271408,
    "countyname": "峨眉"
  },
  {
    "areaid": 101271409,
    "countyname": "峨眉山"
  },
  {
    "areaid": 101271501,
    "countyname": "眉山"
  },
  {
    "areaid": 101271502,
    "countyname": "仁寿"
  },
  {
    "areaid": 101271503,
    "countyname": "彭山"
  },
  {
    "areaid": 101271504,
    "countyname": "洪雅"
  },
  {
    "areaid": 101271505,
    "countyname": "丹棱"
  },
  {
    "areaid": 101271506,
    "countyname": "青神"
  },
  {
    "areaid": 101271601,
    "countyname": "凉山"
  },
  {
    "areaid": 101271603,
    "countyname": "木里"
  },
  {
    "areaid": 101271604,
    "countyname": "盐源"
  },
  {
    "areaid": 101271605,
    "countyname": "德昌"
  },
  {
    "areaid": 101271606,
    "countyname": "会理"
  },
  {
    "areaid": 101271607,
    "countyname": "会东"
  },
  {
    "areaid": 101271608,
    "countyname": "宁南"
  },
  {
    "areaid": 101271609,
    "countyname": "普格"
  },
  {
    "areaid": 101271610,
    "countyname": "西昌"
  },
  {
    "areaid": 101271611,
    "countyname": "金阳"
  },
  {
    "areaid": 101271612,
    "countyname": "昭觉"
  },
  {
    "areaid": 101271613,
    "countyname": "喜德"
  },
  {
    "areaid": 101271614,
    "countyname": "冕宁"
  },
  {
    "areaid": 101271615,
    "countyname": "越西"
  },
  {
    "areaid": 101271616,
    "countyname": "甘洛"
  },
  {
    "areaid": 101271617,
    "countyname": "雷波"
  },
  {
    "areaid": 101271618,
    "countyname": "美姑"
  },
  {
    "areaid": 101271619,
    "countyname": "布拖"
  },
  {
    "areaid": 101271701,
    "countyname": "雅安"
  },
  {
    "areaid": 101271702,
    "countyname": "名山"
  },
  {
    "areaid": 101271703,
    "countyname": "荥经"
  },
  {
    "areaid": 101271704,
    "countyname": "汉源"
  },
  {
    "areaid": 101271705,
    "countyname": "石棉"
  },
  {
    "areaid": 101271706,
    "countyname": "天全"
  },
  {
    "areaid": 101271707,
    "countyname": "芦山"
  },
  {
    "areaid": 101271708,
    "countyname": "宝兴"
  },
  {
    "areaid": 101271801,
    "countyname": "甘孜"
  },
  {
    "areaid": 101271802,
    "countyname": "康定"
  },
  {
    "areaid": 101271803,
    "countyname": "泸定"
  },
  {
    "areaid": 101271804,
    "countyname": "丹巴"
  },
  {
    "areaid": 101271805,
    "countyname": "九龙"
  },
  {
    "areaid": 101271806,
    "countyname": "雅江"
  },
  {
    "areaid": 101271807,
    "countyname": "道孚"
  },
  {
    "areaid": 101271808,
    "countyname": "炉霍"
  },
  {
    "areaid": 101271809,
    "countyname": "新龙"
  },
  {
    "areaid": 101271810,
    "countyname": "德格"
  },
  {
    "areaid": 101271811,
    "countyname": "白玉"
  },
  {
    "areaid": 101271812,
    "countyname": "石渠"
  },
  {
    "areaid": 101271813,
    "countyname": "色达"
  },
  {
    "areaid": 101271814,
    "countyname": "理塘"
  },
  {
    "areaid": 101271815,
    "countyname": "巴塘"
  },
  {
    "areaid": 101271816,
    "countyname": "乡城"
  },
  {
    "areaid": 101271817,
    "countyname": "稻城"
  },
  {
    "areaid": 101271818,
    "countyname": "得荣"
  },
  {
    "areaid": 101271901,
    "countyname": "阿坝"
  },
  {
    "areaid": 101271902,
    "countyname": "汶川"
  },
  {
    "areaid": 101271903,
    "countyname": "理县"
  },
  {
    "areaid": 101271904,
    "countyname": "茂县"
  },
  {
    "areaid": 101271905,
    "countyname": "松潘"
  },
  {
    "areaid": 101271906,
    "countyname": "九寨沟"
  },
  {
    "areaid": 101271907,
    "countyname": "金川"
  },
  {
    "areaid": 101271908,
    "countyname": "小金"
  },
  {
    "areaid": 101271909,
    "countyname": "黑水"
  },
  {
    "areaid": 101271910,
    "countyname": "马尔康"
  },
  {
    "areaid": 101271911,
    "countyname": "壤塘"
  },
  {
    "areaid": 101271912,
    "countyname": "若尔盖"
  },
  {
    "areaid": 101271913,
    "countyname": "红原"
  },
  {
    "areaid": 101272001,
    "countyname": "德阳"
  },
  {
    "areaid": 101272002,
    "countyname": "中江"
  },
  {
    "areaid": 101272003,
    "countyname": "广汉"
  },
  {
    "areaid": 101272004,
    "countyname": "什邡"
  },
  {
    "areaid": 101272005,
    "countyname": "绵竹"
  },
  {
    "areaid": 101272006,
    "countyname": "罗江"
  },
  {
    "areaid": 101272101,
    "countyname": "广元"
  },
  {
    "areaid": 101272102,
    "countyname": "旺苍"
  },
  {
    "areaid": 101272103,
    "countyname": "青川"
  },
  {
    "areaid": 101272104,
    "countyname": "剑阁"
  },
  {
    "areaid": 101272105,
    "countyname": "苍溪"
  },
  {
    "areaid": 101280101,
    "countyname": "广州"
  },
  {
    "areaid": 101280102,
    "countyname": "番禺"
  },
  {
    "areaid": 101280103,
    "countyname": "从化"
  },
  {
    "areaid": 101280104,
    "countyname": "增城"
  },
  {
    "areaid": 101280105,
    "countyname": "花都"
  },
  {
    "areaid": 101280201,
    "countyname": "韶关"
  },
  {
    "areaid": 101280202,
    "countyname": "乳源"
  },
  {
    "areaid": 101280203,
    "countyname": "始兴"
  },
  {
    "areaid": 101280204,
    "countyname": "翁源"
  },
  {
    "areaid": 101280205,
    "countyname": "乐昌"
  },
  {
    "areaid": 101280206,
    "countyname": "仁化"
  },
  {
    "areaid": 101280207,
    "countyname": "南雄"
  },
  {
    "areaid": 101280208,
    "countyname": "新丰"
  },
  {
    "areaid": 101280209,
    "countyname": "曲江"
  },
  {
    "areaid": 101280210,
    "countyname": "浈江"
  },
  {
    "areaid": 101280211,
    "countyname": "武江"
  },
  {
    "areaid": 101280301,
    "countyname": "惠州"
  },
  {
    "areaid": 101280302,
    "countyname": "博罗"
  },
  {
    "areaid": 101280303,
    "countyname": "惠阳"
  },
  {
    "areaid": 101280304,
    "countyname": "惠东"
  },
  {
    "areaid": 101280305,
    "countyname": "龙门"
  },
  {
    "areaid": 101280401,
    "countyname": "梅州"
  },
  {
    "areaid": 101280402,
    "countyname": "兴宁"
  },
  {
    "areaid": 101280403,
    "countyname": "蕉岭"
  },
  {
    "areaid": 101280404,
    "countyname": "大埔"
  },
  {
    "areaid": 101280406,
    "countyname": "丰顺"
  },
  {
    "areaid": 101280407,
    "countyname": "平远"
  },
  {
    "areaid": 101280408,
    "countyname": "五华"
  },
  {
    "areaid": 101280409,
    "countyname": "梅县"
  },
  {
    "areaid": 101280501,
    "countyname": "汕头"
  },
  {
    "areaid": 101280502,
    "countyname": "潮阳"
  },
  {
    "areaid": 101280503,
    "countyname": "澄海"
  },
  {
    "areaid": 101280504,
    "countyname": "南澳"
  },
  {
    "areaid": 101280601,
    "countyname": "深圳"
  },
  {
    "areaid": 101280701,
    "countyname": "珠海"
  },
  {
    "areaid": 101280702,
    "countyname": "斗门"
  },
  {
    "areaid": 101280703,
    "countyname": "金湾"
  },
  {
    "areaid": 101280800,
    "countyname": "佛山"
  },
  {
    "areaid": 101280801,
    "countyname": "顺德"
  },
  {
    "areaid": 101280802,
    "countyname": "三水"
  },
  {
    "areaid": 101280803,
    "countyname": "南海"
  },
  {
    "areaid": 101280804,
    "countyname": "高明"
  },
  {
    "areaid": 101280901,
    "countyname": "肇庆"
  },
  {
    "areaid": 101280902,
    "countyname": "广宁"
  },
  {
    "areaid": 101280903,
    "countyname": "四会"
  },
  {
    "areaid": 101280905,
    "countyname": "德庆"
  },
  {
    "areaid": 101280906,
    "countyname": "怀集"
  },
  {
    "areaid": 101280907,
    "countyname": "封开"
  },
  {
    "areaid": 101280908,
    "countyname": "高要"
  },
  {
    "areaid": 101281001,
    "countyname": "湛江"
  },
  {
    "areaid": 101281002,
    "countyname": "吴川"
  },
  {
    "areaid": 101281003,
    "countyname": "雷州"
  },
  {
    "areaid": 101281004,
    "countyname": "徐闻"
  },
  {
    "areaid": 101281005,
    "countyname": "廉江"
  },
  {
    "areaid": 101281006,
    "countyname": "赤坎"
  },
  {
    "areaid": 101281007,
    "countyname": "遂溪"
  },
  {
    "areaid": 101281008,
    "countyname": "坡头"
  },
  {
    "areaid": 101281009,
    "countyname": "霞山"
  },
  {
    "areaid": 101281010,
    "countyname": "麻章"
  },
  {
    "areaid": 101281101,
    "countyname": "江门"
  },
  {
    "areaid": 101281103,
    "countyname": "开平"
  },
  {
    "areaid": 101281104,
    "countyname": "新会"
  },
  {
    "areaid": 101281105,
    "countyname": "恩平"
  },
  {
    "areaid": 101281106,
    "countyname": "台山"
  },
  {
    "areaid": 101281107,
    "countyname": "蓬江"
  },
  {
    "areaid": 101281108,
    "countyname": "鹤山"
  },
  {
    "areaid": 101281109,
    "countyname": "江海"
  },
  {
    "areaid": 101281201,
    "countyname": "河源"
  },
  {
    "areaid": 101281202,
    "countyname": "紫金"
  },
  {
    "areaid": 101281203,
    "countyname": "连平"
  },
  {
    "areaid": 101281204,
    "countyname": "和平"
  },
  {
    "areaid": 101281205,
    "countyname": "龙川"
  },
  {
    "areaid": 101281206,
    "countyname": "东源"
  },
  {
    "areaid": 101281301,
    "countyname": "清远"
  },
  {
    "areaid": 101281302,
    "countyname": "连南"
  },
  {
    "areaid": 101281303,
    "countyname": "连州"
  },
  {
    "areaid": 101281304,
    "countyname": "连山"
  },
  {
    "areaid": 101281305,
    "countyname": "阳山"
  },
  {
    "areaid": 101281306,
    "countyname": "佛冈"
  },
  {
    "areaid": 101281307,
    "countyname": "英德"
  },
  {
    "areaid": 101281308,
    "countyname": "清新"
  },
  {
    "areaid": 101281401,
    "countyname": "云浮"
  },
  {
    "areaid": 101281402,
    "countyname": "罗定"
  },
  {
    "areaid": 101281403,
    "countyname": "新兴"
  },
  {
    "areaid": 101281404,
    "countyname": "郁南"
  },
  {
    "areaid": 101281406,
    "countyname": "云安"
  },
  {
    "areaid": 101281501,
    "countyname": "潮州"
  },
  {
    "areaid": 101281502,
    "countyname": "饶平"
  },
  {
    "areaid": 101281503,
    "countyname": "潮安"
  },
  {
    "areaid": 101281601,
    "countyname": "东莞"
  },
  {
    "areaid": 101281701,
    "countyname": "中山"
  },
  {
    "areaid": 101281801,
    "countyname": "阳江"
  },
  {
    "areaid": 101281802,
    "countyname": "阳春"
  },
  {
    "areaid": 101281803,
    "countyname": "阳东"
  },
  {
    "areaid": 101281804,
    "countyname": "阳西"
  },
  {
    "areaid": 101281901,
    "countyname": "揭阳"
  },
  {
    "areaid": 101281902,
    "countyname": "揭西"
  },
  {
    "areaid": 101281903,
    "countyname": "普宁"
  },
  {
    "areaid": 101281904,
    "countyname": "惠来"
  },
  {
    "areaid": 101281905,
    "countyname": "揭东"
  },
  {
    "areaid": 101282001,
    "countyname": "茂名"
  },
  {
    "areaid": 101282002,
    "countyname": "高州"
  },
  {
    "areaid": 101282003,
    "countyname": "化州"
  },
  {
    "areaid": 101282004,
    "countyname": "电白"
  },
  {
    "areaid": 101282005,
    "countyname": "信宜"
  },
  {
    "areaid": 101282006,
    "countyname": "茂港"
  },
  {
    "areaid": 101282101,
    "countyname": "汕尾"
  },
  {
    "areaid": 101282102,
    "countyname": "海丰"
  },
  {
    "areaid": 101282103,
    "countyname": "陆丰"
  },
  {
    "areaid": 101282104,
    "countyname": "陆河"
  },
  {
    "areaid": 101290101,
    "countyname": "昆明"
  },
  {
    "areaid": 101290103,
    "countyname": "东川"
  },
  {
    "areaid": 101290104,
    "countyname": "寻甸"
  },
  {
    "areaid": 101290105,
    "countyname": "晋宁"
  },
  {
    "areaid": 101290106,
    "countyname": "宜良"
  },
  {
    "areaid": 101290107,
    "countyname": "石林"
  },
  {
    "areaid": 101290108,
    "countyname": "呈贡"
  },
  {
    "areaid": 101290109,
    "countyname": "富民"
  },
  {
    "areaid": 101290110,
    "countyname": "嵩明"
  },
  {
    "areaid": 101290111,
    "countyname": "禄劝"
  },
  {
    "areaid": 101290112,
    "countyname": "安宁"
  },
  {
    "areaid": 101290113,
    "countyname": "太华山"
  },
  {
    "areaid": 101290201,
    "countyname": "大理"
  },
  {
    "areaid": 101290202,
    "countyname": "云龙"
  },
  {
    "areaid": 101290203,
    "countyname": "漾濞"
  },
  {
    "areaid": 101290204,
    "countyname": "永平"
  },
  {
    "areaid": 101290205,
    "countyname": "宾川"
  },
  {
    "areaid": 101290206,
    "countyname": "弥渡"
  },
  {
    "areaid": 101290207,
    "countyname": "祥云"
  },
  {
    "areaid": 101290208,
    "countyname": "巍山"
  },
  {
    "areaid": 101290209,
    "countyname": "剑川"
  },
  {
    "areaid": 101290210,
    "countyname": "洱源"
  },
  {
    "areaid": 101290211,
    "countyname": "鹤庆"
  },
  {
    "areaid": 101290212,
    "countyname": "南涧"
  },
  {
    "areaid": 101290301,
    "countyname": "红河"
  },
  {
    "areaid": 101290302,
    "countyname": "石屏"
  },
  {
    "areaid": 101290303,
    "countyname": "建水"
  },
  {
    "areaid": 101290304,
    "countyname": "弥勒"
  },
  {
    "areaid": 101290305,
    "countyname": "元阳"
  },
  {
    "areaid": 101290306,
    "countyname": "绿春"
  },
  {
    "areaid": 101290307,
    "countyname": "开远"
  },
  {
    "areaid": 101290308,
    "countyname": "个旧"
  },
  {
    "areaid": 101290309,
    "countyname": "蒙自"
  },
  {
    "areaid": 101290310,
    "countyname": "屏边"
  },
  {
    "areaid": 101290311,
    "countyname": "泸西"
  },
  {
    "areaid": 101290312,
    "countyname": "金平"
  },
  {
    "areaid": 101290313,
    "countyname": "河口"
  },
  {
    "areaid": 101290401,
    "countyname": "曲靖"
  },
  {
    "areaid": 101290402,
    "countyname": "沾益"
  },
  {
    "areaid": 101290403,
    "countyname": "陆良"
  },
  {
    "areaid": 101290404,
    "countyname": "富源"
  },
  {
    "areaid": 101290405,
    "countyname": "马龙"
  },
  {
    "areaid": 101290406,
    "countyname": "师宗"
  },
  {
    "areaid": 101290407,
    "countyname": "罗平"
  },
  {
    "areaid": 101290408,
    "countyname": "会泽"
  },
  {
    "areaid": 101290409,
    "countyname": "宣威"
  },
  {
    "areaid": 101290501,
    "countyname": "保山"
  },
  {
    "areaid": 101290503,
    "countyname": "龙陵"
  },
  {
    "areaid": 101290504,
    "countyname": "施甸"
  },
  {
    "areaid": 101290505,
    "countyname": "昌宁"
  },
  {
    "areaid": 101290506,
    "countyname": "腾冲"
  },
  {
    "areaid": 101290601,
    "countyname": "文山"
  },
  {
    "areaid": 101290602,
    "countyname": "西畴"
  },
  {
    "areaid": 101290603,
    "countyname": "马关"
  },
  {
    "areaid": 101290604,
    "countyname": "麻栗坡"
  },
  {
    "areaid": 101290605,
    "countyname": "砚山"
  },
  {
    "areaid": 101290606,
    "countyname": "丘北"
  },
  {
    "areaid": 101290607,
    "countyname": "广南"
  },
  {
    "areaid": 101290608,
    "countyname": "富宁"
  },
  {
    "areaid": 101290701,
    "countyname": "玉溪"
  },
  {
    "areaid": 101290702,
    "countyname": "澄江"
  },
  {
    "areaid": 101290703,
    "countyname": "江川"
  },
  {
    "areaid": 101290704,
    "countyname": "通海"
  },
  {
    "areaid": 101290705,
    "countyname": "华宁"
  },
  {
    "areaid": 101290706,
    "countyname": "新平"
  },
  {
    "areaid": 101290707,
    "countyname": "易门"
  },
  {
    "areaid": 101290708,
    "countyname": "峨山"
  },
  {
    "areaid": 101290709,
    "countyname": "元江"
  },
  {
    "areaid": 101290801,
    "countyname": "楚雄"
  },
  {
    "areaid": 101290802,
    "countyname": "大姚"
  },
  {
    "areaid": 101290803,
    "countyname": "元谋"
  },
  {
    "areaid": 101290804,
    "countyname": "姚安"
  },
  {
    "areaid": 101290805,
    "countyname": "牟定"
  },
  {
    "areaid": 101290806,
    "countyname": "南华"
  },
  {
    "areaid": 101290807,
    "countyname": "武定"
  },
  {
    "areaid": 101290808,
    "countyname": "禄丰"
  },
  {
    "areaid": 101290809,
    "countyname": "双柏"
  },
  {
    "areaid": 101290810,
    "countyname": "永仁"
  },
  {
    "areaid": 101290901,
    "countyname": "普洱"
  },
  {
    "areaid": 101290902,
    "countyname": "景谷"
  },
  {
    "areaid": 101290903,
    "countyname": "景东"
  },
  {
    "areaid": 101290904,
    "countyname": "澜沧"
  },
  {
    "areaid": 101290906,
    "countyname": "墨江"
  },
  {
    "areaid": 101290907,
    "countyname": "江城"
  },
  {
    "areaid": 101290908,
    "countyname": "孟连"
  },
  {
    "areaid": 101290909,
    "countyname": "西盟"
  },
  {
    "areaid": 101290911,
    "countyname": "镇沅"
  },
  {
    "areaid": 101290912,
    "countyname": "宁洱"
  },
  {
    "areaid": 101291001,
    "countyname": "昭通"
  },
  {
    "areaid": 101291002,
    "countyname": "鲁甸"
  },
  {
    "areaid": 101291003,
    "countyname": "彝良"
  },
  {
    "areaid": 101291004,
    "countyname": "镇雄"
  },
  {
    "areaid": 101291005,
    "countyname": "威信"
  },
  {
    "areaid": 101291006,
    "countyname": "巧家"
  },
  {
    "areaid": 101291007,
    "countyname": "绥江"
  },
  {
    "areaid": 101291008,
    "countyname": "永善"
  },
  {
    "areaid": 101291009,
    "countyname": "盐津"
  },
  {
    "areaid": 101291010,
    "countyname": "大关"
  },
  {
    "areaid": 101291011,
    "countyname": "水富"
  },
  {
    "areaid": 101291101,
    "countyname": "临沧"
  },
  {
    "areaid": 101291102,
    "countyname": "沧源"
  },
  {
    "areaid": 101291103,
    "countyname": "耿马"
  },
  {
    "areaid": 101291104,
    "countyname": "双江"
  },
  {
    "areaid": 101291105,
    "countyname": "凤庆"
  },
  {
    "areaid": 101291106,
    "countyname": "永德"
  },
  {
    "areaid": 101291107,
    "countyname": "云县"
  },
  {
    "areaid": 101291108,
    "countyname": "镇康"
  },
  {
    "areaid": 101291201,
    "countyname": "怒江"
  },
  {
    "areaid": 101291203,
    "countyname": "福贡"
  },
  {
    "areaid": 101291204,
    "countyname": "兰坪"
  },
  {
    "areaid": 101291205,
    "countyname": "泸水"
  },
  {
    "areaid": 101291206,
    "countyname": "六库"
  },
  {
    "areaid": 101291207,
    "countyname": "贡山"
  },
  {
    "areaid": 101291301,
    "countyname": "香格里拉"
  },
  {
    "areaid": 101291302,
    "countyname": "德钦"
  },
  {
    "areaid": 101291303,
    "countyname": "维西"
  },
  {
    "areaid": 101291304,
    "countyname": "中甸"
  },
  {
    "areaid": 101291401,
    "countyname": "丽江"
  },
  {
    "areaid": 101291402,
    "countyname": "永胜"
  },
  {
    "areaid": 101291403,
    "countyname": "华坪"
  },
  {
    "areaid": 101291404,
    "countyname": "宁蒗"
  },
  {
    "areaid": 101291501,
    "countyname": "德宏"
  },
  {
    "areaid": 101291503,
    "countyname": "陇川"
  },
  {
    "areaid": 101291504,
    "countyname": "盈江"
  },
  {
    "areaid": 101291506,
    "countyname": "瑞丽"
  },
  {
    "areaid": 101291507,
    "countyname": "梁河"
  },
  {
    "areaid": 101291508,
    "countyname": "潞西"
  },
  {
    "areaid": 101291601,
    "countyname": "景洪"
  },
  {
    "areaid": 101291603,
    "countyname": "勐海"
  },
  {
    "areaid": 101291605,
    "countyname": "勐腊"
  },
  {
    "areaid": 101300101,
    "countyname": "南宁"
  },
  {
    "areaid": 101300103,
    "countyname": "邕宁"
  },
  {
    "areaid": 101300104,
    "countyname": "横县"
  },
  {
    "areaid": 101300105,
    "countyname": "隆安"
  },
  {
    "areaid": 101300106,
    "countyname": "马山"
  },
  {
    "areaid": 101300107,
    "countyname": "上林"
  },
  {
    "areaid": 101300108,
    "countyname": "武鸣"
  },
  {
    "areaid": 101300109,
    "countyname": "宾阳"
  },
  {
    "areaid": 101300201,
    "countyname": "崇左"
  },
  {
    "areaid": 101300202,
    "countyname": "天等"
  },
  {
    "areaid": 101300203,
    "countyname": "龙州"
  },
  {
    "areaid": 101300204,
    "countyname": "凭祥"
  },
  {
    "areaid": 101300205,
    "countyname": "大新"
  },
  {
    "areaid": 101300206,
    "countyname": "扶绥"
  },
  {
    "areaid": 101300207,
    "countyname": "宁明"
  },
  {
    "areaid": 101300301,
    "countyname": "柳州"
  },
  {
    "areaid": 101300302,
    "countyname": "柳城"
  },
  {
    "areaid": 101300304,
    "countyname": "鹿寨"
  },
  {
    "areaid": 101300305,
    "countyname": "柳江"
  },
  {
    "areaid": 101300306,
    "countyname": "融安"
  },
  {
    "areaid": 101300307,
    "countyname": "融水"
  },
  {
    "areaid": 101300308,
    "countyname": "三江"
  },
  {
    "areaid": 101300401,
    "countyname": "来宾"
  },
  {
    "areaid": 101300402,
    "countyname": "忻城"
  },
  {
    "areaid": 101300403,
    "countyname": "金秀"
  },
  {
    "areaid": 101300404,
    "countyname": "象州"
  },
  {
    "areaid": 101300405,
    "countyname": "武宣"
  },
  {
    "areaid": 101300406,
    "countyname": "合山"
  },
  {
    "areaid": 101300501,
    "countyname": "桂林"
  },
  {
    "areaid": 101300503,
    "countyname": "龙胜"
  },
  {
    "areaid": 101300504,
    "countyname": "永福"
  },
  {
    "areaid": 101300505,
    "countyname": "临桂"
  },
  {
    "areaid": 101300506,
    "countyname": "兴安"
  },
  {
    "areaid": 101300507,
    "countyname": "灵川"
  },
  {
    "areaid": 101300508,
    "countyname": "全州"
  },
  {
    "areaid": 101300509,
    "countyname": "灌阳"
  },
  {
    "areaid": 101300510,
    "countyname": "阳朔"
  },
  {
    "areaid": 101300511,
    "countyname": "恭城"
  },
  {
    "areaid": 101300512,
    "countyname": "平乐"
  },
  {
    "areaid": 101300513,
    "countyname": "荔浦"
  },
  {
    "areaid": 101300514,
    "countyname": "资源"
  },
  {
    "areaid": 101300601,
    "countyname": "梧州"
  },
  {
    "areaid": 101300602,
    "countyname": "藤县"
  },
  {
    "areaid": 101300604,
    "countyname": "苍梧"
  },
  {
    "areaid": 101300605,
    "countyname": "蒙山"
  },
  {
    "areaid": 101300606,
    "countyname": "岑溪"
  },
  {
    "areaid": 101300701,
    "countyname": "贺州"
  },
  {
    "areaid": 101300702,
    "countyname": "昭平"
  },
  {
    "areaid": 101300703,
    "countyname": "富川"
  },
  {
    "areaid": 101300704,
    "countyname": "钟山"
  },
  {
    "areaid": 101300801,
    "countyname": "贵港"
  },
  {
    "areaid": 101300802,
    "countyname": "桂平"
  },
  {
    "areaid": 101300803,
    "countyname": "平南"
  },
  {
    "areaid": 101300901,
    "countyname": "玉林"
  },
  {
    "areaid": 101300902,
    "countyname": "博白"
  },
  {
    "areaid": 101300903,
    "countyname": "北流"
  },
  {
    "areaid": 101300904,
    "countyname": "容县"
  },
  {
    "areaid": 101300905,
    "countyname": "陆川"
  },
  {
    "areaid": 101300906,
    "countyname": "兴业"
  },
  {
    "areaid": 101301001,
    "countyname": "百色"
  },
  {
    "areaid": 101301002,
    "countyname": "那坡"
  },
  {
    "areaid": 101301003,
    "countyname": "田阳"
  },
  {
    "areaid": 101301004,
    "countyname": "德保"
  },
  {
    "areaid": 101301005,
    "countyname": "靖西"
  },
  {
    "areaid": 101301006,
    "countyname": "田东"
  },
  {
    "areaid": 101301007,
    "countyname": "平果"
  },
  {
    "areaid": 101301008,
    "countyname": "隆林"
  },
  {
    "areaid": 101301009,
    "countyname": "西林"
  },
  {
    "areaid": 101301010,
    "countyname": "乐业"
  },
  {
    "areaid": 101301011,
    "countyname": "凌云"
  },
  {
    "areaid": 101301012,
    "countyname": "田林"
  },
  {
    "areaid": 101301101,
    "countyname": "钦州"
  },
  {
    "areaid": 101301102,
    "countyname": "浦北"
  },
  {
    "areaid": 101301103,
    "countyname": "灵山"
  },
  {
    "areaid": 101301201,
    "countyname": "河池"
  },
  {
    "areaid": 101301202,
    "countyname": "天峨"
  },
  {
    "areaid": 101301203,
    "countyname": "东兰"
  },
  {
    "areaid": 101301204,
    "countyname": "巴马"
  },
  {
    "areaid": 101301205,
    "countyname": "环江"
  },
  {
    "areaid": 101301206,
    "countyname": "罗城"
  },
  {
    "areaid": 101301207,
    "countyname": "宜州"
  },
  {
    "areaid": 101301208,
    "countyname": "凤山"
  },
  {
    "areaid": 101301209,
    "countyname": "南丹"
  },
  {
    "areaid": 101301210,
    "countyname": "都安"
  },
  {
    "areaid": 101301211,
    "countyname": "大化"
  },
  {
    "areaid": 101301301,
    "countyname": "北海"
  },
  {
    "areaid": 101301302,
    "countyname": "合浦"
  },
  {
    "areaid": 101301303,
    "countyname": "涠洲岛"
  },
  {
    "areaid": 101301401,
    "countyname": "防城港"
  },
  {
    "areaid": 101301402,
    "countyname": "上思"
  },
  {
    "areaid": 101301403,
    "countyname": "东兴"
  },
  {
    "areaid": 101301405,
    "countyname": "防城"
  },
  {
    "areaid": 101310101,
    "countyname": "海口"
  },
  {
    "areaid": 101310201,
    "countyname": "三亚"
  },
  {
    "areaid": 101310202,
    "countyname": "东方"
  },
  {
    "areaid": 101310203,
    "countyname": "临高"
  },
  {
    "areaid": 101310204,
    "countyname": "澄迈"
  },
  {
    "areaid": 101310205,
    "countyname": "儋州"
  },
  {
    "areaid": 101310206,
    "countyname": "昌江"
  },
  {
    "areaid": 101310207,
    "countyname": "白沙"
  },
  {
    "areaid": 101310208,
    "countyname": "琼中"
  },
  {
    "areaid": 101310209,
    "countyname": "定安"
  },
  {
    "areaid": 101310210,
    "countyname": "屯昌"
  },
  {
    "areaid": 101310211,
    "countyname": "琼海"
  },
  {
    "areaid": 101310212,
    "countyname": "文昌"
  },
  {
    "areaid": 101310214,
    "countyname": "保亭"
  },
  {
    "areaid": 101310215,
    "countyname": "万宁"
  },
  {
    "areaid": 101310216,
    "countyname": "陵水"
  },
  {
    "areaid": 101310217,
    "countyname": "西沙"
  },
  {
    "areaid": 101310220,
    "countyname": "南沙"
  },
  {
    "areaid": 101310221,
    "countyname": "乐东"
  },
  {
    "areaid": 101310222,
    "countyname": "五指山"
  },
  {
    "areaid": 101310224,
    "countyname": "中沙"
  },
  {
    "areaid": 101320101,
    "countyname": "香港"
  },
  {
    "areaid": 101320102,
    "countyname": "九龙"
  },
  {
    "areaid": 101320103,
    "countyname": "新界"
  },
  {
    "areaid": 101330101,
    "countyname": "澳门"
  },
  {
    "areaid": 101330102,
    "countyname": "氹仔岛"
  },
  {
    "areaid": 101330103,
    "countyname": "路环岛"
  },
  {
    "areaid": 101340101,
    "countyname": "台北"
  },
  {
    "areaid": 101340102,
    "countyname": "桃园"
  },
  {
    "areaid": 101340103,
    "countyname": "新竹"
  },
  {
    "areaid": 101340104,
    "countyname": "宜兰"
  },
  {
    "areaid": 101340201,
    "countyname": "高雄"
  },
  {
    "areaid": 101340202,
    "countyname": "嘉义"
  },
  {
    "areaid": 101340203,
    "countyname": "台南"
  },
  {
    "areaid": 101340204,
    "countyname": "台东"
  },
  {
    "areaid": 101340205,
    "countyname": "屏东"
  },
  {
    "areaid": 101340401,
    "countyname": "台中"
  },
  {
    "areaid": 101340402,
    "countyname": "苗栗"
  },
  {
    "areaid": 101340403,
    "countyname": "彰化"
  },
  {
    "areaid": 101340404,
    "countyname": "南投"
  },
  {
    "areaid": 101340405,
    "countyname": "花莲"
  },
  {
    "areaid": 101340406,
    "countyname": "云林"
  }
]

getWeather('北京')