/**
 * Created by zmk on 2016/10/29.
 */
//生成器 Filter
function* filter (test,iterator){
    for(let item of iterator){
        if(test(item))
        {
            yield item;
        }
    }
}
class Student{
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
}

//拆分数组方法1
function splitIntoRows(icons, rowlength){
    var rows = [];
    for(let i = 0; i < icons.length; i += rowlength){
        rows.push(icons.slice(i, i + rowlength));
    }
    return rows;
}
//生成器 拆分数组方法
function* splitIntoRows(icons, rowlength){
    for(var i = 0, len = icons.length; i < len; i += rowlength){
        yield icons.slice(i, i + rowlength);
    }
}

//字符串模板中的标签模板，的SaferHTML标签实现
function SaferHTML(templateData) {
  var s = templateData[0];
  for (var i = 1; i < arguments.length; i++) {
    var arg = String(arguments[i]);

    // 转义占位符中的特殊字符。
    s += arg.replace(/&/g, "&")
            .replace(/</g, "<")
            .replace(/</g, ">");

    // 不转义模板中的特殊字符。
    s += templateData[i];
  }
  return s;
}


//原始方法，使用arguments对比不定参数...
function containsAll(haystack){
	for(var i=1;i<arguments.length;i++)
	{
		var needle=arguments[i];
		if(haystack.indexOf(needle)===-1){
			return false;
		}
	}
	return true;
}
//不定参数方法，测试containsAll("banana", "b", "nan")
function containsAll(haystack,...needles){
	for(var needle of needles)
	{
		if(haystack.indexOf(needle)===-1)
		{
			return false;
		}
	}
	return true;
}